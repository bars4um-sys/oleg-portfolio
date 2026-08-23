# Портфолио Олега Чумаченко

Многостраничный сайт-портфолио на **Next.js (App Router) + Tailwind CSS v4**.
Состоит из главной страницы и трёх подробных кейс-стади:

| Страница | Маршрут | Тема |
| --- | --- | --- |
| Главная (портфолио) | `/` | тёмная «эспрессо & шампань» |
| Кейс 01 · «Адаптированный сценарий» | `/scenario` | светлая «рукопись» (paper / ink / red) |
| Кейс 02 · «Мир кунфу» | `/kunfu` | светлая «галерея» (бумага / тушь / киноварь, Newsreader + mono) |
| Кейс 03 · «Titanic English» | `/titanic` | светлая «кино» (navy + gold) |

Каждый кейс сохраняет свою визуальную тему благодаря scoped CSS-переменным
(`.theme-scenario`, `.theme-kunfu`, `.theme-titanic`), не затрагивая тёмную тему портфолио.

## Локальный запуск

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Сборка статического экспорта (в `out/`):

```bash
pnpm build
```

## Деплой на GitHub Pages

Репозиторий настроен на автодеплой через GitHub Actions (`.github/workflows/deploy.yml`):

- при пуше в `main` сайт собирается как статический экспорт и публикуется на GitHub Pages;
- `basePath` определяется автоматически по имени репозитория
  (для `user.github.io` — корень, для проектного репозитория — `/<repo>`).

URL сайта: `https://och-studio.ru/` (GitHub Pages c кастомным доменом;
`bars4um-sys.github.io/oleg-portfolio/` → 301 на основной домен).

## Структура

```
app/
  layout.tsx            # корневой layout, загрузка всех шрифтов
  page.tsx              # главная (портфолио)
  scenario/             # кейс 01
    layout.tsx          # metadata кейса
    page.tsx            # композиция секций кейса (theme-scenario)
  kunfu/                # кейс 02
    layout.tsx
    page.tsx            # (theme-kunfu)
  titanic/              # кейс 03
    layout.tsx
    page.tsx            # (theme-titanic)
components/
  cases.tsx             # карточки кейсов со ссылками на /scenario, /kunfu и /titanic
  case-study/
    scenario/           # компоненты кейса 01
    kunfu/              # компоненты кейса 02
    titanic/            # компоненты кейса 03
app/globals.css         # токены тем + scoped .theme-scenario / .theme-kunfu / .theme-titanic
```
