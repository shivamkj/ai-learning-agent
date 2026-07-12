import Markdown from 'react-markdown'
import { Award, BookOpen, CheckCircle2, Lightbulb, RefreshCw, TrendingUp, XCircle, ArrowLeft } from 'lucide-react'
import { cn } from '#lib/utils'
import { Badge } from '#components/ui/badge'
import { Button } from '#components/ui/button'
import { Card, CardContent } from '#components/ui/card'
import { Separator } from '#components/ui/separator'
import type { AttemptSummary } from '#lib/types'

interface Props {
  summary: AttemptSummary
  onRetake: () => void
  onBackToLibrary: () => void
}

export function SummaryView({ summary, onRetake, onBackToLibrary }: Props) {
  const pct = summary.total === 0 ? 0 : Math.round((summary.score / summary.total) * 100)
  const passedFirstTry = summary.answers.filter((a) => a.attempts === 0 || a.attempts === 1).length

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Card className="overflow-hidden">
        <div className="relative bg-gradient-to-br from-primary/15 via-accent/40 to-transparent p-6 text-center sm:p-10">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative z-10">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
              <Award className="size-7" />
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Lesson complete</p>
            <p className="mt-2 text-4xl font-bold tabular-nums">
              {summary.score}
              <span className="text-2xl text-muted-foreground">/{summary.total}</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {pct}% correct first try · {passedFirstTry} of {summary.total} mastered on first attempt
            </p>
            <div className="mx-auto mt-4 h-2 w-48 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>

        <Separator />

        <CardContent className="space-y-6 p-6 sm:p-8">
          <section>
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Performance summary
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground">{summary.summary}</p>
          </section>

          {(summary.strengths.length > 0 || summary.weakTopics.length > 0) && (
            <div className="grid gap-4 sm:grid-cols-2">
              {summary.strengths.length > 0 && (
                <div className="rounded-xl border border-success/30 bg-success/5 p-4">
                  <div className="flex items-center gap-1.5 text-success">
                    <CheckCircle2 className="size-4" />
                    <p className="text-xs font-semibold uppercase tracking-wide">Strengths</p>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {summary.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {summary.weakTopics.length > 0 && (
                <div className="rounded-xl border border-danger/30 bg-danger/5 p-4">
                  <div className="flex items-center gap-1.5 text-danger">
                    <XCircle className="size-4" />
                    <p className="text-xs font-semibold uppercase tracking-wide">Needs work</p>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {summary.weakTopics.map((s, i) => (
                      <li key={i} className="text-sm text-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {summary.studyTips.length > 0 && (
            <section className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Personalized study tips</h2>
              </div>
              <ul className="mt-3 space-y-2">
                {summary.studyTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">
                      <Markdown>{tip}</Markdown>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <div className="flex items-center gap-2">
              <BookOpen className="size-4 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Question review</h2>
            </div>
            <div className="mt-3 space-y-3">
              {summary.answers.map((a, i) => {
                const correct = a.learnerIndex === a.correctIndex
                const skipped = a.learnerIndex === null
                return (
                  <div
                    key={i}
                    className={cn(
                      'rounded-xl border p-4',
                      correct ? 'border-success/40 bg-success/5' : 'border-danger/40 bg-danger/5'
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium leading-snug">{a.question}</p>
                      {correct ? (
                        <Badge variant="default" className="shrink-0">
                          <CheckCircle2 className="size-3" />
                          Correct
                        </Badge>
                      ) : skipped ? (
                        <Badge variant="secondary" className="shrink-0">
                          Skipped
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="shrink-0">
                          <XCircle className="size-3" />
                          Missed
                        </Badge>
                      )}
                    </div>
                    <div className="mt-3 space-y-1 text-xs">
                      {a.options.map((opt, j) => {
                        const isCorrect = j === a.correctIndex
                        const isLearner = j === a.learnerIndex
                        return (
                          <div
                            key={j}
                            className={cn(
                              'flex items-center gap-2 rounded-md px-2 py-1',
                              isCorrect && 'bg-success/15 text-success',
                              isLearner && !isCorrect && 'bg-danger/15 text-danger'
                            )}
                          >
                            <span className="font-mono">{String.fromCharCode(65 + j)}.</span>
                            <span className="flex-1">{opt}</span>
                            {isCorrect && <CheckCircle2 className="size-3.5" />}
                            {isLearner && !isCorrect && <XCircle className="size-3.5" />}
                          </div>
                        )
                      })}
                    </div>
                    {correct && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        {a.attempts === 0 ? '1st try' : a.attempts === 1 ? '2 tries' : `${a.attempts + 1} tries`}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          <div className="flex flex-wrap gap-2">
            <Button onClick={onRetake}>
              <RefreshCw className="size-4" />
              Retake lesson
            </Button>
            <Button variant="outline" onClick={onBackToLibrary}>
              <ArrowLeft className="size-4" />
              Back to library
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
