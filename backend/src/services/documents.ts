import path from 'node:path'
import { unlink } from 'node:fs/promises'
import { nanoid } from 'nanoid'
import { db, type DocumentRow } from '../db.ts'
import { convertPdfToMarkdown } from './pdf-to-markdown.ts'
import { UPLOADS_DIR } from '../config.ts'

type DocumentListItem = Omit<DocumentRow, 'stored_filename' | 'filepath' | 'markdown'>

interface PlanSummaryRow {
  id: number
  difficulty: string
  status: string
}

export async function listDocuments() {
  const rows = db
    .prepare(
      `SELECT id, filename, title, markdown_chars, status, error, created_at
       FROM documents ORDER BY datetime(created_at) DESC`
    )
    .all() as DocumentListItem[]

  return rows.map((r) => {
    const planRow = db
      .prepare(
        `SELECT id, difficulty, status FROM lesson_plans WHERE document_id = ? ORDER BY datetime(created_at) DESC LIMIT 1`
      )
      .get(r.id) as PlanSummaryRow | undefined

    const attemptResult = db
      .prepare(
        `SELECT COUNT(*) AS c FROM attempts a JOIN lesson_plans p ON p.id = a.lesson_plan_id WHERE p.document_id = ?`
      )
      .get(r.id) as { c: number }

    const attemptCount = attemptResult.c
    return {
      ...r,
      plan: planRow
        ? {
            id: planRow.id,
            difficulty: planRow.difficulty,
            status: planRow.status
          }
        : null,
      attemptCount
    }
  })
}

export async function getDocument(id: number) {
  const row = db.prepare(`SELECT * FROM documents WHERE id = ?`).get(id) as DocumentRow | undefined
  if (!row) return null
  return {
    id: row.id,
    filename: row.filename,
    title: row.title,
    status: row.status,
    markdown_chars: row.markdown_chars,
    created_at: row.created_at,
    error: row.error
  }
}

type Markdown = { markdown: string | null } | undefined

export async function getDocumentMarkdown(id: number): Promise<string | null> {
  const row = db.prepare(`SELECT markdown FROM documents WHERE id = ?`).get(id) as Markdown
  return row?.markdown ?? null
}

export async function uploadAndConvert(filename: string, buffer: Buffer): Promise<DocumentRow> {
  const storedFilename = `${Date.now()}-${nanoid(8)}-${filename.replace(/[^a-zA-Z0-9.\-_ ]/g, '')}`
  const filepath = path.join(UPLOADS_DIR, storedFilename)
  const { writeFile } = await import('node:fs/promises')
  await writeFile(filepath, buffer)

  const doc = db
    .prepare(
      `INSERT INTO documents (filename, stored_filename, filepath, status)
       VALUES (?, ?, ?, 'processing')
       RETURNING *`
    )
    .get(filename, storedFilename, filepath) as DocumentRow

  const result = await convertPdfToMarkdown(filepath)
  if (!result.ok) {
    const errMsg = result.error instanceof Error ? result.error.message : String(result.error ?? 'Unknown error')
    db.prepare(`UPDATE documents SET status = 'failed', error = ? WHERE id = ?`).run(errMsg, doc.id)
    throw Error('Error occured while converting PDF to markdown')
  }

  db.prepare(`UPDATE documents SET status = 'ready', markdown = ?, markdown_chars = ?, error = NULL WHERE id = ?`).run(
    result.markdown,
    result.markdown.length,
    doc.id
  )
  return doc
}

export async function deleteDocument(id: number): Promise<boolean> {
  const row = db.prepare(`SELECT filepath FROM documents WHERE id = ?`).get(id) as { filepath: string } | undefined
  if (!row) return false

  try {
    await unlink(row.filepath)
  } catch {
    // File may already be missing; proceed with DB cleanup
  }

  db.prepare(`DELETE FROM documents WHERE id = ?`).run(id)
  return true
}
