---
title: "Dyzlix — Smart Fuel System"
description: "A fuel management platform for US trucking fleets: suggested fuel stops, bookings, card transactions, live fleet tracking and savings analytics."
year: 2024
role: "Frontend lead · built from scratch"
company: "Longhorn Logistics Group"
stack: [Vue 3.5, TypeScript, Vite, Pinia, TanStack Query, TanStack Table, TanStack Virtual, HERE Maps, D3, STOMP/WebSocket, Tailwind CSS 4, Vitest, Playwright]
cover: /images/projects/dyzlix/cover.jpg
featured: true
order: 1
confidential: true
metrics:
  - label: "My commits"
    value: "1,100+"
  - label: "Share of history"
    value: "52%"
  - label: "Unit tests"
    value: "320+"
gallery:
  - src: /images/projects/dyzlix/tracking.jpg
    alt: "Live tracking board: virtualized vehicle list and HERE Maps clusters"
    caption: "Live tracking board: virtualized vehicle list and HERE Maps clusters"
  - src: /images/projects/dyzlix/fuel-book.jpg
    alt: "Fuel Book: suggested stops, fuel levels and booking actions"
    caption: "Fuel Book: suggested stops, fuel levels and booking actions"
  - src: /images/projects/dyzlix/dashboard.jpg
    alt: "Analytics dashboard: spend, savings, MPG and idling"
    caption: "Analytics dashboard: spend, savings, MPG and idling"
---

## The product

Fuel is one of the biggest costs for a trucking company. Dyzlix suggests the best fuel stops by route, price and availability. Bookers assign stops to drivers, card transactions (EFS / Relay) are matched back to bookings, and managers see savings, MPG and idling on one dashboard.

## My role

**I built the Dyzlix frontend from scratch and own it end to end.** I started the codebase in October 2024 and set up everything around it myself:

- **Architecture** — the layered `app → pages → modules → shared` structure, the data-flow conventions and the module template every feature follows.
- :if-backend[**Infrastructure** — Vite build, TypeScript configuration, multi-stage Docker images for staging and production served by nginx, environment handling and release versioning.] :if-backend{off}[**Build setup** — Vite build, TypeScript configuration, environment handling and release versioning.]
- **Developer experience & quality** — ESLint and Prettier, Conventional Commits, git hooks with type-check, design-token, import-boundary and bundle-budget gates, unit tests and the Playwright smoke harness.
- **Design system** — the shared UI kit, design tokens and dark mode.
- **Features** — most of the product: dashboard, Fuel Book, live tracking board, cards, transactions, idling, permissions and settings.

Today I am the main author of the codebase (1,100+ commits) and the reference for how new features are built.

## Architecture

- **Layered structure** — `app → pages → modules → shared`, close to Feature-Sliced Design. A boundaries script enforces import direction with a ratchet that only fails on *new* violations.
- **One data flow everywhere** — page → view → composable → typed query hook in `shared/api`, with TanStack Query for server state.
- **Permission-aware UI** — ~65 fine-grained `CAN_*` permissions and provider access (EFS vs Relay) gate every view.
- **Realtime** — STOMP over WebSocket for fuel notifications and card events.

## Highlights

- **Live tracking board** — a virtualized vehicle list, HERE Maps markers and routes, route replay and D3 fuel-level timelines.
- **Ratcheted quality gates** in the pre-push hook: type-check, design-token gate (no new raw colours), import boundaries, a ~200 KB gzip bundle budget, licence allowlist and `pnpm audit`.
- **Zero-downtime releases** — builds are stamped with a content hash; open tabs pick up a new release on the next navigation and recover from stale chunks automatically.
- **Smoke harness** — every route is tested at 2 viewports × 2 themes, checking console errors, failed requests and screenshot diffs.
- **17 ADRs** document the key architectural decisions.
