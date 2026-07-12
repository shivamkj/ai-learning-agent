import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookOpenCheck, FileText, Loader2, AlertTriangle, ChevronRight, Plus } from 'lucide-react'
import { cn } from '#lib/utils'
import { Button } from '#components/ui/button'
import { listDocuments, createPlan } from '#lib/api'
import type { DocumentSummary } from '#lib/types'
import { difficultyLabel, formatDate } from '#lib/helpers'

export function Sidebar() {
  const [docs, setDocs] = useState<DocumentSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [planning, setPlanning] = useState<number | null>(null)
  const navigate = useNavigate()

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const data = await listDocuments()
      setDocs(data)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  useEffect(() => {
    const anyProcessing = docs.some((d) => d.status === 'processing')
    if (anyProcessing) {
      const t = setTimeout(() => void refresh(), 3000)
      return () => clearTimeout(t)
    }
  }, [docs, refresh])

  const handleStartLearning = useCallback(
    async (documentId: number) => {
      setPlanning(documentId)
      try {
        const plan = await createPlan(documentId)
        navigate(`/learn/${plan.id}`)
      } catch (err) {
        console.error('Failed to create plan:', err)
      } finally {
        setPlanning(null)
      }
    },
    [navigate]
  )

  return (
    <aside className="flex h-full w-72 flex-col border-r border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <BookOpenCheck className="size-4 text-primary" />
          <span className="text-sm font-semibold">Library</span>
        </div>
        {docs.length > 0 && (
          <span className="text-xs text-muted-foreground">
            {docs.length} doc{docs.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="space-y-3 p-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-16 rounded-xl border border-border bg-muted/50 animate-pulse" />
            ))}
          </div>
        ) : docs.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <FileText className="size-8 text-muted-foreground/50" />
            <p className="mt-2 text-sm text-muted-foreground">No documents yet.</p>
            <p className="text-xs text-muted-foreground">Upload a PDF to get started.</p>
          </div>
        ) : (
          <div className="space-y-1 p-2">
            {docs.map((doc) => {
              const ready = doc.status === 'ready'
              const processing = doc.status === 'processing'
              const failed = doc.status === 'failed'
              const title = doc.title || doc.filename.replace(/\.pdf$/i, '')

              return (
                <button
                  key={doc.id}
                  onClick={() => {
                    if (doc.plan) {
                      navigate(`/learn/${doc.plan.id}`)
                    } else if (ready) {
                      void handleStartLearning(doc.id)
                    }
                  }}
                  disabled={processing || failed}
                  className={cn(
                    'group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                    ready ? 'hover:bg-accent/60 cursor-pointer' : 'cursor-default opacity-70'
                  )}
                >
                  <div
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-lg',
                      ready
                        ? 'bg-primary/10 text-primary'
                        : processing
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-danger/10 text-danger'
                    )}
                  >
                    {processing ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : failed ? (
                      <AlertTriangle className="size-4" />
                    ) : (
                      <FileText className="size-4" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium" title={title}>
                      {title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{formatDate(doc.created_at)}</span>
                      {doc.plan && (
                        <span className="rounded bg-accent/60 px-1.5 py-0.5 text-[10px]">
                          {difficultyLabel(doc.plan.difficulty)}
                        </span>
                      )}
                    </div>
                  </div>
                  {ready && doc.plan && (
                    <ChevronRight className="size-4 text-muted-foreground/50 group-hover:text-foreground" />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div className="border-t border-border p-4">
        <Link to="/">
          <Button variant="outline" size="sm" className="w-full gap-1.5">
            <Plus className="size-3.5" />
            Upload new
          </Button>
        </Link>
      </div>

      {planning !== null && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-xl">
            <Loader2 className="size-5 animate-spin text-primary" />
            <div>
              <p className="text-sm font-medium">Creating lesson plan...</p>
              <p className="text-xs text-muted-foreground">Analyzing the PDF content.</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
