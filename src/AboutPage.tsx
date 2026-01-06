import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    GraduationCap,
    Award,
    Cloud,
    MapPin,
    Mail,
    Phone,
    Download,
    Trophy,
    BookOpen,
    Briefcase
} from 'lucide-react';

const certifications = [
    { provider: 'Microsoft', name: 'Azure Fundamentals', color: '#0078d4' },
    { provider: 'Microsoft', name: 'Azure AI Fundamentals', color: '#0078d4' },
    { provider: 'Microsoft', name: 'Azure Data Fundamentals', color: '#0078d4' },
    { provider: 'Oracle', name: 'OCI 2025 AI Foundations Associate', color: '#f80000' },
    { provider: 'Oracle', name: 'OCI 2025 Generative AI Professional', color: '#f80000' },
];

const achievements = [
    { title: 'JPCS Digital Solution Hackathon 2025', place: '3rd Place', icon: <Trophy size={18} /> },
    { title: 'HexCore Capture the Flag', place: '1st Place', icon: <Trophy size={18} /> },
    { title: "GDG-HAU's The AI Hack 2025", place: '2nd Runner Up', icon: <Trophy size={18} /> },
    { title: "GDG-HAU's The AI Hack 2025", place: 'Best Technical Execution', icon: <Award size={18} /> },
    { title: "GDG-HAU's The AI Hack 2025", place: "People's Choice Award", icon: <Award size={18} /> },
];

const skills = {
    languages: ['Python', 'Java', 'C++', 'Dart', 'SQL', 'JavaScript/TypeScript'],
    appDev: ['Spring Boot', 'Next.js', 'Flutter', 'Express.js'],
    aiData: ['PyTorch', 'TensorFlow/Lite', 'Google Earth Engine', 'Pandas', 'NumPy', 'HuggingFace', 'Power BI'],
    cloudTools: ['Azure', 'Oracle Cloud', 'AppWrite', 'AWS (LocalStack)', 'Google Colab', 'Kaggle', 'Git/GitHub', 'Linux (WSL2)', 'Supabase', 'Docker'],
};

