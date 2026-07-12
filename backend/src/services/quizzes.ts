import { db, type QuizQuestionRow } from '../db.ts'
import { generateQuiz } from '../ai/quiz.ts'
import { generateRetryHint, explainCorrect, aiChat } from '../ai/feedback.ts'
import { getPlan } from './plans.ts'
import { getDocumentMarkdown } from './documents.ts'
import { NotFoundError, BadRequestError } from '../errors.ts'

export interface QuizDTO {
  id: number
  objectiveIndex: number
  questionIndex: number
  objectiveText: string
  question: string
  options: string[]
  hint: string
}

export async function getOrCreateQuiz(planId: number, objectiveIndex: number, questionIndex: number): Promise<QuizDTO> {
  const plan = await getPlan(planId)
  if (!plan) throw new NotFoundError('Plan not found')
  const objective = plan.objectives[objectiveIndex]
  if (!objective) throw new NotFoundError(`Objective ${objectiveIndex} not found`)

  const existing = db
    .prepare(`SELECT * FROM quiz_questions WHERE lesson_plan_id = ? AND objective_index = ? AND question_index = ?`)
    .get(planId, objectiveIndex, questionIndex) as QuizQuestionRow | undefined

  if (existing) {
    return rowToDto(existing)
  }

  const markdown = await getDocumentMarkdown(plan.document_id)
  if (!markdown) throw new BadRequestError('Source document has no markdown content')
  const quiz = await generateQuiz(markdown, objective.text, objective.topic, questionIndex)

  const res = db
    .prepare(
      `INSERT INTO quiz_questions (lesson_plan_id, objective_index, question_index, objective_text, question, options, correct_index, explanation, hint)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
       RETURNING id`
    )
    .get(
      planId,
      objectiveIndex,
      questionIndex,
      objective.text,
      quiz.question,
      JSON.stringify(quiz.options),
      quiz.correct_index,
      quiz.explanation,
      quiz.hint
    ) as { id: number }

  return {
    id: res.id,
    objectiveIndex,
    questionIndex,
    objectiveText: objective.text,
    question: quiz.question,
    options: quiz.options,
    hint: quiz.hint
  }
}

export async function getAllQuizzes(planId: number): Promise<QuizDTO[]> {
  const plan = await getPlan(planId)
  if (!plan) return []
  const rows = db
    .prepare(`SELECT * FROM quiz_questions WHERE lesson_plan_id = ? ORDER BY objective_index ASC, question_index ASC`)
    .all(planId) as QuizQuestionRow[]
  return rows.map(rowToDto)
}

export async function getQuizInternal(quizId: number): Promise<QuizQuestionRow | null> {
  return (db.prepare(`SELECT * FROM quiz_questions WHERE id = ?`).get(quizId) as QuizQuestionRow | undefined) ?? null
}

export async function getHint(quizId: number, previousGuessIndex: number | null): Promise<string> {
  const quiz = await getQuizInternal(quizId)
  if (!quiz) throw new NotFoundError('Quiz not found')
  const plan = await getPlan(quiz.lesson_plan_id)
  if (!plan) throw new NotFoundError('Plan not found')
  const markdown = await getDocumentMarkdown(plan.document_id)
  if (!markdown) throw new BadRequestError('Source document has no markdown content')
  const options = JSON.parse(quiz.options) as string[]
  return generateRetryHint(
    markdown,
    quiz.question,
    options,
    previousGuessIndex !== null ? options[previousGuessIndex] : null
  )
}

interface ExplanationResult {
  explanation: string
  correctIndex: number
}

export async function getExplanation(quizId: number): Promise<ExplanationResult> {
  const quiz = await getQuizInternal(quizId)
  if (!quiz) throw new NotFoundError('Quiz not found')
  const plan = await getPlan(quiz.lesson_plan_id)
  if (!plan) throw new NotFoundError('Plan not found')
  const markdown = await getDocumentMarkdown(plan.document_id)
  if (!markdown) throw new BadRequestError('Source document has no markdown content')
  const options = JSON.parse(quiz.options) as string[]
  const correct = options[quiz.correct_index]
  const explanation = await explainCorrect(markdown, quiz.question, options, correct, quiz.correct_index)
  return { explanation, correctIndex: quiz.correct_index }
}

export interface AnswerOutput {
  correct: boolean
}

export async function checkAnswer(quizId: number, learnerIndex: number): Promise<AnswerOutput> {
  const quiz = await getQuizInternal(quizId)
  if (!quiz) throw new NotFoundError('Quiz not found')
  const correct = learnerIndex === quiz.correct_index
  return { correct }
}

interface AI_Message {
  role: 'user' | 'assistant'
  content: string
}
export type MessageHistory = Array<AI_Message>

export async function getAiHelp(id: number, question: string, history: MessageHistory): Promise<string> {
  const quiz = await getQuizInternal(id)
  if (!quiz) throw new NotFoundError('Quiz not found')
  const plan = await getPlan(quiz.lesson_plan_id)
  if (!plan) throw new NotFoundError('Plan not found')
  const markdown = await getDocumentMarkdown(plan.document_id)
  if (!markdown) throw new BadRequestError('Source document has no markdown content')
  const options = JSON.parse(quiz.options) as string[]
  return aiChat(markdown, quiz.question, options, question, history)
}

function rowToDto(row: QuizQuestionRow): QuizDTO {
  return {
    id: row.id,
    objectiveIndex: row.objective_index,
    questionIndex: row.question_index,
    objectiveText: row.objective_text,
    question: row.question,
    options: JSON.parse(row.options),
    hint: row.hint
  }
}
