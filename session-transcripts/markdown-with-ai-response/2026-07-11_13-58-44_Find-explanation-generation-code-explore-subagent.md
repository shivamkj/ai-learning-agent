# Find explanation generation code (@explore subagent)

- **Session ID:** `ses_0ae86ce07ffeSkjKCIp0MJyuxl`
- **Created:** 2026-07-11 13:58:44 UTC
- **Total Cost:** $0.0063
- **Total Tokens:** 37,766 in / 3,156 out / 96 reason
- **Messages:** 6

## Conversation

### **User** — 2026-07-11 13:58:44 UTC

*Model: mimo-v2.5*

Search the codebase to find all files related to explanation generation and display in this project. I need to understand:

1. Where explanations are generated (look for "explanation", "generate", "submit" keywords)
2. Where explanations are displayed (UI components)
3. How the explanation generation is triggered (on submit vs on button click)

Look for patterns like:
- "explanation" in filenames
- "generate" or "generateExplanation" in code
- "isCorrect" or "correct" combined with "explanation"
- Button handlers related to explanation

Return the file paths and relevant line numbers for each finding.

---

### **Assistant** — 2026-07-11 13:58:44 UTC

*Model: mimo-v2.5*

*Tokens: 293 in / 256 out / 23 reason*  Cost: $0.0001

<details><summary><i>Reasoning</i></summary>

Let me search the codebase thoroughly for explanation-related files and code patterns. I'll start with multiple parallel searches.

</details>

