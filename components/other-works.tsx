import { asset } from '@/lib/utils'
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Aurora } from "@/components/aurora"

type WorkItem = {
  tag: string
  title: string
  role: string
  task: string
  image: string
  href: string
}

const WORKS: WorkItem[] = [
  {
    tag: "Филолог · Режиссёр · Преподаватель",
    title: "Екатерина Москвина",
    role: "Филолог, режиссёр, преподаватель.",
    task: "Собрать в одном пространстве преподавание, исследования, кино и театр.",
    image: "/works/kinomagica.svg",
    href: "https://kinomagica.ru",
  },
  {
    tag: "Редактор · Дизайнер · Продакт",
    title: "Ольга Чумаченко",
    role: "Мультидисциплинарный специалист.",
    task: "Собрать несколько профессиональных идентичностей в одном портфолио.",
    image: "/works/olga-portfolio.svg",
    href: "https://bars4um-sys.github.io/olga-portfolio/",
  },
]

export function OtherWorks() {
  return (
    <section id="works" className="relative overflow-hidden px-6 py-24">
      <Aurora seed={23} intensity="minimal" neuroOpacity={0.3} neuroRegion="top-0 bottom-0 left-0 right-0" />
      <div className="relative mx-auto max-w-6xl">
      <Reveal className="flex flex-col gap-3">
        <span className="text-xs font-medium tracking-[0.28em] text-primary">ЕЩЁ ДВА ПРИМЕРА</span>
        <h2 className="max-w-3xl text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
          Работа со сложной экспертностью
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {WORKS.map((item, i) => (
          <Reveal
            as="a"
            key={item.title}
            delay={i * 120}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Открыть сайт: ${item.title} (в новой вкладке)`}
            className="case-card-hover group relative flex flex-col overflow-hidden rounded-xl border border-card-border bg-card"
          >
            {/* delicate local glow on hover */}
            <div
              className="case-card-glow pointer-events-none absolute inset-0 -z-10"
              style={{ background: "radial-gradient(120% 120% at 50% 0%, rgba(255,181,72,0.06), transparent 55%)" }}
              aria-hidden="true"
            />
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={asset(item.image)}
                alt={`Превью сайта: ${item.title}`}
                className="case-card-image size-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:object-bottom"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                  {item.tag}
                </span>
                <span className="tracking-[0.2em] text-muted-foreground">ЛИЧНЫЙ САЙТ</span>
              </div>

              <h3 className="text-pretty font-serif text-2xl font-medium leading-snug text-foreground">
                {item.title}
              </h3>

              <p className="text-base font-medium text-foreground/80">{item.role}</p>

              <dl className="mt-2 space-y-2 border-t border-border/60 pt-3">
                <div className="flex items-baseline justify-between gap-x-4">
                  <dt className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Задача</dt>
                  <dd className="min-w-0 text-right text-base leading-relaxed text-muted-foreground">{item.task}</dd>
                </div>
              </dl>

              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Открыть сайт <ArrowUpRight className="case-card-arrow size-4" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}
