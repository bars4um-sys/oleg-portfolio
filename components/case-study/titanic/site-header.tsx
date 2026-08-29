import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Все проекты</span>
        </Link>
        <span className="font-serif text-sm italic tracking-wide text-muted-foreground">
          Инициативный концепт
        </span>
        <Link
          href="/#contact"
          className="rounded-sm border border-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Обсудить проект
        </Link>
      </div>
    </header>
  )
}
