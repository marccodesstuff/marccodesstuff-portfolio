import { useState } from 'react'
import { ArrowUpRight, X, Cpu } from 'lucide-react'
import { usePageTransition } from '../components/PageTransition'

// Import all project JSON files
import projectsData from '../data/projects.json'

interface FeaturedProject {
  id: string
  title: string
  tagline: string
  description: string
  tech: string[]
  date: string
  status: string
  icon: string
}

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null)
  const { navigateWithTransition } = usePageTransition()

  const featuredProjects: FeaturedProject[] = [
    projectsData[0],
    projectsData[1],
    projectsData[2],
    projectsData[3],
    projectsData[4],
  ]

  return (
    <main className="p-4 lg:p-8">
      <div className="max-w-[1400px] mx-auto border-t-2 border-l-2 border-white/10 bg-black/30 min-h-screen">
        
        {/* Page header */}
        <header className="border-b-2 border-white/10 px-4 sm:px-8 py-6 sm:py-8 mb-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                Projects_Archive.EXE
              </h1>
              <p className="te-label text-sm sm:text-base mt-0">FEATURED_MODULES_01_THRU_05</p>
            </div>

            <button 
              onClick={() => {
                window.tactileFeedback?.playClickSound();
                navigateWithTransition('/');
              }}
              className="te-button primary text-xs py-2 px-4 opacity-80 hover:opacity-100 self-start sm:self-auto"
            >
              NAV_HOME
            </button>
          </div>
        </header>

        {/* Projects grid */}
        <div className="px-4 sm:px-8 py-6 lg:py-8">
          <div className="grid grid-cols-1 gap-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  window.tactileFeedback?.playClickSound();
                  setSelectedProject(project);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.tactileFeedback?.playClickSound();
                    setSelectedProject(project);
                  }
                }}
                className="te-module px-5 sm:px-8 py-6 sm:py-7 flex flex-col lg:flex-row gap-6 items-start lg:items-center hover:bg-white/[0.03] transition-colors group cursor-pointer relative"
              >
                
                {/* Project ID badge */}
                <div className="absolute top-5 left-5 sm:left-6 z-10">
                  <span className="te-label px-2 py-0.5 border-l-2 border-orange-500 pl-2">
                    MOD_{project.id.toUpperCase()}
                  </span>
                </div>

                {/* Main project info */}
                <div className="flex-1 pt-7 w-full">
                  
                  {/* Project name and category */}
                  <div className="mb-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h2>
                    <p className="te-label text-base sm:text-lg uppercase tracking-widest">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base font-medium leading-relaxed text-te-muted max-w-3xl mb-4 group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 text-[11px] text-te-muted font-mono uppercase">
                    {project.tech.map((tag: string) => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 group-hover:border-orange-500/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Arrow indicator */}
                <ArrowUpRight 
                  size={24} 
                  className="text-te-muted self-start mt-2 lg:mt-0 group-hover:text-white transition-all transform group-hover:translate-x-1 shrink-0"
                />

              </div>
            ))}
          </div>
        </div>

        {/* Archive section */}
        <div className="px-4 sm:px-8 py-6 lg:py-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="te-label text-xs text-te-muted uppercase mb-2 tracking-widest">/// PROJECT_ARCHIVE</p>
              <p className="text-sm text-te-muted font-mono">
                Older modules, prototypes, and experimental builds are separated from the main view.
              </p>
            </div>
            <button
              onClick={() => {
                window.tactileFeedback?.playClickSound();
                navigateWithTransition('/projects/archive');
              }}
              className="te-button primary text-xs py-2 px-5 opacity-80 hover:opacity-100 self-start sm:self-auto"
            >
              OPEN_ARCHIVE
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-4 sm:px-8 py-6 border-t border-white/10 mt-4">
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-between text-xs font-mono text-te-muted">
            <span>RECORDS_TOTAL: {featuredProjects.length}</span>
            <span className="text-orange-500">// INDUSTRIAL_MINIMALISM_V04</span>
          </div>
        </footer>

      {/* Slide-out Technical Spec Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => {
              window.tactileFeedback?.playClickSound();
              setSelectedProject(null);
            }}
          />

          {/* Drawer container */}
          <div className="relative w-full max-w-xl bg-te-bg border-l-2 border-orange-500 h-full px-5 sm:px-8 py-6 sm:py-10 flex flex-col justify-between overflow-y-auto z-10 te-module animate-slideInRight">
            
            {/* Fine Grid overlay inside drawer */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            />

            <div className="relative z-10 space-y-8">
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-white/10 pb-4">
                <div className="pr-4">
                  <span className="te-label px-2 py-0.5 border-l-2 border-orange-500 pl-2 text-xs">
                    MOD_{selectedProject.id.toUpperCase()} // PROJECT_DIAGNOSTIC
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mt-2">
                    {selectedProject.title}
                  </h2>
                  <p className="te-label text-sm text-orange-500 mt-1">{selectedProject.tagline}</p>
                </div>
                
                <button
                  onClick={() => {
                    window.tactileFeedback?.playClickSound();
                    setSelectedProject(null);
                  }}
                  className="p-2 border border-white/10 hover:border-orange-500 hover:text-orange-500 rounded-sm transition-colors cursor-pointer shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Status + period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-3 rounded-sm flex flex-col justify-between min-h-[70px]">
                  <span className="te-label text-xs">STATUS</span>
                  <span className="text-sm sm:text-base font-black uppercase text-green-500">{selectedProject.status || 'ACTIVE'}</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-sm flex flex-col justify-between min-h-[70px]">
                  <span className="te-label text-xs">TIMELINE</span>
                  <span className="text-sm sm:text-base font-black uppercase">{selectedProject.date || 'CURRENT'}</span>
                </div>
              </div>

              {/* Key highlights */}
              <div>
                <h3 className="te-label text-xs text-te-muted uppercase mb-2 tracking-widest border-b border-white/5 pb-1">
                  /// PROJECT_HIGHLIGHTS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                  <div className="bg-black/30 p-2 border border-white/5">
                    <span className="text-te-muted block text-[10px]">FOCUS</span>
                    <span className="font-bold text-white">{selectedProject.tagline}</span>
                  </div>
                  <div className="bg-black/30 p-2 border border-white/5">
                    <span className="text-te-muted block text-[10px]">STACK</span>
                    <span className="font-bold text-orange-500">{selectedProject.tech?.[0] || 'MULTI'}</span>
                  </div>
                  <div className="bg-black/30 p-2 border border-white/5">
                    <span className="text-te-muted block text-[10px]">STATE</span>
                    <span className="font-bold text-green-500">{selectedProject.status === 'active' ? 'IN_PROGRESS' : 'COMPLETED'}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <h3 className="te-label text-[10px] text-te-muted uppercase mb-2 tracking-widest border-b border-white/5 pb-1">
                  /// DETAILED_DESCRIPTION
                </h3>
                <p className="text-base text-te-muted leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech tags */}
              <div>
                <h3 className="te-label text-xs text-te-muted uppercase mb-2 tracking-widest border-b border-white/5 pb-1">
                  /// TECH_STACK
                </h3>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase">
                  {selectedProject.tech.map((tag: string) => (
                    <span key={tag} className="px-2 py-0.5 bg-orange-500/10 border border-orange-500/30 text-orange-500 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom action drawer footer */}
            <div className="border-t border-white/10 pt-4 mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs font-mono text-te-muted relative z-10 pb-[env(safe-area-inset-bottom)]">
              <div className="flex items-center gap-2">
                <Cpu size={12} className="text-orange-500" />
                <span>DIAGNOSTIC: SUCCESS</span>
              </div>
              
              <button 
                onClick={() => {
                  window.tactileFeedback?.playClickSound();
                  setSelectedProject(null);
                }}
                className="te-button text-xs py-1.5 px-3 opacity-80 hover:opacity-100 hover:border-orange-500 w-full sm:w-auto"
              >
                DISMISS_DIAGNOSTICS
              </button>
            </div>

          </div>
        </div>
      )}
      </div>
    </main>
  )
}

export default ProjectsPage
