import { useCallback, useRef, useState } from 'react'
import { UploadCloud, FileText, Loader2 } from 'lucide-react'
import { cn } from '#lib/utils'
import { uploadPdf } from '#lib/api'

interface Props {
  onUploaded: (documentId: number) => void
}

export function UploadDropzone({ onUploaded }: Props) {
  const [dragging, setDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        setError('Only PDF files are supported.')
        return
      }
      setUploading(true)
      setError(null)
      try {
        const doc = await uploadPdf(file)
        onUploaded(doc.id)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setUploading(false)
      }
    },
    [onUploaded]
  )

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragging(false)
        const file = e.dataTransfer.files?.[0]
        if (file) void handleFile(file)
      }}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
      }}
      className={cn(
        'group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-card p-10 text-center transition-all hover:border-primary/60 hover:bg-accent/40',
        dragging ? 'border-primary bg-accent/60' : 'border-border'
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) void handleFile(file)
          e.target.value = ''
        }}
      />
      <div
        className={cn(
          'mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-105',
          dragging && 'scale-110'
        )}
      >
        {uploading ? <Loader2 className="size-6 animate-spin" /> : <UploadCloud className="size-6" />}
      </div>
      <p className="text-base font-medium">{uploading ? 'Uploading & parsing PDF...' : 'Drop your PDF here'}</p>
      <p className="mt-1 text-sm text-muted-foreground">
        or click to browse. We'll convert it to text and draft a lesson plan.
      </p>
      {error && (
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-danger/10 px-3 py-1 text-xs font-medium text-danger">
          <FileText className="size-3.5" />
          {error}
        </p>
      )}
    </div>
  )
}
