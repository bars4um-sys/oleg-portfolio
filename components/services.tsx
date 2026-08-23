import { Aurora } from "@/components/aurora"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight } from "lucide-react"

const PRIMARY = [
  {
    num: "01",
    title: "Пересобрать сложный продукт",
    text: "Для курса, программы или образовательного проекта: собрать десятки страниц и разные смыслы в систему, в которой легко разобраться.",
  },
  {
    num: "02",
    title: "Упаковать запуск",
    text: "Лендинг, презентация и визуальные материалы как единый ансамбль — чтобы запуск выглядел цельно и продавал с первого касания.",
  },
  {
    num: "03",
    title: "Обновить существующий сайт",
    text: "Аудит → новая структура → дизайн → адаптив. Без «переделки ради переделки»: усиливаем то, что уже работает, и чиним слабые места.",
  },
]

const EXTRAS = [
  "Баннеры и обложки",
  "Оформление соцсетей",
  "Гайды и чек-листы",
  "Инфографика и схемы",
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-y border-border bg-card/40">
      <Aurora
        seed={43}
        blobs={[
          { className: "right-[-6rem] top-[-4rem]", color: "rgba(230,199,154,0.14)", size: "28rem", duration: "23s" },
        ]}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal className="flex flex-col gap-3">
          <span className="text-xs font-medium tracking-[0.28em] text-primary">КОМПЛЕКСНЫЙ ПОДХОД</span>
          <h2 className="max-w-2xl text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Упаковываю продукт под ключ
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PRIMARY.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 100}
              className="group relative flex flex-col gap-4 bg-card p-8 transition-colors"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(120% 120% at 100% 0%, rgba(230,199,154,0.10), transparent 55%)" }}
                aria-hidden="true"
              />
              <span className="relative font-serif text-3xl text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                {s.num}
              </span>
              <h3 className="relative text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="relative text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Дополнительные материалы
          </span>
          <ul className="flex flex-wrap gap-2">
            {EXTRAS.map((label) => (
              <li
                key={label}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {label}
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Обсудить задачу <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
