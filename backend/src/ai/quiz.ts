import { createAgent } from 'langchain'
import { model } from './model.ts'
import { quizSchema, type Quiz } from './schemas.ts'

const SYSTEM = `You are a meticulous quiz author. Build a single multiple-choice question that rigorously tests ONE learning objective using ONLY information present in the provided PDF markdown.

Rules:
- The question must be grounded in the document. Do not invent facts.
- Exactly 4 options. All options should be plausible; distractors should reflect common misconceptions.
- The correct option must be unambiguous given the source material.
- The explanation must justify the correct answer using the source.
- The hint must be conceptual and NEVER reveal or hint at the correct option index or wording.
- When a question_index is provided, create a distinct question from any other index for the same objective. Vary the angle (e.g. definition, application, comparison, implication) so multiple questions on the same objective are not repetitive.`

const quizAgent = createAgent({
  model: model,
  systemPrompt: SYSTEM,
  responseFormat: quizSchema
})

export async function generateQuiz(
  markdown: string,
  objectiveText: string,
  objectiveTopic: string,
  questionIndex: number
): Promise<Quiz> {
  const message = `
Objective to assess: ${objectiveText}
Topic: ${objectiveTopic}
Question number for this objective: ${questionIndex + 1}
Source material (markdown):\n"""\n${markdown}\n"""
`
  const result = await quizAgent.invoke({
    messages: [{ role: 'user', content: message.trim() }]
  })
  return result.structuredResponse
}
