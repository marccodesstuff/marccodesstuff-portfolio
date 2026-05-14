import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const ProjectsPage = () => {
  // Sample project data matching our industrial aesthetic
  const projects = [
    {
      id: '01',
      name: 'Typhoon Survival Beacon',
      category: 'HACKATHON_WIN',
      tags: ['GEMINI.AI', 'TENSORFLOW', 'FLUTTER'],
      description: 'AI-powered disaster response with 97.8% flood prediction accuracy using TensorFlow.',
    },
    {
      id: '02',
      name: 'Knee Tear Detection',
      category: 'MEDICAL_AI',
      tags: ['PYTORCH', 'MICROSERVICES', 'DICOM'],
      description: 'Clinically validated MRI diagnostic platform with 0.88 Sensitivity using ensemble learning.',
    },
    {
      id: '03',
      name: 'Pageshutter CLI',
      category: 'TOOLS',
      tags: ['RUST', 'CLI', 'CROSS_PLATFORM'],
      description: 'Cross-platform page screenshot automation tool for web scrapers and documentation.',
    }
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
              <p className="te-label text-base mt-0">HARDWARE_MODULES_01_THRU_09</p>
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
                    MOD_{project.id}
                  </span>
                </div>

                {/* Main project info */}
                <div className="flex-1">
                  
                  {/* Project name and category */}
                  <div className="mb-3">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-1 group-hover:text-white transition-colors">
                      {project.name}
                    </h2>
                    <p className="te-label text-lg uppercase tracking-widest">{project.category}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-medium leading-relaxed text-te-muted max-w-3xl mb-4 group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 text-[7px] text-te-muted font-mono uppercase">
                    {project.tags.map(tag => (
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

          {/* Easter egg module - Hidden experimental project */}
          <div className="mt-8 border-2 border-dashed border-orange-500/30 p-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl text-orange-500 opacity-20 select-none">?</span>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2 text-orange-500/80">
                  MODULE_EXPERIMENTAL_0X
                </h3>
                <p className="te-label text-sm leading-relaxed max-w-lg">
                  // UNCLASSIFIED_PROJECTS_AVAILABLE_AT_CLEARANCE_LEVEL_4<br />
                  CLICK_TO_ACCESS_RESTRICTED_MODULE_DIRECTORY
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-white/10">
          <div className="flex items-center justify-between text-[9px] font-mono text-te-muted">
            <span>RECORDS_TOTAL: {projects.length}</span>
            <span className="text-orange-500">// CLASSIFIED_ACCESS_REQUIRED</span>
          </div>
        </footer>

      </div>
    </main>
  )
}

export default ProjectsPage
