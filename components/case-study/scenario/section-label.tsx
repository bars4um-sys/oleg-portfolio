import { cn } from '@/lib/utils'

export function SectionLabel({
  scene,
  label,
  className,
}: {
  scene: string
  label: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-redline',
        className,
      )}
    >
      <span className="rounded-[3px] border border-redline/40 px-1.5 py-0.5">
        {scene}
      </span>
      <span className="text-ink-soft">{label}</span>
    </div>
  )
}
