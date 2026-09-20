# Portfolio Project Assistant Instructions

## Project Overview

Personal portfolio for Marc Victor Velasquez: a React + TypeScript single-page app showing projects,
experience, and skills. Live at https://marcvelasquez.appwrite.network. See `README.md` for setup and deployment.

## Technology Stack

- React 19, TypeScript (strict), Vite 7
- Tailwind CSS 4 plus a few custom `te-*` classes in `src/index.css`
- React Router 7 (client-side routing, `BrowserRouter`)
- lucide-react for icons
- Package manager: npm. Runtime dependencies are only `react`, `react-dom`, `react-router-dom`, `lucide-react`;
  do not add heavy libraries without a clear need.

## Project Structure

```
src/
├── App.tsx                  # Routes; keeps canonical / og:url in sync with the route
├── main.tsx                 # Entry point
├── pages/
│   ├── HomePage.tsx         # Hero, metrics, sandbox, featured cards, tech stack
│   ├── ProjectsPage.tsx     # Featured projects with category filter
│   ├── ProjectsArchivePage.tsx
│   └── AboutPage.tsx
├── components/
│   ├── Header.tsx, Footer.tsx, CursorGlow.tsx, SystemLog.tsx
│   ├── MetricsCounter.tsx   # Homepage metrics strip
│   ├── EngineeringSandbox.tsx  # Interactive SPC / agentic demo
│   ├── ProjectDrawer.tsx    # Shared accessible detail drawer (featured + archive)
│   └── PageTransition.tsx   # Route fade transition provider
├── context/PageTransitionContext.ts  # Context + usePageTransition hook
├── layouts/MainLayout.tsx
├── data/
│   ├── projects.json        # Featured projects (array)
│   ├── archive.ts           # Ordered list of archive projects
│   ├── projects/*.json      # One file per archive project
│   └── internships, research, skills, certifications, achievements, education, organizations (.json)
├── types/project.ts         # ProjectEntry, ProjectLink, ProjectCategory
└── utils/sound.ts           # Web Audio sounds; the single place for click/hover feedback
public/                      # favicon.svg, og-image.png, robots.txt, sitemap.xml, profile-pic.jpg
```

## Project Data Schema

Entries in `src/data/projects.json` and `src/data/projects/*.json` match `ProjectEntry` in `src/types/project.ts`:

```json
{
  "id": "kebab-case-id",
  "title": "string",
  "tagline": "string",
  "description": "string (one paragraph)",
  "tech": ["string"],
  "date": "e.g. 'Feb 2026' or 'Jan 2026 – Present'",
  "status": "active | completed",
  "icon": "string (currently unused by the UI)",
  "categories": ["ai-ml", "automation", "fullstack"],
  "links": [{ "label": "GitHub", "url": "https://..." }]
}
```

`categories` (featured projects only) drives the filter pills; `links` are optional. Only add a link to a repo
or demo you have confirmed is the right one.

## Common Tasks

### Add a featured project
1. Add an entry to `src/data/projects.json` (order in the file is display order).
2. Give it `categories` so it appears under the right filters.
3. If it should be one of the four homepage cards, add it to `FEATURED_CARDS` in `src/pages/HomePage.tsx`
   (matched to the JSON entry by `id`).

### Add an archive project
1. Create `src/data/projects/<id>.json`.
2. Import it and add it to `archiveProjects` in `src/data/archive.ts`.

### Change the homepage metrics
Edit `metrics` in `src/components/MetricsCounter.tsx`. Every number must be traceable to real data
(`internships.json`, `research.json`, or a project you can demonstrate).

### Add a page
1. Add the route in `src/App.tsx` and a page component in `src/pages/`.
2. Add it to `navItems` in `Header.tsx` and to `public/sitemap.xml`.

## Design Conventions

- Accent color `#ff6b1a`; dark surfaces (`#0e0e0e`, `#141414`); Inter for text, JetBrains Mono for labels.
- Reusable classes: `te-module` (module box), `te-label` (label typography); see `src/index.css`.
- Blueprint grid look: 2px borders between modules. Tailwind v4 defaults border color to `currentColor`, so
  always pair a border width with a color such as `border-white/5`.
- Sound goes through `src/utils/sound.ts` only (it respects the mute toggle). Do not create AudioContexts
  elsewhere.

## Routing and Deployment Notes

- `vite.config.ts` uses `base: '/'` and the host must serve `index.html` for unknown paths.
- Navigation between pages should use `navigateWithTransition` from `usePageTransition()`.

## Verification

Before finishing a change: `npm run build` and `npm run lint` should both pass with no errors.
