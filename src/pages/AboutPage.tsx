import { Github, Linkedin, Mail, User, Briefcase, Award, CheckCircle2, MapPin, Globe } from 'lucide-react'
import achievementsData from '../data/achievements.json'
import internshipsData from '../data/internships.json'
import researchData from '../data/research.json'
import skillsData from '../data/skills.json'
import certificationsData from '../data/certifications.json'

const AboutPage = () => {
  return (
    <main className="p-4 sm:p-6 lg:p-8 max-w-[1400px] mx-auto">
      <div className="border-t-2 border-l-2 border-white/10 bg-[#141414]/90 min-h-screen">
        
        {/* Page header */}
        <header className="border-b-2 border-white/10 px-6 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b1a] font-bold uppercase tracking-wider mb-1">
                <User size={14} />
                <span>Biography & Qualifications</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                About Marc Victor
              </h1>
              <p className="text-sm sm:text-base text-white/60 mt-1">
                AI & Automation Engineer, Full-Stack Developer, and Machine Learning Specialist.
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE FOR HIRE
            </span>
          </div>
        </header>

        {/* Main content grid */}
        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN: Identity Module & Experience */}
          <section className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Bio module */}
            <div className="te-module p-6 sm:p-8 flex flex-col justify-between border-b-2 border-white/5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-3">
                  <User size={13} className="text-[#ff6b1a]" />
                  <span>Profile Overview</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <img 
                    src="/profile-pic.jpg" 
                    alt="Marc Victor Velasquez" 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-sm border border-white/10 object-cover shadow-lg"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-white tracking-tight">
                    Marc Victor Velasquez
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 leading-snug">
                    AI & Automation Engineer • Full-Stack Developer
                  </p>
                </div>
              </div>

              {/* Location & timezone */}
              <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-2 gap-y-2 text-xs font-mono text-white/60">
                <div className="flex items-start gap-1.5">
                  <MapPin size={12} className="text-[#ff6b1a] mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[10px]">LOCATION</span>
                    Angeles City, PH
                  </div>
                </div>
                <div className="flex items-start gap-1.5">
                  <Globe size={12} className="text-[#ff6b1a] mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[10px]">TIMEZONE</span>
                    UTC +08:00 (PHT)
                  </div>
                </div>
              </div>

              {/* Social indicators */}
              <div className="mt-5 flex gap-2">
                {[
                  { href: "https://github.com/marccodesstuff", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/mrcvctr-vel", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:velasquezmarcvictor@gmail.com", icon: Mail, label: "Email" }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    onClick={() => window.tactileFeedback?.playClickSound()}
                    className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-[#ff6b1a]/20 border border-white/10 hover:border-[#ff6b1a] rounded text-white/80 hover:text-white transition-all text-xs font-mono"
                    aria-label={link.label}
                    target={link.href.startsWith('mailto') ? undefined : "_blank"}
                    rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  >
                    <link.icon size={14} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

            </div>

            {/* Professional Experience module */}
            <div className="te-module p-6 sm:p-8 overflow-hidden border-b-2 border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-2">
                <Briefcase size={13} className="text-[#ff6b1a]" />
                <span>Work Experience & Research</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-5">
                Career History
              </h3>
              
              <div className="space-y-6">
                {/* Internships */}
                {internshipsData.map((exp, idx) => (
                  <div key={idx} className="border-b border-dashed border-white/10 pb-5 last:border-0 last:pb-0">
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-1">
                      <span className="text-sm font-bold text-white">{exp.role}</span>
                      <span className="text-xs font-mono text-[#ff6b1a]">{exp.period}</span>
                    </div>
                    <p className="text-xs font-mono text-white/50 mb-2">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-white/60">
                      {exp.achievements.map((ach, aIdx) => (
                        <span key={aIdx} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded">{ach}</span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Research */}
                {researchData.map((proj, idx) => (
                  <div key={idx} className="border-b border-dashed border-white/10 pb-5 last:border-0 last:pb-0">
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-1">
                      <span className="text-sm font-bold text-white">{proj.role}</span>
                      <span className="text-xs font-mono text-[#ff6b1a]">{proj.period}</span>
                    </div>
                    <p className="text-xs font-mono text-white/50 mb-2">{proj.organization}</p>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-white/60">
                      {proj.achievements.map((ach, aIdx) => (
                        <span key={aIdx} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded">{ach}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* RIGHT COLUMN: Skills, Certifications, Achievements */}
          <section className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Skills module */}
            <div className="te-module p-6 sm:p-8 border-b-2 border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-2">
                <CheckCircle2 size={13} className="text-[#ff6b1a]" />
                <span>Technical Capabilities</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-6">
                Skills & Technologies
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-xs font-mono">
                {Object.entries(skillsData).map(([key, items], index) => (
                  <div key={index} className="bg-black/30 border border-white/5 p-4 rounded-sm">
                    <span className="text-[#ff6b1a] block mb-2 font-bold uppercase tracking-wider">{key}</span>
                    <ul className="space-y-1.5 text-white/70">
                      {(items as string[]).map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="w-1 h-1 bg-[#ff6b1a] rounded-full inline-block" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications module */}
            <div className="te-module p-6 sm:p-8 border-b-2 border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-2">
                <Award size={13} className="text-[#ff6b1a]" />
                <span>Credentials & Validation</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-5">
                Verified Certifications
              </h3>
              
              <div className="space-y-2">
                {certificationsData.map((cert: { provider: string; name: string; color: string; period?: string }, index: number) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-black/30 border border-white/5 rounded-sm text-xs font-mono text-white/80 gap-1 sm:gap-4">
                    <span className="font-medium text-white">{cert.name}</span>
                    <span className="text-[#ff6b1a] font-semibold shrink-0">{cert.period || cert.provider}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements module */}
            <div className="te-module p-6 sm:p-8 border-b-2 border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-2">
                <Award size={13} className="text-[#ff6b1a]" />
                <span>Honors & Recognitions</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-5">
                Competitions & Awards
              </h3>
              
              <ul className="space-y-3">
                {achievementsData.map((achievement: { title: string; place: string; iconType: string }, index: number) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-black/30 border border-white/5 rounded-sm hover:border-[#ff6b1a]/30 transition-colors">
                    <span className="text-xs font-mono px-2 py-0.5 bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a] font-bold rounded-sm shrink-0">
                      {achievement.place}
                    </span>
                    <span className="text-sm font-medium text-white/80">{achievement.title}</span>
                  </li>
                ))}
              </ul>
            </div>

          </section>

        </div>

        {/* Bottom system info bar */}
        <footer className="px-6 sm:px-8 py-4 border-t border-white/10 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs font-mono text-white/40">
          <span>MARC VICTOR VELASQUEZ • PORTFOLIO</span>
          <span>BUILD REV: 2026</span>
        </footer>

      </div>
    </main>
  )
}

export default AboutPage
