import { useState } from 'react'
import { ArrowUpRight, Sparkles, FolderGit2, ArrowLeft, Filter } from 'lucide-react'
import { usePageTransition } from '../components/PageTransition'
import ProjectDrawer from '../components/ProjectDrawer'
import type { ProjectEntry } from '../types/project'
import { playClickSound, playHoverTick } from '../utils/sound'

// Import all project JSON files
import projectsData from '../data/projects.json'
import { archiveProjects } from '../data/archive'

type FilterCategory = 'ALL' | 'AI_ML' | 'AUTOMATION' | 'FULLSTACK'

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null)
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL')
  const { navigateWithTransition } = usePageTransition()

  const allProjects: ProjectEntry[] = projectsData

  const filteredProjects = allProjects.filter((p) => {
    if (activeCategory === 'ALL') return true
    if (activeCategory === 'AI_ML') {
      return p.tech.some(t => ['PyTorch', 'YOLOv11', 'LangGraph', 'Agentic AI', 'LLM-as-Judge', 'Machine Learning'].includes(t)) ||
        p.tagline.toLowerCase().includes('ai') || p.tagline.toLowerCase().includes('computer vision')
    }
    if (activeCategory === 'AUTOMATION') {
      return p.tagline.toLowerCase().includes('automation') || p.tagline.toLowerCase().includes('spc') ||
        p.tech.some(t => ['MCP', 'Statistical Process Control', 'Agentic AI'].includes(t))
    }
    if (activeCategory === 'FULLSTACK') {
      return p.tech.some(t => ['.NET 10', 'Blazor', 'FastAPI', 'Next.js', 'Python', 'Streamlit'].includes(t))
    }
    return true
  })

  return (
    <main className="p-4 sm:p-6 lg:p-8 max-w-[1400px] mx-auto">
      <div className="border-t-2 border-l-2 border-white/10 bg-[#141414]/90 min-h-screen">
        
        {/* Page header */}
        <header className="border-b-2 border-white/10 px-6 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b1a] font-bold uppercase tracking-wider mb-1">
                <Sparkles size={14} />
                <span>Selected Works</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Featured Projects
              </h1>
              <p className="text-sm sm:text-base text-white/60 mt-1">
                Production-grade automation tools, machine learning pipelines, and software platforms.
              </p>
            </div>

            <button 
              onClick={() => {
                playClickSound()
                navigateWithTransition('/')
              }}
              onMouseEnter={() => playHoverTick()}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold rounded-sm transition-all self-start sm:self-auto cursor-pointer"
            >
              <ArrowLeft size={13} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Interactive Filter Pills */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-white/40 flex items-center gap-1 mr-1">
                <Filter size={12} className="text-[#ff6b1a]" /> FILTER:
              </span>
              {[
                { id: 'ALL' as const, label: 'All Domains' },
                { id: 'AI_ML' as const, label: 'AI & Machine Learning' },
                { id: 'AUTOMATION' as const, label: 'Automation & SPC' },
                { id: 'FULLSTACK' as const, label: 'Full-Stack & Systems' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    playClickSound()
                    setActiveCategory(cat.id)
                  }}
                  onMouseEnter={() => playHoverTick()}
                  className={`px-3 py-1 text-xs font-mono rounded transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#ff6b1a] text-white font-bold shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-white/50">
              SHOWING <strong className="text-white">{filteredProjects.length}</strong> OF {allProjects.length}
            </span>
          </div>
        </header>

        {/* Projects list */}
        <div className="p-4 sm:p-8">
          <div className="grid grid-cols-1 gap-4">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  playClickSound()
                  setSelectedProject(project)
                }}
                onMouseEnter={() => playHoverTick()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    playClickSound()
                    setSelectedProject(project)
                  }
                }}
                className="te-module p-6 sm:p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center hover:bg-white/[0.03] transition-all group cursor-pointer relative border-b-2 border-white/5"
              >
                
                {/* Main project info */}
                <div className="flex-1 w-full">
                  
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a]">
                      PROJECT {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                      {project.tagline}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#ff6b1a] transition-colors">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {project.tech.map((tag: string) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80 group-hover:border-[#ff6b1a]/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Arrow / CTA indicator */}
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-white/40 group-hover:text-[#ff6b1a] transition-colors shrink-0 self-start lg:self-center">
                  <span>View Details</span>
                  <ArrowUpRight 
                    size={16} 
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Archive section banner */}
        <div className="px-6 sm:px-8 py-6 border-t border-white/10 bg-black/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-1">
                <FolderGit2 size={13} className="text-[#ff6b1a]" />
                <span>Project Archive</span>
              </div>
              <p className="text-sm text-white/70">
                Looking for earlier projects, prototypes, or academic experiments?
              </p>
            </div>
            <button
              onClick={() => {
                playClickSound()
                navigateWithTransition('/projects/archive')
              }}
              onMouseEnter={() => playHoverTick()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b1a] hover:bg-[#ff7d36] text-white text-xs font-semibold rounded-sm transition-all shadow-sm self-start sm:self-auto cursor-pointer"
            >
              <span>Explore Archive ({archiveProjects.length})</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-6 sm:px-8 py-4 border-t border-white/10 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs font-mono text-white/40">
          <span>SHOWING {filteredProjects.length} FEATURED WORKS</span>
          <span>MARC VICTOR VELASQUEZ • PORTFOLIO</span>
        </footer>

      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          variant="featured"
          onClose={() => setSelectedProject(null)}
        />
      )}
      </div>
    </main>
  )
}

export default ProjectsPage
