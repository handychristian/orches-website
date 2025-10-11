'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Spotlight = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 ${className}`}
      style={{
        background: `
          radial-gradient(
            ellipse 80% 50% at 50% 0%,
            rgba(120, 119, 198, 0.15),
            transparent
          )
        `
      }}
      animate={{
        opacity: [0.1, 0.2, 0.1],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

export const SpotlightCursor = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[1] h-96 w-96 rounded-full opacity-0"
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(0, 113, 227, 0.08) 0%,
            transparent 70%
          )
        `,
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
      }}
      animate={{
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    />
  )
}
