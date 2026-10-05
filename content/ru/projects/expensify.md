---
title: "Expensify — open-source вклад"
description: "25 смерженных pull request’ов в production-приложение Expensify на React Native — исправления и фичи в отчётах о расходах, поиске, офлайн-сценариях и управлении воркспейсами."
year: 2026
role: "Open-source контрибьютор"
stack: [TypeScript, React Native, React Native Web, Onyx, Jest]
cover: /images/projects/expensify.jpg
featured: true
order: 1
links:
  live: "https://new.expensify.com"
  source: "https://github.com/Expensify/App/pulls?q=is%3Apr+author%3Ayusufdeveloper2903"
metrics:
  - label: "Смерженных PR"
    value: "25"
  - label: "Платформы"
    value: "Web · iOS · Android"
  - label: "Контрибьючу с"
    value: "мая 2026"
---

## Контекст

[Expensify](https://github.com/Expensify/App) — open-source приложение для учёта расходов и чата на React Native и React Native Web, которым пользуются миллионы людей в вебе, на iOS и Android. Контрибьюторы берут задачи из публичной очереди, пишут proposal и выпускают решение через строгий review и QA.

## Над чем я работал

- **Отчёты о расходах и дубликаты** — скрыл предупреждения о дубликатах в IOU-отчётах, исправил «Keep selected» для дубликатов в тредах транзакций, сохранил возможность отправки черновиков с несколькими расходами.
- **Поиск и оптимистичные обновления** — исправил optimistic snapshot поиска, чтобы результаты SmartScan оставались согласованными, исправил перемещения scan-failed и мерцание строк расходов.
- **Воркспейсы и Expensify Card** — запретил удаление участников с активной Expensify Card, отключил платёжные действия при выключенных платежах, добавил отображение GL-кодов категорий.
- **Навигация и UX** — исправил цикл кнопки «назад» после копилотинга в агента, сохранение текущей вкладки для `exitTo`-ссылок, наложение офлайн-индикатора и safe-area.

## Чему это научило

Работа в большой зрелой кодовой базе требует уважать её паттерны: оптимистичные данные на Onyx, offline-first поведение, строгая типизация и тесты для каждого изменения — и proposal’ы, которые ревьюеры могут быстро одобрить.
