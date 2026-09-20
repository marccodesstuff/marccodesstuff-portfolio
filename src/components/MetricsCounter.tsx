import { useState, useEffect } from 'react'
import { Cpu, Database, FileText, TrendingDown } from 'lucide-react'
import { playHoverTick } from '../utils/sound'

interface MetricItem {
  id: string
  label: string
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  description: string
  icon: typeof Cpu
}

// Every figure here is sourced from src/data/internships.json or src/data/research.json.
// Keep it that way: only add a metric you can back up in an interview.
const metrics: MetricItem[] = [
  {
    id: 'llm-cost',
    label: 'LLM Cost Reduction',
    value: 99.98,
    decimals: 2,
    prefix: '~',
    suffix: '%',
    description: 'n8n research automation cut from ~$20/day to ~$0.004/day',
    icon: TrendingDown,
  },
  {
    id: 'articles',
    label: 'Articles Published',
    value: 772,
    description: 'SEO-ready articles from a single-shot LLM prompt pipeline',
    icon: FileText,
  },
  {
    id: 'map',
    label: 'Knee MRI Detection mAP',
    value: 75.17,
    decimals: 2,
    suffix: '%',
    description: 'YOLOv11 stacking ensemble for ACL & meniscus tears (88% FROC)',
    icon: Cpu,
  },
  {
    id: 'leads',
    label: 'Company Leads Scraped',
    value: 15500,
    prefix: '~',
    description: 'Regional companies with contact info consolidated for outreach',
    icon: Database,
  },
]

const DURATION_MS = 1200
const FRAME_RATE = 30

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const formatValue = (value: number, decimals = 0): string =>
  value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

const MetricsCounter = () => {
  // 0 → 1 animation progress shared by every counter
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0))

  useEffect(() => {
    if (prefersReducedMotion()) return

    // Timer (not rAF) so the counters still land on their final values in throttled/background tabs.
    const startTime = performance.now()
    const timer = setInterval(() => {
      const t = Math.min((performance.now() - startTime) / DURATION_MS, 1)
      setProgress(1 - Math.pow(1 - t, 3)) // ease-out cubic
      if (t >= 1) clearInterval(timer)
    }, 1000 / FRAME_RATE)

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
                {formatValue(item.value * progress, item.decimals)}
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
