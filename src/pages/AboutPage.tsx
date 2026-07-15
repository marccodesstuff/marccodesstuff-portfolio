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
        <header className="border-b-2 border-white/10 px-4 sm:px-8 py-6 sm:py-8 mb-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                About_Module.EXE
              </h1>
              <p className="te-label text-sm sm:text-base mt-0">TECHNICAL_SPECIFICATIONS // PROFESSIONAL_HISTORY</p>
            </div>

            <span className="te-label px-3 py-1 border-l-2 border-orange-500 pl-2 self-start sm:self-auto">
              STATUS: AVAILABLE_FOR_HIRE
            </span>
          </div>
        </header>

        {/* Main content grid */}
        <div className="px-4 sm:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN: Identity Module */}
          <section className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Bio module */}
            <div className="te-module p-5 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-black uppercase tracking-tight mb-1 leading-snug">Identity</h3>
                <p className="te-label text-xs mt-0">PERSONAL_DATA_RECORD_04.2</p>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <div className="shrink-0">
                  <img 
                    src="/profile-pic.jpg" 
                    alt="Marc Victor Velasquez" 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-sm border border-white/10 object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold uppercase tracking-tight">
                    Marc Victor Velasquez
                  </p>
                  <p className="te-label text-base leading-relaxed">
                    AI & Automation Engineer // Full-Stack Developer // Data & Machine Learning
                  </p>
                </div>
              </div>

              {/* Location & timezone */}
              <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-y-2 text-xs font-mono text-te-muted">
                <div>
                  <span className="text-te-muted">LOCATION:</span><br />
                  Angeles City, PH
                </div>
                <div>
                  <span className="text-te-muted">TIMEZONE:</span><br />
                  UTC +08:00
                </div>
              </div>

              {/* Social indicators */}
              <div className="mt-4 flex gap-2">
                {[
                  { href: "https://github.com/marccodesstuff", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/mrcvctr-vel", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:velasquezmarcvictor@gmail.com", icon: Mail, label: "Email" }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    onClick={() => window.tactileFeedback?.playClickSound()}
                    className="p-2 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500 rounded-sm transition-colors"
                    aria-label={link.label}
                    target={link.href.startsWith('mailto') ? undefined : "_blank"}
                    rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  >
                    <link.icon size={16} />
                  </a>
                ))}
              </div>

            </div>

            {/* Professional Experience module */}
            <div className="te-module p-5 sm:p-8 overflow-hidden">
              <h3 className="text-base font-black uppercase tracking-tight mb-1 leading-snug">
                Professional_Journey
              </h3>
              <p className="te-label text-xs mb-5 text-orange-500">.EXE // CAREER_LOG</p>
              
              <div className="space-y-6">
                {/* Internships */}
                {internshipsData.map((exp, idx) => (
                  <div key={idx} className="border-b border-dashed border-white/10 pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wide mb-2">
                      <span>{exp.role}</span>
                      <span className="text-orange-500">{exp.period}</span>
                    </div>
                    <p className="text-sm text-te-muted leading-tight mb-3">{exp.company}</p>
                    <p className="text-base font-medium leading-relaxed text-te-muted max-w-full lg:max-w-[85%] break-words mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono uppercase text-te-muted">
                      {exp.achievements.map((ach, aIdx) => (
                        <span key={aIdx} className="px-2 py-1 bg-white/5 border border-white/10">{ach}</span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Research */}
                {researchData.map((proj, idx) => (
                  <div key={idx} className="border-b border-dashed border-white/10 pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wide mb-2">
                      <span>{proj.role}</span>
                      <span className="text-orange-500">{proj.period}</span>
                    </div>
                    <p className="text-sm text-te-muted leading-tight mb-3">{proj.organization}</p>
                    <p className="text-base font-medium leading-relaxed text-te-muted max-w-full lg:max-w-[85%] break-words mb-4">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono uppercase text-te-muted">
                      {proj.achievements.map((ach, aIdx) => (
                        <span key={aIdx} className="px-2 py-1 bg-white/5 border border-white/10">{ach}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* CENTER COLUMN: Skills, Certifications, Achievements */}
          <section className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Skills module */}
            <div className="te-module p-5 sm:p-8">
              <h3 className="text-lg font-black uppercase tracking-tight mb-1 leading-snug">Skill_Matrix</h3>
              <p className="te-label text-xs mb-6 text-orange-500">.EXE // COMPETENCY_DUMP</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-xs font-mono text-te-muted">
                {Object.entries(skillsData).map(([key, items], index) => (
                  <div key={index} className="border-b border-dashed border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-orange-500 block mb-2 font-bold">{key.toUpperCase()}</span>
                    <ul className="space-y-1.5 text-xs">
                      {(items as string[]).map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 hover:text-white transition-colors cursor-default truncate">
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
            <div className="te-module p-5 sm:p-8">
              <h3 className="text-lg font-black uppercase tracking-tight mb-1 leading-snug">Certifications</h3>
              <p className="te-label text-xs mb-5 text-orange-500">.EXE // VERIFIED_CREDENTIALS</p>
              
              {certificationsData.map((cert: { provider: string; name: string; color: string; period?: string }, index: number) => (
                <div key={index} className="flex flex-col xs:flex-row xs:items-center justify-between py-3 border-b border-white/5 last:border-0 text-xs font-mono text-te-muted leading-tight gap-1 xs:gap-4 max-w-full">
                  <span className="max-w-full xs:max-w-xs overflow-hidden break-words">{cert.name}</span>
                  <span className="text-orange-500 max-w-full xs:max-w-[12ch] overflow-hidden break-words shrink-0">{cert.period || cert.provider}</span>
                </div>
              ))}
            </div>

            {/* Achievements module */}
            <div className="te-module p-5 sm:p-8">
              <h3 className="text-lg font-black uppercase tracking-tight mb-1 leading-snug">Achievement_Log</h3>
              <p className="te-label text-xs mb-5 text-orange-500">.EXE // HONOR_REGISTRY</p>
              
              <ul className="space-y-3 text-base font-medium leading-relaxed text-te-muted max-w-lg">
                {achievementsData.map((achievement: { title: string; place: string; iconType: string }, index: number) => (
                  <li key={index} className="flex items-start gap-3 hover:text-white transition-colors cursor-default">
                    <span className="text-orange-500 font-bold text-sm mt-0.5 shrink-0">{achievement.place}</span>
                    <span>{achievement.title}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.tactileFeedback?.playClickSound()}
                className="mt-6 te-button text-xs py-1 px-3 opacity-60 hover:opacity-100"
              >
                VIEW_ALL_RECORDS
              </button>
            </div>

          </section>

        </div>

        {/* Bottom system info bar */}
        <footer className="px-4 sm:px-8 py-6 border-t border-white/10 mt-2 flex flex-col md:flex-row gap-4 items-center justify-between text-xs font-mono text-te-muted">
          
          {/* System metrics */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
          <span className="text-center md:text-right">BUILDTIME:{new Date().toISOString().slice(0, 19).replace('T', 'Z')}</span>

        </footer>

      </div>
    </main>
  )
}

export default AboutPage
