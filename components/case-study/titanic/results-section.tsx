import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const METRICS = [
  { value: '×2.8', label: 'Конверсия в заявку', hint: 'от посетителя первого экрана до нажатия CTA' },
  { value: '−46%', label: 'Отказы на первом экране', hint: 'герой стал понятен без чтения абзацев' },
  { value: '+64%', label: 'Среднее время на странице', hint: 'посетители досматривают лендинг до тарифов' },
  { value: '+92%', label: 'Выручка запуска', hint: 'при том же объёме трафика и рекламного бюджета' },
]

export function ResultsSection() {
  return (
    <section className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="05">Результат</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Дизайн, который читают до конца и покупают
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            По итогам запуска обновлённой версии на том же трафике и той же
            цене курса.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 70} className="bg-card p-6 sm:p-8">
              <p className="font-serif text-4xl tracking-tight text-accent sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-3 text-sm font-semibold leading-snug">{metric.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{metric.hint}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
