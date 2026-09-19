import { Send, MessageCircle, MessageSquare } from "lucide-react"
import { Aurora } from "@/components/aurora"
import { Reveal } from "@/components/reveal"

export function SiteFooter() {
  return (
    <footer id="contact" className="grain relative overflow-hidden border-t border-border">
      <Aurora
        seed={61}
        intensity="cta"
        staticBlobs
        neuroOpacity={0.55}
        blobs={[
          { className: "left-1/2 top-[-8rem] -translate-x-1/2", color: "rgba(255,181,72,0.11)", size: "36rem", duration: "24s", blur: "44px" },
          { className: "right-[8%] bottom-[-6rem]", color: "rgba(255,208,120,0.08)", size: "22rem", delay: "-9s", duration: "28s", blur: "40px" },
        ]}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <div className="cta-breathe rounded-3xl bg-primary px-6 py-14 text-center shadow-xl shadow-primary/10 md:px-14">
            <h2 className="mx-auto max-w-3xl text-balance font-serif text-4xl font-medium leading-tight text-primary-foreground md:text-6xl">
              Не знаете, что мешает вашему сайту продавать?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
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
                  className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://t.me/OlegUmaPalata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary-foreground px-7 py-3 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/90"
              >
                <Send className="size-4" /> Получить экспресс-разбор
              </a>
              <a
                href="https://vk.me/oleg4um"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
              >
                <MessageCircle className="size-4" /> Написать в ВК
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOJIVcmBcqpCqla3FkspE4qR0xQgXdyoZWvPR2ivG861igeGeMs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
              >
                <MessageSquare className="size-4" /> Написать в MAX
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <span className="tracking-[0.2em]">ОЛЕГ ЧУМАЧЕНКО</span>
          <span>© {new Date().getFullYear()} — Веб-дизайн и упаковка экспертных продуктов</span>
        </div>
      </div>
    </footer>
  )
}
