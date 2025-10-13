'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface PerformanceWrapperProps {
  children: React.ReactNode
  priority?: 'high' | 'medium' | 'low'
  preload?: boolean
}

export default function PerformanceWrapper({
  children,
  priority = 'medium',
  preload = false
}: PerformanceWrapperProps) {
  const [shouldRender, setShouldRender] = useState(priority === 'high')
  const router = useRouter()

  useEffect(() => {
    if (priority === 'high') return

    const timer = setTimeout(() => {
      setShouldRender(true)
    }, priority === 'medium' ? 100 : 300)

    return () => clearTimeout(timer)
  }, [priority])

  useEffect(() => {
    if (preload && 'requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Preload the component during idle time
        setShouldRender(true)
      })
    }
  }, [preload])

  if (!shouldRender) {
    return null
  }

  return <>{children}</>
}