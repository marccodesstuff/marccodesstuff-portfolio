import {
    ArrowUpRight,
    Calendar,
    Users,
    Zap,
    Brain,
    Database,
    Gamepad2,
    Scissors,
    Code
} from 'lucide-react';

import type { Project } from '../types/project';

// Import all project JSON files
import sgpClipperData from '../data/projects/sgp-clipper.json';
import typhoonBeaconData from '../data/projects/typhoon-beacon.json';
import kneeDetectionData from '../data/projects/knee-detection.json';
import aiDirectorData from '../data/projects/ai-director.json';
import monitoredQuizData from '../data/projects/monitored-quiz.json';
import bodyMicrogamesData from '../data/projects/body-microgames.json';
import waterManagementData from '../data/projects/water-management.json';
import pageShutterData from '../data/projects/pageshutter.json';

// Map icon names to components
const iconMap: { [key: string]: React.ReactNode } = {
    'Scissors': <Scissors size={24} />,
    'Zap': <Zap size={24} />,
    'Brain': <Brain size={24} />,
    'Gamepad2': <Gamepad2 size={24} />,
    'Database': <Database size={24} />,
    'Code': <Code size={24} />
};

const projectsData: Project[] = [
    sgpClipperData,
    typhoonBeaconData,
    kneeDetectionData,
    aiDirectorData,
    monitoredQuizData,
    bodyMicrogamesData,
    waterManagementData,
    pageShutterData
].map((project) => ({
    ...project,
    icon: iconMap[project.icon] || <Code size={24} />
})) as Project[];

const ProjectsPage = () => {
    // Parse date string and return a sortable value
    const getDateValue = (dateStr: string): number => {
        const months: { [key: string]: number } = {
            'jan': 1, 'feb': 2, 'mar': 3, 'apr': 4, 'may': 5, 'jun': 6,
            'jul': 7, 'aug': 8, 'sept': 9, 'oct': 10, 'nov': 11, 'dec': 12
        };

        // Extract first date from strings like "Jan 2025" or "April - October 2025"
        const monthMatch = dateStr.match(/(\w+)\s+(\d{4})/);
        if (!monthMatch) return 0;

        const month = months[monthMatch[1].toLowerCase()];
        const year = parseInt(monthMatch[2]);

        return year * 100 + month;
    };

    // Sort projects by date (newest to oldest)
    const sortedProjects = [...projectsData].sort((a, b) => getDateValue(b.date) - getDateValue(a.date));

    return (
        <>
            {/* --- PAGE HEADER --- */}
            <section className="px-6 md:px-8 py-16 border-b border-te-border bg-te-surface">
                <div className="max-w-[1400px] mx-auto">
                    <span className="te-label border-l-2 border-te-accent pl-2 text-te-accent mb-4 block">PORTFOLIO_CORE</span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Built Systems</h1>
                    <p className="text-xl font-medium max-w-2xl leading-tight">
                        A catalog of digital architecture — from AI-powered diagnostics to disaster response beacons.
                    </p>
                </div>
            </section>

            {/* --- PROJECTS GRID --- */}
            <main className="p-4 md:p-6 lg:p-8">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 gap-1 border border-te-border bg-te-border">

                    {sortedProjects.map((project) => (
                        <article
                            key={project.id}
                            className="bg-te-surface p-8 md:p-12 hover:bg-te-surface-hover transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-8 te-label opacity-20 group-hover:opacity-40 select-none">
                                REF_ID: {project.id.toUpperCase()}
                            </div>

                            <div className="grid md:grid-cols-12 gap-12">
                                {/* Left: Meta */}
                                <div className="md:col-span-4 flex flex-col gap-8">
                                    <div className="w-16 h-16 te-module flex items-center justify-center text-te-accent shadow-sm">
                                        {project.icon}
                                    </div>

                                    <div>
                                        <span className={`te-label px-2 py-0.5 border ${project.status === 'in-progress' ? 'border-te-accent text-te-accent' : 'border-te-border text-te-muted'}`}>
                                            {project.status === 'in-progress' ? 'STATUS_ACTIVE' : project.type.toUpperCase()}
                                        </span>
                                        <h2 className="text-4xl font-black uppercase tracking-tighter mt-4 group-hover:text-te-accent transition-colors">{project.title}</h2>
                                        <p className="te-label font-bold tracking-normal mt-2 text-te-muted">{project.tagline}</p>
                                    </div>

                                    <div className="space-y-3 te-label text-[11px] leading-tight">
                                        <div className="flex items-center gap-3">
                                            <Users size={12} className="text-te-muted" />
                                            <span className="text-te-fg">{project.role}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Calendar size={12} className="text-te-muted" />
                                            <span className="text-te-fg">{project.date}</span>
                                        </div>
                                    </div>

                                    {project.achievements && (
                                        <div className="flex flex-wrap gap-2">
                                            {project.achievements.map((ach, i) => (
                                                <span key={i} className="te-label px-3 py-1.5 border border-te-accent/30 text-te-accent font-bold">
                                                    {ach}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className="md:col-span-8 flex flex-col justify-between">
                                    <ul className="space-y-4">
                                        {project.description.map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <div className="w-1.5 h-1.5 bg-te-accent shrink-0 mt-2" />
                                                <p className="text-lg font-medium leading-snug">{item}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-12">
                                        <div className="te-label mb-4 opacity-40">TECHNICAL_DEPENDENCIES</div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="te-label px-3 py-1 bg-te-bg border border-te-border text-te-fg font-bold"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            {/* --- CTA FOOTER --- */}
            <footer className="mt-8 p-12 md:p-24 bg-te-surface border-t border-te-border text-center">
                <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
                    <div className="te-label">END_OF_CATALOG</div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Request_Access</h2>
                    <p className="text-xl font-medium">I'm always open to discussing new systems and digital architecture.</p>
                    <button
                        className="te-button bg-te-accent border-te-accent text-white px-8 py-4 te-label font-bold text-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-3"
                    >
                        INITIALIZE_CONTACT <ArrowUpRight size={20} />
                    </button>
                </div>
            </footer>
        </>
    );
};

export default ProjectsPage;
