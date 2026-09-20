export interface ProjectJSON {
    id: string;
    title: string;
    tagline: string;
    description: string[];
    role: string;
    type: string;
    date: string;
    status: 'completed' | 'in-progress';
    featured?: boolean;
    achievements?: string[];
    tech: string[];
    links?: { label: string; url: string }[];
    icon: string;
}

export interface Project extends Omit<ProjectJSON, 'icon'> {
    icon: React.ReactNode;
}

/** Filter buckets on the Projects page. Add a new id here, in the JSON, and in CATEGORY_FILTERS. */
export type ProjectCategory = 'ai-ml' | 'automation' | 'fullstack';

export interface ProjectLink {
    label: string;
    url: string;
}

/** Shape of the entries in `src/data/projects.json` and `src/data/projects/*.json`. */
export interface ProjectEntry {
    id: string;
    title: string;
    tagline: string;
    description: string;
    tech: string[];
    date: string;
    status: string;
    icon: string;
    categories?: string[];
    links?: ProjectLink[];
}
