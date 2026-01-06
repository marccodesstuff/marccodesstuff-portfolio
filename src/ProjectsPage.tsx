import { Link } from 'react-router-dom';
import {
    ArrowUpRight,
    Calendar,
    Users,
    Zap,
    Brain,
    Database,
    Gamepad2,
    ArrowLeft
} from 'lucide-react';

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
        id: 'bantaybayan',
        title: 'BantayBayan',
        tagline: 'Philippine Storm Survival Beacon',
        description: [
            'Led a cross-functional team of 4 developers to develop a predictive neural network utilizing TensorFlow and Google Earth Engine.',
            'Achieved 97.8% validation accuracy (0.022 MSE) and 6.9% Mean Absolute Error.',
            'Coordinated architecture design across model development, Flutter mobile app, and data pipelines.',
            'Integrated OpenMeteo live telemetry and Google Gemini API for hyper-localized, context-aware safety advisories.'
        ],
        role: 'Lead Developer, ML Engineer',
        type: 'Hackathon Entry',
        date: 'December 2025',
        status: 'completed',
        featured: true,
        achievements: ['3rd Place - JPCS Digital Solution Hackathon 2025'],
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
        title: 'AI Director System',
        tagline: 'Text-to-Logic for Simulation Behaviors',
        description: [
            'Architecting a proof-of-concept AI Director system utilizing transformer and diffusion model pipeline.',
            'Translating natural language prompts into complex actor behavior, automating manual industrial simulation scripting.',
            'Developing low-latency MCP server to bridge local LLM inference with Unreal Engine 5.',
            'Enabling real-time simulation updates without cloud dependencies.'
        ],
        role: 'Project Lead',
        type: 'Side Project',
        date: 'January 2025 - Present',
        status: 'in-progress',
        featured: true,
        tech: ['Transformers', 'Diffusion Models', 'MCP', 'Unreal Engine 5', 'Local LLM'],
        icon: <Gamepad2 size={24} />
    },
    {
        id: 'graphrag',
        title: 'GraphRAG System',
        tagline: 'Personal Knowledge Base Integration',
        description: [
            'Built a graph-based retrieval augmented generation system for personal knowledge management.',
            'Integrated with Obsidian for seamless note-taking and knowledge retrieval.',
            'Implemented LlamaIndex for efficient vector embeddings and semantic search.'
        ],
        role: 'Solo Developer',
        type: 'Side Project',
        date: '2024',
        status: 'completed',
        tech: ['LlamaIndex', 'RAG', 'Obsidian', 'Python', 'Vector DB'],
        icon: <Database size={24} />
    }
];

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-te-bg text-te-fg font-sans selection:bg-te-accent selection:text-white">

            {/* --- HEADER --- */}
            <header className="sticky top-0 z-50 px-6 md:px-8 py-4 flex justify-between items-center bg-te-bg/90 backdrop-blur-md border-b border-te-border">
                <Link to="/" className="flex items-center gap-3 group">
                    <ArrowLeft size={16} className="text-te-muted group-hover:text-te-accent transition-colors" />
                    <span className="te-label font-bold text-te-fg tracking-[0.2em]">BACK: INDEX</span>
                </Link>

                <nav className="hidden md:flex items-center gap-12 text-[10px] te-label font-bold">
                    <Link to="/" className="text-te-muted hover:text-te-fg transition-colors">01. INDEX</Link>
                    <Link to="/projects" className="text-te-accent border-b border-te-accent pb-1">02. PROJECTS</Link>
                    <Link to="/about" className="text-te-muted hover:text-te-fg transition-colors">03. ABOUT</Link>
                </nav>

                <div className="te-label opacity-40">CAT: PROJECTS_LIST</div>
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

                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="bg-te-surface p-8 md:p-12 hover:bg-white transition-colors group relative overflow-hidden"
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