I'll start by searching for files and code patterns related to explanation generation and display across the codebase.

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/*explanation*"
}
```

**Output:**
```
No files found
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/*Explanation*"
}
```

**Output:**
```
No files found
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/*Explain*"
}
```

**Output:**
```
No files found
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>grep</code> (completed)</summary>

**explanation**

**Input:**
```json
{
  "pattern": "explanation",
  "include": "*.{ts,tsx,js,jsx}"
}
```

**Output:**
```
Found 27 matches
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


/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts:
  Line 21:   explanation: z.string().describe('A 1-3 sentence explanation of why the answer is correct.'),


/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts:
  Line 11: - The explanation must justify the correct answer using the source.


/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts:
  Line 21: const EXPLAIN_SYSTEM = `You are a tutor giving a short, friendly explanation of why the correct answer to a MCQ is right, grounded in the PDF. 2-3 sentences max. No fluff.`


/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.tsx:
  Line 54:             hints, and explanations — grounded in your PDF.


/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx:
  Line 304:               onCorrect={(learnerIndex, explanation) => {

  Line 305:                 void explanation


/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts:
  Line 86:   explanation: string

  Line 96:   explanation?: string


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx:
  Line 17:   onCorrect: (learnerIndex: number, explanation: string) => void

  Line 41:   const [explanation, setExplanation] = useState<string | null>(null)

  Line 64:         if (res.explanation) setExplanation(res.explanation)

  Line 66:         onCorrect(selected, res.explanation ?? '')

  Line 175:                   Try again — you can request a hint or ask for a deeper explanation. No penalty for retries.

  Line 191:           {explanation && status === 'correct' && showExplanation && (

  Line 196:                 <p className="mt-0.5 text-foreground">{explanation}</p>

  Line 230:                 {explanation && (

  Line 232:                     {showExplanation ? 'Hide explanation' : 'Show explanation'}


/Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx:
  Line 92:                   The agent will generate one MCQ per objective. You'll get hints and explanations, and can ask

```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>grep</code> (completed)</summary>

**generateExplanation|generate.*explanation|explanation.*generate**

**Input:**
```json
{
  "pattern": "generateExplanation|generate.*explanation|explanation.*generate",
  "include": "*.{ts,tsx,js,jsx}"
}
```

**Output:**
```
Found 1 matches
/Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx:
  Line 92:                   The agent will generate one MCQ per objective. You'll get hints and explanations, and can ask

```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>grep</code> (completed)</summary>

**isCorrect.*explanation|explanation.*isCorrect|correct.*explanation**

**Input:**
```json
{
  "pattern": "isCorrect.*explanation|explanation.*isCorrect|correct.*explanation",
  "include": "*.{ts,tsx,js,jsx}"
}
```

**Output:**
```
Found 2 matches
/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts:
  Line 44:       `INSERT INTO quiz_questions (lesson_plan_id, objective_index, objective_text, question, options, correct_index, explanation, hint)

  Line 134:   return { correct: true, explanation }

```

**Duration:** 0.0s
</details>

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

*[step finish: tool-calls]* Tokens: 293 in / 256 out / 23 reason Cost: $0.0001

---

### **Assistant** — 2026-07-11 13:58:50 UTC

*Model: mimo-v2.5*

*Tokens: 1,283 in / 302 out / 24 reason*  Cost: $0.0003

<details><summary><i>Reasoning</i></summary>

Good, I have a good initial picture. Let me now read the key files in detail to understand the full flow.

</details>

Now let me read the key files in detail to understand the full flow.

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
3: import { generateRetryHint, explainCorrect, aiChat } from '../ai/feedback.ts'
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
128: export async function checkAnswer(quizId: number, l

... (truncated, 6,205 chars total)
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
2: import Markdown from 'react-markdown'
3: import { Check, CircleAlert, HelpCircle, Lightbulb, Loader2, MessageSquareText, Send, X } from 'lucide-react'
4: import { cn } from '#lib/utils'
5: import { Badge } from '#components/ui/badge'
6: import { Button } from '#components/ui/button'
7: import { Card, CardContent } from '#components/ui/card'
8: import { RadioGroup, RadioGroupItem } from '#components/ui/radio-group'
9: import { Textarea } from '#components/ui/textarea'
10: import { checkAnswer, getHint, learnMore } from '#lib/api'
11: import type { ChatMessage, QuizDTO } from '#lib/types'
12: 
13: interface Props {
14:   quiz: QuizDTO
15:   objectiveNumber: number
16:   totalObjectives: number
17:   onCorrect: (learnerIndex: number, explanation: string) => void
18:   onIncorrect: (learnerIndex: number) => void
19:   onSkip: () => void
20:   onNext: () => void
21:   isLast: boolean
22: }
23: 
24: type Status = 'idle' | 'submitted' | 'correct' | 'incorrect'
25: 
26: export function MCQWidget({
27:   quiz,
28:   objectiveNumber,
29:   totalObjectives,
30:   onCorrect,
31:   onIncorrect,
32:   onSkip,
33:   onNext,
34:   isLast
35: }: Props) {
36:   const [selected, setSelected] = useState<number | null>(null)
37:   const [status, setStatus] = useState<Status>('idle')
38:   const [submitting, setSubmitting] = useState(false)
39:   const [hint, setHint] = useState<string | null>(null)
40:   const [hintLoading, setHintLoading] = useState(false)
41:   const [explanation, setExplanation] = useState<string | null>(null)
42:   const [showExplanation, setShowExplanation] = useState(false)
43:   const [tries, setTries] = useState(0)
44:   const [chatOpen, setChatOpen] = useState(false)
45: 
46:   // Reset state when quiz changes (new objective)
47:   useEffect(() => {
48:     setSelected(null)
49:     setStatus('idle')
50:     setHint(null)
51:     setExplanation(null)
52:     setShowExplanation(false)
53:     setTries(0)
54:     setChatOpen(false)
55:   }, [quiz.id])
56: 
57:   const submit = async () => {
58:     if (selected === null || submitting) return
59:     setHint(null)
60:     setSubmitting(true)
61:     try {
62:       const res = await checkAnswer(quiz.id, selected)
63:       if (res.correct) {
64:         if (res.explanation) setExplanation(res.explanation)
65:         setStatus('correct')
66:         onCorrect(selected, res.explanation ?? '')
67:       } else {
68:         setStatus('incorrect')
69:         onIncorrect(selected)
70:         setTries((t) => t + 1)
71:       }
72:     } finally {
73:       setSubmitting(false)
74:     }
75:   }
76: 
77:   const retry = () => {
78:     setStatus('idle')
79:     setSelected(null)
80:     setHint(null)
81:   }
82: 
83:   const requestHint = async () => {
84:     setHintLoading(true)
85:     try {
86:       const res = await getHint(quiz.id, status === 'incorrect' ? selected : null)
87:       setHint(res.hint)
88:     } finally {
89:       setHintLoading(false)
90:     }
91:   }
92: 
93:   const locked = status === 'correct'
94: 
95:   return (
96:     <Card className="overflow-hidden">
97:       <CardContent className="p-0">
98:         <div className="border-b border-border bg-accent/40 px-5 py-3 sm:px-6">
99:           <div className="flex items-center justify-between gap-3">
100:             <div className="min-w-0">
101:               <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
102:                 Objective {objectiveNumber} of {totalObjectives}
103:               </p>
104:               <p className="mt-0.5 truncate text-sm font-semibold">{quiz.objectiveText}</p>
105:             </div>
106:             {tries > 0 && status !== 'correct' && (
107:               <Badge variant="destructive">
108:                 {tries} {tries === 1 ? 'miss' : 'misses'}
109:               </Badge>
110:             )}
111:             {status === 'correct' && (
112:               <Badge variant="default">
113:                 <Check className="size-3" />
114:                 Correct
115:               </Badge>
116:             )}
117:           </div>
118:         </div>
119: 
120:         <div className="space-y-5 p-5 sm:p-6">
121:           <p className="text-base font-medium leading-relaxed">{quiz.question}</p>
122: 
123:           <RadioGroup
124:             value={selected !== null ? String(selected) : undefined}
125:             onValueChange={(v) => {
126:               if (locked) return
127:               const next = Number(v)
128:               setSelected(next)
129:               if (status === 'incorrect') {
130:                 setStatus('idle')
131:                 setHint(null)
132:               }
133:             }}
134:             className="gap-2.5"
135:           >
136:             {quiz.options.map((opt, i) => {
137:               const isSelected 

... (truncated, 15,286 chars total)
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
64: export async function aiChat(
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
118:   return jsonFetch(`/api/quizzes/${quizId}/ai-help`, {
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

*[step finish: tool-calls]* Tokens: 1,283 in / 302 out / 24 reason Cost: $0.0003

---

### **Assistant** — 2026-07-11 13:58:56 UTC

*Model: mimo-v2.5*

*Tokens: 16,212 in / 188 out / 18 reason*  Cost: $0.0023

<details><summary><i>Reasoning</i></summary>

Now let me also check the backend routes and the schema SQL to get the complete picture.

</details>

Let me also check the backend routes and the SQL schema for completeness.

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/*route*",
  "path": "/Users/shivam/qnify/ai-learning-agent"
}
```

**Output:**
```
/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/*schema*",
  "path": "/Users/shivam/qnify/ai-learning-agent"
}
```

**Output:**
```
/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts
/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>grep</code> (completed)</summary>

**explain|check|/check**

**Input:**
```json
{
  "include": "*.{ts,tsx}",
  "pattern": "explain|check|/check",
  "path": "/Users/shivam/qnify/ai-learning-agent/backend/src"
}
```

**Output:**
```
Found 7 matches
/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts:
  Line 3: import { generateRetryHint, explainCorrect, aiChat } from '../ai/feedback.ts'

  Line 119:   const explanation = await explainCorrect(markdown, quiz.question, options, correct, quiz.correct_index)

  Line 128: export async function checkAnswer(quizId: number, learnerIndex: number): Promise<AnswerOutput> {


/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts:
  Line 44: export async function explainCorrect(


/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts:
  Line 75:   app.post('/api/quizzes/:id/explain', async (req) => {

  Line 82:   app.post('/api/quizzes/:id/check', async (req) => {

  Line 85:     return quiz.checkAnswer(id, learnerIndex)

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

*[step finish: tool-calls]* Tokens: 16,212 in / 188 out / 18 reason Cost: $0.0023

---

### **Assistant** — 2026-07-11 13:59:02 UTC

*Model: mimo-v2.5*

*Tokens: 17,440 in / 69 out / 18 reason*  Cost: $0.0025

<details><summary><i>Reasoning</i></summary>

Let me also read the routes file and the schema SQL file to get the complete picture.

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
102:   app.post('/api/quizzes/:id/ai-help', async (req) => {
103:     const { id } = validate(IdParam, req.params)
104:     const { learnerQuestion, history } = validate(LearnMoreBody, req.body)
105:     const message = await quiz.getAiHelp(id, learnerQuestion, history ?? [])
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
124:   app.get('/api

... (truncated, 5,307 chars total)
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

*[step finish: tool-calls]* Tokens: 17,440 in / 69 out / 18 reason Cost: $0.0025

---

### **Assistant** — 2026-07-11 13:59:06 UTC

*Model: mimo-v2.5*

*Tokens: 2,538 in / 2,341 out / 13 reason*  Cost: $0.0011

<details><summary><i>Reasoning</i></summary>

Now I have a complete picture. Let me compile the findings.

</details>

Here is a comprehensive report of all findings related to explanation generation and display.

---

## 1. Where Explanations Are Generated (Backend)

### AI Generation Layer

**`/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts`**
- **Line 21** -- `EXPLAIN_SYSTEM` constant: the system prompt that instructs the LLM to produce a short explanation of why the correct answer is right.
- **Lines 44-62** -- `explainCorrect()`: the function that calls the LLM with the `EXPLAIN_SYSTEM` prompt, passing in the markdown source, question, options, and correct option. Returns a `Promise<string>`.

**`/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts`**
- **Line 21** -- `explanation: z.string().describe('A 1-3 sentence explanation of why the answer is correct.')` -- part of `quizSchema`, meaning an explanation is also generated at quiz creation time (alongside the question, options, correct index, and hint).

**`/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts`**
- **Line 11** -- The quiz system prompt states: `The explanation must justify the correct answer using the source.` This means the quiz generation agent also produces an initial explanation as part of the `Quiz` structured output.
- **Lines 20-29** -- `generateQuiz()`: invokes the quiz agent with the `quizSchema` response format, which includes the `explanation` field.

### Service Layer (Orchestration)

**`/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts`**

There are **two distinct paths** that produce explanations:

1. **At quiz creation time** (lines 42-57): When `getOrCreateQuiz()` calls `generateQuiz()` and inserts the result into the database. The `quiz.explanation` is stored in the `explanation` column of the `quiz_questions` table (line 55).

2. **On-demand via `getExplanation()`** (lines 110-121): Calls `explainCorrect()` from `feedback.ts` to generate a fresh explanation from the LLM. This is invoked in two scenarios:
   - **Via the `/api/quizzes/:id/explain` endpoint** (standalone call).
   - **Inside `checkAnswer()`** (lines 128-135): When the learner's answer is correct, `getExplanation()` is called and the explanation is returned alongside `{ correct: true, explanation }`.

**Key insight**: The `checkAnswer()` function (line 128) **only returns an explanation when the answer is correct** (line 132-134). If the answer is wrong, it returns `{ correct: false }` with no explanation.

### API Routes

**`/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts`**
- **Line 75-78** -- `POST /api/quizzes/:id/explain`: calls `quiz.getExplanation(id)`, returns `{ explanation, correctIndex }`.
- **Line 82-86** -- `POST /api/quizzes/:id/check`: calls `quiz.checkAnswer(id, learnerIndex)`, returns `{ correct, explanation? }`.

### Database Schema

**`/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql`**
- **Lines 27-40** -- `quiz_questions` table: column `explanation TEXT NOT NULL DEFAULT ''` (line 35).

**`/Users/shivam/qnify/ai-learning-agent/backend/src/db.ts`**
- **Line 44** -- `QuizQuestionRow` interface: `explanation: string`.

---

## 2. Where Explanations Are Displayed (Frontend UI)

**`/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx`**

This is the sole UI component that handles explanation display. The relevant pieces are:

- **Line 41** -- State: `const [explanation, setExplanation] = useState<string | null>(null)`
- **Line 42** -- Toggle state: `const [showExplanation, setShowExplanation] = useState(false)`
- **Line 51** -- State reset: `setExplanation(null)` and `setShowExplanation(false)` when `quiz.id` changes (via `useEffect`).

**Explanation rendering** (lines 191-198):
```tsx
{explanation && status === 'correct' && showExplanation && (
  <div className="...">
    <Check className="..." />
    <div>
      <p className="...">Explanation</p>
      <p className="...">{explanation}</p>
    </div>
  </div>
)}
```
The explanation is only visible when **all three conditions** are met: `explanation` is truthy, `status === 'correct'`, and `showExplanation === true`.

**Toggle button** (lines 230-233): After the answer is locked (correct), a button toggles `showExplanation`:
```tsx
{explanation && (
  <Button variant="outline" onClick={() => setShowExplanation(!showExplanation)}>
    {showExplanation ? 'Hide explanation' : 'Show explanation'}
  </Button>
)}
```

---

## 3. How Explanation Generation Is Triggered (Flow)

The explanation is **generated on submit** (not on a separate button click). Here is the exact flow:

### Trigger Chain

1. **User clicks "Submit answer" / "Re-submit" button** -- `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx`, **line 204**: `<Button onClick={submit} ...>`.

2. **`submit()` function** (lines 57-75 of `mcq-widget.tsx`):
   - Calls `checkAnswer(quiz.id, selected)` -- the frontend API call at **line 62**.

3. **Frontend API call** -- `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts`, **lines 99-103**: `POST /api/quizzes/:id/check` with `{ learnerIndex }`.

4. **Backend route** -- `/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts`, **lines 82-86**: delegates to `quiz.checkAnswer(id, learnerIndex)`.

5. **Backend service** -- `/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts`, **lines 128-135**:
   - If `learnerIndex === quiz.correct_index` (correct), calls `getExplanation(quizId)` which calls the LLM `explainCorrect()`.
   - Returns `{ correct: true, explanation }`.
   - If incorrect, returns `{ correct: false }` (no explanation).

6. **Back in `submit()`** (mcq-widget.tsx, lines 63-66):
   ```ts
   if (res.correct) {
     if (res.explanation) setExplanation(res.explanation)  // stores explanation in state
     setStatus('correct')                                   // locks the widget
     onCorrect(selected, res.explanation ?? '')              // notifies parent
   }
   ```

7. **User then clicks "Show explanation" button** (line 231) to toggle `showExplanation` to `true`, which renders the explanation text (lines 191-198).

### Summary of the Trigger Model

| Event | What Happens |
|---|---|
| **Submit (correct answer)** | `checkAnswer()` API call triggers LLM explanation generation; explanation is stored in component state but **not yet visible** |
| **Show explanation button click** | Toggles `showExplanation` to `true`, rendering the explanation in the UI |
| **Submit (wrong answer)** | No explanation is generated or returned |
| **Quiz creation** | An explanation is pre-generated by the quiz agent and stored in the DB, but the `QuizDTO` type (frontend `types.ts` line 46-53) **does not include** the `explanation` field, so it is not sent to the client at creation time |

---

## Complete File Index

| File | Lines | Role |
|---|---|---|
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts` | 21, 44-62 | LLM system prompt for explanations; `explainCorrect()` function |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts` | 21 | `explanation` field in `quizSchema` (quiz generation output) |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts` | 11, 20-29 | Quiz agent prompt mentioning explanation; `generateQuiz()` |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/db.ts` | 44 | `QuizQuestionRow.explanation` type definition |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql` | 35 | `explanation` column in `quiz_questions` table |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts` | 44, 55, 105-121, 128-135 | DB insert of explanation; `getExplanation()`; `checkAnswer()` that triggers explanation on correct |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts` | 75-78, 82-86 | `/explain` and `/check` API endpoints |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts` | 85-103 | `getExplanation()` and `checkAnswer()` frontend API functions |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/types.ts` | 46-53 | `QuizDTO` type (notably **missing** `explanation` field) |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx` | 17, 41-42, 51-52, 57-75, 191-198, 230-233 | Explanation state management, generation trigger in `submit()`, UI rendering, toggle button |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx` | 304-306 | `onCorrect` callback receives explanation (but discards it with `void explanation`) |

*[step finish: stop]* Tokens: 2,538 in / 2,341 out / 13 reason Cost: $0.0011

---
