import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TransitionContext } from '../context/PageTransitionContext'

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
  // Pending timeouts, cleared on unmount so a late timer can't navigate or set state afterwards
  const timers = useRef<number[]>([])

  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach((id) => window.clearTimeout(id))
  }, [])

  // Main transition orchestrator: fade out the current page, navigate, then fade the new one in.
  // The router only swaps `children` when navigate() runs, so the old page stays on screen while exiting.
  const navigateWithTransition = useCallback((to: string) => {
    if (to === location.pathname) return
    if (phase !== 'idle') return

    setPhase('exiting')

    timers.current.push(window.setTimeout(() => {
      navigate(to)
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      setPhase('entering')

      timers.current.push(window.setTimeout(() => setPhase('idle'), ENTER_DURATION))
    }, EXIT_DURATION))
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
        {children}
      </div>
    </TransitionContext.Provider>
  )
}

export default PageTransition
