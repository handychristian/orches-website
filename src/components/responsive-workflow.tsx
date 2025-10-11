'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import InteractiveWorkflow from './interactive-workflow'
import MobileWorkflow from './mobile-workflow'

interface ResponsiveWorkflowProps {
  onTimeSaved?: (minutes: number) => void;
}

export default function ResponsiveWorkflow({ onTimeSaved }: ResponsiveWorkflowProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      const isMobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isMobileDevice || isSmallScreen)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    setIsLoaded(true)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Show loading state while detecting device
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="w-full">
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MobileWorkflow onTimeSaved={onTimeSaved} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <InteractiveWorkflow onTimeSaved={onTimeSaved} />
        </motion.div>
      )}
    </div>
  )
}