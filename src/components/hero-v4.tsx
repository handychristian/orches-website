'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useTransform, useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Spotlight, SpotlightCursor } from '@/components/ui/spotlight'
import { NoiseGrain } from '@/components/ui/clean-backgrounds'

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 1500, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-[40px] font-semibold text-black mb-2">
      {count}{suffix}
    </div>
  )
}

export default function HeroV4() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center bg-white pt-32 pb-24 relative overflow-hidden">
      {/* Noise Grain Background */}
      <NoiseGrain className="absolute inset-0" />

      {/* Spotlight Effects */}
      <Spotlight className="top-0 left-0 md:left-60 md:-top-20" />
      <SpotlightCursor />

      <motion.div
        className="max-w-6xl mx-auto px-6 text-center relative z-10"
        style={{ y, opacity }}
      >
        {/* Alert Badge - Pain Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-200 rounded-full mb-8"
        >
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[15px] font-medium text-red-700">
            Bisnis Anda Buang Waktu & Uang Setiap Hari
          </span>
        </motion.div>

        {/* Main Headline - Pain-Focused with Red Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="text-[40px] sm:text-[48px] font-semibold text-black tracking-tight leading-[1.2] mb-2">
            Pekerjaan Repetitif
          </h1>
          <motion.h2
            initial={{ backgroundPosition: '200% center' }}
            animate={{ backgroundPosition: '0% center' }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[64px] sm:text-[80px] lg:text-[96px] font-bold tracking-tight leading-[1] mb-2"
            style={{
              background: 'linear-gradient(90deg, #DC2626 0%, #DC2626 40%, #EF4444 50%, #DC2626 60%, #DC2626 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Membuang 20+ Jam
          </motion.h2>
          <h3 className="text-[40px] sm:text-[48px] font-semibold text-black tracking-tight leading-[1.2]">
            Per Minggu
          </h3>
        </motion.div>

        {/* Emotional Bridge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[21px] sm:text-[24px] text-[#1D1D1F] mb-8 max-w-4xl mx-auto font-normal leading-[1.4]"
        >
          Waktu yang seharusnya bisa Anda pakai untuk <span className="font-semibold text-black">fokus ke strategi bisnis</span>, <span className="font-semibold text-black">keluarga</span>, atau <span className="font-semibold text-black">istirahat</span>.
        </motion.p>

        {/* Subheading - Solution */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[19px] text-[#86868B] mb-16 max-w-4xl mx-auto font-normal leading-[1.5]"
        >
          Kami bangun <span className="font-semibold text-[#1D1D1F]">sistem otomasi custom</span> — Anda tidak perlu mengerti teknis apapun.
        </motion.p>

        {/* Simple Stats with Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          <div className="text-center">
            <Counter value={20} suffix="+ jam" />
            <div className="text-[15px] text-[#1D1D1F] font-medium leading-tight mb-1">Waktu kembali setiap minggu</div>
            <div className="text-[13px] text-[#86868B]">= 80 jam/bulan untuk hal penting</div>
          </div>
          <div className="text-center">
            <Counter value={70} suffix="%" />
            <div className="text-[15px] text-[#1D1D1F] font-medium leading-tight mb-1">Biaya operasional turun</div>
            <div className="text-[13px] text-[#86868B]">Tanpa mengorbankan kualitas</div>
          </div>
          <div className="text-center">
            <Counter value={5} suffix="x" />
            <div className="text-[15px] text-[#1D1D1F] font-medium leading-tight mb-1">Lebih cepat proses</div>
            <div className="text-[13px] text-[#86868B]">Customer happy, Anda santai</div>
          </div>
        </motion.div>

        {/* CTA Buttons - Apple Style with fade in and hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-7 py-3 rounded-full font-normal text-[17px] transition-colors h-12 shadow-sm hover:shadow-md"
              asChild
            >
              <a href="https://wa.me/6285161912446" target="_blank" rel="noopener noreferrer">
                Book Discovery Call
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              variant="ghost"
              className="text-[#0071E3] hover:text-[#0051D5] px-7 py-3 rounded-full font-normal text-[17px] transition-colors h-12"
              onClick={() => {
                const demoSection = document.getElementById('demo')
                demoSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              Try Demo Bot →
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust indicators with Urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-3"
        >
          <p className="text-[13px] text-[#86868B]">
            Free consultation 30 menit • 30-day warranty • Anda tidak perlu mengerti teknis
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[13px] font-medium text-green-700">Hanya 5 slot tersedia bulan ini</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
