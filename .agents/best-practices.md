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
- Keep JSON data files in `/src/data/projects/`
- Group utility functions by feature

## Naming Conventions

- **Components**: `PascalCase` (e.g., `ProjectsPage.tsx`)
- **Functions**: `camelCase` (e.g., `getDateValue()`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MONTHS_MAP`)
- **JSON files**: `kebab-case` (e.g., `sgp-clipper.json`)
- **CSS classes**: `te-` prefix for theme elements

## CSS Best Practices

- Use Tailwind utility classes first
- Custom CSS goes in corresponding `.css` files
- Use CSS custom properties for theme values
- Maintain mobile-first responsive design
- Test dark/light mode compatibility

## Project Data Guidelines

### Adding Projects
1. Create JSON file following the exact schema
2. Include all required fields
3. Use supported Lucide icon names
4. Use consistent date format (e.g., "Feb 2026")
5. Add proper description points (2-4 items)
6. Include relevant tech stack

### Updating Projects
1. Keep JSON structure unchanged (no new top-level fields without code changes)
2. Update date field only if needed
3. Ensure icon name is valid
4. Test that URL links are working

### Archiving/Removing Projects
1. Remove JSON file
2. Remove import from `ProjectsPage.tsx`
3. Remove from `projectsData` array
4. Test that page still renders

## Date Format Guidelines

- **Single Month**: "Feb 2026"
- **Date Range**: "April - October 2025"
- **In Progress**: Include "Present" or current status (e.g., "Jan 2025 - Present")
- **Future**: Use future dates if project is planned

The parser extracts the **first date** from these strings, so the first date listed is what's used for sorting.

## Icon Selection

Choose icons that represent the project type:
- `Scissors` - Tools, utilities, extractors
- `Zap` - High-impact, AI/ML, competitive projects
- `Brain` - ML, AI, intelligent systems
- `Gamepad2` - Games, interactive experiences
- `Database` - Data-centric, backend systems
- `Code` - Programming tools, utilities
- `Users` - Team projects, collaborative work
- `Calendar` - Time-based or scheduling projects

## Performance Tips

1. **Avoid large JSON files** - Keep individual project JSON under 2KB
2. **Lazy load if needed** - Currently all projects load upfront
3. **Memoize components** - Use React.memo for expensive components
4. **Optimize images** - Use optimized formats and sizes
5. **Bundle size** - Monitor Lucide icon imports (tree-shake unused icons)

## Accessibility

- Ensure all text has sufficient contrast in both themes
- Use semantic HTML
- Include alt text for images
- Test keyboard navigation
- Use proper heading hierarchy

## Testing Checklist

Before deploying changes:
- [ ] All projects render correctly
- [ ] Projects sort newest to oldest
- [ ] Theme toggle works (dark/light mode)
- [ ] Icons display for all projects
- [ ] Links work (if any project has links)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] No console errors or warnings
- [ ] TypeScript compiles without errors

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
