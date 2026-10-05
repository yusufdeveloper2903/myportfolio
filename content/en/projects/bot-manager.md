---
title: "Bot Manager — Telegram & fleet operations"
description: "The internal operations panel of a US fleet company: a Telegram-style chat client for driver groups, scheduled posts, risk zones, inspections and role-based access."
year: 2024
role: "Lead frontend engineer"
company: "Longhorn Logistics Group"
stack: [Vue 3, TypeScript, Vite, Pinia, TanStack Query, STOMP/WebSocket, Leaflet, HERE Maps, vue-i18n, Tailwind CSS, Vitest]
cover: /images/projects/bot-manager/cover.jpg
featured: true
order: 2
confidential: true
metrics:
  - label: "My commits"
    value: "1,700+"
  - label: "Share of history"
    value: "79%"
  - label: "Feature modules"
    value: "41"
gallery:
  - src: /images/projects/bot-manager/multi-post.jpg
    alt: "Multi-group post scheduling across US time zones"
    caption: "Multi-group post scheduling across US time zones"
  - src: /images/projects/bot-manager/telegram-mirror.jpg
    alt: "Telegram Mirror: chat folders and mirrored driver groups"
    caption: "Telegram Mirror: chat folders and mirrored driver groups"
  - src: /images/projects/bot-manager/customers.jpg
    alt: "Customers: subscriptions, connected events and billing status"
    caption: "Customers: subscriptions, connected events and billing status"
  - src: /images/projects/bot-manager/roles.jpg
    alt: "Role-based access control"
    caption: "Role-based access control"
---

## The product

Dispatch, safety and maintenance teams talk to hundreds of truck drivers through Telegram groups. Bot Manager is the panel they work in every day: it mirrors those chats, automates posts and alerts, and connects them with fleet data — drivers, units, inspections (PTI), work orders and risk zones.

## My role

I have been the main frontend author since the first commit in December 2024 — around 80% of the codebase history — owning architecture, the shared UI kit and most of the 41 feature modules.

## Architecture

- **Layers** — `app / pages / modules / shared`; thin route pages, isolated feature modules that never import each other, and 35 typed API domains with queries and mutations (TanStack Query) plus Pinia for client state.
- **Lazy-loaded route registry** with build-time feature flags.
- **RBAC** — ~20 permission groups enforced on routes and down to individual chat folders.

## Highlights

- **Telegram Mirror** — a Telegram-like client with chat folders, pinned messages, media and voice, deleted-message history and search. The message list is a bidirectional, jump-capable window that loads around the viewport and re-centres on a reply or search hit.
- **Resilient realtime** — one app-wide STOMP client that keeps handlers across reconnects, queues subscriptions made before connect and resumes when the network or tab returns.
- **Graceful failure** — 502/503/504 shows a “server restarting” banner with backoff and refetch; only 401 signs out and returns the user to the same page; a toast offers refresh when a new deploy is live.
- **Scheduling across time zones** — multi-group posts with CT/ET/MT/PT previews, state targeting, pinning and auto-delete.
- **Quality bar** — zero type errors enforced, Conventional Commits with module-based scopes, and a pre-push hook running type-check, tests and a staging build.
