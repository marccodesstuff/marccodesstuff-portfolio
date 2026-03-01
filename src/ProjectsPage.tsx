import { Link } from 'react-router-dom';
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
import ThemeToggle from './ThemeToggle';

interface Project {
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
    icon: React.ReactNode;
}

const projects: Project[] = [
    {
        id: 'sgp-clipper',
        title: 'SGP-Clipper',
        tagline: 'SGP Business Data Extraction Tool',
        description: [
            'Developed a cross-browser extension (Chrome/Firefox) to streamline data extraction from sgpbusiness.com.',
            'Implemented one-click copying of Entity Name, UEN, and page URL for seamless workflow integration.',
            'Features customizable system prompts for generating formatted descriptions/research notes.',
            'Built using Manifest V3 architecture with pure JavaScript, adhering to modern extension security standards.'
        ],
        role: 'Extension Developer',
        type: 'Open Source Tool',
        date: 'Feb 2026',
        status: 'completed',
        featured: true,
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Manifest V3', 'Chrome API'],
        icon: <Scissors size={24} />
    },
    {
        id: 'typhoon-beacon',
        title: 'Philippine Typhoon Survival Beacon',
        tagline: 'AI-Powered Disaster Response System',
        description: [
            'Spearheaded a cross-functional team of 4 developers to develop a predictive neural network utilizing TensorFlow and Google Earth Engine.',
            'Achieved 97.8% validation accuracy (0.022 MSE) and 6.9% Mean Absolute Error to detect flood probability.',
            'Coordinated architecture design and code integration across model development, Flutter mobile app, and data pipeline components.',
            'Integrated OpenMeteo live telemetry and Google Gemini API to generate hyper-localized, context-aware safety advisories.'
        ],
        role: 'Lead Developer, ML Engineer',
        type: 'Hackathon Entry',
        date: 'Nov 2025 - Dec 2025',
        status: 'completed',
        featured: true,
        achievements: ['2nd Runner Up', 'Best Technical Execution', "People's Choice Award"],
        tech: ['TensorFlow', 'Google Earth Engine', 'Flutter', 'Gemini API', 'OpenMeteo'],
        icon: <Zap size={24} />
    },
    {
        id: 'knee-detection',
        title: 'Knee Tear Detection Platform',
        tagline: 'AI-Powered MRI Diagnostic System',
        description: [
            'Collaborated with a research team of 4 to conduct rigorous testing on 4 backbone architectures (Xception, ResNeXt, EfficientNet, DenseNet).',
            'Utilized stacking ensemble meta-learner to boost Sensitivity to 0.88 and F1-Score of 0.735.',
            'Developed clinically validated platform using microservices and event-driven architecture.',
            'Validated by AUF Radiologic Technology: "The system can be used to aid the diagnostic process of radiologists."'
        ],
        role: 'Full-Stack AI Engineer',
        type: 'Thesis',
        date: 'April - October 2025',
        status: 'completed',
        featured: true,
        tech: ['PyTorch', 'Microservices', 'Event-Driven Architecture', 'DICOM', 'FastMRI Dataset'],
        icon: <Brain size={24} />
    },
    {
        id: 'ai-director',
        title: 'Text-to-Logic System for Simulation Actor Behaviors',
        tagline: 'AI Director for Unreal Engine 5',
        description: [
            'Architecting a proof-of-concept AI Director system utilizing a quantized Nvidia Cosmos Reason model.',
            'Translating natural language prompts into complex actor behavior, automating manual industrial simulation scripting in Unreal Engine 5.',
            'Developing a custom C++ Unreal Engine plugin to bridge local LLM inference pipelines with Unreal Engine 5.',
            'Enabling real-time simulation updates without cloud dependencies.'
        ],
        role: 'Full-Stack AI Engineer',
        type: 'Side Project',
        date: 'Jan 2025 - Present',
        status: 'in-progress',
        featured: true,
        tech: ['Nvidia Cosmos Reason', 'C++', 'Unreal Engine 5', 'Local LLM'],
        icon: <Gamepad2 size={24} />
    },
    {
        id: 'monitored-quiz',
        title: 'Monitored Quiz Application',
        tagline: 'AI-Powered Student Behavior Monitoring',
        description: [
            'Developed a web-based quiz application integrating Google\'s Teachable Machine AI for real-time student behavior monitoring.',
            'Automatically halts quiz when violations exceed predefined thresholds (3-8 seconds depending on behavior type).',
            'Implemented client-side computer vision using TensorFlow.js to detect 5 behavior categories.',
            'Built responsive full-stack application using vanilla JavaScript, HTML5, and CSS3 with webcam integration.'
        ],
        role: 'Full-Stack Developer',
        type: 'Course Final Requirement',
        date: 'Nov 2025',
        status: 'completed',
        tech: ['TensorFlow.js', 'Teachable Machine', 'JavaScript', 'HTML5', 'CSS3'],
        icon: <Brain size={24} />
    },
    {
        id: 'body-microgames',
        title: 'Interactive Body-Controlled Web Microgames',
        tagline: 'Pose Detection Gaming Platform',
        description: [
            'Built an interactive web game with 5 body-movement-controlled microgames using MediaPipe.js for real-time pose detection at 20 FPS.',
            'Developed game engine with state management, dynamic scoring, particle effects system, and custom Web Audio API sound generation.',
            'Implemented full accessibility support including keyboard navigation and responsive design for cross-device compatibility.'
        ],
        role: 'Full-Stack Developer',
        type: 'Course Midterm Requirement',
        date: 'Sept 2025',
        status: 'completed',
        tech: ['MediaPipe.js', 'JavaScript', 'Web Audio API', 'HTML5 Canvas'],
        icon: <Gamepad2 size={24} />
    },
    {
        id: 'water-management',
        title: 'Water Management and Processing Web Application',
        tagline: 'Environmental Data Platform',
        description: [
            'Developed a full-stack web application using Next.js for client and server operations and Express.js to handle mySQL database connectivity.',
            'Implemented RESTful API endpoints with Express.js to perform CRUD operations on water management records.',
            'Designed and deployed a responsive user interface that streamlined water resource tracking workflows.'
        ],
        role: 'Full Stack Web Developer',
        type: 'Course Final/Freelance',
        date: 'May 2024',
        status: 'completed',
        tech: ['Next.js', 'Express.js', 'mySQL', 'RESTful API'],
        icon: <Database size={24} />
    },
    {
        id: 'pageshutter',
        title: 'PageShutter',
        tagline: 'Notion Integration Worker',
        description: [
            'Created a TypeScript-based Notion Worker for seamless Notion API integrations and automation.',
            'Designed to extend Notion\'s capabilities with custom worker functionality on serverless edge infrastructure.',
            'Provides a foundation for building Notion-powered applications and data processing pipelines.',
            'Published under MIT License for open-source use and community contributions.'
        ],
        role: 'Project Creator',
        type: 'Notion Worker',
        date: 'Feb 2026',
        status: 'completed',
        tech: ['TypeScript', 'Notion API', 'Cloudflare Workers', 'Serverless'],
        links: [{ label: 'View Repository', url: 'https://github.com/marccodesstuff/pageshutter' }],
        icon: <Code size={24} />
    }
];

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
    const sortedProjects = [...projects].sort((a, b) => getDateValue(b.date) - getDateValue(a.date));

    return (
        <div className="min-h-screen bg-te-bg text-te-fg font-sans selection:bg-te-accent selection:text-white">

            {/* --- HEADER --- */}
            <header className="sticky top-0 z-50 px-6 md:px-8 py-4 flex justify-between items-center bg-te-bg/90 backdrop-blur-md border-b border-te-border">
                <Link to="/" className="te-label font-bold text-te-fg tracking-[0.2em] hover:text-te-accent transition-colors">SYSTEM: 04.2</Link>

                <nav className="hidden md:flex items-center gap-12 text-[10px] te-label font-bold">
                    <Link to="/" className="text-te-muted hover:text-te-fg transition-colors">01. INDEX</Link>
                    <Link to="/projects" className="text-te-accent border-b border-te-accent pb-1">02. PROJECTS</Link>
                    <Link to="/about" className="text-te-muted hover:text-te-fg transition-colors">03. ABOUT</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="mailto:velasquezmarcvictor@gmail.com"
                        className="te-button bg-te-accent border-te-accent text-white px-4 py-2 text-[10px] te-label font-bold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                    >
                        CONTACT <ArrowUpRight size={12} />
                    </a>
                </div>
            </header>

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
                    <a
                        href="mailto:velasquezmarcvictor@gmail.com"
                        className="te-button bg-te-accent border-te-accent text-white px-8 py-4 te-label font-bold text-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-3"
                    >
                        INITIALIZE_CONTACT <ArrowUpRight size={20} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default ProjectsPage;

