import { SectionLabel } from '@/components/case-study/scenario/section-label'
import { Reveal } from '@/components/case-study/scenario/reveal'

const acts = [
  {
    act: 'Акт I',
    title: 'Разбор документа',
    description:
      'Вычленили структуру из сплошного текста программы: аннотацию, блок из 15 занятий, списки фильмов и литературных текстов для разбора. Определили, какие фрагменты станут смысловыми блоками сайта.',
  },
  {
    act: 'Акт II',
    title: 'Драматургия страницы',
    description:
      'Разложили контент по сценам лендинга: обложка с сутью курса → аннотация → программа по занятиям → блок об авторе → стоимость и запись → финальный призыв к действию.',
  },
  {
    act: 'Акт III',
    title: 'Постановка',
    description:
      'Свели структуру в вёрстку, адаптировали под десктоп и мобильные экраны, подключили домен course.kinomagica.ru и опубликовали рабочий сайт.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-paper-line bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <SectionLabel scene="СЦ. 02" label="Процесс" />
          <h2 className="mt-4 max-w-xl text-balance font-serif text-3xl leading-tight text-ink md:text-4xl">
            Три акта: от текста программы до рабочего сайта
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {acts.map((item, i) => (
            <Reveal key={item.act} delay={i * 100}>
              <div className="relative h-full border border-paper-line bg-card p-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-redline">
                  {item.act}
                </span>
                <h3 className="mt-3 font-serif text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                {i < acts.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 font-serif text-2xl italic text-ink-soft/40 md:block"
                  >
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
