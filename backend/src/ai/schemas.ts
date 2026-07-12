import { z } from 'zod'

const questionDescription = `Number of quiz questions the agent should generate for this learning path (1-10). Choose based on material depth.`
export const objectiveSchema = z.object({
  text: z.string().describe('A concise, learner-facing learning objective.'),
  topic: z.string().describe('Short topic label, 2-4 words.'),
  question_count: z.number().int().min(1).max(10).describe(questionDescription)
})

const objectiveDescription = `Ordered list of 3-10 learning paths/objectives. Decide how many paths best divide the material, and for each path decide how many questions (1-5) are needed to assess mastery.`
export const planSchema = z.object({
  title: z.string().describe('Short, human-friendly title for the lesson.'),
  description: z.string().describe('A 1-2 sentence overview of what the learner will gain.'),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).describe('Overall difficulty of the material.'),
  objectives: z.array(objectiveSchema).min(3).max(10).describe(objectiveDescription)
})

export type Plan = z.infer<typeof planSchema>

export const quizSchema = z.object({
  question: z.string().describe('A clear MCQ question stem grounded in the PDF content.'),
  options: z.array(z.string()).min(4).max(4).describe('Exactly 4 answer choices, plausible and unambiguous.'),
  correct_index: z.number().int().min(0).max(3).describe('Index of the correct option in options.'),
  explanation: z.string().describe('A 1-3 sentence explanation of why the answer is correct.'),
  hint: z.string().describe('A short, conceptual hint that nudges the learner without revealing the answer.')
})

export type Quiz = z.infer<typeof quizSchema>

export const summarySchema = z.object({
  summary: z.string().describe("A 2-4 sentence narrative summary of the learner's performance."),
  study_tips: z.array(z.string()).min(2).max(5).describe('Personalized study tips targeting weak areas.'),
  weak_topics: z.array(z.string()).describe('Topics the learner struggled with, if any.'),
  strengths: z.array(z.string()).describe('Topics the learner demonstrated mastery over.')
})

export type Summary = z.infer<typeof summarySchema>
