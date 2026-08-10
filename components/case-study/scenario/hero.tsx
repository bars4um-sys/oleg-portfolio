import Image from 'next/image'
import { asset } from '@/lib/utils'
import { ArrowUpRight, FileText } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Stamp } from '@/components/case-study/scenario/stamp'
import { SectionLabel } from '@/components/case-study/scenario/section-label'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-paper-line"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:py-24">
        <div>
          <SectionLabel scene="INT." label="Кейс · Веб-разработка" />

          <h1 className="mt-6 text-balance font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            Из программы курса —{' '}
            <span className="italic text-redline">в лендинг.</span>
          </h1>

          <p className="mt-5 max-w-md text-pretty font-serif text-lg italic text-ink-soft">
            Сайт курса «Адаптированный сценарий»
          </p>

          <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-soft">
            Клиент передал единственный документ — рабочую программу курса.
            Ни брифа, ни референсов, ни сайта-предшественника. Наша задача —
            превратить сухую методическую программу в продающий лендинг и
            выпустить его на собственном домене.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://course.kinomagica.ru"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: 'lg',
                className: 'rounded-sm px-5 text-sm tracking-wide',
              })}
            >
              Смотреть сайт
              <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              <span className="sr-only">(открывается в новой вкладке)</span>
            </a>
            <Stamp>Запущено · course.kinomagica.ru</Stamp>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg md:max-w-none">
          {/* document card peeking out behind, live site screenshot on top in correct aspect ratio */}
          <div className="group relative w-full pb-8 pl-6 pt-6">
            <div className="absolute left-0 top-0 h-[88%] w-[78%] -rotate-3 rounded-sm border border-paper-line bg-card p-5 shadow-[0_18px_40px_-24px_rgba(23,20,15,0.4)] paper-grain">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                Программа курса.docx
              </p>
              <div className="mt-4 space-y-2 font-mono text-[11px] leading-relaxed text-ink-soft">
                <p className="text-ink">
                  <span className="text-redline">1–2:</span> Методы
                  литературного анализа текста как инструменты для
                  экранизации.
                </p>
                <p>
                  <span className="text-redline">3–4:</span> Жанровые
                  особенности литературной формы и перевод в кинотекст.
                </p>
                <p>
                  <span className="text-redline">7:</span> «Хорошая»
                  литература для кино. «Собачье сердце».
                </p>
                <p className="line-clamp-3">
                  <span className="text-redline">14–15:</span> Разбор
                  поэпизодников.
                </p>
              </div>
              <FileText
                className="absolute right-5 top-5 size-4 text-ink-soft/50"
                aria-hidden="true"
              />
            </div>

            <div className="relative ml-auto w-[92%] origin-bottom-right transition-transform duration-500 ease-out md:group-hover:-translate-y-1.5 md:group-hover:rotate-1">
              <div className="overflow-hidden rounded-sm border border-paper-line shadow-[0_24px_50px_-20px_rgba(23,20,15,0.5)]">
                {/* browser chrome bar */}
                <div className="flex items-center gap-1.5 border-b border-paper-line bg-card px-3 py-2">
                  <span className="size-2 rounded-full bg-paper-line" />
                  <span className="size-2 rounded-full bg-paper-line" />
                  <span className="size-2 rounded-full bg-paper-line" />
                  <span className="ml-2 truncate rounded-sm bg-muted px-2 py-0.5 font-mono text-[10px] text-ink-soft">
                    course.kinomagica.ru
                  </span>
                </div>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={asset("/images/adapted-script-hero.webp")}
                    alt="Готовый первый экран сайта course.kinomagica.ru"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 560px, 90vw"
                  />
                </div>
              </div>
              <span className="absolute -bottom-3 right-4 rounded-sm border border-redline/40 bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-redline">
                готовый экран
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