const AboutPage = () => {
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
                    <Link to="/projects" className="text-te-muted hover:text-te-fg transition-colors">02. PROJECTS</Link>
                    <Link to="/about" className="text-te-accent border-b border-te-accent pb-1">03. ABOUT</Link>
                </nav>

                <div className="te-label opacity-40">USER_PROFILE: VELASQUEZ_MV</div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="p-4 md:p-6 lg:p-8">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-1 border border-te-border bg-te-border">

                    {/* --- INTRO BLOCK --- */}
                    <div className="md:col-span-8 bg-te-surface p-8 md:p-12 min-h-[400px] flex flex-col justify-between border-r border-b border-te-border relative overflow-hidden">
                        <div className="absolute top-4 right-8 te-label opacity-20 select-none">BIO_DATA.LOG</div>
                        <div>
                            <span className="te-label border-l-2 border-te-accent pl-2 text-te-accent mb-6 block">CORE_IDENTITY</span>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                                Marc Victor<br />Velasquez
                            </h1>
                            <p className="text-xl font-medium max-w-xl leading-tight">
                                Computer Science student synthesizing AI research and practical backend architecture.
                            </p>
                        </div>
                        <p className="te-label text-base font-bold tracking-normal text-te-muted uppercase mt-8 leading-relaxed max-w-lg">
                            Diving into transformer architectures while securing enterprise systems with Spring Boot.
                        </p>
                    </div>

                    {/* --- CONTACT CARD --- */}
                    <div className="md:col-span-4 grid grid-cols-1 gap-1">
                        <div className="bg-te-surface p-8 border-b border-te-border">
                            <h3 className="te-label mb-8">Comms_Channels</h3>
                            <div className="space-y-6">
                                <a href="mailto:velasquezmarcvictor@gmail.com" className="flex items-center gap-4 group">
                                    <Mail size={16} className="text-te-muted group-hover:text-te-accent transition-colors" />
                                    <span className="text-sm font-bold font-mono tracking-tight group-hover:text-te-accent transition-colors">velasquezmarcvictor@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4">
                                    <Phone size={16} className="text-te-muted" />
                                    <span className="text-sm font-bold font-mono tracking-tight">(+63) 960-824-9295</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin size={16} className="text-te-muted" />
                                    <span className="text-sm font-bold font-mono tracking-tight">Angeles City, PH</span>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="bg-te-accent text-white p-8 flex flex-col justify-between hover:brightness-110 active:scale-[0.98] transition-all group">
                            <div className="flex justify-between items-start">
                                <div className="te-label text-white/70">EXPORT_SYSTEM</div>
                                <Download size={20} className="text-white/60 group-hover:text-white transition-colors" />
                            </div>
                            <div className="mt-8">
                                <p className="text-2xl font-black tracking-tight uppercase">Download Resume</p>
                                <p className="te-label text-white/60 mt-1">PDF_FORMAT • REV_2026.01</p>
                            </div>
                        </a>
                    </div>

                    {/* --- EDUCATION & ACHIEVEMENTS --- */}
                    <div className="md:col-span-6 bg-te-surface p-8 md:p-12 border-r border-b border-te-border">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 te-module flex items-center justify-center text-te-accent">
                                <GraduationCap size={20} />
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter">Academic_Trace</h2>
                        </div>

                        <div className="border-l-2 border-te-border pl-8 relative">
                            <div className="absolute top-0 -left-[5px] w-2 h-2 bg-te-accent" />
                            <h3 className="text-xl font-black uppercase tracking-tight">Angeles University Foundation</h3>
                            <p className="te-label font-bold text-te-muted mt-1">BS Computer Science</p>
                            <p className="te-label text-[10px] mt-2 opacity-50">AUG 2022 - PRESENT</p>
                            <div className="mt-8 space-y-4">
                                <span className="inline-flex items-center gap-3 te-label px-3 py-1.5 border border-te-accent/30 text-te-accent font-bold bg-white/50">
                                    <BookOpen size={12} /> COLLEGE SCHOLAR (23-24)
                                </span>
                                <p className="text-sm font-medium leading-relaxed max-w-sm text-te-muted">
                                    Core Research: Machine Learning, Generative AI, Systems Architecture.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6 bg-te-surface p-8 md:p-12 border-b border-te-border">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 te-module flex items-center justify-center text-te-accent">
                                <Trophy size={20} />
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter">Event_History</h2>
                        </div>

                        <div className="space-y-4">
                            {achievements.map((ach, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 border border-te-border group hover:bg-white transition-colors">
                                    <div className="text-te-accent mt-0.5 group-hover:scale-110 transition-transform">{ach.icon}</div>
                                    <div>
                                        <p className="text-sm font-black uppercase tracking-tight">{ach.place}</p>
                                        <p className="te-label text-[10px] text-te-muted mt-1">{ach.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- CERTIFICATIONS --- */}
                    <div className="md:col-span-12 bg-te-surface p-8 md:p-12 border-b border-te-border">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 te-module flex items-center justify-center text-te-muted">
                                <Cloud size={20} />
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter">Validated_Auths</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {certifications.map((cert, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 border border-te-border group hover:bg-white transition-colors">
                                    <div
                                        className="w-10 h-10 te-module flex items-center justify-center text-white font-black text-sm"
                                        style={{ backgroundColor: cert.color }}
                                    >
                                        {cert.provider.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-black uppercase tracking-tight">{cert.name}</p>
                                        <p className="te-label text-[10px] text-te-muted mt-1">{cert.provider}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- SKILLS MODULES --- */}
                    <div className="md:col-span-12 bg-te-surface p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-16">
                            <div className="w-12 h-12 te-module flex items-center justify-center text-te-accent">
                                <Briefcase size={20} />
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter">Technical_Specs</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { label: "LANGUAGES.EXE", data: skills.languages },
                                { label: "APP_ENV.SYS", data: skills.appDev },
                                { label: "AI_MATH.ML", data: skills.aiData },
                                { label: "CLOUD_INFRA.OPS", data: skills.cloudTools }
                            ].map((group) => (
                                <div key={group.label} className="border-t border-te-border pt-6">
                                    <h4 className="te-label mb-6 text-te-muted">{group.label}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {group.data.map(skill => (
                                            <span key={skill} className="te-label px-2 py-1 bg-te-bg border border-te-border font-bold">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto mt-8 flex justify-between items-center px-2">
                    <div className="te-label opacity-40">SYSTEM_RECOVERY: ACTIVE</div>
                    <div className="flex gap-4">
                        <a href="#" className="te-label hover:text-te-accent transition-colors">GITHUB</a>
                        <a href="#" className="te-label hover:text-te-accent transition-colors">LINKEDIN</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
