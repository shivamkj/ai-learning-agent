import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { PlanCard } from '#components/plan-card'
import { MCQWidget } from '#components/mcq-widget'
import { ObjectiveTracker, type ObjectiveStatus } from '#components/objective-tracker'
import { SummaryView } from '#components/summary-view'
import { Card, CardContent } from '#components/ui/card'
import { Progress } from '#components/ui/progress'
import * as api from '#lib/api'
import type { AttemptSummary, Objective, Plan, QuizDTO } from '#lib/types'
import { difficultyLabel } from '#lib/helpers'

type Phase = 'loading' | 'review' | 'quiz' | 'summary' | 'error'

interface AnswerState {
  quizId: number
  learnerIndex: number | null
  attempts: number
  correct: boolean
  finalized: boolean
}

interface QuestionSlot {
  objectiveIndex: number
  questionIndex: number
  objective: Objective
}

function blankAnswer(quizId: number): AnswerState {
  return {
    quizId,
    learnerIndex: null,
    attempts: 0,
    correct: false,
    finalized: false
  }
}

function slotKey(objectiveIndex: number, questionIndex: number): string {
  return `${objectiveIndex}-${questionIndex}`
}

export function LessonPage() {
  const { planId } = useParams<{ planId: string }>()
  const navigate = useNavigate()
  const [phase, setPhase] = useState<Phase>('loading')
  const [plan, setPlan] = useState<Plan | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [quizzes, setQuizzes] = useState<Record<string, QuizDTO>>({})
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({})
  const [currentIdx, setCurrentIdx] = useState(0)
  const [loadingQuiz, setLoadingQuiz] = useState(false)
  const [summary, setSummary] = useState<AttemptSummary | null>(null)
  const [finishing, setFinishing] = useState(false)

  const slots = useMemo<QuestionSlot[]>(() => {
    if (!plan) return []
    return plan.objectives.flatMap((objective, objectiveIndex) =>
      Array.from({ length: objective.question_count }, (_, questionIndex) => ({
        objectiveIndex,
        questionIndex,
        objective
      }))
    )
  }, [plan])

  useEffect(() => {
    if (!planId) return
    const id = Number(planId)

    async function loadPlan() {
      const p = await api.getPlan(id)
      setPlan(p)

      if (p.status === 'draft') {
        setPhase('review')
        return
      }

      if (p.status !== 'completed') {
        setPhase('quiz')
        return
      }

      try {
        const attempts = await api.listAttempts(id)
        if (attempts.length === 0) {
          setPhase('quiz')
          return
        }
        const latest = await api.getAttempt(attempts[0].id)
        setSummary(latest)
        setPhase('summary')
      } catch {
        setPhase('quiz')
      }
    }

    loadPlan().catch((err: unknown) => {
      setError((err as Error).message)
      setPhase('error')
    })
  }, [planId])

  // Preload cached quizzes when entering the quiz phase (retest path)
  useEffect(() => {
    if (phase !== 'quiz' || !planId || !plan) return
    const id = Number(planId)
    api
      .listQuizzes(id)
      .then((existing) => {
        if (existing.length === 0) return
        const map: Record<string, QuizDTO> = {}
        for (const q of existing) {
          map[slotKey(q.objectiveIndex, q.questionIndex)] = q
        }
        setQuizzes(map)
      })
      .catch(() => {
        // ignore — we'll lazy-generate
      })
  }, [phase, planId, plan])

  const currentSlot = slots[currentIdx]
  const currentKey = currentSlot ? slotKey(currentSlot.objectiveIndex, currentSlot.questionIndex) : ''
  const currentQuiz = quizzes[currentKey]

  // Lazy-generate the quiz for the current question when needed
  useEffect(() => {
    if (phase !== 'quiz' || !plan || !planId || !currentSlot) return
    if (currentQuiz || loadingQuiz) return
    const id = Number(planId)
    setLoadingQuiz(true)
    api
      .generateQuiz(id, currentSlot.objectiveIndex, currentSlot.questionIndex)
      .then((q) => {
        setQuizzes((prev) => ({ ...prev, [slotKey(q.objectiveIndex, q.questionIndex)]: q }))
      })
      .catch((err: unknown) => {
        setError((err as Error).message)
        setPhase('error')
      })
      .finally(() => setLoadingQuiz(false))
  }, [phase, plan, planId, currentSlot, currentQuiz, loadingQuiz])

  const handleApprove = useCallback(async () => {
    if (!plan) return
    try {
      const updated = await api.approvePlan(plan.id)
      setPlan(updated)
      setPhase('quiz')
    } catch (err) {
      setError((err as Error).message)
      setPhase('error')
    }
  }, [plan])

  const handleRevise = useCallback(
    async (feedback: string) => {
      if (!plan) return
      try {
        const updated = await api.revisePlan(plan.id, feedback)
        setPlan(updated)
        // Reset any quizzes cached from the previous draft.
        setQuizzes({})
        setAnswers({})
        setCurrentIdx(0)
      } catch (err) {
        setError((err as Error).message)
        setPhase('error')
      }
    },
    [plan]
  )

  const finish = useCallback(
    async (answersToSubmit?: Record<string, AnswerState>) => {
      if (!plan || !planId || finishing) return
      setFinishing(true)
      try {
        const payload = Object.values(answersToSubmit ?? answers).map((a) => ({
          quizId: a.quizId,
          learnerIndex: a.learnerIndex,
          attempts: a.attempts
        }))
        const result = await api.completeAttempt(plan.id, payload)
        setSummary(result)
        setPhase('summary')
      } catch (err) {
        setError((err as Error).message)
        setPhase('error')
      } finally {
        setFinishing(false)
      }
    },
    [plan, planId, answers, finishing]
  )

  const advance = useCallback(() => {
    if (!plan) return
    if (currentIdx + 1 >= slots.length) {
      void finish()
    } else {
      setCurrentIdx((i) => i + 1)
    }
  }, [currentIdx, plan, slots.length, finish])

  const handleIncorrect = useCallback(
    (key: string, learnerIndex: number) => {
      setAnswers((prev) => {
        const quizId = quizzes[key]?.id ?? -1
        const existing = prev[key] ?? blankAnswer(quizId)
        return {
          ...prev,
          [key]: {
            ...existing,
            quizId,
            learnerIndex,
            correct: false,
            attempts: existing.attempts + 1,
            finalized: false
          }
        }
      })
    },
    [quizzes]
  )

  const handleCorrect = useCallback(
    (key: string, learnerIndex: number) => {
      setAnswers((prev) => {
        const quizId = quizzes[key]?.id ?? -1
        const existing = prev[key] ?? blankAnswer(quizId)
        return {
          ...prev,
          [key]: {
            ...existing,
            quizId,
            learnerIndex,
            correct: true,
            // attempts stays — counts only incorrect tries
            finalized: true
          }
        }
      })
    },
    [quizzes]
  )

  const handleSkip = useCallback(
    (key: string) => {
      const quizId = quizzes[key]?.id ?? -1
      const existing = answers[key] ?? blankAnswer(quizId)
      const nextAnswers = {
        ...answers,
        [key]: {
          ...existing,
          quizId,
          learnerIndex: null,
          correct: false,
          finalized: true
        }
      }
      setAnswers(nextAnswers)
      if (currentIdx + 1 >= slots.length) {
        void finish(nextAnswers)
      } else {
        setCurrentIdx((i) => i + 1)
      }
    },
    [quizzes, answers, currentIdx, slots.length, finish]
  )

  const handleRetake = useCallback(() => {
    setAnswers({})
    setQuizzes({})
    setCurrentIdx(0)
    setSummary(null)
    setPhase('quiz')
  }, [])

  if (phase === 'loading') {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="size-6 animate-spin text-primary" />
      </div>
    )
  }

  if (phase === 'error' || !plan) {
    return (
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-sm font-medium text-danger">{error ?? 'Something went wrong.'}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (phase === 'review') {
    return <PlanCard plan={plan} onApprove={handleApprove} onRevise={handleRevise} onBack={() => navigate('/')} />
  }

  if (phase === 'summary' && summary) {
    return <SummaryView summary={summary} onRetake={handleRetake} onBackToLibrary={() => navigate('/')} />
  }

  // quiz phase
  const total = slots.length
  const answerList = slots.map((slot) => answers[slotKey(slot.objectiveIndex, slot.questionIndex)])
  const completed = answerList.filter((a) => a?.finalized).length
  const score = answerList.filter((a) => a?.correct).length
  const progressPct = total === 0 ? 0 : Math.round((completed / total) * 100)

  const statuses: ObjectiveStatus[] = plan.objectives.map((obj, objectiveIndex) => {
    let correct = 0
    let finalized = 0
    for (let q = 0; q < obj.question_count; q++) {
      const a = answers[slotKey(objectiveIndex, q)]
      if (a?.finalized) finalized += 1
      if (a?.correct) correct += 1
    }
    if (finalized === 0) return 'pending'
    if (correct === obj.question_count) return 'correct'
    if (currentSlot?.objectiveIndex === objectiveIndex) return 'current'
    if (finalized === obj.question_count) return 'skipped'
    return 'current'
  })

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="truncate text-xl font-bold tracking-tight">{plan.title}</h1>
            <p className="text-xs text-muted-foreground">
              {difficultyLabel(plan.difficulty)} · {completed} of {total} questions done
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold tabular-nums">
              {score}
              <span className="text-base text-muted-foreground">/{total}</span>
            </p>
          </div>
        </div>
        <Progress value={progressPct} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="min-w-0">
          {currentQuiz && currentSlot ? (
            <MCQWidget
              key={currentQuiz.id}
              quiz={currentQuiz}
              objectiveNumber={currentSlot.objectiveIndex + 1}
              totalObjectives={plan.objectives.length}
              questionNumber={currentSlot.questionIndex + 1}
              totalQuestionsInObjective={currentSlot.objective.question_count}
              onCorrect={(learnerIndex) => {
                handleCorrect(currentKey, learnerIndex)
              }}
              onIncorrect={(learnerIndex) => handleIncorrect(currentKey, learnerIndex)}
              onSkip={() => handleSkip(currentKey)}
              onNext={advance}
              isLast={currentIdx === total - 1}
            />
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-3 p-12 text-center">
                <Loader2 className="size-6 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">
                  {currentSlot ? (
                    <>
                      Generating question {currentSlot.questionIndex + 1} for path {currentSlot.objectiveIndex + 1}...
                    </>
                  ) : (
                    <>Wrapping up...</>
                  )}
                </p>
              </CardContent>
            </Card>
          )}
          {finishing && (
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Building your progress report...
            </p>
          )}
        </div>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <ObjectiveTracker objectives={plan.objectives} statuses={statuses} score={score} total={total} />
        </aside>
      </div>
    </div>
  )
}
