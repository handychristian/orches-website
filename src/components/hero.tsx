'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animations for smooth mouse following
  const springMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  // Transform mouse position to rotation values
  const rotateX = useTransform(springMouseY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(springMouseX, [-0.5, 0.5], [-15, 15])

  // Parallax transforms for different layers
  const translateX1 = useTransform(springMouseX, [-0.5, 0.5], [-20, 20])
  const translateY1 = useTransform(springMouseY, [-0.5, 0.5], [-20, 20])

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5
      const y = (e.clientY / window.innerHeight) - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-16 relative overflow-hidden">
      {/* Notification Bar - Professional */}
      <motion.div
        className="absolute top-16 left-0 right-0 bg-gray-50 border-b border-gray-200 py-3 text-center text-sm text-gray-700 z-20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Free Discovery Call - See if your business processes can be automated.{' '}
        <a href="#" className="text-blue-600 hover:underline font-medium">Schedule now ↗</a>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-5 text-center relative z-10 mt-16"
        style={{
          x: translateX1,
          y: translateY1,
        }}
      >
        {/* Professional Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 30,
            scale: isVisible ? 1 : 0.9
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 1.0
          }}
          className="mb-8"
        >
          <Badge className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 hover:from-blue-100 hover:to-purple-100 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105">
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full mr-3"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            Business Automation Solutions
          </Badge>
        </motion.div>

        {/* Main Headlines - Professional & Direct */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 40
          }}
          transition={{
            duration: 1.5,
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mb-8"
        >
          {/* Product Name - Huge and Bold like Apple */}
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-semibold text-gray-900 tracking-tight leading-none mb-4">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Automate Every
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Repetitive Task
            </motion.span>
          </h1>

          {/* Apple-style Tagline */}
          <motion.p
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Scale Your Business Operations.
          </motion.p>

          {/* Value Proposition */}
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            Save time, reduce costs, multiply efficiency. Every business needs automation for competitive advantage.
          </motion.p>
        </motion.div>

        {/* Professional CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 30
          }}
          transition={{
            duration: 1.2,
            delay: 2.2,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 122, 255, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-base"
            >
              Schedule Discovery Call
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(59, 130, 246, 0.05)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm text-base"
            >
              View Case Studies
            </Button>
          </motion.div>
        </motion.div>

        {/* ROI Indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.8 : 0 }}
          transition={{
            duration: 1.2,
            delay: 2.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {[
            { icon: "⚡", text: "60+ hours saved monthly" },
            { icon: "📈", text: "Scale without hiring" },
            { icon: "🎯", text: "ROI-focused automation" },
            { icon: "🔄", text: "Processes optimized" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.6 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                color: "#16a34a"
              }}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Hero Image with advanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 60,
            scale: isVisible ? 1 : 0.9
          }}
          transition={{
            duration: 1.8,
            delay: 1.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="max-w-5xl mx-auto"
          style={{
            perspective: "1200px",
          }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="relative"
          >
            <motion.img
              src="/assets/hero-automation.png"
              alt="Business Automation Dashboard"
              className="w-full h-auto rounded-2xl shadow-2xl"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.15))",
                willChange: "transform",
              }}
              animate={{
                boxShadow: [
                  "0 30px 60px rgba(0,0,0,0.15)",
                  "0 35px 70px rgba(0,122,255,0.1)",
                  "0 30px 60px rgba(0,0,0,0.15)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            {/* Floating reflection effect */}
            <motion.div
              className="absolute -bottom-20 left-0 right-0 h-20 opacity-30"
              style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)",
                transform: "scaleY(-1)",
                filter: "blur(10px)",
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}