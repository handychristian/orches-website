'use client'

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { MessageSquare, FileSpreadsheet, UserX, Package, DollarSign, Clock } from 'lucide-react'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const [isHovering, setIsHovering] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors"
    >
      {/* Glow effect */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 113, 227, 0.1) 0%, transparent 70%)',
          }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  )
}

const painPoints = [
  {
    icon: MessageSquare,
    title: 'Reply Ratusan Pesan',
    before: 'Manual reply 3-4 jam setiap hari',
    after: 'Bot otomatis jawab 24/7',
    timeSaved: '20 jam/minggu',
    emphasis: true
  },
  {
    icon: FileSpreadsheet,
    title: 'Input Data Manual',
    before: 'Copy-paste data setiap hari',
    after: 'Auto-sync ke sistem',
    timeSaved: '15 jam/minggu',
    emphasis: false
  },
  {
    icon: DollarSign,
    title: 'Laporan Keuangan',
    before: 'Hitung manual di Excel',
    after: 'Laporan otomatis harian',
    timeSaved: '8 jam/minggu',
    emphasis: false
  }
]

export default function PainPoints() {
  return (
    <section className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Benefit-Driven */}
        <div className="text-center mb-20">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Stop Buang Waktu untuk Pekerjaan Ini
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[21px] text-[#1D1D1F] max-w-3xl mx-auto font-normal">
              Sistem otomasi custom kami handle semua repetitive task.
              <span className="block mt-2 text-[19px] text-[#86868B]">
                Fokus ke hal yang actually grow bisnis Anda.
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Pain Points Grid - Borderless Apple Style with Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            const isEmphasis = point.emphasis

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`
                  bg-white rounded-3xl p-8 lg:p-10
                  ${isEmphasis ? 'lg:col-span-3 lg:py-12' : ''}
                  shadow-sm hover:shadow-lg transition-shadow
                `}
              >
                <div className={isEmphasis ? 'max-w-3xl mx-auto text-center' : ''}>
                  {/* Icon */}
                  <div className={`mb-6 ${isEmphasis ? 'flex justify-center' : ''}`}>
                    <Icon className={`${isEmphasis ? 'w-14 h-14' : 'w-10 h-10'} text-black`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className={`font-semibold text-black mb-6 ${isEmphasis ? 'text-[32px] lg:text-[40px]' : 'text-[24px]'}`}>
                    {point.title}
                  </h3>

                  {/* Before/After - Grid for emphasis, vertical for others */}
                  <div className={`mb-6 ${isEmphasis ? 'grid md:grid-cols-2 gap-8' : 'space-y-5'}`}>
                    <div>
                      <div className="text-[11px] font-semibold text-[#86868B] tracking-wider mb-2">SEKARANG</div>
                      <div className={`text-black ${isEmphasis ? 'text-[19px]' : 'text-[15px]'}`}>{point.before}</div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold text-[#86868B] tracking-wider mb-2">DENGAN AUTOMATION</div>
                      <div className={`text-black ${isEmphasis ? 'text-[19px]' : 'text-[15px]'}`}>{point.after}</div>
                    </div>
                  </div>

                  {/* Time Saved - Subtle divider line */}
                  <div className="pt-5 border-t border-gray-200">
                    <span className="text-[13px] text-[#86868B]">Hemat </span>
                    <span className={`font-semibold text-black ${isEmphasis ? 'text-[17px]' : 'text-[15px]'}`}>{point.timeSaved}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA - Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-20"
        >
          <p className="text-[21px] text-[#86868B] mb-8">
            Punya masalah lain? Kami bisa bantu otomatisasi.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-7 py-3 rounded-full font-normal text-[17px] transition-colors shadow-sm hover:shadow-md"
          >
            Diskusi Gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}