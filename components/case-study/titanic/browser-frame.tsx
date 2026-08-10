import Image from 'next/image'
import { cn } from '@/lib/utils'

export function BrowserFrame({
  src,
  alt,
  tone = 'default',
  chromeLabel,
  height = 640,
}: {
  src: string
  alt: string
  tone?: 'default' | 'dark'
  chromeLabel: string
  height?: number
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-md border shadow-[0_1px_0_rgba(0,0,0,0.02)]',
        tone === 'dark' ? 'border-navy/30 bg-navy' : 'border-border bg-card',
      )}
    >
      <div
        className={cn(
          'flex items-center gap-2 border-b px-4 py-2.5',
          tone === 'dark' ? 'border-navy/30' : 'border-border',
        )}
      >
        <span className="flex gap-1.5">
          <span
            className={cn(
              'size-2 rounded-full',
              tone === 'dark' ? 'bg-navy-foreground/25' : 'bg-muted-foreground/25',
            )}
          />
          <span
            className={cn(
              'size-2 rounded-full',
              tone === 'dark' ? 'bg-navy-foreground/25' : 'bg-muted-foreground/25',
            )}
          />
          <span
            className={cn(
              'size-2 rounded-full',
              tone === 'dark' ? 'bg-navy-foreground/25' : 'bg-muted-foreground/25',
            )}
          />
        </span>
        <span
          className={cn(
            'ml-2 truncate text-xs font-medium',
            tone === 'dark' ? 'text-navy-foreground/60' : 'text-muted-foreground',
          )}
        >
          {chromeLabel}
        </span>
      </div>
      <div className="relative overflow-y-auto" style={{ height }}>
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          width={1000}
          height={4000}
          className="block h-auto w-full"
          sizes="(min-width: 1024px) 640px, 100vw"
        />
      </div>
    </div>
  )
}
