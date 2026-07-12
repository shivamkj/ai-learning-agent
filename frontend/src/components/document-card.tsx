import { useNavigate } from 'react-router-dom'
import { Clock, FileText, Loader2, AlertTriangle, RefreshCw, ChevronRight, Layers } from 'lucide-react'
import { cn } from '#lib/utils'
import { Badge } from '#components/ui/badge'
import { Button } from '#components/ui/button'
import type { DocumentSummary } from '#lib/types'
import { difficultyLabel, formatDate } from '#lib/helpers'

interface Props {
  doc: DocumentSummary
  onStartLearning?: (documentId: number) => void
}

export function DocumentCard({ doc, onStartLearning }: Props) {
  const navigate = useNavigate()
  const ready = doc.status === 'ready'
  const processing = doc.status === 'processing'
  const failed = doc.status === 'failed'

  const start = () => {
    if (doc.plan) {
      navigate(`/learn/${doc.plan.id}`)
    } else if (onStartLearning) {
      onStartLearning(doc.id)
    }
  }

  const title = doc.title || doc.filename.replace(/\.pdf$/i, '')

  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/40">
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-xl',
            ready
              ? 'bg-primary/10 text-primary'
              : processing
                ? 'bg-accent text-accent-foreground'
                : 'bg-danger/10 text-danger'
          )}
        >
          {processing ? (
            <Loader2 className="size-5 animate-spin" />
          ) : failed ? (
            <AlertTriangle className="size-5" />
          ) : (
            <FileText className="size-5" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold" title={title}>
            {title}
          </p>
          <p className="truncate text-xs text-muted-foreground" title={doc.filename}>
            {doc.filename}
          </p>
        </div>
        {doc.plan && <Badge variant="secondary">{difficultyLabel(doc.plan.difficulty)}</Badge>}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5" />
          {formatDate(doc.created_at)}
        </span>
        {ready && (
          <span className="inline-flex items-center gap-1">
            <FileText className="size-3.5" />
            {doc.markdown_chars.toLocaleString()} chars
          </span>
        )}
        {doc.attemptCount > 0 && (
          <span className="inline-flex items-center gap-1">
            <Layers className="size-3.5" />
            {doc.attemptCount} attempt{doc.attemptCount > 1 ? 's' : ''}
          </span>
        )}
      </div>

      {failed && (
        <p className="mt-3 line-clamp-2 rounded-md bg-danger/10 px-2.5 py-1.5 text-xs text-danger">
          {doc.error ?? 'Failed to process PDF'}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        {ready && !doc.plan && (
          <Button size="sm" className="gap-1.5" onClick={start}>
            Start learning
            <ChevronRight className="size-3.5" />
          </Button>
        )}
        {ready && doc.plan && (
          <>
            <Button size="sm" className="gap-1.5" onClick={start}>
              {doc.attemptCount > 0 ? (
                <>
                  <RefreshCw className="size-3.5" />
                  Retake
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight className="size-3.5" />
                </>
              )}
            </Button>
            {doc.attemptCount > 0 && (
              <Button size="sm" variant="ghost" className="gap-1.5" onClick={start}>
                Review plan
              </Button>
            )}
          </>
        )}
        {processing && (
          <Button size="sm" variant="outline" disabled className="gap-1.5">
            <Loader2 className="size-3.5 animate-spin" />
            Parsing...
          </Button>
        )}
      </div>
    </div>
  )
}
