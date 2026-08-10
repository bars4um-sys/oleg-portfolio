# Tech Context

## Стек
- Next.js 16.3.0 (App Router, Turbopack), React 19.2.4.
- Tailwind CSS v4 (`@import 'tailwindcss'` + `@theme`), shadcn-style `components/ui/button.tsx` (@base-ui/react).
- Шрифты: next/font/google.- Иконки: lucide-react.
- Менеджер пакетов: pnpm 11.10 (lockfile в репо).
- Node: локально v26.3, CI — 22.

## Команды
- `pnpm install`
- `pnpm dev` — http://localhost:3000
- `pnpm build` — статический экспорт в `out/`

## Деплой
- GitHub Actions (`.github/workflows/deploy.yml`): push в `main` → install → build (с авто basePath) → upload-pages-artifact → deploy-pages.
- URL: `https://bars4um-sys.github.io/oleg-portfolio/`

## Важные нюансы
- pnpm 11 больше не читает поле `pnpm` в package.json — настройки в `pnpm-workspace.yaml`.
- `msw` (транзитная) имеет build-скрипт → без `dangerouslyAllowAllBuilds` pnpm падает с `ERR_PNPM_IGNORED_BUILDS`.
