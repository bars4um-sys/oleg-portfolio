import { BrowserFrame } from '@/components/case-study/titanic/browser-frame'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const PROBLEMS = [
  {
    title: 'Монотонная, устаревшая гамма',
    body: 'Сплошной тёмно-коричневый и грязновато-бежевый фон делает страницу тяжёлой для восприятия. Нет акцентов, контраста и «воздуха» между блоками.',
  },
  {
    title: 'Текст читается с трудом',
    body: 'Большие сплошные абзацы на тёмном фоне — низкий контраст, системный шрифт без иерархии размеров, межстрочных интервалов и отступов.',
  },
  {
    title: 'Слабый первый экран',
    body: 'Постер фильма занимает много места, но не создаёт премиальности. Кнопка «Присоединиться» не выделена цветом и теряется на фоне.',
  },
  {
    title: 'Громоздкие тарифы и разнобой в блоках',
    body: 'Карточки цен монотонны и сложно считываются. Фото автора визуально не связано ни с кино, ни с изучением языка.',
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
            Продукт с эмоциональной идеей, упакованный как справка
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Идея курса — изучение живого английского языка через просмотр фильма «Титаник» и
            синхронный разбор диалогов. Но лендинг об этом не сообщал: посетитель
            видел плотную стену коричневого текста без малейшего намёка на
            кино, эмоцию или премиальность.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <Reveal delay={80}>
            <BrowserFrame
              src="/images/titanic-english-before.webp"
              alt="Старая версия лендинга Titanic English — тёмно-коричневый дизайн со сплошными блоками текста"
              chromeLabel="englishteacup.org/titanic — старая версия"
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
