import type { Difficulty } from './types'

export function difficultyLabel(d: Difficulty): string {
  return d.charAt(0).toUpperCase() + d.slice(1)
}

export function difficultyColor(d: Difficulty): string {
  switch (d) {
    case 'beginner':
      return 'bg-success/15 text-success'
    case 'intermediate':
      return 'bg-primary/15 text-primary'
    case 'advanced':
      return 'bg-danger/15 text-danger'
  }
}

export function formatDate(iso: string): string {
  try {
    const d = new Date(iso.replace(' ', 'T') + 'Z')
    if (Number.isNaN(d.getTime())) return iso
    return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
  } catch {
    return iso
  }
}

export function pluralize(n: number, singular: string, plural?: string): string {
  if (n === 1) return `${n} ${singular}`
  return `${n} ${plural ?? singular + 's'}`
}
