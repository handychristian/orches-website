'use client'

import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { MessageSquare, Cog, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    subtitle: 'We Listen',
    description: '30 menit call untuk understand tools yang Anda pakai & workflow yang repetitive.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    number: '02',
    icon: Cog,
    title: 'Build Integration',
    subtitle: 'We Connect Everything',
    description: 'Build automation flow yang connect semua tools Anda jadi 1 seamless workflow.',
    color: 'from-purple-600 to-purple-700'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy & Done',
    subtitle: 'You Own It',
    description: 'Training 1 jam. Automation jalan. Sistem milik Anda selamanya.',
    color: 'from-green-600 to-green-700'
  }
]

export default function HowItWorksCompact() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white" style={{ overflow: 'visible', height: 'auto' }}>
      <div className="max-w-6xl mx-auto" style={{ overflow: 'visible', height: 'auto' }}>
        {/* Section Header with Friction Removal */}
        <div className="text-center mb-16">
          <TextReveal className="text-[40px] sm:text-[48px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
            Sederhana. Terhubung. Powerful.
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[17px] text-[#86868B] max-w-2xl mx-auto mb-6">
              100% dibuat khusus untuk workflow bisnis Anda. Sistem jadi milik Anda selamanya.
            </p>
          </ScrollReveal>

          {/* Friction Removal Badge */}
          <ScrollReveal delay={0.4}>
            <div className="inline-flex items-center gap-6 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full">
              <span className="text-[14px] font-medium text-blue-900">✓ Tanpa coding</span>
              <span className="text-blue-300">|</span>
              <span className="text-[14px] font-medium text-blue-900">✓ Kami yang handle semua</span>
              <span className="text-blue-300">|</span>
              <span className="text-[14px] font-medium text-blue-900">✓ Pakai tools Anda yang sekarang</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Steps - Compact Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" style={{ overflow: 'visible', height: 'auto' }}>
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <div className="text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Eyebrow */}
                  <div className="text-[11px] font-semibold text-[#86868B] tracking-wider mb-2">
                    STEP {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] font-semibold text-black mb-2">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[17px] text-[#1D1D1F] font-medium mb-3">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] text-[#86868B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>


        {/* Bottom CTA - Compact */}
        <ScrollReveal delay={0.5} className="text-center mt-16">
          <p className="text-[17px] text-[#86868B] mb-6 max-w-xl mx-auto">
            Siap mulai? Book discovery call untuk cari tahu berapa banyak waktu yang bisa Anda hemat.
          </p>
          <motion.a
            href="https://wa.me/6285161912446"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#0071E3] hover:bg-[#0051D5] text-white px-7 py-3 rounded-full font-semibold text-[15px] transition-colors shadow-sm hover:shadow-md"
          >
            Book Discovery Call
          </motion.a>
          <p className="text-[13px] text-[#86868B] mt-4">
            Gratis • No pressure • 30 menit
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
