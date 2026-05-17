import { Github, Linkedin, Mail, Terminal, Cpu, HardDrive } from 'lucide-react'
import achievementsData from '../data/achievements.json'
import internshipsData from '../data/internships.json'
import researchData from '../data/research.json'
import skillsData from '../data/skills.json'
import certificationsData from '../data/certifications.json'

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
              <p className="te-label text-base mt-0">TECHNICAL_SPECIFICATIONS // PROFESSIONAL_HISTORY</p>
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

            {/* Professional Experience module */}
            <div className="te-module p-6 min-h-[200px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Professional_Journey.EXE</h3>
              
              <div className="space-y-4">
                {/* Internships */}
                {internshipsData.map((exp, idx) => (
                  <div key={idx} className="border-b border-dashed border-white/5 pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wide mb-1">
                      <span>{exp.role}</span>
                      <span className="text-orange-500">{exp.period}</span>
                    </div>
                    <p className="text-xs text-te-muted mb-2">{exp.company}</p>
                    <p className="text-sm font-medium leading-relaxed text-te-muted max-w-3xl mb-2">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1 text-[9px] font-mono uppercase text-te-muted">
                      {exp.achievements.map((ach, aIdx) => (
                        <span key={aIdx} className="px-1 py-0.5 bg-white/5">{ach}</span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Research */}
                {researchData.map((proj, idx) => (
                  <div key={idx} className="border-b border-dashed border-white/5 pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wide mb-1">
                      <span>{proj.role}</span>
                      <span className="text-orange-500">{proj.period}</span>
                    </div>
                    <p className="text-xs text-te-muted mb-2">{proj.organization}</p>
                    <p className="text-sm font-medium leading-relaxed text-te-muted max-w-3xl mb-2">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1 text-[9px] font-mono uppercase text-te-muted">
                      {proj.achievements.map((ach, aIdx) => (
                        <span key={aIdx} className="px-1 py-0.5 bg-white/5">{ach}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* CENTER COLUMN: Skills, Certifications, Achievements */}
          <section className="lg:col-span-2">
            
            {/* Skills module */}
            <div className="te-module p-6 mb-4 min-h-[180px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Skill_Matrix.EXE</h3>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-[9px] font-mono text-te-muted">
                {Object.entries(skillsData).map(([key, items], index) => (
                  <div key={index} className="border-b border-dashed border-white/5 pb-2 last:border-0">
                    <span className="text-orange-500 block mb-1">{key.toUpperCase()}</span>
                    <ul className="space-y-0.5">
                      {(items as string[]).map((item: string, i: number) => (
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

            {/* Achievements module */}
            <div className="te-module p-6 min-h-[200px]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Achievement_Log.EXE</h3>
              
              <ul className="space-y-2 text-sm font-medium leading-relaxed text-te-muted max-w-lg">
                {achievementsData.map((achievement: { title: string; place: string; iconType: string }, index: number) => (
                  <li key={index} className="flex items-start gap-2 hover:text-white transition-colors cursor-default">
                    <span className="text-orange-500 font-bold text-xs mt-0.5">{achievement.place}</span>
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
