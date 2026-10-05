---
title: "Dyzlix — Smart Fuel System"
description: "AQSh yuk tashish parklari uchun yoqilg‘i boshqaruvi platformasi: tavsiya etilgan yoqilg‘i shoxobchalari, bronlar, karta tranzaksiyalari, parkni jonli kuzatish va tejash analitikasi."
year: 2024
role: "Frontend lead · noldan qurganman"
company: "Longhorn Logistics Group"
stack: [Vue 3.5, TypeScript, Vite, Pinia, TanStack Query, TanStack Table, TanStack Virtual, HERE Maps, D3, STOMP/WebSocket, Tailwind CSS 4, Vitest, Playwright]
cover: /images/projects/dyzlix/cover.jpg
featured: true
order: 1
confidential: true
metrics:
  - label: "Mening commitlarim"
    value: "1 100+"
  - label: "Tarixdagi ulush"
    value: "52%"
  - label: "Unit testlar"
    value: "320+"
gallery:
  - src: /images/projects/dyzlix/tracking.jpg
    alt: "Jonli kuzatuv: virtualizatsiyalangan mashinalar ro‘yxati va HERE Maps klasterlari"
    caption: "Jonli kuzatuv: virtualizatsiyalangan mashinalar ro‘yxati va HERE Maps klasterlari"
  - src: /images/projects/dyzlix/fuel-book.jpg
    alt: "Fuel Book: tavsiya etilgan shoxobchalar, yoqilg‘i darajasi va bron amallari"
    caption: "Fuel Book: tavsiya etilgan shoxobchalar, yoqilg‘i darajasi va bron amallari"
  - src: /images/projects/dyzlix/dashboard.jpg
    alt: "Analitika: xarajat, tejash, MPG va idling"
    caption: "Analitika: xarajat, tejash, MPG va idling"
---

## Mahsulot

Yoqilg‘i — yuk tashish kompaniyasining eng katta xarajatlaridan biri. Dyzlix marshrut, narx va mavjudlik bo‘yicha eng yaxshi yoqilg‘i shoxobchalarini tavsiya qiladi. Booker’lar ularni haydovchilarga biriktiradi, karta tranzaksiyalari (EFS / Relay) bronlar bilan solishtiriladi, menejerlar esa tejash, MPG va idling’ni bitta dashboard’da ko‘radi.

## Mening rolim

**Dyzlix frontendini noldan o‘zim qurganman va uni to‘liq boshqaraman.** Kod bazasini 2024-yil oktyabrida boshladim va uning atrofidagi hamma narsani o‘zim sozladim:

- **Arxitektura** — `app → pages → modules → shared` qatlamli tuzilmasi, ma’lumot oqimi qoidalari va har bir feature amal qiladigan modul shabloni.
- **Infratuzilma** — Vite build, TypeScript konfiguratsiyasi, staging va production uchun nginx orqali xizmat ko‘rsatuvchi multi-stage Docker image’lar, environment boshqaruvi va reliz versiyalash.
- **Dasturchi tajribasi va sifat** — ESLint va Prettier, Conventional Commits, type-check, design-token, import chegaralari va bundle byudjeti darvozalariga ega git hook’lar, unit testlar va Playwright smoke harness.
- **Dizayn tizimi** — umumiy UI kit, design tokenlar va qorong‘i mavzu.
- **Funksiyalar** — mahsulotning katta qismi: dashboard, Fuel Book, jonli tracking board, kartalar, tranzaksiyalar, idling, huquqlar va sozlamalar.

Bugun men kod bazasining asosiy muallifiman (1 100+ commit) va yangi funksiyalar qanday qurilishi bo‘yicha asosiy mas’ulman.

## Arxitektura

- **Qatlamli tuzilma** — `app → pages → modules → shared`, Feature-Sliced Design’ga yaqin. Boundaries skripti import yo‘nalishini nazorat qiladi va faqat *yangi* buzilishlarda xato beradi.
- **Hamma joyda bitta ma’lumot oqimi** — page → view → composable → `shared/api` dagi tiplangan query hook, server holati uchun TanStack Query.
- **Huquqlarga sezgir UI** — ~65 ta `CAN_*` huquq va provayder kirishi (EFS / Relay) har bir ko‘rinishni boshqaradi.
- **Real vaqt** — yoqilg‘i bildirishnomalari va karta hodisalari uchun WebSocket ustida STOMP.

## E’tiborga loyiq jihatlar

- **Jonli tracking board** — virtualizatsiya qilingan mashinalar ro‘yxati, HERE Maps markerlari va marshrutlari, marshrutni qayta ijro etish va D3 yoqilg‘i darajasi grafiklari.
- **Pre-push hook’dagi sifat darvozalari**: type-check, design-token nazorati (yangi xom ranglar taqiqlangan), import chegaralari, ~200 KB gzip bundle byudjeti, litsenziyalar ro‘yxati va `pnpm audit`.
- **Uzilishsiz relizlar** — build’lar kontent hash bilan belgilanadi; ochiq tablar keyingi navigatsiyada yangi relizni oladi va eskirgan chunk’lardan avtomatik tiklanadi.
- **Smoke harness** — har bir route 2 viewport × 2 mavzuda console xatolari, muvaffaqiyatsiz so‘rovlar va skrinshot farqlari bo‘yicha tekshiriladi.
- **17 ta ADR** asosiy arxitektura qarorlarini hujjatlashtiradi.
