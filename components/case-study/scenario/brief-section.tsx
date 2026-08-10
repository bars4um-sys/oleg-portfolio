import { SectionLabel } from '@/components/case-study/scenario/section-label'
import { Reveal } from '@/components/case-study/scenario/reveal'

const facts = [
  {
    label: 'Формат',
    value: '15 занятий по 2,5–3 часа',
  },
  {
    label: 'Автор курса',
    value: 'Екатерина Москвина, к.филол.н., режиссёр',
  },
  {
    label: 'Тема',
    value: 'Перевод литературного текста в киносценарий',
  },
  {
    label: 'Что было на входе',
    value: 'Один .docx-файл с программой. Без брифа, без сайта-предшественника',
  },
]

export function BriefSection() {
  return (
    <section id="brief" className="border-b border-paper-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <SectionLabel scene="СЦ. 02" label="Вводные данные" />
          <h2 className="mt-4 max-w-xl text-balance font-serif text-3xl leading-tight text-ink md:text-4xl">
            На входе — только программа курса
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-soft">
            Клиент прислал документ «Программа курса Адаптированный сценарий» —
            методический план из аннотации и 15 занятий с разбором
            литературных текстов и экранизаций. Это единственный
            материал, из которого нужно было собрать структуру и текст
            будущего лендинга.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 80}>
              <div className="perforated h-full border border-paper-line bg-card p-5 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-redline">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {fact.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
