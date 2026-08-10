import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const BLOCKS = [
  {
    n: '01',
    title: 'Первый экран',
    goal: 'Зацепить внимание за первые 3 секунды',
    before: 'Постер фильма без акцентной CTA',
    after: 'Кинематографичный фон, продающий заголовок, контрастная кнопка и дата старта',
  },
  {
    n: '02',
    title: '«Для кого этот тренинг»',
    goal: 'Показать ценность через боли и решения ученика',
    before: 'Сплошная коричневая плашка сплошного текста',
    after: 'Карточки с иконками: аудирование без субтитров, живая речь, методика синхронистов',
  },
  {
    n: '03',
    title: 'О фильме',
    goal: 'Передать эмоцию, погрузить в атмосферу «Титаника»',
    before: 'Плоский текст об истории фильма без взаимодействия',
    after: 'Атмосферный видеоплеер и цитаты из фильма акцентным шрифтом',
  },
  {
    n: '04',
    title: 'Программа тренинга',
    goal: 'Сделать процесс обучения понятным и простым',
    before: 'Текстовые абзацы без структуры и визуальной опоры',
    after: 'Пошаговый таймлайн из 6 этапов и чек-лист материалов, которые получит ученик',
  },
  {
    n: '05',
    title: 'Об авторе',
    goal: 'Вызвать доверие к ведущей курса',
    before: 'Фото, визуально не связанное ни с кино, ни с языком',
    after: 'Портрет в характере курса + регалии в виде крупных цифр: 1000+ учеников, 10+ лет опыта',
  },
  {
    n: '06',
    title: 'Тарифы и цены',
    goal: 'Сделать выбор лёгким и подтолкнуть к покупке',
    before: 'Три громоздкие однородные таблицы без иерархии',
    after: 'Популярный тариф выделен рамкой и плашкой, чёткие галочки и старая/новая цена',
  },
  {
    n: '07',
    title: 'FAQ и подвал',
    goal: 'Снять последние возражения перед оплатой',
    before: 'Раздела с частыми вопросами не было вовсе',
    after: 'Аккордеон с ответами на вопросы и аккуратный футер с контактами',
  },
]

export function BriefSection() {
  return (
    <section id="brief" className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <SectionLabel index="02">Бриф</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Техническое задание, блок за блоком
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              Разбор ошибок превратился в конкретное ТЗ: тёмно-синий фон
              вместо коричневого, гротеск + акцентная антиква, и пересборка
              каждого блока лендинга под задачу «зацепить → объяснить →
              продать».
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
