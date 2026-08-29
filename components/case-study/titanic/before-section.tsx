import { BrowserFrame } from '@/components/case-study/titanic/browser-frame'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const PROBLEMS = [
  {
    title: 'Сдержанная цветовая система',
    body: 'Страница выдержана в тёмно-коричневой и бежевой гамме. Чтобы усилить ассоциацию с фильмом, я предложил перейти к глубокому синему фону с золотым акцентом — это добавляет воздух и контраст между блоками.',
  },
  {
    title: 'Недостаточно выраженная визуальная иерархия',
    body: 'Крупные сплошные абзацы на тёмном фоне затрудняют сканирование. В концепции я переработал типографику — ввёл контрастную пару шрифтов, выстроил иерархию размеров и межстрочных интервалов.',
  },
  {
    title: 'Первый экран можно сильнее связать с атмосферой курса',
    body: 'Постер фильма занимает центральное место, но не формирует премиального восприятия. Кнопка «Присоединиться» не акцентирована и визуально теряется — в концепции она становится контрастной и заметной.',
  },
  {
    title: 'Тарифам требуется более быстрое визуальное сравнение',
    body: 'Карточки цен представлены монотонно и сложно считываются. Фотографию автора можно органичнее вписать в визуальный контекст кино и изучения языка.',
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
            Исходная страница была ориентирована прежде всего на передачу подробной информации о программе. В рамках концепции я исследовал, как усилить визуальную иерархию, атмосферу фильма и заметность ключевых действий, сохранив содержание курса.
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
