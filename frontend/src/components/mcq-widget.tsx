import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Check, CircleAlert, HelpCircle, Lightbulb, Loader2, MessageSquareText, Send, X } from 'lucide-react'
import { cn } from '#lib/utils'
import { Badge } from '#components/ui/badge'
import { Button } from '#components/ui/button'
import { Card, CardContent } from '#components/ui/card'
import { RadioGroup, RadioGroupItem } from '#components/ui/radio-group'
import { Textarea } from '#components/ui/textarea'
import { checkAnswer, getExplanation, getHint, learnMore } from '#lib/api'
import type { ChatMessage, QuizDTO } from '#lib/types'

interface Props {
  quiz: QuizDTO
  objectiveNumber: number
  totalObjectives: number
  questionNumber: number
  totalQuestionsInObjective: number
  onCorrect: (learnerIndex: number) => void
  onIncorrect: (learnerIndex: number) => void
  onSkip: () => void
  onNext: () => void
  isLast: boolean
}

type Status = 'idle' | 'submitted' | 'correct' | 'incorrect'

export function MCQWidget({
  quiz,
  objectiveNumber,
  totalObjectives,
  questionNumber,
  totalQuestionsInObjective,
  onCorrect,
  onIncorrect,
  onSkip,
  onNext,
  isLast
}: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [submitting, setSubmitting] = useState(false)
  const [hint, setHint] = useState<string | null>(null)
  const [hintLoading, setHintLoading] = useState(false)
  const [explanation, setExplanation] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [explanationLoading, setExplanationLoading] = useState(false)
  const [tries, setTries] = useState(0)
  const [chatOpen, setChatOpen] = useState(false)

  // Reset state when quiz changes (new objective)
  useEffect(() => {
    setSelected(null)
    setStatus('idle')
    setHint(null)
    setExplanation(null)
    setShowExplanation(false)
    setTries(0)
    setChatOpen(false)
  }, [quiz.id])

  const submit = async () => {
    if (selected === null || submitting) return
    setHint(null)
    setSubmitting(true)
    try {
      const res = await checkAnswer(quiz.id, selected)
      if (res.correct) {
        setStatus('correct')
        onCorrect(selected)
      } else {
        setStatus('incorrect')
        onIncorrect(selected)
        setTries((t) => t + 1)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const retry = () => {
    setStatus('idle')
    setSelected(null)
    setHint(null)
  }

  const requestHint = async () => {
    setHintLoading(true)
    try {
      const res = await getHint(quiz.id, status === 'incorrect' ? selected : null)
      setHint(res.hint)
    } finally {
      setHintLoading(false)
    }
  }

  const locked = status === 'correct'

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="border-b border-border bg-accent/40 px-5 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Path {objectiveNumber} of {totalObjectives} · Question {questionNumber} of {totalQuestionsInObjective}
              </p>
              <p className="mt-0.5 truncate text-sm font-semibold">{quiz.objectiveText}</p>
            </div>
            {tries > 0 && status !== 'correct' && (
              <Badge variant="destructive">
                {tries} {tries === 1 ? 'miss' : 'misses'}
              </Badge>
            )}
            {status === 'correct' && (
              <Badge variant="default">
                <Check className="size-3" />
                Correct
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <p className="text-base font-medium leading-relaxed">{quiz.question}</p>

          <RadioGroup
            value={selected !== null ? String(selected) : undefined}
            onValueChange={(v) => {
              if (locked) return
              const next = Number(v)
              setSelected(next)
              if (status === 'incorrect') {
                setStatus('idle')
                setHint(null)
              }
            }}
            className="gap-2.5"
          >
            {quiz.options.map((opt, i) => {
              const isSelected = selected === i
              const showAsCorrect = locked && isSelected
              const showAsWrong = status === 'incorrect' && isSelected
              return (
                <label
                  key={i}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border p-3.5 text-sm transition-all',
                    locked ? 'cursor-default' : 'cursor-pointer',
                    !locked && 'hover:border-primary/50 hover:bg-accent/50',
                    isSelected && !locked ? 'border-primary bg-primary/5' : 'border-border bg-card',
                    showAsCorrect && 'border-success/60 bg-success/10 text-success',
                    showAsWrong && 'border-danger/60 bg-danger/10 text-danger'
                  )}
                >
                  <RadioGroupItem
                    value={String(i)}
                    disabled={locked}
                    className={cn(
                      showAsCorrect &&
                        'border-success text-success data-[checked]:bg-success data-[checked]:border-success',
                      showAsWrong && 'border-danger text-danger data-[checked]:bg-danger data-[checked]:border-danger'
                    )}
                  />
                  <span className="flex-1 leading-relaxed">{opt}</span>
                  {showAsCorrect && <Check className="size-4 shrink-0" />}
                  {showAsWrong && <X className="size-4 shrink-0" />}
                </label>
              )
            })}
          </RadioGroup>

          {status === 'incorrect' && (
            <div className="flex items-start gap-2.5 rounded-xl border border-danger/40 bg-danger/10 p-3.5 text-sm">
              <CircleAlert className="size-4 shrink-0 translate-y-0.5 text-danger" />
              <div>
                <p className="font-medium text-danger">Not quite.</p>
                <p className="mt-0.5 text-muted-foreground">
                  Try again — you can request a hint or ask for a deeper explanation. No penalty for retries.
                </p>
              </div>
            </div>
          )}

          {hint && (
            <div className="flex items-start gap-2.5 rounded-xl border border-primary/30 bg-primary/5 p-3.5 text-sm">
              <Lightbulb className="size-4 shrink-0 translate-y-0.5 text-primary" />
              <div>
                <p className="font-medium text-primary">Hint</p>
                <p className="mt-0.5 text-foreground">{hint}</p>
              </div>
            </div>
          )}

          {status === 'correct' && showExplanation && explanation && (
            <div className="flex items-start gap-2.5 rounded-xl border border-success/40 bg-success/10 p-3.5 text-sm">
              <Check className="size-4 shrink-0 translate-y-0.5 text-success" />
              <div>
                <p className="font-medium text-success">Explanation</p>
                <p className="mt-0.5 text-foreground">{explanation}</p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {!locked && (
              <>
                <Button onClick={submit} disabled={selected === null || submitting} className="gap-1.5">
                  {submitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
                  {status === 'incorrect' ? 'Re-submit' : 'Submit answer'}
                </Button>
                <Button variant="outline" onClick={requestHint} disabled={hintLoading} className="gap-1.5">
                  {hintLoading ? <Loader2 className="size-4 animate-spin" /> : <HelpCircle className="size-4" />}
                  {hint ? 'New hint' : 'Get a hint'}
                </Button>
                <Button variant="ghost" onClick={() => setChatOpen(true)} className="gap-1.5">
                  <MessageSquareText className="size-4" />
                  AI Help
                </Button>
                {status === 'incorrect' && (
                  <Button variant="ghost" onClick={retry} className="ml-auto">
                    Reset selection
                  </Button>
                )}
                {status === 'incorrect' && tries >= 1 && (
                  <Button variant="ghost" onClick={onSkip} className="text-muted-foreground">
                    Skip →
                  </Button>
                )}
              </>
            )}
            {locked && (
              <>
                <Button
                  variant="outline"
                  onClick={async () => {
                    if (showExplanation) return
                    setExplanationLoading(true)
                    try {
                      const res = await getExplanation(quiz.id)
                      setExplanation(res.explanation)
                      setShowExplanation(true)
                    } finally {
                      setExplanationLoading(false)
                    }
                  }}
                  disabled={explanationLoading || showExplanation}
                  className="gap-1.5"
                >
                  {explanationLoading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    'Show explanation'
                  )}
                </Button>
                <Button onClick={onNext} className="ml-auto gap-1.5">
                  {isLast ? 'Finish & see results' : 'Next'}
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>

      {chatOpen && <LearnMorePanel quiz={quiz} onClose={() => setChatOpen(false)} />}
    </Card>
  )
}

interface LearnMoreProps {
  quiz: QuizDTO
  onClose: () => void
}

function LearnMorePanel({ quiz, onClose }: LearnMoreProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'I can dig deeper into the topic behind this question — without revealing the answer. Ask me anything about the concepts.'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    const q = input.trim()
    if (!q || loading) return
    const nextHistory: ChatMessage[] = [...messages, { role: 'user', content: q }]
    setMessages(nextHistory)
    setInput('')
    setLoading(true)
    try {
      const res = await learnMore(
        quiz.id,
        q,
        nextHistory.filter((m) => m.role !== 'assistant' || m.content !== messages[0]?.content)
      )
      setMessages((cur) => [...cur, { role: 'assistant', content: res.message }])
    } catch (err) {
      setMessages((cur) => [
        ...cur,
        {
          role: 'assistant',
          content: `Sorry, I couldn't fetch an answer right now: ${(err as Error).message}`
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end sm:items-center sm:justify-end">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative flex h-[70vh] w-full max-w-md flex-col rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl">
        <div className="flex items-center justify-between border-b border-border bg-accent/40 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MessageSquareText className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">Ask the tutor</p>
              <p className="text-xs text-muted-foreground">Answers stay grounded in your PDF</p>
            </div>
          </div>
          <Button variant="ghost" size="icon-sm" onClick={onClose}>
            <X className="size-4" />
          </Button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div key={i} className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}>
              <div
                className={cn(
                  'max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed',
                  m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                )}
              >
                {m.role === 'user' ? (
                  <span className="whitespace-pre-wrap">{m.content}</span>
                ) : (
                  <Markdown>{m.content}</Markdown>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="size-3 animate-spin" />
              Thinking...
            </div>
          )}
        </div>
        <div className="border-t border-border p-3">
          <div className="flex items-end gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the concept..."
              className="min-h-[44px] flex-1 resize-none"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  void send()
                }
              }}
            />
            <Button onClick={send} disabled={loading || !input.trim()} size="icon">
              <Send className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
