import { Link } from 'react-router-dom';
import {
    ArrowUpRight,
    Calendar,
    Users,
    Award,
    Zap,
    Brain,
    Database,
    Gamepad2
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
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#e07a5f] selection:text-black">

            {/* --- HEADER --- */}
            <header className="sticky top-0 z-50 px-6 md:px-8 py-6 flex justify-between items-center border-b border-white/5 bg-black/80 backdrop-blur-md">
                <Link to="/" className="font-bold text-xl tracking-tight hover:text-[#e07a5f] transition-colors">MV</Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link to="/" className="text-neutral-500 hover:text-white transition-colors">Home</Link>
                    <Link to="/projects" className="text-white">Projects</Link>
                </nav>

                <a
                    href="mailto:velasquezmarcvictor@gmail.com"
                    className="bg-[#e07a5f] hover:bg-[#d86a4f] text-black px-5 py-2.5 text-sm font-bold flex items-center gap-2 transition-colors rounded-sm"
                >
                    Let's Talk <ArrowUpRight size={16} />
                </a>
            </header>

            {/* --- PAGE HEADER --- */}
            <section className="px-6 md:px-8 py-12 md:py-16 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <span className="text-xs text-[#e07a5f] font-bold uppercase tracking-wider mb-4 block">Portfolio</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Projects</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl">
                        A collection of systems I've built — from AI-powered diagnostics to disaster response beacons.
                    </p>
                </div>
            </section>

            {/* --- PROJECTS GRID --- */}
            <main className="p-6 md:p-8">
                <div className="max-w-[1400px] mx-auto space-y-6">

                    {/* Featured Projects */}
                    {projects.filter(p => p.featured).map((project) => (
                        <article
                            key={project.id}
                            className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[#e07a5f]/30 group transition-colors"
                        >
                            <div className="grid md:grid-cols-12 gap-8">
                                {/* Left: Meta */}
                                <div className="md:col-span-4 flex flex-col gap-6">
                                    <div className="w-12 h-12 bg-[#e07a5f]/10 text-[#e07a5f] rounded-xl flex items-center justify-center">
                                        {project.icon}
                                    </div>

                                    <div>
                                        <span className={`text-xs font-bold uppercase tracking-wider ${project.status === 'in-progress' ? 'text-[#e07a5f]' : 'text-neutral-500'}`}>
                                            {project.status === 'in-progress' ? '● In Progress' : project.type}
                                        </span>
                                        <h2 className="text-3xl font-bold mt-2 group-hover:text-[#e07a5f] transition-colors">{project.title}</h2>
                                        <p className="text-neutral-400 mt-1">{project.tagline}</p>
                                    </div>

                                    <div className="space-y-2 text-sm text-neutral-500">
                                        <div className="flex items-center gap-2">
                                            <Users size={14} className="text-[#e07a5f]/60" />
                                            <span>{project.role}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="text-[#e07a5f]/60" />
                                            <span>{project.date}</span>
                                        </div>
                                    </div>

                                    {project.achievements && (
                                        <div className="flex flex-wrap gap-2">
                                            {project.achievements.map((ach, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 text-xs border border-[#2a9d8f]/30 text-[#2a9d8f] px-3 py-1.5 rounded-sm">
                                                    <Award size={12} /> {ach}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className="md:col-span-8 flex flex-col justify-between">
                                    <ul className="space-y-3 text-neutral-300">
                                        {project.description.map((item, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="text-[#e07a5f] mt-1.5 opacity-60">•</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-8">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full text-neutral-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}

                    {/* Other Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-6 pt-8">
                        {projects.filter(p => !p.featured).map((project) => (
                            <article
                                key={project.id}
                                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-[#e07a5f]/30 group transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 bg-white/[0.03] rounded-lg flex items-center justify-center text-neutral-500 group-hover:text-[#e07a5f] transition-colors">
                                        {project.icon}
                                    </div>
                                    <span className="text-xs text-neutral-500 uppercase tracking-wider">{project.type}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#e07a5f] transition-colors">{project.title}</h3>
                                <p className="text-neutral-400 text-sm mb-4">{project.tagline}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs bg-white/[0.03] border border-white/10 px-2 py-1 rounded-full text-neutral-500"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </main>

            {/* --- CTA FOOTER --- */}
            <footer className="mt-8 mx-4 md:mx-6 mb-4 md:mb-6 rounded-2xl p-8 md:p-12 bg-[#0a0a0a] border border-white/5 text-center">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Want to collaborate?</h2>
                    <p className="text-neutral-500 mb-6">I'm always open to discussing new projects and opportunities.</p>
                    <a
                        href="mailto:velasquezmarcvictor@gmail.com"
                        className="inline-flex items-center gap-2 bg-[#e07a5f] hover:bg-[#d86a4f] text-black px-6 py-3 font-bold transition-colors rounded-sm"
                    >
                        Get in Touch <ArrowUpRight size={18} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default ProjectsPage;
