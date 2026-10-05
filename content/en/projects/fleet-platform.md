---
title: "Real-time fleet management platform"
description: "Leading frontend for a US-based logistics platform: live truck tracking, WebRTC-powered dispatch and large-scale data visualization."
year: 2024
role: "Frontend lead · Longhorn Logistics Group"
stack: [React 19, Next.js, TypeScript, TanStack Query, Zustand, WebRTC, WebSocket, HERE Maps, Playwright]
cover: /images/projects/fleet-platform.jpg
featured: true
order: 2
metrics:
  - label: "Rows virtualized"
    value: "10k+"
  - label: "Interaction latency"
    value: "< 100 ms"
  - label: "Live channels"
    value: "WebSocket · WebRTC"
---

> Commercial product — the source code and screenshots are private.

## Problem

Dispatchers manage hundreds of trucks at once. They need live positions, fast communication with drivers and dashboards with years of telemetry — and the interface must stay instant no matter how much data is on screen.

## My role

I lead the frontend: architecture decisions, code review, performance work and delivering features together with backend and product teams.

## Architecture & solutions

- **Real-time layer** — WebSocket streams for live GPS positions and statuses, WebRTC for dispatch calls, an event-driven UI that updates only what changed.
- **Maps** — live tracking on HERE Maps / Leaflet with clustering for large fleets.
- **Performance** — virtualization for 10k+ row tables, LTTB downsampling for time-series charts, code-splitting and lazy loading.
- **Data** — TanStack Query for server state and caching, Zustand for client state.
- **Maintainability** — Feature-Sliced Design, strict TypeScript, Vitest and Playwright in CI.

## Outcome

A platform that feels native even with large data volumes, and a codebase structured so new features can be added without touching unrelated modules.
