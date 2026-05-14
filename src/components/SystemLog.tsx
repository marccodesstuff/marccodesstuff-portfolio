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
    <footer className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-white/10 p-3 z-50" id="system-log">
      {/* System Status Bar */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between mb-2 px-4">
        <div className="flex items-center gap-2 text-[9px] font-mono text-te-muted">
          <Terminal size={10} />
          <span>TACTILE_WEB.EXE</span>
          <span className="text-green-500">●</span>
          <span>ONLINE</span>
        </div>

        <div className="flex items-center gap-4 text-[9px] font-mono text-te-muted">
          <span>FPS: 60</span>
          <span>MEM: OPTIMAL</span>
        </div>

        <div className="text-[9px] font-mono text-orange-500">
          v{import.meta.env?.VITE_APP_VERSION || '0.1.0'}
        </div>
      </div>

      {/* Events Feed */}
      <div className="max-w-[1400px] mx-auto px-4 h-[80px] overflow-hidden flex items-end">
        {events.length === 0 ? (
          <p className="text-[9px] font-mono text-te-muted/50">AWAITING_EVENTS...</p>
        ) : (
          events.map((event) => (
            <div 
              key={event.id}
              className="flex items-center gap-2 mb-1 pr-3 animate-slideInRight"
              style={{ animationDelay: `${events.indexOf(event) * 50}ms` }}
            >
              {/* Event Type Indicator */}
              <span className="text-[7px] font-mono text-te-muted uppercase w-16 truncate">
                {event.type.replace('_', '_')}
              </span>

              {/* Event Timestamp */}
              <span className="text-[8px] font-mono text-te-muted/60 flex items-center gap-1">
                [{formatTimestamp(event.timestamp)}]
              </span>

              {/* Event Message */}
              <span className={`text-[9px] font-mono truncate flex-1 ${
                event.type === 'CLICK_EVENT' ? 'text-orange-500' :
                event.type === 'UI_STATE' ? 'text-te-muted' : 'text-green-500'
              }`}>
                {event.event}
              </span>

              {/* Event Details (if any) */}
              {event.detail && (
                <span className="text-[8px] font-mono text-white/30 truncate" title={event.detail}>
                  {event.detail}
                </span>
              )}
            </div>
          ))
        )}
      </div>

      {/* System Status Indicators */}
      <div className="max-w-[1400px] mx-auto px-4 pt-2 flex items-center justify-between text-[7px] font-mono text-te-muted/50 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span>MEM: ONLINE</span>
          <span>NET: STABLE</span>
          <span>DNS: RESOLVED</span>
        </div>

        <div className="flex items-center gap-4">
          <span>LAT: 34.0522° N</span>
          <span>LON: -118.2437° W</span>
          <span>TIMEZONE: PST</span>
        </div>
      </div>

      {/* Easter egg footer */}
      <div className="max-w-[1400px] mx-auto px-4 text-center pt-2">
        <p className="text-[7px] font-mono text-te-muted/30 uppercase tracking-wider">
          © 2026 MARC VELASQUEZ // TACTILE_WEB.EXE
        </p>
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
