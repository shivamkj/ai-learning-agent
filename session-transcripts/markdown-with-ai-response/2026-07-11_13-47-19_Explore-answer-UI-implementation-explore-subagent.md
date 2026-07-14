# Explore answer UI implementation (@explore subagent)

- **Session ID:** `ses_0ae9141d8ffegA3sbkC2mUROlf`
- **Created:** 2026-07-11 13:47:19 UTC
- **Total Cost:** $0.0044
- **Total Tokens:** 24,598 in / 3,007 out / 83 reason
- **Messages:** 5

## Conversation

### **User** — 2026-07-11 13:47:19 UTC

*Model: mimo-v2.5*

Search the codebase to find files related to answer selection, quiz functionality, or any UI that handles showing explanations when an answer is selected. Look for:
1. Files containing "explanation" text
2. Files with answer/quiz components
3. Any React/Vue/Angular components that handle answer clicks
4. State management related to showing/hiding explanations

Return:
- The file paths and relevant code sections
- How the current explanation display logic works
- What framework/library is being used (React, Vue, etc.)
- The current behavior when an answer is clicked

---

### **Assistant** — 2026-07-11 13:47:19 UTC

*Model: mimo-v2.5*

*Tokens: 283 in / 110 out / 21 reason*  Cost: $0.0001

<details><summary><i>Reasoning</i></summary>

Let me search the codebase thoroughly for files related to answer selection, quiz functionality, and explanation display.

</details>

