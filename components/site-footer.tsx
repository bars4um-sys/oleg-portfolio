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
            Готовы переупаковать ваш продукт в кинематографичный лендинг?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Отправьте программу вашего курса или ссылку на текущий сайт. Я бесплатно разберу 3 «слабых
            места» в верстке и предложу концепт обновления.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            render={<a href="https://t.me/OlegUmaPalata" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="rounded-full bg-primary px-7 text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <Send className="size-4" /> Написать Олегу в Telegram
          </Button>
          <Button
            render={<a href="https://vk.com/" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent px-7 text-foreground transition-transform hover:-translate-y-0.5 hover:bg-card hover:text-primary"
          >
            <MessageCircle className="size-4" /> Написать в ВК
          </Button>
          <Button
            render={<a href="https://max.ru/" target="_blank" rel="noopener noreferrer" />}
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
          <span>© {new Date().getFullYear()} — Веб-дизайнер &amp; Продуктовый верстальщик</span>
        </div>
      </div>
    </footer>
  )
}
