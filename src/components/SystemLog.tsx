/* ===========================================
   ENGINEERING STATUS & ACTIVITY BAR
   =========================================== */

import { useState, useEffect } from 'react'
import { Activity, Clock, ShieldCheck, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const SystemLog = () => {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Display time in UTC+8 (Asia/Manila)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' (UTC+8)')
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="te-module px-6 py-6 border-r-0 lg:border-r-2 border-b-2 border-white/5 w-full bg-[#141414]/90" id="system-status">
      {/* Header bar */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Activity size={15} className="text-[#ff6b1a] animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Engineering Status & Activity</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-white/60">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span className="text-emerald-400 font-medium">AVAILABLE FOR WORK</span>
          </span>
        </div>
      </div>

      {/* Grid of status cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Live Location & Time */}
        <div className="bg-black/30 border border-white/5 p-3.5 rounded-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-2">
            <span>LOCAL TIME</span>
            <Clock size={12} className="text-[#ff6b1a]" />
          </div>
          <div>
            <p className="text-sm font-mono font-semibold text-white">{time || '12:00:00 (UTC+8)'}</p>
            <p className="text-xs text-white/50 mt-0.5">Angeles City, Philippines</p>
          </div>
        </div>

        {/* Card 2: Current Focus */}
        <div className="bg-black/30 border border-white/5 p-3.5 rounded-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-2">
            <span>CORE FOCUS</span>
            <ShieldCheck size={12} className="text-[#ff6b1a]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">AI Automation & ML</p>
            <p className="text-xs text-white/50 mt-0.5">Agentic Workflows • SPC Analytics</p>
          </div>
        </div>

        {/* Card 3: Project Portfolio */}
        <div className="bg-black/30 border border-white/5 p-3.5 rounded-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-2">
            <span>PORTFOLIO</span>
            <span className="text-[#ff6b1a] font-mono text-[10px]">10+ REPOS</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Production & Research</p>
            <p className="text-xs text-white/50 mt-0.5">Medical AI • Full-Stack • Compliance</p>
          </div>
        </div>

        {/* Card 4: Quick Contact */}
        <div className="bg-black/30 border border-white/5 p-3.5 rounded-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-2">
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={12} className="text-[#ff6b1a]" />
          </div>
          <div className="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/marccodesstuff"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white/5 hover:bg-[#ff6b1a]/20 border border-white/10 hover:border-[#ff6b1a] rounded text-white/70 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com/in/mrcvctr-vel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white/5 hover:bg-[#ff6b1a]/20 border border-white/10 hover:border-[#ff6b1a] rounded text-white/70 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:velasquezmarcvictor@gmail.com"
              className="p-1.5 bg-white/5 hover:bg-[#ff6b1a]/20 border border-white/10 hover:border-[#ff6b1a] rounded text-white/70 hover:text-white transition-colors"
              title="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright & Sub-bar */}
      <div className="mt-5 pt-3.5 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-white/40">
        <span>DESIGNED & ENGINEERED BY MARC VICTOR VELASQUEZ</span>
        <span>© 2026 • ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  )
}

export default SystemLog

