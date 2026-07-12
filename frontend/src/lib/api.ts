import type {
  AttemptListItem,
  AttemptSummary,
  ChatMessage,
  DocumentDetail,
  DocumentSummary,
  Plan,
  QuizDTO
} from './types'

const BASE = window.location.port === '5173' ? 'http://localhost:3003' : ''

let authToken: string | null = localStorage.getItem('auth_token')

export function getToken(): string | null {
  return authToken
}

export function setToken(token: string): void {
  authToken = token
  localStorage.setItem('auth_token', token)
}

export function clearToken(): void {
  authToken = null
  localStorage.removeItem('auth_token')
}

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export async function verifyPassword(password: string): Promise<void> {
  const res = await fetch(`${BASE}/api/auth/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  })
  if (!res.ok) {
    const body = await res.json()
    throw new ApiError(body.error ?? 'Invalid password', res.status)
  }
  setToken(password)
}

async function jsonFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const headers: Record<string, string> = {}
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`
  }
  if (init?.method == 'POST' && init?.body != null) {
    headers['Content-Type'] = 'application/json'
  }
  const res = await fetch(`${BASE}${path}`, { ...init, headers, body: init?.body })
  if (res.status === 401) {
    clearToken()
    window.location.reload()
    throw new ApiError('Session expired', 401)
  }
  if (!res.ok) {
    let msg = `Request failed (${res.status})`
    const body = await res.json()
    msg = body.error ?? msg
    throw new ApiError(msg, res.status)
  }
  if (res.status === 204) return undefined as unknown as T
  return (await res.json()) as T
}

export async function listDocuments(): Promise<DocumentSummary[]> {
  return jsonFetch<DocumentSummary[]>('/api/documents')
}

export async function getDocument(id: number): Promise<DocumentDetail> {
  return jsonFetch<DocumentDetail>(`/api/documents/${id}`)
}

export async function deleteDocument(id: number): Promise<void> {
  return jsonFetch<void>(`/api/documents/${id}`, { method: 'DELETE' })
}

export async function uploadPdf(file: File): Promise<DocumentDetail> {
  const form = new FormData()
  form.append('file', file)
  const headers: Record<string, string> = {}
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`
  }
  const res = await fetch(`${BASE}/api/documents/upload`, { method: 'POST', body: form, headers })
  if (res.status === 401) {
    clearToken()
    window.location.reload()
    throw new ApiError('Session expired', 401)
  }
  if (!res.ok) {
    let msg = 'Upload failed'
    const body = await res.json()
    msg = body.error ?? msg
    throw new ApiError(msg, res.status)
  }
  return (await res.json()) as DocumentDetail
}

export async function listPlansForDocument(id: number): Promise<Plan[]> {
  return jsonFetch<Plan[]>(`/api/documents/${id}/plans`)
}

export async function createPlan(documentId: number): Promise<Plan> {
  return jsonFetch<Plan>(`/api/documents/${documentId}/plans`, { method: 'POST' })
}

export async function getPlan(planId: number): Promise<Plan> {
  return jsonFetch<Plan>(`/api/lesson-plans/${planId}`)
}

export async function approvePlan(planId: number): Promise<Plan> {
  return jsonFetch<Plan>(`/api/lesson-plans/${planId}/approve`, { method: 'POST' })
}

export async function revisePlan(planId: number, feedback: string): Promise<Plan> {
  return jsonFetch<Plan>(`/api/lesson-plans/${planId}/revise`, { method: 'POST', body: JSON.stringify({ feedback }) })
}

export async function listQuizzes(planId: number): Promise<QuizDTO[]> {
  return jsonFetch<QuizDTO[]>(`/api/lesson-plans/${planId}/quizzes`)
}

export async function generateQuiz(planId: number, objectiveIndex: number, questionIndex: number): Promise<QuizDTO> {
  const body = JSON.stringify({ objectiveIndex, questionIndex })
  return jsonFetch<QuizDTO>(`/api/lesson-plans/${planId}/quizzes`, { method: 'POST', body })
}

interface Explanation {
  explanation: string
  correctIndex: number
}

export async function getExplanation(quizId: number): Promise<Explanation> {
  return jsonFetch(`/api/quizzes/${quizId}/explain`, { method: 'POST', body: '{}' })
}

interface AnswerData {
  correct: boolean
}

export async function checkAnswer(quizId: number, learnerIndex: number): Promise<AnswerData> {
  return jsonFetch(`/api/quizzes/${quizId}/check`, { method: 'POST', body: JSON.stringify({ learnerIndex }) })
}

export async function getHint(quizId: number, previousGuessIndex: number | null): Promise<{ hint: string }> {
  return jsonFetch(`/api/quizzes/${quizId}/hint`, { method: 'POST', body: JSON.stringify({ previousGuessIndex }) })
}

interface Message {
  message: string
}

export async function learnMore(quizId: number, learnerQuestion: string, history: ChatMessage[]): Promise<Message> {
  const body = JSON.stringify({ learnerQuestion, history })
  return jsonFetch(`/api/quizzes/${quizId}/ai-help`, { method: 'POST', body })
}

interface Attempts {
  quizId: number
  learnerIndex: number | null
  attempts: number
}

export async function completeAttempt(planId: number, answers: Array<Attempts>): Promise<AttemptSummary> {
  return jsonFetch(`/api/lesson-plans/${planId}/complete`, { method: 'POST', body: JSON.stringify({ answers }) })
}

export async function listAttempts(planId: number): Promise<AttemptListItem[]> {
  return jsonFetch<AttemptListItem[]>(`/api/lesson-plans/${planId}/attempts`)
}

export async function getAttempt(attemptId: number): Promise<AttemptSummary> {
  return jsonFetch<AttemptSummary>(`/api/attempts/${attemptId}`)
}
