import { ArrowDown } from 'lucide-react'
import { asset } from '@/lib/utils'
import Image from 'next/image'

const META = [
  { label: 'Клиент', value: 'English is my Cup of Tea' },
  { label: 'Продукт', value: 'Онлайн-интенсив «Titanic English»' },
  { label: 'Задача', value: 'Редизайн продающего лендинга' },
  { label: 'Формат работы', value: 'Аналитика → бриф → UI/UX' },
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
              <span className="rounded-sm bg-navy px-2.5 py-1 text-navy-foreground">До / После</span>
              <span>Edtech · Лендинг · Конверсия</span>
            </div>

            <h1 className="mt-8 max-w-xl font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
              Из простого текста — в
              <span className="relative mt-1 block w-fit font-bold uppercase text-accent">
                афишу !
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-1.5 w-full bg-accent/40"
                />
              </span>
            </h1>

            <p className="mt-3 max-w-xl font-serif text-2xl leading-tight text-muted-foreground text-balance sm:text-3xl">
              Редизайн сайта для курса по фильму «Титаник»
            </p>

            <p className="mt-6 max-w-xl pt-3 text-lg leading-relaxed text-muted-foreground text-pretty">
              История о том, как лендинг онлайн-интенсива по английскому языку
              превратился из простенького текста с устаревшим дизайном в яркую
              киноафишу фильма, на который хочется купить билет.
            </p>

            <div className="mt-9 inline-flex items-baseline gap-4 border-l-2 border-accent pl-5">
              <span className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">×2.8</span>
              <span className="max-w-[14rem] text-sm leading-snug text-muted-foreground">
                рост конверсии в заявку после запуска нового дизайна
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
