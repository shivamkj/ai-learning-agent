# Explore codebase structure (@explore subagent)

- **Session ID:** `ses_0ae950b98ffeLNnQZxWF4TLTXN`
- **Created:** 2026-07-11 13:43:11 UTC
- **Total Cost:** $0.0050
- **Total Tokens:** 28,651 in / 3,092 out / 95 reason
- **Messages:** 5

## Conversation

### **User** — 2026-07-11 13:43:11 UTC

*Model: mimo-v2.5*

Explore the codebase structure at /Users/shivam/qnify/ai-learning-agent. I need to understand:
1. What kind of project this is (React, Vue, etc.)
2. The directory structure
3. Find files related to quiz/question/option handling - look for components, state management, or logic related to answering questions, showing correct/wrong states, and error messages.

Return:
- The project type and framework
- Key files related to quiz/question functionality
- The directory structure overview

---

### **Assistant** — 2026-07-11 13:43:11 UTC

*Model: mimo-v2.5*

*Tokens: 3,340 in / 140 out / 23 reason*  Cost: $0.0005

<details><summary><i>Reasoning</i></summary>

Let me explore the codebase structure to understand the project type, directory structure, and find quiz/question-related files.

</details>

I'll explore the codebase systematically. Let me start with the directory structure and key configuration files.

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent</path>
<type>directory</type>
<entries>
.DS_Store
.git/
.gitignore
backend/
frontend/
pdf-to-markdown/

