# System Patterns

## Архитектура тем (ключевое решение)
Три проекта имели РАЗНЫЕ темы на `:root`. При слиянии они конфликтовали бы. Решение:
- Портфолио: токены в `:root` (тёмная тема) — без изменений.
- Кейс scenario: токены в `.theme-scenario` (color-scheme: light + paper/ink/redline).
- Кейс titanic: токены в `.theme-titanic` (color-scheme: light + navy).
- Страницы кейсов оборачивают контент в `<div className="theme-... min-h-screen bg-background text-foreground">`.

## Шрифты
- Root layout грузит 5 шрифтов с УНИКАЛЬНЫМИ CSS-переменными (`--font-cormorant`, `--font-inter`, `--font-fraunces`, `--font-newsreader`, `--font-plex-mono`).
- `@theme` (non-inline) определяет `--font-sans/serif/mono` как `var(...)`, что позволяет переопределять `--font-serif`/`--font-mono` per-theme (`.theme-scenario { --font-serif: var(--font-newsreader) }`).

## Именование компонентов
- `components/case-study/scenario/*` и `components/case-study/titanic/*` — изолированные наборы; общие `@/components/ui/button`, `@/lib/utils`.

## Reveal: каскадная анимация появления
- `components/reveal.tsx` (client) — IntersectionObserver добавляет класс `.is-visible`; `.reveal` в CSS имеет `opacity 0 → 1` + `translateY(28px → 0)`, глобальная длительность `0.8s`.
- Опциональные пропсы: `delay` (задержка появления), `duration` (перекрывает глобальную `0.8s` через inline `transitionDuration` — используется только на стартовом hero, чтобы ускорить показ, не трогая остальные секции), `as` (тег), `className`.

## Светлая секция на тёмной главной (`.theme-services`, 19.09.2026)
- Чтобы вынести одну секцию главной в светлую тему, не трогая `:root`, используется локальный scope-класс по образцу кейсов: `components/services.tsx` имеет `className="theme-services …"`, а токены объявлены в `app/globals.css` как `.theme-services { … }` (color-scheme: light + своя палитра `#f2e8d8`/`#181512`/`#62594f`/`#d96a2b`).
- Механизм тот же, что у `.theme-scenario`/`.theme-titanic`/`.theme-kunfu`: CSS-переменные токенов переопределяются локально внутри обёртки; компоненты главной (со ссылками на `bg-card`/`text-primary`/`text-muted-foreground`/`border-border`) подхватывают их автоматически.

## Статический экспорт
- `output: 'export'` → `out/`. `images.unoptimized: true` (нужно для export). `trailingSlash: true` (каталоги index.html).
- basePath = `process.env.NEXT_PUBLIC_BASE_PATH` (авто из имени репо в CI).
