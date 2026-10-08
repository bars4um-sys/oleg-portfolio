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

## Бренд: знак «Студия 40» и связки (08.10.2026)
- Единственный источник геометрии знака — `components/brand/mark.tsx`: сетка `0 0 480 260`, две `<path>` (Ч и О), заливка `currentColor` (цвет задаётся контекстом: на тёмном светлый, на светлом графит), опция `bold` добавляет `stroke-width="8"` для малых размеров. Экспортируется `MARK_RATIO = 480/260`.
- `components/brand/lockup.tsx` (`BrandLockup`) собирает логотип из знака и слова «СТУДИЯ». Все размеры считаются от одной переменной — **высоты знака** (`height`): вертикальная связка — кегль надписи `0.272h`, отбивка `0.145h`; горизонтальная — кегль `0.875h` (или `textSize`), отбивка `0.6h`.
- Слово «СТУДИЯ» рендерится шестью отдельными `<span>` (иначе `justify-between` не работает). Вертикальная связка растягивает их ровно по ширине знака (`w-full justify-between`); горизонтальная использует натуральную ширину с трекингом `0.18em` и `margin-right:-0.18em` для компенсации хвостового пробела.
- Резервная горизонтальная связка (`variant="horizontal"`) на сайте не используется — лежит для будущих носителей.
- Растровые ассеты (favicon/apple-icon/OG) не «нарисованы вручную», а генерируются из того же знака скриптами `brand/build-icons.py` и `brand/build-og.py` через headless Chrome. Значит, при правке геометрии знака ассеты надо перегенерировать — см. `brand/README.md`.

## Мобильная навигация (08.10.2026)
- `components/mobile-nav.tsx` (`"use client"`) — единственный клиентский интерактив шапки. `SiteHeader` остаётся серверным компонентом и передаёт в `MobileNav` массив `NAV` (label/href) как проп.
- Бургер (`lucide-react` `Menu`/`X`) видим только до `md` (`md:hidden`), панель — `absolute inset-x-0 top-full`, т.е. позиционируется от `<header>` (у него `sticky` → он containing block). Так панель садится ровно под шапку без расчёта её высоты.
- Фон панели — `bg-background` (непрозрачный) + `border-b border-border/60`; вход — `animate-in fade-in slide-in-from-top-2 duration-200 motion-reduce:animate-none`.
- Состояние — локальный `useState(open)`; закрытие по Escape, клику вне (`pointerdown` на `document`, проверка `rootRef.contains`) и клику по ссылке. Слушатели вешаются только при `open`.
- Паттерн кнопок проекта: `@/components/ui/button` (Base UI) с `render={<a .../>}` + `nativeButton={false}` для ссылок-кнопок.

## Статический экспорт
- `output: 'export'` → `out/`. `images.unoptimized: true` (нужно для export). `trailingSlash: true` (каталоги index.html).
- basePath = `process.env.NEXT_PUBLIC_BASE_PATH` (авто из имени репо в CI).
