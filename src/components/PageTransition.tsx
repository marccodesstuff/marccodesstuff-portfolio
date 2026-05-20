import { useState, useEffect, useCallback, createContext, useContext, useRef } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// ─── Transition Context ────────────────────────────────────
interface TransitionContextValue {
  navigateWithTransition: (to: string) => void
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextValue>({
  navigateWithTransition: () => {},
  isTransitioning: false,
})

export const usePageTransition = () => useContext(TransitionContext)

// ─── Timing constants ──────────────────────────────────────
const EXIT_DURATION  = 250  // ms — CRT shutdown with static onset
const SCAN_DURATION  = 500  // ms — static noise + scanline sweep
const ENTER_DURATION = 450  // ms — boot-up fade

// ─── Transition phases ─────────────────────────────────────
type Phase = 'idle' | 'exiting' | 'scanning' | 'entering'

// ─── CRT Static Noise Canvas ───────────────────────────────
// Renders animated TV static at 1/4 resolution (scaled up to full screen)
// for an authentic chunky CRT grain look with good performance.
interface CRTStaticProps {
  opacity: number
}

const CRTStatic = ({ opacity }: CRTStaticProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Draw at 1/3 resolution for chunky pixel noise + good performance
    const SCALE = 3

    const resize = () => {
      canvas.width  = Math.ceil(window.innerWidth  / SCALE)
      canvas.height = Math.ceil(window.innerHeight / SCALE)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const imageData = ctx.createImageData(w, h)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Sparse noise: ~40% of pixels lit, rest stay dark
        if (Math.random() > 0.60) {
          // CRT phosphors glow slightly green/white
          const luma = Math.floor(Math.random() * 160 + 40)
          const tint = Math.random() > 0.85 ? 20 : 0 // rare orange tint
          data[i]     = luma + tint         // R
          data[i + 1] = luma                // G
          data[i + 2] = Math.max(0, luma - tint * 2)  // B
          data[i + 3] = Math.floor(Math.random() * 180 + 75) // A: 75-255
        } else {
          // Dark pixel — very dark grey, semi-transparent
          const dark = Math.floor(Math.random() * 15)
          data[i]     = dark
          data[i + 1] = dark
          data[i + 2] = dark
          data[i + 3] = Math.floor(Math.random() * 120 + 80) // A: 80-200
        }
      }

      ctx.putImageData(imageData, 0, 0)
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9998,
        pointerEvents: 'none',
        imageRendering: 'pixelated',
        opacity,
        transition: 'opacity 80ms linear',
      }}
    />
  )
}

// ─── Scanline Line ─────────────────────────────────────────
// A single orange sweep line rendered as a separate element
// so it stays sharp on top of the noise canvas.
const ScanlineSweep = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}
  >
    {/* Primary sweep line */}
    <div className="crt-sweep-line" />
    {/* Faint trailing echo */}
    <div className="crt-sweep-line crt-sweep-echo" />
  </div>
)

// ─── Component ─────────────────────────────────────────────
interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location  = useLocation()
  const navigate  = useNavigate()
  const [phase, setPhase] = useState<Phase>('idle')
  const [displayedChildren, setDisplayedChildren] = useState<ReactNode>(children)
  const pendingPath = useRef<string | null>(null)

  // Keep displayed children in sync during idle
  useEffect(() => {
    if (phase === 'idle') setDisplayedChildren(children)
  }, [children, phase])

  // Swap content during scan when screen is obscured
  useEffect(() => {
    if (phase === 'scanning' || phase === 'entering') {
      setDisplayedChildren(children)
    }
  }, [children, phase])

  // Main transition orchestrator
  const navigateWithTransition = useCallback((to: string) => {
    if (to === location.pathname) return
    if (phase !== 'idle') return

    pendingPath.current = to
    setPhase('exiting')

    setTimeout(() => {
      setPhase('scanning')
      navigate(to)
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

      setTimeout(() => {
        setPhase('entering')

        setTimeout(() => {
          setPhase('idle')
          pendingPath.current = null
        }, ENTER_DURATION)
      }, SCAN_DURATION)
    }, EXIT_DURATION)
  }, [location.pathname, navigate, phase])

  // CSS class for page content
  const contentClass = (() => {
    switch (phase) {
      case 'exiting':  return 'page-exit-active'
      case 'scanning': return 'page-hidden'
      case 'entering': return 'page-enter-active'
      default:         return ''
    }
  })()

  // Static noise opacity: ramps up during exit, full during scan, fades during enter
  const staticOpacity = (() => {
    switch (phase) {
      case 'exiting':  return 0.55
      case 'scanning': return 0.85
      case 'entering': return 0.20
      default:         return 0
    }
  })()

  const isTransitioning = phase !== 'idle'

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, isTransitioning }}>
      {/* CRT static noise canvas — visible during exiting/scanning/entering */}
      {isTransitioning && <CRTStatic opacity={staticOpacity} />}

      {/* Orange scanline sweep — only during the scan phase */}
      {phase === 'scanning' && <ScanlineSweep />}

      {/* Page content */}
      <div
        className={contentClass}
        style={{ willChange: isTransitioning ? 'opacity, transform, filter' : 'auto' }}
      >
        {displayedChildren}
      </div>
    </TransitionContext.Provider>
  )
}

export default PageTransition
