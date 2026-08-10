import { ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/case-study/scenario/reveal'
import { Stamp } from '@/components/case-study/scenario/stamp'

export function CtaFooter() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal className="flex flex-col items-start gap-6 border border-paper-line bg-card p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <Stamp>Финал</Stamp>
            <h2 className="mt-4 max-w-md text-balance font-serif text-3xl leading-tight text-ink md:text-4xl">
              Есть программа курса? Сделаем из неё лендинг.
            </h2>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-ink-soft">
              Так же, как «Адаптированный сценарий», — из одного документа до
              рабочего сайта на своём домене.
            </p>
          </div>

          <a
            href="https://course.kinomagica.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              size: 'lg',
              className: 'rounded-sm px-6 text-sm',
            })}
          >
            Смотреть готовый сайт
            <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
            <span className="sr-only">(открывается в новой вкладке)</span>
          </a>
        </Reveal>
      </div>

      <footer className="border-t border-paper-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>Кейс-стади · Портфолио веб-разработки</p>
          <p>course.kinomagica.ru · «Адаптированный сценарий»</p>
        </div>
      </footer>
    </section>
  )
}
