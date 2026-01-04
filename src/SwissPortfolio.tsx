import { Link } from 'react-router-dom';
import {
    ArrowUpRight,
    MapPin,
    Terminal,
    Github,
    Linkedin,
    FileText,
    Mail,
    Zap,
    Cloud,
    Brain,
    GraduationCap,
    Trophy,
    Award
} from 'lucide-react';

const SwissPortfolio = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#e07a5f] selection:text-black">

            {/* --- HEADER --- */}
            <header className="px-6 md:px-8 py-6 flex justify-between items-center border-b border-white/10">
                <Link to="/" className="font-bold text-xl tracking-tight hover:text-[#e07a5f]">MV</Link>



                <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                    <Link to="/" className="text-white">Index</Link>
                    <Link to="/projects" className="hover:text-white">Projects</Link>
                </nav>

                <a
                    href="mailto:velasquezmarcvictor@gmail.com"
                    className="bg-[#e07a5f] hover:bg-[#d86a4f] text-black px-5 py-2.5 text-sm font-bold flex items-center gap-2"
                >
                    Let's Talk <ArrowUpRight size={16} />
                </a>
            </header>

            {/* --- BENTO GRID --- */}
            <main className="p-4 md:p-6">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">

                    {/* --- HERO BLOCK (Large) --- */}
                    <div className="md:col-span-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 p-8 md:p-12 min-h-[400px] flex flex-col justify-between rounded-2xl">
                        <div>
                            <span className="inline-block bg-[#e07a5f] text-black text-xs font-bold px-3 py-1 mb-6">AVAILABLE FOR WORK</span>
                            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                                Digital<br />
                                <span className="text-[#e07a5f]">Architect</span>
                            </h1>
                        </div>
                        <p className="text-xl text-gray-400 max-w-lg mt-8">
                            Building robust backend systems, AI pipelines, and interfaces that don't get in the way.
                        </p>
                    </div>

                    {/* --- STATUS WIDGETS (Right column) --- */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        {/* Location */}
                        <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Location</span>
                                <MapPin size={18} className="text-[#e07a5f]" />
                            </div>
                            <div className="mt-4">
                                <p className="text-2xl font-bold">Angeles, PH</p>
                                <p className="text-gray-500 text-sm mt-1">UTC+8 • Open to Remote</p>
                            </div>
                        </div>

                        {/* Current Focus */}
                        <div className="bg-gradient-to-br from-[#e07a5f] to-[#d86a4f] text-black p-6 rounded-2xl flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="text-xs uppercase tracking-wider font-medium opacity-70">Current Focus</span>
                                <Brain size={18} />
                            </div>
                            <div className="mt-4">
                                <p className="text-lg font-bold leading-tight">Transformer & Diffusion Architectures</p>
                                <p className="text-sm mt-2 opacity-80">Spring Boot Security</p>
                            </div>
                        </div>
                    </div>

                    {/* --- PROJECTS ROW --- */}
                    <div className="md:col-span-6 bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl group hover:border-[#e07a5f]/50 cursor-pointer">
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-xs text-[#e07a5f] font-bold uppercase tracking-wider">Hackathon Winner</span>
                            <ArrowUpRight size={24} className="text-gray-600 group-hover:text-[#e07a5f]" />
                        </div>
                        <h3 className="text-3xl font-bold mb-3">BantayBayan</h3>
                        <p className="text-gray-400 mb-6">Offline disaster response beacon with 97.8% accuracy predictive neural network.</p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Gemini</span>
                            <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">TensorFlow</span>
                            <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Flutter</span>
                        </div>
                    </div>

                    <div className="md:col-span-6 bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl group hover:border-[#e07a5f]/50 cursor-pointer">
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Side Project</span>
                            <ArrowUpRight size={24} className="text-gray-600 group-hover:text-[#e07a5f]" />
                        </div>
                        <h3 className="text-3xl font-bold mb-3">GraphRAG System</h3>
                        <p className="text-gray-400 mb-6">Knowledge base with Obsidian + LlamaIndex for personal data retrieval.</p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">LlamaIndex</span>
                            <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">RAG</span>
                            <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">Python</span>
                        </div>
                    </div>

                    {/* --- MORE PROJECTS --- */}
                    <div className="md:col-span-4 bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl group hover:border-[#e07a5f]/50 cursor-pointer">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Thesis</span>
                            <ArrowUpRight size={20} className="text-gray-600 group-hover:text-[#e07a5f]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Knee Tear Detection</h3>
                        <p className="text-gray-500 text-sm">Clinically validated MRI diagnostic platform. 0.88 Sensitivity.</p>
                    </div>

                    <div className="md:col-span-4 bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl group hover:border-[#e07a5f]/50 cursor-pointer">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-xs text-[#e07a5f] font-bold uppercase tracking-wider">In Progress</span>
                            <ArrowUpRight size={20} className="text-gray-600 group-hover:text-[#e07a5f]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">AI Director System</h3>
                        <p className="text-gray-500 text-sm">Text-to-logic for UE5 simulation actor behaviors.</p>
                    </div>

                    <div className="md:col-span-4 bg-gradient-to-br from-[#2a9d8f] to-[#1f7a70] p-6 rounded-2xl text-white">
                        <Zap size={24} className="mb-4" />
                        <h3 className="text-xl font-bold mb-2">3x Hackathon Winner</h3>
                        <p className="text-white/70 text-sm">JPCS 3rd • HexCore CTF 1st • GDG AI Hack 2nd + Best Technical</p>
                    </div>

                    {/* --- TECH STACK BLOCK --- */}
                    <div className="md:col-span-12 bg-[#1a1a1a] border border-white/10 p-8 md:p-10 rounded-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <Terminal size={24} className="text-[#e07a5f]" />
                            <h3 className="text-2xl font-bold">Stack</h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Languages</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="text-white">Java</li>
                                    <li className="text-white">TypeScript</li>
                                    <li className="text-white">Python</li>
                                    <li className="text-gray-600">C++</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Backend</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="text-white">Spring Boot</li>
                                    <li className="text-white">Node.js</li>
                                    <li className="text-white">Next.js</li>
                                    <li className="text-gray-600">Express</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Infra</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="text-white">Docker / Podman</li>
                                    <li className="text-white">Oracle Cloud</li>
                                    <li className="text-white">Azure</li>
                                    <li className="text-gray-600">AWS</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">AI / ML</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="text-white">Gemini</li>
                                    <li className="text-white">PyTorch</li>
                                    <li className="text-white">LangChain</li>
                                    <li className="text-gray-600">TensorFlow</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* --- EDUCATION --- */}
                    <div className="md:col-span-6 bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-[#e07a5f]/10 text-[#e07a5f] rounded-lg flex items-center justify-center">
                                <GraduationCap size={16} />
                            </div>
                            <h3 className="font-bold">Education</h3>
                        </div>
                        <div className="border-l-2 border-[#e07a5f]/30 pl-4">
                            <h4 className="font-bold">Angeles University Foundation</h4>
                            <p className="text-gray-400 text-sm">BS Computer Science • 2022 - Present</p>
                            <span className="inline-block mt-2 text-xs bg-[#2a9d8f]/20 text-[#2a9d8f] px-2 py-1 rounded-full">
                                College Scholar (2023–2024)
                            </span>
                        </div>
                    </div>

                    {/* --- ACHIEVEMENTS --- */}
                    <div className="md:col-span-6 bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-lg flex items-center justify-center">
                                <Trophy size={16} />
                            </div>
                            <h3 className="font-bold">Achievements</h3>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <Award size={14} className="text-[#e07a5f]" />
                                <span className="text-gray-300">JPCS Hackathon 2025 — 3rd Place</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Award size={14} className="text-[#e07a5f]" />
                                <span className="text-gray-300">HexCore CTF — 1st Place</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Award size={14} className="text-[#e07a5f]" />
                                <span className="text-gray-300">GDG AI Hack — 2nd + Best Technical</span>
                            </div>
                        </div>
                    </div>

                    {/* --- CERTIFICATIONS BAR --- */}
                    <div className="md:col-span-12 bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl">
                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 uppercase tracking-wider">
                            <span className="flex items-center gap-2"><Cloud size={14} /> Azure Fundamentals</span>
                            <span className="text-gray-700">•</span>
                            <span className="flex items-center gap-2"><Cloud size={14} /> Azure AI Fundamentals</span>
                            <span className="text-gray-700">•</span>
                            <span className="flex items-center gap-2"><Cloud size={14} /> OCI AI Foundations</span>
                            <span className="text-gray-700">•</span>
                            <span className="flex items-center gap-2"><Cloud size={14} /> OCI GenAI Professional</span>
                        </div>
                    </div>

                </div>
            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-gradient-to-r from-[#e07a5f] via-[#d86a4f] to-[#c55a3f] mt-4 mx-4 md:mx-6 mb-4 md:mb-6 rounded-2xl p-8 md:p-12 text-black">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's build something.</h2>
                        <p className="opacity-70">velasquezmarcvictor@gmail.com</p>
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

                <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-black/20 text-center text-sm opacity-60">
                    © 2026 Marc Victor Velasquez • Angeles University Foundation
                </div>
            </footer>
        </div>
    );
};

export default SwissPortfolio;
