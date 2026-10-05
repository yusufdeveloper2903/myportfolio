---
title: Portfolio platformasi
description: Case study’lar, blog va buyruqlar menyusiga ega, ko‘p tilli va statik generatsiya qilingan portfolio — oddiy landing emas, kichik mahsulot sifatida qurilgan.
year: 2026
role: Dizayn va full-stack dasturlash
stack: [Nuxt 4, TypeScript, Nuxt Content, Tailwind CSS v4, i18n]
cover: /images/projects/portfolio.png
order: 5
links:
  source: https://github.com/yusufdeveloper2903/myportfolio
---

## Muammo

Oldingi portfoliom bitta Vue 2 sahifadan iborat edi: kontent shablonlarga qattiq yozilgan, SEO yo‘q,
case study yoki maqola chop etishning imkoni yo‘q, build esa zamonaviy Node’da ishlamay qolgan edi.

## Yondashuv

- **Nuxt 4 bilan statik generatsiya** — har bir sahifa oldindan HTML’ga render qilinadi, shuning uchun bir zumda ochiladi va qidiruv tizimlarida to‘liq indekslanadi.
- **Kontent — bu ma’lumot** — loyihalar, maqolalar va tajriba Nuxt Content’da Zod sxemalari bilan tekshiriladigan Markdown/YAML fayllar. Yangi case study qo‘shish uchun komponentga tegish shart emas.
- **Uch til** — ingliz, o‘zbek va rus tillari, til prefiksli marshrutlar, `hreflang` teglari va tarjima qilinmagan kontent uchun inglizcha zaxira.
- **Dizayn tizimi** — Tailwind CSS v4 ustida semantik rang tokenlari, avtomatik yorug‘/qorong‘i mavzu va reduced-motion’ni hurmat qiluvchi animatsiyalar.
- **Klaviatura birinchi** — istalgan sahifa, loyiha yoki amalga o‘tish uchun `⌘K` buyruqlar menyusi.

## Arxitektura

```txt
content/<locale>/{projects,blog,experience}  →  tiplangan kolleksiyalar
app/composables/useLocalizedContent.ts       →  zaxira tilli so‘rovlar
app/pages/*                                  →  ma’lumot olish, bo‘limlarni yig‘ish
app/components/{home,project,blog,site,ui}   →  taqdimot komponentlari
```

## Natija

Tez, qulay va yangilash oson sayt — yangi loyiha qo‘shish bitta Markdown fayl yozishdan iborat.
