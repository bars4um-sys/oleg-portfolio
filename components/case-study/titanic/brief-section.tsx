import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const BLOCKS = [
  {
    n: '01',
    title: 'Первый экран',
    goal: 'Сразу раскрыть идею курса и задать его атмосферу',
    before: 'Компактный информационный анонс с постером, описанием, датами и CTA',
    after: 'Атмосферный образ лайнера, крупный заголовок, две точки входа и ключевые параметры курса',
  },
  {
    n: '02',
    title: 'Как будет проходить тренинг',
    goal: 'Показать процесс обучения наглядно',
    before: 'Текстовые абзацы без структуры и визуальной опоры',
    after: 'Пошаговый таймлайн этапов обучения и чек-лист материалов',
  },
  {
    n: '03',
    title: 'Программа и этапы обучения',
    goal: 'Сделать путь ученика понятным',
    before: 'Плоский текст о содержании курса',
    after: 'Таймлайн с иконками и описанием каждого этапа',
  },
  {
    n: '04',
    title: 'Об авторе курса',
    goal: 'Представить ведущую как эксперта',
    before: 'Фотография, встроенная в общий поток страницы',
    after: 'Самостоятельный раздел с портретом, цитатой и ключевыми фактами',
  },
  {
    n: '05',
    title: 'Программа погружения',
    goal: 'Вовлечь в содержание курса через эпизоды',
    before: 'Сплошной текст об истории фильма',
    after: 'Карточки эпизодов с визуальным образом, описанием и CTA',
  },
  {
    n: '06',
    title: 'Тарифы и условия участия',
    goal: 'Дать быстрое сравнение вариантов',
    before: 'Три таблицы с условиями без визуальной иерархии',
    after: 'Три сопоставимые карточки, рекомендуемый вариант выделен цветом',
  },
  {
    n: '07',
    title: 'Диалог с героем фильма',
    goal: 'Поддержать игровую механику и атмосферу курса',
    before: 'Блока с диалогом не было',
    after: 'Концепт диалога с героем фильма, поддерживающий игровую механику курса',
  },
  {
    n: '08',
    title: 'FAQ и подвал',
    goal: 'Снять оставшиеся вопросы',
    before: 'Раздела с частыми вопросами не было',
    after: 'Раскрывающийся список ответов и компактный футер с контактами',
  },
]

export function BriefSection() {
  return (
    <section id="brief" className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <SectionLabel index="02">Проектное решение</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Как я пересобрал структуру страницы
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              Анализ исходной страницы показал, как можно усилить не только визуальную подачу, но и последовательность знакомства с курсом. Я пересобрал структуру вокруг сценария «зацепить → объяснить → вовлечь», ввёл глубокую сине-золотую палитру и соединил функциональный гротеск с выразительной акцентной антиквой.
            </p>
          </Reveal>

          <div className="flex flex-col divide-y divide-border border-t border-border">
            {BLOCKS.map((block, i) => (
              <Reveal key={block.n} delay={i * 40}>
                <details className="group py-6" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-xs tabular-nums text-accent">
                        {block.n}
                      </span>
                      <span className="font-serif text-xl leading-snug sm:text-2xl">
                        {block.title}
                      </span>
                    </div>
                    <ChevronDown
                      className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>

                  <div className="mt-5 grid gap-5 pl-0 sm:grid-cols-[1fr_1fr] sm:pl-[3.1rem]">
                    <p className="text-sm font-medium uppercase tracking-[0.08em] text-muted-foreground sm:col-span-2">
                      Цель: <span className="font-normal text-foreground">{block.goal}</span>
                    </p>
                    <div className="rounded-sm border border-border bg-secondary/40 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                        Было
                      </p>
                      <p className="mt-2 text-sm leading-relaxed">{block.before}</p>
                    </div>
                    <div className="rounded-sm border border-accent/30 bg-accent/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        Стало по ТЗ
                      </p>
                      <p className="mt-2 text-sm leading-relaxed">{block.after}</p>
                    </div>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
