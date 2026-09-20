import { useEffect, useId, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { ProjectEntry } from '../types/project'
import { playClickSound } from '../utils/sound'

type DrawerVariant = 'featured' | 'archive'

const COPY: Record<DrawerVariant, {
  badge: string
  overview: string
  footer: string
  status: string
  timeline: string
  leadTech: string
}> = {
  featured: {
    badge: 'PROJECT SPECIFICATION',
    overview: 'Overview & Impact',
    footer: 'READY FOR REVIEW',
    status: 'Active',
    timeline: 'Recent',
    leadTech: 'Full-Stack',
  },
  archive: {
    badge: 'ARCHIVE SPECIFICATION',
    overview: 'Overview & Details',
    footer: 'ARCHIVED RECORD',
    status: 'Completed',
    timeline: 'Historical',
    leadTech: 'Software',
  },
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

interface ProjectDrawerProps {
  project: ProjectEntry
  variant: DrawerVariant
  onClose: () => void
}

const ProjectDrawer = ({ project, variant, onClose }: ProjectDrawerProps) => {
  const copy = COPY[variant]
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  })

  const close = () => {
    playClickSound()
    onCloseRef.current()
  }

  // Modal behavior: move focus in, trap Tab, close on Escape, lock page scroll,
  // and hand focus back to whatever opened the drawer.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        playClickSound()
        onCloseRef.current()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (!dialogRef.current.contains(active)) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      opener?.focus()
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer animate-[fadeIn_0.15s_ease-out]"
        onClick={close}
      />

      {/* Drawer container */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-xl bg-[#141414] border-l-2 border-[#ff6b1a] h-full px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl animate-[slideInRight_0.2s_ease-out]"
      >
        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-white/10 pb-4">
            <div className="pr-4">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a]">
                {copy.badge}
              </span>
              <h2 id={titleId} className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-white/60 mt-1">{project.tagline}</p>
            </div>

            <button
              ref={closeButtonRef}
              onClick={close}
              className="p-2 border border-white/10 hover:border-[#ff6b1a] hover:text-[#ff6b1a] rounded text-white/60 transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Close panel"
            >
              <X size={18} />
            </button>
          </div>

          {/* Status + period */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/40 border border-white/5 p-3 rounded-sm">
              <span className="text-[11px] font-mono text-white/40 block">STATUS</span>
              <span className="text-sm font-semibold uppercase text-emerald-400">
                {project.status || copy.status}
              </span>
            </div>
            <div className="bg-black/40 border border-white/5 p-3 rounded-sm">
              <span className="text-[11px] font-mono text-white/40 block">TIMELINE</span>
              <span className="text-sm font-semibold text-white">{project.date || copy.timeline}</span>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-2">
              Project Highlights
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-black/30 p-2.5 border border-white/5 rounded-sm">
                <span className="text-white/40 block text-[10px]">CATEGORY</span>
                <span className="font-semibold text-white">{project.tagline}</span>
              </div>
              <div className="bg-black/30 p-2.5 border border-white/5 rounded-sm">
                <span className="text-white/40 block text-[10px]">LEAD TECH</span>
                <span className="font-semibold text-[#ff6b1a]">{project.tech?.[0] || copy.leadTech}</span>
              </div>
            </div>
          </div>

          {/* Detailed description */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-2">
              {copy.overview}
            </h3>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">{project.description}</p>
          </div>

          {/* Tech tags */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.tech.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 text-[#ff6b1a] rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Source / demo links */}
          {project.links && project.links.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-2">
                Source & Links
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#ff6b1a] hover:bg-[#ff7d36] text-white text-xs font-semibold rounded-sm transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom action footer */}
        <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center text-xs font-mono text-white/40 relative z-10 pb-[env(safe-area-inset-bottom)]">
          <span>{copy.footer}</span>

          <button
            onClick={close}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#ff6b1a] text-white text-xs font-semibold rounded-sm transition-all cursor-pointer"
          >
            Close Specification
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDrawer
