import Link from 'next/link'
import { Reveal } from '@/components/case-study/titanic/reveal'

export function CtaFooter() {
  return (
    <footer id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-border pb-16 sm:flex-row sm:items-end">
            <h2 className="max-w-lg font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Ваш лендинг заслуживает того же внимания к деталям
            </h2>
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center rounded-sm bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Обсудить проект
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-foreground">О статусе проекта</p>
            <p className="mt-1.5 max-w-3xl leading-relaxed">
              Это инициативная концепция, подготовленная как предложение автору образовательного проекта. Работа не является опубликованной версией сайта и не подтверждает коммерческое сотрудничество. Представленные решения не тестировались на реальном трафике; показатели конверсии и продаж не заявляются. Концепция представлена в портфолио как пример предложенного направления редизайна.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
