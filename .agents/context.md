# Project Architecture & Context

## Architecture Overview

A client-rendered React SPA built to static files with Vite.

- **Data separate from presentation:** content is JSON in `src/data/`; pages import and render it.
- **No backend, no API calls:** everything is bundled at build time.
- **Responsive, mobile-first** layout with Tailwind CSS.
- **Dark-only design.** There is no theme switcher.

## Component Hierarchy

```
App.tsx (BrowserRouter)
└── PageTransition (fade in/out between routes, exposes navigateWithTransition)
    └── MainLayout (Header, CursorGlow, grid overlay, optional Footer)
        ├── HomePage        (/)
        ├── ProjectsPage    (/projects)          -> ProjectDrawer
        ├── ProjectsArchivePage (/projects/archive) -> ProjectDrawer
        └── AboutPage       (/about)
```

## Data Flow

1. `src/data/projects.json` holds the featured projects. `ProjectsPage` renders them in file order and filters
   by each entry's `categories`.
2. `HomePage` renders four featured cards from `FEATURED_CARDS`, looking up title and links in `projects.json`.
3. `src/data/archive.ts` collects the per-project files in `src/data/projects/` into `archiveProjects`, used by
   `ProjectsArchivePage` (and for the "Explore Archive (N)" count on `ProjectsPage`).
4. `AboutPage` renders `internships`, `research`, `skills`, `certifications`, and `achievements` JSON.
   `education.json` and `organizations.json` exist but are not rendered yet.
5. `MetricsCounter` holds its own `metrics` array, sourced from the internship and research data.

## Key Behaviors

- **Page transitions:** `PageTransition` fades the current page out (120ms), calls `navigate`, then fades the
  new page in (220ms). Pending timers are cleared on unmount.
- **Project drawer:** `ProjectDrawer` is a modal dialog: focus moves in and is trapped, Escape closes it, page
  scroll is locked, and focus returns to the opener.
- **Sound:** `src/utils/sound.ts` synthesizes clicks with the Web Audio API. It is off by default; the header
  toggle turns it on and the choice is stored in `localStorage` (`portfolio_sound_enabled`).
- **Navigation accessibility:** `MainLayout` renders a skip link and the `<main>` landmark. On each client-side
  route change `App.tsx` updates `document.title` and focuses the page `h1`.
- **Sandbox:** `EngineeringSandbox` uses the ARIA tabs pattern (arrow keys, Home/End) and announces results
  through live regions; the control chart has a text alternative.
- **SEO:** static tags live in `index.html`; `App.tsx` updates `canonical` and `og:url` per route.

## Performance Considerations

- Data is imported statically; there is no runtime file loading.
- Keep runtime dependencies minimal (currently four). The bundle is about 97 KB gzipped.
- `public/og-image.png` is only fetched by link-preview crawlers, not by visitors.

## Known Gaps and Ideas

- `education.json` and `organizations.json` are not shown on the About page.
- Speaking engagements are only in `docs/profile-notes.md`, not on the site.
- Routes have their own `<title>` but share one meta description (set in `index.html`).
- The `icon` field in project JSON is unused.
- Pages are client-rendered; prerendering would help crawlers that do not run JavaScript.

## Common Issues & Solutions

### New project not appearing
Featured: confirm it is in `src/data/projects.json` and, for a filter, has `categories`.
Archive: confirm it is imported and added to `archiveProjects` in `src/data/archive.ts`.

### Project missing from a filter
Check that its `categories` array contains the filter id (`ai-ml`, `automation`, `fullstack`).

### Direct load or refresh of `/projects` shows a blank page
The host is not falling back to `index.html`, or `base` in `vite.config.ts` was changed away from `'/'`.

### A 2px border shows up bright white
A border width was used without a color; Tailwind v4 defaults to `currentColor`. Add e.g. `border-white/5`.

## Dependencies to Be Aware Of

- `react-router-dom`: routing
- `lucide-react`: icons (import by exact component name)
- `tailwindcss` (+ `@tailwindcss/vite`): styling
- `vite`, `typescript`, `eslint`: tooling
