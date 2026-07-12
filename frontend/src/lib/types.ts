export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface Objective {
  text: string
  topic: string
  question_count: number
}

export interface DocumentSummary {
  id: number
  filename: string
  title: string
  markdown_chars: number
  status: 'processing' | 'ready' | 'failed' | 'uploaded'
  error: string | null
  created_at: string
  plan: {
    id: number
    difficulty: Difficulty
    status: 'draft' | 'approved' | 'completed'
  } | null
  attemptCount: number
}

export interface DocumentDetail {
  id: number
  filename: string
  title: string
  status: 'processing' | 'ready' | 'failed' | 'uploaded'
  markdown_chars: number
  created_at: string
  error: string | null
}

export interface Plan {
  id: number
  document_id: number
  document_filename?: string
  title: string
  description: string
  difficulty: Difficulty
  objectives: Objective[]
  status: 'draft' | 'approved' | 'completed'
  revision_count: number
  revision_feedback: string | null
  created_at: string
}

export interface QuizDTO {
  id: number
  objectiveIndex: number
  questionIndex: number
  objectiveText: string
  question: string
  options: string[]
  hint: string
}

export interface AttemptSummary {
  score: number
  total: number
  summary: string
  studyTips: string[]
  weakTopics: string[]
  strengths: string[]
  answers: Array<{
    question: string
    options: string[]
    correctIndex: number
    learnerIndex: number | null
    attempts: number
    objectiveText: string
  }>
}

export interface AttemptListItem {
  id: number
  lesson_plan_id: number
  score: number
  total: number
  summary: string
  study_tips: string[]
  created_at: string
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}
