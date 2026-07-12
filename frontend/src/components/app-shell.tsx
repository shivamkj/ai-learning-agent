import { Link, Outlet } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { Sidebar } from '#components/sidebar'

export function AppShell() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center border-b border-border/70 bg-background/80 backdrop-blur-lg px-6">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              <GraduationCap className="size-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">AI Learning Agent</span>
              <span className="text-[11px] text-muted-foreground">Upload your PDF and study</span>
            </span>
          </Link>
        </header>
        <main className="flex-1 overflow-y-auto px-6 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
