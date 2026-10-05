---
title: "Tasker — работа с GitHub issues"
description: "Дашборд, превращающий загруженную очередь open-source задач в личный workflow — help wanted, упоминания, назначенные и задачи в работе с заметками и статусами."
year: 2026
role: "Дизайн и разработка"
stack: [React, Vite, Supabase, GitHub API]
cover: /images/projects/tasker.jpg
order: 8
links:
  live: "https://todo-tasker-one.vercel.app"
---

## Задача

Контрибьютинг в крупный open-source проект — это десятки задач одновременно: новые «Help Wanted», упоминания, назначения и работа в процессе. Одних уведомлений GitHub недостаточно для ясной картины.

## Что я сделал

- **Дорожки задач** — вкладки Help Wanted, Mentioned, To-do, Assigned, In Progress и Complete, у каждой свой запрос к GitHub.
- **Личный слой** — приватные заметки и статусы для каждой задачи, хранятся в Supabase и синхронизируются между устройствами.
- **Сигналы** — отметки о непрочитанном, отслеживание уведомлений и упоминаний, чтобы ничего не упустить.
- **Профиль и тема** — настройка GitHub username и светлая/тёмная тема.

## Архитектура

Feature-based структура на React (`features/issues`, `features/profile`, `features/theme`), где каждая задача по данным — отдельный хук; новые дорожки добавляются без изменения существующих.
