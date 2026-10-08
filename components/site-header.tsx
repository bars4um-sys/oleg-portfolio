import { Button } from "@/components/ui/button"
import { BrandLockup } from "@/components/brand/lockup"
import { MobileNav } from "@/components/mobile-nav"

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
        <a href="#top" className="flex items-center gap-4" aria-label="Чумаченко Олег — на главную">
          <BrandLockup variant="vertical" height={28} className="text-foreground" />
          <span className="hidden flex-col leading-tight sm:flex md:hidden lg:flex">
            <span className="text-sm font-semibold tracking-[0.02em] text-foreground">
              Чумаченко Олег
            </span>
            <span className="hidden text-xs tracking-wide text-[#D2C8BA] lg:block">
              Веб-дизайн и упаковка экспертных продуктов
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-[#D2C8BA] transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-accent-hover"
          >
            Обсудить проект
          </Button>
          <MobileNav items={NAV} />
        </div>
      </div>
    </header>
  )
}
