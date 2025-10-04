'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// 1. MESH GRADIENT - Like Apple uses
export function MeshGradient({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(156, 163, 175, 0.4) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(191, 219, 254, 0.35) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(229, 231, 235, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(243, 244, 246, 0.35) 0px, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

// 2. FLOATING ORBS - Large, subtle, blurred circles
export function FloatingOrbs({ className = '' }: { className?: string }) {
  const orbs = [
    { size: 600, delay: 0, color: 'rgba(156, 163, 175, 0.25)', duration: 25 },
    { size: 500, delay: 5, color: 'rgba(191, 219, 254, 0.2)', duration: 30 },
    { size: 550, delay: 10, color: 'rgba(229, 231, 235, 0.3)', duration: 28 },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            filter: 'blur(80px)',
          }}
          animate={{
            x: ['-20%', '120%'],
            y: ['120%', '-20%'],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// 3. AURORA GRADIENT - Smooth wave gradient like northern lights
export function AuroraGradient({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(125deg,
              rgba(156, 163, 175, 0.5) 0%,
              rgba(191, 219, 254, 0.4) 25%,
              rgba(229, 231, 235, 0.45) 50%,
              rgba(209, 213, 219, 0.4) 75%,
              rgba(156, 163, 175, 0.5) 100%
            )
          `,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

// 4. SUBTLE GRID - Animated grid lines
export function SubtleGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

// 5. NOISE GRAIN - Subtle animated grain texture
export function NoiseGrain({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

// 6. SUBTLE WAVES - Gentle wave pattern
export function SubtleWaves({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% ${50 + i * 10}%, rgba(156, 163, 175, 0.25) 0%, transparent 60%)`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12 + i * 2,
            delay: i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// 7. MINIMAL DOTS - Fewer, larger dots than sparkles
export function MinimalDots({ className = '' }: { className?: string }) {
  const [dots, setDots] = useState<Array<{ x: number; y: number; size: number; delay: number; duration: number }>>([])

  useEffect(() => {
    // Generate dots on client-side only to avoid hydration mismatch
    setDots(
      Array.from({ length: 15 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
      }))
    )
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gray-400/50"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// 8. GLOW SPOTS - Large soft glow spots
export function GlowSpots({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(156, 163, 175, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [-100, 1200],
          y: [600, -100],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(191, 219, 254, 0.35) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [1200, -100],
          y: [-100, 600],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
