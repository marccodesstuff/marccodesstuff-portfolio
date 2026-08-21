import { useState } from 'react'
import { Activity, Play, RefreshCw, AlertTriangle, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react'
import { playClickSound, playActionBeep, playHoverTick } from '../utils/sound'

// --- Tab 1: SPC Simulator Data & Helpers ---
interface DataPoint {
  id: number
  value: number
  isOutlier: boolean
}

const generateLotData = (injectDrift = false): DataPoint[] => {
  const nominal = 100
  const stdDev = 2.5
  const points: DataPoint[] = []

  for (let i = 1; i <= 16; i++) {
    // Normal distribution approximation (Box-Muller)
    const u1 = Math.random() || 0.1
    const u2 = Math.random() || 0.1
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2)
    
    let val = nominal + z0 * stdDev
    if (injectDrift && i >= 13) {
      val += (i - 12) * 3.5 // Inject out-of-control drift
    }
    
    const isOutlier = val > 107.5 || val < 92.5
    points.push({ id: i, value: Number(val.toFixed(2)), isOutlier })
  }
  return points
}

// --- Tab 2: Agentic Compliance Step Data ---
interface AuditStep {
  title: string
  detail: string
  status: 'pending' | 'running' | 'completed'
}

const initialAuditSteps: AuditStep[] = [
  { title: '1. Ingest Security Control', detail: 'SOC2_CC6.1: Logical access restrictions & MFA enforcement', status: 'pending' },
  { title: '2. LLM Evidence Extraction', detail: 'Parsing AWS IAM policies, Okta logs & GitHub commit signatures', status: 'pending' },
  { title: '3. Compliance Rule Validation', detail: 'Evaluating findings against SOC 2 and ISO 27001 Annex A.9', status: 'pending' },
  { title: '4. Generate Mapping Report', detail: 'Audit verdict: 100% COMPLIANT • 0 Critical Findings', status: 'pending' },
]

