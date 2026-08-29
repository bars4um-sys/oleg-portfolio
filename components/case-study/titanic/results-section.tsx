import { Check } from 'lucide-react'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const RESULTS = [
  'Разработана новая визуальная система',
  'Переработана иерархия первого экрана',
  'Программа представлена в более наглядном формате',
  'Тарифы собраны в сопоставимые карточки',
  'Подготовлена адаптивная вёрстка',
  'Создан прототип для обсуждения с автором проекта',
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
            В рамках инициативной работы я разработал структуру, визуальную систему и адаптивную вёрстку страницы. Концепция показывает, как можно связать образовательный продукт с атмосферой фильма, упростить восприятие программы и сделать ключевые действия заметнее.
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
