# Portfolio Project Assistant Instructions

## Project Overview
This is a **Marc's Codes Stuff Portfolio** - a React + TypeScript portfolio website showcasing professional projects and technical work of Marc Victor L. Velasquez.

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Routing**: React Router
- **UI Components**: Lucide React (icons), custom theme system
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure

```
/src
├── App.tsx              # Main app with routing
├── ProjectsPage.tsx     # Projects listing page
├── AboutPage.tsx        # About page
├── SwissPortfolio.tsx   # Portfolio wrapper
├── ThemeContext.tsx     # Theme management (dark/light mode)
├── ThemeToggle.tsx      # Theme toggle component
├── main.tsx             # Entry point
├── index.css            # Global styles
├── App.css              # App component styles
└── data/
    └── projects/        # Individual project JSON files
        ├── sgp-clipper.json
        ├── typhoon-beacon.json
        ├── knee-detection.json
        ├── ai-director.json
        ├── monitored-quiz.json
        ├── body-microgames.json
        ├── water-management.json
        └── pageshutter.json
```

## Key Data Structure

### Project JSON Schema
```json
{
  "id": "string",
  "title": "string",
  "tagline": "string",
  "description": ["string"],
  "role": "string",
  "type": "string",
  "date": "string (e.g., 'Feb 2026', 'April - October 2025')",
  "status": "completed | in-progress",
  "featured": "boolean (optional)",
  "achievements": ["string"] (optional),
  "tech": ["string"],
  "links": [{ "label": "string", "url": "string" }] (optional),
  "icon": "string (Lucide React icon name)"
}
```

### Icon Mapping
Available icons (from Lucide React):
- `Scissors` - SGP-Clipper
- `Zap` - Typhoon Beacon
- `Brain` - AI/ML projects
- `Gamepad2` - Game/interactive projects
- `Database` - Data-related projects
- `Code` - Development/tool projects
- `Users` - Team projects
- `Calendar` - Dates

## Common Tasks

### Adding a New Project
1. Create a new JSON file in `/src/data/projects/`
2. Add to the import list in `ProjectsPage.tsx`
3. Add to the `projectsData` array in `ProjectsPage.tsx`

### Modifying Project Display
- Edit `/src/ProjectsPage.tsx` for layout/styling changes
- Projects are automatically sorted newest to oldest by date

### Theme Customization
- Theme variables are defined in CSS files
- Use `bg-te-bg`, `text-te-fg`, `bg-te-accent` utility classes
- Theme context handles dark/light mode switching

## CSS Custom Properties
The project uses a custom theme system with properties like:
- `bg-te-bg` - Background
- `text-te-fg` - Foreground text
- `bg-te-accent` - Accent color
- `bg-te-surface` - Surface background
- `border-te-border` - Border color
- `te-label` - Typography class for labels
- `te-module` - Module/box styling
- `te-button` - Button styling

## Development Guidelines

1. **Project Data**: Always store project information in JSON files, not in component code
2. **Sorting**: Projects are sorted by date automatically (newest to oldest)
3. **Icons**: Use Lucide React icons only; map icon names in the iconMap object
4. **Routing**: Use React Router for navigation between pages
5. **Styling**: Use Tailwind CSS with custom theme utility classes
6. **Typography**: Use `te-label` for consistent labeling and `font-black/bold` for hierarchy

## File Naming Conventions
- Component files: `PascalCase.tsx`
- Data files: `kebab-case.json`
- CSS files: `PascalCase.css`
- Asset files: `lowercase-with-hyphens`

## Pages
- `/` - Home page (App.tsx)
- `/projects` - Projects page (ProjectsPage.tsx)
- `/about` - About page (AboutPage.tsx)

## Important Notes
- Project dates are parsed from strings like "Feb 2026" or "April - October 2025"
- The `getDateValue()` function in ProjectsPage sorts based on year * 100 + month
- All projects have an icon property that maps to Lucide React components
