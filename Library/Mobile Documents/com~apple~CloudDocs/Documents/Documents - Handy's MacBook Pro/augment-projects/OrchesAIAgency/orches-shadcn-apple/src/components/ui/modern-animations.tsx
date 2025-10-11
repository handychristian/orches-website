'use client'

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// 1. CURSOR ANIMATIONS

export function CursorFloatingTarget({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {children}
      {isHovering && (
        <motion.div
          className="fixed w-8 h-8 rounded-full border-2 border-blue-500 pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
      )}
    </div>
  )
}

export function CursorTrail() {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let id = 0
    const handleMouseMove = (e: MouseEvent) => {
      setTrail(prev => [...prev, { x: e.clientX, y: e.clientY, id: id++ }].slice(-15))
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed w-2 h-2 rounded-full bg-blue-500 pointer-events-none"
          initial={{ x: point.x, y: point.y, opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{ left: 0, top: 0 }}
        />
      ))}
    </>
  )
}

export function MagneticTarget({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  )
}

// 2. TEXT & LOADING ANIMATIONS

export function SplitTextWavy({ text, className = "" }: { text: string; className?: string }) {
  const letters = text.split('')
  return (
    <div className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  )
}

export function SplitTextScatter({ text, isVisible, className = "" }: { text: string; isVisible: boolean; className?: string }) {
  const letters = text.split('')
  return (
    <div className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
          animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.03 }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  )
}

export function LoadingRipple() {
  return (
    <div className="relative w-20 h-20">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-4 border-blue-500 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export function TypewriterNatural({ text, className = "" }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, Math.random() * 100 + 50) // Natural typing speed variation
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <div className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1"
      />
    </div>
  )
}

// 3. MICROINTERACTIONS & CARDS

export function TiltCardMicro({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      whileHover={{ scale: 1.02 }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  )
}

export function CardStack({ cards }: { cards: Array<{ title: string; content: string }> }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative h-80 w-full">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 cursor-pointer"
          initial={{ scale: 1 - index * 0.05, y: index * 20 }}
          animate={{
            scale: index === activeIndex ? 1 : 1 - (index - activeIndex) * 0.05,
            y: index === activeIndex ? 0 : (index - activeIndex) * 20,
            zIndex: cards.length - Math.abs(index - activeIndex)
          }}
          onClick={() => setActiveIndex(index)}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
          <p className="text-gray-600">{card.content}</p>
        </motion.div>
      ))}
    </div>
  )
}

export function AccordionItem({ title, content, isOpen, onToggle }: {
  title: string
  content: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-600">{content}</p>
      </motion.div>
    </div>
  )
}

// 4. MATERIAL DESIGN EFFECTS

export function MaterialRipple({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setRipples(prev => [...prev, { x, y, id: Date.now() }])
    setTimeout(() => setRipples(prev => prev.slice(1)), 600)
    onClick?.()
  }

  return (
    <div className="relative overflow-hidden cursor-pointer" onClick={handleClick}>
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full"
          initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y }}
          animate={{ width: 500, height: 500, x: ripple.x - 250, y: ripple.y - 250, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </div>
  )
}

export function AppleIntelligenceRipple() {
  return (
    <div className="relative w-32 h-32">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeOut'
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
      </div>
    </div>
  )
}

// 5. TICKER & NUMBER ANIMATIONS

export function InfiniteLoading({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-2xl font-bold text-gray-400">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function NumberCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [target, duration])

  return <span className="text-6xl font-bold">{count}</span>
}
