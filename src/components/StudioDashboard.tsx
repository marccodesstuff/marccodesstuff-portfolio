import { useState } from 'react';
import * as THREE from 'three';

/**
 * StudioDashboard - Modular Synthesizer Patching Interface
 * 
 * Visual workspace inspired by Eurorack/modular synthesizers:
 * - Drag-and-drop module patching
 * - Cable routing visualization
 * - Parameter tweaking controls
 * - Signal flow diagrams
 */

interface ModuleNode {
  id: string;
  type: 'osc' | 'filter' | 'vcf' | 'env' | 'seq' | 'vcx' | 'gate';
  x: number;
  y: number;
  label: string;
  parameters: Record<string, number>;
}

interface Cable {
  fromModule: string;
  fromPort: number;
  toModule: string;
  toPort: number;
}

/**
 * Simple Studio Dashboard - visual schematic representation
 * This is a simplified version focusing on the industrial aesthetic
 */
const StudioDashboard = () => {
  
  const [activePatches, setActivePatches] = useState<Cable[]>([]);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  
  // Initialize module grid
  const modules: Record<string, ModuleNode> = {
    OSC_1: {
      id: 'OSC_1',
      type: 'osc',
      x: 100, y: 80,
      label: 'OSCILLATOR_ONE',
      parameters: { freq: 220, wave: 'sawtooth' as const }
    },
    OSC_2: {
      id: 'OSC_2',
      type: 'osc',
      x: 300, y: 80,
      label: 'OSCILLATOR_TWO',
      parameters: { freq: 330, wave: 'square' as const }
    },
    FILTER_1: {
      id: 'FILTER_1',
      type: 'filter',
      x: 520, y: 80,
      label: 'LOWPASS_FILTER',
      parameters: { cutoff: 2000, resonance: 0.8 }
    },
    VCX_1: {
      id: 'VCX_1',
      type: 'vcx',
      x: 750, y: 60,
      label: 'VOLTAGE_CTRL_X',
      parameters: {}
    },
    ENV_1: {
      id: 'ENV_1',
      type: 'env',
      x: 520, y: 280,
      label: 'ADSR_ENVELOPE',
      parameters: { attack: 0.1, decay: 0.3, sustain: 0.4, release: 1.0 }
    },
    GATE_1: {
      id: 'GATE_1',
      type: 'gate',
      x: 750, y: 260,
      label: 'SEQUENCER_GATE',
      parameters: { step: 4 }
    },
    VCF_1: {
      id: 'VCF_1',
      type: 'vcf',
      x: 980, y: 260,
      label: 'VOLT_CTRL_FILTER',
      parameters: {}
    }
  };

  // Visual cable path calculation
  const getCablePath = (from: {x: number, y: number}, fromPort: number, to: {x: number, y: number}, toPort: number) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    
    // Calculate control point for smooth Bezier
    const dist = Math.sqrt(dx * dx + dy * dy);
    const bend = 0.3;
    
    let cp1x = from.x + dx * bend;
    let cp1y = from.y + dy * bend * (fromPort < toPort ? 1 : -1);
    let cp2x = to.x - dx * bend;
    let cp2y = to.y - dy * bend * (fromPort < toPort ? 1 : -1);
    
    return `M ${from.x + 40} ${from.y + 58} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x + 40} ${to.y + 58}`;
  };

  // Initialize Three.js scene for cables
  const [sceneRef, setSceneRef] = useState<THREE.Scene | null>(null);
  
  useEffect(() => {
    if (selectedModule) {
      console.log('[STUDIO_DASHBOARD] Module selected:', selectedModule);
      
      // Update module parameters in real-time
      const module = modules[selectedModule];
      if (!module) return;

      window.tactileFeedback?.animateTactile?.(
        document.querySelector(`[data-module="${selectedModule}"]`),
        { duration: 0.2 }
      );
    }
  }, [selectedModule]);

  return (
    <section className="p-6 lg:p-8 border-l border-white/10 bg-black/20 relative overflow-hidden">
      
      {/* === BACKGROUND THREE.JS SCENE CANVAS === */}
      <canvas 
        id="studio-canvas"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        className="opacity-50 pointer-events-none"
      />

      {/* Section header */}
      <div className="relative z-10 mb-6 flex items-end justify-between border-b-2 border-white/10 pb-3">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-1">
            Studio_Dashboard.EXE
          </h2>
          <p className="te-label text-sm mt-0">PATCHING_WORKSPACE // SIGNAL_FLOW_VIZ</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              window.tactileFeedback?.playClickSound();
              setActivePatches([]);
            }}
            className="te-button text-[9px] py-2 px-4 opacity-70 hover:opacity-100"
          >
            CLEAR_ALL_PATCHES
          </button>
          
          <button 
            onClick={() => {
              window.tactileFeedback?.playClickSound();
              setActivePatches(prev => [...prev, {
                fromModule: 'OSC_1',
                fromPort: 2,
                toModule: 'FILTER_1',
                toPort: 0
              }]);
            }}
            className="te-button primary text-[9px] py-2 px-4"
          >
            LOAD_PRESET_ALPHA
          </button>
        </div>
      </div>

      {/* === MODULE GRID LAYOUT (Schematic view) === */}
      <div className="relative z-10 border border-white/10 bg-black/30 rounded-lg p-6">
        
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Module nodes */}
        <div className="relative">
          
          {/* OSCILLATOR MODULES */}
          {['OSC_1', 'OSC_2'].map((id) => (
            <button
              key={id}
              data-module={id}
              onClick={() => setSelectedModule(prev => prev === id ? null : id)}
              className={`absolute absolute w-40 h-36 border-2 transition-all duration-150 rounded-sm ${
                selectedModule === id 
                  ? 'border-orange-500 shadow-[0_0_30px_rgba(255,107,26,0.3)]' 
                  : 'border-white/20 hover:border-white/40'
              }`}
              style={{ left: modules[id as keyof typeof modules].x, top: modules[id as keyof typeof modules].y }}
            >
              {/* Module header */}
              <div className="h-6 bg-black border-b border-white/10 flex items-center justify-between px-2">
                <span className="text-xs font-bold uppercase">{modules[id as keyof typeof modules].label}</span>
                {selectedModule === id && (
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map(i => (
                      <span key={i} className={`w-1 h-1 rounded-full ${i <= 2 ? 'bg-orange-500' : 'bg-te-muted'}`} />
                    ))}
                  </div>
                )}
              </div>

              {/* Module body */}
              <div className="p-3 space-y-2">
                {/* Control knobs visualization */}
                <div className="flex justify-between items-center">
                  {[0, 1].map((knob) => (
                    <div key={knob} className="relative w-8 h-8 flex items-center justify-center">
                      <div className="w-full h-full rounded-full border-2 border-white/10 bg-black" />
                      <div 
                        className="absolute w-4 h-4 bg-te-muted rounded-full"
                        style={{ transform: `rotate(${knob * 90 + (selectedModule === id ? 45 : 0)}deg)` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Parameter values */}
                <div className="grid grid-cols-2 gap-x-3 text-[8px] font-mono">
                  <div className="text-te-muted">FREQ:</div>
                  <div className="text-orange-500">{modules[id as keyof typeof modules].parameters.freq}Hz</div>
                  <div className="text-te-muted">WAVE:</div>
                  <div className="text-blue-400 uppercase">{modules[id as keyof typeof modules].parameters.wave}</div>
                </div>
              </div>

              {/* I/O ports */}
              <div className="flex items-center justify-between px-2 pt-1 gap-2">
                {[0, 1, 2].map((port) => (
                  <button
                    key={port}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      port === 2 ? 'bg-orange-500 ring-2 ring-orange-500/50' : 'bg-te-muted hover:bg-white/20'
                    }`}
                    aria-label={`${id} output port ${port}`}
                  />
                ))}
              </div>
            </button>
          ))}

          {/* FILTER MODULE */}
          <button
            data-module="FILTER_1"
            onClick={() => setSelectedModule(prev => prev === 'FILTER_1' ? null : 'FILTER_1')}
            className={`absolute w-40 h-36 border-2 transition-all duration-150 rounded-sm ${
              selectedModule === 'FILTER_1' 
                ? 'border-orange-500 shadow-[0_0_30px_rgba(255,107,26,0.3)]' 
                : 'border-white/20 hover:border-white/40'
              }`}
            style={{ left: modules.FILTER_1.x, top: modules.FILTER_1.y }}
          >
            <div className="h-6 bg-black border-b border-white/10 flex items-center justify-between px-2">
              <span className="text-xs font-bold uppercase">{modules.FILTER_1.label}</span>
              {selectedModule === 'FILTER_1' && (
                <div className="flex gap-0.5">
                  {[1, 2, 3].map(i => (
                    <span key={i} className={`w-1 h-1 rounded-full ${i <= 2 ? 'bg-orange-500' : 'bg-te-muted'}`} />
                  ))}
                </div>
              )}
            </div>

            <div className="p-3 space-y-2">
              {/* Filter knobs */}
              <div className="flex justify-between items-center">
                {[0, 1].map((knob) => (
                  <div key={knob} className="relative w-8 h-8 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-2 border-white/10 bg-black" />
                    <div 
                      className="absolute w-4 h-4 bg-te-muted rounded-full"
                      style={{ transform: `rotate(${knob * 90 + (selectedModule === 'FILTER_1' ? 45 : 0)}deg)` }}
                    />
                  </div>
                ))}
              </div>

              {/* Parameter values */}
              <div className="grid grid-cols-2 gap-x-3 text-[8px] font-mono">
                <div className="text-te-muted">CUTOFF:</div>
                <div className="text-orange-500">{modules.FILTER_1.parameters.cutoff}Hz</div>
                <div className="text-te-muted">RESO:</div>
                <div className="text-blue-400">{modules.FILTER_1.parameters.resonance.toFixed(1)}</div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 pt-1 gap-2">
              {[0, 1].map((port) => (
                <button
                  key={port}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    port === 1 ? 'bg-orange-500 ring-2 ring-orange-500/50' : 'bg-te-muted hover:bg-white/20'
                  }`}
                />
              ))}
            </div>
          </button>

          {/* ENV MODULE */}
          <button
            data-module="ENV_1"
            onClick={() => setSelectedModule(prev => prev === 'ENV_1' ? null : 'ENV_1')}
            className={`absolute w-40 h-36 border-2 transition-all duration-150 rounded-sm ${
              selectedModule === 'ENV_1' 
                ? 'border-orange-500 shadow-[0_0_30px_rgba(255,107,26,0.3)]' 
                : 'border-white/20 hover:border-white/40'
              }`}
            style={{ left: modules.ENV_1.x, top: modules.ENV_1.y }}
          >
            <div className="h-6 bg-black border-b border-white/10 flex items-center justify-between px-2">
              <span className="text-xs font-bold uppercase">{modules.ENV_1.label}</span>
              {selectedModule === 'ENV_1' && (
                <div className="flex gap-0.5">
                  {[1, 2, 3].map(i => (
                    <span key={i} className={`w-1 h-1 rounded-full ${i <= 2 ? 'bg-orange-500' : 'bg-te-muted'}`} />
                  ))}
                </div>
              )}
            </div>

            <div className="p-3 space-y-2">
              {/* Envelope draw knob */}
              <div className="flex justify-between items-center">
                {[0, 1].map((knob) => (
                  <div key={knob} className="relative w-8 h-8 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-2 border-white/10 bg-black" />
                    <div 
                      className="absolute w-4 h-4 bg-te-muted rounded-full"
                      style={{ transform: `rotate(${knob * 90 + (selectedModule === 'ENV_1' ? 45 : 0)}deg)` }}
                    />
                  </div>
                ))}
              </div>

              {/* ADSR labels */}
              <div className="grid grid-cols-2 gap-x-3 text-[8px] font-mono">
                <div className="text-te-muted">ATK:</div>
                <div className="text-orange-500">{modules.ENV_1.parameters.attack}s</div>
                <div className="text-te-muted">DEC:</div>
                <div className="text-orange-500">{modules.ENV_1.parameters.decay}s</div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 pt-1 gap-2">
              {[0, 1].map((port) => (
                <button
                  key={port}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    port === 1 ? 'bg-orange-500 ring-2 ring-orange-500/50' : 'bg-te-muted hover:bg-white/20'
                  }`}
                />
              ))}
            </div>
          </button>

        </div>

        {/* === PATCH CABLES (SVG overlay) === */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {activePatches.map((patch, index) => {
            const fromModule = modules[patch.fromModule as keyof typeof modules];
            const toModule = modules[patch.toModule as keyof typeof modules];
            
            if (!fromModule || !toModule) return null;

            const path = getCablePath(
              { x: fromModule.x + 40, y: fromModule.y + 58 },
              patch.fromPort,
              { x: toModule.x + 40, y: toModule.y + 58 },
              patch.toPort
            );

            return (
              <g key={`${patch.fromModule}-${patch.toModule}`}>
                {/* Cable trace */}
                <path
                  d={path}
                  fill="none"
                  stroke="#ff6b1a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="opacity-80"
                />
                
                {/* Cable inner core (lighter) */}
                <path
                  d={path}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-40"
                />

                {/* Cable glow effect at endpoints */}
                <circle 
                  cx={parseFloat(path.match(/M (.*)/)?.[1] || '0')}
                  cy={parseFloat(path.match(/M .*(.*)/)?.[1] || '0')}
                  r="6"
                  fill="none"
                  stroke="#ff6b1a"
                  strokeWidth="1"
                  className="opacity-40 animate-pulse"
                />
              </g>
            );
          })}
        </svg>

      </div>

      {/* === STATUS BAR === */}
      <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-te-muted">
        <span>PATCHS_ACTIVE: {activePatches.length}</span>
        
        {/* Module status indicators */}
        <div className="flex gap-2">
          {Object.entries(modules).map(([id, module]) => (
            <span key={id} className={`px-1.5 py-0.5 rounded-sm ${
              selectedModule === id ? 'bg-orange-500/20 text-orange-500' : 'bg-white/5'
            }`}>
              {module.id}
            </span>
          ))}
        </div>

        <span>CPU: 8% // MEMORY: 12MB</span>
      </div>

    </section>
  );
};

export default StudioDashboard;
export { StudioDashboard };
