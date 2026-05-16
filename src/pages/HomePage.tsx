import SystemLog from '../components/SystemLog'
import { ArrowUpRight, Terminal, Cpu } from 'lucide-react'

const HomePage = () => {
  return (
    <main className="p-4 lg:p-8">
      {/* ===========================================
          LANDING PAGE BLUEPRINT GRID
          =========================================== */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-1 border-t-2 border-l-2 border-white/10">
        
        {/* ===========================================
            HERO BLOCK - MAIN INTRO
            =========================================== */}
        <div className="lg:col-span-8 border-r-2 border-white/10 p-8 flex flex-col justify-between min-h-[320px]">
          
          {/* Active status indicators */}
          <div className="flex items-center gap-3 mb-6">
            <span className="te-label px-2 py-0.5 border-l-2 border-orange-500 pl-2">ACTIVE</span>
            <span className="te-label">OP_READY: 100%</span>
            <span className="te-label text-te-muted ml-auto">BUILD_VER_04.2</span>
          </div>

          {/* Main headline */}
          <div>
            <h1 className="text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
              Marc Victor<br />
              <span className="text-orange-500">Velasquez</span>
            </h1>
            <p className="text-lg lg:text-xl font-bold mt-6 tracking-normal text-te-muted max-w-3xl">
              Digital Architect // Backend Engineer // Industrial Designer
            </p>
          </div>

          {/* CTA section */}
          <div className="mt-8 flex flex-col gap-4 pt-4 border-t border-white/10">
            
            <p className="text-sm text-te-muted leading-relaxed max-w-2xl">
              Building high-density backend systems and AI research pipelines. Specialized in transformer architectures, microservices design, and cloud infrastructure.
            </p>

            <div className="flex items-center gap-4 text-[9px] font-mono text-te-muted opacity-60">
              <div className="text-right">
                <span className="text-xs">44.5895° N</span>
                <span className="text-xs">15.9486° E</span>
                <span className="mt-1 text-orange-500 font-bold block">BUILD_REV: 2026.05.15</span>
              </div>
            </div>

          </div>
        </div>

        {/* ===========================================
            STATUS MODULES - TACTILE INDICATORS
            =========================================== */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-1">
          
          {/* Module 01: Location */}
          <div className="te-module p-6 flex flex-col justify-between min-h-[120px] border-r-2 border-b-2 border-white/5">
            <div className="flex justify-between items-start mb-4">
              <span className="te-label border-l-2 border-orange-500 pl-2">LOCATION</span>
              <Terminal size={14} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xl font-black tracking-tight uppercase">Angeles, PH</p>
              <p className="te-label mt-2">UTC +08:00 // REMOTE_SECURED</p>
            </div>
          </div>

          {/* Module 02: Current Focus */}
          <div className="te-module p-6 flex flex-col justify-between min-h-[120px] border-r-2 border-b-2 border-white/5">
            <div className="flex justify-between items-start mb-4">
              <span className="te-label border-l-2 border-orange-500 pl-2">RESEARCH_FOCUS</span>
              <Cpu size={14} className="text-orange-500" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight leading-tight uppercase hover:text-orange-500 transition-colors cursor-default">
                Transformer & Diffusion Architectures
              </p>
              <p className="te-label mt-2 text-te-muted">Spring_Security_v6.x</p>
            </div>
          </div>

          {/* Module 03: Contact CTA */}
          <div className="flex-1 bg-orange-500/10 p-6 flex flex-col justify-between border-r-2 border-b-2 border-orange-500/30 hover:border-orange-500 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <span className="te-label border-l-2 border-white/30 pl-2">CONTACT_SYSTEM</span>
              <ArrowUpRight size={16} className="text-orange-500" />
            </div>
            <p className="text-lg font-black tracking-tight uppercase group-hover:text-white transition-colors">
              Initialize Collaboration
            </p>
            <a 
              href="https://github.com/marccodesstuff"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.tactileFeedback?.playClickSound()}
              className="mt-4 te-label text-te-muted hover:text-orange-500 transition-colors flex items-center gap-1 group-hover:underline"
            >
              GITHUB REPOSITORY <ArrowUpRight size={12} />
            </a>
          </div>

        </div>

        {/* ===========================================
            FEATURED PROJECTS MODULES
            =========================================== */}
        <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-1">
          
          {/* Project 01: Typhoon Survival Beacon */}
          <a 
            href="/projects"
            onClick={() => window.tactileFeedback?.playClickSound()}
            className="te-module p-8 border-r-2 border-b-2 border-white/5 group cursor-pointer hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="te-label border-l-2 border-orange-500 pl-2">MODULE_01: HACKATHON_WIN</span>
              <ArrowUpRight size={20} className="text-te-muted group-hover:text-white transition-all" />
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Typhoon Survival Beacon</h3>
            <p className="text-sm font-medium mb-6 leading-relaxed text-te-muted max-w-lg">
              AI-powered disaster response with 97.8% flood prediction accuracy using TensorFlow and Gemini.AI.
            </p>
            <div className="flex gap-2 text-[7px] text-te-muted font-mono uppercase">
              <span className="px-2 py-0.5 bg-white/5 border border-white/10">GEMINI.AI</span>
              <span className="px-2 py-0.5 bg-white/5 border border-white/10">TENSORFLOW</span>
              <span className="px-2 py-0.5 bg-white/5 border border-white/10">FLUTTER</span>
            </div>
          </a>

          {/* Project 02: Knee Tear Detection */}
          <a 
            href="/projects"
            onClick={() => window.tactileFeedback?.playClickSound()}
            className="te-module p-8 border-r-2 border-b-2 border-white/5 group cursor-pointer hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="te-label border-l-2 border-orange-500 pl-2">MODULE_02: MEDICAL_AI</span>
              <ArrowUpRight size={20} className="text-te-muted group-hover:text-white transition-all" />
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Knee Tear Detection</h3>
            <p className="text-sm font-medium mb-6 leading-relaxed text-te-muted max-w-lg">
              Clinically validated MRI diagnostic platform with 0.88 Sensitivity using ensemble learning and PyTorch.
            </p>
            <div className="flex gap-2 text-[7px] text-te-muted font-mono uppercase">
              <span className="px-2 py-0.5 bg-white/5 border border-white/10">PYTORCH</span>
              <span className="px-2 py-0.5 bg-white/5 border border-white/10">MICROSERVICES</span>
              <span className="px-2 py-0.5 bg-white/5 border border-white/10">DICOM</span>
            </div>
          </a>

        </div>

        {/* ===========================================
            TECH STACK MODULE - CORE_STACK.EXE
            =========================================== */}
        <div className="lg:col-span-12 p-8 lg:p-12 border-r-2 border-b-2 border-white/5">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Terminal size={20} className="text-orange-500" />
              <h3 className="te-label text-lg font-bold tracking-normal">CORE_STACK.EXE</h3>
            </div>
            <span className="te-label text-[9px] text-te-muted">HEX_DUMP 0x3A2</span>
          </div>

          {/* Grid for all categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Languages */}
            <div className="border-t border-white/5 pt-6">
              <h4 className="te-label mb-3 text-te-muted uppercase tracking-widest">Languages</h4>
              <ul className="space-y-1 font-mono text-[10px] text-te-muted">
                {['Python', 'C++', 'Java', 'Dart'].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="border-t border-white/5 pt-6">
              <h4 className="te-label mb-3 text-te-muted uppercase tracking-widest">Backend</h4>
              <ul className="space-y-1 font-mono text-[10px] text-te-muted">
                {['Spring Boot', 'Next.js', 'Flutter', 'Express'].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="border-t border-white/5 pt-6">
              <h4 className="te-label mb-3 text-te-muted uppercase tracking-widest">Infra</h4>
              <ul className="space-y-1 font-mono text-[10px] text-te-muted">
                {['Azure', 'Oracle Cloud', 'AppWrite', 'Docker'].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI & ML */}
            <div className="border-t border-white/5 pt-6">
              <h4 className="te-label mb-3 text-te-muted uppercase tracking-widest">AI_ML</h4>
              <ul className="space-y-1 font-mono text-[10px] text-te-muted">
                {['PyTorch', 'TensorFlow', 'HuggingFace', 'Pandas'].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ===========================================
            SYSTEM LOG INTEGRATION
            =========================================== */}
        <div className="lg:col-span-12 pt-4">
          <SystemLog />
        </div>

      </div>
    </main>
  )
}

export default HomePage
