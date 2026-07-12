import { Check, Circle, X } from 'lucide-react'
import { cn } from '#lib/utils'
import type { Objective } from '#lib/types'
import { Badge } from '#components/ui/badge'

export type ObjectiveStatus = 'pending' | 'current' | 'correct' | 'skipped'

interface Props {
  objectives: Objective[]
  statuses: ObjectiveStatus[]
  score: number
  total: number
}

export function ObjectiveTracker({ objectives, statuses, score, total }: Props) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Score</p>
          <p className="text-2xl font-bold tabular-nums">
            {score}
            <span className="text-base text-muted-foreground">/{total}</span>
          </p>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{
              width: total === 0 ? '0%' : `${(score / total) * 100}%`
            }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Objectives</p>
        <ol className="space-y-1.5">
          {objectives.map((obj, i) => {
            const status = statuses[i] ?? 'pending'
            return (
              <li
                key={i}
                className={cn(
                  'flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors',
                  status === 'current' && 'bg-accent/60'
                )}
              >
                <span className="mt-0.5 shrink-0">
                  {status === 'correct' ? (
                    <span className="flex size-5 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="size-3.5" />
                    </span>
                  ) : status === 'skipped' ? (
                    <span className="flex size-5 items-center justify-center rounded-full bg-danger/15 text-danger">
                      <X className="size-3.5" />
                    </span>
                  ) : status === 'current' ? (
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Circle className="size-3.5 fill-primary" />
                    </span>
                  ) : (
                    <Circle className="size-5 text-muted-foreground/50" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      'text-sm font-semibold leading-snug',
                      status === 'pending' && 'text-muted-foreground',
                      (status === 'correct' || status === 'skipped') &&
                        'text-muted-foreground line-through decoration-muted-foreground/40'
                    )}
                  >
                    {obj.topic}
                  </p>
                  <p
                    className={cn(
                      'mt-0.5 text-xs text-muted-foreground',
                      (status === 'correct' || status === 'skipped') && 'line-through decoration-muted-foreground/40'
                    )}
                  >
                    {obj.text}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-1">
                    <Badge variant="outline" className="text-xs font-normal">
                      {obj.question_count} question{obj.question_count === 1 ? '' : 's'}
                    </Badge>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
