# AI Learning Agent — Project Summary

## Overview

An AI-powered learning platform that transforms PDF documents into interactive lessons with MCQ quizzes, human-in-the-loop plan approval, and personalized feedback. Built with **TypeScript**, **Vite**, **LangChain**, **Fastify**, **SQLite**, **Shadcn**, and **Tailwind CSS v4**.

---

## Architecture

```
ai-learning-agent/
├── backend/          # Fastify API + LangChain AI agents + SQLite
├── frontend/         # Vite + React + CopilotKit chat widget
├── pdf-to-markdown/  # Python script (Docling) for PDF→Markdown conversion
└── session-transcripts/
```

**Key Backend Files:**

- `backend/src/index.ts` — Fastify server entry, DB init
- `backend/src/routes/learning.ts` — All learning API routes
- `backend/src/services/` — Domain services (split from monolithic `learning.ts`)
  - `plan.ts` — Lesson plan generation & HITL flow
  - `questions.ts` — MCQ generation & evaluation
  - `feedback.ts` — Hints, explanations, retry logic
  - `summary.ts` — Progress reports & study tips
  - `pdf-to-markdown.ts` — PDF conversion orchestration
- `backend/src/ai/` — LangChain agent definitions (plan, questions, feedback, summary)

**Key Frontend Files:**

- `frontend/src/pages/lesson-page.tsx` — Main lesson experience
- `frontend/src/components/mcq-widget.tsx` — MCQ rendering with radio buttons, green/red feedback
- `frontend/src/components/pdf-library.tsx` — Sidebar PDF history & retest

---

## Development Timeline (2026-07-11)

### Phase 1: Initial Build (05:51 – 07:38)

- **Assignment**: Build AI learning agent from scratch. PDF → lesson plan → MCQ quiz → summary.
- First attempt with **CopilotKit + Mastra** failed to wire up properly.
- Restarted with **LangChain + Fastify + SQLite**. Iteratively got:
  - PDF upload & parsing via Python Docling script
  - Lesson plan generation with HITL approval
  - MCQ generation per objective
  - Green/red answer feedback + hints + retry
  - Summary with study tips at lesson completion
  - PDF upload history in sidebar

### Phase 2: Bug Fixing & Polish (08:15 – 08:58)

- Fixed PDF upload button not triggering (empty JSON body error)
- Fixed "Start Learning" button spinning then closing (lesson plan generation timeout)
- Fixed markdown rendering in personalized study tips
- Added try count display ("1st try", "2-3 tries") in question review

### Phase 3: Code Refactoring (09:51 – 12:15)

- **Simplified `pdf-to-markdown.ts`** — replaced complex service with direct `execFileAsync` call to Python script
- **Split `learning.ts`** into domain files: `plan.ts`, `questions.ts`, `feedback.ts`, `summary.ts` (each <200 lines)
- **Standardized AI code** — updated all AI modules to match `plan.ts` pattern
- **Fastify validation** — replaced manual request/query parsing with Fastify schema validation
- **Error handling** — removed manual try-catch blocks, let Fastify's built-in error handler manage 500s
- **Type cleanup** — moved inline types to top-level declarations in `backend/src/services/`

### Phase 4: UI/UX Improvements (12:39 – 14:51)

- **Moved PDF library to sidebar** (was at bottom of page)
- **HITL lesson plan modification** — added ability to regenerate/edit plan before accepting (not just accept/cancel)
- **Topic names displayed prominently** in learning paths
- **On-demand explanation generation** — explanations no longer auto-generated on submit; user clicks button to generate
- **PDF deletion** — added delete option for uploaded library PDFs
- **State reset bug** — fixed options not resetting after wrong answer
- **Answer flow** — show correctness immediately, explanation only on click

### Phase 5: Advanced Features & Final Fixes (17:25 – 18:05)

- **AGENTS.md** — created repository instruction file for future AI sessions
- **Batch question generation** — all questions for a learning path generated in one go after plan approval (stored in DB for persistence across refreshes)
- **Learning path bugs** — fixed regeneration input not clearing, approval state getting stuck
- **Removed hide explanation toggle** — simplified MCQ widget
- **Removed loading state** in objective list question practice

---

## Core Flow

```
Upload PDF → Docling converts to Markdown
  → AI generates lesson plan (objectives + difficulty)
  → User reviews/modifies plan (HITL)
  → AI generates all MCQs for approved plan (batch, stored in DB)
  → For each objective:
      → Render MCQ widget (question + 4 options)
      → User selects answer
      → Show correct/incorrect immediately (green/red)
      → Optional: generate explanation on demand
      → On wrong: show hint, allow retry
  → Lesson complete → progress summary + personalized study tips
```

---

## Tech Stack

| Layer      | Technology                              |
| ---------- | --------------------------------------- |
| Language   | TypeScript                              |
| Frontend   | Vite, React, Shadcn UI, Tailwind CSS v4 |
| AI Chat    | CopilotKit                              |
| AI Engine  | LangChain + OpenAI                      |
| Backend    | Fastify                                 |
| Database   | SQLite (via `sqlite` npm package)       |
| PDF Parser | Python + Docling (via `execFileAsync`)  |
| Styling    | Blue & Indigo brand colors              |

---

## Key Patterns Established

- **AI code**: All AI modules follow the `plan.ts` pattern (LangChain chain structure)
- **Request handling**: Fastify schema validation, no manual parsing
- **Error handling**: Let Fastify error handler manage; manual try-catch only for specific messages
- **Services**: Domain-based splitting, types declared above functions, not inline
- **Questions**: Batch-generated after plan approval, stored in DB for persistence
- **Explanations**: On-demand only (generated when user clicks button, not auto-shown)
