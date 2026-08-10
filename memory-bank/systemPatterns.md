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

## Статический экспорт
- `output: 'export'` → `out/`. `images.unoptimized: true` (нужно для export). `trailingSlash: true` (каталоги index.html).
- basePath = `process.env.NEXT_PUBLIC_BASE_PATH` (авто из имени репо в CI).
