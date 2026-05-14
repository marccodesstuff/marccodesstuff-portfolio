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
  const canvas = document.createElement('canvas')
  canvas.id = 'tactile-canvas'
  canvas.style.position = 'absolute'
  canvas.style.top = '-100%'
  canvas.style.opacity = '0'
  document.body.appendChild(canvas)

  // Create scene, camera, renderer
  const threeScene = new THREE.Scene()
  threeScene.background = new THREE.Color(0x0e0e0e)

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  
  // Store canvas element for React Three Fiber later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,no-unexpected-multiline
  (window as any).tactileCanvasElement = canvas
  
  // Animation loop with subtle float effect (Easter egg)
  function animate() {
    requestAnimationFrame(animate)
    const elapsedTime = performance.now() * 0.001
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tactileThree = (window as any).tactileThree
    if (tactileThree?.camera) {
      tactileThree.camera.position.y = Math.sin(elapsedTime) * 0.05
      tactileThree.camera.lookAt(0, 0, 0)
    }
    
    renderer.render(threeScene, tactileThree?.camera)
  }
  animate()
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
const tactileFeedback = {
  
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
      )
    }
  }
}

/**
 * Initialize GSAP timeline for smooth entry animations
 */
const entryTimeline = gsap.timeline()

export const tactileInit = {
  init: function() {
    console.log('TACTILE_WEB.EXE // INITIALIZED', new Date().toISOString())
    
    // Queue entry animations with staggered timing
    entryTimeline.from('.te-module', {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.out'
    })

    entryTimeline.from('h1,h2,h3', {
      x: -50,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
      ease: 'power3.out'
    })
  }
}

// Attach tactileFeedback to window globally for React components
// eslint-disable-next-line @typescript-eslint/no-explicit-any,no-unexpected-multiline
(window as any).tactileFeedback = tactileFeedback

export { tactileFeedback, entryTimeline, initTactileThree }
