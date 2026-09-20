# Marc Victor Velasquez — Portfolio

Personal portfolio for Marc Victor Velasquez, an AI & automation engineer based in Angeles City, Philippines.
Live at **https://marcvelasquez.appwrite.network**.

The design is an industrial, Teenage Engineering–inspired "hardware module" look: blueprint grid, monospace
labels, a safety-orange accent (`#ff6b1a`), and synthesized click sounds (Web Audio, no audio files).

## Stack

- React 19 + TypeScript, built with Vite 7
- Tailwind CSS 4
- React Router 7 (client-side routing)
- lucide-react icons

Those are the only four runtime dependencies. Fonts (Inter, JetBrains Mono) load from Google Fonts.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Typecheck (`tsc -b`) then production build into `dist/` |
| `npm run preview` | Serve the production build locally (http://localhost:4173) |
| `npm run lint` | ESLint |

## Project structure

```
src/
├── App.tsx                  # Routes, plus per-route canonical / og:url updates
├── main.tsx                 # Entry point
├── pages/                   # HomePage, ProjectsPage, ProjectsArchivePage, AboutPage
├── components/              # Header, Footer, MetricsCounter, EngineeringSandbox, ProjectDrawer, ...
├── context/                 # PageTransitionContext (route fade transitions)
├── layouts/MainLayout.tsx   # Header + page + footer shell
├── data/                    # All site content as JSON (see below)
├── types/project.ts         # ProjectEntry and related types
├── utils/sound.ts           # Web Audio click / hover sounds, mute state in localStorage
├── index.css                # Tailwind entry and te-* design classes
└── tactile-grid.css         # Blueprint grid overlay
public/                      # favicon, og-image.png, robots.txt, sitemap.xml, profile photo
design/                      # Design references that are not shipped
docs/profile-notes.md        # Profile content that is not on the site yet
```

## Editing content

Content lives in `src/data/`; the pages render it.

- **Featured projects** (Projects page): `src/data/projects.json`, shown in file order. Each entry needs
  `id`, `title`, `tagline`, `description`, `tech`, `date`, `status`, and `icon`. Optional: `categories`
  (`ai-ml`, `automation`, `fullstack`, used by the filter pills) and `links` (`[{ "label", "url" }]`, shown in
  the project drawer and on homepage cards).
- **Homepage featured cards**: the four cards are listed in `FEATURED_CARDS` in `src/pages/HomePage.tsx`.
  Their titles and links come from `projects.json`, matched by `id`; the short blurb and tags live in that list.
- **Archive projects**: add a JSON file in `src/data/projects/`, then import it and add it to
  `archiveProjects` in `src/data/archive.ts`.
- **About page**: `internships.json`, `research.json`, `skills.json`, `certifications.json`,
  `achievements.json`.
- **Homepage metrics**: `metrics` in `src/components/MetricsCounter.tsx`. Only use figures you can back up;
  the current ones come from `internships.json` and `research.json`.
- **Not rendered yet**: `education.json` and `organizations.json` are not imported by any page. The `icon`
  field on projects is also currently unused.

## Deployment and SEO

`npm run build` produces a static site in `dist/`. Two requirements for the host:

1. **SPA fallback.** Unknown paths (`/projects`, `/about`, ...) must serve `index.html`.
2. **Root-relative assets.** `vite.config.ts` sets `base: '/'`. Using `'./'` breaks direct loads and
   refreshes on any route other than `/`.

Other details:

- `index.html` holds the title, description, Open Graph / Twitter tags, and JSON-LD. `App.tsx` keeps
  `<link rel="canonical">` and `og:url` in step with the current route.
- `public/sitemap.xml` lists the four routes; update it if you add a page.
- `public/og-image.png` (1200×630) is a static screenshot of the homepage. Regenerate it after a visual
  change:

  ```bash
  npm run build && npx vite preview --port 4173 &
  google-chrome --headless=new --no-sandbox --hide-scrollbars --window-size=1200,630 \
    --virtual-time-budget=8000 --screenshot=public/og-image.png http://localhost:4173/
  ```

## Conventions

More detail for contributors and AI assistants is in [`.agents/`](.agents/).

## Contact

- Email: velasquezmarcvictor@gmail.com
- GitHub: [@marccodesstuff](https://github.com/marccodesstuff)
- LinkedIn: [Marc Victor Velasquez](https://www.linkedin.com/in/mrcvctr-vel/)
