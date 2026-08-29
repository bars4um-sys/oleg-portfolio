import { Check } from 'lucide-react'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const RESULTS = [
  'Разработана новая визуальная система',
  'Пересобрана структура страницы',
  'Переработана иерархия первого экрана',
  'Этапы обучения представлены в виде таймлайна',
  'Программа и тарифы собраны в сопоставимые карточки',
  'Подготовлен адаптивный прототип для обсуждения с автором курса',
]

export function ResultsSection() {
  return (
    <section className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="05">Результат концепции</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Готовое направление для возможного редизайна
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            В рамках инициативной работы я пересобрал структуру, разработал визуальную систему и подготовил адаптивную версию страницы. Концепция показывает, как можно сохранить подробное содержание курса, но представить его через более атмосферную композицию, выраженную типографическую иерархию и быстро считываемые форматы.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
            Проект не запускался на реальном трафике, поэтому показатели конверсии и продаж не приводятся.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {RESULTS.map((item, i) => (
            <Reveal key={item} delay={i * 70}>
              <div className="flex items-start gap-3 rounded-sm border border-border bg-card p-5">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
