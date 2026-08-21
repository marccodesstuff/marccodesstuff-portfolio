import { useEffect, useState } from 'react'

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    // Only enable on devices with hover capability (pointer: fine)
    const matchMedia = window.matchMedia('(pointer: fine)')
    setIsPointer(matchMedia.matches)

    if (!matchMedia.matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

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

