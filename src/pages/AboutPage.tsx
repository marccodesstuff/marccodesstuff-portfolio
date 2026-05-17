import { Github, Linkedin, Mail, Terminal, Cpu, HardDrive } from 'lucide-react'
import internshipsData from '../data/internships.json'
import certificationsData from '../data/certifications.json'
import achievementsData from '../data/achievements.json'
import researchData from '../data/research.json'
import skillsData from '../data/skills.json'

const AboutPage = () => {
  return (
    <main className="p-4 lg:p-8">
      <div className="max-w-[1400px] mx-auto border-t-2 border-l-2 border-white/10 bg-black/30 min-h-screen">
        
        {/* Page header */}
        <header className="border-b-2 border-white/10 pb-6 mb-6">
          <div className="flex items-end justify-between gap-4">
            
            <div>
              <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">
                About_Module.EXE
              </h1>
              <p className="te-label text-base mt-0">TECHNICAL_SPECIFICATIONS // PERSONAL_DATA_DUMP</p>
            </div>

            <span className="te-label px-3 py-1 border-l-2 border-orange-500 pl-2">
              STATUS: AVAILABLE_FOR_HIRE
            </span>
          </div>
        </header>

        {/* Main content grid */}
        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-1">
          
          {/* LEFT COLUMN: Identity Module */}
          <section className="lg:col-span-1 border-r border-white/5 pr-1">
            
            {/* Bio module */}
            <div className="te-module p-6 mb-4 min-h-[200px] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Identity</h3>
                <p className="te-label text-xs mt-0">PERSONAL_DATA_RECORD_04.2</p>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-lg font-bold uppercase tracking-tight">
                  Marc Victor Velasquez
                </p>
                <p className="te-label text-sm leading-relaxed">
                  Digital Architect // Backend Engineer // AI Researcher
                </p>
              </div>

              {/* Location & timezone */}
              <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-y-2 text-[9px] font-mono text-te-muted">
                <div>
                  <span className="text-te-muted">LOCATION:</span><br />
                  Angeles, PH
                </div>
                <div>
                  <span className="text-te-muted">TIMEZONE:</span><br />
                  UTC +08:00
                </div>
              </div>

              {/* Social indicators */}
              <div className="mt-4 flex gap-2">
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#"
                    onClick={() => window.tactileFeedback?.playClickSound()}
                    className="p-2 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500 rounded-sm transition-colors"
                    aria-label="Social link"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

            </div>

            {/* Core competencies module */}
            <div className="te-module p-6 min-h-[200px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Core_Capabilities.EXE</h3>
              
              <div className="space-y-4">
                {/* Architecture */}
                <div>
                  <span className="te-label text-xs">SYSTEM_ARCHITECTURE</span>
                  <p className="text-sm font-medium mt-1 leading-relaxed text-te-muted max-w-sm">
                    High-density backend systems, microservices architecture, and scalable infrastructure design.
                  </p>
                </div>

                {/* AI/ML */}
                <div>
                  <span className="te-label text-xs">AI_ML_ENGINEERING</span>
                  <p className="text-sm font-medium mt-1 leading-relaxed text-te-muted max-w-sm">
                    Transformer and diffusion model architectures, research pipelines, and production deployment.
                  </p>
                </div>

                {/* Infrastructure */}
                <div>
                  <span className="te-label text-xs">INFRASTRUCTURE</span>
                  <p className="text-sm font-medium mt-1 leading-relaxed text-te-muted max-w-sm">
                    Cloud-native deployments, container orchestration, and CI/CD pipeline automation.
                  </p>
                </div>

              </div>
            </div>

          </section>

          {/* CENTER COLUMN: Skills, Experience & Certifications */}
          <section className="lg:col-span-2">
            
            {/* PROFESSIONAL EXPERIENCE module - NEW */}
            <div className="te-module p-6 mb-4 min-h-[180px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Professional_Experience.EXE</h3>
              
              <ul className="space-y-3 text-sm font-medium leading-relaxed text-te-muted max-w-lg">
                {internshipsData.slice(0, 2).map((exp: any, index: number) => (
                  <li key={index} className="flex items-start gap-2 hover:text-white transition-colors cursor-default">
                    <span className={`text-orange-500 font-bold text-xs mt-0.5 ${index === 0 ? 'border-r-2 border-orange-500 pr-1' : ''}`}>
                      {exp.period}
                    </span>
                    <div>
                      <div className="font-bold">{exp.role}</div>
                      <div className="text-xs opacity-70">{exp.company}</div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>

            {/* Skills module */}
            <div className="te-module p-6 mb-4 min-h-[180px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Skill_Matrix.EXE</h3>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-[9px] font-mono text-te-muted">
                {Object.entries(skillsData).slice(0, 6).map(([key, items], index) => (
                  <div key={index} className="border-b border-dashed border-white/5 pb-2 last:border-0">
                    <span className="text-orange-500 block mb-1">{key.toUpperCase()}</span>
                    <ul className="space-y-0.5">
                      {(items as string[]).slice(0, 3).map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                          <div className="w-1 h-1 bg-orange-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations module - NEW */}
            <div className="te-module p-6 mb-4 min-h-[120px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Specializations.EXE</h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[9px] font-mono text-te-muted">
                {skillsData.specializations?.slice(0, 6).map((spec: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                    <div className="w-1 h-1 bg-orange-500 rounded-full" />
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications module */}
            <div className="te-module p-6 mb-4 min-h-[120px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Certifications.EXE</h3>
              
              {certificationsData.map((cert: { provider: string; name: string; color: string }, index: number) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-[9px] font-mono text-te-muted">
                  <span>{cert.name}</span>
                  <span className="text-orange-500">{cert.provider}</span>
                </div>
              ))}
            </div>

            {/* ACADEMIC RESEARCH module - NEW */}
            <div className="te-module p-6 mb-4 min-h-[180px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Academic_Research.EXE</h3>
              
              <ul className="space-y-2 text-xs font-medium leading-relaxed text-te-muted max-w-lg">
                {researchData.slice(0, 4).map((research: any, index: number) => (
                  <li key={index} className="flex items-start gap-1 hover:text-white transition-colors cursor-default">
                    <span className="text-orange-500 font-bold text-[8px] mt-0.5">
                      {research.iconType === 'trophy' ? '🏆' : research.iconType === 'medal' ? '🥈' : '📜'}
                    </span>
                    <div>
                      <div className="font-bold">{research.title}</div>
                      <div className="text-[9px] opacity-70">{research.placement}</div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>

            {/* Achievements module */}
            <div className="te-module p-6 min-h-[180px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Achievement_Log.EXE</h3>
              
              <ul className="space-y-2 text-sm font-medium leading-relaxed text-te-muted max-w-lg">
                {achievementsData.slice(0, 6).map((achievement: { title: string; place: string; iconType: string }, index: number) => (
                  <li key={index} className="flex items-start gap-2 hover:text-white transition-colors cursor-default">
                    <span className={`text-orange-500 font-bold text-xs mt-0.5 ${index === 0 ? 'border-r-2 border-orange-500 pr-1' : ''}`}>
                      {achievement.place}
                    </span>
                    <span>{achievement.title}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.tactileFeedback?.playClickSound()}
                className="mt-4 te-button text-[8px] py-1 px-3 opacity-60 hover:opacity-100"
              >
                VIEW_ALL_RECORDS
              </button>
            </div>

          </section>

        </div>

        {/* Bottom system info bar */}
        <footer className="pt-4 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-te-muted">
          
          {/* System metrics */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Terminal size={12} />
              <span>SYS_VER_04.2</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={12} />
              <span>CPU: 8%</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive size={12} />
              <span>MEM: 12MB</span>
            </div>
          </div>

          {/* Build timestamp */}
          <span>BUILDTIME:{new Date().toISOString().slice(0, 19).replace('T', 'Z')}</span>

        </footer>

      </div>
    </main>
  )
}

export default AboutPage
