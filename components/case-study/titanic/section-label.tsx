import { cn } from '@/lib/utils'

export function SectionLabel({
  index,
  children,
  tone = 'default',
  className,
}: {
  index: string
  children: React.ReactNode
  tone?: 'default' | 'navy' | 'accent'
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span
        className={cn(
          'font-mono text-xs tabular-nums tracking-[0.15em]',
          tone === 'navy' && 'text-navy',
          tone === 'accent' && 'text-accent',
          tone === 'default' && 'text-muted-foreground',
        )}
      >
        {index}
      </span>
      <span className="h-px flex-1 max-w-10 bg-border" />
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {children}
      </span>
    </div>
  )
}
