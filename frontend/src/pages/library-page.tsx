import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Loader2 } from 'lucide-react'
import { UploadDropzone } from '#components/upload-dropzone'
import { listDocuments, createPlan } from '#lib/api'

export function LibraryPage() {
  const [planning, setPlanning] = useState<number | null>(null)
  const [planError, setPlanError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleUploaded = useCallback(
    async (documentId: number) => {
      setPlanning(documentId)
      setPlanError(null)
      try {
        let docs = await listDocuments()
        let doc = docs.find((d) => d.id === documentId)
        while (doc && doc.status === 'processing') {
          await new Promise((r) => setTimeout(r, 1000))
          docs = await listDocuments()
          doc = docs.find((d) => d.id === documentId)
        }
        if (!doc || doc.status === 'failed') {
          throw new Error('Document processing failed')
        }
        const plan = await createPlan(documentId)
        navigate(`/learn/${plan.id}`)
      } catch (err) {
        console.error('Failed to create plan after upload:', err)
        setPlanError((err as Error).message ?? 'Failed to create lesson plan')
      } finally {
        setPlanning(null)
      }
    },
    [navigate]
  )

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            Start Learning Now
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Turn any PDF into an interactive lesson.
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Upload a document, review the proposed learning path, then learn by answering quizzes with instant feedback,
            hints, and explanations — grounded in your PDF.
          </p>
          <div className="mt-6">
            <UploadDropzone onUploaded={handleUploaded} />
          </div>
        </div>
      </section>

      {planning !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-xl">
            <Loader2 className="size-5 animate-spin text-primary" />
            <div>
              <p className="text-sm font-medium">Drafting your lesson plan...</p>
              <p className="text-xs text-muted-foreground">Analyzing the PDF content with the agent.</p>
            </div>
          </div>
        </div>
      )}

      {planError && (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-2xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger backdrop-blur-sm">
          <p className="font-medium">Plan creation failed</p>
          <p className="mt-1 text-xs text-danger/80">{planError}</p>
          <button onClick={() => setPlanError(null)} className="mt-2 text-xs underline hover:text-danger">
            Dismiss
          </button>
        </div>
      )}
    </div>
  )
}
