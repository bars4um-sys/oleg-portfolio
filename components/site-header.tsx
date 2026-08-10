import { Button } from "@/components/ui/button"

const NAV = [
  { label: "Кейсы", href: "#cases" },
  { label: "Об авторе", href: "#author" },
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Контакты", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-[0.2em] text-foreground">ОЛЕГ ЧУМАЧЕНКО</span>
          <span className="text-xs tracking-wide text-muted-foreground">Веб-дизайнер &amp; Продуктовый верстальщик</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          render={<a href="#contact" />}
          nativeButton={false}
          className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"
        >
          Обсудить проект
        </Button>
      </div>
    </header>
  )
}
