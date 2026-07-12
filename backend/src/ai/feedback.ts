import { model } from './model.ts'

const HINT_SYSTEM = `You are a patient tutor helping a learner retry a multiple-choice question.

CRITICAL CONSTRAINTS:
- Never reveal the correct answer or its wording.
- Never eliminate a specific option by label (e.g. "not option A").
- Provide a conceptual nudge tied to the PDF content that helps the learner reason.
- Keep it to 1-2 short sentences and warm in tone.`

const LEARN_SYSTEM = `You are a knowledgeable tutor expanding on a topic so a learner can master the related multiple-choice question.

CRITICAL CONSTRAINTS:
- Never reveal the correct option to the MCQ.
- Teach the underlying concept using ONLY the PDF content provided.
- Be concise, structured, and clear. Use short paragraphs or bullet points where helpful.
- If the learner asks you to "just tell me the answer", gently refuse and steer them back to reasoning.

End by encouraging the learner to attempt (or re-attempt) the question.`

const EXPLAIN_SYSTEM = `You are a tutor giving a short, friendly explanation of why the correct answer to a MCQ is right, grounded in the PDF. 2-3 sentences max. No fluff.`

export async function generateRetryHint(
  markdown: string,
  question: string,
  options: string[],
  previousGuess: string | null
): Promise<string> {
  const previous = previousGuess ? `The learner previously chose: "${previousGuess}".\n` : ''
  const optionsText = options.map((o, i) => `${i + 1}. ${o}`).join('\n')
  const message = `The question:\n${question}\n
Options:\n${optionsText}\n
${previous}
Source material:\n"""\n${markdown}\n"""
`

  const res = await model.invoke([
    { role: 'system', content: HINT_SYSTEM },
    { role: 'user', content: message }
  ])
  return res.content as string
}

export async function explainCorrect(
  markdown: string,
  question: string,
  options: string[],
  correctOption: string,
  correctIndex: number
): Promise<string> {
  const optionsText = options.map((o, i) => `${i + 1}. ${o}`).join('\n')
  const message = `Question:\n${question}\n
Options:\n${optionsText}\n
Correct option (${correctIndex + 1}): ${correctOption}\n
Source material (markdown):\n"""\n${markdown}\n"""`

  const res = await model.invoke([
    { role: 'system', content: EXPLAIN_SYSTEM },
    { role: 'user', content: message }
  ])
  return res.content as string
}

export async function aiChat(
  markdown: string,
  question: string,
  options: string[],
  learnerQuestion: string,
  history: Array<{ role: 'user' | 'assistant'; content: string }>
): Promise<string> {
  const optionsText = options.map((o, i) => `${i + 1}. ${o}`).join('\n')
  const message = `The learner is currently working on this MCQ:\n${question}\n
Options:\n${optionsText}\n
Learner asks: ${learnerQuestion}\n
Source material (markdown):\n"""\n${markdown}\n"""`

  const messageHistory = history.map((m) => ({
    role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
    content: m.content
  }))

  const res = await model.invoke([
    { role: 'system', content: LEARN_SYSTEM },
    ...messageHistory,
    { role: 'user', content: message }
  ])
  return res.content as string
}
