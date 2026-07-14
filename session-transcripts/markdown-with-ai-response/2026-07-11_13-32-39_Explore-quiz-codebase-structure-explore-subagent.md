# Explore quiz codebase structure (@explore subagent)

- **Session ID:** `ses_0ae9eb0e4ffehAxyELQ4G0ZgSr`
- **Created:** 2026-07-11 13:32:39 UTC
- **Total Cost:** $0.0080
- **Total Tokens:** 43,241 in / 5,328 out / 171 reason
- **Messages:** 9

## Conversation

### **User** — 2026-07-11 13:32:39 UTC

*Model: mimo-v2.5*

Explore this codebase thoroughly. I need to understand:
1. The overall project structure (what framework, language, etc.)
2. How quizzes/tests work - find all files related to quiz state, summary, completion
3. How PDF navigation and topic switching works
4. Where quiz state is persisted (localStorage, state management, etc.)
5. The summary component/view that shows after quiz completion

Look for files containing keywords like: quiz, test, summary, complete, finish, retry, score, result, PDF, topic, sidebar, navigation.

Return a comprehensive list of all relevant files with their paths and brief descriptions of what they contain. Also describe how the quiz state flow works.

---

### **Assistant** — 2026-07-11 13:32:39 UTC

*Model: mimo-v2.5*

*Tokens: 3,376 in / 152 out / 37 reason*  Cost: $0.0005

<details><summary><i>Reasoning</i></summary>

The user wants a comprehensive exploration of the codebase. Let me start by understanding the project structure and then search for specific keywords. I'll do multiple searches in parallel to be efficient.

</details>

I'll start with a broad exploration of the project structure, then dive deep into the specific areas you've asked about.

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
  "pattern": "**/*.{json,ts,tsx,js,jsx}",
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
/Users/shivam/qnify/ai-learning-agent/backend/tsconfig.json
/Users/shivam/qnify/ai-learning-agent/backend/package.json
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
/Users/shivam/qnify/ai-learning-agent/frontend/tsconfig.json
/Users/shivam/qnify/ai-learning-agent/frontend/components.json
/Users/shivam/qnify/ai-learning-agent/frontend/package.json
/Users/shivam/qnify/ai-learning-agent/frontend/.oxlintrc.json
/Users/shivam/qnify/ai-learning-agent/frontend/tsconfig.app.json
/Users/shivam/qnify/ai-learning-agent/frontend/tsconfig.node.json
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent**

**Input:**
```json
{
  "pattern": "**/*.{css,scss,html,md}",
  "path": "/Users/shivam/qnify/ai-learning-agent"
}
```

