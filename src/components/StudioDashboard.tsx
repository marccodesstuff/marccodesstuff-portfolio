/* ===========================================
   STUDIO DASHBOARD - VISUAL LOGIC PATCHER
   =========================================== */

import { useState } from 'react'

/**
 * StudioDashboard - Modular synthesis-style workspace
 * 
 * Users can "patch" different products together using visual logic
 * inspired by modular synthesizers
 */

interface ProductNode {
  id: number
  name: string
  series: string
  iconType: string
  color: string
  connectedTo: number[]
}

const StudioDashboard = () => {
  const [nodes, setNodes] = useState<ProductNode[]>([])

  useEffect(() => {
    // Create initial nodes (synth modules)
    const initialNodes: ProductNode[] = [
      { id: 1, name: 'VOX CORP', series: 'TE-2X PROTOTYPE', iconType: 'cpu', color: '#FF5C00', connectedTo: [] },
      { id: 2, name: 'AUDIO ENGINE', series: 'DIFFUSION_MODEL_V3', iconType: 'waves', color: '#E2E2E2', connectedTo: [1] },
      { id: 3, name: 'DATA PIPELINE', series: 'TENSORFLOW_HUB', iconType: 'database', color: '#FFA500', connectedTo: [1, 2] },
    ]
    
    setNodes(initialNodes)
  }, [])

  // Create cable between two nodes (simplified - no Three.js dependencies)
  useEffect(() => {
    console.log('🔌 Studio dashboard loaded with', nodes.length, 'nodes and', cables.length, 'connections')
  }, [nodes, cables])

  return (
    <section className="py-16 border-t border-white/5 overflow-hidden" id="studio-dashboard">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <h2 className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2">Studio Environment</h2>
            <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter">
              VISUAL LOGIC PATCHER
            </h3>
            <p className="te-label mt-4 max-w-2xl text-te-muted leading-relaxed">
              Patch your products together using modular synthesis logic. Create custom pipelines by connecting modules visually.
            </p>
          </div>
          
          {/* System Status */}
          <div className="flex flex-col items-end gap-2">
            <span className="text-[9px] font-mono text-te-muted">PATCH_ENGINE_V1.0</span>
            <span className="te-label px-2 py-0.5 bg-green-500/10 border-l-2 border-green-500">RUNNING</span>
          </div>
        </div>

        {/* 3D Canvas Container */}
        <div className="bg-black/40 border border-white/5 rounded-lg p-8 relative overflow-hidden" style={{ minHeight: '60vh' }}>
          
          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Node Rendering */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute te-module p-4 border-2 transition-all cursor-pointer group"
              style={{
                left: `${(30 + Math.sin(node.id * 0.5) * 10) * 4}%`,
                top: `${(50 + Math.cos(node.id * 0.3) * 8) * 4}%`,
                width: '240px',
                borderColor: node.color,
                transform: `translate(-50%, -50%)`,
              }}
            >
              {/* Node Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono text-te-muted uppercase">{node.iconType}_MODULE</span>
              </div>

              {/* Node Content */}
              <div className="text-left">
                <h4 className="font-black uppercase tracking-tight mb-1 leading-tight">{node.name}</h4>
                <p className="text-[9px] font-mono text-te-muted leading-relaxed">{node.series}</p>
                
                {/* I/O Ports */}
                <div className="flex items-center gap-2 mt-3">
                  <div className={`w-1.5 h-1.5 rounded-full border ${cables.some(c => c.start === node.id) ? 'border-green-500' : 'border-white/30'}`} />
                  <span className="text-[7px] font-mono text-te-muted">INPUT ({node.connectedTo.length})</span>
                </div>
              </div>

              {/* Color indicator */}
              <div 
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: node.color }}
              />
            </div>
          ))}

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-[9px] font-mono text-te-muted bg-black/80 px-3 py-1 border border-white/10">
              VISUAL LOGIC PATCHER • CONNECT MODULES TO BUILD DATA FLOWS
            </p>
          </div>

        </div>

        {/* Legend */}
        <div className="flex items-center justify-between mt-6 text-[9px] font-mono text-te-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              VOX CORP
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E2E2E2]" />
              DIFFUSION_V3
            </span>
          </div>
          
          <span>{cables.length} CONNECTIONS</span>
        </div>

      </div>
    </section>
  )
}

export default StudioDashboard