(6 entries)
</entries>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/package.json",
  "path": "/Users/shivam/qnify/ai-learning-agent"
}
```

**Output:**
```
/Users/shivam/qnify/ai-learning-agent/backend/package.json
/Users/shivam/qnify/ai-learning-agent/frontend/package.json
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/*.{ts,tsx,js,jsx}",
  "path": "/Users/shivam/qnify/ai-learning-agent"
}
```

**Output:**
```
/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/services/documents.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/services/pdf-to-markdown.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/services/attempts.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/services/plans.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/db.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/config.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/index.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/ai/plan.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/ai/model.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/ai/summary.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/errors.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts
/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/format.ts
/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/types.ts
/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts
/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/utils.ts
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/summary-view.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/app-shell.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/upload-dropzone.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/sidebar.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/document-card.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/objective-tracker.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/skeleton.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/textarea.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/button.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/separator.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/badge.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/radio-group.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/progress.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/card.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/main.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/vite.config.ts
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 3,340 in / 140 out / 23 reason Cost: $0.0005

---

### **Assistant** — 2026-07-11 13:43:15 UTC

*Model: mimo-v2.5*

*Tokens: 1,016 in / 293 out / 24 reason*  Cost: $0.0002

<details><summary><i>Reasoning</i></summary>

Now let me read the package.json files to understand the frameworks used, and also look at the key quiz-related files.

</details>

Now let me read the configuration files and the quiz-related source files:

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/package.json**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/package.json"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/package.json</path>
<type>file</type>
<content>
1: {
2:   "name": "frontend",
3:   "private": true,
4:   "version": "0.0.0",
5:   "type": "module",
6:   "scripts": {
7:     "dev": "vite",
8:     "build": "tsc -b && vite build",
9:     "lint": "oxlint",
10:     "preview": "vite preview",
11:     "format": "prettier . --write --list-different"
12:   },
13:   "dependencies": {
14:     "@base-ui/react": "^1.6.0",
15:     "@fontsource-variable/inter": "^5.2.8",
16:     "@tailwindcss/vite": "^4.3.2",
17:     "class-variance-authority": "^0.7.1",
18:     "clsx": "^2.1.1",
19:     "lucide-react": "^1.24.0",
20:     "nanoid": "^5.1.16",
21:     "react": "^19.2.7",
22:     "react-dom": "^19.2.7",
23:     "react-markdown": "^10.1.0",
24:     "react-router-dom": "^7.18.1",
25:     "shadcn": "^4.13.0",
26:     "tailwind-merge": "^3.6.0",
27:     "tailwindcss": "^4.3.2",
28:     "tw-animate-css": "^1.4.0"
29:   },
30:   "devDependencies": {
31:     "@types/node": "^24.13.2",
32:     "@types/react": "^19.2.17",
33:     "@types/react-dom": "^19.2.3",
34:     "@vitejs/plugin-react": "^6.0.3",
35:     "oxlint": "^1.71.0",
36:     "prettier": "^3.9.5",
37:     "typescript": "~6.0.2",
38:     "vite": "^8.1.1"
39:   },
40:   "imports": {
41:     "#components/*": "./src/components/*.tsx",
42:     "#lib/*": "./src/lib/*.ts",
43:     "#hooks/*": "./src/hooks/*.ts",
44:     "#pages/*": "./src/pages/*.tsx"
45:   },
46:   "prettier": {
47:     "$schema": "http://json.schemastore.org/prettierrc",
48:     "trailingComma": "none",
49:     "tabWidth": 2,
50:     "printWidth": 120,
51:     "semi": false,
52:     "singleQuote": true
53:   }
54: }

(End of file - total 54 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/package.json**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/package.json"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/package.json</path>
<type>file</type>
<content>
1: {
2:   "name": "backend",
3:   "version": "0.0.0",
4:   "private": true,
5:   "type": "module",
6:   "scripts": {
7:     "dev": "node --watch --env-file=.env src/index.ts",
8:     "test": "echo \"Error: no test specified\" && exit 1"
9:   },
10:   "dependencies": {
11:     "@fastify/cors": "^11.3.0",
12:     "@fastify/multipart": "^10.1.0",
13:     "@langchain/core": "^1.2.2",
14:     "@langchain/openai": "^1.5.5",
15:     "better-sqlite3": "^12.11.1",
16:     "fastify": "^5.10.0",
17:     "langchain": "^1.5.3",
18:     "nanoid": "^5.1.16",
19:     "zod": "^4.4.3"
20:   },
21:   "devDependencies": {
22:     "@types/better-sqlite3": "^7.6.13",
23:     "@types/node": "^26.1.1",
24:     "typescript": "^7.0.2"
25:   },
26:   "prettier": {
27:     "$schema": "http://json.schemastore.org/prettierrc",
28:     "trailingComma": "none",
29:     "tabWidth": 2,
30:     "printWidth": 120,
31:     "semi": false,
32:     "singleQuote": true
33:   },
34:   "packageManager": "pnpm@10.32.1",
35:   "pnpm": {
36:     "onlyBuiltDependencies": [
37:       "better-sqlite3",
38:       "esbuild"
39:     ]
40:   }
41: }

(End of file - total 41 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx</path>
<type>file</type>
<content>
1: import { useEffect, useState } from 'react'
2: import { Check, CircleAlert, HelpCircle, Lightbulb, Loader2, MessageSquareText, Send, X } from 'lucide-react'
3: import { cn } from '#lib/utils'
4: import { Badge } from '#components/ui/badge'
5: import { Button } from '#components/ui/button'
6: import { Card, CardContent } from '#components/ui/card'
7: import { RadioGroup, RadioGroupItem } from '#components/ui/radio-group'
8: import { Textarea } from '#components/ui/textarea'
9: import { checkAnswer, getHint, learnMore } from '#lib/api'
10: import type { ChatMessage, QuizDTO } from '#lib/types'
11: 
12: interface Props {
13:   quiz: QuizDTO
14:   objectiveNumber: number
15:   totalObjectives: number
16:   onCorrect: (learnerIndex: number, explanation: string) => void
17:   onIncorrect: (learnerIndex: number) => void
18:   onSkip: () => void
19:   onNext: () => void
20:   isLast: boolean
21: }
22: 
23: type Status = 'idle' | 'submitted' | 'correct' | 'incorrect'
24: 
25: export function MCQWidget({
26:   quiz,
27:   objectiveNumber,
28:   totalObjectives,
29:   onCorrect,
30:   onIncorrect,
31:   onSkip,
32:   onNext,
33:   isLast
34: }: Props) {
35:   const [selected, setSelected] = useState<number | null>(null)
36:   const [status, setStatus] = useState<Status>('idle')
37:   const [submitting, setSubmitting] = useState(false)
38:   const [hint, setHint] = useState<string | null>(null)
39:   const [hintLoading, setHintLoading] = useState(false)
40:   const [explanation, setExplanation] = useState<string | null>(null)
41:   const [tries, setTries] = useState(0)
42:   const [chatOpen, setChatOpen] = useState(false)
43: 
44:   // Reset state when quiz changes (new objective)
45:   useEffect(() => {
46:     setSelected(null)
47:     setStatus('idle')
48:     setHint(null)
49:     setExplanation(null)
50:     setTries(0)
51:     setChatOpen(false)
52:   }, [quiz.id])
53: 
54:   const submit = async () => {
55:     if (selected === null || submitting) return
56:     setHint(null)
57:     setSubmitting(true)
58:     try {
59:       const res = await checkAnswer(quiz.id, selected)
60:       if (res.correct) {
61:         if (res.explanation) setExplanation(res.explanation)
62:         setStatus('correct')
63:         onCorrect(selected, res.explanation ?? '')
64:       } else {
65:         setStatus('incorrect')
66:         onIncorrect(selected)
67:         setTries((t) => t + 1)
68:       }
69:     } finally {
70:       setSubmitting(false)
71:     }
72:   }
73: 
74:   const retry = () => {
75:     setStatus('idle')
76:     setSelected(null)
77:     setHint(null)
78:   }
79: 
80:   const requestHint = async () => {
81:     setHintLoading(true)
82:     try {
83:       const res = await getHint(quiz.id, status === 'incorrect' ? selected : null)
84:       setHint(res.hint)
85:     } finally {
86:       setHintLoading(false)
87:     }
88:   }
89: 
90:   const locked = status === 'correct'
91: 
92:   return (
93:     <Card className="overflow-hidden">
94:       <CardContent className="p-0">
95:         <div className="border-b border-border bg-accent/40 px-5 py-3 sm:px-6">
96:           <div className="flex items-center justify-between gap-3">
97:             <div className="min-w-0">
98:               <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
99:                 Objective {objectiveNumber} of {totalObjectives}
100:               </p>
101:               <p className="mt-0.5 truncate text-sm font-semibold">{quiz.objectiveText}</p>
102:             </div>
103:             {tries > 0 && status !== 'correct' && (
104:               <Badge variant="destructive">
105:                 {tries} {tries === 1 ? 'miss' : 'misses'}
106:               </Badge>
107:             )}
108:             {status === 'correct' && (
109:               <Badge variant="default">
110:                 <Check className="size-3" />
111:                 Correct
112:               </Badge>
113:             )}
114:           </div>
115:         </div>
116: 
117:         <div className="space-y-5 p-5 sm:p-6">
118:           <p className="text-base font-medium leading-relaxed">{quiz.question}</p>
119: 
120:           <RadioGroup
121:             value={selected !== null ? String(selected) : undefined}
122:             onValueChange={(v) => {
123:               if (locked) return
124:               setSelected(Number(v))
125:             }}
126:             className="gap-2.5"
127:           >
128:             {quiz.options.map((opt, i) => {
129:               const isSelected = selected === i
130:               const showAsCorrect = locked && isSelected
131:               const showAsWrong = status === 'incorrect' && isSelected
132:               return (
133:                 <label
134:                   key={i}
135:                   className={cn(
136:                     'flex items-center gap-

... (truncated, 14,407 chars total)
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts</path>
<type>file</type>
<content>
1: import { createAgent } from 'langchain'
2: import { model } from './model.ts'
3: import { quizSchema, type Quiz } from './schemas.ts'
4: 
5: const SYSTEM = `You are a meticulous quiz author. Build a single multiple-choice question that rigorously tests ONE learning objective using ONLY information present in the provided PDF markdown.
6: 
7: Rules:
8: - The question must be grounded in the document. Do not invent facts.
9: - Exactly 4 options. All options should be plausible; distractors should reflect common misconceptions.
10: - The correct option must be unambiguous given the source material.
11: - The explanation must justify the correct answer using the source.
12: - The hint must be conceptual and NEVER reveal or hint at the correct option index or wording.`
13: 
14: const quizAgent = createAgent({
15:   model: model,
16:   systemPrompt: SYSTEM,
17:   responseFormat: quizSchema
18: })
19: 
20: export async function generateQuiz(markdown: string, objectiveText: string, objectiveTopic: string): Promise<Quiz> {
21:   const message = `
22: Objective to assess: ${objectiveText}
23: Topic: ${objectiveTopic}
24: Source material (markdown):\n"""\n${markdown}\n"""
25: `
26:   const result = await quizAgent.invoke({
27:     messages: [{ role: 'user', content: message.trim() }]
28:   })
29:   return result.structuredResponse
30: }

(End of file - total 30 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts</path>
<type>file</type>
<content>
1: import { z } from 'zod'
2: 
3: export const objectiveSchema = z.object({
4:   text: z.string().describe('A concise, learner-facing learning objective.'),
5:   topic: z.string().describe('Short topic label, 2-4 words.')
6: })
7: 
8: export const planSchema = z.object({
9:   title: z.string().describe('Short, human-friendly title for the lesson.'),
10:   description: z.string().describe('A 1-2 sentence overview of what the learner will gain.'),
11:   difficulty: z.enum(['beginner', 'intermediate', 'advanced']).describe('Overall difficulty of the material.'),
12:   objectives: z.array(objectiveSchema).min(3).max(6).describe('Ordered list of 3-6 learning objectives.')
13: })
14: 
15: export type Plan = z.infer<typeof planSchema>
16: 
17: export const quizSchema = z.object({
18:   question: z.string().describe('A clear MCQ question stem grounded in the PDF content.'),
19:   options: z.array(z.string()).min(4).max(4).describe('Exactly 4 answer choices, plausible and unambiguous.'),
20:   correct_index: z.number().int().min(0).max(3).describe('Index of the correct option in options.'),
21:   explanation: z.string().describe('A 1-3 sentence explanation of why the answer is correct.'),
22:   hint: z.string().describe('A short, conceptual hint that nudges the learner without revealing the answer.')
23: })
24: 
25: export type Quiz = z.infer<typeof quizSchema>
26: 
27: export const summarySchema = z.object({
28:   summary: z.string().describe("A 2-4 sentence narrative summary of the learner's performance."),
29:   study_tips: z.array(z.string()).min(2).max(5).describe('Personalized study tips targeting weak areas.'),
30:   weak_topics: z.array(z.string()).describe('Topics the learner struggled with, if any.'),
31:   strengths: z.array(z.string()).describe('Topics the learner demonstrated mastery over.')
32: })
33: 
34: export type Summary = z.infer<typeof summarySchema>

(End of file - total 34 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts</path>
<type>file</type>
<content>
1: import { db, type QuizQuestionRow } from '../db.ts'
2: import { generateQuiz } from '../ai/quiz.ts'
3: import { generateRetryHint, explainCorrect, learnMore } from '../ai/feedback.ts'
4: import { getPlan } from './plans.ts'
5: import { getDocumentMarkdown } from './documents.ts'
6: import { NotFoundError, BadRequestError } from '../errors.ts'
7: 
8: export interface QuizDTO {
9:   id: number
10:   objectiveIndex: number
11:   objectiveText: string
12:   question: string
13:   options: string[]
14:   hint: string
15: }
16: 
17: export async function getOrCreateQuiz(planId: number, objectiveIndex: number): Promise<QuizDTO> {
18:   const plan = await getPlan(planId)
19:   if (!plan) throw new NotFoundError('Plan not found')
20:   const objective = plan.objectives[objectiveIndex]
21:   if (!objective) throw new NotFoundError(`Objective ${objectiveIndex} not found`)
22: 
23:   const existing = db
24:     .prepare(`SELECT * FROM quiz_questions WHERE lesson_plan_id = ? AND objective_index = ?`)
25:     .get(planId, objectiveIndex) as QuizQuestionRow | undefined
26: 
27:   if (existing) {
28:     return {
29:       id: existing.id,
30:       objectiveIndex: existing.objective_index,
31:       objectiveText: existing.objective_text,
32:       question: existing.question,
33:       options: JSON.parse(existing.options),
34:       hint: existing.hint
35:     }
36:   }
37: 
38:   const markdown = await getDocumentMarkdown(plan.document_id)
39:   if (!markdown) throw new BadRequestError('Source document has no markdown content')
40:   const quiz = await generateQuiz(markdown, objective.text, objective.topic)
41: 
42:   const res = db
43:     .prepare(
44:       `INSERT INTO quiz_questions (lesson_plan_id, objective_index, objective_text, question, options, correct_index, explanation, hint)
45:        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
46:        RETURNING id`
47:     )
48:     .get(
49:       planId,
50:       objectiveIndex,
51:       objective.text,
52:       quiz.question,
53:       JSON.stringify(quiz.options),
54:       quiz.correct_index,
55:       quiz.explanation,
56:       quiz.hint
57:     ) as { id: number }
58: 
59:   return {
60:     id: res.id,
61:     objectiveIndex,
62:     objectiveText: objective.text,
63:     question: quiz.question,
64:     options: quiz.options,
65:     hint: quiz.hint
66:   }
67: }
68: 
69: export async function getAllQuizzes(planId: number): Promise<QuizDTO[]> {
70:   const plan = await getPlan(planId)
71:   if (!plan) return []
72:   const rows = db
73:     .prepare(`SELECT * FROM quiz_questions WHERE lesson_plan_id = ? ORDER BY objective_index ASC`)
74:     .all(planId) as QuizQuestionRow[]
75:   return rows.map((r) => ({
76:     id: r.id,
77:     objectiveIndex: r.objective_index,
78:     objectiveText: r.objective_text,
79:     question: r.question,
80:     options: JSON.parse(r.options),
81:     hint: r.hint
82:   }))
83: }
84: 
85: export async function getQuizInternal(quizId: number): Promise<QuizQuestionRow | null> {
86:   return (db.prepare(`SELECT * FROM quiz_questions WHERE id = ?`).get(quizId) as QuizQuestionRow | undefined) ?? null
87: }
88: 
89: export async function getHint(quizId: number, previousGuessIndex: number | null): Promise<string> {
90:   const quiz = await getQuizInternal(quizId)
91:   if (!quiz) throw new NotFoundError('Quiz not found')
92:   const plan = await getPlan(quiz.lesson_plan_id)
93:   if (!plan) throw new NotFoundError('Plan not found')
94:   const markdown = await getDocumentMarkdown(plan.document_id)
95:   if (!markdown) throw new BadRequestError('Source document has no markdown content')
96:   const options = JSON.parse(quiz.options) as string[]
97:   return generateRetryHint(
98:     markdown,
99:     quiz.question,
100:     options,
101:     previousGuessIndex !== null ? options[previousGuessIndex] : null
102:   )
103: }
104: 
105: interface ExplanationResult {
106:   explanation: string
107:   correctIndex: number
108: }
109: 
110: export async function getExplanation(quizId: number): Promise<ExplanationResult> {
111:   const quiz = await getQuizInternal(quizId)
112:   if (!quiz) throw new NotFoundError('Quiz not found')
113:   const plan = await getPlan(quiz.lesson_plan_id)
114:   if (!plan) throw new NotFoundError('Plan not found')
115:   const markdown = await getDocumentMarkdown(plan.document_id)
116:   if (!markdown) throw new BadRequestError('Source document has no markdown content')
117:   const options = JSON.parse(quiz.options) as string[]
118:   const correct = options[quiz.correct_index]
119:   const explanation = await explainCorrect(markdown, quiz.question, options, correct, quiz.correct_index)
120:   return { explanation, correctIndex: quiz.correct_index }
121: }
122: 
123: interface AnswerOutput {
124:   correct: boolean
125:   explanation?: string
126: }
127: 
128: export async function checkAnswer(quizId: number

... (truncated, 6,220 chars total)
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/services/attempts.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/services/attempts.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/services/attempts.ts</path>
<type>file</type>
<content>
1: import { db, type AttemptRow } from '../db.ts'
2: import { generateSummary, type AttemptInput } from '../ai/summary.ts'
3: import { getPlan } from './plans.ts'
4: import { getQuizInternal } from './quizzes.ts'
5: import { getDocumentMarkdown } from './documents.ts'
6: import { NotFoundError, BadRequestError } from '../errors.ts'
7: 
8: interface AttemptSummaryDTO {
9:   score: number
10:   total: number
11:   summary: string
12:   studyTips: string[]
13:   weakTopics: string[]
14:   strengths: string[]
15:   answers: Array<Answer>
16: }
17: 
18: interface Answer {
19:   question: string
20:   options: string[]
21:   correctIndex: number
22:   learnerIndex: number | null
23:   attempts: number
24:   objectiveText: string
25: }
26: 
27: interface AttemptAnswer {
28:   quizId: number
29:   learnerIndex: number | null
30:   attempts: number
31: }
32: 
33: export async function completeAttempt(
34:   planId: number,
35:   payload: { answers: AttemptAnswer[] }
36: ): Promise<AttemptSummaryDTO> {
37:   const plan = await getPlan(planId)
38:   if (!plan) throw new NotFoundError('Plan not found')
39: 
40:   const markdown = await getDocumentMarkdown(plan.document_id)
41:   if (!markdown) throw new BadRequestError('Source document has no markdown content')
42: 
43:   const questions: AttemptInput['questions'] = []
44:   let score = 0
45:   for (const ans of payload.answers) {
46:     const quiz = await getQuizInternal(ans.quizId)
47:     if (!quiz || quiz.lesson_plan_id !== planId) continue
48:     const options = JSON.parse(quiz.options) as string[]
49:     const correct = ans.learnerIndex === quiz.correct_index
50:     if (correct) score += 1
51:     questions.push({
52:       objectiveText: quiz.objective_text,
53:       question: quiz.question,
54:       options,
55:       correctIndex: quiz.correct_index,
56:       learnerIndex: ans.learnerIndex,
57:       attempts: ans.attempts
58:     })
59:   }
60: 
61:   const objectives = plan.objectives.map((o) => ({ text: o.text, topic: o.topic }))
62:   const summary = await generateSummary({ objectives, questions, markdown })
63: 
64:   const params = [
65:     planId,
66:     score,
67:     questions.length,
68:     JSON.stringify(payload.answers),
69:     summary.summary,
70:     JSON.stringify(summary.study_tips),
71:     JSON.stringify(summary.weak_topics),
72:     JSON.stringify(summary.strengths)
73:   ]
74:   db
75:     .prepare(
76:       `INSERT INTO attempts (lesson_plan_id, score, total, answers, summary, study_tips, weak_topics, strengths)
77:      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
78:      RETURNING id`
79:     )
80:     .get(params) as { id: number }
81: 
82:   db.prepare(`UPDATE lesson_plans SET status = 'completed' WHERE id = ?`).run(planId)
83: 
84:   return {
85:     score,
86:     total: questions.length,
87:     summary: summary.summary,
88:     studyTips: summary.study_tips,
89:     weakTopics: summary.weak_topics,
90:     strengths: summary.strengths,
91:     answers: questions.map((q) => ({
92:       question: q.question,
93:       options: q.options,
94:       correctIndex: q.correctIndex,
95:       learnerIndex: q.learnerIndex,
96:       attempts: q.attempts,
97:       objectiveText: q.objectiveText
98:     }))
99:   }
100: }
101: 
102: export async function listAttempts(planId: number) {
103:   const rows = db
104:     .prepare(`SELECT * FROM attempts WHERE lesson_plan_id = ? ORDER BY datetime(created_at) DESC`)
105:     .all(planId) as AttemptRow[]
106:   return rows.map((r) => ({
107:     id: r.id,
108:     lesson_plan_id: r.lesson_plan_id,
109:     score: r.score,
110:     total: r.total,
111:     summary: r.summary,
112:     study_tips: JSON.parse(r.study_tips) as string[],
113:     created_at: r.created_at
114:   }))
115: }
116: 
117: interface AnswerData {
118:   quizId: number
119:   learnerIndex: number | null
120:   attempts: number
121: }
122: 
123: export async function getAttempt(attemptId: number) {
124:   const row = db.prepare(`SELECT * FROM attempts WHERE id = ?`).get(attemptId) as AttemptRow | undefined
125:   if (!row) return null
126:   const answers = JSON.parse(row.answers) as Array<AnswerData>
127:   const quizzes = await Promise.all(
128:     answers.map(async (a) => {
129:       const quiz = await getQuizInternal(a.quizId)
130:       if (!quiz) return null
131:       return {
132:         question: quiz.question,
133:         options: JSON.parse(quiz.options) as string[],
134:         correctIndex: quiz.correct_index,
135:         learnerIndex: a.learnerIndex,
136:         attempts: a.attempts,
137:         objectiveText: quiz.objective_text
138:       }
139:     })
140:   )
141:   return {
142:     score: row.score,
143:     total: row.total,
144:     summary: row.summary,
145:     studyTips: JSON.parse(row.study_tips) as string[],
146:     weakTopics: JSON.parse(row.weak_topics) as string[],
147:     strengt

... (truncated, 5,176 chars total)
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts</path>
<type>file</type>
<content>
1: import type { FastifyInstance } from 'fastify'
2: import { z } from 'zod'
3: import type { ZodType } from 'zod'
4: import { getDocument, listDocuments, uploadAndConvert } from './services/documents.ts'
5: import { approvePlan, createPlan, getPlan, getPlansForDocument } from './services/plans.ts'
6: import * as quiz from './services/quizzes.ts'
7: import { completeAttempt, getAttempt, listAttempts } from './services/attempts.ts'
8: 
9: function validate<T>(schema: ZodType<T>, data: unknown): T {
10:   return schema.parse(data)
11: }
12: const IdParam = z.object({ id: z.coerce.number() })
13: 
14: export async function routes(app: FastifyInstance) {
15:   app.get('/api/documents', () => listDocuments())
16: 
17:   app.get('/api/documents/:id', async (req, reply) => {
18:     const { id } = validate(IdParam, req.params)
19:     const doc = await getDocument(id)
20:     if (!doc) return reply.code(404).send({ error: 'Document not found' })
21:     return doc
22:   })
23: 
24:   app.get('/api/documents/:id/plans', async (req) => {
25:     const { id } = validate(IdParam, req.params)
26:     return getPlansForDocument(id)
27:   })
28: 
29:   app.post('/api/documents/:id/plans', async (req, reply) => {
30:     const { id } = validate(IdParam, req.params)
31:     const plan = await createPlan(id)
32:     return reply.code(201).send(plan)
33:   })
34: 
35:   app.post('/api/documents/upload', async (req, reply) => {
36:     const part = await req.file()
37:     if (!part) {
38:       return reply.code(400).send({ error: 'No file provided' })
39:     }
40:     const allowed = ['.pdf']
41:     const lower = part.filename.toLowerCase()
42:     if (!allowed.some((ext) => lower.endsWith(ext))) {
43:       return reply.code(400).send({ error: 'Only PDF files are supported' })
44:     }
45:     const buffer = await part.toBuffer()
46:     const doc = await uploadAndConvert(part.filename, buffer)
47:     return reply.code(201).send(doc)
48:   })
49: 
50:   app.get('/api/lesson-plans/:id', async (req, reply) => {
51:     const { id } = validate(IdParam, req.params)
52:     const plan = await getPlan(id)
53:     if (!plan) return reply.code(404).send({ error: 'Plan not found' })
54:     return plan
55:   })
56: 
57:   app.post('/api/lesson-plans/:id/approve', async (req) => {
58:     const { id } = validate(IdParam, req.params)
59:     return approvePlan(id)
60:   })
61: 
62:   app.get('/api/lesson-plans/:id/quizzes', async (req) => {
63:     const { id } = validate(IdParam, req.params)
64:     return quiz.getAllQuizzes(id)
65:   })
66: 
67:   const CreateQuizBody = z.object({ objectiveIndex: z.number() })
68: 
69:   app.post('/api/lesson-plans/:id/quizzes', async (req) => {
70:     const { id } = validate(IdParam, req.params)
71:     const { objectiveIndex } = validate(CreateQuizBody, req.body)
72:     return quiz.getOrCreateQuiz(id, objectiveIndex)
73:   })
74: 
75:   app.post('/api/quizzes/:id/explain', async (req) => {
76:     const { id } = validate(IdParam, req.params)
77:     return quiz.getExplanation(id)
78:   })
79: 
80:   const CheckAnswerBody = z.object({ learnerIndex: z.number() })
81: 
82:   app.post('/api/quizzes/:id/check', async (req) => {
83:     const { id } = validate(IdParam, req.params)
84:     const { learnerIndex } = validate(CheckAnswerBody, req.body)
85:     return quiz.checkAnswer(id, learnerIndex)
86:   })
87: 
88:   const HintBody = z.object({ previousGuessIndex: z.number().nullable().optional() })
89: 
90:   app.post('/api/quizzes/:id/hint', async (req) => {
91:     const { id } = validate(IdParam, req.params)
92:     const { previousGuessIndex } = validate(HintBody, req.body)
93:     const hint = await quiz.getHint(id, previousGuessIndex ?? null)
94:     return { hint }
95:   })
96: 
97:   const LearnMoreBody = z.object({
98:     learnerQuestion: z.string(),
99:     history: z.array(z.object({ role: z.enum(['user', 'assistant']), content: z.string() })).optional()
100:   })
101: 
102:   app.post('/api/quizzes/:id/learn-more', async (req) => {
103:     const { id } = validate(IdParam, req.params)
104:     const { learnerQuestion, history } = validate(LearnMoreBody, req.body)
105:     const message = await quiz.learnMoreAboutQuiz(id, learnerQuestion, history ?? [])
106:     return { message }
107:   })
108: 
109:   const CompleteBody = z.object({
110:     answers: z.array(z.object({ quizId: z.number(), learnerIndex: z.number().nullable(), attempts: z.number() }))
111:   })
112: 
113:   app.post('/api/lesson-plans/:id/complete', async (req) => {
114:     const { id } = validate(IdParam, req.params)
115:     const { answers } = validate(CompleteBody, req.body)
116:     return completeAttempt(id, { answers })
117:   })
118: 
119:   app.get('/api/lesson-plans/:id/attempts', async (req) => {
120:     const { id } = validate(IdParam, req.params)
121:     return listAttempts(id)
122:   })
123: 
124:   a

... (truncated, 5,319 chars total)
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 1,016 in / 293 out / 24 reason Cost: $0.0002

---

### **Assistant** — 2026-07-11 13:43:19 UTC

*Model: mimo-v2.5*

*Tokens: 12,025 in / 297 out / 32 reason*  Cost: $0.0018

<details><summary><i>Reasoning</i></summary>

Now let me also read the remaining important files to complete the picture: the frontend API, types, lesson page, and the backend AI feedback and error files.

</details>

Let me read the remaining key files to complete the picture:

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts</path>
<type>file</type>
<content>
1: import type {
2:   AttemptListItem,
3:   AttemptSummary,
4:   ChatMessage,
5:   DocumentDetail,
6:   DocumentSummary,
7:   Plan,
8:   QuizDTO
9: } from './types'
10: 
11: const BASE = 'http://localhost:3003'
12: 
13: export class ApiError extends Error {
14:   status: number
15:   constructor(message: string, status: number) {
16:     super(message)
17:     this.status = status
18:   }
19: }
20: 
21: async function jsonFetch<T>(path: string, init?: RequestInit): Promise<T> {
22:   const headers: Record<string, string> = {}
23:   if (init?.method == 'POST' && init?.body != null) {
24:     headers['Content-Type'] = 'application/json'
25:   }
26:   const res = await fetch(`${BASE}${path}`, { ...init, headers, body: init?.body })
27:   if (!res.ok) {
28:     let msg = `Request failed (${res.status})`
29:     const body = await res.json()
30:     msg = body.error ?? msg
31:     throw new ApiError(msg, res.status)
32:   }
33:   if (res.status === 204) return undefined as unknown as T
34:   return (await res.json()) as T
35: }
36: 
37: export async function listDocuments(): Promise<DocumentSummary[]> {
38:   return jsonFetch<DocumentSummary[]>('/api/documents')
39: }
40: 
41: export async function getDocument(id: number): Promise<DocumentDetail> {
42:   return jsonFetch<DocumentDetail>(`/api/documents/${id}`)
43: }
44: 
45: export async function uploadPdf(file: File): Promise<DocumentDetail> {
46:   const form = new FormData()
47:   form.append('file', file)
48:   const res = await fetch(`${BASE}/api/documents/upload`, { method: 'POST', body: form })
49:   if (!res.ok) {
50:     let msg = 'Upload failed'
51:     const body = await res.json()
52:     msg = body.error ?? msg
53:     throw new ApiError(msg, res.status)
54:   }
55:   return (await res.json()) as DocumentDetail
56: }
57: 
58: export async function listPlansForDocument(id: number): Promise<Plan[]> {
59:   return jsonFetch<Plan[]>(`/api/documents/${id}/plans`)
60: }
61: 
62: export async function createPlan(documentId: number): Promise<Plan> {
63:   return jsonFetch<Plan>(`/api/documents/${documentId}/plans`, { method: 'POST' })
64: }
65: 
66: export async function getPlan(planId: number): Promise<Plan> {
67:   return jsonFetch<Plan>(`/api/lesson-plans/${planId}`)
68: }
69: 
70: export async function approvePlan(planId: number): Promise<Plan> {
71:   return jsonFetch<Plan>(`/api/lesson-plans/${planId}/approve`, { method: 'POST' })
72: }
73: 
74: export async function listQuizzes(planId: number): Promise<QuizDTO[]> {
75:   return jsonFetch<QuizDTO[]>(`/api/lesson-plans/${planId}/quizzes`)
76: }
77: 
78: export async function generateQuiz(planId: number, objectiveIndex: number): Promise<QuizDTO> {
79:   return jsonFetch<QuizDTO>(`/api/lesson-plans/${planId}/quizzes`, {
80:     method: 'POST',
81:     body: JSON.stringify({ objectiveIndex })
82:   })
83: }
84: 
85: interface Explanation {
86:   explanation: string
87:   correctIndex: number
88: }
89: 
90: export async function getExplanation(quizId: number): Promise<Explanation> {
91:   return jsonFetch(`/api/quizzes/${quizId}/explain`, { method: 'POST', body: '{}' })
92: }
93: 
94: interface AnswerData {
95:   correct: boolean
96:   explanation?: string
97: }
98: 
99: export async function checkAnswer(quizId: number, learnerIndex: number): Promise<AnswerData> {
100:   return jsonFetch(`/api/quizzes/${quizId}/check`, {
101:     method: 'POST',
102:     body: JSON.stringify({ learnerIndex })
103:   })
104: }
105: 
106: export async function getHint(quizId: number, previousGuessIndex: number | null): Promise<{ hint: string }> {
107:   return jsonFetch(`/api/quizzes/${quizId}/hint`, {
108:     method: 'POST',
109:     body: JSON.stringify({ previousGuessIndex })
110:   })
111: }
112: 
113: interface Message {
114:   message: string
115: }
116: 
117: export async function learnMore(quizId: number, learnerQuestion: string, history: ChatMessage[]): Promise<Message> {
118:   return jsonFetch(`/api/quizzes/${quizId}/learn-more`, {
119:     method: 'POST',
120:     body: JSON.stringify({ learnerQuestion, history })
121:   })
122: }
123: 
124: interface Attempts {
125:   quizId: number
126:   learnerIndex: number | null
127:   attempts: number
128: }
129: 
130: export async function completeAttempt(planId: number, answers: Array<Attempts>): Promise<AttemptSummary> {
131:   return jsonFetch(`/api/lesson-plans/${planId}/complete`, {
132:     method: 'POST',
133:     body: JSON.stringify({ answers })
134:   })
135: }
136: 
137: export async function listAttempts(planId: number): Promise<AttemptListItem[]> {
138:   return jsonFetch<AttemptListItem[]>(`/api/lesson-plans/${planId}/attempts`)
139: }
140: 
141: export async function getAttempt(attemptId: number): Promise<AttemptSummary> {
142:   return jsonFetch<AttemptSummary>(`/api/attempts/${attemptId}`)
143: }

(End of file - total 143 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/lib/types.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/types.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/types.ts</path>
<type>file</type>
<content>
1: export type Difficulty = 'beginner' | 'intermediate' | 'advanced'
2: 
3: export interface Objective {
4:   text: string
5:   topic: string
6: }
7: 
8: export interface DocumentSummary {
9:   id: number
10:   filename: string
11:   title: string
12:   markdown_chars: number
13:   status: 'processing' | 'ready' | 'failed' | 'uploaded'
14:   error: string | null
15:   created_at: string
16:   plan: {
17:     id: number
18:     difficulty: Difficulty
19:     status: 'draft' | 'approved' | 'completed'
20:   } | null
21:   attemptCount: number
22: }
23: 
24: export interface DocumentDetail {
25:   id: number
26:   filename: string
27:   title: string
28:   status: 'processing' | 'ready' | 'failed' | 'uploaded'
29:   markdown_chars: number
30:   created_at: string
31:   error: string | null
32: }
33: 
34: export interface Plan {
35:   id: number
36:   document_id: number
37:   document_filename?: string
38:   title: string
39:   description: string
40:   difficulty: Difficulty
41:   objectives: Objective[]
42:   status: 'draft' | 'approved' | 'completed'
43:   created_at: string
44: }
45: 
46: export interface QuizDTO {
47:   id: number
48:   objectiveIndex: number
49:   objectiveText: string
50:   question: string
51:   options: string[]
52:   hint: string
53: }
54: 
55: export interface AttemptSummary {
56:   score: number
57:   total: number
58:   summary: string
59:   studyTips: string[]
60:   weakTopics: string[]
61:   strengths: string[]
62:   answers: Array<{
63:     question: string
64:     options: string[]
65:     correctIndex: number
66:     learnerIndex: number | null
67:     attempts: number
68:     objectiveText: string
69:   }>
70: }
71: 
72: export interface AttemptListItem {
73:   id: number
74:   lesson_plan_id: number
75:   score: number
76:   total: number
77:   summary: string
78:   study_tips: string[]
79:   created_at: string
80: }
81: 
82: export interface ChatMessage {
83:   role: 'user' | 'assistant'
84:   content: string
85: }

(End of file - total 85 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx</path>
<type>file</type>
<content>
1: import { useCallback, useEffect, useState } from 'react'
2: import { useNavigate, useParams } from 'react-router-dom'
3: import { ArrowLeft, Loader2 } from 'lucide-react'
4: import { PlanCard } from '#components/plan-card'
5: import { MCQWidget } from '#components/mcq-widget'
6: import { ObjectiveTracker, type ObjectiveStatus } from '#components/objective-tracker'
7: import { SummaryView } from '#components/summary-view'
8: import { Card, CardContent } from '#components/ui/card'
9: import { Progress } from '#components/ui/progress'
10: import { approvePlan, completeAttempt, generateQuiz, getAttempt, getPlan, listAttempts, listQuizzes } from '#lib/api'
11: import type { AttemptSummary, Plan, QuizDTO } from '#lib/types'
12: import { difficultyLabel } from '#lib/format'
13: 
14: type Phase = 'loading' | 'review' | 'quiz' | 'summary' | 'error'
15: 
16: interface AnswerState {
17:   quizId: number
18:   learnerIndex: number | null
19:   attempts: number
20:   correct: boolean
21:   finalized: boolean
22: }
23: 
24: function blankAnswer(quizId: number): AnswerState {
25:   return {
26:     quizId,
27:     learnerIndex: null,
28:     attempts: 0,
29:     correct: false,
30:     finalized: false
31:   }
32: }
33: 
34: export function LessonPage() {
35:   const { planId } = useParams<{ planId: string }>()
36:   const navigate = useNavigate()
37:   const [phase, setPhase] = useState<Phase>('loading')
38:   const [plan, setPlan] = useState<Plan | null>(null)
39:   const [error, setError] = useState<string | null>(null)
40:   const [quizzes, setQuizzes] = useState<Record<number, QuizDTO>>({})
41:   const [answers, setAnswers] = useState<Record<number, AnswerState>>({})
42:   const [currentIdx, setCurrentIdx] = useState(0)
43:   const [loadingQuiz, setLoadingQuiz] = useState(false)
44:   const [summary, setSummary] = useState<AttemptSummary | null>(null)
45:   const [finishing, setFinishing] = useState(false)
46: 
47:   useEffect(() => {
48:     if (!planId) return
49:     const id = Number(planId)
50: 
51:     async function loadPlan() {
52:       const p = await getPlan(id)
53:       setPlan(p)
54: 
55:       if (p.status === 'draft') {
56:         setPhase('review')
57:         return
58:       }
59: 
60:       if (p.status !== 'completed') {
61:         setPhase('quiz')
62:         return
63:       }
64: 
65:       try {
66:         const attempts = await listAttempts(id)
67:         if (attempts.length === 0) {
68:           setPhase('quiz')
69:           return
70:         }
71:         const latest = await getAttempt(attempts[0].id)
72:         setSummary(latest)
73:         setPhase('summary')
74:       } catch {
75:         setPhase('quiz')
76:       }
77:     }
78: 
79:     loadPlan().catch((err: unknown) => {
80:       setError((err as Error).message)
81:       setPhase('error')
82:     })
83:   }, [planId])
84: 
85:   // Preload cached quizzes when entering the quiz phase (retest path)
86:   useEffect(() => {
87:     if (phase !== 'quiz' || !planId || !plan) return
88:     const id = Number(planId)
89:     listQuizzes(id)
90:       .then((existing) => {
91:         if (existing.length === 0) return
92:         const map: Record<number, QuizDTO> = {}
93:         for (const q of existing) map[q.objectiveIndex] = q
94:         setQuizzes(map)
95:       })
96:       .catch(() => {
97:         // ignore — we'll lazy-generate
98:       })
99:   }, [phase, planId, plan])
100: 
101:   const currentQuiz = quizzes[currentIdx]
102: 
103:   // Lazy-generate the quiz for the current objective when needed
104:   useEffect(() => {
105:     if (phase !== 'quiz' || !plan || !planId) return
106:     if (quizzes[currentIdx] || loadingQuiz) return
107:     if (currentIdx >= plan.objectives.length) return
108:     const id = Number(planId)
109:     setLoadingQuiz(true)
110:     generateQuiz(id, currentIdx)
111:       .then((q) => {
112:         setQuizzes((prev) => ({ ...prev, [currentIdx]: q }))
113:       })
114:       .catch((err: unknown) => {
115:         setError((err as Error).message)
116:         setPhase('error')
117:       })
118:       .finally(() => setLoadingQuiz(false))
119:   }, [phase, plan, planId, currentIdx, quizzes, loadingQuiz])
120: 
121:   const handleApprove = useCallback(async () => {
122:     if (!plan) return
123:     try {
124:       const updated = await approvePlan(plan.id)
125:       setPlan(updated)
126:       setPhase('quiz')
127:     } catch (err) {
128:       setError((err as Error).message)
129:       setPhase('error')
130:     }
131:   }, [plan])
132: 
133:   const handleIncorrect = useCallback(
134:     (idx: number, learnerIndex: number) => {
135:       setAnswers((prev) => {
136:         const quizId = quizzes[idx]?.id ?? -1
137:         const existing = prev[idx] ?? blankAnswer(quizId)
138:         return {
139:           ...prev,
140:           [idx]: {
141:             .

... (truncated, 12,484 chars total)
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts</path>
<type>file</type>
<content>
1: import { model } from './model.ts'
2: 
3: const HINT_SYSTEM = `You are a patient tutor helping a learner retry a multiple-choice question.
4: 
5: CRITICAL CONSTRAINTS:
6: - Never reveal the correct answer or its wording.
7: - Never eliminate a specific option by label (e.g. "not option A").
8: - Provide a conceptual nudge tied to the PDF content that helps the learner reason.
9: - Keep it to 1-2 short sentences and warm in tone.`
10: 
11: const LEARN_SYSTEM = `You are a knowledgeable tutor expanding on a topic so a learner can master the related multiple-choice question.
12: 
13: CRITICAL CONSTRAINTS:
14: - Never reveal the correct option to the MCQ.
15: - Teach the underlying concept using ONLY the PDF content provided.
16: - Be concise, structured, and clear. Use short paragraphs or bullet points where helpful.
17: - If the learner asks you to "just tell me the answer", gently refuse and steer them back to reasoning.
18: 
19: End by encouraging the learner to attempt (or re-attempt) the question.`
20: 
21: const EXPLAIN_SYSTEM = `You are a tutor giving a short, friendly explanation of why the correct answer to a MCQ is right, grounded in the PDF. 2-3 sentences max. No fluff.`
22: 
23: export async function generateRetryHint(
24:   markdown: string,
25:   question: string,
26:   options: string[],
27:   previousGuess: string | null
28: ): Promise<string> {
29:   const previous = previousGuess ? `The learner previously chose: "${previousGuess}".\n` : ''
30:   const optionsText = options.map((o, i) => `${i + 1}. ${o}`).join('\n')
31:   const message = `The question:\n${question}\n
32: Options:\n${optionsText}\n
33: ${previous}
34: Source material:\n"""\n${markdown}\n"""
35: `
36: 
37:   const res = await model.invoke([
38:     { role: 'system', content: HINT_SYSTEM },
39:     { role: 'user', content: message }
40:   ])
41:   return res.content as string
42: }
43: 
44: export async function explainCorrect(
45:   markdown: string,
46:   question: string,
47:   options: string[],
48:   correctOption: string,
49:   correctIndex: number
50: ): Promise<string> {
51:   const optionsText = options.map((o, i) => `${i + 1}. ${o}`).join('\n')
52:   const message = `Question:\n${question}\n
53: Options:\n${optionsText}\n
54: Correct option (${correctIndex + 1}): ${correctOption}\n
55: Source material (markdown):\n"""\n${markdown}\n"""`
56: 
57:   const res = await model.invoke([
58:     { role: 'system', content: EXPLAIN_SYSTEM },
59:     { role: 'user', content: message }
60:   ])
61:   return res.content as string
62: }
63: 
64: export async function learnMore(
65:   markdown: string,
66:   question: string,
67:   options: string[],
68:   learnerQuestion: string,
69:   history: Array<{ role: 'user' | 'assistant'; content: string }>
70: ): Promise<string> {
71:   const optionsText = options.map((o, i) => `${i + 1}. ${o}`).join('\n')
72:   const message = `The learner is currently working on this MCQ:\n${question}\n
73: Options:\n${optionsText}\n
74: Learner asks: ${learnerQuestion}\n
75: Source material (markdown):\n"""\n${markdown}\n"""`
76: 
77:   const messageHistory = history.map((m) => ({
78:     role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
79:     content: m.content
80:   }))
81: 
82:   const res = await model.invoke([
83:     { role: 'system', content: LEARN_SYSTEM },
84:     ...messageHistory,
85:     { role: 'user', content: message }
86:   ])
87:   return res.content as string
88: }

(End of file - total 88 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/errors.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/errors.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/errors.ts</path>
<type>file</type>
<content>
1: export class AppError extends Error {
2:   statusCode: number
3: 
4:   constructor(message: string, statusCode: number) {
5:     super(message)
6:     this.statusCode = statusCode
7:   }
8: }
9: 
10: export class NotFoundError extends AppError {
11:   constructor(message: string) {
12:     super(message, 404)
13:   }
14: }
15: 
16: export class BadRequestError extends AppError {
17:   constructor(message: string) {
18:     super(message, 400)
19:   }
20: }

(End of file - total 20 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/db.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/db.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/db.ts</path>
<type>file</type>
<content>
1: import Database from 'better-sqlite3'
2: import { readFileSync } from 'node:fs'
3: import { join } from 'node:path'
4: import { DB_PATH, ROOT_DIR } from './config.ts'
5: 
6: export const db = new Database(DB_PATH)
7: db.pragma('journal_mode = WAL')
8: db.pragma('foreign_keys = ON')
9: 
10: export const SCHEMA_SQL = readFileSync(join(ROOT_DIR, 'src', 'schema.sql'), { encoding: 'utf-8' })
11: 
12: export interface DocumentRow {
13:   id: number
14:   filename: string
15:   stored_filename: string
16:   filepath: string
17:   title: string
18:   markdown: string | null
19:   markdown_chars: number
20:   status: string
21:   error: string | null
22:   created_at: string
23: }
24: 
25: export interface LessonPlanRow {
26:   id: number
27:   document_id: number
28:   title: string
29:   description: string
30:   objectives: string
31:   difficulty: string
32:   status: string
33:   created_at: string
34: }
35: 
36: export interface QuizQuestionRow {
37:   id: number
38:   lesson_plan_id: number
39:   objective_index: number
40:   objective_text: string
41:   question: string
42:   options: string
43:   correct_index: number
44:   explanation: string
45:   hint: string
46:   created_at: string
47: }
48: 
49: export interface AttemptRow {
50:   id: number
51:   lesson_plan_id: number
52:   score: number
53:   total: number
54:   answers: string
55:   summary: string
56:   study_tips: string
57:   weak_topics: string
58:   strengths: string
59:   created_at: string
60: }

(End of file - total 60 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/components/objective-tracker.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/components/objective-tracker.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/components/objective-tracker.tsx</path>
<type>file</type>
<content>
1: import { Check, Circle, Loader2, X } from 'lucide-react'
2: import { cn } from '#lib/utils'
3: import type { Objective } from '#lib/types'
4: import { Badge } from '#components/ui/badge'
5: 
6: export type ObjectiveStatus = 'pending' | 'current' | 'correct' | 'skipped'
7: 
8: interface Props {
9:   objectives: Objective[]
10:   statuses: ObjectiveStatus[]
11:   score: number
12:   total: number
13: }
14: 
15: export function ObjectiveTracker({ objectives, statuses, score, total }: Props) {
16:   return (
17:     <div className="space-y-4">
18:       <div className="rounded-2xl border border-border bg-card p-4">
19:         <div className="flex items-baseline justify-between">
20:           <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Score</p>
21:           <p className="text-2xl font-bold tabular-nums">
22:             {score}
23:             <span className="text-base text-muted-foreground">/{total}</span>
24:           </p>
25:         </div>
26:         <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
27:           <div
28:             className="h-full rounded-full bg-primary transition-all duration-500"
29:             style={{
30:               width: total === 0 ? '0%' : `${(score / total) * 100}%`
31:             }}
32:           />
33:         </div>
34:       </div>
35: 
36:       <div className="rounded-2xl border border-border bg-card p-4">
37:         <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Objectives</p>
38:         <ol className="space-y-1.5">
39:           {objectives.map((obj, i) => {
40:             const status = statuses[i] ?? 'pending'
41:             return (
42:               <li
43:                 key={i}
44:                 className={cn(
45:                   'flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors',
46:                   status === 'current' && 'bg-accent/60'
47:                 )}
48:               >
49:                 <span className="mt-0.5 shrink-0">
50:                   {status === 'correct' ? (
51:                     <span className="flex size-5 items-center justify-center rounded-full bg-success/15 text-success">
52:                       <Check className="size-3.5" />
53:                     </span>
54:                   ) : status === 'skipped' ? (
55:                     <span className="flex size-5 items-center justify-center rounded-full bg-danger/15 text-danger">
56:                       <X className="size-3.5" />
57:                     </span>
58:                   ) : status === 'current' ? (
59:                     <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
60:                       <Loader2 className="size-3.5 animate-spin" />
61:                     </span>
62:                   ) : (
63:                     <Circle className="size-5 text-muted-foreground/50" />
64:                   )}
65:                 </span>
66:                 <div className="min-w-0 flex-1">
67:                   <p
68:                     className={cn(
69:                       'leading-snug',
70:                       status === 'pending' && 'text-muted-foreground',
71:                       (status === 'correct' || status === 'skipped') &&
72:                         'text-muted-foreground line-through decoration-muted-foreground/40'
73:                     )}
74:                   >
75:                     {obj.text}
76:                   </p>
77:                   <Badge variant="outline" className="mt-1">
78:                     {obj.topic}
79:                   </Badge>
80:                 </div>
81:               </li>
82:             )
83:           })}
84:         </ol>
85:       </div>
86:     </div>
87:   )
88: }

(End of file - total 88 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/components/summary-view.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/components/summary-view.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/components/summary-view.tsx</path>
<type>file</type>
<content>
1: import Markdown from 'react-markdown'
2: import { Award, BookOpen, CheckCircle2, Lightbulb, RefreshCw, TrendingUp, XCircle } from 'lucide-react'
3: import { cn } from '#lib/utils'
4: import { Badge } from '#components/ui/badge'
5: import { Button } from '#components/ui/button'
6: import { Card, CardContent } from '#components/ui/card'
7: import { Separator } from '#components/ui/separator'
8: import type { AttemptSummary } from '#lib/types'
9: 
10: interface Props {
11:   summary: AttemptSummary
12:   onRetake: () => void
13:   onBackToLibrary: () => void
14: }
15: 
16: export function SummaryView({ summary, onRetake, onBackToLibrary }: Props) {
17:   const pct = summary.total === 0 ? 0 : Math.round((summary.score / summary.total) * 100)
18:   const passedFirstTry = summary.answers.filter((a) => a.attempts === 0 || a.attempts === 1).length
19: 
20:   return (
21:     <div className="mx-auto max-w-3xl space-y-6">
22:       <Card className="overflow-hidden">
23:         <div className="relative bg-gradient-to-br from-primary/15 via-accent/40 to-transparent p-6 text-center sm:p-10">
24:           <div className="absolute inset-0 bg-grid-pattern opacity-40" />
25:           <div className="relative z-10">
26:             <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
27:               <Award className="size-7" />
28:             </div>
29:             <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Lesson complete</p>
30:             <p className="mt-2 text-4xl font-bold tabular-nums">
31:               {summary.score}
32:               <span className="text-2xl text-muted-foreground">/{summary.total}</span>
33:             </p>
34:             <p className="mt-1 text-sm text-muted-foreground">
35:               {pct}% correct first try · {passedFirstTry} of {summary.total} mastered on first attempt
36:             </p>
37:             <div className="mx-auto mt-4 h-2 w-48 overflow-hidden rounded-full bg-secondary">
38:               <div
39:                 className="h-full rounded-full bg-primary transition-all duration-700"
40:                 style={{ width: `${pct}%` }}
41:               />
42:             </div>
43:           </div>
44:         </div>
45: 
46:         <Separator />
47: 
48:         <CardContent className="space-y-6 p-6 sm:p-8">
49:           <section>
50:             <div className="flex items-center gap-2">
51:               <TrendingUp className="size-4 text-primary" />
52:               <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
53:                 Performance summary
54:               </h2>
55:             </div>
56:             <p className="mt-3 text-sm leading-relaxed text-foreground">{summary.summary}</p>
57:           </section>
58: 
59:           {(summary.strengths.length > 0 || summary.weakTopics.length > 0) && (
60:             <div className="grid gap-4 sm:grid-cols-2">
61:               {summary.strengths.length > 0 && (
62:                 <div className="rounded-xl border border-success/30 bg-success/5 p-4">
63:                   <div className="flex items-center gap-1.5 text-success">
64:                     <CheckCircle2 className="size-4" />
65:                     <p className="text-xs font-semibold uppercase tracking-wide">Strengths</p>
66:                   </div>
67:                   <ul className="mt-2 space-y-1">
68:                     {summary.strengths.map((s, i) => (
69:                       <li key={i} className="text-sm text-foreground">
70:                         {s}
71:                       </li>
72:                     ))}
73:                   </ul>
74:                 </div>
75:               )}
76:               {summary.weakTopics.length > 0 && (
77:                 <div className="rounded-xl border border-danger/30 bg-danger/5 p-4">
78:                   <div className="flex items-center gap-1.5 text-danger">
79:                     <XCircle className="size-4" />
80:                     <p className="text-xs font-semibold uppercase tracking-wide">Needs work</p>
81:                   </div>
82:                   <ul className="mt-2 space-y-1">
83:                     {summary.weakTopics.map((s, i) => (
84:                       <li key={i} className="text-sm text-foreground">
85:                         {s}
86:                       </li>
87:                     ))}
88:                   </ul>
89:                 </div>
90:               )}
91:             </div>
92:           )}
93: 
94:           {summary.studyTips.length > 0 && (
95:             <section className="rounded-xl border border-primary/30 bg-primary/5 p-4">
96:               <div className="flex items-center gap-2">
97:                 <Lightbulb className="size-4 text-primary" />
98:                 <h2 c

... (truncated, 9,829 chars total)
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 12,025 in / 297 out / 32 reason Cost: $0.0018

---

### **Assistant** — 2026-07-11 13:43:25 UTC

*Model: mimo-v2.5*

*Tokens: 12,270 in / 2,362 out / 16 reason*  Cost: $0.0024

<details><summary><i>Reasoning</i></summary>

Now I have a comprehensive understanding of the project. Let me compile the findings.

</details>

Here is a comprehensive report of the codebase.

---

## 1. Project Type and Framework

This is an **AI-powered learning/quiz application** called **"qnify" (ai-learning-agent)**. It is a full-stack monorepo with three top-level directories:

| Layer | Framework | Key Libraries |
|---|---|---|
| **Frontend** | **React 19** (TypeScript) | Vite 8, React Router 7, Tailwind CSS 4, shadcn/ui (base-ui), Lucide icons, react-markdown |
| **Backend** | **Fastify 5** (Node.js, TypeScript) | LangChain + OpenAI (AI quiz generation), Better-SQLite3, Zod validation |
| **PDF tooling** | `pdf-to-markdown/` | Separate utility directory |

The app lets users upload a PDF, which is converted to markdown. An AI agent then generates a learning plan (3-6 objectives), and for each objective it creates a multiple-choice quiz question. Learners answer questions, receive hints/explanations, and get a performance summary.

---

## 2. Directory Structure Overview

```
/Users/shivam/qnify/ai-learning-agent/
├── .git/
├── .gitignore
├── backend/
│   ├── package.json
│   └── src/
│       ├── index.ts              # Fastify server entry point
│       ├── routes.ts             # All API route definitions
│       ├── config.ts             # App configuration
│       ├── db.ts                 # SQLite setup + row type interfaces
│       ├── errors.ts             # Custom error classes (NotFound, BadRequest)
│       ├── ai/
│       │   ├── model.ts          # LLM model configuration
│       │   ├── schemas.ts        # Zod schemas (Quiz, Plan, Summary, Objective)
│       │   ├── quiz.ts           # AI quiz generation agent
│       │   ├── plan.ts           # AI lesson plan generation
│       │   ├── feedback.ts       # AI hint/explain/learn-more responses
│       │   └── summary.ts        # AI performance summary generation
│       └── services/
│           ├── documents.ts      # Document upload/storage service
│           ├── plans.ts          # Lesson plan CRUD service
│           ├── quizzes.ts        # Quiz CRUD, answer checking, hints
│           ├── attempts.ts       # Attempt completion + summary storage
│           └── pdf-to-markdown.ts
├── frontend/
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── main.tsx              # App entry point
│       ├── lib/
│       │   ├── api.ts            # All HTTP client functions
│       │   ├── types.ts          # TypeScript interfaces (QuizDTO, Plan, AttemptSummary, etc.)
│       │   ├── utils.ts          # Utility (cn helper)
│       │   └── format.ts         # Formatting helpers
│       ├── pages/
│       │   ├── library-page.tsx  # Document library view
│       │   └── lesson-page.tsx   # Main quiz orchestrator page
│       └── components/
│           ├── mcq-widget.tsx     # **Core quiz UI component**
│           ├── objective-tracker.tsx  # Sidebar showing objective progress
│           ├── summary-view.tsx   # Post-quiz results summary
│           ├── plan-card.tsx      # Lesson plan review/approval
│           ├── document-card.tsx  # Document list item
│           ├── sidebar.tsx        # App sidebar
│           ├── app-shell.tsx      # App layout shell
│           ├── upload-dropzone.tsx # PDF upload widget
│           └── ui/               # shadcn primitives (button, card, badge, radio-group, etc.)
└── pdf-to-markdown/              # Standalone PDF conversion utility
```

---

## 3. Key Files Related to Quiz/Question/Option Handling

### Frontend - Quiz UI Components

| File (absolute path) | Role |
|---|---|
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx` | **Primary quiz widget.** Renders the MCQ question, radio-group options, submit/retry/hint/skip buttons. Manages local state: `selected` option, `status` (idle/submitted/correct/incorrect), `hint`, `explanation`, `tries`, and a `chatOpen` Learn More panel. Shows correct (green check) and wrong (red X) states on options. Displays "Not quite" error message on incorrect answers. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx` | **Quiz orchestrator.** Manages the overall lesson flow through phases: `loading -> review -> quiz -> summary -> error`. Tracks `AnswerState` per objective (quizId, learnerIndex, attempts, correct, finalized). Lazy-generates quizzes per objective. Handles callbacks: `handleCorrect`, `handleIncorrect`, `handleSkip`, `advance`, `finish`. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/objective-tracker.tsx` | Sidebar tracker showing per-objective status (pending/current/correct/skipped) with visual indicators. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/summary-view.tsx` | Post-quiz results view. Shows score, performance summary, strengths, weak topics, study tips, and per-question review with correct/incorrect/skipped badges and option highlighting. |

### Frontend - API and Types

| File (absolute path) | Role |
|---|---|
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts` | HTTP client. Key quiz functions: `generateQuiz()`, `checkAnswer()`, `getHint()`, `getExplanation()`, `learnMore()`, `completeAttempt()`, `listQuizzes()`. Also defines `ApiError` class for error handling. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/types.ts` | TypeScript interfaces: `QuizDTO` (id, objectiveIndex, objectiveText, question, options[], hint), `AttemptSummary`, `AttemptListItem`, `ChatMessage`, `Plan`, `Objective`. |

### Backend - AI Quiz Generation

| File (absolute path) | Role |
|---|---|
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts` | Creates a LangChain agent with a system prompt that generates a single MCQ (4 options, correct index, explanation, hint) grounded in the PDF markdown for a given learning objective. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts` | Three AI functions: `generateRetryHint()` (conceptual hint without revealing answer), `explainCorrect()` (explains why correct answer is right), `learnMore()` (chat-based tutor that answers learner questions about the topic without revealing the MCQ answer). |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts` | Zod validation schemas. `quizSchema`: `{ question, options (exactly 4), correct_index (0-3), explanation, hint }`. Also `planSchema`, `summarySchema`. |

### Backend - Quiz Services and Routes

| File (absolute path) | Role |
|---|---|
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts` | Core quiz business logic. `getOrCreateQuiz()` (lazy-generates or returns cached quiz), `checkAnswer()` (compares learner index to correct index, returns explanation on correct), `getHint()`, `getExplanation()`, `learnMoreAboutQuiz()`, `getAllQuizzes()`. Defines `QuizDTO` and `AnswerOutput` interfaces. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/attempts.ts` | Handles lesson completion. `completeAttempt()` tallies score, generates AI summary, persists attempt. `getAttempt()` retrieves full attempt with answer details. `listAttempts()` lists past attempts. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts` | API route definitions. Quiz-specific routes: `POST /api/lesson-plans/:id/quizzes` (create/get quiz), `POST /api/quizzes/:id/check` (check answer), `POST /api/quizzes/:id/hint`, `POST /api/quizzes/:id/explain`, `POST /api/quizzes/:id/learn-more`, `POST /api/lesson-plans/:id/complete`. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/db.ts` | Database schema types. `QuizQuestionRow`: `{ id, lesson_plan_id, objective_index, objective_text, question, options (JSON string), correct_index, explanation, hint }`. `AttemptRow`: `{ id, lesson_plan_id, score, total, answers (JSON), summary, study_tips, weak_topics, strengths }`. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/errors.ts` | Custom error classes: `NotFoundError` (404), `BadRequestError` (400), `AppError` (base). Used throughout quiz services for missing quizzes/plans/documents. |

### How Answer/Correct/Wrong/Error Flow Works

1. **User selects an option** in `mcq-widget.tsx` via `RadioGroup`. State tracked as `selected` (option index).
2. **Submit** calls `checkAnswer(quizId, selected)` via `api.ts` -> `POST /api/quizzes/:id/check`.
3. Backend `quizzes.ts:checkAnswer()` compares `learnerIndex` to `quiz.correct_index`. If correct, it also calls `getExplanation()` to get an AI-generated explanation.
4. Frontend receives `{ correct: boolean, explanation?: string }`:
   - **Correct**: Sets `status='correct'`, locks the widget, shows green "Correct" badge, shows explanation panel, enables "Next objective" button.
   - **Incorrect**: Sets `status='incorrect'`, shows red "Not quite" error message, increments `tries`, enables "Re-submit", "Get a hint", "Learn more", and after 1+ misses, a "Skip" button.
5. **Hints**: `getHint(quizId, previousGuessIndex)` -> backend generates a conceptual hint via `generateRetryHint()` without revealing the answer.
6. **Learn More**: Opens a chat panel (`LearnMorePanel`) where the learner can ask questions about the concept. Calls `learnMore()` -> backend tutor responds grounded in PDF content without revealing the MCQ answer.
7. **Skip**: After 1+ incorrect attempts, user can skip. Sets `learnerIndex: null, finalized: true` and advances to the next objective.
8. **Finish**: After all objectives, `completeAttempt()` tallies score, generates AI summary with study tips/weak topics/strengths, and shows `summary-view.tsx`.

*[step finish: stop]* Tokens: 12,270 in / 2,362 out / 16 reason Cost: $0.0024

---
