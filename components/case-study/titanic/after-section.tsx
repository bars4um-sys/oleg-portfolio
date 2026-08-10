import { Check } from 'lucide-react'
import { BrowserFrame } from '@/components/case-study/titanic/browser-frame'
import { Reveal } from '@/components/case-study/titanic/reveal'
import { SectionLabel } from '@/components/case-study/titanic/section-label'

const HIGHLIGHTS = [
  'Кинематографичный hero с полноэкранным кадром «Титаника», таймером до старта и контрастной золотой кнопкой',
  'Метод курса подан тремя иконками-шагами вместо стены текста',
  'Программа выстроена в виде глав фильма — со своим кадром и CTA на каждую',
  'Тарифы сведены к трём читаемым карточкам, средний выделен как «Хит продаж»',
  'Регалии Милы Хабировой оформлены крупными цифрами, а не абзацем текста',
  'Добавлен блок FAQ, снимающий последние сомнения перед оплатой',
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
            Тёмно-синий фон зала кинотеатра, золотой акцент прожектора и
            крупная выразительная типографика — структура страницы осталась
            узнаваемой для аудитории, но каждый блок теперь работает на
            вовлечение и продажу.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <Reveal delay={80}>
            <BrowserFrame
              src="/images/titanic-english-after.jpg"
              alt="Новая версия лендинга Titanic English — тёмно-синий кинематографичный дизайн с золотыми акцентами"
              tone="dark"
              chromeLabel="englishteacup.org/titanic — новая версия"
              height={640}
            />
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
