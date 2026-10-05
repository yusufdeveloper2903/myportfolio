---
title: "Load Up — TMS va dispatch board"
description: "Yuk tashish kompaniyasi uchun yirik transport boshqaruv tizimi: jonli load board, reyslar, park texnik xizmati, xavfsizlik monitoringi, buxgalteriya va HR — bitta React ilovada."
year: 2026
role: "Frontend muhandis"
company: "Longhorn Logistics Group"
stack: [React 19, TypeScript, Vite 8, TanStack Router, TanStack Query, TanStack Table, TanStack Virtual, Zustand, STOMP/WebSocket, WebRTC, MapLibre, Leaflet, Tailwind CSS 4, Vitest]
cover: /images/projects/load-up/cover.jpg
featured: true
order: 3
confidential: true
metrics:
  - label: "Kod bazasi"
    value: "~3 100 fayl"
  - label: "Feature modullar"
    value: "24"
  - label: "Mening commitlarim"
    value: "250+"
gallery:
  - src: /images/projects/load-up/dashboard.jpg
    alt: "Operatsion dashboard: KPI’lar va 600+ haydovchining jonli xaritasi"
    caption: "Operatsion dashboard: KPI’lar va 600+ haydovchining jonli xaritasi"
  - src: /images/projects/load-up/update-board.jpg
    alt: "Update Board: park holati, tirkamalar va joylashuvlar bitta virtualizatsiyalangan jadvalda"
    caption: "Update Board: park holati, tirkamalar va joylashuvlar bitta virtualizatsiyalangan jadvalda"
  - src: /images/projects/load-up/trips.jpg
    alt: "Reyslar: yuklash, yetkazish va dispetcherlik holati"
    caption: "Reyslar: yuklash, yetkazish va dispetcherlik holati"
  - src: /images/projects/load-up/route-planner.jpg
    alt: "HERE Maps’da tarozi punktlari bilan yuk mashinasi marshrut rejalashtiruvchisi"
    caption: "HERE Maps’da tarozi punktlari bilan yuk mashinasi marshrut rejalashtiruvchisi"
---

## Mahsulot

Load Up yuk tashish kompaniyasini boshidan oxirigacha boshqaradi. Dispetcherlar jonli board’da yuklarni bron qiladi va kuzatadi; park va texnik xizmat jamoalari mashinalar, work order’lar va ko‘riklarni boshqaradi; xavfsizlik bo‘limi hodisalarni video bilan kuzatadi; buxgalteriya hisob-kitob va ish haqini yuritadi — bularning hammasi ko‘plab bo‘limlar har kuni ishlatadigan bitta veb-ilovada.

## Mening rolim

Jamoaga 2026-yil iyunida qo‘shildim va qat’iy qoidalarga ega katta, tez rivojlanayotgan kod bazasida board, fleet va safety modullari bo‘yicha funksiyalar chiqaraman.

## Arxitektura

- **React 19 + TanStack Router** — fayl asosidagi route’lar va avtomatik code splitting (~210 ta route fayli).
- **Feature-sliced domenlar** — 24 ta modulning har biri o‘z `api`, `components`, `hooks`, `schemas` va store’iga ega.
- **Server holati** TanStack Query va optimistik yangilanishlar bilan; client holati Zustand bilan; formalar react-hook-form va Zod bilan.
- **Batafsil huquqlar** — yuzlab komponentlarda ishlatiladigan markaziy huquqlar katalogi.

## E’tiborga loyiq jihatlar

- **Hammasi jonli** — STOMP/WebSocket kanallari load board, yuklar, bildirishnomalar va xavfsizlik ma’lumotlarini sinxron saqlaydi; RingCentral WebRTC qo‘ng‘iroqlari ilovaga o‘rnatilgan.
- **Katta ma’lumot, silliq UI** — umumiy virtualizatsiyalangan jadval (TanStack Table + Virtual) va klasterlash hamda fazoviy indeksli xaritalar.
- **Ko‘p tabda to‘g‘rilik** — operator faolligi Web Locks va BroadcastChannel yordamida faqat bitta tabdan yuboriladi.
- **Tez fikr-mulohaza** — Vitest node va jsdom loyihalariga bo‘lingan, test to‘plami 8,5 s dan 3,65 s gacha qisqargan.
