import { useState, useEffect, useCallback } from 'react';

/**
 * SystemLog - Live User Action Tracker
 * 
 * Persistent sidebar/footer that logs all user interactions:
 * - CLICK_EVENT: button clicks, module hovers
 * - NAVIGATION: page changes
 * - UI_STATE: interaction state changes
 * 
 * Makes the site feel like it's running on proprietary OS.
 */

interface LogEntry {
  id: string;
  timestamp: string;
  event: string;
  details: string;
}

interface SystemLogProps {
  enabled?: boolean;
  maxEntries?: number;
  showTimestamps?: boolean;
}

const SystemLog = ({ 
  enabled = true, 
  maxEntries = 50,
  showTimestamps = false 
}: SystemLogProps) => {
  
  // Track log entries
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  
  // Track user interactions via event listeners
  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Extract class names and IDs for logging
      const targetClasses = target.classList.length ? 
        Array.from(target.classList).filter(c => !c.startsWith('react-')).join('.') : '';
      
      const id = target.id || 'unknown';
      
      addLogEntry(`CLICK_EVENT`, `target=${id}${targetClasses ? ', classes=' + targetClasses.slice(0, 30) : ''}`);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Log hover events for modules
      const target = e.target as HTMLElement;
      
      if (target.classList.contains('te-module')) {
        addLogEntry(`HOVER_EVENT`, `module_id=${target.id || 'unknown'}`);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        addLogEntry(`KEYBOARD_NAV`, `tab_key=TRUE, focused=${document.activeElement?.tagName || ''}`);
      }
    };

    // Add global listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [enabled, maxEntries]);

  // Add entry to log
  const addLogEntry = useCallback((event: string, details: string) => {
    const id = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    const newEntry: LogEntry = {
      id,
      timestamp: new Date().toISOString(),
      event,
      details
    };

    setLogEntries(prev => {
      const updated = [newEntry, ...prev].slice(0, maxEntries);
      
      // Scroll to bottom of log when new entry added
      if (enabled) {
        const logContainer = document.getElementById('system-log-container');
        if (logContainer) {
          setTimeout(() => {
            logContainer.scrollTop = logContainer.scrollHeight;
          }, 0);
        }
      }
      
      return updated;
    });

  }, [maxEntries, enabled]);

  // Format timestamp for display
  const formatTimestamp = (isoString: string) => {
    if (!showTimestamps) return '';
    
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    
    if (diffSeconds < 60) {
      return `${diffSeconds}s`;
    } else if (diffSeconds < 3600) {
      return `${Math.floor(diffSeconds / 60)}m`;
    } else {
      return date.toLocaleTimeString();
    }
  };

  // Group entries by type for cleaner display
  const groupedLogs = logEntries.reduce((acc, entry) => {
    if (!acc[entry.event]) {
      acc[entry.event] = [];
    }
    acc[entry.event].push(entry);
    return acc;
  }, {} as Record<string, LogEntry[]>);

  // Render log entries
  const renderLogEntries = () => {
    if (!logEntries.length) {
      return (
        <div className="py-8 text-center opacity-50">
          <span className="te-label">// SYSTEM_LOG_EMPTY</span>
          <p className="text-sm mt-2 text-te-muted">
            User interactions will appear here...
          </p>
        </div>
      );
    }

    return Object.entries(groupedLogs).map(([eventType, entries]) => (
      <div key={eventType} className="border-t border-white/5 my-2">
        <h4 className="text-xs font-bold text-te-muted uppercase tracking-wider mb-2 px-2">
          {eventType.replace(/_/g, ' ')}
        </h4>
        <div id="system-log-container" className="font-mono text-[10px] max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-te-muted scrollbar-track-transparent">
          {entries.map((entry) => (
            <div key={entry.id} className="py-0.5 border-b border-white/2 last:border-0">
              <span className="text-te-accent mr-2">[{formatTimestamp(entry.timestamp)}]</span>
              <span className="font-bold text-te-fg">{entry.event}</span>
              <span className="text-te-muted ml-2">{entry.details}</span>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <>
      {/* Invisible log area for auto-scroll */}
      {enabled && <div id="system-log-container" />}
      
      {/* Visible footer bar */}
      <footer className="fixed bottom-0 left-0 right-0 border-t-2 border-white/10 bg-black/80 backdrop-blur-sm z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-3">
          <div className="flex items-start justify-between gap-4">
            
            {/* LEFT: Status indicators */}
            <div className="flex items-center gap-4 min-w-[200px]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="te-label">SYSTEM_LIVE</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[1, 2, 3].map(i => (
                  <span 
                    key={i}
                    className={`w-1.5 h-1.5 rounded-sm ${
                      i === 1 ? 'bg-orange-500 animate-pulse' : 
                      i === 2 ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CENTER: Scrollable log entries */}
            <div className="flex-1 max-w-lg hidden lg:block">
              {renderLogEntries()}
            </div>

            {/* RIGHT: Clear button */}
            <button
              onClick={() => {
                window.tactileFeedback?.playClickSound?.();
                setLogEntries([]);
              }}
              className="te-button text-[9px] py-1 px-2 opacity-60 hover:opacity-100"
            >
              CLEAR_LOG
            </button>

          </div>
          
          {/* Bottom status bar */}
          <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-te-muted">
            <span>MEMORY_ALLOCATED: {logEntries.length} EVENTS</span>
            <span className="font-mono">SYS_VER_04.2 // BUILDTIME:{new Date().toISOString().slice(0, 19).replace('T', 'Z')}</span>
          </div>
        </div>
      </footer>

      {/* Mobile log (toggleable) */}
      <div className="lg:hidden fixed bottom-16 right-4 w-64 z-40">
        <button
          onClick={() => {}} // Could toggle mobile log drawer
          className="te-button text-[8px] py-2 px-3 opacity-50 hover:opacity-100"
        >
          LOG_{logEntries.length}
        </button>
      </div>
    </>
  );
};

export default SystemLog;
export { SystemLog };
