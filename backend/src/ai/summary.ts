import { createAgent } from 'langchain'
import { model } from './model.ts'
import { summarySchema, type Summary } from './schemas.ts'

const SYSTEM = `You are a learning coach producing a progress report after a learner completes a short lesson built from a PDF.

Inputs include the original learning objectives, the questions asked, the learner's final answers, and which were correct.

Rules:
- Be specific and encouraging. Acknowledge effort.
- Identify patterns in misses (concept confusions vs. careless errors).
- Give 2-5 actionable study tips. Each tip should be a concrete next step.
- Never give up on the learner; always leave room to improve.
- Cite concepts by their labels, not option letters.`

const summaryAgent = createAgent({
  model: model,
  systemPrompt: SYSTEM,
  responseFormat: summarySchema
})

export interface AttemptInput {
  objectives: Array<{ text: string; topic: string }>
  questions: Array<{
    objectiveText: string
    question: string
    options: string[]
    correctIndex: number
    learnerIndex: number | null
    attempts: number
  }>
  markdown: string
}

export async function generateSummary(input: AttemptInput): Promise<Summary> {
  const testBreakdown = input.questions
    .map((q, i) => {
      const correct = q.learnerIndex === q.correctIndex
      const status = correct ? 'CORRECT' : q.learnerIndex === null ? 'SKIPPED' : 'INCORRECT'
      const learnerAnswer = q.learnerIndex !== null ? q.options[q.learnerIndex] : '(none)'
      return `Objective ${i + 1}: ${q.objectiveText}
  Question: ${q.question}
  Options: ${q.options.map((o, j) => `(${j + 1}) ${o}`).join(' | ')}
  Correct: (${q.correctIndex + 1}) ${q.options[q.correctIndex]}
  Learner chose: ${learnerAnswer}
  Status: ${status}
  Attempts: ${q.attempts}`
    })
    .join('\n\n')

  const objectives = input.objectives.map((o, i) => `${i + 1}. ${o.text} [${o.topic}]`).join('\n')

  const message = `
Learning objectives:\n${objectives}
\n\n
Per-question breakdown:\n${testBreakdown}
\n\n
Source material (markdown, for grounding):\n"""${input.markdown}"""
`

  const result = await summaryAgent.invoke({
    messages: [{ role: 'user', content: message.trim() }]
  })
  return result.structuredResponse
}
