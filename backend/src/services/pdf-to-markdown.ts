import { execFile } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { createReadStream } from 'node:fs'
import { resolve, dirname, basename, extname } from 'node:path'
import { promisify } from 'node:util'
import { ROOT_DIR, PDF_PARSER, LLAMACLOUD_API_KEY } from '../config.ts'

const execFileAsync = promisify(execFile)

export const PDF_TO_MARKDOWN_DIR = resolve(ROOT_DIR, '..', 'pdf-to-markdown')
export const PYTHON_SCRIPT = resolve(PDF_TO_MARKDOWN_DIR, 'convert-docling.py')
export const PYTHON_BIN = process.env.PYTHON_BIN || 'python3'

export interface ConvertResult {
  ok: boolean
  markdown: string
  error?: any
}

export async function convertPdfToMarkdown(inputPath: string): Promise<ConvertResult> {
  if (PDF_PARSER === 'llamacloud') {
    return convertWithLlamaCloud(inputPath)
  }
  return convertWithLocal(inputPath)
}

async function convertWithLocal(inputPath: string): Promise<ConvertResult> {
  const outputPath = resolve(dirname(inputPath), `${basename(inputPath, extname(inputPath))}.md`)

  try {
    const { stdout, stderr } = await execFileAsync(
      PYTHON_BIN,
      [PYTHON_SCRIPT, '--input', inputPath, '--output', outputPath],
      { timeout: 600000, maxBuffer: 50 * 1024 * 1024 }
    )

    if (stdout) console.log('Python converter output:\n', stdout.trim())
    if (stderr) console.warn(`Python converter warning\n: ${stderr.trim()}`)

    const markdown = await readFile(outputPath, 'utf-8')
    return { ok: true, markdown }
  } catch (err) {
    return { ok: false, markdown: '', error: err }
  }
}

async function convertWithLlamaCloud(inputPath: string): Promise<ConvertResult> {
  if (!LLAMACLOUD_API_KEY) {
    return { ok: false, markdown: '', error: 'LLAMACLOUD_API_KEY is not set' }
  }

  try {
    const { default: LlamaCloud } = await import('@llamaindex/llama-cloud')
    const client = new LlamaCloud({ apiKey: LLAMACLOUD_API_KEY })

    const fileObj = await client.files.create({
      file: createReadStream(inputPath),
      purpose: 'parse',
    })

    console.log(`LlamaCloud: uploaded file ${fileObj.id}`)

    const result = await client.parsing.parse({
      file_id: fileObj.id,
      tier: 'agentic',
      version: 'latest',
      expand: ['markdown_full'],
    })

    const markdown = result.markdown_full ?? ''
    console.log(`LlamaCloud: parsed ${markdown.length} chars`)
    return { ok: true, markdown }
  } catch (err) {
    return { ok: false, markdown: '', error: err }
  }
}
