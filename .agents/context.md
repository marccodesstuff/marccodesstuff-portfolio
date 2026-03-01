# Project Architecture & Context

## Architecture Overview

The portfolio uses a **component-based React architecture** with:
- **Separation of Concerns**: Data (JSON) is separate from presentation (TSX/CSS)
- **Theme System**: Centralized theme management with context API
- **Static Site Generation**: Projects are loaded at build time from JSON files
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Component Hierarchy

```
App.tsx (Router)
├── HomePage (/)
├── ProjectsPage (/projects)
│   ├── Project items (mapped from JSON)
│   └── ThemeToggle
├── AboutPage (/about)
│   └── ThemeToggle
└── SwissPortfolio (wrapper)
```

## Data Flow

1. JSON files in `/src/data/projects/` contain project metadata
2. `ProjectsPage.tsx` imports all JSON files
3. Icon strings from JSON are mapped to Lucide React components via `iconMap`
4. Projects are sorted by date using the `getDateValue()` utility
5. Sorted projects are rendered with consistent styling

## Theme System

- `ThemeContext.tsx`: Provides global theme state
- `ThemeToggle.tsx`: UI component to switch themes
- CSS custom properties: Theme values are defined as CSS variables
- Utility classes: Tailwind classes prefixed with `te-` for theme elements

## Performance Considerations

- Projects are imported statically (no runtime file loading)
- Icon mapping prevents runtime lookups
- Sorting happens on component mount
- No external API calls for project data

## Future Enhancement Opportunities

1. **Dynamic Project Loading**: Load projects from an API instead of static imports
2. **Search/Filter**: Add ability to filter projects by tech, date, or status
3. **Project Details**: Create individual project detail pages
4. **Analytics**: Track project views and interactions
5. **CMS Integration**: Connect to a CMS for easier project management
6. **Internationalization**: Support multiple languages

## Build Configuration

- **Vite Config**: See `vite.config.ts`
- **TypeScript Config**: See `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **ESLint Config**: See `eslint.config.js`
- **Environment**: Node.js with npm package manager

## Testing Considerations

When testing or making changes:
1. Verify project JSON structure matches the `ProjectJSON` interface
2. Ensure icon names in JSON exist in the `iconMap`
3. Test date sorting with edge cases (different year ranges, date formats)
4. Validate responsive design on mobile/tablet/desktop
5. Check theme switching functionality

## Common Issues & Solutions

### Issue: New project not appearing
**Solution**: Ensure JSON is imported and added to `projectsData` array

### Issue: Icon not displaying
**Solution**: Check icon name matches Lucide component name and iconMap entry

### Issue: Projects not sorted correctly
**Solution**: Verify date format matches pattern (e.g., "Feb 2026")

### Issue: Theme not updating
**Solution**: Check ThemeContext provider wraps the app in main.tsx

## Dependencies to Be Aware Of

- `react-router-dom`: Routing system
- `lucide-react`: Icon library (must match icon names exactly)
- `tailwindcss`: Utility-first CSS framework
- `vite`: Build tool and dev server
