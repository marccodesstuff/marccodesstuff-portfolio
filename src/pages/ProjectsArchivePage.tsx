import { useState } from 'react'
import { ArrowUpRight, X, FolderGit2, ArrowLeft } from 'lucide-react'
import { usePageTransition } from '../components/PageTransition'

// Import archive project data files
import sgpClipperData from '../data/projects/sgp-clipper.json'
import typhoonBeaconData from '../data/projects/typhoon-beacon.json'
import kneeDetectionData from '../data/projects/knee-detection.json'
import aiDirectorData from '../data/projects/ai-director.json'
import monitoredQuizData from '../data/projects/monitored-quiz.json'
import bodyMicrogamesData from '../data/projects/body-microgames.json'
import waterManagementData from '../data/projects/water-management.json'
import pageShutterData from '../data/projects/pageshutter.json'

type Project = {
  id: string
  title: string
  tagline: string
  description: string
  tech: string[]
  date: string
  status: string
  icon: string
}

const ProjectsArchivePage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { navigateWithTransition } = usePageTransition()

  const archiveProjects: Project[] = [
    sgpClipperData,
    typhoonBeaconData,
    kneeDetectionData,
    aiDirectorData,
    monitoredQuizData,
    bodyMicrogamesData,
    waterManagementData,
    pageShutterData,
    { id: 'trestle', title: 'Trestle', tagline: 'Block-Based Word Processor', description: 'A block-based word processor that auto-arranges your content to avoid whitespace and optimize layout.', tech: ['Flutter', 'Dart', 'Database Management', 'AWS Deployment'], date: 'Sep 2024 - Dec 2024', status: 'completed', icon: 'TextAlignJustify' },
    { id: 'water-management-v1', title: 'Water Management and Processing Web Application', tagline: 'Environmental Data Platform', description: 'Developed a full-stack web application using Next.js for client and server operations and Express.js to handle mySQL database connectivity.', tech: ['Next.js', 'Express.js', 'mySQL', 'RESTful API'], date: 'May 2024', status: 'completed', icon: 'Database' },
  ]

  return (
    <main className="p-4 sm:p-6 lg:p-8 max-w-[1400px] mx-auto">
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
                window.tactileFeedback?.playClickSound()
                navigateWithTransition('/projects')
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold rounded-sm transition-all self-start sm:self-auto"
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
                role="button"
                tabIndex={0}
                onClick={() => {
                  window.tactileFeedback?.playClickSound()
                  setSelectedProject(project)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.tactileFeedback?.playClickSound()
                    setSelectedProject(project)
                  }
                }}
                className="te-module p-6 sm:p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center hover:bg-white/[0.03] transition-all group cursor-pointer relative border-b-2 border-white/5"
              >
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                      ARCHIVE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                      {project.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#ff6b1a] transition-colors">
                    {project.title}
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

                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-white/40 group-hover:text-[#ff6b1a] transition-colors shrink-0 self-start lg:self-center">
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

        <footer className="px-6 sm:px-8 py-4 border-t border-white/10 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs font-mono text-white/40">
          <span>ARCHIVED RECORDS: {archiveProjects.length}</span>
          <span>MARC VICTOR VELASQUEZ • PORTFOLIO</span>
        </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer animate-[fadeIn_0.15s_ease-out]"
            onClick={() => {
              window.tactileFeedback?.playClickSound()
              setSelectedProject(null)
            }}
          />

          <div className="relative w-full max-w-xl bg-[#141414] border-l-2 border-[#ff6b1a] h-full px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl animate-[slideInRight_0.2s_ease-out]">
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div className="pr-4">
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a]">
                    ARCHIVE SPECIFICATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm font-medium text-white/60 mt-1">{selectedProject.tagline}</p>
                </div>

                <button
                  onClick={() => {
                    window.tactileFeedback?.playClickSound()
                    setSelectedProject(null)
                  }}
                  className="p-2 border border-white/10 hover:border-[#ff6b1a] hover:text-[#ff6b1a] rounded text-white/60 transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                  aria-label="Close panel"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/40 border border-white/5 p-3 rounded-sm">
                  <span className="text-[11px] font-mono text-white/40 block">STATUS</span>
                  <span className="text-sm font-semibold uppercase text-emerald-400">{selectedProject.status || 'Completed'}</span>
                </div>
                <div className="bg-black/40 border border-white/5 p-3 rounded-sm">
                  <span className="text-[11px] font-mono text-white/40 block">TIMELINE</span>
                  <span className="text-sm font-semibold text-white">{selectedProject.date || 'Historical'}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-2">
                  Project Highlights
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-black/30 p-2.5 border border-white/5 rounded-sm">
                    <span className="text-white/40 block text-[10px]">CATEGORY</span>
                    <span className="font-semibold text-white">{selectedProject.tagline}</span>
                  </div>
                  <div className="bg-black/30 p-2.5 border border-white/5 rounded-sm">
                    <span className="text-white/40 block text-[10px]">LEAD TECH</span>
                    <span className="font-semibold text-[#ff6b1a]">{selectedProject.tech?.[0] || 'Software'}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-2">
                  Overview & Details
                </h3>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-2">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {selectedProject.tech.map((tag: string) => (
                    <span key={tag} className="px-2.5 py-1 bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a] rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center text-xs font-mono text-white/40 relative z-10 pb-[env(safe-area-inset-bottom)]">
              <span>ARCHIVED RECORD</span>

              <button
                onClick={() => {
                  window.tactileFeedback?.playClickSound()
                  setSelectedProject(null)
                }}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#ff6b1a] text-white text-xs font-semibold rounded-sm transition-all"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </main>
  )
}

export default ProjectsArchivePage
