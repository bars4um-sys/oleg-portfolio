import { BrowserFrame } from '@/components/case-study/titanic/browser-frame'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const PROBLEMS = [
  {
    title: 'Сдержанная цветовая система',
    body: 'Исходная страница построена на тёплой коричнево-бежевой палитре. В концепции я перешёл к глубоким синим оттенкам ночного океана и золотым акцентам, чтобы сильнее связать визуальный язык страницы с образом «Титаника» и атмосферой кинопремьеры.',
  },
  {
    title: 'Информацию можно быстрее распределить по уровням',
    body: 'На исходной странице основная информация представлена преимущественно текстовыми блоками с близкой визуальной значимостью. В концепции я распределил содержание между заголовками, карточками, метками и короткими смысловыми блоками, а также ввёл контрастную пару шрифтов и более выраженную иерархию размеров.',
  },
  {
    title: 'Первый экран построен как информационный анонс',
    body: 'Заголовок, описание, даты и кнопка «Присоединиться» хорошо различимы, а постер сразу обозначает связь курса с фильмом. При этом компактная композиция прежде всего передаёт основную информацию о продукте. В концепции первый экран превращён в более атмосферную презентацию курса: изображение лайнера формирует эмоциональный фон, крупный заголовок раскрывает идею продукта, а основные условия обучения собраны в быстро считываемые элементы.',
  },
  {
    title: 'Тарифам требуется более наглядное сравнение',
    body: 'В исходной версии варианты участия представлены преимущественно через текст и перечисление условий. В концепции тарифы собраны в три самостоятельные карточки с одинаковой структурой, визуально разделёнными преимуществами и выделенным рекомендуемым вариантом.',
  },
]

export function BeforeSection() {
  return (
    <section className="border-b border-border bg-secondary/40 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="01" tone="default">
            Было
          </SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Эмоциональный продукт со сдержанной визуальной подачей
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Исходная страница была ориентирована прежде всего на подробное представление программы изучения английского через фильм «Титаник». В рамках концепции я исследовал, как усилить визуальную иерархию, передать атмосферу фильма и сделать ключевые действия заметнее, сохранив содержание и логику курса.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <Reveal delay={80}>
            <BrowserFrame
              src="/images/titanic-english-before.webp"
              alt="Старая версия лендинга Titanic English — тёмно-коричневый дизайн со сплошными блоками текста"
              chromeLabel="Исходная страница"
              height={640}
            />
          </Reveal>

          <Reveal delay={160}>
            <ol className="flex flex-col gap-8">
              {PROBLEMS.map((problem, i) => (
                <li key={problem.title} className="flex gap-4">
                  <span className="shrink-0 font-serif text-3xl leading-none text-muted-foreground/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg leading-snug">{problem.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {problem.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
