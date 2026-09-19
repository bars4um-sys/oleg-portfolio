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

## Ambient light + neuro-mesh + film grain (19.09.2026)
- **Ambient light** — чисто CSS-псевдоэлементы/дивы с большим янтарным radial-градиентом (`blur`, `transform/opacity` анимация). Не привязан к курсору. Позиция и скорость задаются per-section классами (`.ambient-light-hero`, `.ambient-light-cases`, …).
- **NeuroTexture** — SVG mesh из узлов и линий. Теперь принимает `intensity` (`hero`/`cases`/`minimal`/`light`/`process`/`cta`), который задаёт базовую прозрачность линий/узлов и количество одновременных импульсов. Импульсы реализованы через CSS-классы (`neuro-line-active`, `neuro-node-active`) + `setInterval` для смены активных элементов; SVG DOM не пересоздаётся.
- **Aurora** — обёртка над `NeuroTexture` + движущиеся блобы. Прокидывает `intensity` в сетку и имеет `staticBlobs` для финального CTA.
- **Film grain** — глобальный `fixed::before` слой на `<body>` (`app/layout.tsx`) с `opacity: var(--fx-grain-opacity)` (2.5%), `pointer-events: none`, без анимации. Использует inline SVG noise (без растровой загрузки).
- **Hover карточек** — класс `.case-card-hover` + `.case-card-image`/`.case-card-arrow`/`.case-card-glow`. Все переходы через `transform`/`opacity`, easing `cubic-bezier(0.22, 1, 0.36, 1)`, длительность 500–700мс. На touch-устройствах hover не применяется.
- **Переменные** — все ключевые числа (opacity, размер, скорость, яркость линий/узлов, grain) вынесены в `:root` CSS-переменные (`--fx-*`) в `app/globals.css`.

## Статический экспорт
- `output: 'export'` → `out/`. `images.unoptimized: true` (нужно для export). `trailingSlash: true` (каталоги index.html).
- basePath = `process.env.NEXT_PUBLIC_BASE_PATH` (авто из имени репо в CI).
