# Best Practices & Guidelines

## Code Style

### TypeScript
- Use strict mode (already configured)
- Define interfaces for all data structures
- Avoid `any` type; use proper typing instead
- Use React.ReactNode for JSX children

### React Components
- Use functional components with hooks
- Keep components focused and single-responsibility
- Extract complex logic into utility functions
- Use meaningful prop names and types

### File Organization
- One component per file (unless very small)
- Co-locate related files (e.g., component + styles)
- Keep JSON data files in `/src/data/` (archive projects in `/src/data/projects/`)
- Group utility functions by feature

## Naming Conventions

- **Components**: `PascalCase` (e.g., `ProjectsPage.tsx`)
- **Functions**: `camelCase` (e.g., `formatValue()`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `CATEGORY_FILTERS`)
- **JSON files**: `kebab-case` (e.g., `sgp-clipper.json`)
- **CSS classes**: `te-` prefix for theme elements

## CSS Best Practices

- Use Tailwind utility classes first
- Custom CSS goes in corresponding `.css` files
- Use CSS custom properties for theme values
- Maintain mobile-first responsive design
- The site is dark-only; there is no theme switcher

## Project Data Guidelines

### Adding Projects
1. Featured: add an entry to `src/data/projects.json` with `categories` (and `links` if you have confirmed repo/demo URLs).
2. Archive: create `src/data/projects/<id>.json`, then import it and add it to `archiveProjects` in `src/data/archive.ts`.
3. Keep entries matching `ProjectEntry` in `src/types/project.ts`; `npm run build` will catch type mismatches.
4. Write `description` as one paragraph and `tech` as a short list of real technologies used.

### Updating Projects
1. Keep the JSON structure unchanged; new fields need a matching change to `ProjectEntry` and the UI.
2. Only link to repos or demos you have verified are the right project.
3. Check that URLs open.

### Archiving/Removing Projects
- Featured: remove the entry from `src/data/projects.json` (and from `FEATURED_CARDS` in `HomePage.tsx` if it is one of the homepage cards).
- Archive: remove it from `archiveProjects` in `src/data/archive.ts`, then delete the JSON file.

## Date Format Guidelines

Dates are display strings and are **not parsed or sorted**; featured projects show in file order, so keep
`projects.json` ordered the way you want it displayed.

- **Single month**: "Feb 2026"
- **Range**: "Jan 2025 – Mar 2026"
- **In progress**: "Jan 2026 – Present"

## Icons

The `icon` field is kept in the project JSON but no page reads it today. Use Lucide component names
(for example `Brain`, `Cpu`, `Shield`) so it stays usable if icons are rendered again.

## Performance Tips

1. **Avoid large JSON files** - Keep individual project JSON under 2KB
2. **Lazy load if needed** - Currently all data is bundled upfront
3. **Memoize components** - Use React.memo for expensive components
4. **Optimize images** - Use optimized formats and sizes
5. **Bundle size** - Monitor Lucide icon imports (tree-shake unused icons)

## Accessibility

See "Accessibility Conventions" in `instructions.md` for the project-specific rules (contrast, touch targets,
clickable cards, focus, route changes). General checks:

- Ensure all text meets WCAG AA contrast (4.5:1 for small text) on the dark surfaces
- Use semantic HTML
- Include alt text for images
- Test keyboard navigation
- Use proper heading hierarchy

## Testing Checklist

Before deploying changes:
- [ ] `npm run build` passes (includes the TypeScript check)
- [ ] `npm run lint` reports no errors
- [ ] Featured projects render and every filter pill shows the expected projects
- [ ] Archive lists all projects and the count on the Projects page matches
- [ ] Project drawers open, close with Escape and the close buttons, and return focus to the card
- [ ] Links open the right repositories
- [ ] Direct load and refresh work on `/projects`, `/projects/archive`, and `/about` (via `npm run preview`)
- [ ] Responsive layout checked at mobile (375px), tablet, and desktop widths with no horizontal scroll
- [ ] No console errors or warnings

## Version Control

- Keep `.agents/` folder in version control
- Update `.agents/instructions.md` when architecture changes
- Document breaking changes in `.agents/context.md`
- Commit JSON changes atomically (one project file per commit if possible)

## Documentation

- Update these `.agents` files when:
  - Project structure changes
  - New conventions are established
  - Known issues are discovered
  - Architecture decisions are made
- Keep comments brief in code; complex logic should be explained here
