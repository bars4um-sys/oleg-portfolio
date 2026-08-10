# Портфолио Олега Чумаченко

Многостраничный сайт-портфолио на **Next.js (App Router) + Tailwind CSS v4**.
Состоит из главной страницы и двух подробных кейс-стади:

| Страница | Маршрут | Тема |
| --- | --- | --- |
| Главная (портфолио) | `/` | тёмная «эспрессо & шампань» |
| Кейс 01 · «Адаптированный сценарий» | `/scenario` | светлая «рукопись» (paper / ink / red) |
| Кейс 02 · «Titanic English» | `/titanic` | светлая «кино» (navy + gold) |

Каждый кейс сохраняет свою визуальную тему благодаря scoped CSS-переменным
(`.theme-scenario`, `.theme-titanic`), не затрагивая тёмную тему портфолио.

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

URL сайта: `https://<ваш-логин>.github.io/<repo>/`

## Структура

```
app/
  layout.tsx            # корневой layout, загрузка всех шрифтов
  page.tsx              # главная (портфолио)
  scenario/             # кейс 01
    layout.tsx          # metadata кейса
    page.tsx            # композиция секций кейса (theme-scenario)
  titanic/              # кейс 02
    layout.tsx
    page.tsx            # (theme-titanic)
components/
  cases.tsx             # карточки кейсов со ссылками на /scenario и /titanic
  case-study/
    scenario/           # компоненты кейса 01
    titanic/            # компоненты кейса 02
app/globals.css         # токены тем + scoped .theme-scenario / .theme-titanic
```
