import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const UPLOADS_DIR = resolve(ROOT_DIR, 'uploads')
export const DB_PATH = resolve(ROOT_DIR, 'data', 'learning.db')

export const PORT = parseInt(process.env.PORT ?? '3003', 10)
export const HOST = process.env.HOST ?? '0.0.0.0'

export const OPENAI_ENDPOINT = process.env.OPENAI_ENDPOINT
export const OPENAI_KEY = process.env.OPENAI_KEY
export const OPENAI_MODEL = process.env.OPENAI_MODEL
export const PASSWORD = process.env.PASSWORD

export const PDF_PARSER = process.env.PDF_PARSER ?? 'local'
export const LLAMACLOUD_API_KEY = process.env.LLAMACLOUD_API_KEY
