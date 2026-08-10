import Link from "next/link"
import { asset } from '@/lib/utils'
import { ArrowUpRight, Lock } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { NeuroTexture } from "@/components/neuro-texture"

type CaseItem = {
  index: string
  tag: string
  title: string
  description: string
  image: string
  cta: string
  href?: string
  locked?: boolean
}

const CASES: CaseItem[] = [
  {
    index: "Кейс 01",
    tag: "EdTech / Упаковка смыслов",
    title: "Из программы курса — в продающий лендинг",
    description:
      "Пересборка хаотичного текста программы в структурированный 5-блочный лендинг с конверсией в заявку. Понятная иерархия, кастомный UI и полная готовность к запуску.",
    image: "/cases/scenario-case.webp",
    cta: "Читать полный кейс",
    href: "/scenario",
  },
  {
    index: "Кейс 02",
    tag: "Английский язык / Редизайн",
    title: "Из сухого конспекта — в кинопремьеру",
    description:
      "Редизайн сайта для авторского курса по фильму «Титаник». Замена академической подачи на кинематографичный UX/UI, передающий атмосферу блокбастера.",
    image: "/cases/titanic-case.webp",
    cta: "Читать полный кейс",
    href: "/titanic",
  },
  {
    index: "Кейс 03",
    tag: "Премиум-продукт",
    title: "Комплексная упаковка флагманского онлайн-курса",
    description:
      "Проект в разработке. Создание сквозного визуального стиля: от промо-лендинга до презентаций и материалов внутри личного кабинета.",
    image: "/cases/premium-course.webp",
    cta: "Скоро анонс",
    locked: true,
  },
]

export function Cases() {
  return (
    <section id="cases" className="relative overflow-hidden px-6 py-24">
      <NeuroTexture seed={17} opacity={0.35} className="mx-auto max-w-7xl" />
      <div className="relative mx-auto max-w-6xl">
      <Reveal className="flex flex-col gap-3">
        <span className="text-xs font-medium tracking-[0.28em] text-primary">ИЗБРАННЫЕ КЕЙСЫ</span>
        <h2 className="max-w-2xl text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
          Проекты, где текст превратился в продукт
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CASES.map((item, i) => (
          <Reveal
            as="article"
            key={item.index}
            delay={i * 120}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={asset(item.image || "/placeholder.svg")}
                alt={`Мокап проекта: ${item.title}`}
                className={`size-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:object-bottom ${
                  item.locked ? "blur-sm brightness-50 object-center" : ""
                }`}
              />
              {item.locked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center gap-2 rounded-full border border-primary/40 bg-background/70 px-4 py-2 text-xs font-medium tracking-widest text-primary backdrop-blur-sm">
                    <Lock className="size-3.5" /> COMING SOON
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-center justify-between text-xs">
                <span className="tracking-[0.2em] text-muted-foreground">{item.index}</span>
                <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-pretty font-serif text-2xl font-medium leading-snug text-foreground">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>

              <div className="mt-auto pt-2">
                {item.locked ? (
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Lock className="size-4" /> {item.cta}
                  </span>
                ) : (
                  <Link
                    href={item.href!}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {item.cta} <ArrowUpRight className="size-4" />
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}
