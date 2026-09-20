import { useEffect, useState } from 'react'

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })
  // Only enable on devices with hover capability (pointer: fine)
  const [isPointer] = useState(() => window.matchMedia('(pointer: fine)').matches)

  useEffect(() => {
    if (!isPointer) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isPointer])

  if (!isPointer) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-300"
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(255, 107, 26, 0.05), transparent 80%)`,
      }}
    />
  )
}

export default CursorGlow