**Output:**
```
/Users/shivam/qnify/ai-learning-agent/frontend/src/index.css
/Users/shivam/qnify/ai-learning-agent/frontend/index.html
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 3,376 in / 152 out / 37 reason Cost: $0.0005

---

### **Assistant** — 2026-07-11 13:32:45 UTC

*Model: mimo-v2.5*

*Tokens: 1,209 in / 219 out / 35 reason*  Cost: $0.0002

<details><summary><i>Reasoning</i></summary>

Good, I have a broad view. Let me now read the key files to understand the structure. I'll start with package.json files, then dive into the core files.

</details>

Good. Let me now read all the key files in parallel to understand the full picture.

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

**Users/shivam/qnify/ai-learning-agent/backend/src/index.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/index.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/index.ts</path>
<type>file</type>
<content>
1: import Fastify from 'fastify'
2: import cors from '@fastify/cors'
3: import multipart from '@fastify/multipart'
4: import { ZodError } from 'zod'
5: import { DB_PATH, HOST, PORT, UPLOADS_DIR } from './config.ts'
6: import { routes } from './routes.ts'
7: import { db, SCHEMA_SQL } from './db.ts'
8: import { mkdirSync } from 'node:fs'
9: import { dirname } from 'node:path'
10: 
11: const app = Fastify({ logger: true })
12: 
13: app.setErrorHandler((err, _req, reply) => {
14:   if (err instanceof ZodError) {
15:     return reply.code(400).send({
16:       error: 'Validation failed',
17:       details: err.issues.map((i) => ({ path: i.path.join('.'), message: i.message }))
18:     })
19:   }
20:   const error = err as { statusCode?: number; message?: string }
21:   if (error.statusCode) {
22:     return reply.code(error.statusCode).send({ error: error.message })
23:   }
24:   app.log.error(err)
25:   return reply.code(500).send({ error: 'Internal server error' })
26: })
27: 
28: await app.register(cors, {
29:   origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
30:   credentials: true
31: })
32: 
33: await app.register(multipart, {
34:   limits: { fileSize: 1024 * 1024 * 10 } // Max 10 MB.
35: })
36: 
37: app.get('/api/health', async () => ({ ok: true }))
38: 
39: await app.register(routes)
40: 
41: function init(): void {
42:   mkdirSync(dirname(DB_PATH), { recursive: true })
43:   mkdirSync(UPLOADS_DIR, { recursive: true })
44:   db.exec(SCHEMA_SQL)
45: }
46: 
47: init()
48: 
49: app.listen({ port: PORT, host: HOST }, (err, address) => {
50:   if (err) {
51:     app.log.error(err)
52:     process.exit(1)
53:   }
54:   app.log.info(`Server listening on ${address}`)
55: })

(End of file - total 55 lines)
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

*[step finish: tool-calls]* Tokens: 1,209 in / 219 out / 35 reason Cost: $0.0002

---

### **Assistant** — 2026-07-11 13:32:49 UTC

*Model: mimo-v2.5*

*Tokens: 4,956 in / 292 out / 21 reason*  Cost: $0.0008

<details><summary><i>Reasoning</i></summary>

Now let me read all the core frontend and backend files related to quizzes, lessons, summaries, etc.

</details>

Now let me read all the core files - the lesson page (main quiz orchestrator), summary view, sidebar, MCW widget, and all backend services.

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
10: import { approvePlan, completeAttempt, generateQuiz, getPlan, listQuizzes } from '#lib/api'
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
51:       .then((p) => {
52:         setPlan(p)
53:         if (p.status === 'draft') setPhase('review')
54:         else setPhase('quiz')
55:       })
56:       .catch((err: unknown) => {
57:         setError((err as Error).message)
58:         setPhase('error')
59:       })
60:   }, [planId])
61: 
62:   // Preload cached quizzes when entering the quiz phase (retest path)
63:   useEffect(() => {
64:     if (phase !== 'quiz' || !planId || !plan) return
65:     const id = Number(planId)
66:     listQuizzes(id)
67:       .then((existing) => {
68:         if (existing.length === 0) return
69:         const map: Record<number, QuizDTO> = {}
70:         for (const q of existing) map[q.objectiveIndex] = q
71:         setQuizzes(map)
72:       })
73:       .catch(() => {
74:         // ignore — we'll lazy-generate
75:       })
76:   }, [phase, planId, plan])
77: 
78:   const currentQuiz = quizzes[currentIdx]
79: 
80:   // Lazy-generate the quiz for the current objective when needed
81:   useEffect(() => {
82:     if (phase !== 'quiz' || !plan || !planId) return
83:     if (quizzes[currentIdx] || loadingQuiz) return
84:     if (currentIdx >= plan.objectives.length) return
85:     const id = Number(planId)
86:     setLoadingQuiz(true)
87:     generateQuiz(id, currentIdx)
88:       .then((q) => {
89:         setQuizzes((prev) => ({ ...prev, [currentIdx]: q }))
90:       })
91:       .catch((err: unknown) => {
92:         setError((err as Error).message)
93:         setPhase('error')
94:       })
95:       .finally(() => setLoadingQuiz(false))
96:   }, [phase, plan, planId, currentIdx, quizzes, loadingQuiz])
97: 
98:   const handleApprove = useCallback(async () => {
99:     if (!plan) return
100:     try {
101:       const updated = await approvePlan(plan.id)
102:       setPlan(updated)
103:       setPhase('quiz')
104:     } catch (err) {
105:       setError((err as Error).message)
106:       setPhase('error')
107:     }
108:   }, [plan])
109: 
110:   const handleIncorrect = useCallback(
111:     (idx: number, learnerIndex: number) => {
112:       setAnswers((prev) => {
113:         const quizId = quizzes[idx]?.id ?? -1
114:         const existing = prev[idx] ?? blankAnswer(quizId)
115:         return {
116:           ...prev,
117:           [idx]: {
118:             ...existing,
119:             quizId,
120:             learnerIndex,
121:             correct: false,
122:             attempts: existing.attempts + 1,
123:             finalized: false
124:           }
125:         }
126:       })
127:     },
128:     [quizzes]
129:   )
130: 
131:   const handleCorrect = useCallback(
132:     (idx: number, learnerIndex: number) => {
133:       setAnswers((prev) => {
134:         const quizId = quizzes[idx]?.id ?? -1
135:         const existing = prev[idx] ?? blankAnswer(quizId)
136:         return {
137:           ...prev,
138:   

... (truncated, 11,914 chars total)
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

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/components/sidebar.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/components/sidebar.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/components/sidebar.tsx</path>
<type>file</type>
<content>
1: import { useCallback, useEffect, useState } from 'react'
2: import { Link, useNavigate } from 'react-router-dom'
3: import { BookOpenCheck, FileText, Loader2, AlertTriangle, ChevronRight, Plus } from 'lucide-react'
4: import { cn } from '#lib/utils'
5: import { Button } from '#components/ui/button'
6: import { listDocuments, createPlan } from '#lib/api'
7: import type { DocumentSummary } from '#lib/types'
8: import { difficultyLabel, formatDate } from '#lib/format'
9: 
10: export function Sidebar() {
11:   const [docs, setDocs] = useState<DocumentSummary[]>([])
12:   const [loading, setLoading] = useState(true)
13:   const [planning, setPlanning] = useState<number | null>(null)
14:   const navigate = useNavigate()
15: 
16:   const refresh = useCallback(async () => {
17:     setLoading(true)
18:     try {
19:       const data = await listDocuments()
20:       setDocs(data)
21:     } finally {
22:       setLoading(false)
23:     }
24:   }, [])
25: 
26:   useEffect(() => {
27:     void refresh()
28:   }, [refresh])
29: 
30:   useEffect(() => {
31:     const anyProcessing = docs.some((d) => d.status === 'processing')
32:     if (anyProcessing) {
33:       const t = setTimeout(() => void refresh(), 3000)
34:       return () => clearTimeout(t)
35:     }
36:   }, [docs, refresh])
37: 
38:   const handleStartLearning = useCallback(
39:     async (documentId: number) => {
40:       setPlanning(documentId)
41:       try {
42:         const plan = await createPlan(documentId)
43:         navigate(`/learn/${plan.id}`)
44:       } catch (err) {
45:         console.error('Failed to create plan:', err)
46:       } finally {
47:         setPlanning(null)
48:       }
49:     },
50:     [navigate]
51:   )
52: 
53:   return (
54:     <aside className="flex h-full w-72 flex-col border-r border-border bg-card">
55:       <div className="flex items-center justify-between border-b border-border px-4 py-3">
56:         <div className="flex items-center gap-2">
57:           <BookOpenCheck className="size-4 text-primary" />
58:           <span className="text-sm font-semibold">Library</span>
59:         </div>
60:         {docs.length > 0 && (
61:           <span className="text-xs text-muted-foreground">
62:             {docs.length} doc{docs.length > 1 ? 's' : ''}
63:           </span>
64:         )}
65:       </div>
66: 
67:       <div className="flex-1 overflow-y-auto">
68:         {loading ? (
69:           <div className="space-y-3 p-4">
70:             {Array.from({ length: 3 }).map((_, i) => (
71:               <div key={i} className="h-16 rounded-xl border border-border bg-muted/50 animate-pulse" />
72:             ))}
73:           </div>
74:         ) : docs.length === 0 ? (
75:           <div className="flex flex-col items-center justify-center p-6 text-center">
76:             <FileText className="size-8 text-muted-foreground/50" />
77:             <p className="mt-2 text-sm text-muted-foreground">No documents yet.</p>
78:             <p className="text-xs text-muted-foreground">Upload a PDF to get started.</p>
79:           </div>
80:         ) : (
81:           <div className="space-y-1 p-2">
82:             {docs.map((doc) => {
83:               const ready = doc.status === 'ready'
84:               const processing = doc.status === 'processing'
85:               const failed = doc.status === 'failed'
86:               const title = doc.title || doc.filename.replace(/\.pdf$/i, '')
87: 
88:               return (
89:                 <button
90:                   key={doc.id}
91:                   onClick={() => {
92:                     if (doc.plan) {
93:                       navigate(`/learn/${doc.plan.id}`)
94:                     } else if (ready) {
95:                       void handleStartLearning(doc.id)
96:                     }
97:                   }}
98:                   disabled={processing || failed}
99:                   className={cn(
100:                     'group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
101:                     ready ? 'hover:bg-accent/60 cursor-pointer' : 'cursor-default opacity-70'
102:                   )}
103:                 >
104:                   <div
105:                     className={cn(
106:                       'flex size-8 shrink-0 items-center justify-center rounded-lg',
107:                       ready
108:                         ? 'bg-primary/10 text-primary'
109:                         : processing
110:                           ? 'bg-accent text-accent-foreground'
111:                           : 'bg-danger/10 text-danger'
112:                     )}
113:                   >
114:                     {processing ? (
115:                       <Loader2 className="size-4 animate-spin" />
116:                     ) : failed ? (
117:                       <AlertTriangle className="size-4" />
118:          

... (truncated, 7,174 chars total)
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

**Users/shivam/qnify/ai-learning-agent/frontend/src/components/app-shell.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/components/app-shell.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/components/app-shell.tsx</path>
<type>file</type>
<content>
1: import { Link, Outlet } from 'react-router-dom'
2: import { GraduationCap } from 'lucide-react'
3: import { Sidebar } from '#components/sidebar'
4: 
5: export function AppShell() {
6:   return (
7:     <div className="flex h-screen bg-background text-foreground">
8:       <Sidebar />
9:       <div className="flex flex-1 flex-col overflow-hidden">
10:         <header className="flex h-16 shrink-0 items-center border-b border-border/70 bg-background/80 backdrop-blur-lg px-6">
11:           <Link to="/" className="group flex items-center gap-2.5">
12:             <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
13:               <GraduationCap className="size-5" />
14:             </span>
15:             <span className="flex flex-col leading-none">
16:               <span className="text-sm font-semibold tracking-tight">AI Learning Agent</span>
17:               <span className="text-[11px] text-muted-foreground">Upload your PDF and study</span>
18:             </span>
19:           </Link>
20:         </header>
21:         <main className="flex-1 overflow-y-auto px-6 py-8">
22:           <Outlet />
23:         </main>
24:       </div>
25:     </div>
26:   )
27: }

(End of file - total 27 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx</path>
<type>file</type>
<content>
1: import { useState } from 'react'
2: import { ArrowLeft, ArrowRight, CheckCircle2, FileText, ListChecks, Loader2, Sparkles, Target } from 'lucide-react'
3: import { cn } from '#lib/utils'
4: import { Badge } from '#components/ui/badge'
5: import { Button } from '#components/ui/button'
6: import { Card, CardContent } from '#components/ui/card'
7: import { Separator } from '#components/ui/separator'
8: import type { Plan } from '#lib/types'
9: import { difficultyLabel } from '#lib/format'
10: 
11: interface Props {
12:   plan: Plan
13:   onApprove: () => void
14:   onBack: () => void
15: }
16: 
17: export function PlanCard({ plan, onApprove, onBack }: Props) {
18:   const [approving, setApproving] = useState(false)
19: 
20:   const handleApprove = async () => {
21:     setApproving(true)
22:     try {
23:       onApprove()
24:     } finally {
25:       setApproving(false)
26:     }
27:   }
28: 
29:   return (
30:     <div className="mx-auto max-w-3xl space-y-6">
31:       <button
32:         onClick={onBack}
33:         className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
34:       >
35:         <ArrowLeft className="size-4" />
36:         Back to library
37:       </button>
38: 
39:       <Card className="overflow-hidden">
40:         <div className="relative bg-gradient-to-br from-primary/10 via-accent/40 to-transparent p-6 sm:p-8">
41:           <div className="absolute inset-0 bg-grid-pattern opacity-40" />
42:           <div className="relative z-10">
43:             <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
44:               <Sparkles className="size-3.5" />
45:               Proposed lesson plan
46:             </span>
47:             <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{plan.title}</h1>
48:             <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{plan.description}</p>
49:             <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
50:               <Badge variant="secondary">
51:                 <Target className="size-3" />
52:                 {difficultyLabel(plan.difficulty)}
53:               </Badge>
54:               <Badge variant="outline">
55:                 <ListChecks className="size-3" />
56:                 {plan.objectives.length} objectives
57:               </Badge>
58:               {plan.document_filename && (
59:                 <Badge variant="outline">
60:                   <FileText className="size-3" />
61:                   {plan.document_filename}
62:                 </Badge>
63:               )}
64:             </div>
65:           </div>
66:         </div>
67: 
68:         <Separator />
69: 
70:         <CardContent className="p-6 sm:p-8">
71:           <div className="mb-4 flex items-center gap-2">
72:             <Target className="size-4 text-primary" />
73:             <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Learning objectives</h2>
74:           </div>
75:           <ol className="space-y-3">
76:             {plan.objectives.map((obj, i) => (
77:               <li
78:                 key={i}
79:                 className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
80:               >
81:                 <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
82:                   {i + 1}
83:                 </span>
84:                 <div className="min-w-0 flex-1">
85:                   <p className="text-sm font-medium leading-relaxed">{obj.text}</p>
86:                   <p className="mt-1 text-xs text-muted-foreground">
87:                     Topic: <span className="font-medium">{obj.topic}</span>
88:                   </p>
89:                 </div>
90:               </li>
91:             ))}
92:           </ol>
93: 
94:           <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
95:             <div className="flex items-start gap-2">
96:               <CheckCircle2 className="size-4 shrink-0 translate-y-0.5 text-primary" />
97:               <div>
98:                 <p className="font-medium">Review & approve to begin</p>
99:                 <p className="mt-0.5 text-xs text-muted-foreground">
100:                   The agent will generate one MCQ per objective. You'll get hints and explanations, and can ask
101:                   follow-up questions at any time.
102:                 </p>
103:               </div>
104:             </div>
105:           </div>
106: 
107:           <div className="mt-6 flex items-center justify-end gap-2">
108:             <Button vari

... (truncated, 5,738 chars total)
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 4,956 in / 292 out / 21 reason Cost: $0.0008

---

### **Assistant** — 2026-07-11 13:32:55 UTC

*Model: mimo-v2.5*

*Tokens: 16,075 in / 262 out / 11 reason*  Cost: $0.0024

<details><summary><i>Reasoning</i></summary>

Now let me read the backend services and AI files.

</details>

Now let me read all the backend service and AI files.

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
70:     JSON.stringify(summary.study_tips)
71:   ]
72:   db
73:     .prepare(
74:       `INSERT INTO attempts (lesson_plan_id, score, total, answers, summary, study_tips)
75:      VALUES (?, ?, ?, ?, ?, ?)
76:      RETURNING id`
77:     )
78:     .get(params) as { id: number }
79: 
80:   db.prepare(`UPDATE lesson_plans SET status = 'completed' WHERE id = ?`).run(planId)
81: 
82:   return {
83:     score,
84:     total: questions.length,
85:     summary: summary.summary,
86:     studyTips: summary.study_tips,
87:     weakTopics: summary.weak_topics,
88:     strengths: summary.strengths,
89:     answers: questions.map((q) => ({
90:       question: q.question,
91:       options: q.options,
92:       correctIndex: q.correctIndex,
93:       learnerIndex: q.learnerIndex,
94:       attempts: q.attempts,
95:       objectiveText: q.objectiveText
96:     }))
97:   }
98: }
99: 
100: export async function listAttempts(planId: number) {
101:   const rows = db
102:     .prepare(`SELECT * FROM attempts WHERE lesson_plan_id = ? ORDER BY datetime(created_at) DESC`)
103:     .all(planId) as AttemptRow[]
104:   return rows.map((r) => ({
105:     id: r.id,
106:     lesson_plan_id: r.lesson_plan_id,
107:     score: r.score,
108:     total: r.total,
109:     summary: r.summary,
110:     study_tips: JSON.parse(r.study_tips) as string[],
111:     created_at: r.created_at
112:   }))
113: }
114: 
115: export async function getAttempt(attemptId: number) {
116:   const row = db.prepare(`SELECT * FROM attempts WHERE id = ?`).get(attemptId) as AttemptRow | undefined
117:   if (!row) return null
118:   return {
119:     id: row.id,
120:     lesson_plan_id: row.lesson_plan_id,
121:     score: row.score,
122:     total: row.total,
123:     summary: row.summary,
124:     study_tips: JSON.parse(row.study_tips) as string[],
125:     created_at: row.created_at
126:   }
127: }

(End of file - total 127 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/services/plans.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/services/plans.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/services/plans.ts</path>
<type>file</type>
<content>
1: import { db, type DocumentRow, type LessonPlanRow } from '../db.ts'
2: import { generatePlan } from '../ai/plan.ts'
3: import { NotFoundError, BadRequestError } from '../errors.ts'
4: 
5: type Difficulty = 'beginner' | 'intermediate' | 'advanced'
6: type PlanStatus = 'draft' | 'approved' | 'completed'
7: 
8: interface Objective {
9:   text: string
10:   topic: string
11: }
12: 
13: export async function createPlan(documentId: number) {
14:   const doc = db.prepare(`SELECT * FROM documents WHERE id = ?`).get(documentId) as DocumentRow | undefined
15:   if (!doc) throw new NotFoundError('Document not found')
16:   if (doc.status !== 'ready' || !doc.markdown) {
17:     throw new BadRequestError(`Document is not ready for plan generation (status: ${doc.status})`)
18:   }
19: 
20:   const plan = await generatePlan(doc.markdown, doc.filename)
21:   const objectivesJson = JSON.stringify(plan.objectives)
22:   const res = db
23:     .prepare(
24:       `INSERT INTO lesson_plans (document_id, title, description, objectives, difficulty, status)
25:        VALUES (?, ?, ?, ?, ?, 'draft')
26:        RETURNING *`
27:     )
28:     .get(documentId, plan.title, plan.description, objectivesJson, plan.difficulty) as LessonPlanRow
29: 
30:   return {
31:     id: res.id,
32:     document_id: documentId,
33:     title: res.title,
34:     description: res.description,
35:     difficulty: res.difficulty as Difficulty,
36:     objectives: plan.objectives,
37:     status: res.status as PlanStatus,
38:     created_at: res.created_at
39:   }
40: }
41: 
42: export async function getPlan(planId: number) {
43:   const row = db.prepare(`SELECT * FROM lesson_plans WHERE id = ?`).get(planId) as LessonPlanRow | undefined
44:   if (!row) return null
45:   const doc = db.prepare(`SELECT filename FROM documents WHERE id = ?`).get(row.document_id) as { filename: string }
46: 
47:   return {
48:     id: row.id,
49:     document_id: row.document_id,
50:     document_filename: doc.filename,
51:     title: row.title,
52:     description: row.description,
53:     difficulty: row.difficulty as Difficulty,
54:     objectives: JSON.parse(row.objectives) as Objective[],
55:     status: row.status as PlanStatus,
56:     created_at: row.created_at
57:   }
58: }
59: 
60: export async function getPlansForDocument(documentId: number) {
61:   const rows = db
62:     .prepare(`SELECT * FROM lesson_plans WHERE document_id = ? ORDER BY datetime(created_at) DESC`)
63:     .all(documentId) as LessonPlanRow[]
64:   return rows.map((row) => ({
65:     id: row.id,
66:     document_id: row.document_id,
67:     title: row.title,
68:     description: row.description,
69:     difficulty: row.difficulty as Difficulty,
70:     objectives: JSON.parse(row.objectives) as Objective[],
71:     status: row.status as PlanStatus,
72:     created_at: row.created_at
73:   }))
74: }
75: 
76: export async function approvePlan(planId: number) {
77:   const row = db.prepare(`SELECT * FROM lesson_plans WHERE id = ?`).get(planId) as LessonPlanRow | undefined
78:   if (!row) throw new NotFoundError('Plan not found')
79:   if (row.status === 'draft') {
80:     db.prepare(`UPDATE lesson_plans SET status = 'approved' WHERE id = ?`).run(planId)
81:   }
82:   return getPlan(planId)
83: }

(End of file - total 83 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/services/documents.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/services/documents.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/services/documents.ts</path>
<type>file</type>
<content>
1: import path from 'node:path'
2: import { nanoid } from 'nanoid'
3: import { db, type DocumentRow } from '../db.ts'
4: import { convertPdfToMarkdown } from './pdf-to-markdown.ts'
5: import { UPLOADS_DIR } from '../config.ts'
6: 
7: type DocumentListItem = Omit<DocumentRow, 'stored_filename' | 'filepath' | 'markdown'>
8: 
9: interface PlanSummaryRow {
10:   id: number
11:   difficulty: string
12:   status: string
13: }
14: 
15: export async function listDocuments() {
16:   const rows = db
17:     .prepare(
18:       `SELECT id, filename, title, markdown_chars, status, error, created_at
19:        FROM documents ORDER BY datetime(created_at) DESC`
20:     )
21:     .all() as DocumentListItem[]
22: 
23:   return rows.map((r) => {
24:     const planRow = db
25:       .prepare(
26:         `SELECT id, difficulty, status FROM lesson_plans WHERE document_id = ? ORDER BY datetime(created_at) DESC LIMIT 1`
27:       )
28:       .get(r.id) as PlanSummaryRow | undefined
29: 
30:     const attemptResult = db
31:       .prepare(
32:         `SELECT COUNT(*) AS c FROM attempts a JOIN lesson_plans p ON p.id = a.lesson_plan_id WHERE p.document_id = ?`
33:       )
34:       .get(r.id) as { c: number }
35: 
36:     const attemptCount = attemptResult.c
37:     return {
38:       ...r,
39:       plan: planRow
40:         ? {
41:             id: planRow.id,
42:             difficulty: planRow.difficulty,
43:             status: planRow.status
44:           }
45:         : null,
46:       attemptCount
47:     }
48:   })
49: }
50: 
51: export async function getDocument(id: number) {
52:   const row = db.prepare(`SELECT * FROM documents WHERE id = ?`).get(id) as DocumentRow | undefined
53:   if (!row) return null
54:   return {
55:     id: row.id,
56:     filename: row.filename,
57:     title: row.title,
58:     status: row.status,
59:     markdown_chars: row.markdown_chars,
60:     created_at: row.created_at,
61:     error: row.error
62:   }
63: }
64: 
65: type Markdown = { markdown: string | null } | undefined
66: 
67: export async function getDocumentMarkdown(id: number): Promise<string | null> {
68:   const row = db.prepare(`SELECT markdown FROM documents WHERE id = ?`).get(id) as Markdown
69:   return row?.markdown ?? null
70: }
71: 
72: export async function uploadAndConvert(filename: string, buffer: Buffer): Promise<DocumentRow> {
73:   const storedFilename = `${Date.now()}-${nanoid(8)}-${filename.replace(/[^a-zA-Z0-9.\-_ ]/g, '')}`
74:   const filepath = path.join(UPLOADS_DIR, storedFilename)
75:   const { writeFile } = await import('node:fs/promises')
76:   await writeFile(filepath, buffer)
77: 
78:   const doc = db
79:     .prepare(
80:       `INSERT INTO documents (filename, stored_filename, filepath, status)
81:        VALUES (?, ?, ?, 'processing')
82:        RETURNING *`
83:     )
84:     .get(filename, storedFilename, filepath) as DocumentRow
85: 
86:   const result = await convertPdfToMarkdown(filepath)
87:   if (!result.ok) {
88:     db.prepare(`UPDATE documents SET status = 'failed', error = ? WHERE id = ?`).run(
89:       result.error ?? 'Unknown error',
90:       doc.id
91:     )
92:     throw Error('Error occured while converting PDF to markdown')
93:   }
94: 
95:   db.prepare(`UPDATE documents SET status = 'ready', markdown = ?, markdown_chars = ?, error = NULL WHERE id = ?`).run(
96:     result.markdown,
97:     result.markdown.length,
98:     doc.id
99:   )
100:   return doc
101: }

(End of file - total 101 lines)
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

**Users/shivam/qnify/ai-learning-agent/backend/src/ai/summary.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/ai/summary.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/ai/summary.ts</path>
<type>file</type>
<content>
1: import { createAgent } from 'langchain'
2: import { model } from './model.ts'
3: import { summarySchema, type Summary } from './schemas.ts'
4: 
5: const SYSTEM = `You are a learning coach producing a progress report after a learner completes a short lesson built from a PDF.
6: 
7: Inputs include the original learning objectives, the questions asked, the learner's final answers, and which were correct.
8: 
9: Rules:
10: - Be specific and encouraging. Acknowledge effort.
11: - Identify patterns in misses (concept confusions vs. careless errors).
12: - Give 2-5 actionable study tips. Each tip should be a concrete next step.
13: - Never give up on the learner; always leave room to improve.
14: - Cite concepts by their labels, not option letters.`
15: 
16: const summaryAgent = createAgent({
17:   model: model,
18:   systemPrompt: SYSTEM,
19:   responseFormat: summarySchema
20: })
21: 
22: export interface AttemptInput {
23:   objectives: Array<{ text: string; topic: string }>
24:   questions: Array<{
25:     objectiveText: string
26:     question: string
27:     options: string[]
28:     correctIndex: number
29:     learnerIndex: number | null
30:     attempts: number
31:   }>
32:   markdown: string
33: }
34: 
35: export async function generateSummary(input: AttemptInput): Promise<Summary> {
36:   const testBreakdown = input.questions
37:     .map((q, i) => {
38:       const correct = q.learnerIndex === q.correctIndex
39:       const status = correct ? 'CORRECT' : q.learnerIndex === null ? 'SKIPPED' : 'INCORRECT'
40:       const learnerAnswer = q.learnerIndex !== null ? q.options[q.learnerIndex] : '(none)'
41:       return `Objective ${i + 1}: ${q.objectiveText}
42:   Question: ${q.question}
43:   Options: ${q.options.map((o, j) => `(${j + 1}) ${o}`).join(' | ')}
44:   Correct: (${q.correctIndex + 1}) ${q.options[q.correctIndex]}
45:   Learner chose: ${learnerAnswer}
46:   Status: ${status}
47:   Attempts: ${q.attempts}`
48:     })
49:     .join('\n\n')
50: 
51:   const objectives = input.objectives.map((o, i) => `${i + 1}. ${o.text} [${o.topic}]`).join('\n')
52: 
53:   const message = `
54: Learning objectives:\n${objectives}
55: \n\n
56: Per-question breakdown:\n${testBreakdown}
57: \n\n
58: Source material (markdown, for grounding):\n"""${input.markdown}"""
59: `
60: 
61:   const result = await summaryAgent.invoke({
62:     messages: [{ role: 'user', content: message.trim() }]
63:   })
64:   return result.structuredResponse
65: }

(End of file - total 65 lines)
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

*[step finish: tool-calls]* Tokens: 16,075 in / 262 out / 11 reason Cost: $0.0024

---

### **Assistant** — 2026-07-11 13:33:00 UTC

*Model: mimo-v2.5*

*Tokens: 7,376 in / 274 out / 16 reason*  Cost: $0.0012

<details><summary><i>Reasoning</i></summary>

Now let me read the remaining backend files and the frontend API and utility files.

</details>

Let me read the remaining key files: the database schema, AI feedback/model/plan, frontend API layer, and remaining frontend components.

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
57:   created_at: string
58: }

(End of file - total 58 lines)
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

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/ai/model.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/ai/model.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/ai/model.ts</path>
<type>file</type>
<content>
1: import { ChatOpenAI } from '@langchain/openai'
2: import { OPENAI_ENDPOINT, OPENAI_KEY, OPENAI_MODEL } from '../config.ts'
3: import { BaseChatModel } from '@langchain/core/language_models/chat_models'
4: 
5: export const model: BaseChatModel = new ChatOpenAI({
6:   model: OPENAI_MODEL,
7:   apiKey: OPENAI_KEY,
8:   configuration: { baseURL: OPENAI_ENDPOINT },
9:   temperature: 0.4,
10:   maxRetries: 2,
11:   timeout: 60000
12: })

(End of file - total 12 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/ai/plan.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/ai/plan.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/ai/plan.ts</path>
<type>file</type>
<content>
1: import { createAgent } from 'langchain'
2: import { model } from './model.ts'
3: import { planSchema, type Plan } from './schemas.ts'
4: 
5: const SYSTEM = `You are a pedagogical architect. Given a PDF converted to markdown, design a focused, achievable lesson plan for an adult learner.
6: 
7: Rules:
8: - Read the material carefully and pick the 3-6 most important concepts worth learning.
9: - Each objective must be concrete and measurable (e.g. "Explain X", "Identify Y", "Compare A vs B").
10: - Difficulty reflects the material's cognitive demand, not the quiz.
11: - The title should be friendly and specific to the document's subject.
12: - Keep descriptions crisp.`
13: 
14: const planAgent = createAgent({
15:   model: model,
16:   systemPrompt: SYSTEM,
17:   responseFormat: planSchema
18: })
19: 
20: export async function generatePlan(markdown: string, filename: string): Promise<Plan> {
21:   const result = await planAgent.invoke({
22:     messages: [
23:       {
24:         role: 'user',
25:         content: `Source document filename: ${filename}\n\nDocument content (markdown):\n"""\n${markdown}\n"""`
26:       }
27:     ]
28:   })
29:   return result.structuredResponse
30: }

(End of file - total 30 lines)
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

(End of file - total 139 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/lib/format.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/format.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/format.ts</path>
<type>file</type>
<content>
1: import type { Difficulty } from './types'
2: 
3: export function difficultyLabel(d: Difficulty): string {
4:   return d.charAt(0).toUpperCase() + d.slice(1)
5: }
6: 
7: export function difficultyColor(d: Difficulty): string {
8:   switch (d) {
9:     case 'beginner':
10:       return 'bg-success/15 text-success'
11:     case 'intermediate':
12:       return 'bg-primary/15 text-primary'
13:     case 'advanced':
14:       return 'bg-danger/15 text-danger'
15:   }
16: }
17: 
18: export function formatDate(iso: string): string {
19:   try {
20:     const d = new Date(iso.replace(' ', 'T') + 'Z')
21:     if (Number.isNaN(d.getTime())) return iso
22:     return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
23:   } catch {
24:     return iso
25:   }
26: }
27: 
28: export function pluralize(n: number, singular: string, plural?: string): string {
29:   if (n === 1) return `${n} ${singular}`
30:   return `${n} ${plural ?? singular + 's'}`
31: }

(End of file - total 31 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.tsx</path>
<type>file</type>
<content>
1: import { useCallback, useState } from 'react'
2: import { useNavigate } from 'react-router-dom'
3: import { Sparkles, Loader2 } from 'lucide-react'
4: import { UploadDropzone } from '#components/upload-dropzone'
5: import { listDocuments, createPlan } from '#lib/api'
6: 
7: export function LibraryPage() {
8:   const [planning, setPlanning] = useState<number | null>(null)
9:   const [planError, setPlanError] = useState<string | null>(null)
10:   const navigate = useNavigate()
11: 
12:   const handleUploaded = useCallback(
13:     async (documentId: number) => {
14:       setPlanning(documentId)
15:       setPlanError(null)
16:       try {
17:         let docs = await listDocuments()
18:         let doc = docs.find((d) => d.id === documentId)
19:         while (doc && doc.status === 'processing') {
20:           await new Promise((r) => setTimeout(r, 1000))
21:           docs = await listDocuments()
22:           doc = docs.find((d) => d.id === documentId)
23:         }
24:         if (!doc || doc.status === 'failed') {
25:           throw new Error('Document processing failed')
26:         }
27:         const plan = await createPlan(documentId)
28:         navigate(`/learn/${plan.id}`)
29:       } catch (err) {
30:         console.error('Failed to create plan after upload:', err)
31:         setPlanError((err as Error).message ?? 'Failed to create lesson plan')
32:       } finally {
33:         setPlanning(null)
34:       }
35:     },
36:     [navigate]
37:   )
38: 
39:   return (
40:     <div className="space-y-10">
41:       <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
42:         <div className="absolute inset-0 bg-grid-pattern opacity-60" />
43:         <div className="absolute inset-0 bg-radial-glow" />
44:         <div className="relative z-10 max-w-2xl">
45:           <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
46:             <Sparkles className="size-3.5" />
47:             Human-in-the-loop learning agent
48:           </span>
49:           <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
50:             Turn any PDF into an interactive lesson.
51:           </h1>
52:           <p className="mt-3 text-base text-muted-foreground">
53:             Upload a document, review the proposed learning path, then learn by answering quizzes with instant feedback,
54:             hints, and explanations — grounded in your PDF.
55:           </p>
56:           <div className="mt-6">
57:             <UploadDropzone onUploaded={handleUploaded} />
58:           </div>
59:         </div>
60:       </section>
61: 
62:       {planning !== null && (
63:         <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm">
64:           <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-xl">
65:             <Loader2 className="size-5 animate-spin text-primary" />
66:             <div>
67:               <p className="text-sm font-medium">Drafting your lesson plan...</p>
68:               <p className="text-xs text-muted-foreground">Analyzing the PDF content with the agent.</p>
69:             </div>
70:           </div>
71:         </div>
72:       )}
73: 
74:       {planError && (
75:         <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-2xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger backdrop-blur-sm">
76:           <p className="font-medium">Plan creation failed</p>
77:           <p className="mt-1 text-xs text-danger/80">{planError}</p>
78:           <button onClick={() => setPlanError(null)} className="mt-2 text-xs underline hover:text-danger">
79:             Dismiss
80:           </button>
81:         </div>
82:       )}
83:     </div>
84:   )
85: }

(End of file - total 85 lines)
</content>
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 7,376 in / 274 out / 16 reason Cost: $0.0012

---

### **Assistant** — 2026-07-11 13:33:06 UTC

*Model: mimo-v2.5*

*Tokens: 5,639 in / 244 out / 24 reason*  Cost: $0.0010

<details><summary><i>Reasoning</i></summary>

Let me also read the remaining files - the schema SQL, config, errors, upload dropzone, and document card.

</details>

Let me read the remaining files: the SQL schema, config, errors, upload dropzone, and document card.

<details><summary><b>Tool:</b> <code>glob</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src**

**Input:**
```json
{
  "path": "/Users/shivam/qnify/ai-learning-agent/backend/src",
  "pattern": "**/*.sql"
}
```

**Output:**
```
/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/config.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/config.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/config.ts</path>
<type>file</type>
<content>
1: import { resolve, dirname } from 'node:path'
2: import { fileURLToPath } from 'node:url'
3: 
4: export const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..')
5: export const UPLOADS_DIR = resolve(ROOT_DIR, 'uploads')
6: export const DB_PATH = resolve(ROOT_DIR, 'data', 'learning.db')
7: 
8: export const PORT = parseInt(process.env.PORT ?? '3003', 10)
9: export const HOST = process.env.HOST ?? '0.0.0.0'
10: 
11: export const OPENAI_ENDPOINT = process.env.OPENAI_ENDPOINT
12: export const OPENAI_KEY = process.env.OPENAI_KEY
13: export const OPENAI_MODEL = process.env.OPENAI_MODEL

