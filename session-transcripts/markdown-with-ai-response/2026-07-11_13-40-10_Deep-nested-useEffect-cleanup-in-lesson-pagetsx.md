# Deep nested useEffect cleanup in lesson-page.tsx

- **Session ID:** `ses_0ae97d126ffe18os30Rw7g4TP0`
- **Created:** 2026-07-11 13:40:10 UTC
- **Total Cost:** $0.0046
- **Total Tokens:** 29,841 in / 652 out / 677 reason
- **Messages:** 4

## Conversation

### **User** — 2026-07-11 13:40:10 UTC

*Model: mimo-v2.5*

Can you cleanup first, useEffect in  frontend/src/pages/lesson-page.tsx it has lot of deep nested, looks ugly unreadable

---

### **Assistant** — 2026-07-11 13:40:10 UTC

*Model: mimo-v2.5*

*Tokens: 6,878 in / 40 out / 47 reason*  Cost: $0.0010

<details><summary><i>Reasoning</i></summary>

The user wants me to clean up the `useEffect` hook in `frontend/src/pages/lesson-page.tsx` which has deep nesting and looks ugly/unreadable. Let me first read the file to understand the current state.

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
50:     getPlan(id)
51:       .then(async (p) => {
52:         setPlan(p)
53:         if (p.status === 'draft') {
54:           setPhase('review')
55:         } else if (p.status === 'completed') {
56:           try {
57:             const attempts = await listAttempts(id)
58:             if (attempts.length > 0) {
59:               const latest = await getAttempt(attempts[0].id)
60:               setSummary(latest)
61:               setPhase('summary')
62:             } else {
63:               setPhase('quiz')
64:             }
65:           } catch {
66:             setPhase('quiz')
67:           }
68:         } else {
69:           setPhase('quiz')
70:         }
71:       })
72:       .catch((err: unknown) => {
73:         setError((err as Error).message)
74:         setPhase('error')
75:       })
76:   }, [planId])
77: 
78:   // Preload cached quizzes when entering the quiz phase (retest path)
79:   useEffect(() => {
80:     if (phase !== 'quiz' || !planId || !plan) return
81:     const id = Number(planId)
82:     listQuizzes(id)
83:       .then((existing) => {
84:         if (existing.length === 0) return
85:         const map: Record<number, QuizDTO> = {}
86:         for (const q of existing) map[q.objectiveIndex] = q
87:         setQuizzes(map)
88:       })
89:       .catch(() => {
90:         // ignore — we'll lazy-generate
91:       })
92:   }, [phase, planId, plan])
93: 
94:   const currentQuiz = quizzes[currentIdx]
95: 
96:   // Lazy-generate the quiz for the current objective when needed
97:   useEffect(() => {
98:     if (phase !== 'quiz' || !plan || !planId) return
99:     if (quizzes[currentIdx] || loadingQuiz) return
100:     if (currentIdx >= plan.objectives.length) return
101:     const id = Number(planId)
102:     setLoadingQuiz(true)
103:     generateQuiz(id, currentIdx)
104:       .then((q) => {
105:         setQuizzes((prev) => ({ ...prev, [currentIdx]: q }))
106:       })
107:       .catch((err: unknown) => {
108:         setError((err as Error).message)
109:         setPhase('error')
110:       })
111:       .finally(() => setLoadingQuiz(false))
112:   }, [phase, plan, planId, currentIdx, quizzes, loadingQuiz])
113: 
114:   const handleApprove = useCallback(async () => {
115:     if (!plan) return
116:     try {
117:       const updated = await approvePlan(plan.id)
118:       setPlan(updated)
119:       setPhase('quiz')
120:     } catch (err) {
121:       setError((err as Error).message)
122:       setPhase('error')
123:     }
124:   }, [plan])
125: 
126:   const handleIncorrect = useCallback(
127:     (idx: number, learnerIndex: number) => {
128:       setAnswers((prev) => {
129:         const quizId = quizzes[idx]?.id ?? -1
130:         const existing = prev[idx] ?? blankAnswer(quizId)
131:         return {
132:           ...prev,
133:           [idx]: {
134:             ...existing,


... (truncated, 12,472 chars total)
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 6,878 in / 40 out / 47 reason Cost: $0.0010

---

### **Assistant** — 2026-07-11 13:40:13 UTC

*Model: mimo-v2.5*

*Tokens: 10,920 in / 497 out / 612 reason*  Cost: $0.0018

<details><summary><i>Reasoning</i></summary>

The user wants me to clean up the first `useEffect` (lines 47-76) which has deep nesting. Let me analyze it:

```javascript
useEffect(() => {
    if (!planId) return
    const id = Number(planId)
    getPlan(id)
      .then(async (p) => {
        setPlan(p)
        if (p.status === 'draft') {
          setPhase('review')
        } else if (p.status === 'completed') {
          try {
            const attempts = await listAttempts(id)
            if (attempts.length > 0) {
              const latest = await getAttempt(attempts[0].id)
              setSummary(latest)
              setPhase('summary')
            } else {
              setPhase('quiz')
            }
          } catch {
            setPhase('quiz')
          }
        } else {
          setPhase('quiz')
        }
      })
      .catch((err: unknown) => {
        setError((err as Error).message)
        setPhase('error')
      })
  }, [planId])
```

The deep nesting comes from:
1. The `then` callback with `async (p) =>`
2. Inside that, the `if/else if/else` chain
3. Inside the `completed` branch, a `try/catch` with `await`
4. Inside the `try`, another `if/else`

I can refactor this by:
1. Extracting the logic into a separate async function
2. Using early returns to flatten the nesting
3. Using async/await instead of .then() chains

Let me create a cleaner version:

```javascript
useEffect(() => {
    if (!planId) return
    const id = Number(planId)

    async function loadPlan() {
      const p = await getPlan(id)
      setPlan(p)

      if (p.status === 'draft') {
        setPhase('review')
        return
      }

      if (p.status !== 'completed') {
        setPhase('quiz')
        return
      }

      // status === 'completed'
      try {
        const attempts = await listAttempts(id)
        if (attempts.length > 0) {
          const latest = await getAttempt(attempts[0].id)
          setSummary(latest)
          setPhase('summary')
        } else {
          setPhase('quiz')
        }
      } catch {
        setPhase('quiz')
      }
    }

    loadPlan().catch((err: unknown) => {
      setError((err as Error).message)
      setPhase('error')
    })
  }, [planId])
```

This is much flatter. The key improvements:
1. Extracted the async logic into a named function `loadPlan`
2. Used early returns to eliminate the nested if/else chain
3. The `.catch()` for the outer error handling is now on the function call itselfThis is significantly more readable.

</details>

The first `useEffect` (lines 47-76) has nested `.then()` → `async` → `if/else` → `try/catch` → `if/else`. I'll flatten it by extracting the logic into an async function with early returns.

<details><summary><b>Tool:</b> <code>edit</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx",
  "oldString": "  useEffect(() => {\n    if (!planId) return\n    const id = Number(planId)\n    getPlan(id)\n      .then(async (p) => {\n        setPlan(p)\n        if (p.status === 'draft') {\n          setPhase('review')\n        } else if (p.status === 'completed') {\n          try {\n            const attempts = await listAttempts(id)\n            if (attempts.length > 0) {\n              const latest = await getAttempt(attempts[0].id)\n              setSummary(latest)\n              setPhase('summary')\n            } else {\n              setPhase('quiz')\n            }\n          } catch {\n            setPhase('quiz')\n          }\n        } else {\n          setPhase('quiz')\n        }\n      })\n      .catch((err: unknown) => {\n        setError((err as Error).message)\n        setPhase('error')\n      })\n  }, [planId])",
  "newString": "  useEffect(() => {\n    if (!planId) return\n    const id = Number(planId)\n\n    async function loadPlan() {\n      const p = await getPlan(id)\n      setPlan(p)\n\n      if (p.status === 'draft') {\n        setPhase('review')\n        return\n      }\n\n      if (p.status !== 'completed') {\n        setPhase('quiz')\n        return\n      }\n\n      try {\n        const attempts = await listAttempts(id)\n        if (attempts.length === 0) {\n          setPhase('quiz')\n          return\n        }\n        const latest = await getAttempt(attempts[0].id)\n        setSummary(latest)\n        setPhase('summary')\n      } catch {\n        setPhase('quiz')\n      }\n    }\n\n    loadPlan().catch((err: unknown) => {\n      setError((err as Error).message)\n      setPhase('error')\n    })\n  }, [planId])"
}
```

**Output:**
```
Edit applied successfully.
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 10,920 in / 497 out / 612 reason Cost: $0.0018

---

### **Assistant** — 2026-07-11 13:40:25 UTC

*Model: mimo-v2.5*

*Tokens: 12,043 in / 115 out / 18 reason*  Cost: $0.0017

<details><summary><i>Reasoning</i></summary>

The edit was applied successfully. Let me verify it looks good by reading the relevant section.

</details>

Done. Changes made:

- Extracted the async logic into a named `loadPlan()` function
- Replaced nested `if/else if/else` with early returns (`if draft → return`, `if not completed → return`)
- Inverted the `attempts.length > 0` check to `=== 0` with early return, eliminating one nesting level
- The `.catch()` now sits on the `loadPlan()` call instead of being buried inside `.then(async ...)`

The nesting went from 5 levels deep to 2.

*[step finish: stop]* Tokens: 12,043 in / 115 out / 18 reason Cost: $0.0017

---
