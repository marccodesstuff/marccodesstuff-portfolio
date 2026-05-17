import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  // Define project mapping for consistent ID-based lookup
  const projects: any[] = [
    { id: 'typhoon-beacon', title: 'Philippine Typhoon Survival Beacon', tagline: 'AI-Powered Disaster Response System', description: 'Spearheaded a cross-functional team of 4 developers to develop a predictive neural network utilizing TensorFlow and Google Earth Engine. Achieved 97.8% validation accuracy (0.022 MSE) and 6.9% Mean Absolute Error to detect flood probability.', tech: ['TensorFlow', 'Google Earth Engine', 'Flutter', 'Gemini API', 'OpenMeteo'], date: 'Nov 2025 - Dec 2025', status: 'completed', icon: 'Zap' },
    { id: 'knee-detection', title: 'Knee Tear Detection Platform', tagline: 'AI-Powered MRI Diagnostic System', description: 'Collaborated with a research team of 4 to conduct rigorous testing on 4 backbone architectures (Xception, ResNeXt, EfficientNet, DenseNet). Utilized stacking ensemble meta-learner to boost Sensitivity to 0.88 and F1-Score of 0.735.', tech: ['PyTorch', 'Microservices', 'Event-Driven Architecture', 'DICOM', 'FastMRI Dataset'], date: 'April - October 2025', status: 'completed', icon: 'Brain' },
    { id: 'pageshutter', title: 'PageShutter', tagline: 'Notion Integration Worker', description: 'Created a TypeScript-based Notion Worker for seamless Notion API integrations and automation. Provides a foundation for building Notion-powered applications and data processing pipelines.', tech: ['TypeScript', 'Notion API', 'Cloudflare Workers', 'Serverless'], date: 'Feb 2026', status: 'completed', icon: 'Code' },
    { id: 'water-management', title: 'Water Management and Processing Interface', tagline: 'PostgreSQL Data Platform', description: 'Full-stack web application for managing water records with Express.js backend. Replaced traditional paper-based record keeping systems.', tech: ['Next.js', 'Express.js', 'PostgreSQL'], date: 'Feb 2024 - Jun 2024', status: 'completed', icon: 'Database' },
    { id: 'water-management-v1', title: 'Water Management and Processing Web Application', tagline: 'Environmental Data Platform', description: 'Developed a full-stack web application using Next.js for client and server operations and Express.js to handle mySQL database connectivity.', tech: ['Next.js', 'Express.js', 'mySQL', 'RESTful API'], date: 'May 2024', status: 'completed', icon: 'Database' },
    { id: 'trestle', title: 'Trestle', tagline: 'Block-Based Word Processor', description: 'A block-based word processor that auto-arranges content to avoid whitespace and optimize layout.', tech: ['Flutter', 'Dart', 'Database Management'], date: 'Sep 2024 - Dec 2024', status: 'completed', icon: 'TextAlignJustify' },
    { id: 'ai-director', title: 'AI Director for Unreal Engine 5', tagline: 'Text-to-Logic System for Simulation Actor Behaviors', description: 'Architecting a proof-of-concept AI Director system utilizing quantized Nvidia Cosmos Reason model. Translating natural language prompts into complex actor behavior.', tech: ['Nvidia Cosmos Reason', 'C++', 'Unreal Engine 5', 'Local LLM'], date: 'Jan 2025 - Present', status: 'in-progress', icon: 'Gamepad' },
    { id: 'typhoon-beacon-v1', title: 'BantayBayan: Survival Beacon', tagline: 'Offline-First Philippine Storm Tool', description: 'Offline-first disaster survival beacon using Risk-Weighted Pathfinding to prioritize responder safety over speed.', tech: ['TensorFlow', 'Flutter', 'Risk Modeling'], date: 'Nov 2025 - Dec 2025', status: 'completed', icon: 'Zap' }
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
              <p className="te-label text-base mt-0">HARDWARE_MODULES_01_THRU_08</p>
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

                  {/* Status badge */}
                  <div className="mt-4 flex items-center gap-2 text-[7px] font-mono">
                    {project.status === 'completed' ? (
                      <span className="text-green-500">●</span>
                    ) : project.status === 'in-progress' ? (
                      <span className="text-orange-500 animate-pulse">●</span>
                    ) : (
                      <span className="text-te-muted">○</span>
                    )}
                    {project.date && <span>{project.date}</span>}
                  </div>

                </div>

                {/* Arrow indicator */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-te-muted self-start mt-2 lg:mt-0 group-hover:text-white transition-all transform group-hover:translate-x-1 ${
                    project.icon 
                      ? `opacity-60 group-hover:opacity-100 ${project.icon}` 
                      : 'stroke-current'
                  }`}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>

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
            <span className="text-orange-500">// INDUSTRIAL_MINIMALISM_V04</span>
          </div>
        </footer>

      </div>
    </main>
  )
}

export default ProjectsPage
