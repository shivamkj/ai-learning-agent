import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import type { ZodType } from 'zod'
import { deleteDocument, getDocument, listDocuments, uploadAndConvert } from './services/documents.ts'
import { approvePlan, createPlan, getPlan, getPlansForDocument, revisePlan } from './services/plans.ts'
import * as quiz from './services/quizzes.ts'
import { completeAttempt, getAttempt, listAttempts } from './services/attempts.ts'

const IdParam = z.object({ id: z.coerce.number() })

export async function routes(app: FastifyInstance) {
  app.get('/api/documents', () => listDocuments())

  app.get('/api/documents/:id', async (req, reply) => {
    const { id } = validate(IdParam, req.params)
    const doc = await getDocument(id)
    if (!doc) return reply.code(404).send({ error: 'Document not found' })
    return doc
  })

  app.delete('/api/documents/:id', async (req, reply) => {
    const { id } = validate(IdParam, req.params)
    const deleted = await deleteDocument(id)
    if (!deleted) return reply.code(404).send({ error: 'Document not found' })
    return reply.code(204).send()
  })

  app.get('/api/documents/:id/plans', async (req) => {
    const { id } = validate(IdParam, req.params)
    return getPlansForDocument(id)
  })

  app.post('/api/documents/:id/plans', async (req, reply) => {
    const { id } = validate(IdParam, req.params)
    const plan = await createPlan(id)
    return reply.code(201).send(plan)
  })

  app.post('/api/documents/upload', async (req, reply) => {
    const part = await req.file()
    if (!part) {
      return reply.code(400).send({ error: 'No file provided' })
    }
    const allowed = ['.pdf']
    const lower = part.filename.toLowerCase()
    if (!allowed.some((ext) => lower.endsWith(ext))) {
      return reply.code(400).send({ error: 'Only PDF files are supported' })
    }
    const buffer = await part.toBuffer()
    const doc = await uploadAndConvert(part.filename, buffer)
    return reply.code(201).send(doc)
  })

  app.get('/api/lesson-plans/:id', async (req, reply) => {
    const { id } = validate(IdParam, req.params)
    const plan = await getPlan(id)
    if (!plan) return reply.code(404).send({ error: 'Plan not found' })
    return plan
  })

  app.post('/api/lesson-plans/:id/approve', async (req) => {
    const { id } = validate(IdParam, req.params)
    return approvePlan(id)
  })

  const RevisePlanBody = z.object({ feedback: z.string().min(1) })

  app.post('/api/lesson-plans/:id/revise', async (req) => {
    const { id } = validate(IdParam, req.params)
    const { feedback } = validate(RevisePlanBody, req.body)
    return revisePlan(id, feedback)
  })

  app.get('/api/lesson-plans/:id/quizzes', async (req) => {
    const { id } = validate(IdParam, req.params)
    return quiz.getAllQuizzes(id)
  })

  const CreateQuizBody = z.object({ objectiveIndex: z.number(), questionIndex: z.number() })

  app.post('/api/lesson-plans/:id/quizzes', async (req) => {
    const { id } = validate(IdParam, req.params)
    const { objectiveIndex, questionIndex } = validate(CreateQuizBody, req.body)
    return quiz.getOrCreateQuiz(id, objectiveIndex, questionIndex)
  })

  app.post('/api/quizzes/:id/explain', async (req) => {
    const { id } = validate(IdParam, req.params)
    return quiz.getExplanation(id)
  })

  const CheckAnswerBody = z.object({ learnerIndex: z.number() })

  app.post('/api/quizzes/:id/check', async (req) => {
    const { id } = validate(IdParam, req.params)
    const { learnerIndex } = validate(CheckAnswerBody, req.body)
    return quiz.checkAnswer(id, learnerIndex)
  })

  const HintBody = z.object({ previousGuessIndex: z.number().nullable().optional() })

  app.post('/api/quizzes/:id/hint', async (req) => {
    const { id } = validate(IdParam, req.params)
    const { previousGuessIndex } = validate(HintBody, req.body)
    const hint = await quiz.getHint(id, previousGuessIndex ?? null)
    return { hint }
  })

  const LearnMoreBody = z.object({
    learnerQuestion: z.string(),
    history: z.array(z.object({ role: z.enum(['user', 'assistant']), content: z.string() })).optional()
  })

  app.post('/api/quizzes/:id/ai-help', async (req) => {
    const { id } = validate(IdParam, req.params)
    const { learnerQuestion, history } = validate(LearnMoreBody, req.body)
    const message = await quiz.getAiHelp(id, learnerQuestion, history ?? [])
    return { message }
  })

  const CompleteBody = z.object({
    answers: z.array(z.object({ quizId: z.number(), learnerIndex: z.number().nullable(), attempts: z.number() }))
  })

  app.post('/api/lesson-plans/:id/complete', async (req) => {
    const { id } = validate(IdParam, req.params)
    const { answers } = validate(CompleteBody, req.body)
    return completeAttempt(id, { answers })
  })

  app.get('/api/lesson-plans/:id/attempts', async (req) => {
    const { id } = validate(IdParam, req.params)
    return listAttempts(id)
  })

  app.get('/api/attempts/:id', async (req, reply) => {
    const { id } = validate(IdParam, req.params)
    const attempt = await getAttempt(id)
    if (!attempt) return reply.code(404).send({ error: 'Attempt not found' })
    return attempt
  })
}

function validate<T>(schema: ZodType<T>, data: unknown): T {
  return schema.parse(data)
}
