import SystemLog from '../components/SystemLog'
import MetricsCounter from '../components/MetricsCounter'
import EngineeringSandbox from '../components/EngineeringSandbox'
import { ArrowUpRight, Cpu, Sparkles, MapPin, Mail, Layers, Code, Database, Cloud } from 'lucide-react'
import { usePageTransition } from '../components/PageTransition'
import { playClickSound, playHoverTick } from '../utils/sound'

const HomePage = () => {
  const { navigateWithTransition } = usePageTransition()

  return (
    <main className="p-4 sm:p-6 lg:p-8 max-w-[1400px] mx-auto">
      {/* ===========================================
          LANDING PAGE BLUEPRINT GRID
          =========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 border-t-2 border-l-2 border-white/10">
        
        {/* ===========================================
            HERO BLOCK - MAIN INTRO
            =========================================== */}
        <div className="lg:col-span-8 border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-white/10 p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[360px] bg-[#141414]/70">
          
          {/* Active status indicators */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE FOR HIRE
            </span>
            <span className="text-xs font-mono text-white/40 hidden sm:inline">•</span>
            <span className="text-xs font-mono text-white/60">OPEN TO ROLES & COLLABORATION</span>
          </div>

          {/* Main headline */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] mb-3 text-white">
                  Marc Victor<br />
                  <span className="text-[#ff6b1a]">Velasquez</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-medium text-white/80 max-w-2xl leading-relaxed">
                  AI & Automation Engineer • Full-Stack Developer • Data & Machine Learning
                </p>
              </div>
              <div className="shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6b1a] to-amber-500 rounded-sm blur opacity-30 group-hover:opacity-60 transition duration-300" />
                  <img 
                    src="/profile-pic.jpg" 
                    alt="Marc Victor Velasquez" 
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-sm border border-white/20 object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA & Bio section */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-white/65 leading-relaxed max-w-xl">
              Specializing in agentic automation workflows, semiconductor SPC analytics, compliance platforms, and production-ready machine learning systems.
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  playClickSound()
                  navigateWithTransition('/projects')
                }}
                onMouseEnter={() => playHoverTick()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b1a] hover:bg-[#ff7d36] text-white text-xs font-semibold rounded-sm transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowUpRight size={14} />
              </button>
              <button
                onClick={() => {
                  playClickSound()
                  navigateWithTransition('/about')
                }}
                onMouseEnter={() => playHoverTick()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold rounded-sm transition-all active:scale-95 cursor-pointer"
              >
                <span>About & Bio</span>
              </button>
            </div>
          </div>
        </div>

        {/* ===========================================
            STATUS MODULES - TACTILE INDICATORS
            =========================================== */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-1">
          
          {/* Module 01: Location */}
          <div 
            onMouseEnter={() => playHoverTick()}
            className="te-module p-6 flex flex-col justify-between min-h-[120px] border-r-0 lg:border-r-2 border-b-2 border-white/5 bg-[#141414]/90"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono font-bold text-white/50 flex items-center gap-1.5 uppercase tracking-wider">
                <MapPin size={13} className="text-[#ff6b1a]" /> Location & Timezone
              </span>
            </div>
            <div>
              <p className="text-lg font-bold text-white tracking-tight">Angeles City, PH</p>
              <p className="text-xs font-mono text-white/50 mt-1">UTC +08:00 • Remote & Hybrid Ready</p>
            </div>
          </div>

          {/* Module 02: Current Focus */}
          <div 
            onMouseEnter={() => playHoverTick()}
            className="te-module p-6 flex flex-col justify-between min-h-[120px] border-r-0 lg:border-r-2 border-b-2 border-white/5 bg-[#141414]/90"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono font-bold text-white/50 flex items-center gap-1.5 uppercase tracking-wider">
                <Cpu size={13} className="text-[#ff6b1a]" /> Primary Engineering Focus
              </span>
            </div>
            <div>
              <p className="text-base font-bold text-white tracking-tight leading-snug">
                Agentic Systems & SPC Analytics
              </p>
              <p className="text-xs font-mono text-white/50 mt-1">Compliance • Medical AI • Digital Twins</p>
            </div>
          </div>

          {/* Module 03: Contact CTA */}
          <div 
            onMouseEnter={() => playHoverTick()}
            className="bg-[#ff6b1a]/10 p-6 flex flex-col justify-between border-r-0 lg:border-r-2 border-b-2 border-[#ff6b1a]/30 hover:border-[#ff6b1a] transition-all group"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono font-bold text-[#ff6b1a] flex items-center gap-1.5 uppercase tracking-wider">
                <Mail size={13} /> Collaboration
              </span>
              <ArrowUpRight size={16} className="text-[#ff6b1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div>
              <p className="text-base font-bold text-white tracking-tight">
                Let's Build Something Together
              </p>
              <a 
                href="mailto:velasquezmarcvictor@gmail.com"
                onClick={() => playClickSound()}
                className="mt-2 text-xs font-mono text-white/70 hover:text-[#ff6b1a] transition-colors flex items-center gap-1 group-hover:underline"
              >
                velasquezmarcvictor@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* ===========================================
            KEY ENGINEERING METRICS COUNTERS
            =========================================== */}
        <div className="lg:col-span-12 border-r-0 lg:border-r-2">
          <MetricsCounter />
        </div>

        {/* ===========================================
            INTERACTIVE ENGINEERING SANDBOX (SPC / AGENTIC)
            =========================================== */}
        <div className="lg:col-span-12">
          <EngineeringSandbox />
        </div>

        {/* ===========================================
            FEATURED PROJECTS MODULES HEADER
            =========================================== */}
        <div className="lg:col-span-12 p-6 sm:p-8 border-r-0 lg:border-r-2 border-b-2 border-white/5 bg-[#141414]/95">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b1a] font-bold uppercase tracking-wider mb-1">
                <Sparkles size={14} />
                <span>Featured Engineering Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Highlighted Projects
              </h2>
            </div>
            <button
              onClick={() => {
                playClickSound()
                navigateWithTransition('/projects')
              }}
              onMouseEnter={() => playHoverTick()}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white/70 hover:text-[#ff6b1a] transition-colors self-start sm:self-auto cursor-pointer"
            >
              <span>View all projects archive</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* ===========================================
            FEATURED PROJECTS MODULES GRID
            =========================================== */}
        <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-1">
          
          {/* Project 01: Augur */}
          <div 
            role="button"
            tabIndex={0}
            onClick={() => {
              playClickSound();
              navigateWithTransition('/projects');
            }}
            onMouseEnter={() => playHoverTick()}
            onKeyDown={(e) => { if (e.key === 'Enter') { navigateWithTransition('/projects'); } }}
            className="te-module p-6 sm:p-8 border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-white/5 group cursor-pointer hover:bg-white/[0.03] transition-all flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a]">
                  COMPLIANCE AUTOMATION
                </span>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-[#ff6b1a] transition-colors">
                Augur
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-lg mb-6">
                Agentic compliance automation platform tracking security controls and automatically mapping findings onto SOC 2 and ISO 27001 with an LLM agent.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">.NET 10</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">Blazor</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">MCP</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">Agentic AI</span>
            </div>
          </div>

          {/* Project 02: FabTwin */}
          <div 
            role="button"
            tabIndex={0}
            onClick={() => {
              playClickSound();
              navigateWithTransition('/projects');
            }}
            onMouseEnter={() => playHoverTick()}
            onKeyDown={(e) => { if (e.key === 'Enter') { navigateWithTransition('/projects'); } }}
            className="te-module p-6 sm:p-8 border-r-0 lg:border-r-2 border-b-2 border-white/5 group cursor-pointer hover:bg-white/[0.03] transition-all flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a]">
                  SPC ANALYTICS & SIMULATION
                </span>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-[#ff6b1a] transition-colors">
                FabTwin
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-lg mb-6">
                Open-source semiconductor statistical process control (SPC) analytics and synthetic fab-data generator with control charts, Western Electric/Nelson rules, and Cp/Cpk analysis.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">Python</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">Streamlit</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">Statistical Process Control</span>
            </div>
          </div>

          {/* Project 03: JointWise */}
          <div 
            role="button"
            tabIndex={0}
            onClick={() => {
              playClickSound();
              navigateWithTransition('/projects');
            }}
            onMouseEnter={() => playHoverTick()}
            onKeyDown={(e) => { if (e.key === 'Enter') { navigateWithTransition('/projects'); } }}
            className="te-module p-6 sm:p-8 border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-white/5 group cursor-pointer hover:bg-white/[0.03] transition-all flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a]">
                  MEDICAL AI & COMPUTER VISION
                </span>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-[#ff6b1a] transition-colors">
                JointWise
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-lg mb-6">
                End-to-end medical-imaging platform with a YOLOv11 stacking ensemble for automated ACL and meniscus tear detection from coronal knee MRI scans.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">PyTorch</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">YOLOv11</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">Next.js</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">FastAPI</span>
            </div>
          </div>

          {/* Project 04: Patient Communication Simulator */}
          <div 
            role="button"
            tabIndex={0}
            onClick={() => {
              playClickSound();
              navigateWithTransition('/projects');
            }}
            onMouseEnter={() => playHoverTick()}
            onKeyDown={(e) => { if (e.key === 'Enter') { navigateWithTransition('/projects'); } }}
            className="te-module p-6 sm:p-8 border-b-2 border-white/5 group cursor-pointer hover:bg-white/[0.03] transition-all flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a]">
                  CLINICAL AI & EVALUATION
                </span>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-[#ff6b1a] transition-colors">
                Patient Communication Simulator
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-lg mb-6">
                Clinical conversation simulator built on LangGraph for healthcare communication training featuring dynamic patient personas, safety guardrails, and LLM-as-judge evaluation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">Python</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">LangGraph</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">FastAPI</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80">LLM-as-Judge</span>
            </div>
          </div>

        </div>

        {/* ===========================================
            TECH STACK MODULE - CORE TECHNOLOGIES
            =========================================== */}
        <div className="lg:col-span-12 p-6 sm:p-8 lg:p-10 border-r-0 lg:border-r-2 border-b-2 border-white/5 bg-[#141414]/90">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b1a] font-bold uppercase tracking-wider mb-1">
                <Layers size={14} />
                <span>Toolchains & Competencies</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">Core Technologies</h3>
            </div>
            <span className="text-xs font-mono text-white/40 hidden sm:inline">FULL-STACK • AI • INFRASTRUCTURE</span>
          </div>

          {/* Grid for all categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Languages */}
            <div className="bg-black/30 border border-white/5 p-4 rounded-sm" onMouseEnter={() => playHoverTick()}>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Code size={14} className="text-[#ff6b1a]" />
                <span>Languages</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-white/70">
                {['Python', 'C++', 'Java', 'Dart', 'TypeScript', 'SQL'].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#ff6b1a] rounded-full inline-block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend & Frameworks */}
            <div className="bg-black/30 border border-white/5 p-4 rounded-sm" onMouseEnter={() => playHoverTick()}>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Database size={14} className="text-[#ff6b1a]" />
                <span>Frameworks & APIs</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-white/70">
                {['Next.js', 'FastAPI', 'Spring Boot', 'Blazor / .NET', 'Express', 'Flutter'].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#ff6b1a] rounded-full inline-block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI & Data Science */}
            <div className="bg-black/30 border border-white/5 p-4 rounded-sm" onMouseEnter={() => playHoverTick()}>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Cpu size={14} className="text-[#ff6b1a]" />
                <span>AI & Machine Learning</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-white/70">
                {['PyTorch', 'TensorFlow', 'YOLOv11', 'LangGraph / LangChain', 'Pandas', 'Hugging Face'].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#ff6b1a] rounded-full inline-block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure & Tools */}
            <div className="bg-black/30 border border-white/5 p-4 rounded-sm" onMouseEnter={() => playHoverTick()}>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Cloud size={14} className="text-[#ff6b1a]" />
                <span>Cloud & DevOps</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-white/70">
                {['Docker', 'Azure', 'Oracle Cloud', 'Appwrite', 'Git & CI/CD', 'Linux'].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#ff6b1a] rounded-full inline-block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ===========================================
            SYSTEM STATUS & TELEMETRY FOOTER
            =========================================== */}
        <div className="lg:col-span-12">
          <SystemLog />
        </div>

      </div>
    </main>
  )
}

export default HomePage
