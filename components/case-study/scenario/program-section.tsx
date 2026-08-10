import { SectionLabel } from '@/components/case-study/scenario/section-label'
import { Reveal } from '@/components/case-study/scenario/reveal'
import { ScriptFrame } from '@/components/case-study/scenario/script-frame'

const blocks = [
  {
    range: '01–02',
    title: 'Методы литературного анализа',
    description:
      'Переводима ли форма, или как искать эквиваленты для киноадаптации.',
  },
  {
    range: '03–06',
    title: 'Жанр и нарратив в кинотексте',
    description:
      'Особенности перевода эпических нарративов малой формы, повествование от первого и третьего лица, средства литературного нарратива.',
  },
  {
    range: '07–09',
    title: 'Разбор экранизаций и синопсисов',
    description:
      '«Собачье сердце» Булгакова и Бортко как эталон удачной адаптации; практический разбор синопсисов слушателей.',
  },
  {
    range: '10–13',
    title: 'Драматургия жанров',
    description:
      'Комедия и стихотворная трагедия, жанр драмы, романная форма и принципы её сокращения для сценария.',
  },
  {
    range: '14–15',
    title: 'Разбор поэпизодников',
    description:
      'Итоговая практика: разбор поэпизодников (ПЭП), написанных слушателями по выбранному произведению.',
  },
]

export function ProgramSection() {
  return (
    <section id="program" className="border-b border-paper-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <Reveal>
              <SectionLabel scene="СЦ. 04" label="Программа на сайте" />
              <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-ink md:text-4xl">
                15 занятий превратились в 5 смысловых блоков
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                В документе занятия шли сплошным пронумерованным списком. Для
                сайта мы сгруппировали их по смысловым темам — так посетителю
                за 10 секунд понятно, чему учит курс, без чтения всей
                методической программы.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {blocks.map((block, i) => (
                <Reveal key={block.range} delay={i * 70}>
                  <div className="flex gap-4 border-l-2 border-redline/40 py-1 pl-4">
                    <span className="w-12 shrink-0 font-mono text-xs uppercase tracking-[0.1em] tabular-nums text-redline">
                      {block.range}
                    </span>
                    <div>
                      <p className="font-serif text-base text-ink">
                        {block.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {block.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120} className="md:mt-16">
            <ScriptFrame
              src="/images/adapted-script-program.png"
              alt="Блок «Программа курса» на сайте course.kinomagica.ru"
              caption="Блок программы на готовом сайте — тематические занятия вместо сплошного списка."
              sceneNumber="ЭКРАН · ПРОГРАММА"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
