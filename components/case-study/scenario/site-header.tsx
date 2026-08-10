import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
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
          href="/"
          className="flex items-baseline gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
        >
          <span className="text-redline">СЦ. 01</span>
          <span className="hidden sm:inline">Кейс-стади · Портфолио</span>
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

        <a
          href="https://course.kinomagica.ru"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: 'sm', className: 'rounded-sm' })}
        >
          Смотреть сайт
          <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          <span className="sr-only">(открывается в новой вкладке)</span>
        </a>
      </div>
    </header>
  )
}