I'll search the codebase systematically for quiz/answer/explanation related files.

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/*"
}
```

**Output:**
```
/Users/shivam/qnify/ai-learning-agent/.gitignore
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
/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql
/Users/shivam/qnify/ai-learning-agent/backend/src/errors.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts
/Users/shivam/qnify/ai-learning-agent/backend/data/learning.db-shm
/Users/shivam/qnify/ai-learning-agent/backend/data/learning.db-wal
/Users/shivam/qnify/ai-learning-agent/backend/data/learning.db
/Users/shivam/qnify/ai-learning-agent/backend/tsconfig.json
/Users/shivam/qnify/ai-learning-agent/backend/.env
/Users/shivam/qnify/ai-learning-agent/backend/package.json
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783768152167--kekFMzz-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783768152167--kekFMzz-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759244326-tycs3KHg-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783758430786-Rvixp60Y-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783774098176-K95NoWWi-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783758017659-XLEaM1nK-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783757555139-wC940-Vc-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759644043-1Nho7mJ9-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759244326-tycs3KHg-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783758430786-Rvixp60Y-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759341966-N1e2GLi5-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759877850-7wF9Lvg7-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759427083-wVyEfEDY-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783758017659-XLEaM1nK-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759427083-wVyEfEDY-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759341966-N1e2GLi5-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759877850-7wF9Lvg7-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783759644043-1Nho7mJ9-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783774098176-K95NoWWi-Digestive Anat Lect Notes.md
/Users/shivam/qnify/ai-learning-agent/backend/uploads/1783757555139-wC940-Vc-Digestive Anat Lect Notes.pdf
/Users/shivam/qnify/ai-learning-agent/backend/node_modules/.pnpm-workspace-state-v1.json
/Users/shivam/qnify/ai-learning-agent/backend/.env.sample
/Users/shivam/qnify/ai-learning-agent/.DS_Store
/Users/shivam/qnify/ai-learning-agent/backend/pnpm-lock.yaml
/Users/shivam/qnify/ai-learning-agent/backend/node_modules/.modules.yaml
/Users/shivam/qnify/ai-learning-agent/frontend/components.json
/Users/shivam/qnify/ai-learning-agent/frontend/index.html
/Users/shivam/qnify/ai-learning-agent/frontend/tsconfig.node.json
/Users/shivam/qnify/ai-learning-agent/frontend/pnpm-lock.yaml
/Users/shivam/qnify/ai-learning-agent/frontend/package.json
/Users/shivam/qnify/ai-learning-agent/frontend/tsconfig.json
/Users/shivam/qnify/ai-learning-agent/frontend/vite.config.ts
/Users/shivam/qnify/ai-learning-agent/frontend/tsconfig.app.json
/Users/shivam/qnify/ai-learning-agent/backend/node_modules/.bin/nanoid
/Users/shivam/qnify/ai-learning-agent/frontend/.oxlintrc.json
/Users/shivam/qnify/ai-learning-agent/backend/node_modules/.bin/tsc
/Users/shivam/qnify/ai-learning-agent/pdf-to-markdown/requirements.txt
/Users/shivam/qnify/ai-learning-agent/pdf-to-markdown/convert-docling.py
/Users/shivam/qnify/ai-learning-agent/frontend/src/index.css
/Users/shivam/qnify/ai-learning-agent/frontend/src/main.tsx
/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.

... (truncated, 7,862 chars total)
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>grep</code> (completed)</summary>

**explanation**

**Input:**
```json
{
  "pattern": "explanation"
}
```

**Output:**
```
Found 26 matches
/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts:
  Line 44:       `INSERT INTO quiz_questions (lesson_plan_id, objective_index, objective_text, question, options, correct_index, explanation, hint)

  Line 55:       quiz.explanation,

  Line 106:   explanation: string

  Line 119:   const explanation = await explainCorrect(markdown, quiz.question, options, correct, quiz.correct_index)

  Line 120:   return { explanation, correctIndex: quiz.correct_index }

  Line 125:   explanation?: string

  Line 133:   const { explanation } = await getExplanation(quizId)

  Line 134:   return { correct: true, explanation }


/Users/shivam/qnify/ai-learning-agent/backend/src/db.ts:
  Line 44:   explanation: string


/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql:
  Line 35:   explanation     TEXT NOT NULL DEFAULT '',


/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts:
  Line 21: const EXPLAIN_SYSTEM = `You are a tutor giving a short, friendly explanation of why the correct answer to a MCQ is right, grounded in the PDF. 2-3 sentences max. No fluff.`


/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts:
  Line 11: - The explanation must justify the correct answer using the source.


/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.tsx:
  Line 54:             hints, and explanations — grounded in your PDF.


/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx:
  Line 304:               onCorrect={(learnerIndex, explanation) => {

  Line 305:                 void explanation


/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts:
  Line 21:   explanation: z.string().describe('A 1-3 sentence explanation of why the answer is correct.'),


/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts:
  Line 86:   explanation: string

  Line 96:   explanation?: string


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx:
  Line 16:   onCorrect: (learnerIndex: number, explanation: string) => void

  Line 40:   const [explanation, setExplanation] = useState<string | null>(null)

  Line 61:         if (res.explanation) setExplanation(res.explanation)

  Line 63:         onCorrect(selected, res.explanation ?? '')

  Line 172:                   Try again — you can request a hint or ask for a deeper explanation. No penalty for retries.

  Line 188:           {explanation && status === 'correct' && (

  Line 193:                 <p className="mt-0.5 text-foreground">{explanation}</p>


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx:
  Line 92:                   The agent will generate one MCQ per objective. You'll get hints and explanations, and can ask

```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>grep</code> (completed)</summary>

**answer|quiz|question**

**Input:**
```json
{
  "pattern": "answer|quiz|question"
}
```

**Output:**
```
Found 100 matches (more matches available)
/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts:
  Line 2: import { generateQuiz } from '../ai/quiz.ts'

  Line 12:   question: string

  Line 24:     .prepare(`SELECT * FROM quiz_questions WHERE lesson_plan_id = ? AND objective_index = ?`)

  Line 32:       question: existing.question,

  Line 40:   const quiz = await generateQuiz(markdown, objective.text, objective.topic)

  Line 44:       `INSERT INTO quiz_questions (lesson_plan_id, objective_index, objective_text, question, options, correct_index, explanation, hint)

  Line 52:       quiz.question,

  Line 53:       JSON.stringify(quiz.options),

  Line 54:       quiz.correct_index,

  Line 55:       quiz.explanation,

  Line 56:       quiz.hint

  Line 63:     question: quiz.question,

  Line 64:     options: quiz.options,

  Line 65:     hint: quiz.hint

  Line 73:     .prepare(`SELECT * FROM quiz_questions WHERE lesson_plan_id = ? ORDER BY objective_index ASC`)

  Line 79:     question: r.question,

  Line 85: export async function getQuizInternal(quizId: number): Promise<QuizQuestionRow | null> {

  Line 86:   return (db.prepare(`SELECT * FROM quiz_questions WHERE id = ?`).get(quizId) as QuizQuestionRow | undefined) ?? null

  Line 89: export async function getHint(quizId: number, previousGuessIndex: number | null): Promise<string> {

  Line 90:   const quiz = await getQuizInternal(quizId)

  Line 91:   if (!quiz) throw new NotFoundError('Quiz not found')

  Line 92:   const plan = await getPlan(quiz.lesson_plan_id)

  Line 96:   const options = JSON.parse(quiz.options) as string[]

  Line 99:     quiz.question,

  Line 110: export async function getExplanation(quizId: number): Promise<ExplanationResult> {

  Line 111:   const quiz = await getQuizInternal(quizId)

  Line 112:   if (!quiz) throw new NotFoundError('Quiz not found')

  Line 113:   const plan = await getPlan(quiz.lesson_plan_id)

  Line 117:   const options = JSON.parse(quiz.options) as string[]

  Line 118:   const correct = options[quiz.correct_index]

  Line 119:   const explanation = await explainCorrect(markdown, quiz.question, options, correct, quiz.correct_index)

  Line 120:   return { explanation, correctIndex: quiz.correct_index }

  Line 128: export async function checkAnswer(quizId: number, learnerIndex: number): Promise<AnswerOutput> {

  Line 129:   const quiz = await getQuizInternal(quizId)

  Line 130:   if (!quiz) throw new NotFoundError('Quiz not found')

  Line 131:   const correct = learnerIndex === quiz.correct_index

  Line 133:   const { explanation } = await getExplanation(quizId)

  Line 143: export async function learnMoreAboutQuiz(id: number, question: string, history: MessageHistory): Promise<string> {

  Line 144:   const quiz = await getQuizInternal(id)

  Line 145:   if (!quiz) throw new NotFoundError('Quiz not found')

  Line 146:   const plan = await getPlan(quiz.lesson_plan_id)

  Line 150:   const options = JSON.parse(quiz.options) as string[]

  Line 151:   return learnMore(markdown, quiz.question, options, question, history)


/Users/shivam/qnify/ai-learning-agent/backend/src/services/attempts.ts:
  Line 4: import { getQuizInternal } from './quizzes.ts'

  Line 15:   answers: Array<Answer>

  Line 19:   question: string

  Line 28:   quizId: number

  Line 35:   payload: { answers: AttemptAnswer[] }

  Line 43:   const questions: AttemptInput['questions'] = []

  Line 45:   for (const ans of payload.answers) {

  Line 46:     const quiz = await getQuizInternal(ans.quizId)

  Line 47:     if (!quiz || quiz.lesson_plan_id !== planId) continue

  Line 48:     const options = JSON.parse(quiz.options) as string[]

  Line 49:     const correct = ans.learnerIndex === quiz.correct_index

  Line 51:     questions.push({

  Line 52:       objectiveText: quiz.objective_text,

  Line 53:       question: quiz.question,

  Line 55:       correctIndex: quiz.correct_index,

  Line 62:   const summary = await generateSummary({ objectives, questions, markdown })

  Line 67:     questions.length,

  Line 68:     JSON.stringify(payload.answers),

  Line 76:       `INSERT INTO attempts (lesson_plan_id, score, total, answers, summary, study_tips, weak_topics, strengths)

  Line 86:     total: questions.length,

  Line 91:     answers: questions.map((q) => ({

  Line 92:       question: q.question,

  Line 118:   quizId: number

  Line 126:   const answers = JSON.parse(row.answers) as Array<AnswerData>

  Line 127:   const quizzes = await Promise.all(

  Line 128:     answers.map(async (a) => {

  Line 129:       const quiz = await getQuizInternal(a.quizId)

  Line 130:       if (!quiz) return null

  Line 132:         question: quiz.question,

  Line 133:         options: JSON.parse(quiz.options) as string[],

  Line 134:         correctIndex: quiz.correct_index,

  Line 137:         objectiveText: quiz.objective_text

  Line 148:     answers: quizzes.filter(Boolean) as AttemptSummaryDTO['answers']


/Users/

... (truncated, 7,264 chars total)
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>grep</code> (completed)</summary>

**onClick|click|handleClick**

**Input:**
```json
{
  "pattern": "onClick|click|handleClick"
}
```

**Output:**
```
Found 20 matches
/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.tsx:
  Line 78:           <button onClick={() => setPlanError(null)} className="mt-2 text-xs underline hover:text-danger">


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/summary-view.tsx:
  Line 182:           <Button onClick={onRetake} className="pt-2">


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/upload-dropzone.tsx:
  Line 49:       onClick={() => inputRef.current?.click()}

  Line 53:         if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()

  Line 81:         or click to browse. We'll convert it to text and draft a lesson plan.


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/sidebar.tsx:
  Line 91:                   onClick={() => {


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx:
  Line 100:             <Button variant="ghost" onClick={onBack}>

  Line 103:             <Button className={cn('gap-1.5')} onClick={handleApprove} disabled={approving}>


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx:
  Line 201:                 <Button onClick={submit} disabled={selected === null || submitting} className="gap-1.5">

  Line 205:                 <Button variant="outline" onClick={requestHint} disabled={hintLoading} className="gap-1.5">

  Line 209:                 <Button variant="ghost" onClick={() => setChatOpen(true)} className="gap-1.5">

  Line 214:                   <Button variant="ghost" onClick={retry} className="ml-auto">

  Line 219:                   <Button variant="ghost" onClick={onSkip} className="text-muted-foreground">

  Line 226:               <Button onClick={onNext} className="ml-auto gap-1.5">

  Line 284:       <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={onClose} />

  Line 296:           <Button variant="ghost" size="icon-sm" onClick={onClose}>

  Line 335:             <Button onClick={send} disabled={loading || !input.trim()} size="icon">


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/document-card.tsx:
  Line 89:           <Button size="sm" className="gap-1.5" onClick={start}>

  Line 96:             <Button size="sm" className="gap-1.5" onClick={start}>

  Line 110:               <Button size="sm" variant="ghost" className="gap-1.5" onClick={start}>

```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 283 in / 110 out / 21 reason Cost: $0.0001

---

### **Assistant** — 2026-07-11 13:47:23 UTC

*Model: mimo-v2.5*

*Tokens: 5,987 in / 295 out / 25 reason*  Cost: $0.0009

<details><summary><i>Reasoning</i></summary>

Now I have a good overview. Let me read the key files in detail to understand the quiz/answer/explanation flow.

</details>

Now let me read the key files in detail:

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
124:               const next = Number(v)
125:               setSelected(next)
126:               if (status === 'incorrect') {
127:                 setStatus('idle')
128:                 setHint(null)
129:               }
130:             }}
131:             className="gap-2.5"
132:           >
133:             {quiz.options.map((opt, i) => {
134:               const isSelected = selected === i
135:               const showAsCorrect = locked && isSelected
136:               const showAsWrong = status === 'incorrect' && isS

... (truncated, 14,588 chars total)
```

**Duration:** 0.0s
</details>

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

... (truncated, 11,851 chars total)
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

*[step finish: tool-calls]* Tokens: 5,987 in / 295 out / 25 reason Cost: $0.0009

---

### **Assistant** — 2026-07-11 13:47:28 UTC

*Model: mimo-v2.5*

*Tokens: 16,016 in / 151 out / 20 reason*  Cost: $0.0023

<details><summary><i>Reasoning</i></summary>

Let me also check the frontend package.json to confirm the framework and look at a few more files.

</details>

Let me also check the frontend framework and any remaining relevant files:

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

**Users/shivam/qnify/ai-learning-agent/frontend/src/main.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/main.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/main.tsx</path>
<type>file</type>
<content>
1: import { StrictMode } from 'react'
2: import { createRoot } from 'react-dom/client'
3: import { createBrowserRouter, RouterProvider } from 'react-router-dom'
4: import './index.css'
5: import { LibraryPage } from '#pages/library-page'
6: import { LessonPage } from '#pages/lesson-page'
7: import { AppShell } from '#components/app-shell'
8: 
9: const router = createBrowserRouter([
10:   {
11:     path: '/',
12:     element: <AppShell />,
13:     children: [
14:       { index: true, element: <LibraryPage /> },
15:       { path: 'learn/:planId', element: <LessonPage /> }
16:     ]
17:   }
18: ])
19: 
20: createRoot(document.getElementById('root')!).render(
21:   <StrictMode>
22:     <RouterProvider router={router} />
23:   </StrictMode>
24: )

(End of file - total 24 lines)
</content>
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

**Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql</path>
<type>file</type>
<content>
1: CREATE TABLE IF NOT EXISTS documents (
2:   id              INTEGER PRIMARY KEY AUTOINCREMENT,
3:   filename        TEXT NOT NULL,
4:   stored_filename TEXT NOT NULL,
5:   filepath        TEXT NOT NULL,
6:   title           TEXT NOT NULL DEFAULT '',
7:   markdown        TEXT,
8:   markdown_chars  INTEGER NOT NULL DEFAULT 0,
9:   status          TEXT NOT NULL DEFAULT 'uploaded',
10:   error           TEXT,
11:   created_at      TEXT NOT NULL DEFAULT (DATETIME('now'))
12: );
13: 
14: CREATE TABLE IF NOT EXISTS lesson_plans (
15:   id          INTEGER PRIMARY KEY AUTOINCREMENT,
16:   document_id INTEGER NOT NULL,
17:   title       TEXT NOT NULL DEFAULT '',
18:   description TEXT NOT NULL DEFAULT '',
19:   objectives  TEXT NOT NULL,
20:   difficulty  TEXT NOT NULL DEFAULT 'intermediate',
21:   status      TEXT NOT NULL DEFAULT 'draft',
22:   created_at  TEXT NOT NULL DEFAULT (DATETIME('now')),
23:   FOREIGN KEY (document_id) REFERENCES documents (id) ON DELETE CASCADE
24: );
25: CREATE INDEX IF NOT EXISTS idx_lesson_plans_document ON lesson_plans (document_id);
26: 
27: CREATE TABLE IF NOT EXISTS quiz_questions (
28:   id              INTEGER PRIMARY KEY AUTOINCREMENT,
29:   lesson_plan_id  INTEGER NOT NULL,
30:   objective_index INTEGER NOT NULL,
31:   objective_text  TEXT NOT NULL,
32:   question        TEXT NOT NULL,
33:   options         TEXT NOT NULL,
34:   correct_index   INTEGER NOT NULL,
35:   explanation     TEXT NOT NULL DEFAULT '',
36:   hint            TEXT NOT NULL DEFAULT '',
37:   created_at      TEXT NOT NULL DEFAULT (DATETIME('now')),
38:   FOREIGN KEY (lesson_plan_id) REFERENCES lesson_plans (id) ON DELETE CASCADE,
39:   UNIQUE (lesson_plan_id, objective_index)
40: );
41: CREATE INDEX IF NOT EXISTS idx_quiz_questions_plan ON quiz_questions (lesson_plan_id);
42: 
43: CREATE TABLE IF NOT EXISTS attempts (
44:   id             INTEGER PRIMARY KEY AUTOINCREMENT,
45:   lesson_plan_id INTEGER NOT NULL,
46:   score          INTEGER NOT NULL DEFAULT 0,
47:   total          INTEGER NOT NULL DEFAULT 0,
48:   answers        TEXT NOT NULL DEFAULT '[]',
49:   summary        TEXT NOT NULL DEFAULT '',
50:   study_tips     TEXT NOT NULL DEFAULT '',
51:   weak_topics    TEXT NOT NULL DEFAULT '[]',
52:   strengths      TEXT NOT NULL DEFAULT '[]',
53:   created_at     TEXT NOT NULL DEFAULT (DATETIME('now')),
54:   FOREIGN KEY (lesson_plan_id) REFERENCES lesson_plans (id) ON DELETE CASCADE
55: );
56: CREATE INDEX IF NOT EXISTS idx_attempts_plan ON attempts (lesson_plan_id);

(End of file - total 56 lines)
</content>
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 16,016 in / 151 out / 20 reason Cost: $0.0023

---

### **Assistant** — 2026-07-11 13:47:32 UTC

*Model: mimo-v2.5*

*Tokens: 2,312 in / 2,451 out / 17 reason*  Cost: $0.0011

<details><summary><i>Reasoning</i></summary>

Now I have a comprehensive understanding of the codebase. Let me compile my findings.

</details>

Here is a comprehensive report of my findings.

---

## Framework / Tech Stack

- **Frontend**: **React 19** with TypeScript, using Vite as the bundler, React Router v7 for routing, Tailwind CSS v4 for styling, and **shadcn/ui** component library (based on Radix primitives). No Vue or Angular.
- **Backend**: **Fastify** (Node.js) with TypeScript, SQLite via better-sqlite3, LangChain for AI integration, and Zod for validation.

---

## Files Related to Answer Selection, Quiz, and Explanation Display

### Primary Frontend Files

| File | Purpose |
|---|---|
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx` | **Core quiz widget** -- renders the MCQ options, handles answer selection, submission, hint display, explanation display, and "learn more" chat panel |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx` | **Lesson orchestrator** -- manages quiz phase progression, answer state tracking, and wires up MCQWidget callbacks |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts` | **API client** -- contains `checkAnswer()`, `getHint()`, `getExplanation()`, and `learnMore()` functions |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/types.ts` | **Type definitions** -- `QuizDTO`, `AttemptSummary`, `ChatMessage` interfaces |

### Primary Backend Files

| File | Purpose |
|---|---|
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts` | **Quiz service** -- `checkAnswer()`, `getExplanation()`, `getHint()`, `learnMoreAboutQuiz()` |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts` | **AI feedback generation** -- `explainCorrect()`, `generateRetryHint()`, `learnMore()` |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts` | **Quiz generation** -- generates MCQs from PDF content via LangChain agent |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts` | **Zod schemas** -- defines the quiz structure including the `explanation` field |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts` | **API routes** -- REST endpoints for `/api/quizzes/:id/check`, `/explain`, `/hint`, `/learn-more` |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql` | **Database schema** -- `quiz_questions` table has an `explanation TEXT NOT NULL DEFAULT ''` column |

---

## How the Explanation Display Logic Works

### 1. Quiz Generation (Backend)

When a quiz is generated (`/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts`), the AI produces a `Quiz` object with this shape (defined in `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts`, lines 17-23):

```typescript
export const quizSchema = z.object({
  question: z.string(),
  options: z.array(z.string()).min(4).max(4),
  correct_index: z.number().int().min(0).max(3),
  explanation: z.string().describe('A 1-3 sentence explanation of why the answer is correct.'),
  hint: z.string()
})
```

The explanation is stored in SQLite in the `quiz_questions` table (`explanation TEXT NOT NULL DEFAULT ''`).

### 2. Answer Check (Backend)

When the learner submits an answer, the backend endpoint `POST /api/quizzes/:id/check` is called (`/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts`, lines 128-135):

```typescript
export async function checkAnswer(quizId: number, learnerIndex: number): Promise<AnswerOutput> {
  const quiz = await getQuizInternal(quizId)
  if (!quiz) throw new NotFoundError('Quiz not found')
  const correct = learnerIndex === quiz.correct_index
  if (!correct) return { correct: false }  // <-- NO explanation on wrong answer
  const { explanation } = await getExplanation(quizId)
  return { correct: true, explanation }
}
```

Key behavior:
- **If incorrect**: Returns `{ correct: false }` with NO explanation.
- **If correct**: Calls `getExplanation()` which invokes the AI model via `explainCorrect()` from `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts` (lines 44-61), then returns `{ correct: true, explanation }`.

The AI explanation is generated **on every correct answer** -- it is NOT simply reading the stored explanation from the database. The `getExplanation()` function (lines 110-121) fetches the quiz row, gets the source markdown, and calls the AI:

```typescript
const explanation = await explainCorrect(markdown, quiz.question, options, correct, quiz.correct_index)
```

The `explainCorrect` AI prompt (`/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts`, line 21):
```
You are a tutor giving a short, friendly explanation of why the correct answer to a MCQ is right, grounded in the PDF. 2-3 sentences max. No fluff.
```

### 3. Explanation Display (Frontend)

In `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx`:

**State management** (line 40):
```typescript
const [explanation, setExplanation] = useState<string | null>(null)
```

**On correct answer** (lines 60-63):
```typescript
if (res.correct) {
  if (res.explanation) setExplanation(res.explanation)
  setStatus('correct')
  onCorrect(selected, res.explanation ?? '')
}
```

**Rendering** (lines 188-196):
```typescript
{explanation && status === 'correct' && (
  <div className="flex items-start gap-2.5 rounded-xl border border-success/40 bg-success/10 p-3.5 text-sm">
    <Check className="size-4 shrink-0 translate-y-0.5 text-success" />
    <div>
      <p className="font-medium text-success">Explanation</p>
      <p className="mt-0.5 text-foreground">{explanation}</p>
    </div>
  </div>
)}
```

---

## Current Behavior When an Answer Is Clicked

Here is the complete flow, step by step:

### Step 1: User Selects an Answer (Radio Click)
- The `RadioGroup` `onValueChange` handler fires (lines 122-129).
- It sets `selected` to the clicked option index via `setSelected(next)`.
- If the current status is `'incorrect'` (a previous wrong attempt), it resets status to `'idle'` and clears the hint.
- The widget is NOT locked yet -- the user can still change their selection.

### Step 2: User Clicks "Submit Answer"
- The `submit()` function is called (lines 54-72).
- It calls `checkAnswer(quiz.id, selected)` which hits `POST /api/quizzes/:id/check` on the backend.

### Step 3a: If the Answer Is CORRECT
1. The backend generates an AI explanation via the `EXPLAIN_SYSTEM` prompt.
2. Backend returns `{ correct: true, explanation: "..." }`.
3. Frontend sets `explanation` state to the explanation text.
4. Frontend sets `status` to `'correct'` (which locks the quiz -- `locked = true`).
5. A **green success badge** with a checkmark appears in the header.
6. The **explanation panel** is displayed as a green-bordered box with a check icon and the heading "Explanation" followed by the AI-generated text.
7. All radio buttons are disabled (`disabled={locked}`).
8. The action buttons area shows only a **"Next objective"** (or "Finish & see results" for the last question) button.
9. The parent callback `onCorrect(selected, explanation)` is called, which in `lesson-page.tsx` marks the answer as `finalized: true` and `correct: true` in the answer state.

### Step 3b: If the Answer Is INCORRECT
1. Backend returns `{ correct: false }` (no explanation included).
2. Frontend sets `status` to `'incorrect'`.
3. The **selected option is highlighted in red** with an X icon.
4. A **red alert box** appears saying "Not quite. Try again -- you can request a hint or ask for a deeper explanation."
5. The action buttons area shows:
   - **"Re-submit"** button (to try again with a different selection)
   - **"Get a hint"** button (calls `POST /api/quizzes/:id/hint`, shows a conceptual nudge without revealing the answer)
   - **"Learn more"** button (opens a chat panel for deeper exploration)
   - **"Reset selection"** button (clears the selection)
   - **"Skip ->"** button (only shown after 1+ failed attempts)
6. The answer is NOT locked -- the user can change their selection and resubmit.

### State Reset on Quiz Change
When a new quiz loads (different objective), `useEffect` on `quiz.id` (lines 45-52) resets all state:
```typescript
setSelected(null)
setStatus('idle')
setHint(null)
setExplanation(null)
setTries(0)
setChatOpen(false)
```

### State Not Persisted Across Questions
The explanation is stored in **local component state** only (`useState`). It is not persisted to any global state store or context. When the quiz changes (via `key={currentQuiz.id}`), the component remounts and the explanation resets to `null`.

---

## Summary of Key Architectural Points

1. **No global state management library** (no Redux, Zustand, Jotai, etc.) -- state is managed with React `useState`/`useCallback` hooks, with answer tracking done in `lesson-page.tsx` via a `Record<number, AnswerState>` dictionary.

2. **Explanations are AI-generated at runtime** -- even though the database stores an `explanation` column per quiz question, the backend does NOT simply read and return it. Instead, it calls the AI model each time to generate a fresh explanation grounded in the source PDF markdown. The stored explanation in the DB appears to be unused after quiz creation.

3. **Explanations are only shown after a CORRECT answer** -- incorrect answers never display an explanation. This is enforced both server-side (backend returns no explanation for wrong answers) and client-side (the rendering condition is `explanation && status === 'correct'`).

4. **The `onCorrect` callback in `lesson-page.tsx` discards the explanation** (line 305: `void explanation`) -- the parent page does not store or display the explanation separately; it is entirely handled within the `MCQWidget` component.

*[step finish: stop]* Tokens: 2,312 in / 2,451 out / 17 reason Cost: $0.0011

---
