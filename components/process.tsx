import { Reveal } from "@/components/reveal"
import { NeuroTexture } from "@/components/neuro-texture"

const PRINCIPLES = [
  {
    num: "01",
    title: "Фокус внимания за 3 секунды",
    text: "В эпоху соцсетей длинные простыни текста не читают. Я выделяю главное, структурирую смыслы и делаю так, чтобы клиент сразу видел ценность предложения.",
  },
  {
    num: "02",
    title: "Визуальное доверие",
    text: "Чистая вёрстка, аккуратная типографика и визуальные акценты создают ощущение надёжного, дорогого продукта без навязчивой рекламы.",
  },
  {
    num: "03",
    title: "Логика вместо хаоса",
    text: "Выстраиваю последовательность блоков так, чтобы у посетителя не оставалось лишних вопросов, а целевое действие (заявка/покупка) было простым и естественным.",
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-6 py-24">
      <NeuroTexture seed={53} opacity={0.35} className="mx-auto max-w-7xl" />
      <div className="relative mx-auto max-w-6xl">
      <Reveal className="flex flex-col gap-3">
        <span className="text-xs font-medium tracking-[0.28em] text-primary">ПОЧЕМУ ЭТО РАБОТАЕТ</span>
        <h2 className="max-w-2xl text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
          Принцип работы
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.num} delay={i * 130} className="group relative flex flex-col gap-4 pt-6">
            <span className="absolute left-0 top-0 h-px w-full bg-primary/25" aria-hidden="true" />
            <span className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" aria-hidden="true" />
            <span className="text-sm tracking-[0.2em] text-muted-foreground">{p.num}</span>
            <h3 className="font-serif text-2xl font-medium text-foreground">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}
