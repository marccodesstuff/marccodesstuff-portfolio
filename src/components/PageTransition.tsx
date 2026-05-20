import { useState, useEffect, useCallback, createContext, useContext, useRef } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// ─── Transition Context ────────────────────────────────────
// Exposes a `navigateWithTransition` function to any child component
// so that Header links (and any other nav) can trigger the exit
// animation before the route actually changes.

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
const EXIT_DURATION  = 200  // ms — CRT shutdown
const SCAN_DURATION  = 200  // ms — orange scanline sweep
const ENTER_DURATION = 400  // ms — boot-up fade

// ─── Transition phases ─────────────────────────────────────
type Phase = 'idle' | 'exiting' | 'scanning' | 'entering'

// ─── Component ─────────────────────────────────────────────
interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [phase, setPhase] = useState<Phase>('idle')
  const [displayedChildren, setDisplayedChildren] = useState<ReactNode>(children)
  const pendingPath = useRef<string | null>(null)
  const isFirstRender = useRef(true)

  // On first render, mark as not-first after mount
  useEffect(() => {
    isFirstRender.current = false
  }, [])

  // When children change (route changed), update the displayed content
  // and kick off the enter animation
  useEffect(() => {
    if (phase === 'idle') {
      setDisplayedChildren(children)
    }
  }, [children, phase])

  // The main transition orchestrator
  const navigateWithTransition = useCallback((to: string) => {
    // Don't re-navigate to the same path
    if (to === location.pathname) return
    // Don't interrupt an in-progress transition
    if (phase !== 'idle') return

    pendingPath.current = to

    // Phase 1: Exit
    setPhase('exiting')

    setTimeout(() => {
      // Phase 2: Scanline
      setPhase('scanning')

      // Actually perform the navigation during the scanline
      // (the screen is obscured, so the content swap is invisible)
      navigate(to)
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

      setTimeout(() => {
        // Phase 3: Enter
        setPhase('entering')

        setTimeout(() => {
          // Done
          setPhase('idle')
          pendingPath.current = null
        }, ENTER_DURATION)
      }, SCAN_DURATION)
    }, EXIT_DURATION)
  }, [location.pathname, navigate, phase])

  // Update displayed children when route changes mid-transition
  useEffect(() => {
    if (phase === 'scanning' || phase === 'entering') {
      setDisplayedChildren(children)
    }
  }, [children, phase])

  // Determine the CSS class for the content wrapper
  const contentClass = (() => {
    switch (phase) {
      case 'exiting':  return 'page-exit-active'
      case 'scanning': return 'page-exit-active' // keep hidden during scan
      case 'entering': return 'page-enter-active'
      default:         return ''
    }
  })()

  const isTransitioning = phase !== 'idle'

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, isTransitioning }}>
      {/* Scanline overlay — rendered only during scan phase */}
      {phase === 'scanning' && <div className="page-scanline-overlay" />}

      {/* Content wrapper with animation class */}
      <div className={contentClass} style={{ willChange: phase !== 'idle' ? 'opacity, transform, filter' : 'auto' }}>
        {displayedChildren}
      </div>
    </TransitionContext.Provider>
  )
}

export default PageTransition
