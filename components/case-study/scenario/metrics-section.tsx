import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/case-study/scenario/section-label'
import { Reveal } from '@/components/case-study/scenario/reveal'

const metrics = [
  { value: '1', label: 'исходный документ на входе' },
  { value: '6', label: 'смысловых экранов на сайте' },
  { value: '2', label: 'адаптации: десктоп и мобильная версия' },
]

export function MetricsSection() {
  return (
    <section className="border-b border-paper-line bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel scene="СЦ. 06" label="Итог по цифрам" />
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 80}>
              <p className="font-serif text-4xl text-redline">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {metric.label}
              </p>
            </Reveal>
          ))}

          <Reveal delay={3 * 80}>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <p className="font-serif text-4xl text-redline">15</p>
              <ArrowRight
                className="mx-auto size-5 text-ink-soft"
                aria-hidden="true"
              />
              <p className="text-right font-serif text-4xl text-redline">5</p>
            </div>
            <div className="mt-2 grid grid-cols-[auto_1fr_auto] items-start gap-3">
              <p className="text-sm leading-relaxed text-ink-soft">
                занятий
              </p>
              <span aria-hidden="true" />
              <p className="text-right text-sm leading-relaxed text-ink-soft">
                тематических
                <br />
                блока
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
