import { Button } from "@/components/ui/button"
import { asset } from '@/lib/utils'
import { Aurora } from "@/components/aurora"
import { Reveal } from "@/components/reveal"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      {/* animated gold aurora blobs + neuro-mesh texture (mesh is clipped to the left ~2/3 so it stays off the right-side portrait) */}
      <Aurora seed={11} neuroOpacity={0.6} neuroRegion="top-0 bottom-0 left-0 right-1/3" />
      {/* faded cinematic portrait backdrop on the right */}
      <img
        src={asset("/monk-backdrop.png")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 select-none object-cover object-center opacity-[0.14] mix-blend-luminosity md:block lg:w-[45%]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 92%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 92%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      />
      {/* cinematic vignette on top of the blobs */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(230,199,154,0.12) 0%, rgba(26,23,18,0) 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <Reveal>
          <p className="max-w-2xl text-xs font-medium tracking-[0.28em] text-primary">
            УПАКОВКА ЭКСПЕРТНЫХ ПРОДУКТОВ &amp; РЕДИЗАЙН ЛЕНДИНГОВ
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Превращаю сухие программы и тексты в лендинги, которые{" "}
            <span className="shimmer-text">читают до конца</span> и покупают.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Разрабатываю веб-страницы, презентации и визуальные экосистемы для экспертов и онлайн-школ.
            Избавляю ваши продукты от вида «курсовой работы», придавая им кинематографичный размах и
            понятную UX-структуру.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#cases" />}
              nativeButton={false}
              size="lg"
              className="rounded-full bg-primary px-7 text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Смотреть кейсы <ArrowDown className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
