import { Aurora } from "@/components/aurora"
import { asset } from '@/lib/utils'
import { Reveal } from "@/components/reveal"
import { Clapperboard, Package, PenTool } from "lucide-react"

export function Author() {
  return (
    <section id="author" className="relative overflow-hidden border-y border-border">
      <Aurora
        seed={29}
        blobs={[
          { className: "left-[-4rem] bottom-[-6rem]", color: "rgba(230,199,154,0.18)", size: "30rem", duration: "22s" },
          { className: "right-[10%] top-[-4rem]", color: "rgba(201,160,106,0.14)", size: "24rem", delay: "-8s", duration: "26s" },
        ]}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm">
          {/* glow ring behind the portrait */}
          <div
            className="absolute inset-0 -z-10 rounded-[2rem] blur-2xl"
            style={{ background: "radial-gradient(circle at 50% 40%, rgba(230,199,154,0.35), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="animate-float overflow-hidden rounded-[2rem] border border-primary/25 bg-card shadow-2xl">
            <img
              src={asset("/oleg-portrait.webp")}
              alt="Портрет Олега Чумаченко — веб-дизайнера и продуктового верстальщика"
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-medium tracking-[0.28em] text-primary">ОБ АВТОРЕ</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Олег Чумаченко
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Веб-дизайнер и продуктовый верстальщик. Помогаю экспертам и онлайн-школам превращать
              методические материалы в лендинги, которые выглядят как премьера, а не как реферат — и
              приносят заявки.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Работаю на стыке смысла и эстетики: сначала выстраиваю логику продажи, затем одеваю её
              в кинематографичный визуальный язык с безупречной адаптивной вёрсткой.
            </p>
          </Reveal>

          {/* decorative trio: cinema · packaging · craft (no claims, just a design element) */}
          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-5 border-t border-border pt-8 text-primary/55">
              <Clapperboard className="size-6" aria-hidden="true" />
              <span className="size-1 rounded-full bg-primary/30" aria-hidden="true" />
              <Package className="size-6" aria-hidden="true" />
              <span className="size-1 rounded-full bg-primary/30" aria-hidden="true" />
              <PenTool className="size-6" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
