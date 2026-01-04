import { Link } from 'react-router-dom';
import {
    ArrowUpRight,
    ArrowLeft,
    GraduationCap,
    Award,
    Cloud,
    MapPin,
    Mail,
    Phone,
    Github,
    Linkedin,
    FileText,
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
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#e07a5f] selection:text-black">

            {/* --- HEADER --- */}
            <header className="px-6 md:px-8 py-6 flex justify-between items-center border-b border-white/10">
                <Link to="/" className="flex items-center gap-3 text-gray-400 hover:text-white">
                    <ArrowLeft size={20} />
                    <span className="font-bold text-xl tracking-tight text-white">MV</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                    <Link to="/" className="hover:text-white">Index</Link>
                    <Link to="/projects" className="hover:text-white">Projects</Link>
                    <Link to="/about" className="text-white">About</Link>
                </nav>

                <a
                    href="mailto:velasquezmarcvictor@gmail.com"
                    className="bg-[#e07a5f] hover:bg-[#d86a4f] text-black px-5 py-2.5 text-sm font-bold flex items-center gap-2"
                >
                    Let's Talk <ArrowUpRight size={16} />
                </a>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="p-6 md:p-8">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* --- INTRO BLOCK --- */}
                    <div className="md:col-span-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 p-8 md:p-12 rounded-2xl">
                        <span className="text-xs text-[#e07a5f] font-bold uppercase tracking-wider mb-4 block">About Me</span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Marc Victor L. Velasquez
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-6">
                            I'm a Computer Science student passionate about building systems that bridge AI research and practical applications.
                            I specialize in backend architecture, machine learning pipelines, and creating interfaces that prioritize clarity over complexity.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            Currently exploring transformer and diffusion model architectures while deepening my expertise in Spring Boot Security and cloud infrastructure.
                        </p>
                    </div>

                    {/* --- CONTACT CARD --- */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl flex-1">
                            <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Contact</h3>
                            <div className="space-y-4">
                                <a href="mailto:velasquezmarcvictor@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#e07a5f]">
                                    <Mail size={18} className="text-[#e07a5f]" />
                                    <span className="text-sm">velasquezmarcvictor@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Phone size={18} className="text-[#e07a5f]" />
                                    <span className="text-sm">(+63) 960-824-9295</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <MapPin size={18} className="text-[#e07a5f]" />
                                    <span className="text-sm">Angeles City, Philippines</span>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="bg-gradient-to-r from-[#e07a5f] to-[#d86a4f] text-black p-6 rounded-2xl flex items-center justify-between hover:from-[#d86a4f] hover:to-[#c55a3f]">
                            <div>
                                <p className="font-bold">Download Resume</p>
                                <p className="text-sm opacity-70">PDF • Updated 2026</p>
                            </div>
                            <Download size={24} />
                        </a>
                    </div>

                    {/* --- EDUCATION --- */}
                    <div className="md:col-span-6 bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#e07a5f]/10 text-[#e07a5f] rounded-xl flex items-center justify-center">
                                <GraduationCap size={20} />
                            </div>
                            <h2 className="text-xl font-bold">Education</h2>
                        </div>

                        <div className="border-l-2 border-[#e07a5f]/30 pl-6">
                            <h3 className="text-lg font-bold">Angeles University Foundation</h3>
                            <p className="text-gray-400">Bachelor of Science in Computer Science</p>
                            <p className="text-sm text-gray-500 mt-1">August 2022 - Present</p>
                            <div className="mt-4 space-y-2">
                                <span className="inline-flex items-center gap-2 text-xs bg-[#2a9d8f]/20 text-[#2a9d8f] px-3 py-1.5 rounded-full">
                                    <BookOpen size={12} /> College Scholar (2023 – 2024)
                                </span>
                                <p className="text-sm text-gray-500">
                                    Relevant Coursework: Machine Learning, Generative AI, Software Engineering
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- ACHIEVEMENTS --- */}
                    <div className="md:col-span-6 bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-xl flex items-center justify-center">
                                <Trophy size={20} />
                            </div>
                            <h2 className="text-xl font-bold">Achievements</h2>
                        </div>

                        <div className="space-y-4">
                            {achievements.map((ach, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                                    <div className="text-[#e07a5f] mt-0.5">{ach.icon}</div>
                                    <div>
                                        <p className="font-medium text-sm">{ach.place}</p>
                                        <p className="text-xs text-gray-500">{ach.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- CERTIFICATIONS --- */}
                    <div className="md:col-span-12 bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white/5 text-white rounded-xl flex items-center justify-center">
                                <Cloud size={20} />
                            </div>
                            <h2 className="text-xl font-bold">Certifications</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {certifications.map((cert, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                                        style={{ backgroundColor: cert.color }}
                                    >
                                        {cert.provider.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{cert.name}</p>
                                        <p className="text-xs text-gray-500">{cert.provider}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- SKILLS --- */}
                    <div className="md:col-span-12 bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-white/5 text-white rounded-xl flex items-center justify-center">
                                <Briefcase size={20} />
                            </div>
                            <h2 className="text-xl font-bold">Technical Skills</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.languages.map(skill => (
                                        <span key={skill} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">App Development</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.appDev.map(skill => (
                                        <span key={skill} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">AI & Data Science</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.aiData.map(skill => (
                                        <span key={skill} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Cloud & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.cloudTools.map(skill => (
                                        <span key={skill} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-gradient-to-r from-[#e07a5f] via-[#d86a4f] to-[#c55a3f] mt-8 mx-4 md:mx-6 mb-4 md:mb-6 rounded-2xl p-8 md:p-10 text-black">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Let's connect.</h2>
                        <p className="opacity-70">Open to opportunities and collaborations.</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/marccodesstuff" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/10 hover:bg-black/20 rounded-xl">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/10 hover:bg-black/20 rounded-xl">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="p-4 bg-black/10 hover:bg-black/20 rounded-xl">
                            <FileText size={24} />
                        </a>
                        <a href="mailto:velasquezmarcvictor@gmail.com" className="p-4 bg-black/10 hover:bg-black/20 rounded-xl">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;
