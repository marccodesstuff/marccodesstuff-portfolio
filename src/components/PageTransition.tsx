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
const EXIT_DURATION  = 120  // ms — fast smooth exit
const ENTER_DURATION = 220  // ms — clean fade/slide in

// ─── Transition phases ─────────────────────────────────────
type Phase = 'idle' | 'exiting' | 'entering'

// ─── Top Progress Indicator Line ────────────────────────────
const TopAccentBar = ({ active }: { active: boolean }) => {
  if (!active) return null
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none overflow-hidden bg-white/5">
      <div className="h-full bg-gradient-to-r from-transparent via-[#ff6b1a] to-[#ff6b1a] animate-[pulse_0.4s_ease-in-out_infinite] w-full" />
    </div>
  )
}

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

  // Swap content during transition
  useEffect(() => {
    if (phase === 'entering') {
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
      navigate(to)
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      setPhase('entering')

      setTimeout(() => {
        setPhase('idle')
        pendingPath.current = null
      }, ENTER_DURATION)
    }, EXIT_DURATION)
  }, [location.pathname, navigate, phase])

  // CSS classes for smooth transition
  const contentStyle = (() => {
    switch (phase) {
      case 'exiting':
        return 'opacity-0 translate-y-1 transition-all duration-100 ease-out'
      case 'entering':
        return 'opacity-100 translate-y-0 transition-all duration-200 ease-out'
      default:
        return 'opacity-100 translate-y-0'
    }
  })()

  const isTransitioning = phase !== 'idle'

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, isTransitioning }}>
      <TopAccentBar active={isTransitioning} />

      {/* Page content */}
      <div className={contentStyle}>
        {displayedChildren}
      </div>
    </TransitionContext.Provider>
  )
}

export default PageTransition
