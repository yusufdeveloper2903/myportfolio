---
title: "Real vaqtli avtopark boshqaruv platformasi"
description: "AQShdagi logistika platformasining frontend qismiga rahbarlik: yuk mashinalarini jonli kuzatish, WebRTC asosidagi dispetcherlik va katta hajmdagi ma’lumotlar vizualizatsiyasi."
year: 2024
role: "Frontend lead · Longhorn Logistics Group"
stack: [React 19, Next.js, TypeScript, TanStack Query, Zustand, WebRTC, WebSocket, HERE Maps, Playwright]
cover: /images/projects/fleet-platform.jpg
featured: true
order: 2
metrics:
  - label: "Virtualizatsiya qilingan qatorlar"
    value: "10k+"
  - label: "Javob vaqti"
    value: "< 100 ms"
  - label: "Jonli kanallar"
    value: "WebSocket · WebRTC"
---

> Tijoriy mahsulot — manba kodi va skrinshotlar maxfiy.

## Muammo

Dispetcherlar bir vaqtning o‘zida yuzlab yuk mashinalarini boshqaradi. Ularga jonli joylashuv, haydovchilar bilan tezkor aloqa va yillik telemetriya bilan dashboard’lar kerak — ekranda qancha ma’lumot bo‘lishidan qat’i nazar interfeys bir zumda ishlashi shart.

## Mening rolim

Frontend’ga rahbarlik qilaman: arxitektura qarorlari, code review, tezlik bo‘yicha ishlar va backend hamda product jamoalari bilan birga funksiyalarni yetkazish.

## Arxitektura va yechimlar

- **Real vaqt qatlami** — jonli GPS joylashuv va statuslar uchun WebSocket oqimlari, dispetcher qo‘ng‘iroqlari uchun WebRTC, faqat o‘zgargan qismni yangilaydigan event-driven UI.
- **Xaritalar** — HERE Maps / Leaflet’da jonli kuzatuv va katta parklar uchun klasterlash.
- **Tezlik** — 10 000+ qatorli jadvallar uchun virtualizatsiya, vaqt qatorlari grafiklari uchun LTTB downsampling, code-splitting va lazy loading.
- **Ma’lumotlar** — server holati va kesh uchun TanStack Query, client holati uchun Zustand.
- **Qo‘llab-quvvatlash** — Feature-Sliced Design, qat’iy TypeScript, CI’da Vitest va Playwright.

## Natija

Katta hajmdagi ma’lumotlarda ham native’dek ishlaydigan platforma va yangi funksiyalarni boshqa modullarga tegmasdan qo‘shish mumkin bo‘lgan kod bazasi.
