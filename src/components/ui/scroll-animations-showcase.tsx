'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// OPTION 1: 3D Container Scroll (Like Aceternity)
export function ContainerScroll3D({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="h-[150vh] flex items-center justify-center">
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          perspective: "1200px",
          transformStyle: "preserve-3d"
        }}
        className="w-full max-w-5xl"
      >
        {children}
      </motion.div>
    </div>
  )
}

// OPTION 2: Letter by Letter Reveal
export function LetterReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const letters = text.split('')

  return (
    <div ref={ref} className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: 90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{
            display: 'inline-block',
            transformStyle: 'preserve-3d'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  )
}

// OPTION 3: Parallax Layers (Multi-depth)
export function ParallaxLayers({ children }: { children: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={containerRef} className="relative">
      {children.map((child, index) => {
        const speed = (index + 1) * 0.2
        const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

        return (
          <motion.div
            key={index}
            style={{ y }}
            className="relative"
          >
            {child}
          </motion.div>
        )
      })}
    </div>
  )
}

// OPTION 4: Clip Path Text Reveal
export function ClipPathReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    ]
  )

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ clipPath }} className={className}>
        {children}
      </motion.div>
    </div>
  )
}

// OPTION 5: Sticky Scroll with Progress Reveal
export function StickyScrollReveal({
  title,
  items
}: {
  title: string
  items: { heading: string; content: string }[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * items.length)
      setActiveIndex(Math.min(index, items.length - 1))
    })
  }, [scrollYProgress, items.length])

  return (
    <div ref={containerRef} style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold mb-12">{title}</h2>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.2,
                scale: activeIndex === index ? 1 : 0.95
              }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-3xl font-semibold mb-4">{item.heading}</h3>
              <p className="text-xl text-gray-600">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// OPTION 6: Blur + Scale Entrance
export function BlurScaleReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.5,
        filter: "blur(20px)"
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)"
      } : {}}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

// OPTION 7: Magnetic Scroll (Follows cursor during scroll)
export function MagneticScroll({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        animate={isInView ? { x: mousePosition.x, y: mousePosition.y } : {}}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// OPTION 8: Wave Text (Each word waves in)
export function WaveText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const words = text.split(' ')

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? {
            opacity: 1,
            y: 0,
          } : {}}
          transition={{
            duration: 0.8,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// OPTION 9: Split Text Reveal (Characters split and slide)
export function SplitTextReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const chars = text.split('')

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <div className="flex flex-wrap">
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -50 : 50,
              rotateZ: i % 2 === 0 ? -45 : 45
            }}
            animate={isInView ? {
              opacity: 1,
              x: 0,
              rotateZ: 0
            } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.02,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-block"
            style={{ transformOrigin: 'center' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

// OPTION 10: Elastic Bounce Reveal
export function ElasticReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: -180
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        rotate: 0
      } : {}}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // Elastic easing
        scale: {
          type: "spring",
          damping: 8,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// OPTION 11: Gradient Wipe Reveal
export function GradientWipeReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0% 0%", "100% 100%", "200% 200%"]
  )

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{ opacity }}
        className={className}
      >
        <motion.div
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            backgroundPosition,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

// OPTION 12: Typewriter Effect on Scroll
export function TypewriterReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    if (!isInView) return

    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isInView, text])

  return (
    <div ref={ref} className={className}>
      {displayedText}
      {isInView && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[3px] h-[1em] bg-current ml-1"
        />
      )}
    </div>
  )
}

// OPTION 13: 3D Flip Cards on Scroll
export function FlipReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        rotateY: 90,
        z: -100
      }}
      animate={isInView ? {
        opacity: 1,
        rotateY: 0,
        z: 0
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  )
}

// OPTION 14: Spotlight Reveal (Text appears in spotlight)
export function SpotlightTextReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={isInView ? {
          clipPath: 'circle(150% at 50% 50%)'
        } : {}}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="relative"
      >
        {text}
      </motion.div>
    </div>
  )
}

// OPTION 15: Glitch Reveal Effect
export function GlitchReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? {
          opacity: 1,
          x: [0, -5, 5, -5, 5, 0],
          filter: [
            'blur(0px)',
            'blur(2px) hue-rotate(90deg)',
            'blur(0px)',
          ]
        } : {}}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}

// OPTION 16: Scroll Progress Bar with Content
export function ProgressReveal({
  title,
  items
}: {
  title: string;
  items: Array<{ title: string; description: string }>
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * items.length),
        items.length - 1
      )
      setCurrentIndex(index)
    })
  }, [scrollYProgress, items.length])

  return (
    <div ref={containerRef} style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-5xl mx-auto w-full px-6">
          {/* Progress bar */}
          <motion.div
            className="h-2 bg-gray-200 rounded-full mb-12 overflow-hidden"
          >
            <motion.div
              className="h-full bg-black"
              style={{
                scaleX: scrollYProgress,
                transformOrigin: 'left'
              }}
            />
          </motion.div>

          <h2 className="text-5xl font-bold mb-16">{title}</h2>

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index <= currentIndex ? 1 : 0.3,
                  x: index <= currentIndex ? 0 : -20,
                  scale: index === currentIndex ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-2xl ${
                  index === currentIndex
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
