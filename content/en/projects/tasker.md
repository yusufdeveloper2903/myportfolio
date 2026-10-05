---
title: "Tasker — GitHub issue workflow"
description: "A dashboard that turns a busy open-source issue queue into a personal workflow — help wanted, mentions, assigned and in-progress lanes with notes and statuses."
year: 2026
role: "Design & development"
stack: [React, Vite, Supabase, GitHub API]
cover: /images/projects/tasker.jpg
featured: true
order: 4
links:
  live: "https://todo-tasker-one.vercel.app"
---

## Problem

Contributing to a large open-source project means tracking dozens of issues at once: new “Help Wanted” issues, mentions, assignments and work in progress. GitHub’s notifications alone don’t give a clear picture.

## What I built

- **Issue lanes** — Help Wanted, Mentioned, To-do, Assigned, In Progress and Complete tabs, each backed by its own GitHub query.
- **Personal layer** — private notes and custom statuses for every issue, stored in Supabase and synced across devices.
- **Signals** — unread markers, notification and mention tracking so nothing important gets missed.
- **Profile & theme** — per-user GitHub username settings and a light/dark theme.

## Architecture

A feature-based React structure (`features/issues`, `features/profile`, `features/theme`) where every data concern is its own hook — easy to extend with new lanes without touching existing ones.
