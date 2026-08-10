import { Aurora } from "@/components/aurora"
import { Reveal } from "@/components/reveal"

const SERVICES = [
  {
    num: "01",
    title: "Веб-разработка & Редизайн",
    text: "Проектирование и верстка лендингов, спецпроектов и промо-страниц для экспертных курсов с высокой конверсией.",
  },
  {
    num: "02",
    title: "Презентации & Pitch Decks",
    text: "Дизайн вебинарных и продающих презентаций, сохраняющих единый стилистический код вашего бренда.",
  },
  {
    num: "03",
    title: "Сопутствующая графика & Соцсети",
    text: "Оформление обложек, гайдов, чек-листов, рекламных креативов и баннеров для анонса запуска.",
  },
  {
    num: "04",
    title: "Оформление контента курсов",
    text: "Структурирование учебных материалов, гайдлайнов и оформления личных кабинетов (GetCourse и др.).",
  },
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
            Упаковываю продукт «под ключ»
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {SERVICES.map((s, i) => (
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
      </div>
    </section>
  )
}
