---
title: "Tasker — GitHub issue’lar bilan ishlash"
description: "Gavjum open-source issue navbatini shaxsiy ish jarayoniga aylantiruvchi dashboard — help wanted, eslatmalar, biriktirilgan va jarayondagi issue’lar, qaydlar va statuslar bilan."
year: 2026
role: "Dizayn va dasturlash"
stack: [React, Vite, Supabase, GitHub API]
cover: /images/projects/tasker.jpg
order: 6
links:
  live: "https://todo-tasker-one.vercel.app"
---

## Muammo

Katta open-source loyihaga hissa qo‘shish o‘nlab issue’larni bir vaqtda kuzatishni anglatadi: yangi “Help Wanted”lar, eslatmalar, biriktirishlar va jarayondagi ishlar. GitHub bildirishnomalarining o‘zi aniq manzara bermaydi.

## Nima qildim

- **Issue yo‘laklari** — Help Wanted, Mentioned, To-do, Assigned, In Progress va Complete tablari, har biri o‘z GitHub so‘roviga ega.
- **Shaxsiy qatlam** — har bir issue uchun shaxsiy qaydlar va statuslar, Supabase’da saqlanadi va qurilmalar o‘rtasida sinxronlanadi.
- **Signallar** — o‘qilmagan belgilari, bildirishnoma va eslatmalarni kuzatish — muhim narsa qolib ketmaydi.
- **Profil va mavzu** — foydalanuvchi GitHub username sozlamasi va yorug‘/qorong‘i mavzu.

## Arxitektura

Feature’ga asoslangan React tuzilmasi (`features/issues`, `features/profile`, `features/theme`): har bir ma’lumot vazifasi alohida hook — yangi yo‘lak qo‘shish mavjudlariga tegmaydi.
