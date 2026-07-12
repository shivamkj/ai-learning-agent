import { useState } from 'react'
import * as icons from 'lucide-react'
import { cn } from '#lib/utils'
import { Badge } from '#components/ui/badge'
import { Button } from '#components/ui/button'
import { Card, CardContent } from '#components/ui/card'
import { Separator } from '#components/ui/separator'
import { Textarea } from '#components/ui/textarea'
import type { Plan } from '#lib/types'
import { difficultyLabel } from '#lib/helpers'

interface Props {
  plan: Plan
  onApprove: () => void
  onRevise: (feedback: string) => Promise<void>
  onBack: () => void
}

const SUGGESTIONS = [
  'Split the material into more focused paths',
  'Combine related topics into fewer paths',
  'Increase the number of questions per path',
  'Reduce the number of questions per path',
  'Make objectives more concrete and measurable'
]

export function PlanCard({ plan, onApprove, onRevise, onBack }: Props) {
  const [approving, setApproving] = useState(false)
  const [revising, setRevising] = useState(false)
  const [feedback, setFeedback] = useState(plan.revision_feedback ?? '')

  const totalQuestions = plan.objectives.reduce((sum, o) => sum + o.question_count, 0)

  const handleApprove = async () => {
    setApproving(true)
    try {
      await onApprove()
    } finally {
      setApproving(false)
    }
  }

  const handleRevise = async () => {
    const trimmed = feedback.trim()
    if (!trimmed) return
    setFeedback('')
    setRevising(true)
    try {
      await onRevise(trimmed)
    } finally {
      setRevising(false)
    }
  }

  const appendSuggestion = (text: string) => {
    setFeedback((prev) => {
      const separator = prev.trim().length > 0 ? '\n\n' : ''
      return prev.trim() + separator + text
    })
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Card className="overflow-hidden">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/40 to-transparent p-6 sm:p-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <icons.Sparkles className="size-3.5" />
              Proposed lesson plan
            </span>
            <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{plan.title}</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{plan.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <Badge variant="secondary">
                <icons.Target className="size-3" />
                {difficultyLabel(plan.difficulty)}
              </Badge>
              <Badge variant="outline">
                <icons.ListChecks className="size-3" />
                {plan.objectives.length} paths
              </Badge>
              <Badge variant="outline">{totalQuestions} questions</Badge>
              {plan.document_filename && (
                <Badge variant="outline">
                  <icons.FileText className="size-3" />
                  {plan.document_filename}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <Separator />

        <CardContent className="p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <icons.Target className="size-4 text-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Learning paths</h2>
          </div>
          <ol className="space-y-3">
            {plan.objectives.map((obj, i) => (
              <li
                key={i}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-relaxed">{obj.topic}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{obj.text}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    <span className="font-medium">{obj.question_count}</span> question
                    {obj.question_count === 1 ? '' : 's'}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
            <div className="flex items-start gap-2">
              <icons.CheckCircle2 className="size-4 shrink-0 translate-y-0.5 text-primary" />
              <div>
                <p className="font-medium">Review & approve to begin</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  The agent proposes paths and question counts based on the PDF. You can accept the plan, ask the agent
                  to adjust it, or refine the breakdown below.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <icons.MessageSquarePlus className="size-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Request changes</h3>
              {plan.revision_count > 0 && (
                <Badge variant="outline" className="ml-auto text-xs">
                  {plan.revision_count} revision{plan.revision_count === 1 ? '' : 's'}
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => appendSuggestion(s)}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>

            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell the agent how to improve the plan: e.g. split topic X, combine Y and Z, add more questions, or reduce the total..."
              rows={3}
              className="resize-none"
            />
          </div>

          <div className="mt-6 flex flex-col-reverse items-stretch gap-2 sm:flex-row sm:items-center sm:justify-end">
            <Button variant="ghost" onClick={onBack} disabled={approving || revising}>
              <icons.ArrowLeft className="mr-1.5 size-4" />
              Cancel
            </Button>
            <Button
              variant="outline"
              onClick={handleRevise}
              disabled={!feedback.trim() || revising}
              className="gap-1.5"
            >
              {revising ? (
                <>
                  <icons.Loader2 className="size-4 animate-spin" />
                  Revising...
                </>
              ) : (
                <>
                  <icons.RefreshCw className="size-4" />
                  Regenerate plan
                </>
              )}
            </Button>
            <Button className={cn('gap-1.5')} onClick={handleApprove} disabled={approving || revising}>
              {approving ? (
                <>
                  <icons.Loader2 className="size-4 animate-spin" />
                  Approving...
                </>
              ) : (
                <>
                  Approve & start learning
                  <icons.ArrowRight className="size-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