(End of file - total 13 lines)
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

**Users/shivam/qnify/ai-learning-agent/frontend/src/components/upload-dropzone.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/components/upload-dropzone.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/components/upload-dropzone.tsx</path>
<type>file</type>
<content>
1: import { useCallback, useRef, useState } from 'react'
2: import { UploadCloud, FileText, Loader2 } from 'lucide-react'
3: import { cn } from '#lib/utils'
4: import { uploadPdf } from '#lib/api'
5: 
6: interface Props {
7:   onUploaded: (documentId: number) => void
8: }
9: 
10: export function UploadDropzone({ onUploaded }: Props) {
11:   const [dragging, setDragging] = useState(false)
12:   const [uploading, setUploading] = useState(false)
13:   const [error, setError] = useState<string | null>(null)
14:   const inputRef = useRef<HTMLInputElement>(null)
15: 
16:   const handleFile = useCallback(
17:     async (file: File) => {
18:       if (!file.name.toLowerCase().endsWith('.pdf')) {
19:         setError('Only PDF files are supported.')
20:         return
21:       }
22:       setUploading(true)
23:       setError(null)
24:       try {
25:         const doc = await uploadPdf(file)
26:         onUploaded(doc.id)
27:       } catch (err) {
28:         setError((err as Error).message)
29:       } finally {
30:         setUploading(false)
31:       }
32:     },
33:     [onUploaded]
34:   )
35: 
36:   return (
37:     <div
38:       onDragOver={(e) => {
39:         e.preventDefault()
40:         setDragging(true)
41:       }}
42:       onDragLeave={() => setDragging(false)}
43:       onDrop={(e) => {
44:         e.preventDefault()
45:         setDragging(false)
46:         const file = e.dataTransfer.files?.[0]
47:         if (file) void handleFile(file)
48:       }}
49:       onClick={() => inputRef.current?.click()}
50:       role="button"
51:       tabIndex={0}
52:       onKeyDown={(e) => {
53:         if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
54:       }}
55:       className={cn(
56:         'group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-card p-10 text-center transition-all hover:border-primary/60 hover:bg-accent/40',
57:         dragging ? 'border-primary bg-accent/60' : 'border-border'
58:       )}
59:     >
60:       <input
61:         ref={inputRef}
62:         type="file"
63:         accept="application/pdf,.pdf"
64:         className="sr-only"
65:         onChange={(e) => {
66:           const file = e.target.files?.[0]
67:           if (file) void handleFile(file)
68:           e.target.value = ''
69:         }}
70:       />
71:       <div
72:         className={cn(
73:           'mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-105',
74:           dragging && 'scale-110'
75:         )}
76:       >
77:         {uploading ? <Loader2 className="size-6 animate-spin" /> : <UploadCloud className="size-6" />}
78:       </div>
79:       <p className="text-base font-medium">{uploading ? 'Uploading & parsing PDF...' : 'Drop your PDF here'}</p>
80:       <p className="mt-1 text-sm text-muted-foreground">
81:         or click to browse. We'll convert it to text and draft a lesson plan.
82:       </p>
83:       {error && (
84:         <p className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-danger/10 px-3 py-1 text-xs font-medium text-danger">
85:           <FileText className="size-3.5" />
86:           {error}
87:         </p>
88:       )}
89:     </div>
90:   )
91: }

