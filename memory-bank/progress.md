# Progress

## Работает
- Сборка `pnpm build` → exit 0, генерация `out/` с маршрутами `/`, `/scenario`, `/titanic`.
- Темы кейсов применены (theme-scenario/theme-titanic в HTML).
- Навигация: главная → кейсы (`/scenario/`, `/titanic/`), кейсы → главная (`/`).
- Ассеты (изображения кейсов, favicon) на месте.
- Git-репозиторий создан и запушен: `bars4um-sys/oleg-portfolio`.

## Известные особенности
- `Доп/` (вспомогательные материалы/отчёты) закоммичен — можно вынести в .gitignore при желании.
- Кейс 03 «Премиум-курс» — заглушка (locked), ведёт на `#contact`.
- Контактные ссылки (Telegram `t.me/`, mailto) — плейсхолдеры.

## Эволюция решений
- Сначала пытался `onlyBuiltDependencies` в pnpm-workspace.yaml — не сработало (старое имя ключа в pnpm 11; нужно `allowBuilds`/`dangerouslyAllowAllBuilds`).
- Гипотеза про `CI=true` отвергнута (CI=0 не помогло); причина — pnpm `verifyDepsBeforeRun` + игнор build-скриптов.
