import { Sparkles } from 'lucide-react'
import { SectionLabel } from '@/components/case-study/scenario/section-label'
import { Reveal } from '@/components/case-study/scenario/reveal'
import { ScriptFrame } from '@/components/case-study/scenario/script-frame'

export function AuthorSection() {
  return (
    <section className="border-b border-paper-line bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <SectionLabel scene="СЦ. 04" label="Об авторе" />
        </Reveal>
        <div className="mt-8 grid gap-12 md:grid-cols-[1fr_1fr] md:items-center md:mt-12">
          <Reveal className="order-2 md:order-1">
            <ScriptFrame
              src="/images/adapted-script-author.png"
              alt="Блок «Об авторе» на сайте course.kinomagica.ru"
              caption="Один абзац из шапки документа развернулся в отдельный экран сайта."
              sceneNumber="ЭКРАН · АВТОР"
            />
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <h2 className="text-balance font-serif text-3xl leading-tight text-ink md:text-4xl">
                Строчка «автор курса» стала полноценным блоком доверия
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                В документе автор курса был указан одной строкой: «Екатерина
                Москвина, к.филол.н., режиссёр». Для лендинга мы вынесли эту
                информацию в отдельный экран — с бэкграундом преподавателя и
                акцентом на экспертизе, чтобы у слушателя не осталось вопроса
                «а почему я должен доверять этому курсу».
              </p>

              <div className="mt-6 flex gap-3 rounded-sm border border-dashed border-redline/40 bg-redline-soft/40 p-4">
                <Sparkles
                  className="mt-0.5 size-4 shrink-0 text-redline"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs leading-relaxed text-ink-soft">
                  <span className="font-semibold uppercase tracking-[0.08em] text-redline">
                    Заметка на полях:
                  </span>{' '}
                  у клиента не нашлось подходящей фотографии для лендинга —
                  только бытовые снимки. Поэтому портрет автора был
                  сгенерирован на предварительно обученной LoRA-модели,
                  дообученной на этих личных фотографиях, чтобы сохранить
                  реальное сходство.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
