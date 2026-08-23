import Link from "next/link"
import { asset } from '@/lib/utils'
import { ArrowUpRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  was?: string
  became?: string
}

const CASES: CaseItem[] = [
  {
    index: "Кейс 01",
    tag: "EdTech / Упаковка смыслов",
    title: "Из программы курса — в продающий лендинг",
    description:
      "Собрал 47 страниц материалов в 5 смысловых блоков и выстроил понятный путь пользователя к заявке.",
    image: "/cases/scenario-case.webp",
    cta: "Смотреть полный кейс",
    href: "/scenario",
    was: "47 страниц методических материалов.",
    became: "5 смысловых блоков + готовая страница запуска.",
  },
  {
    index: "Кейс 02",
    tag: "Медиа-экосистема / Питч-дек",
    title: "Из стратегии проекта — в историю для инвесторов",
    description:
      "12-слайдовый питч-дек для медиа-экосистемы «Мир кунфу»: нарративная архитектура, дизайн-система и цельный визуальный язык проекта.",
    image: "/cases/kunfu-case.svg",
    cta: "Смотреть полный кейс",
    href: "/kunfu",
    was: "Набор идей и материалов.",
    became: "12-слайдовый pitch deck с единой логикой рассказа.",
  },
  {
    index: "Кейс 03",
    tag: "Английский язык / Редизайн",
    title: "Из сухого конспекта — в кинопремьеру",
    description:
      "Редизайн сайта для авторского курса по фильму «Титаник». Замена академической подачи на кинематографичный UX/UI, передающий атмосферу блокбастера.",
    image: "/cases/titanic-case.webp",
    cta: "Смотреть полный кейс",
    href: "/titanic",
    was: "Академическая подача материала.",
    became: "Эмоциональный интерфейс, построенный вокруг атмосферы фильма.",
  },
]

export function Cases() {
  return (
    <section id="cases" className="relative overflow-hidden px-6 py-24">
      <NeuroTexture seed={17} opacity={0.35} className="mx-auto max-w-7xl" />
      <div className="relative mx-auto max-w-6xl">
      <Reveal className="flex flex-col gap-3">
        <span className="text-xs font-medium tracking-[0.28em] text-primary">ИЗБРАННЫЕ КЕЙСЫ</span>
        <h2 className="font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
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

              {item.was && item.became && (
                <dl className="mt-4 space-y-2 border-t border-border/60 pt-3">
                  <div className="flex items-start justify-between gap-3 text-sm leading-snug">
                    <dt className="shrink-0 text-[11px] font-medium tracking-[0.18em] text-muted-foreground">
                      Было
                    </dt>
                    <dd className="text-right text-muted-foreground">{item.was}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-3 text-sm leading-snug">
                    <dt className="shrink-0 text-[11px] font-medium tracking-[0.18em] text-primary">
                      Стало
                    </dt>
                    <dd className="text-right font-medium text-foreground">{item.became}</dd>
                  </div>
                </dl>
              )}

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

              <div className="mt-auto pt-2">
                {item.locked ? (
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Lock className="size-4" /> {item.cta}
                  </span>
                ) : (
                  <Button
                    render={<Link href={item.href!} />}
                    nativeButton={false}
                    className="rounded-full bg-primary px-4 text-primary-foreground shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40"
                  >
                    {item.cta} <ArrowUpRight className="size-4" />
                  </Button>
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
