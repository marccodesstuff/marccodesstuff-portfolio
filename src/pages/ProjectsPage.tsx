import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

// Import all project JSON files
import sgpClipperData from '../data/projects/sgp-clipper.json'
import typhoonBeaconData from '../data/projects/typhoon-beacon.json'
import kneeDetectionData from '../data/projects/knee-detection.json'
import aiDirectorData from '../data/projects/ai-director.json'
import monitoredQuizData from '../data/projects/monitored-quiz.json'
import bodyMicrogamesData from '../data/projects/body-microgames.json'
import waterManagementData from '../data/projects/water-management.json'
import pageShutterData from '../data/projects/pageshutter.json'

const ProjectsPage = () => {
  // Compile all projects into array
  const projects: any[] = [
    sgpClipperData,
    typhoonBeaconData,
    kneeDetectionData,
    aiDirectorData,
    monitoredQuizData,
    bodyMicrogamesData,
    waterManagementData,
    pageShutterData,
    // Add the restored projects
    { id: 'trestle', title: 'Trestle', tagline: 'Block-Based Word Processor', description: 'A block-based word processor that auto-arranges your content to avoid whitespace and optimize layout.', tech: ['Flutter', 'Dart', 'Database Management', 'AWS Deployment'], date: 'Sep 2024 - Dec 2024', status: 'completed', icon: 'TextAlignJustify' },
    { id: 'water-management-v1', title: 'Water Management and Processing Web Application', tagline: 'Environmental Data Platform', description: 'Developed a full-stack web application using Next.js for client and server operations and Express.js to handle mySQL database connectivity.', tech: ['Next.js', 'Express.js', 'mySQL', 'RESTful API'], date: 'May 2024', status: 'completed', icon: 'Database' }
  ]

  return (
    <main className="p-4 lg:p-8">
      <div className="max-w-[1400px] mx-auto border-t-2 border-l-2 border-white/10 bg-black/30 min-h-screen">
        
        {/* Page header */}
        <header className="border-b-2 border-white/10 pb-6 mb-6">
          <div className="flex items-end justify-between gap-4">
            
            <div>
              <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">
                Projects_Archive.EXE
              </h1>
              <p className="te-label text-base mt-0">HARDWARE_MODULES_01_THRU_19</p>
            </div>

            <Link 
              to="/"
              onClick={() => window.tactileFeedback?.playClickSound()}
              className="te-button primary text-[9px] py-2 px-4 opacity-80 hover:opacity-100"
            >
              NAV_HOME
            </Link>
          </div>
        </header>

        {/* Projects grid */}
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-1">
            
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                onClick={() => window.tactileFeedback?.playClickSound()}
                className="te-module p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center hover:bg-white/[0.03] transition-colors group cursor-pointer"
              >
                
                {/* Project ID badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="te-label px-2 py-0.5 border-l-2 border-orange-500 pl-2">
                    MOD_{project.id.toUpperCase()}
                  </span>
                </div>

                {/* Main project info */}
                <div className="flex-1">
                  
                  {/* Project name and category */}
                  <div className="mb-3">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h2>
                    <p className="te-label text-lg uppercase tracking-widest">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-medium leading-relaxed text-te-muted max-w-3xl mb-4 group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 text-[7px] text-te-muted font-mono uppercase">
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
                  className="text-te-muted self-start mt-2 lg:mt-0 group-hover:text-white transition-all transform group-hover:translate-x-1"
                />

              </Link>
            ))}

          </div>

        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-white/10">
          <div className="flex items-center justify-between text-[9px] font-mono text-te-muted">
            <span>RECORDS_TOTAL: {projects.length}</span>
            <span className="text-orange-500">// INDUSTRIAL_MINIMALISM_V04</span>
          </div>
        </footer>

      </div>
    </main>
  )
}

export default ProjectsPage
