import { ArrowRight } from 'lucide-react'
import { BrowserFrame } from '@/components/case-study/titanic/browser-frame'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const TRANSFORMATIONS = [
  { from: 'Коричнево-бежевая гамма без иерархии', to: 'Тёмно-синий фон + золотой акцент' },
  { from: 'Системный шрифт, сплошной текст', to: 'Fraunces + Inter, иерархия размеров' },
  { from: 'Кнопка «Присоединиться» без акцента', to: 'Контрастная золотая CTA с таймером старта' },
  { from: 'Текстовые абзацы о программе', to: 'Таймлайн из глав фильма с иконками' },
  { from: 'Однородные таблицы тарифов', to: 'Три карточки, «Хит продаж» выделен' },
]

export function ComparisonSection() {
  return (
    <section className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="04">Сравнение</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Один и тот же контент, две разные страницы
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal delay={60}>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                До
              </span>
              <BrowserFrame
                src="/images/titanic-english-before.webp"
                alt="Первый экран старой версии лендинга"
                chromeLabel="Старая версия"
                height={420}
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                После
              </span>
              <BrowserFrame
                src="/images/titanic-english-after.webp"
                alt="Первый экран новой версии лендинга"
                tone="dark"
                chromeLabel="Новая версия"
                height={420}
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-16 flex flex-col divide-y divide-border border-t border-border">
            {TRANSFORMATIONS.map((row) => (
              <div
                key={row.from}
                className="grid grid-cols-1 items-center gap-3 py-5 sm:grid-cols-[1fr_auto_1fr]"
              >
                <span className="text-sm leading-relaxed text-muted-foreground">{row.from}</span>
                <ArrowRight
                  className="hidden size-4 shrink-0 justify-self-center text-accent sm:block"
                  aria-hidden="true"
                />
                <span className="font-serif text-base leading-relaxed sm:text-right">
                  {row.to}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
