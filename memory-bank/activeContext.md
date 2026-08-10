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
- Footer: «Посмотреть контакты» → «Написать в ВК» (icon MessageCircle); добавлена «Написать в MAX» (icon MessageSquare). Ссылки реальные: ВК `https://vk.me/oleg4um`, MAX `https://max.ru/u/f9LH...`.

## Страница кейса scenario (правки)
- Header: убрана «застревающая» надпись «СЦ. 01 / Кейс-стади · Портфолио». Вместо неё — back-link «← Все проекты» → `/#cases` (в стиле рукописи: font-mono, hover:text-redline, иконка ArrowLeft). Правый CTA — «Обсудить проект» → `/#contact`.
- Нумерация СЦ начинается со 2-го блока (hero = «INT.» без номера): brief=СЦ.01, process=СЦ.02, program=СЦ.03, author=СЦ.04, result=СЦ.05, metrics=СЦ.06 (раньше было 02..07).
- Блок «Автор» (СЦ.04): SectionLabel вынесен НАД двухколоночной сеткой (выровнен как в других блоках), grid получил `mt-8 md:mt-12`, у h2 убран `mt-4`.

## Последующие правки
- CTA на страницах кейсов (scenario + titanic): кнопка шапки и cta-footer → «Обсудить проект» → `/#contact` (блок контактов главной). Внешняя «Смотреть готовый сайт» (course.kinomagica.ru) у сценария осталась.
- Блок «Автор» (главная): удалены недостоверные регалии (8+/40+/×2.8) → декоративное трио иконок Clapperboard · Package · PenTool (без подписей/цифр).
- Hero: нейро-сетка обрезана на левые ~2/3 (`neuroRegion="top-0 bottom-0 left-0 right-1/3"`), чтобы не перекрывать портрет справа; золотые блобы — на весь блок.
- Карточки кейсов: контейнер `aspect-[16/10]` (совпадает с нативным соотношением скриншотов «сценария» 1440×900 / 1231×754).
- **Оптимизация изображений:** весь используемый растр → WebP (`cwebp -q 82`, ресайз под retina: скриншоты/фон 1280px, карточки 900px, premium 800px, мобильный без апскейла). Удалены 4 неиспользуемых PNG (~6.4МБ). `public/` ≈14.5МБ → ≈1МБ. Ссылки в коде обновлены (`.png`/`.jpg` → `.webp`), basePath через `asset()` сохранён.

## Статус
- **Сайт живой:** https://bars4um-sys.github.io/oleg-portfolio/ (репо: `bars4um-sys/oleg-portfolio`).
- Все 3 страницы рендерятся; картинки и favicon загружаются (HTTP 200); nav и CTA обновлены.
- Контакты (Telegram/ВК/MAX) — все ссылки реальные и рабочие.
