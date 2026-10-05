# myportfolio

Personal portfolio of Yusuf Yuldashev — Vue 3 + Vite + TypeScript.

## Requirements

- Node.js `>= 20.19` (see `.nvmrc`)

## Scripts

| Command              | Description                         |
| -------------------- | ----------------------------------- |
| `npm install`        | Install dependencies                |
| `npm run dev`        | Start the dev server with HMR       |
| `npm run build`      | Type-check and build for production |
| `npm run preview`    | Serve the production build locally  |
| `npm run type-check` | Run `vue-tsc`                       |
| `npm run lint`       | Lint and auto-fix with ESLint       |
| `npm run format`     | Format `src/` with Prettier         |
| `npm test`           | Run unit tests with Vitest          |

## Project structure

```
src/
├── assets/
│   ├── images/          # Images grouped by section (hero, about, portfolio, …)
│   └── styles/
│       ├── abstracts/   # Design tokens + mixins, auto-injected into every SFC
│       └── main.scss    # Global reset and base styles
├── components/
│   ├── layout/          # AppHeader, AppFooter
│   ├── sections/        # One component per page section
│   ├── portfolio/       # Portfolio-specific building blocks
│   └── ui/              # Reusable, content-agnostic UI pieces
├── composables/         # useScrolled, useMediaQuery, useEventListener
├── data/                # All site content (profile, projects, services, …)
├── types/               # Shared TypeScript types
├── utils/               # Pure helpers (mailto, date formatting)
├── App.vue
└── main.ts
```

### Conventions

- **Content lives in `src/data`.** Components render data; to add a project, service or
  social link, edit the data file — no template changes needed.
- **Styling:** scoped SCSS with BEM class names. Use tokens from
  `abstracts/_variables.scss` and the `below(<breakpoint>)` mixin instead of raw values.
- **Sections** are anchored by `SectionId` (`#home`, `#about`, …); navigation is typed
  against it.
- Static files that must keep their URL (e.g. the CV) go in `public/`.
