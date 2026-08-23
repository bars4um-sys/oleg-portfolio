import { asset } from '@/lib/utils'
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { NeuroTexture } from "@/components/neuro-texture"

type WorkItem = {
  tag: string
  title: string
  description: string
  image: string
  href: string
}

const WORKS: WorkItem[] = [
  {
    tag: "Редактор · Дизайнер · Продакт",
    title: "Ольга Чумаченко",
    description:
      "Личный сайт-портфолио мультидисциплинарного специалиста: обо мне, опыт в медиа и издательствах, визуальные работы, тексты и презентации.",
    image: "/works/olga-portfolio.svg",
    href: "https://bars4um-sys.github.io/olga-portfolio/",
  },
  {
    tag: "Филолог · Режиссёр · Доцент НИУ ВШЭ",
    title: "Екатерина Москвина",
    description:
      "Личный сайт филолога и режиссёра: преподавание в ведущих вузах, монографии и исследования, кино и театр, подкасты о кино и литературе.",
    image: "/works/kinomagica.svg",
    href: "https://kinomagica.ru",
  },
]

export function OtherWorks() {
  return (
    <section id="works" className="relative overflow-hidden px-6 py-24">
      <NeuroTexture seed={23} opacity={0.3} className="mx-auto max-w-7xl" />
      <div className="relative mx-auto max-w-6xl">
      <Reveal className="flex flex-col gap-3">
        <span className="text-xs font-medium tracking-[0.28em] text-primary">ДРУГИЕ РАБОТЫ</span>
        <h2 className="max-w-2xl text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
          Сайты, которые я собрал для людей с собственным голосом
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
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={asset(item.image)}
                alt={`Превью сайта: ${item.title}`}
                className="size-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:object-bottom"
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

              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>

              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Открыть сайт <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
