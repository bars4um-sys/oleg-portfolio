'use client'

import { useEffect, useState } from 'react'

const sections = [
  ['overview', 'Обзор'],
  ['challenge', 'Задача'],
  ['strategy', 'Стратегия'],
  ['system', 'Система'],
  ['outcome', 'Результат'],
]

const chapters = [
  { number: '01', title: 'Собрать смысл', text: 'Перевести стратегию развития в историю, которую инвестор считывает за один проход.' },
  { number: '02', title: 'Показать глубину', text: 'Сделать из проекта не набор форматов, а культурную медиа-экосистему с собственным ритмом.' },
  { number: '03', title: 'Оставить след', text: 'Создать визуальный язык, который работает как знак качества и запоминается после презентации.' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-primary">{children}</p>
}

function MiniDeck({ variant = 'dark', label }: { variant?: 'dark' | 'light' | 'accent'; label: string }) {
  return (
    <div className={`mini-deck mini-deck-${variant}`}>
      <div className="mini-deck-top"><span>МИР КУНФУ</span><span>2026</span></div>
      <div className="mini-deck-mark" aria-hidden="true" style={{ fontFamily: 'var(--font-cjk)' }}>功夫</div>
      <div className="mini-deck-copy"><span>{label}</span><i /></div>
    </div>
  )
}

export function CaseStudyPage() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -65% 0px' },
    )
    sections.forEach(([id]) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <main className="case-page">
      <header className="case-nav">
        <a href="#top" className="case-logo"><span>MK</span> МИР КУНФУ</a>
        <span className="case-nav-meta">CASE STUDY / 2026</span>
        <a
          href="https://pitch-mauve-omega.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="case-nav-link"
        >
          Смотреть результат <span>↘</span>
        </a>
      </header>

      <section id="top" className="case-hero">
        <div className="hero-index">SELECTED WORK <span>—</span> 01 / 01</div>
        <div className="hero-watermark" aria-hidden="true" style={{ fontFamily: 'var(--font-cjk)' }}>功</div>
        <div className="hero-content">
          <p className="hero-eyebrow">Portfolio case study · Investor pitch deck</p>
          <h1>Мир<br /><em>кунфу</em></h1>
          <p className="hero-lede">Как превратить стратегию культурного медиа-проекта в историю, которой хочется стать частью.</p>
        </div>
        <div className="hero-footer"><span>ART DIRECTION / STRATEGY / DIGITAL EXPERIENCE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <div className="case-layout">
        <aside className="case-rail">
          <span className="rail-title">Содержание</span>
          <nav aria-label="Навигация по кейсу">
            {sections.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>{label}<span>↗</span></a>)}
          </nav>
          <div className="rail-bottom"><span>© 2026</span><span>RUS / ENG</span></div>
        </aside>

        <div className="case-content">
          <section id="overview" className="case-section overview-section">
            <div className="section-number">01</div>
            <div className="section-main">
              <SectionLabel>Проект в двух словах</SectionLabel>
              <h2>Не тревел-шоу.<br /><em>Медиа-экосистема.</em></h2>
              <div className="overview-grid">
                <p className="large-copy">«Мир кунфу» исследует современный Китай через людей, их путь и мастерство. Задача кейса — показать инвестору не просто идею, а масштабируемую систему, которая умеет расти в глубину.</p>
                <dl className="facts-list">
                  <div><dt>Клиент</dt><dd>Мир кунфу</dd></div>
                  <div><dt>Формат</dt><dd>Investor pitch deck</dd></div>
                  <div><dt>Объём</dt><dd>12 интерактивных слайдов</dd></div>
                  <div><dt>Роль</dt><dd>Strategy / Design / UX</dd></div>
                </dl>
              </div>
            </div>
          </section>

          <section id="challenge" className="case-section challenge-section">
            <div className="section-number">02</div>
            <div className="section-main">
              <SectionLabel>От стратегии к истории</SectionLabel>
              <div className="challenge-heading"><h2>Сложное<br /><em>нужно почувствовать.</em></h2><span className="red-stamp">核心<br /><small>THE CORE</small></span></div>
              <p className="large-copy narrow-copy">Исходный документ был богат смыслами: десять лет развития, несколько бизнес-моделей, контентная матрица и команда. Но инвестору нужна не энциклопедия — ему нужен ясный ответ на вопрос: почему это должно существовать сейчас?</p>
              <div className="quote-block"><span>“</span><p>Кунфу — это мастерство, достигнутое через время, труд и преданность делу.</p></div>
            </div>
          </section>

          <section id="strategy" className="case-section strategy-section">
            <div className="section-number">03</div>
            <div className="section-main">
              <SectionLabel>Narrative architecture</SectionLabel>
              <h2>Одна идея.<br /><em>Пять доказательств.</em></h2>
              <div className="chapter-list">{chapters.map((chapter) => <article key={chapter.number}><span>{chapter.number}</span><div><h3>{chapter.title}</h3><p>{chapter.text}</p></div><b>↗</b></article>)}</div>
            </div>
          </section>

          <section id="system" className="case-section system-section">
            <div className="section-number">04</div>
            <div className="section-main">
              <SectionLabel>Design system</SectionLabel>
              <div className="system-heading"><h2>Тёмная сцена.<br /><em>Живой акцент.</em></h2><p>Сдержанный luxury-язык, в котором каждый красный штрих работает как печать подлинности.</p></div>
              <div className="palette-row"><span className="swatch swatch-ink">INK<br /><small>#171412</small></span><span className="swatch swatch-red">CINNABAR<br /><small>#A54535</small></span><span className="swatch swatch-paper">PAPER<br /><small>#EEE7DA</small></span></div>
              <div className="screen-grid"><MiniDeck label="THE IDEA" variant="dark" /><MiniDeck label="THE SYSTEM" variant="light" /><MiniDeck label="THE ASK" variant="accent" /></div>
            </div>
          </section>

          <section id="outcome" className="case-section outcome-section">
            <div className="section-number">05</div>
            <div className="section-main">
              <SectionLabel>Результат</SectionLabel>
              <h2>История,<br /><em>готовая к разговору.</em></h2>
              <div className="outcome-stat"><strong>12</strong><span>слайдов, которые<br />собирают проект<br />в одно целое</span></div>
              <div className="outcome-grid"><p className="large-copy">Интерактивный pitch deck стал не финальной точкой, а первым публичным артефактом проекта — его можно показать инвестору, партнёру или будущему участнику сообщества.</p><a href="#top" className="outline-cta">Вернуться к началу <span>↑</span></a></div>
            </div>
          </section>

          <footer className="case-footer"><div><span className="case-logo"><span>MK</span> МИР КУНФУ</span><p>Сделано, чтобы идеи<br />обретали форму.</p></div><div className="footer-right"><span>OPEN FOR COLLABORATION</span><a href="mailto:hello@mir-kunfu.ru">hello@mir-kunfu.ru ↗</a></div></footer>
        </div>
      </div>
    </main>
  )
}
