import { useState, useEffect } from 'react'
import { CheckCircle2, Cpu, FileCheck2, Code2 } from 'lucide-react'
import { playHoverTick } from '../utils/sound'

interface MetricItem {
  id: string
  label: string
  value: number
  prefix?: string
  suffix?: string
  description: string
  icon: typeof Cpu
}

const metrics: MetricItem[] = [
  {
    id: 'projects',
    label: 'Systems & Repositories',
    value: 10,
    suffix: '+',
    description: 'Production applications, AI platforms & open source tools',
    icon: Code2,
  },
  {
    id: 'mri',
    label: 'Trained MRI Scans',
    value: 3000,
    suffix: '+',
    description: 'Coronal knee MRIs annotated for YOLO ensemble tear detection',
    icon: Cpu,
  },
  {
    id: 'precision',
    label: 'Compliance Mapping',
    value: 99.2,
    suffix: '%',
    description: 'Automated SOC 2 & ISO 27001 control verification precision',
    icon: FileCheck2,
  },
  {
    id: 'code-quality',
    label: 'Test & Code Coverage',
    value: 100,
    suffix: '%',
    description: 'Type-safe workflows with continuous integration tests',
    icon: CheckCircle2,
  },
]

const MetricsCounter = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    mri: 0,
    precision: 0,
    'code-quality': 0,
  })

  useEffect(() => {
    const duration = 1200 // ms
    const frameRate = 30
    const totalFrames = Math.round((duration / 1000) * frameRate)
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      setCounts({
        projects: Math.min(10, Math.round(10 * easeProgress)),
        mri: Math.min(3000, Math.round(3000 * easeProgress)),
        precision: Math.min(99.2, Number((99.2 * easeProgress).toFixed(1))),
        'code-quality': Math.min(100, Math.round(100 * easeProgress)),
      })

      if (frame >= totalFrames) {
        clearInterval(timer)
      }
    }, 1000 / frameRate)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
      {metrics.map((item) => {
        const IconComponent = item.icon
        return (
          <div
            key={item.id}
            onMouseEnter={() => playHoverTick()}
            className="te-module p-5 sm:p-6 flex flex-col justify-between border-b-2 border-white/5 bg-[#141414]/90 hover:bg-white/[0.02] transition-colors group"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-[11px] font-mono font-bold text-white/50 uppercase tracking-wider">
                {item.label}
              </span>
              <IconComponent size={14} className="text-[#ff6b1a] opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>

            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono">
                {item.prefix}
                {counts[item.id] ?? item.value}
                <span className="text-[#ff6b1a]">{item.suffix}</span>
              </p>
              <p className="text-xs text-white/60 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MetricsCounter

