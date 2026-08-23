import { Button } from "@/components/ui/button"
import { Send, MessageCircle, MessageSquare } from "lucide-react"
import { Aurora } from "@/components/aurora"
import { Reveal } from "@/components/reveal"

export function SiteFooter() {
  return (
    <footer id="contact" className="grain relative overflow-hidden border-t border-border bg-card/40">
      <Aurora
        seed={61}
        neuroOpacity={0.55}
        blobs={[
          { className: "left-1/2 top-[-8rem] -translate-x-1/2", color: "rgba(230,199,154,0.20)", size: "36rem", duration: "24s" },
          { className: "right-[8%] bottom-[-6rem]", color: "rgba(201,160,106,0.12)", size: "26rem", delay: "-9s", duration: "28s" },
        ]}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-6xl">
            Не знаете, что мешает вашему сайту продавать?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Отправьте ссылку или материалы проекта. Я бесплатно покажу:
          </p>
          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
            {[
              "где теряется внимание",
              "что перегружает пользователя",
              "какие блоки стоит пересобрать",
              "с чего начать редизайн",
            ].map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            render={<a href="https://t.me/OlegUmaPalata" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="rounded-full bg-primary px-7 text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <Send className="size-4" /> Получить экспресс-разбор
          </Button>
          <Button
            render={<a href="https://vk.me/oleg4um" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent px-7 text-foreground transition-transform hover:-translate-y-0.5 hover:bg-card hover:text-primary"
          >
            <MessageCircle className="size-4" /> Написать в ВК
          </Button>
          <Button
            render={<a href="https://max.ru/u/f9LHodD0cOJIVcmBcqpCqla3FkspE4qR0xQgXdyoZWvPR2ivG861igeGeMs" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent px-7 text-foreground transition-transform hover:-translate-y-0.5 hover:bg-card hover:text-primary"
          >
            <MessageSquare className="size-4" /> Написать в MAX
          </Button>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <span className="tracking-[0.2em]">ОЛЕГ ЧУМАЧЕНКО</span>
          <span>© {new Date().getFullYear()} — Веб-дизайн и упаковка экспертных продуктов</span>
        </div>
      </div>
    </footer>
  )
}
