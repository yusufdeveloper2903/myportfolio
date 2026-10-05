---
title: Portfolio platformasi
description: Batafsil case study’lar, skrinshot galereyalari, aloqa formasi va ⌘K buyruqlar menyusiga ega ko‘p tilli, statik generatsiya qilingan portfolio — oddiy landing emas, kichik mahsulot sifatida qurilgan.
year: 2026
role: Dizayn va dasturlash
stack: [Nuxt 4, TypeScript, Nuxt Content, Tailwind CSS v4, i18n, Vitest]
cover: /images/projects/portfolio.jpg
order: 11
links:
  source: https://github.com/yusufdeveloper2903/myportfolio
---

## Muammo

Oldingi portfoliom bitta Vue 2 sahifadan iborat edi: kontent shablonlarga qattiq yozilgan, SEO yo‘q, haqiqiy loyihalarni batafsil tasvirlashning imkoni yo‘q, build esa zamonaviy Node’da ishlamay qolgan edi.

## Yondashuv

- **Nuxt 4 bilan statik generatsiya** — uch tildagi har bir sahifa oldindan HTML’ga render qilinadi, shuning uchun bir zumda ochiladi va to‘liq indekslanadi.
- **Kontent — bu ma’lumot** — loyihalar va tajriba Nuxt Content’da Zod sxemalari bilan tekshiriladigan Markdown/YAML fayllar. Yangi case study qo‘shish uchun komponentga tegish shart emas.
- **Halol case study’lar** — tijoriy loyihalar yopiq deb belgilangan, kompaniya reglamenti tufayli kod ochiq emasligi haqida izoh bor, skrinshotlarda shaxsiy ma’lumotlar xiralashtirilgan.
- **Uch til** — ingliz, o‘zbek va rus tillari, til prefiksli marshrutlar, `hreflang` teglari va tarjima qilinmagan kontent uchun inglizcha zaxira.
- **Dizayn tizimi** — Tailwind CSS v4 ustida semantik rang tokenlari, avtomatik yorug‘/qorong‘i mavzu va reduced-motion’ni hurmat qiluvchi animatsiyalar.
- **Har doim ishlaydigan aloqa** — xatni Gmail yoki pochta ilovasida tayyorlab beruvchi qisqa forma, telefon va emailni nusxalash.
- **Klaviatura birinchi** — istalgan sahifa, loyiha yoki amalga o‘tish uchun `⌘K` buyruqlar menyusi.

## Arxitektura

```txt
content/<locale>/{projects,experience}   →  tiplangan kolleksiyalar
app/composables/useLocalizedContent.ts   →  zaxira tilli so‘rovlar
app/pages/*                              →  ma’lumot olish, bo‘limlarni yig‘ish
app/components/{home,project,site,ui}    →  taqdimot komponentlari
server/routes/{sitemap.xml,robots.txt}   →  oldindan render qilingan SEO fayllar
```

## Natija

Tez, qulay va yangilash oson sayt — yangi loyiha qo‘shish har bir til uchun bitta Markdown fayl yozishdan iborat.
