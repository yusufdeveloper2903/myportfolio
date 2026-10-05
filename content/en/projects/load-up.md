---
title: "Load Up — TMS & dispatch board"
description: "A large transportation management system for a freight company: live load board, trips, fleet maintenance, safety monitoring, accounting and HR in one React app."
year: 2026
role: "Frontend engineer"
company: "Longhorn Logistics Group"
stack: [React 19, TypeScript, Vite 8, TanStack Router, TanStack Query, TanStack Table, TanStack Virtual, Zustand, STOMP/WebSocket, WebRTC, MapLibre, Leaflet, Tailwind CSS 4, Vitest]
cover: /images/projects/load-up/cover.jpg
featured: true
order: 3
confidential: true
metrics:
  - label: "Codebase"
    value: "~3,100 files"
  - label: "Feature modules"
    value: "24"
  - label: "My commits"
    value: "250+"
gallery:
  - src: /images/projects/load-up/dashboard.jpg
    alt: "Operations dashboard: KPIs and a live map of 600+ drivers"
    caption: "Operations dashboard: KPIs and a live map of 600+ drivers"
  - src: /images/projects/load-up/update-board.jpg
    alt: "Update Board: fleet status, trailers and locations in one virtualized table"
    caption: "Update Board: fleet status, trailers and locations in one virtualized table"
  - src: /images/projects/load-up/trips.jpg
    alt: "Trips: pickups, deliveries and dispatch status"
    caption: "Trips: pickups, deliveries and dispatch status"
  - src: /images/projects/load-up/route-planner.jpg
    alt: "Truck route planner on HERE Maps with weigh stations"
    caption: "Truck route planner on HERE Maps with weigh stations"
---

## The product

Load Up runs a freight company end to end. Dispatchers book and track loads on a live board; fleet and maintenance teams manage vehicles, work orders and inspections; safety monitors incidents with video; accounting runs settlements and payroll — all in a single web application used every day by many departments.

## My role

I joined the team in June 2026 and ship features across the board, fleet and safety modules, working inside a large, fast-moving codebase with strict conventions.

## Architecture

- **React 19 + TanStack Router** with file-based routes and automatic code splitting (~210 route files).
- **Feature-sliced domains** — each of the 24 modules owns its `api`, `components`, `hooks`, `schemas` and store.
- **Server state** with TanStack Query and optimistic updates; client state with Zustand; forms with react-hook-form and Zod.
- **Fine-grained permissions** — a central permission catalog referenced across hundreds of components.

## Highlights

- **Live everything** — STOMP/WebSocket channels keep the load board, loads, notifications and safety data in sync; RingCentral WebRTC calling is built into the app.
- **Big data, smooth UI** — a shared virtualized table (TanStack Table + Virtual) and map views with clustering and spatial indexing.
- **Multi-tab correctness** — operator activity is reported from a single tab using Web Locks and BroadcastChannel.
- **Fast feedback** — the Vitest setup is split into node and jsdom projects, cutting the suite from 8.5 s to 3.65 s.
