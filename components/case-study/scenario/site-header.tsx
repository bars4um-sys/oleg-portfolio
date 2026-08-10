import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

const links = [
  { href: '#brief', label: 'Вводные' },
  { href: '#process', label: 'Процесс' },
  { href: '#program', label: 'Программа' },
  { href: '#result', label: 'Результат' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/#cases"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-redline"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">Все проекты</span>
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-redline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/#contact"
          className={buttonVariants({ size: 'sm', className: 'rounded-sm' })}
        >
          Обсудить проект
        </Link>
      </div>
    </header>
  )
}
