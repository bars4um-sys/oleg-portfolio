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
- **Важно (фото-фикс):** `next/image` и обычные `<img>` НЕ применяют basePath автоматически при static export — добавлен helper `asset()` в `lib/utils.ts` (префиксит `process.env.NEXT_PUBLIC_BASE_PATH`) и применён ко всем src картинок (cases, hero, author, scenario/hero, scenario/script-frame, titanic/hero, titanic/browser-frame). Также префикс проставлен для favicon в `app/layout.tsx` (metadata.icons). Без этого все картинки 404-ились на проектном Pages-сайте.

## Контакты (правки)
- Telegram-кнопка в футере (`Написать Олегу в Telegram`) → `https://t.me/OlegUmaPalata` (рабочая).
- Hero: убрана кнопка «Написать в Telegram» (осталась только «Смотреть кейсы»).
- Header «Обсудить проект» → `#contact` (раздел «Контакты»).
- Header nav: добавлен пункт «Контакты» → `#contact`.
- Footer: «Посмотреть контакты» → «Написать в ВК» (icon MessageCircle); добавлена «Написать в MAX» (icon MessageSquare).
- **ВК (`https://vk.com/`) и MAX (`https://max.ru/`) — заглушки**, ждут реальные ники/ссылки от владельца.

## Статус
- **Сайт живой:** https://bars4um-sys.github.io/oleg-portfolio/ (репо: `bars4um-sys/oleg-portfolio`).
- Все 3 страницы рендерятся; картинки и favicon загружаются (HTTP 200); nav и CTA обновлены.
- **Ожидается от владельца:** ссылки на ВК и MAX для финализации двух кнопок.
