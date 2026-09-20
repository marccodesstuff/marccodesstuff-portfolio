import { useState } from 'react'
import { ArrowUpRight, FolderGit2, ArrowLeft } from 'lucide-react'
import { usePageTransition } from '../context/PageTransitionContext'
import ProjectDrawer from '../components/ProjectDrawer'
import { playClickSound } from '../utils/sound'
import type { ProjectEntry } from '../types/project'

import { archiveProjects } from '../data/archive'

const ProjectsArchivePage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null)
  const { navigateWithTransition } = usePageTransition()

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px] mx-auto">
      <div className="border-t-2 border-l-2 border-white/10 bg-[#141414]/90 min-h-screen">
        <header className="border-b-2 border-white/10 px-6 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b1a] font-bold uppercase tracking-wider mb-1">
                <FolderGit2 size={14} />
                <span>Historical Catalog</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Projects Archive
              </h1>
              <p className="text-sm sm:text-base text-white/60 mt-1">
                Earlier software builds, computer vision experiments, mobile apps, and prototypes.
              </p>
            </div>
            <button
              onClick={() => {
                playClickSound()
                navigateWithTransition('/projects')
              }}
              className="inline-flex items-center gap-2 max-md:min-h-11 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold rounded-sm transition-all self-start sm:self-auto"
            >
              <ArrowLeft size={13} />
              <span>Back to Featured Projects</span>
            </button>
          </div>
        </header>

        <div className="p-4 sm:p-8">
          <div className="grid grid-cols-1 gap-4">
            {archiveProjects.map((project, idx) => (
              <div
                key={project.id}
                className="te-module p-6 sm:p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center hover:bg-white/[0.03] transition-all group relative border-b-2 border-white/5"
              >
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                      ARCHIVE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-mono text-white/55 uppercase tracking-wider">
                      {project.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#ff6b1a] transition-colors">
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      onClick={(e) => {
                        // Safari doesn't focus a button on click; focus it so the drawer can hand focus back here on close
                        e.currentTarget.focus()
                        playClickSound()
                        setSelectedProject(project)
                      }}
                      className="text-left cursor-pointer after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-[#ff6b1a] focus-visible:after:-outline-offset-2"
                    >
                      {project.title}
                    </button>
                  </h2>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {project.tech.map((tag: string) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80 group-hover:border-[#ff6b1a]/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div aria-hidden="true" className="flex items-center gap-1.5 text-xs font-mono font-semibold text-white/55 group-hover:text-[#ff6b1a] transition-colors shrink-0 self-start lg:self-center">
                  <span>Inspect Build</span>
                  <ArrowUpRight
                    size={16}
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="px-6 sm:px-8 py-4 border-t border-white/10 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs font-mono text-white/55">
          <span>ARCHIVED RECORDS: {archiveProjects.length}</span>
          <span>MARC VICTOR VELASQUEZ • PORTFOLIO</span>
        </footer>

      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          variant="archive"
          onClose={() => setSelectedProject(null)}
        />
      )}
      </div>
    </div>
  )
}

export default ProjectsArchivePage
