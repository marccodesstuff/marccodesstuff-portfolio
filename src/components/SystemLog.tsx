/* ===========================================
   SYSTEM LOG - LIVE EVENT TRACKING FOOTER
   =========================================== */

import { useState, useEffect } from 'react'
import { Terminal } from 'lucide-react'

/**
 * SystemLog - Persistent footer that tracks user actions
 * 
 * Makes the site feel like it's running on a proprietary OS by logging:
 * - CLICK_EVENT: Every interaction (button click, hover)
 * - UI_STATE: Current view mode and component state
 * - NAVIGATION: Page transitions and route changes
 */

interface LogEvent {
  id: string
  timestamp: string
  type: 'CLICK_EVENT' | 'UI_STATE' | 'NAVIGATION'
  event: string
  detail?: string
}

const initialEvent: LogEvent = {
  id: Math.random().toString(36).substring(2, 8).toUpperCase(),
  timestamp: new Date().toISOString(),
  type: 'UI_STATE',
  event: 'INITIALIZATION_COMPLETE',
  detail: 'TACTILE_WEB.EXE is ready'
}

const SystemLog = () => {
  const [events, setEvents] = useState<LogEvent[]>([initialEvent])
  
  // Get event details based on target element
  const getEventDetails = (target: HTMLElement): string => {
    if (target.closest('.te-module')) return 'MODULE_INTERACTION'
    if (target.tagName === 'A') return 'LINK_NAVIGATION'
    if (target.tagName === 'BUTTON') return 'ACTION_TRIGGERED'
    return 'ELEMENT_INTERACTION'
  }

  // Generate consistent IDs for the same event
  const generateId = (): string => {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }
  
  useEffect(() => {
    // Track clicks globally
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      let path = 'UNKNOWN'
      
      // Determine what was clicked
      if (target.closest('a')) {
        path = target.closest('a')?.getAttribute('href') || 'LINK'
      } else if (target.tagName === 'BUTTON') {
        path = 'BUTTON_CLICK'
      } else if (target.closest('[role="button"]')) {
        path = 'ROLE_BUTTON'
      }
      
      const newEvent: LogEvent = {
        id: generateId(),
        timestamp: new Date().toISOString(),
        type: 'CLICK_EVENT',
        event: path,
        detail: getEventDetails(target)
      }
      
      setEvents(prev => [newEvent, ...prev].slice(0, 50)) // Keep last 50
      
      // Auto-dismiss after delay (Easter egg)
      setTimeout(() => {
        setEvents(prev => prev.slice(1))
      }, 8000)
    }

    // Track scrolls
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        const newEvent: LogEvent = {
          id: generateId(),
          timestamp: new Date().toISOString(),
          type: 'UI_STATE',
          event: 'SCROLL_DEEP',
          detail: `Scroll Depth: ${Math.round((window.scrollY / document.body.scrollHeight) * 100)}%`
        }
        setEvents(prev => [newEvent, ...prev].slice(0, 50))
      }
    }

    // Initialize with current state (moved outside for better performance)
    // Already initialized in state

    // Add event listeners
    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer className="te-module p-6 border-r-2 border-b-2 border-white/5 w-full bg-te-bg/10" id="system-log">
      {/* Module Title */}
      <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-orange-500 animate-pulse" />
          <span className="te-label text-xs font-bold text-white tracking-widest">SYSTEM_DIAGNOSTICS_MONITOR.SYS</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-te-muted">
          <span>OP_MODE: REALTIME_TELEMETRY</span>
          <span className="text-green-500 animate-pulse">●</span>
          <span className="text-[10px]">ONLINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Live Ticker Area */}
        <div className="lg:col-span-8 space-y-2">
          <div className="flex items-center justify-between">
            <span className="te-label text-[10px]">LIVE_EVENT_STREAM</span>
            <span className="te-label text-[9px] text-te-muted/40">BUFFER: 50_REC</span>
          </div>
          <div className="flex items-center gap-3 bg-black/45 border border-white/5 px-3 py-2 rounded-sm font-mono text-xs min-h-[36px] w-full shadow-inner">
            <span className="text-[10px] uppercase px-1.5 py-0.2 bg-orange-500/10 border border-orange-500/30 text-orange-500 font-bold shrink-0">
              {events[0]?.type || 'SYSTEM'}
            </span>
            <span className="text-[10px] text-white/30 shrink-0">
              [{events[0] ? formatTimestamp(events[0].timestamp).split('T')[1].slice(0, 8) : ''}]
            </span>
            <span className={`text-xs truncate flex-1 ${
              events[0]?.type === 'CLICK_EVENT' ? 'text-orange-500 font-bold' :
              events[0]?.type === 'NAVIGATION' ? 'text-green-500 font-bold' : 'text-white/80'
            }`}>
              {events[0]?.event || 'AWAITING_SYSTEM_EVENT'}
            </span>
            {events[0]?.detail && (
              <span className="hidden sm:inline text-[10px] text-white/40 truncate">
                // {events[0].detail}
              </span>
            )}
          </div>
        </div>

        {/* Diagnostic Telemetry Panel */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-6">
          <div className="space-y-1">
            <span className="te-label text-[10px] block">HARDWARE_STATUS</span>
            <div className="flex gap-2 text-xs font-mono text-white/70">
              <span>MEM: OPTIMAL</span>
              <span>NET: STABLE</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="te-label text-[10px] block">METRICS_LOG</span>
            <div className="flex gap-2 text-xs font-mono text-white/70">
              <span>DNS: OK</span>
              <span className="text-orange-500">REV_04.2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-te-muted/40">
        <span>DEVICE_CLASS: PORTABLE_DIGITAL_WORKSPACE</span>
        <span>© 2026 MARC VICTOR VELASQUEZ // ALL RIGHTS SECURED</span>
      </div>
    </footer>
  )
}

// Format timestamp for display (YYYY-MM-DD HH:mm:ss.SSS)
const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp)
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}T${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`
}

export default SystemLog

