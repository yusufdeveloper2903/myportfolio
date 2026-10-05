---
title: "Customer Management Platform"
description: "Модульная админ-платформа для управления клиентами — ролевой доступ, календари, графики, карты и мультиязычный интерфейс на Vue 3 и TypeScript."
year: 2024
role: "Frontend-разработка"
stack: [Vue 3, TypeScript, Pinia, CASL, PrimeVue, Tailwind CSS, ECharts, Leaflet, Vitest]
cover: /images/projects/customer-platform.jpg
order: 7
links:
  source: "https://github.com/yusufdeveloper2903/Customer-Management-Platform"
---

## Задача

Бизнесу — например, банкам и ритейлу — нужна единая админка для клиентов, расписаний и аналитики с разными правами для разных сотрудников.

## Что я сделал

- **Модульная архитектура** — каждый домен живёт в своём модуле со своими маршрутами и подключается к роутеру приложения.
- **Аутентификация и права** — JWT-сервис авторизации и ролевая модель доступа на CASL.
- **Богатый UI** — таблицы с пагинацией, календари (FullCalendar), графики (ApexCharts, ECharts), карты (Leaflet), редактор текста и формы с валидацией (Vuelidate).
- **Layout’ы** — вертикальная и горизонтальная навигация, сворачиваемый сайдбар, светлая/тёмная тема и i18n.
- **Качество** — TypeScript, Pinia-сторы с тестами (Vitest, Pinia testing), строгие правила ESLint.

## Стек

Vue 3 (Composition API), TypeScript, Pinia, Vite, PrimeVue, Tailwind CSS.
