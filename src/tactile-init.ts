// ===========================================
// GLOBALLY AVAILABLE TACTILE WEB UTILITIES
// ===========================================

// Extend Window type to include tactile feedback API
declare global {
  interface Window {
    tactileFeedback: {
      playClickSound(): void;
      animateTactile(target: HTMLElement, config?: Record<string, unknown>): void;
    }
    tactileCanvasElement?: HTMLCanvasElement;
    tactileThree?: {
      camera?: THREE.Camera;
    };
  }

  // Extend Element for blueprint grid utilities
  interface Element {
    onBlueprintEvent(eventType: string, handler: (e: Event) => void): void;
    offBlueprintEvent(eventType: string, handler?: (e: Event) => void): void;
  }
}

// ===========================================
// GLOBALLY AVAILABLE THREE.JS UTILITIES  
// ===========================================

declare global {
  // Three.js is loaded globally for convenience
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const THREE: any
}

import * as THREE from 'three'
import gsap from 'gsap'

// Register GSAP plugins for tactile animations
gsap.registerPlugin()

/**
 * Initialize Three.js canvas with industrial material setup
 */
function initTactileThree() {
  // Tactile utilities setup - global API only
  // (Scene rendering handled by TactileHero component)
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTactileThree)
} else {
  initTactileThree()
}

/**
 * Create tactile feedback handler for click sounds and haptics
 */
// Attach tactileFeedback to window globally for React components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).tactileFeedback = {
  
  /**
   * Simulate click sound via Web Audio API (subtle mechanical thud)
   */
  playClickSound: function() {
    try {
      const audioContext = new window.AudioContext()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      // Subtle mechanical thud - short, low pitch
      oscillator.frequency.setValueAtTime(150, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(40, audioContext.currentTime + 0.1)
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.15)
    } catch {
      // Audio not available or blocked - that's fine
    }
  },

  /**
   * GSAP animation for tactile hover effects
   */
  animateTactile: function(target: HTMLElement, config: Record<string, unknown> = {}) {
    const duration = (config.duration as number) || 0.15
    
    if (target) {
      gsap.fromTo(target, 
        { 
          x: 0, 
          boxShadow: target.style.boxShadow || 'none'
        },
        {
          ...config,
          duration: duration,
          ease: 'power2.out',
          onComplete: () => {
            delete config.onComplete
          }
        }
      );
    }
  }
}

export { initTactileThree }
