import { db, type AttemptRow } from '../db.ts'
import { generateSummary, type AttemptInput } from '../ai/summary.ts'
import { getPlan } from './plans.ts'
import { getQuizInternal } from './quizzes.ts'
import { getDocumentMarkdown } from './documents.ts'
import { NotFoundError, BadRequestError } from '../errors.ts'

interface AttemptSummaryDTO {
  score: number
  total: number
  summary: string
  studyTips: string[]
  weakTopics: string[]
  strengths: string[]
  answers: Array<Answer>
}

interface Answer {
  question: string
  options: string[]
  correctIndex: number
  learnerIndex: number | null
  attempts: number
  objectiveText: string
}

interface AttemptAnswer {
  quizId: number
  learnerIndex: number | null
  attempts: number
}

export async function completeAttempt(
  planId: number,
  payload: { answers: AttemptAnswer[] }
): Promise<AttemptSummaryDTO> {
  const plan = await getPlan(planId)
  if (!plan) throw new NotFoundError('Plan not found')

  const markdown = await getDocumentMarkdown(plan.document_id)
  if (!markdown) throw new BadRequestError('Source document has no markdown content')

  const questions: AttemptInput['questions'] = []
  let score = 0
  for (const ans of payload.answers) {
    const quiz = await getQuizInternal(ans.quizId)
    if (!quiz || quiz.lesson_plan_id !== planId) continue
    const options = JSON.parse(quiz.options) as string[]
    const correct = ans.learnerIndex === quiz.correct_index
    if (correct) score += 1
    questions.push({
      objectiveText: quiz.objective_text,
      question: quiz.question,
      options,
      correctIndex: quiz.correct_index,
      learnerIndex: ans.learnerIndex,
      attempts: ans.attempts
    })
  }

  const objectives = plan.objectives.map((o) => ({ text: o.text, topic: o.topic }))
  const summary = await generateSummary({ objectives, questions, markdown })

  const params = [
    planId,
    score,
    questions.length,
    JSON.stringify(payload.answers),
    summary.summary,
    JSON.stringify(summary.study_tips),
    JSON.stringify(summary.weak_topics),
    JSON.stringify(summary.strengths)
  ]
  db
    .prepare(
      `INSERT INTO attempts (lesson_plan_id, score, total, answers, summary, study_tips, weak_topics, strengths)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     RETURNING id`
    )
    .get(params) as { id: number }

  db.prepare(`UPDATE lesson_plans SET status = 'completed' WHERE id = ?`).run(planId)

  return {
    score,
    total: questions.length,
    summary: summary.summary,
    studyTips: summary.study_tips,
    weakTopics: summary.weak_topics,
    strengths: summary.strengths,
    answers: questions.map((q) => ({
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      learnerIndex: q.learnerIndex,
      attempts: q.attempts,
      objectiveText: q.objectiveText
    }))
  }
}

export async function listAttempts(planId: number) {
  const rows = db
    .prepare(`SELECT * FROM attempts WHERE lesson_plan_id = ? ORDER BY datetime(created_at) DESC`)
    .all(planId) as AttemptRow[]
  return rows.map((r) => ({
    id: r.id,
    lesson_plan_id: r.lesson_plan_id,
    score: r.score,
    total: r.total,
    summary: r.summary,
    study_tips: JSON.parse(r.study_tips) as string[],
    created_at: r.created_at
  }))
}

interface AnswerData {
  quizId: number
  learnerIndex: number | null
  attempts: number
}

export async function getAttempt(attemptId: number) {
  const row = db.prepare(`SELECT * FROM attempts WHERE id = ?`).get(attemptId) as AttemptRow | undefined
  if (!row) return null
  const answers = JSON.parse(row.answers) as Array<AnswerData>
  const quizzes = await Promise.all(
    answers.map(async (a) => {
      const quiz = await getQuizInternal(a.quizId)
      if (!quiz) return null
      return {
        question: quiz.question,
        options: JSON.parse(quiz.options) as string[],
        correctIndex: quiz.correct_index,
        learnerIndex: a.learnerIndex,
        attempts: a.attempts,
        objectiveText: quiz.objective_text
      }
    })
  )
  return {
    score: row.score,
    total: row.total,
    summary: row.summary,
    studyTips: JSON.parse(row.study_tips) as string[],
    weakTopics: JSON.parse(row.weak_topics) as string[],
    strengths: JSON.parse(row.strengths) as string[],
    answers: quizzes.filter(Boolean) as AttemptSummaryDTO['answers']
  }
}
