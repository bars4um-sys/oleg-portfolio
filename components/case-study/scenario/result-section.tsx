import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/case-study/scenario/section-label'
import { Reveal } from '@/components/case-study/scenario/reveal'
import { ScriptFrame } from '@/components/case-study/scenario/script-frame'
import { buttonVariants } from '@/components/ui/button'

export function ResultSection() {
  return (
    <section id="result" className="border-b border-paper-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel scene="СЦ. 06" label="Результат" />
              <h2 className="mt-4 max-w-xl text-balance font-serif text-3xl leading-tight text-ink md:text-4xl">
                Готовый сайт на собственном домене
              </h2>
            </div>
            <a
              href="https://course.kinomagica.ru"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: 'outline',
                className: 'rounded-sm',
              })}
            >
              course.kinomagica.ru
              <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              <span className="sr-only">(открывается в новой вкладке)</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal>
            <ScriptFrame
              src="/images/adapted-script-results.png"
              alt="Дополнительный смысловой блок сайта course.kinomagica.ru"
              caption="Развёрнутый блок с методикой курса — язык, понятный будущему слушателю, а не методисту."
              sceneNumber="ЭКРАН · О КУРСЕ"
            />
          </Reveal>
          <Reveal delay={100}>
            <ScriptFrame
              src="/images/adapted-script-pricing.png"
              alt="Блок стоимости и записи на курс на сайте course.kinomagica.ru"
              caption="Стоимость и запись — короткий путь от программы курса к решению записаться."
              sceneNumber="ЭКРАН · СТОИМОСТЬ"
            />
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-10">
          <div className="grid gap-8 border border-paper-line bg-card p-6 md:grid-cols-[220px_1fr] md:items-center md:p-8">
            <ScriptFrame
              src="/images/adapted-script-mobile.png"
              alt="Мобильная версия сайта course.kinomagica.ru"
              sceneNumber="МОБИЛЬНАЯ"
              aspect="390/844"
              className="mx-auto w-40 md:w-full"
            />
            <div>
              <p className="font-serif text-xl text-ink">
                Адаптивная вёрстка «из коробки»
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Тот же путь «документ → структура → сайт» проверен и на
                мобильных экранах: программа курса, автор, стоимость и запись
                читаются без горизонтального скролла и лишних жестов.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