(End of file - total 91 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/components/document-card.tsx**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/components/document-card.tsx"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/components/document-card.tsx</path>
<type>file</type>
<content>
1: import { useNavigate } from 'react-router-dom'
2: import { Clock, FileText, Loader2, AlertTriangle, RefreshCw, ChevronRight, Layers } from 'lucide-react'
3: import { cn } from '#lib/utils'
4: import { Badge } from '#components/ui/badge'
5: import { Button } from '#components/ui/button'
6: import type { DocumentSummary } from '#lib/types'
7: import { difficultyLabel, formatDate } from '#lib/format'
8: 
9: interface Props {
10:   doc: DocumentSummary
11:   onStartLearning?: (documentId: number) => void
12: }
13: 
14: export function DocumentCard({ doc, onStartLearning }: Props) {
15:   const navigate = useNavigate()
16:   const ready = doc.status === 'ready'
17:   const processing = doc.status === 'processing'
18:   const failed = doc.status === 'failed'
19: 
20:   const start = () => {
21:     if (doc.plan) {
22:       navigate(`/learn/${doc.plan.id}`)
23:     } else if (onStartLearning) {
24:       onStartLearning(doc.id)
25:     }
26:   }
27: 
28:   const title = doc.title || doc.filename.replace(/\.pdf$/i, '')
29: 
30:   return (
31:     <div className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/40">
32:       <div className="flex items-start gap-3">
33:         <div
34:           className={cn(
35:             'flex size-11 shrink-0 items-center justify-center rounded-xl',
36:             ready
37:               ? 'bg-primary/10 text-primary'
38:               : processing
39:                 ? 'bg-accent text-accent-foreground'
40:                 : 'bg-danger/10 text-danger'
41:           )}
42:         >
43:           {processing ? (
44:             <Loader2 className="size-5 animate-spin" />
45:           ) : failed ? (
46:             <AlertTriangle className="size-5" />
47:           ) : (
48:             <FileText className="size-5" />
49:           )}
50:         </div>
51:         <div className="min-w-0 flex-1">
52:           <p className="truncate text-sm font-semibold" title={title}>
53:             {title}
54:           </p>
55:           <p className="truncate text-xs text-muted-foreground" title={doc.filename}>
56:             {doc.filename}
57:           </p>
58:         </div>
59:         {doc.plan && <Badge variant="secondary">{difficultyLabel(doc.plan.difficulty)}</Badge>}
60:       </div>
61: 
62:       <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
63:         <span className="inline-flex items-center gap-1">
64:           <Clock className="size-3.5" />
65:           {formatDate(doc.created_at)}
66:         </span>
67:         {ready && (
68:           <span className="inline-flex items-center gap-1">
69:             <FileText className="size-3.5" />
70:             {doc.markdown_chars.toLocaleString()} chars
71:           </span>
72:         )}
73:         {doc.attemptCount > 0 && (
74:           <span className="inline-flex items-center gap-1">
75:             <Layers className="size-3.5" />
76:             {doc.attemptCount} attempt{doc.attemptCount > 1 ? 's' : ''}
77:           </span>
78:         )}
79:       </div>
80: 
81:       {failed && (
82:         <p className="mt-3 line-clamp-2 rounded-md bg-danger/10 px-2.5 py-1.5 text-xs text-danger">
83:           {doc.error ?? 'Failed to process PDF'}
84:         </p>
85:       )}
86: 
87:       <div className="mt-4 flex items-center gap-2">
88:         {ready && !doc.plan && (
89:           <Button size="sm" className="gap-1.5" onClick={start}>
90:             Start learning
91:             <ChevronRight className="size-3.5" />
92:           </Button>
93:         )}
94:         {ready && doc.plan && (
95:           <>
96:             <Button size="sm" className="gap-1.5" onClick={start}>
97:               {doc.attemptCount > 0 ? (
98:                 <>
99:                   <RefreshCw className="size-3.5" />
100:                   Retake
101:                 </>
102:               ) : (
103:                 <>
104:                   Continue
105:                   <ChevronRight className="size-3.5" />
106:                 </>
107:               )}
108:             </Button>
109:             {doc.attemptCount > 0 && (
110:               <Button size="sm" variant="ghost" className="gap-1.5" onClick={start}>
111:                 Review plan
112:               </Button>
113:             )}
114:           </>
115:         )}
116:         {processing && (
117:           <Button size="sm" variant="outline" disabled className="gap-1.5">
118:             <Loader2 className="size-3.5 animate-spin" />
119:             Parsing...
120:           </Button>
121:         )}
122:       </div>
123:     </div>
124:   )
125: }

(End of file - total 125 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/backend/src/services/pdf-to-markdown.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/backend/src/services/pdf-to-markdown.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/backend/src/services/pdf-to-markdown.ts</path>
<type>file</type>
<content>
1: import { execFile } from 'node:child_process'
2: import { readFile } from 'node:fs/promises'
3: import { resolve, dirname, basename, extname } from 'node:path'
4: import { promisify } from 'node:util'
5: import { ROOT_DIR } from '../config.ts'
6: 
7: const execFileAsync = promisify(execFile)
8: 
9: export const PDF_TO_MARKDOWN_DIR = resolve(ROOT_DIR, '..', 'pdf-to-markdown')
10: export const PYTHON_SCRIPT = resolve(PDF_TO_MARKDOWN_DIR, 'convert-docling.py')
11: export const PYTHON_BIN = resolve(PDF_TO_MARKDOWN_DIR, '.venv', 'bin', 'python')
12: 
13: export interface ConvertResult {
14:   ok: boolean
15:   markdown: string
16:   error?: any
17: }
18: 
19: export async function convertPdfToMarkdown(inputPath: string): Promise<ConvertResult> {
20:   const outputPath = resolve(dirname(inputPath), `${basename(inputPath, extname(inputPath))}.md`)
21: 
22:   try {
23:     const { stdout, stderr } = await execFileAsync(
24:       PYTHON_BIN,
25:       [PYTHON_SCRIPT, '--input', inputPath, '--output', outputPath],
26:       { timeout: 600000, maxBuffer: 50 * 1024 * 1024 }
27:     )
28: 
29:     if (stdout) console.log('Python converter output:\n', stdout.trim())
30:     if (stderr) console.warn(`Python converter warning\n: ${stderr.trim()}`)
31: 
32:     const markdown = await readFile(outputPath, 'utf-8')
33:     return { ok: true, markdown }
34:   } catch (err) {
35:     return { ok: false, markdown: '', error: err }
36:   }
37: }

(End of file - total 37 lines)
</content>
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 5,639 in / 244 out / 24 reason Cost: $0.0010

---

### **Assistant** — 2026-07-11 13:33:14 UTC

*Model: mimo-v2.5*

*Tokens: 3,728 in / 70 out / 9 reason*  Cost: $0.0007

<details><summary><i>Reasoning</i></summary>

Now let me read the SQL schema file.

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
51:   created_at     TEXT NOT NULL DEFAULT (DATETIME('now')),
52:   FOREIGN KEY (lesson_plan_id) REFERENCES lesson_plans (id) ON DELETE CASCADE
53: );
54: CREATE INDEX IF NOT EXISTS idx_attempts_plan ON attempts (lesson_plan_id);

(End of file - total 54 lines)
</content>
```

**Duration:** 0.0s
</details>

<details><summary><b>Tool:</b> <code>read</code> (completed)</summary>

**Users/shivam/qnify/ai-learning-agent/frontend/src/lib/utils.ts**

**Input:**
```json
{
  "filePath": "/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/utils.ts"
}
```

**Output:**
```
<path>/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/utils.ts</path>
<type>file</type>
<content>
1: import { clsx, type ClassValue } from 'clsx'
2: import { twMerge } from 'tailwind-merge'
3: 
4: export function cn(...inputs: ClassValue[]) {
5:   return twMerge(clsx(inputs))
6: }

(End of file - total 6 lines)
</content>
```

**Duration:** 0.0s
</details>

*[step finish: tool-calls]* Tokens: 3,728 in / 70 out / 9 reason Cost: $0.0007

---

### **Assistant** — 2026-07-11 13:33:18 UTC

*Model: mimo-v2.5*

*Tokens: 882 in / 3,815 out / 18 reason*  Cost: $0.0013

<details><summary><i>Reasoning</i></summary>

Now I have a comprehensive understanding of the entire codebase. Let me compile my findings.

</details>

I have now read every single file in this codebase. Here is the comprehensive analysis.

---

## PROJECT OVERVIEW

**Name:** Qnify AI Learning Agent
**Purpose:** Upload a PDF, and an AI agent converts it into an interactive quiz-based lesson plan with multiple-choice questions, hints, explanations, and a post-lesson summary.

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Vite 8, React Router 7, Tailwind CSS 4, shadcn/ui components |
| **Backend** | Fastify 5 (Node.js), TypeScript, LangChain + OpenAI, Zod validation |
| **Database** | SQLite via `better-sqlite3` (WAL mode) |
| **AI** | OpenAI-compatible LLM via `@langchain/openai`, structured output via LangChain agents + Zod schemas |
| **PDF Conversion** | Python script (Docling) called from Node.js via `child_process.execFile` |

---

## COMPLETE FILE INVENTORY

### Backend Files

| File | Description |
|------|-------------|
| `/Users/shivam/qnify/ai-learning-agent/backend/src/index.ts` | Fastify server entry point. Registers CORS, multipart, routes, initializes DB schema on startup. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/routes.ts` | All API route definitions: documents CRUD, lesson plans, quizzes (create/check/hint/learn-more), attempts (complete/list/get). |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/db.ts` | SQLite database connection (WAL mode, foreign keys ON), schema loader, TypeScript interfaces for all 4 DB tables: `DocumentRow`, `LessonPlanRow`, `QuizQuestionRow`, `AttemptRow`. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/schema.sql` | SQL DDL: 4 tables -- `documents`, `lesson_plans`, `quiz_questions` (unique constraint on plan+objective_index), `attempts`. Cascade deletes. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/config.ts` | Environment config: DB path, uploads dir, port, OpenAI endpoint/key/model. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/errors.ts` | Custom error classes: `AppError`, `NotFoundError` (404), `BadRequestError` (400). |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/documents.ts` | Document service: list all (with plan summary + attempt count), get one, get markdown, upload+convert PDF to markdown. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/plans.ts` | Plan service: create (calls AI to generate plan from markdown), get plan (with filename), get plans for document, approve plan (draft -> approved). |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/quizzes.ts` | Quiz service: `getOrCreateQuiz` (lazy generation with DB caching), `getAllQuizzes`, `getQuizInternal`, `checkAnswer`, `getHint`, `getExplanation`, `learnMoreAboutQuiz`. Core quiz state management on the backend. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/attempts.ts` | Attempt service: `completeAttempt` (computes score, calls AI summary generator, persists to DB, marks plan as completed), `listAttempts`, `getAttempt`. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/services/pdf-to-markdown.ts` | PDF-to-markdown converter. Calls a Python Docling script via `child_process.execFile`. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/model.ts` | OpenAI ChatOpenAI model instance (temperature 0.4, 60s timeout). |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/schemas.ts` | Zod schemas for structured AI output: `planSchema` (title, description, difficulty, objectives), `quizSchema` (question, 4 options, correct_index, explanation, hint), `summarySchema` (summary, study_tips, weak_topics, strengths). |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/plan.ts` | AI plan generator: LangChain agent that reads PDF markdown and produces a lesson plan with 3-6 objectives. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/quiz.ts` | AI quiz generator: LangChain agent that creates one MCQ per objective, grounded in the PDF content. |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/summary.ts` | AI summary generator: LangChain agent that produces a post-attempt progress report (narrative summary, study tips, weak topics, strengths). |
| `/Users/shivam/qnify/ai-learning-agent/backend/src/ai/feedback.ts` | AI feedback functions: `generateRetryHint` (conceptual hint without revealing answer), `explainCorrect` (2-3 sentence explanation), `learnMore` (tutor-style Q&A about the topic). |
| `/Users/shivam/qnify/ai-learning-agent/backend/package.json` | Backend dependencies: Fastify, LangChain, better-sqlite3, Zod, nanoid. |

### Frontend Files

| File | Description |
|------|-------------|
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/main.tsx` | React entry point. Creates browser router with 2 routes: `/` (LibraryPage) and `/learn/:planId` (LessonPage), wrapped in AppShell. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/types.ts` | TypeScript type definitions: `Objective`, `DocumentSummary`, `DocumentDetail`, `Plan`, `QuizDTO`, `AttemptSummary` (with detailed answers), `AttemptListItem`, `ChatMessage`. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/api.ts` | API client layer. All HTTP calls to the backend: `listDocuments`, `uploadPdf`, `createPlan`, `getPlan`, `approvePlan`, `listQuizzes`, `generateQuiz`, `checkAnswer`, `getHint`, `learnMore`, `completeAttempt`, `listAttempts`. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/format.ts` | Formatting helpers: `difficultyLabel`, `difficultyColor`, `formatDate`, `pluralize`. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/lib/utils.ts` | `cn()` utility (clsx + tailwind-merge). |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/library-page.tsx` | Library/home page. Upload dropzone, auto-polls for processing completion, auto-creates plan after upload, navigates to `/learn/:planId`. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/pages/lesson-page.tsx` | **Core orchestrator** -- manages the entire quiz lifecycle. Contains the `Phase` state machine, `AnswerState` tracking, lazy quiz generation, answer submission, advance logic, finish/completion, retake flow. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/app-shell.tsx` | Layout shell: Sidebar + header + `<Outlet>` for page content. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/sidebar.tsx` | Document sidebar. Lists all uploaded documents with status indicators. Clicking navigates to existing plan or triggers plan creation. Auto-refreshes every 3s if any doc is processing. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/mcq-widget.tsx` | **MCQ quiz widget**. Handles selection, submission via `checkAnswer`, hint requests, "Learn more" chat panel, retry/skip/next logic. States: idle, submitted, correct, incorrect. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/objective-tracker.tsx` | Right sidebar panel showing progress: score bar + ordered list of objectives with status icons (pending, current, correct, skipped). |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/summary-view.tsx` | **Post-quiz summary view**. Displays score, percentage, performance narrative, strengths, weaknesses, study tips, full question review with correct/incorrect highlighting, retake button. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/plan-card.tsx` | Plan review card. Shows proposed lesson plan before quiz begins. Lists objectives with topic labels. Approve button transitions to quiz phase. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/upload-dropzone.tsx` | Drag-and-drop PDF upload component with file validation. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/document-card.tsx` | Document card with status, metadata, attempt count, Start/Continue/Retake/Review buttons. |
| `/Users/shivam/qnify/ai-learning-agent/frontend/src/components/ui/*.tsx` | Shared UI primitives: `badge`, `button`, `card`, `progress`, `radio-group`, `separator`, `skeleton`, `textarea` (shadcn/ui components). |

### Other Files

| File | Description |
|------|-------------|
| `/Users/shivam/qnify/ai-learning-agent/pdf-to-markdown/` | Python Docling-based PDF to markdown converter (external tool). |

---

## QUIZ STATE FLOW -- DETAILED

### Phase State Machine

The `LessonPage` component manages the lifecycle via a `Phase` type:

```
'loading' -> 'review' -> 'quiz' -> 'summary'
                         |
                         v
                       'error'
```

### 1. LOADING Phase
- On mount, `LessonPage` calls `getPlan(planId)` via the API.
- If the plan status is `'draft'`, transitions to `'review'`.
- If already `'approved'` or `'completed'`, transitions to `'quiz'`.

### 2. REVIEW Phase
- Renders `PlanCard` showing the AI-generated lesson plan (title, description, difficulty, 3-6 objectives).
- User clicks "Approve & start learning" which calls `approvePlan()` on the backend (updates status from `'draft'` to `'approved'` in SQLite).
- Transitions to `'quiz'`.

### 3. QUIZ Phase
This is the core phase, managed entirely via **React `useState` in the `LessonPage` component** (no external state management library).

**Quiz State (in-memory only):**
- `quizzes: Record<number, QuizDTO>` -- maps objective index to quiz data. Lazily populated.
- `answers: Record<number, AnswerState>` -- maps objective index to answer tracking.
- `currentIdx: number` -- which objective the learner is on (0-indexed).

**AnswerState structure:**
```typescript
interface AnswerState {
  quizId: number       // DB ID of the quiz question
  learnerIndex: number | null  // Selected option index (null = skipped)
  attempts: number     // Count of incorrect attempts
  correct: boolean     // Whether最终 correct
  finalized: boolean   // Whether this objective is done (correct or skipped)
}
```

**Quiz generation is lazy:**
1. When entering quiz phase, existing quizzes are preloaded via `listQuizzes(planId)`.
2. When `currentIdx` changes, if no quiz exists for that objective, `generateQuiz(planId, currentIdx)` is called.
3. On the backend, `getOrCreateQuiz()` checks SQLite for an existing row (`quiz_questions` table, unique on `lesson_plan_id + objective_index`). If found, returns cached. Otherwise, calls AI to generate, saves to DB, returns.

**Answer flow per objective:**
1. Learner selects an option in `MCQWidget`.
2. Clicks "Submit answer" -> calls `checkAnswer(quizId, learnerIndex)` on backend.
3. Backend checks against `correct_index` in SQLite. If correct, generates explanation via AI.
4. `MCQWidget` sets status to `'correct'` or `'incorrect'`.
5. On correct: `handleCorrect()` marks `answers[currentIdx].finalized = true, correct = true`.
6. On incorrect: `handleIncorrect()` increments `attempts`, learner can retry, get hints, or learn more.
7. After 1+ misses, "Skip" button appears. On skip: `handleSkip()` marks `finalized = true, correct = false, learnerIndex = null` and advances.
8. Learner clicks "Next objective" (or "Finish & see results" for last) -> `advance()` increments `currentIdx` or calls `finish()`.

**Hint/Learn More:**
- "Get a hint" calls `getHint(quizId, previousGuessIndex)` -> AI generates a conceptual hint.
- "Learn more" opens a modal `LearnMorePanel` chat. Calls `learnMore(quizId, question, history)` -> AI acts as a tutor grounded in the PDF content.

### 4. COMPLETION / SUMMARY Phase

**`finish()` function:**
1. Collects all `answers` into a payload: `{ quizId, learnerIndex, attempts }` for each objective.
2. Calls `completeAttempt(planId, answers)` on the backend.
3. Backend (`completeAttempt` in `attempts.ts`):
   - Looks up each quiz in SQLite to verify correctness.
   - Computes total score.
   - Calls `generateSummary()` -- AI produces narrative summary, study tips, weak topics, strengths.
   - Saves an `attempts` row in SQLite (score, total, answers JSON, summary, study tips).
   - Updates `lesson_plans.status` to `'completed'`.
   - Returns `AttemptSummaryDTO` to the frontend.
4. Frontend stores result in `summary` state, transitions to `'summary'` phase.

**`SummaryView` component displays:**
- Score badge with percentage (X% correct first try).
- Performance summary (narrative text from AI).
- Strengths (green panel) and Weak topics (red panel).
- Personalized study tips (numbered list with Markdown support).
- Full question review: each question shown with correct/incorrect/skipped badge, all options listed with highlighting.
- "Back to library" and "Retake lesson" buttons.

**`handleRetake()` function:**
- Resets all state: `answers = {}`, `quizzes = {}`, `currentIdx = 0`, `summary = null`.
- Transitions back to `'quiz'` phase.
- This triggers re-generation of quizzes (or re-use of cached ones from the backend DB).

---

## QUIZ STATE PERSISTENCE

**Quiz state is NOT persisted on the frontend.** There is no localStorage, sessionStorage, Redux, Zustand, or any client-side persistence. All quiz answer tracking lives in React `useState` hooks within `LessonPage` and is lost on page refresh.

**Backend persistence (SQLite):**

| Table | What's persisted |
|-------|-----------------|
| `documents` | Uploaded PDFs with extracted markdown content and processing status |
| `lesson_plans` | AI-generated plans with objectives (JSON), difficulty, status lifecycle (`draft` -> `approved` -> `completed`) |
| `quiz_questions` | AI-generated MCQs (one per objective per plan), including question, 4 options, correct_index, explanation, hint. **Cached** -- reused across retakes. |
| `attempts` | Each completed quiz attempt: score, total, all answers (JSON), AI-generated summary, study tips, timestamp. |

The plan status lifecycle:
- `draft` -> `approved` (when user approves) -> `completed` (when `completeAttempt` is called).
- On retake, a new `attempts` row is created. The plan status is already `completed` and stays that way. The sidebar and document cards show attempt counts.

---

## TOPIC SWITCHING / NAVIGATION

**Sidebar (`sidebar.tsx`):**
- Lists all documents. Each shows its latest plan (if any) with difficulty badge.
- Clicking a document with an existing plan navigates to `/learn/{planId}`.
- Clicking a document without a plan triggers `createPlan()` then navigates.
- "Upload new" link goes back to `/`.

**Within a lesson (`lesson-page.tsx`):**
- Objectives are navigated sequentially (index 0, 1, 2, ...) via `currentIdx`.
- There is no manual topic/objective jumping -- the learner progresses linearly.
- The `ObjectiveTracker` sidebar shows all objectives with their status icons.
- "Back to library" link navigates to `/`.
- There is no PDF viewer embedded in the app -- the PDF is converted to markdown on the backend and used only for AI context.

---

## SUMMARY: KEY ARCHITECTURAL DECISIONS

1. **No client-side state persistence** -- quiz progress is ephemeral. A page refresh restarts the lesson.
2. **Lazy quiz generation with backend caching** -- quizzes are generated one at a time as the learner progresses, and cached in SQLite for retakes.
3. **AI-grounded everything** -- every interaction (plan generation, quiz creation, hints, explanations, learn-more chat, summary) is grounded in the original PDF markdown via LangChain.
4. **Human-in-the-loop** -- the learner must approve the plan before starting; the learner chooses when to retry, skip, or get hints.
5. **No PDF viewer** -- the PDF is processed server-side into markdown; the frontend only shows structured quiz content.

*[step finish: stop]* Tokens: 882 in / 3,815 out / 18 reason Cost: $0.0013

---
