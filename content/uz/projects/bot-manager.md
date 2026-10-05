---
title: "Bot Manager — Telegram va park operatsiyalari"
description: "AQShdagi yuk tashish kompaniyasining ichki operatsion paneli: haydovchilar guruhlari uchun Telegram’ga o‘xshash chat klienti, rejalashtirilgan postlar, xavfli zonalar, ko‘riklar va rolga asoslangan kirish."
year: 2024
role: "Frontend lead · noldan qurganman"
company: "Longhorn Logistics Group"
stack: [Vue 3, TypeScript, Vite, Pinia, TanStack Query, STOMP/WebSocket, Leaflet, HERE Maps, vue-i18n, Tailwind CSS, Vitest]
cover: /images/projects/bot-manager/cover.jpg
featured: true
order: 2
confidential: true
metrics:
  - label: "Mening commitlarim"
    value: "1 700+"
  - label: "Tarixdagi ulush"
    value: "79%"
  - label: "Feature modullar"
    value: "41"
gallery:
  - src: /images/projects/bot-manager/multi-post.jpg
    alt: "AQSh vaqt zonalari bo‘yicha ko‘p guruhli post rejalashtirish"
    caption: "AQSh vaqt zonalari bo‘yicha ko‘p guruhli post rejalashtirish"
  - src: /images/projects/bot-manager/telegram-mirror.jpg
    alt: "Telegram Mirror: chat papkalari va aks ettirilgan haydovchi guruhlari"
    caption: "Telegram Mirror: chat papkalari va aks ettirilgan haydovchi guruhlari"
  - src: /images/projects/bot-manager/customers.jpg
    alt: "Mijozlar: obunalar, ulangan hodisalar va to‘lov holati"
    caption: "Mijozlar: obunalar, ulangan hodisalar va to‘lov holati"
  - src: /images/projects/bot-manager/roles.jpg
    alt: "Rolga asoslangan kirish nazorati"
    caption: "Rolga asoslangan kirish nazorati"
---

## Mahsulot

Dispetcherlik, xavfsizlik va texnik xizmat jamoalari yuzlab haydovchilar bilan Telegram guruhlari orqali muloqot qiladi. Bot Manager — ular har kuni ishlaydigan panel: chatlarni aks ettiradi, postlar va ogohlantirishlarni avtomatlashtiradi hamda ularni park ma’lumotlari — haydovchilar, mashinalar, ko‘riklar (PTI), work order’lar va xavfli zonalar bilan bog‘laydi.

## Mening rolim

**Bot Manager — birinchi commit’dan boshlab mening loyiham.** Repozitoriyani 2024-yil dekabrida yaratdim va butun frontend hamda uning infratuzilmasini o‘zim qurdim:

- **Arxitektura** — `app / pages / modules / shared` qatlamlari, izolyatsiyalangan feature modullar, tiplangan API qatlami va feature flag’li lazy-load route registri.
- **Infratuzilma** — Vite va TypeScript sozlamalari, staging va production uchun Docker image’lar, `dev` va `main` branchlardan avtomatik deploy hamda deploy’dan keyin foydalanuvchiga sahifani yangilashni taklif qiluvchi reliz aniqlash.
- **Real vaqt va barqarorlik** — ilova bo‘ylab yagona STOMP klient, qayta ulanish strategiyasi, server qayta ishga tushishi va sessiya tugashini to‘g‘ri boshqarish.
- **Dasturchi tajribasi** — ESLint, Prettier, husky, lint-staged, modul scope’li commitlint va type-check, testlar hamda staging build’ni ishga tushiradigan pre-push hook.
- **Mahsulot** — umumiy UI kit va 41 ta feature modulning ko‘pchiligi: Telegram Mirror, postlar, xavfli zonalar, PTI va RBAC.

Kod bazasi tarixining ~80% ini (1 700+ commit) men yozganman va hozir ham loyihaga rahbarlik qilaman.

## Arxitektura

- **Qatlamlar** — `app / pages / modules / shared`; yupqa route sahifalari, bir-birini import qilmaydigan izolyatsiyalangan modullar va query/mutation’li 35 ta tiplangan API domeni (TanStack Query), client holati uchun Pinia.
- **Lazy-load route registri** va build vaqtidagi feature flag’lar.
- **RBAC** — ~20 ta huquq guruhi route’lar va hatto alohida chat papkalarigacha qo‘llanadi.

## E’tiborga loyiq jihatlar

- **Telegram Mirror** — chat papkalari, pin qilingan xabarlar, media va ovozli xabarlar, o‘chirilgan xabarlar tarixi va qidiruvga ega Telegram’simon klient. Xabarlar ro‘yxati ikki tomonlama, sakrash imkoniga ega oyna: viewport atrofini yuklaydi va javob yoki qidiruv natijasiga markazlashadi.
- **Barqaror real vaqt** — qayta ulanishlarda handler’larni saqlaydigan, ulanishdan oldingi obunalarni navbatga qo‘yadigan va tarmoq yoki tab qaytganda tiklanadigan yagona STOMP klient.
- **Xatolarni chiroyli boshqarish** — 502/503/504 da “server qayta ishga tushmoqda” banneri, backoff va refetch; faqat 401 tizimdan chiqaradi va foydalanuvchini o‘sha sahifaga qaytaradi; yangi deploy chiqqanda yangilash taklif qilinadi.
- **Vaqt zonalari bo‘yicha rejalashtirish** — CT/ET/MT/PT ko‘rinishli ko‘p guruhli postlar, shtatlar bo‘yicha target, pin va avtomatik o‘chirish.
- **Sifat darajasi** — nol type xatosi talabi, modul scope’li Conventional Commits va type-check, testlar hamda staging build’ni ishga tushiradigan pre-push hook.
