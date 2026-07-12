import { db, type DocumentRow, type LessonPlanRow } from '../db.ts'
import { generatePlan } from '../ai/plan.ts'
import { NotFoundError, BadRequestError } from '../errors.ts'

type Difficulty = 'beginner' | 'intermediate' | 'advanced'
type PlanStatus = 'draft' | 'approved' | 'completed'

export interface Objective {
  text: string
  topic: string
  question_count: number
}

export async function createPlan(documentId: number) {
  const doc = db.prepare(`SELECT * FROM documents WHERE id = ?`).get(documentId) as DocumentRow | undefined
  if (!doc) throw new NotFoundError('Document not found')
  if (doc.status !== 'ready' || !doc.markdown) {
    throw new BadRequestError(`Document is not ready for plan generation (status: ${doc.status})`)
  }

  const plan = await generatePlan(doc.markdown, doc.filename)
  const objectivesJson = JSON.stringify(plan.objectives)
  const res = db
    .prepare(
      `INSERT INTO lesson_plans (document_id, title, description, objectives, difficulty, status)
       VALUES (?, ?, ?, ?, ?, 'draft')
       RETURNING *`
    )
    .get(documentId, plan.title, plan.description, objectivesJson, plan.difficulty) as LessonPlanRow

  return rowToPlan(res)
}

export async function revisePlan(planId: number, feedback: string) {
  const row = db.prepare(`SELECT * FROM lesson_plans WHERE id = ?`).get(planId) as LessonPlanRow | undefined
  if (!row) throw new NotFoundError('Plan not found')
  if (row.status !== 'draft') {
    throw new BadRequestError('Only draft lesson plans can be revised')
  }

  const doc = db.prepare(`SELECT * FROM documents WHERE id = ?`).get(row.document_id) as DocumentRow | undefined
  if (!doc) throw new NotFoundError('Document not found')
  if (!doc.markdown) throw new BadRequestError('Document has no markdown content')

  const plan = await generatePlan(doc.markdown, doc.filename, feedback)
  const objectivesJson = JSON.stringify(plan.objectives)

  // Discard any quizzes generated for the previous draft.
  db.prepare(`DELETE FROM quiz_questions WHERE lesson_plan_id = ?`).run(planId)

  const updated = db
    .prepare(
      `UPDATE lesson_plans
       SET title = ?, description = ?, objectives = ?, difficulty = ?, revision_count = revision_count + 1, revision_feedback = ?
       WHERE id = ?
       RETURNING *`
    )
    .get(plan.title, plan.description, objectivesJson, plan.difficulty, feedback, planId) as LessonPlanRow

  return rowToPlan(updated)
}

export async function getPlan(planId: number) {
  const row = db.prepare(`SELECT * FROM lesson_plans WHERE id = ?`).get(planId) as LessonPlanRow | undefined
  if (!row) return null
  const doc = db.prepare(`SELECT filename FROM documents WHERE id = ?`).get(row.document_id)
  return {
    ...rowToPlan(row),
    document_filename: (doc as { filename: string } | undefined)?.filename
  }
}

export async function getPlansForDocument(documentId: number) {
  const rows = db
    .prepare(`SELECT * FROM lesson_plans WHERE document_id = ? ORDER BY datetime(created_at) DESC`)
    .all(documentId) as LessonPlanRow[]
  return rows.map(rowToPlan)
}

export async function approvePlan(planId: number) {
  const row = db.prepare(`SELECT * FROM lesson_plans WHERE id = ?`).get(planId) as LessonPlanRow | undefined
  if (!row) throw new NotFoundError('Plan not found')
  if (row.status === 'draft') {
    db.prepare(`UPDATE lesson_plans SET status = 'approved' WHERE id = ?`).run(planId)
  }
  return getPlan(planId)
}

function rowToPlan(row: LessonPlanRow) {
  return {
    id: row.id,
    document_id: row.document_id,
    title: row.title,
    description: row.description,
    difficulty: row.difficulty as Difficulty,
    objectives: JSON.parse(row.objectives) as Objective[],
    status: row.status as PlanStatus,
    revision_count: row.revision_count,
    revision_feedback: row.revision_feedback,
    created_at: row.created_at
  }
}
