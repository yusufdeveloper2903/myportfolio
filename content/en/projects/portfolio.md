---
title: Portfolio Platform
description: A multilingual, statically generated portfolio with detailed case studies, screenshot galleries, a contact form and a ⌘K command palette — built as a small product, not a landing page.
year: 2026
role: Design & full-stack development
stack: [Nuxt 4, TypeScript, Nuxt Content, Tailwind CSS v4, i18n, Vitest]
cover: /images/projects/portfolio.jpg
order: 11
links:
  source: https://github.com/yusufdeveloper2903/myportfolio
---

## Problem

My previous portfolio was a single Vue 2 page: content hard-coded in templates, no SEO, no way to describe real projects in detail, and a build that no longer ran on modern Node.

## Approach

- **Static generation with Nuxt 4** — every page in three languages is pre-rendered to HTML, so it loads instantly and is fully indexable.
- **Content as data** — projects and experience are Markdown/YAML files validated by Zod schemas in Nuxt Content. Adding a case study never touches a component.
- **Honest case studies** — commercial projects are marked as private, with a note that company policy keeps the code closed, and screenshot galleries with personal data blurred.
- **Three languages** — English, Uzbek and Russian with locale-prefixed routes, `hreflang` tags and an English fallback for untranslated entries.
- **Design system** — semantic color tokens on Tailwind CSS v4, automatic light/dark theme and reduced-motion friendly animations.
- **Contact that always works** — a short form that composes the email in Gmail or the visitor’s mail app, plus phone and copy-to-clipboard.
- **Keyboard first** — a `⌘K` command palette to jump to any page, project or action.

## Architecture

```txt
content/<locale>/{projects,experience}   →  typed collections
app/composables/useLocalizedContent.ts   →  locale-aware queries with fallback
app/pages/*                              →  fetch data, compose sections
app/components/{home,project,site,ui}    →  presentational components
server/routes/{sitemap.xml,robots.txt}   →  pre-rendered SEO files
```

## Outcome

A fast, accessible site that is easy to keep up to date — publishing a new project is a single Markdown file per language.
