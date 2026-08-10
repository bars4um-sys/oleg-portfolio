import Image from 'next/image'
import { cn } from '@/lib/utils'

export function ScriptFrame({
  src,
  alt,
  caption,
  sceneNumber,
  className,
  priority,
  aspect = '16/10',
}: {
  src: string
  alt: string
  caption?: string
  sceneNumber?: string
  className?: string
  priority?: boolean
  aspect?: string
}) {
  return (
    <figure className={cn('group', className)}>
      <div className="relative rounded-md border border-paper-line bg-card p-2 shadow-[0_1px_0_var(--paper-line),0_10px_24px_-16px_rgba(23,20,15,0.35)]">
        {sceneNumber && (
          <span className="absolute -top-3 left-4 rounded-sm border border-redline/50 bg-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-redline">
            {sceneNumber}
          </span>
        )}
        <div
          className="relative overflow-hidden rounded-sm border border-paper-line"
          style={{ aspectRatio: aspect }}
        >
          <Image
            src={src || '/placeholder.svg'}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs leading-relaxed text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
