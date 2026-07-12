import Database from 'better-sqlite3'
import { readFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { DB_PATH, ROOT_DIR } from './config.ts'

mkdirSync(dirname(DB_PATH), { recursive: true })

export const db = new Database(DB_PATH)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

export const SCHEMA_SQL = readFileSync(join(ROOT_DIR, 'src', 'schema.sql'), { encoding: 'utf-8' })

export interface DocumentRow {
  id: number
  filename: string
  stored_filename: string
  filepath: string
  title: string
  markdown: string | null
  markdown_chars: number
  status: string
  error: string | null
  created_at: string
}

export interface LessonPlanRow {
  id: number
  document_id: number
  title: string
  description: string
  objectives: string
  difficulty: string
  status: string
  revision_count: number
  revision_feedback: string | null
  created_at: string
}

export interface QuizQuestionRow {
  id: number
  lesson_plan_id: number
  objective_index: number
  question_index: number
  objective_text: string
  question: string
  options: string
  correct_index: number
  explanation: string
  hint: string
  created_at: string
}

export interface AttemptRow {
  id: number
  lesson_plan_id: number
  score: number
  total: number
  answers: string
  summary: string
  study_tips: string
  weak_topics: string
  strengths: string
  created_at: string
}
