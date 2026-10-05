---
title: "Expensify — open-source contributions"
description: "25 merged pull requests to Expensify’s production React Native app — fixes and features across expense reports, search, offline flows and workspace management."
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
  - label: "Merged pull requests"
    value: "25"
  - label: "Platforms"
    value: "Web · iOS · Android"
  - label: "Contributing since"
    value: "May 2026"
---

## Context

[Expensify](https://github.com/Expensify/App) is an open-source expense management and chat app built with React Native and React Native Web, shipped to millions of users on web, iOS and Android. Contributors pick up issues from a public queue, write a proposal and ship the fix through a strict review and QA process.

## What I worked on

- **Expense reports & duplicates** — hid duplicate violations on IOU reports, fixed “Keep selected” for duplicates in transaction threads, kept multi-expense drafts submittable.
- **Search & optimistic updates** — seeded modified keys in the optimistic Search snapshot so SmartScan results stay consistent, fixed scan-failed moves and expense row flicker.
- **Workspaces & Expensify Card** — blocked removing members who hold an active Expensify Card, disabled payment actions when workspace payments are off, showed GL codes for categories.
- **Navigation & UX** — fixed a back-button loop after copiloting into an agent, kept the current tab for `exitTo` links, fixed offline indicator and safe-area overlaps.

## What it taught me

Working in a large, mature codebase means respecting its patterns: optimistic data with Onyx, offline-first behaviour, strict typing and tests for every change — and writing proposals that reviewers can approve quickly.
