import { Check } from 'lucide-react'
import { BrowserFrame } from '@/components/case-study/titanic/browser-frame'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const HIGHLIGHTS = [
  'Первый экран с атмосферным изображением лайнера, крупным заголовком, контрастной CTA и основными параметрами курса',
  'Процесс обучения представлен в виде последовательного таймлайна — от начала курса до завершения программы',
  'Программа погружения собрана в карточки эпизодов с отдельным визуальным образом, описанием и CTA',
  'Три тарифа собраны в сопоставимые карточки с одинаковой структурой, а рекомендуемый вариант выделен цветом',
  'Информация об авторе собрана в самостоятельный раздел с фотографией, цитатой, краткой биографией и ключевыми фактами',
  'Частые вопросы собраны в компактный раскрывающийся список перед финальным переходом к участию',
  'Добавлен концепт диалога с героем фильма, поддерживающий игровую механику и атмосферу курса',
]

export function AfterSection() {
  return (
    <section className="border-b border-navy bg-navy px-6 py-20 text-navy-foreground sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03" tone="accent">
            Стало
          </SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-balance text-navy-foreground sm:text-5xl">
            Лендинг, который играет в том же жанре, что и сам курс
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/70 text-pretty">
            Глубокая палитра ночного океана, золотые акценты и выразительная типографика связывают страницу с атмосферой фильма. Содержание исходного лендинга сохранено, но распределено по более наглядным форматам: меткам, карточкам, таймлайну, тарифным планам и интерактивным блокам.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <Reveal delay={80}>
            <BrowserFrame
              src="/images/titanic-english-after.webp"
              alt="Новая версия лендинга Titanic English — тёмно-синий кинематографичный дизайн с золотыми акцентами"
              tone="dark"
              chromeLabel="Авторская концепция редизайна"
              height={640}
            />
            <p className="mt-3 text-xs leading-relaxed text-navy-foreground/50">
              Не опубликована на сайте школы
            </p>
          </Reveal>

          <Reveal delay={160}>
            <ul className="flex flex-col gap-5">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-navy-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
