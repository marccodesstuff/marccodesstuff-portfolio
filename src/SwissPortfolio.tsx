import { Link } from 'react-router-dom';
import {
    ArrowUpRight,
    MapPin,
    Terminal,
    Github,
    Linkedin,
    FileText,
    Mail,
    Brain
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const SwissPortfolio = () => {
    return (
        <div className="min-h-screen bg-te-bg text-te-fg font-sans selection:bg-te-accent selection:text-white">

            {/* --- HEADER --- */}
            <header className="sticky top-0 z-50 px-6 md:px-8 py-4 flex justify-between items-center bg-te-bg/90 backdrop-blur-md border-b border-te-border">
                <Link to="/" className="te-label font-bold text-te-fg tracking-[0.2em] hover:text-te-accent transition-colors">SYSTEM: 04.2</Link>

                <nav className="hidden md:flex items-center gap-12 text-[10px] te-label font-bold">
                    <Link to="/" className="text-te-accent border-b border-te-accent pb-1">01. INDEX</Link>
                    <Link to="/projects" className="text-te-muted hover:text-te-fg transition-colors">02. PROJECTS</Link>
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

            {/* --- MAIN GRID --- */}
            <main className="p-4 md:p-6 lg:p-8">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-1 border-t border-l border-te-border bg-te-border">

                    {/* --- HERO BLOCK --- */}
                    <div className="md:col-span-8 bg-te-surface p-8 md:p-12 min-h-[450px] flex flex-col justify-between border-r border-b border-te-border relative overflow-hidden">
                        <div className="absolute top-4 right-4 te-label opacity-30 select-none">
                            MOD_REF: 8891-TR
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="te-label px-2 py-0.5 border border-te-accent text-te-accent">ACTIVE</span>
                                <span className="te-label">OP_READY: 100%</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                                Marc Victor<br />
                                <span className="text-te-accent">Velasquez</span>
                            </h1>
                            <p className="te-label text-base font-bold mt-6 tracking-normal">Digital Architect / Backend Engineer</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <p className="text-xl font-medium max-w-md leading-tight">
                                Building high-density backend systems and AI research pipelines.
                            </p>
                            <div className="te-label text-[9px] leading-tight text-right opacity-40">
                                44.5895° N, 15.9486° E<br />
                                BUILD_REV: 2026.01.06
                            </div>
                        </div>
                    </div>

                    {/* --- STATUS MODULES --- */}
                    <div className="md:col-span-4 grid grid-cols-1 gap-1">
                        {/* Location */}
                        <div className="bg-te-surface p-6 border-r border-b border-te-border flex flex-col justify-between group">
                            <div className="flex justify-between items-start">
                                <span className="te-label">Location</span>
                                <MapPin size={14} className="text-te-accent" />
                            </div>
                            <div className="mt-8">
                                <p className="text-2xl font-black tracking-tight uppercase">Angeles, PH</p>
                                <p className="te-label mt-1">UTC +08:00 • REMOTE_SECURED</p>
                            </div>
                        </div>

                        {/* Current Focus */}
                        <div className="bg-te-surface p-6 border-r border-b border-te-border flex flex-col justify-between group">
                            <div className="flex justify-between items-start">
                                <span className="te-label">Research_Focus</span>
                                <Brain size={14} className="text-te-accent" />
                            </div>
                            <div className="mt-8">
                                <p className="text-lg font-black tracking-tight leading-tight uppercase group-hover:text-te-accent transition-colors">
                                    Transformer & Diffusion Architectures
                                </p>
                                <p className="te-label mt-2">Spring_Security_v6.x</p>
                            </div>
                        </div>
                    </div>

                    {/* --- FEATURED PROJECTS --- */}
                    <div className="md:col-span-6 bg-te-surface p-8 border-r border-b border-te-border group cursor-pointer transition-colors hover:bg-te-surface-hover">
                        <div className="flex justify-between items-start mb-12">
                            <span className="te-label border-l-2 border-te-accent pl-2">MODULE_01: HACKATHON_WIN</span>
                            <ArrowUpRight size={20} className="text-te-muted group-hover:text-te-fg transition-all" />
                        </div>
                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Typhoon Survival Beacon</h3>
                        <p className="text-sm font-medium mb-8 leading-relaxed text-te-muted max-w-sm">
                            AI-powered disaster response with 97.8% flood prediction accuracy using TensorFlow.
                        </p>
                        <div className="flex gap-2 te-label">
                            <span className="px-2 py-0.5 bg-te-bg border border-te-border">GEMINI.AI</span>
                            <span className="px-2 py-0.5 bg-te-bg border border-te-border">TENSORFLOW</span>
                            <span className="px-2 py-0.5 bg-te-bg border border-te-border">FLUTTER</span>
                        </div>
                    </div>

                    <div className="md:col-span-6 bg-te-surface p-8 border-r border-b border-te-border group cursor-pointer transition-colors hover:bg-te-surface-hover">
                        <div className="flex justify-between items-start mb-12">
                            <span className="te-label border-l-2 border-te-accent pl-2">MODULE_02: RESEARCH</span>
                            <ArrowUpRight size={20} className="text-te-muted group-hover:text-te-fg transition-all" />
                        </div>
                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Knee Tear Detection</h3>
                        <p className="text-sm font-medium mb-8 leading-relaxed text-te-muted max-w-sm">
                            Clinically validated MRI diagnostic platform with 0.88 Sensitivity using ensemble learning.
                        </p>
                        <div className="flex gap-2 te-label">
                            <span className="px-2 py-0.5 bg-te-bg border border-te-border">PYTORCH</span>
                            <span className="px-2 py-0.5 bg-te-bg border border-te-border">MICROSERVICES</span>
                            <span className="px-2 py-0.5 bg-te-bg border border-te-border">DICOM</span>
                        </div>
                    </div>

                    {/* --- TECH STACK MODULE --- */}
                    <div className="md:col-span-12 bg-te-surface p-8 md:p-12 border-r border-b border-te-border grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-4 mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Terminal size={18} className="text-te-accent" />
                                <h3 className="te-label text-base font-bold tracking-normal text-te-fg">CORE_STACK.EXE</h3>
                            </div>
                            <div className="te-label text-[9px] opacity-30">HEX_DUMP 0x3A2</div>
                        </div>

                        {[
                            { label: "Languages", items: ["Python", "C++", "Java", "Dart"] },
                            { label: "Backend", items: ["Spring Boot", "Next.js", "Flutter", "Express"] },
                            { label: "Infra", items: ["Azure", "Oracle Cloud", "AppWrite", "Docker"] },
                            { label: "AI_ML", items: ["PyTorch", "TensorFlow", "HuggingFace", "Pandas"] }
                        ].map((group) => (
                            <div key={group.label} className="border-t border-te-border pt-4">
                                <h4 className="te-label mb-4 text-te-muted">{group.label}</h4>
                                <ul className="space-y-1">
                                    {group.items.map(item => (
                                        <li key={item} className="text-xs font-bold font-mono uppercase tracking-tight flex items-center gap-2">
                                            <div className="w-1 h-1 bg-te-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* --- FOOTER MODULE --- */}
                    <footer className="md:col-span-12 bg-te-bg p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 border-r border-b border-te-border">
                        <div className="text-center md:text-left">
                            <div className="te-label mb-4">SESSION_END</div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                                Initialize<br />Collaboration
                            </h2>
                            <p className="te-label text-te-accent font-bold text-lg tracking-[0.1em]">velasquezmarcvictor@gmail.com</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { icon: <Github size={20} />, label: "GITHUB" },
                                { icon: <Linkedin size={20} />, label: "LINKEDIN" },
                                { icon: <FileText size={20} />, label: "RESUME" },
                                { icon: <Mail size={20} />, label: "EMAIL" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    className="te-button p-6 flex flex-col items-center justify-center gap-3 group hover:bg-te-surface-hover transition-colors opacity-50"
                                >
                                    <div className="text-te-muted group-hover:text-te-accent transition-colors">
                                        {social.icon}
                                    </div>
                                    <span className="te-label">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </footer>
                </div>

                <div className="max-w-[1400px] mx-auto mt-8 flex justify-between items-center px-2">
                    <div className="te-label opacity-40">DESIGN_SYSTEM: TE_01-SWISS</div>
                    <div className="te-label opacity-40">© 2026 MARC VICTOR VELASQUEZ</div>
                </div>
            </main>
        </div>
    );
};

export default SwissPortfolio;

