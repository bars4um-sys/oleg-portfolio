import { cn } from '@/lib/utils'

export function Stamp({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex -rotate-3 items-center gap-1.5 rounded-sm border-2 border-redline px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-redline',
        className,
      )}
    >
      {children}
    </span>
  )
}
