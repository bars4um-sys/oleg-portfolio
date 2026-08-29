import { ArrowDown } from 'lucide-react'
import { asset } from '@/lib/utils'
import Image from 'next/image'

const META = [
  { label: 'Проект', value: 'Инициативная концепция для English is my Cup of Tea' },
  { label: 'Продукт', value: 'Онлайн-интенсив «Titanic English»' },
  { label: 'Цель концепции', value: 'Показать возможное направление редизайна' },
  { label: 'Выполнено', value: 'Анализ открытой страницы → структура → UI-концепция → адаптивный прототип' },
]

function FilmRail({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute flex w-6 flex-col items-center justify-between gap-2 bg-navy py-4 ${className ?? ''}`}
    >
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className="size-2 shrink-0 rounded-[2px] bg-navy-foreground/25" />
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pb-20 pl-12 pr-6 pt-16 sm:pl-16 sm:pt-24"
    >
      <FilmRail className="left-0 top-0 h-full" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              <span className="rounded-sm bg-navy px-2.5 py-1 text-navy-foreground">Концепт</span>
              <span>Edtech · Лендинг · Инициатива</span>
            </div>

            <h1 className="mt-8 max-w-xl font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
              ИНИЦИАТИВНАЯ КОНЦЕПЦИЯ РЕДИЗАЙНА
            </h1>

            <p className="mt-3 max-w-xl font-serif text-2xl leading-tight text-muted-foreground text-balance sm:text-3xl">
              Из текстовой страницы — в атмосферу кинопремьеры
            </p>

            <p className="mt-6 max-w-xl pt-3 text-lg leading-relaxed text-muted-foreground text-pretty">
              Концепт лендинга онлайн-интенсива по английскому языку, созданный как предложение автору курса.
            </p>

            <div className="mt-6 rounded-sm border border-accent/40 bg-accent/10 px-5 py-4">
              <p className="text-sm leading-relaxed text-foreground">
                Это инициативный проект, а не результат коммерческого заказа. Концепция была предложена автору курса, но не публиковалась на сайте школы и не проходила проверку на реальном трафике.
              </p>
            </div>

            <div className="mt-9 inline-flex items-baseline gap-4 border-l-2 border-accent pl-5">
              <span className="max-w-[18rem] text-sm leading-snug text-muted-foreground">
                Цель концепции — усилить эмоциональную подачу курса, выстроить более ясную визуальную иерархию и сделать основные условия участия заметными уже на первом экране.
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="group relative aspect-[4/5] w-full cursor-pointer">
              <div className="absolute inset-x-4 top-0 z-0 h-[86%] -rotate-3 overflow-hidden rounded-md border border-border bg-card shadow-xl transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.03]">
                <div className="flex items-center justify-between border-b border-border px-3 py-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    До
                  </span>
                  <span className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-muted-foreground/25" />
                    <span className="size-1.5 rounded-full bg-muted-foreground/25" />
                    <span className="size-1.5 rounded-full bg-muted-foreground/25" />
                  </span>
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={asset("/images/titanic-english-before.webp")}
                    alt="Старая версия лендинга «Titanic English»"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 420px, 90vw"
                  />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 h-[86%] rotate-2 overflow-hidden rounded-md border border-navy/40 bg-navy shadow-2xl transition-all duration-500 ease-out group-hover:translate-y-2 group-hover:rotate-6 group-hover:scale-95 group-hover:opacity-0">
                <div className="flex items-center justify-between border-b border-navy-foreground/15 px-3 py-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                    После
                  </span>
                  <span className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-navy-foreground/25" />
                    <span className="size-1.5 rounded-full bg-navy-foreground/25" />
                    <span className="size-1.5 rounded-full bg-navy-foreground/25" />
                  </span>
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={asset("/images/titanic-english-after.webp")}
                    alt="Новая версия лендинга «Titanic English»"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 420px, 90vw"
                  />
                </div>
              </div>

              <span className="absolute -right-3 top-6 z-20 rotate-3 rounded-sm bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent-foreground shadow-md transition-opacity duration-500 group-hover:opacity-0">
                Кинопремьера
              </span>

              <span className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-sm bg-navy px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-navy-foreground opacity-100 shadow-md transition-opacity duration-300 group-hover:opacity-0">
                Наведите, чтобы увидеть «до»
              </span>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
          {META.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-2 font-serif text-base leading-snug text-foreground sm:text-lg">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
        Смотреть разбор
      </div>
    </section>
  )
}
