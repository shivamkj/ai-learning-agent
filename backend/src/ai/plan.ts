import { createAgent } from 'langchain'
import { model } from './model.ts'
import { planSchema, type Plan } from './schemas.ts'

const SYSTEM = `You are a pedagogical architect. Given a PDF converted to markdown, design a focused, achievable lesson plan for an adult learner.

Rules:
- Read the material carefully and decide how to divide it into 3-10 coherent learning paths/objectives.
- For each path, decide how many quiz questions (1-5) are needed based on the material's depth and complexity.
- Each objective must be concrete and measurable (e.g. "Explain X", "Identify Y", "Compare A vs B").
- Difficulty reflects the material's cognitive demand, not the quiz.
- The title should be friendly and specific to the document's subject.
- Keep descriptions crisp.
- If the user provides revision feedback, incorporate it directly: adjust the number of paths, rebalance topics, or increase/reduce question counts as requested.`

const planAgent = createAgent({
  model: model,
  systemPrompt: SYSTEM,
  responseFormat: planSchema
})

export async function generatePlan(markdown: string, filename: string, feedback?: string): Promise<Plan> {
  const userContent = `
Source document filename: ${filename}
${feedback ? `Revision feedback from the learner:\n"""\n${feedback}\n"""` : ''}
Document content:\n"""\n${markdown}\n"""
`

  const result = await planAgent.invoke({
    messages: [{ role: 'user', content: userContent }]
  })
  return result.structuredResponse
}
