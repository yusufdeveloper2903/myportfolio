---
title: "Expensify — open-source hissalar"
description: "Expensify’ning production React Native ilovasiga 25 ta merge qilingan pull request — xarajat hisobotlari, qidiruv, offline oqimlar va workspace boshqaruvi bo‘yicha tuzatishlar va funksiyalar."
year: 2026
role: "Open-source contributor"
stack: [TypeScript, React Native, React Native Web, Onyx, Jest]
cover: /images/projects/expensify.jpg
featured: true
order: 1
links:
  live: "https://new.expensify.com"
  source: "https://github.com/Expensify/App/pulls?q=is%3Apr+author%3Ayusufdeveloper2903"
metrics:
  - label: "Merge qilingan PR’lar"
    value: "25"
  - label: "Platformalar"
    value: "Web · iOS · Android"
  - label: "Hissa qo‘shish boshlangan"
    value: "2026-yil may"
---

## Kontekst

[Expensify](https://github.com/Expensify/App) — React Native va React Native Web’da qurilgan, web, iOS va Android’da millionlab foydalanuvchiga xizmat qiluvchi open-source xarajatlarni boshqarish va chat ilovasi. Hissa qo‘shuvchilar ochiq navbatdan issue tanlab, taklif (proposal) yozadi va qat’iy review hamda QA jarayonidan o‘tkazib yechimni chiqaradi.

## Nimalar ustida ishladim

- **Xarajat hisobotlari va dublikatlar** — IOU hisobotlarida dublikat ogohlantirishlarini yashirish, tranzaksiya thread’larida “Keep selected” ni tuzatish, bir nechta xarajatli draft’larni yuboriladigan holatda saqlash.
- **Qidiruv va optimistik yangilanishlar** — SmartScan natijalari izchil bo‘lishi uchun optimistik Search snapshot’ini to‘g‘rilash, scan-failed ko‘chirishlar va xarajat qatorlari miltillashini tuzatish.
- **Workspace va Expensify Card** — faol Expensify Card egasi bo‘lgan a’zoni o‘chirishni bloklash, to‘lovlar o‘chiq bo‘lganda to‘lov amallarini o‘chirish, kategoriyalar uchun GL kodlarni ko‘rsatish.
- **Navigatsiya va UX** — agent’ga copilot qilingandan keyingi “orqaga” tugmasi siklini tuzatish, `exitTo` havolalarida joriy tabni saqlash, offline indikator va safe-area ustma-ust tushishini tuzatish.

## Nimani o‘rgatdi

Katta va yetuk kod bazasida ishlash uning qoidalarini hurmat qilishni talab qiladi: Onyx bilan optimistik ma’lumotlar, offline-first xatti-harakat, har bir o‘zgarish uchun qat’iy tiplar va testlar — hamda reviewer’lar tez tasdiqlay oladigan takliflar yozish.
