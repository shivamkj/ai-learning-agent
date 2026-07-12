import { useState } from 'react'
import { Lock, Loader2 } from 'lucide-react'
import { Button } from '#components/ui/button'
import { verifyPassword } from '#lib/api'

interface AuthPageProps {
  onAuthenticated: () => void
}

export function AuthPage({ onAuthenticated }: AuthPageProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim()) return
    setLoading(true)
    setError(null)
    try {
      await verifyPassword(password)
      onAuthenticated()
    } catch (err) {
      setError((err as Error).message ?? 'Invalid password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-border bg-card">
            <Lock className="size-5 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Enter Password</h1>
          <p className="text-sm text-muted-foreground">This application is password protected.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="flex h-9 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={loading || !password.trim()} className="w-full">
            {loading ? <Loader2 className="size-4 animate-spin" /> : 'Continue'}
          </Button>
        </form>
      </div>
    </div>
  )
}
