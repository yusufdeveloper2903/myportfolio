# myportfolio

Personal site of Yusuf Yuldashev — a multilingual, statically generated portfolio with
case studies, a blog and a `⌘K` command palette.

**Stack:** Nuxt 4 · TypeScript · Nuxt Content v3 · Tailwind CSS v4 · @nuxtjs/i18n (EN / UZ / RU)

## Getting started

```bash
fnm use          # Node version from .nvmrc
npm install
npm run dev      # http://localhost:3000
```

| Command             | Description                                       |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Dev server with HMR                               |
| `npm run generate`  | Pre-render the whole site to `.output/public`     |
| `npm run preview`   | Serve the generated site locally                  |
| `npm run typecheck` | `vue-tsc` type checking (unknown components fail) |
| `npm run lint`      | ESLint (`npm run lint:fix` to auto-fix)           |
| `npm run format`    | Prettier                                          |
| `npm test`          | Unit tests (Vitest)                               |

## Editing content

Everything you are likely to change is data, not code:

| What                         | Where                               |
| ---------------------------- | ----------------------------------- |
| Projects / case studies      | `content/<locale>/projects/*.md`    |
| Blog posts                   | `content/<locale>/blog/*.md`        |
| Experience timeline          | `content/<locale>/experience/*.yml` |
| Name, email, socials, stack  | `app/data/site.ts`                  |
| UI copy (hero, buttons, SEO) | `i18n/locales/{en,uz,ru}.json`      |
| Images, CV, OG image         | `public/`                           |

Frontmatter is validated by the schemas in `content.config.ts`. A file missing in `uz` or `ru`
falls back to the English version automatically. Search the repo for `TODO` to find placeholders.

## Architecture

```
app/
├── pages/                 # Routes. Fetch data and compose sections.
├── layouts/default.vue    # Header, footer, ⌘K palette
├── components/
│   ├── home/              # Home page sections (hero, bento, work, experience, contact)
│   ├── project/  blog/    # Feature components
│   ├── site/              # App shell: header, footer, theme, locale, command palette
│   └── ui/                # Small reusable building blocks
├── composables/           # useLocalizedContent, usePageSeo, useCommandPalette, …
├── utils/                 # Pure, unit-tested helpers (dates, search)
├── plugins/reveal.ts      # v-reveal scroll animation directive
├── data/site.ts           # Locale-independent site facts
└── assets/css/main.css    # Tailwind v4 + semantic design tokens (light/dark)
content/                   # Markdown/YAML content per locale
i18n/locales/              # UI translations
server/routes/             # sitemap.xml, robots.txt (pre-rendered)
```

**Principles**

- **Pages fetch, components present.** Data is loaded in pages/layouts during pre-rendering and
  passed down as props, so it ships in the page payload and the browser never loads the content DB.
- **Semantic tokens only.** Components use `bg-surface`, `text-muted`, `border-line`, … — never
  raw colors — so themes stay consistent.
- **Accessible by default.** Skip link, focus rings, keyboard-driven palette, `prefers-reduced-motion`.
- **SEO.** Static HTML, canonical + `hreflang` links, Open Graph tags, JSON-LD `Person`, sitemap.

## Deployment

The site is fully static. On Netlify, Vercel or Cloudflare Pages use:

- **Build command:** `npm run generate`
- **Output directory:** `.output/public`
- **Environment:** `NUXT_PUBLIC_SITE_URL=https://your-domain.com` (see `.env.example`)

CI (`.github/workflows/ci.yml`) runs lint, type-check, tests and a full generate on every push.
