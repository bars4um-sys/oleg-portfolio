# Active Context

## Текущий статус
Проект объединён, собран (`pnpm build` — exit 0), закоммичен в git и запушен в репозиторий `bars4um-sys/oleg-portfolio`. Настроен автодеплой через GitHub Actions на GitHub Pages.

## Что сделано
- База портфолио в корень репозитория.
- Компоненты кейсов неймспейсы: `components/case-study/scenario/` и `.../titanic/` (избежали коллизий reveal/hero/section-label/cta-footer/brief-section).
- Импорты внутри кейсов переведены на неймспейсы (sed).
- Маршруты `app/scenario` и `app/titanic` с theme-обёртками.
- Шрифты (Cormorant Garamond, Inter, Fraunces, Newsreader, IBM Plex Mono) загружены в root layout.
- globals.css: токены кейсов вынесены в `.theme-scenario` / `.theme-titanic`; шрифты — в non-inline `@theme` (переопределяются per-theme).
- cases.tsx: ссылки на `/scenario` и `/titanic` через next/link.
- Хидеры кейсов: «назад» на `/`.
- next.config: `output: 'export'`, `trailingSlash: true`, basePath из `NEXT_PUBLIC_BASE_PATH`.
- Workflow `.github/workflows/deploy.yml`: автоопределение basePath по имени репо.
- pnpm-workspace.yaml: `dangerouslyAllowAllBuilds: true`, `verifyDepsBeforeRun: false` (обход `ERR_PNPM_IGNORED_BUILDS` для транзитного `msw`).

## Следующие шаги
- Дождаться завершения первого workflow-рана и проверить живой URL.
- При необходимости поправить basePath/ассеты по факту.
