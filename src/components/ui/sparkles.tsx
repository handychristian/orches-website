'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, Engine } from '@tsparticles/engine'

interface SparklesCoreProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export function SparklesCore({
  id = 'tsparticles',
  className = '',
  background = 'transparent',
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = '#FFFFFF',
  particleDensity = 1200,
}: SparklesCoreProps) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container) => {
    // Particles loaded
  }

  if (!init) {
    return null
  }

  return (
    <Particles
      id={id}
      className={className}
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: background,
          },
        },
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          move: {
            enable: true,
            speed: speed,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'out',
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: particleDensity,
          },
          opacity: {
            value: { min: 0.1, max: 1 },
            animation: {
              enable: true,
              speed: 1,
              startValue: 'random',
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: minSize, max: maxSize },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

// Subtle Version - untuk Apple-style minimalist
export function SparklesSubtle({ className = '' }: { className?: string }) {
  return (
    <SparklesCore
      id="sparkles-subtle"
      className={className}
      background="transparent"
      minSize={0.2}
      maxSize={0.5}
      speed={0.5}
      particleColor="#86868B" // Apple gray
      particleDensity={150}
    />
  )
}

// Full Sparkle Version - untuk efek lebih dramatis
export function SparklesFull({ className = '' }: { className?: string }) {
  return (
    <SparklesCore
      id="sparkles-full"
      className={className}
      background="transparent"
      minSize={0.4}
      maxSize={1.2}
      speed={1.5}
      particleColor="#FFFFFF"
      particleDensity={1200}
    />
  )
}

// Dark Version with colored sparkles
export function SparklesColored({ className = '' }: { className?: string }) {
  return (
    <SparklesCore
      id="sparkles-colored"
      className={className}
      background="transparent"
      minSize={0.3}
      maxSize={0.8}
      speed={1}
      particleColor="#0071E3" // Apple blue
      particleDensity={500}
    />
  )
}
