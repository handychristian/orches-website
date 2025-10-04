'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface TextRevealProps {
  children: string
  delay?: number
  className?: string
  stagger?: boolean
}

export function TextReveal({
  children,
  delay = 0,
  className = '',
  stagger = true
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  if (!stagger) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
        animate={isInView ? {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)'
        } : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  const words = children.split(' ')

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + (index * 0.1),
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode[]
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = ''
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

export function ScaleReveal({
  children,
  delay = 0,
  className = ''
}: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
