---
title: Portfolio Platform
description: A multilingual, statically generated portfolio with case studies, a blog and a command palette — built as a small product, not a landing page.
year: 2026
role: Design & full-stack development
stack: [Nuxt 4, TypeScript, Nuxt Content, Tailwind CSS v4, i18n]
cover: /images/projects/portfolio.png
order: 8
links:
  source: https://github.com/yusufdeveloper2903/myportfolio
---

## Problem

My previous portfolio was a single Vue 2 page: content hard-coded in templates, no SEO,
no way to publish case studies or articles, and a build that no longer ran on modern Node.

## Approach

- **Static generation with Nuxt 4** — every page is pre-rendered to HTML, so it loads instantly and is fully indexable.
- **Content as data** — projects, posts and experience are Markdown/YAML files validated by Zod schemas in Nuxt Content. Adding a case study never touches a component.
- **Three languages** — English, Uzbek and Russian with locale-prefixed routes, `hreflang` tags and an English fallback for untranslated entries.
- **Design system** — semantic color tokens on top of Tailwind CSS v4, automatic light/dark theme and a reduced-motion friendly reveal animation.
- **Keyboard first** — a `⌘K` command palette to jump to any page, project or action.

## Architecture

```txt
content/<locale>/{projects,blog,experience}  →  typed collections
app/composables/useLocalizedContent.ts       →  locale-aware queries with fallback
app/pages/*                                  →  fetch data, compose sections
app/components/{home,project,blog,site,ui}   →  presentational components
```

## Outcome

A fast, accessible site that is easy to keep up to date — publishing a new project is a single Markdown file.
