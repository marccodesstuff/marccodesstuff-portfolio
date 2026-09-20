import { createContext, useContext } from 'react'

export interface TransitionContextValue {
  navigateWithTransition: (to: string) => void
  isTransitioning: boolean
}

export const TransitionContext = createContext<TransitionContextValue>({
  navigateWithTransition: () => {},
  isTransitioning: false,
})

export const usePageTransition = () => useContext(TransitionContext)