const EngineeringSandbox = () => {
  const [activeTab, setActiveTab] = useState<'spc' | 'agentic'>('spc')
  
  // SPC State
  const [lotData, setLotData] = useState<DataPoint[]>(generateLotData(false))
  const [hasDrift, setHasDrift] = useState(false)

  // Agentic Tracer State
  const [auditSteps, setAuditSteps] = useState<AuditStep[]>(initialAuditSteps)
  const [isAuditing, setIsAuditing] = useState(false)

  // Calculations for SPC
  const values = lotData.map(p => p.value)
  const mean = values.reduce((a, b) => a + b, 0) / values.length
  const variance = values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length
  const sigma = Math.sqrt(variance)
  const usl = 107.5
  const lsl = 92.5
  const cpu = (usl - mean) / (3 * (sigma || 1))
  const cpl = (mean - lsl) / (3 * (sigma || 1))
  const cpk = Math.min(cpu, cpl)

  const handleSimulateLot = (drift: boolean) => {
    playClickSound()
    setHasDrift(drift)
    setLotData(generateLotData(drift))
    playActionBeep(!drift)
  }

  const handleRunAudit = () => {
    if (isAuditing) return
    playClickSound()
    setIsAuditing(true)

    // Reset steps
    setAuditSteps(initialAuditSteps.map(s => ({ ...s, status: 'pending' })))

    // Step 1
    setTimeout(() => {
      setAuditSteps(prev => [
        { ...prev[0], status: 'completed' },
        { ...prev[1], status: 'running' },
        prev[2],
        prev[3],
      ])
      playClickSound(800, 0.02)
    }, 400)

    // Step 2
    setTimeout(() => {
      setAuditSteps(prev => [
        prev[0],
        { ...prev[1], status: 'completed' },
        { ...prev[2], status: 'running' },
        prev[3],
      ])
      playClickSound(950, 0.02)
    }, 900)

    // Step 3
    setTimeout(() => {
      setAuditSteps(prev => [
        prev[0],
        prev[1],
        { ...prev[2], status: 'completed' },
        { ...prev[3], status: 'running' },
      ])
      playClickSound(1100, 0.02)
    }, 1400)

    // Step 4 (Done)
    setTimeout(() => {
      setAuditSteps(prev => [
        prev[0],
        prev[1],
        prev[2],
        { ...prev[3], status: 'completed' },
      ])
      setIsAuditing(false)
      playActionBeep(true)
    }, 1900)
  }

  return (
    <section className="te-module p-6 sm:p-8 border-r-0 lg:border-r-2 border-b-2 border-white/5 bg-[#141414]/95">
      {/* Top Header & Tab switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b1a] font-bold uppercase tracking-wider mb-1">
            <Activity size={14} />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Live Architecture & Process Simulator
          </h3>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center bg-black/40 border border-white/10 p-1 rounded-sm text-xs font-mono">
          <button
            onClick={() => {
              playClickSound()
              setActiveTab('spc')
            }}
            onMouseEnter={() => playHoverTick()}
            className={`px-3 py-1.5 rounded-sm transition-all font-semibold ${
              activeTab === 'spc'
                ? 'bg-[#ff6b1a] text-white shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
          >
            FabTwin: SPC Analytics
          </button>
          <button
            onClick={() => {
              playClickSound()
              setActiveTab('agentic')
            }}
            onMouseEnter={() => playHoverTick()}
            className={`px-3 py-1.5 rounded-sm transition-all font-semibold ${
              activeTab === 'agentic'
                ? 'bg-[#ff6b1a] text-white shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Augur: Compliance Agent
          </button>
        </div>
      </div>

      {/* Tab 1: SPC Simulator */}
      {activeTab === 'spc' && (
        <div className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            
            {/* SVG Chart */}
            <div className="flex-1 w-full bg-black/40 border border-white/10 p-4 rounded-sm">
              <div className="flex justify-between items-center text-xs font-mono text-white/50 mb-3 border-b border-white/5 pb-2">
                <span>WAFER FABRICATION THICKNESS CONTROL CHART (X-BAR)</span>
                <span className={hasDrift ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {hasDrift ? '⚠ PROCESS DRIFT DETECTED' : '● PROCESS IN CONTROL'}
                </span>
              </div>

              {/* Chart SVG Canvas */}
              <div className="relative w-full h-44 sm:h-52">
                <svg className="w-full h-full" viewBox="0 0 500 180" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="490" y2="20" stroke="rgba(239, 68, 68, 0.4)" strokeDasharray="3 3" strokeWidth="1.5" />
                  <text x="495" y="24" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="end">UCL (107.5)</text>

                  <line x1="40" y1="90" x2="490" y2="90" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
                  <text x="495" y="94" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="end">CL (100.0)</text>

                  <line x1="40" y1="160" x2="490" y2="160" stroke="rgba(239, 68, 68, 0.4)" strokeDasharray="3 3" strokeWidth="1.5" />
                  <text x="495" y="164" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="end">LCL (92.5)</text>

                  {/* Connecting Line */}
                  <polyline
                    fill="none"
                    stroke="#ff6b1a"
                    strokeWidth="2"
                    points={lotData.map((d, i) => {
                      const x = 50 + (i * (420 / 15))
                      // Map 85..115 to 170..10
                      const y = 90 - ((d.value - 100) * (70 / 10))
                      return `${x},${Math.max(10, Math.min(170, y))}`
                    }).join(' ')}
                  />

                  {/* Data Points */}
                  {lotData.map((d, i) => {
                    const x = 50 + (i * (420 / 15))
                    const y = 90 - ((d.value - 100) * (70 / 10))
                    const clampedY = Math.max(10, Math.min(170, y))
                    return (
                      <g key={d.id}>
                        <circle
                          cx={x}
                          cy={clampedY}
                          r={d.isOutlier ? 5 : 3.5}
                          fill={d.isOutlier ? '#ef4444' : '#ff6b1a'}
                          stroke="#ffffff"
                          strokeWidth={d.isOutlier ? 1.5 : 0.5}
                        />
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>

            {/* Metrics & Action Panel */}
            <div className="w-full lg:w-72 space-y-4">
              <div className="bg-black/40 border border-white/10 p-4 rounded-sm space-y-3">
                <span className="text-[11px] font-mono text-white/50 block font-bold uppercase tracking-wider">
                  Live Process Capability
                </span>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-white/5 p-2 rounded">
                    <span className="text-white/40 block text-[10px]">MEAN (μ)</span>
                    <span className="font-bold text-white text-sm">{mean.toFixed(2)}</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded">
                    <span className="text-white/40 block text-[10px]">SIGMA (σ)</span>
                    <span className="font-bold text-white text-sm">{sigma.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-white/5 p-2.5 rounded text-xs font-mono">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-[10px]">CPK CAPABILITY INDEX</span>
                    <span className={`font-bold ${cpk >= 1.33 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {cpk.toFixed(2)} {cpk >= 1.33 ? '✓ (Good)' : '⚠ (Marginal)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => handleSimulateLot(false)}
                  onMouseEnter={() => playHoverTick()}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#ff6b1a] hover:bg-[#ff7d36] text-white text-xs font-semibold rounded-sm transition-all shadow-sm active:scale-95"
                >
                  <RefreshCw size={13} />
                  <span>Simulate Standard Lot</span>
                </button>
                <button
                  onClick={() => handleSimulateLot(true)}
                  onMouseEnter={() => playHoverTick()}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold rounded-sm transition-all active:scale-95"
                >
                  <AlertTriangle size={13} className="text-amber-400" />
                  <span>Inject Process Drift</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Tab 2: Agentic Compliance Tracer */}
      {activeTab === 'agentic' && (
        <div className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-black/40 border border-white/10 p-5 rounded-sm">
            <div className="flex justify-between items-center text-xs font-mono text-white/50 mb-4 pb-2 border-b border-white/5">
              <span>AUGUR AGENTIC COMPLIANCE PIPELINE TRACER</span>
              <span className="text-[#ff6b1a] font-bold">MODEL CONTEXT PROTOCOL (MCP)</span>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-3">
              {auditSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-sm border transition-all flex items-start gap-3 text-xs font-mono ${
                    step.status === 'completed'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-white'
                      : step.status === 'running'
                      ? 'bg-[#ff6b1a]/15 border-[#ff6b1a] text-white animate-pulse'
                      : 'bg-black/30 border-white/5 text-white/40'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {step.status === 'completed' ? (
                      <CheckCircle size={15} className="text-emerald-400" />
                    ) : step.status === 'running' ? (
                      <Activity size={15} className="text-[#ff6b1a] animate-spin" />
                    ) : (
                      <ShieldCheck size={15} className="text-white/30" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold flex items-center justify-between">
                      <span>{step.title}</span>
                      <span className="text-[10px] uppercase opacity-75">
                        {step.status === 'completed' ? 'PASS' : step.status === 'running' ? 'EXECUTING...' : 'QUEUED'}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/70 mt-1">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Run Button */}
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-white/50">
                Automated continuous compliance evidence mapping to SOC 2 & ISO 27001
              </span>
              <button
                onClick={handleRunAudit}
                disabled={isAuditing}
                onMouseEnter={() => playHoverTick()}
                className="inline-flex items-center gap-2 py-2 px-4 bg-[#ff6b1a] hover:bg-[#ff7d36] disabled:opacity-50 text-white text-xs font-semibold rounded-sm transition-all shadow-sm active:scale-95"
              >
                <Play size={13} />
                <span>{isAuditing ? 'Executing Agent Trace...' : 'Run Sample Agent Audit'}</span>
                <ArrowRight size={13} />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}

export default EngineeringSandbox

