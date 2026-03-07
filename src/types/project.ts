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
