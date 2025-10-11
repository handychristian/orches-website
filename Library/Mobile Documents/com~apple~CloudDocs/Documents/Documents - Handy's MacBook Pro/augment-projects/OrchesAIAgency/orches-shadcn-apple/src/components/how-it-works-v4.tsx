'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { MessageSquare, Cog, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'We Listen',
    headline: 'Discovery Call',
    description: '30 menit call untuk understand tools yang Anda pakai & workflow yang repetitive.',
    details: [
      'Gratis, no pressure',
      'Analisa proses bisnis',
      'Estimasi waktu & biaya',
      'Identify integration points'
    ],
    color: 'from-blue-600 to-blue-700'
  },
  {
    number: '02',
    icon: Cog,
    title: 'We Connect Everything',
    headline: 'Build Integration',
    description: 'Build automation flow yang connect WhatsApp → Database → Accounting → Notification.',
    details: [
      'Design automation flow',
      'Connect all your tools',
      'Build approval workflows',
      'Testing sampai perfect'
    ],
    color: 'from-purple-600 to-purple-700'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'You Own It',
    headline: 'Deploy & Done',
    description: 'Deploy automation, langsung hemat waktu. Support berkelanjutan.',
    details: [
      'Training team Anda (1 jam)',
      'Monitor performance',
      'Ongoing support 30 hari',
      'Sistem milik Anda selamanya'
    ],
    color: 'from-green-600 to-green-700'
  }
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 1, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.8, 1, 1, 1, 0.8])

  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="min-h-[80vh] flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Number & Icon */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <div className="text-[120px] font-bold text-black leading-none mb-4">
                {step.number}
              </div>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color}`}>
                <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Eyebrow */}
              <div className="text-[13px] font-semibold text-[#86868B] tracking-wider mb-3">
                STEP {step.number}
              </div>

              {/* Headline */}
              <h3 className="text-[48px] sm:text-[56px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
                {step.headline}
              </h3>

              {/* Title */}
              <p className="text-[24px] text-[#1D1D1F] font-semibold mb-6">
                {step.title}
              </p>

              {/* Description */}
              <p className="text-[19px] text-[#86868B] mb-8 max-w-2xl leading-relaxed">
                {step.description}
              </p>

              {/* Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {step.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-[15px] text-black">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function HowItWorksV4() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Simple. Connected. Powerful.
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[21px] text-[#1D1D1F] max-w-3xl mx-auto font-normal leading-[1.4]">
              Bukan template. 100% custom-built untuk workflow spesifik bisnis Anda.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-[17px] text-[#86868B] max-w-2xl mx-auto mt-4">
              Sistem automation jadi milik Anda selamanya. No recurring fees to us.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps with Scroll Animation */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Timeline Visual */}
        <ScrollReveal delay={0.2} className="mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h4 className="text-[28px] font-semibold text-black mb-2">
                From Chaos to Connected
              </h4>
              <p className="text-[17px] text-[#86868B]">
                Dalam 2-3 minggu
              </p>
            </div>

            {/* Timeline Bar */}
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2"></div>
              <div className="relative grid grid-cols-3 gap-4">
                {steps.map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-semibold text-[17px] mb-3">
                      {idx + 1}
                    </div>
                    <p className="text-[15px] text-black font-medium">
                      {step.headline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-24">
          <div className="bg-[#F5F5F7] rounded-3xl px-8 py-12 max-w-3xl mx-auto">
            <h3 className="text-[32px] font-semibold text-black mb-3">
              Siap untuk mulai?
            </h3>
            <p className="text-[17px] text-[#86868B] mb-8 max-w-xl mx-auto leading-relaxed">
              Book discovery call sekarang. 30 menit untuk cari tahu tools apa yang bisa diconnect & berapa banyak waktu yang bisa Anda hemat.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-8 py-4 rounded-full font-semibold text-[17px] transition-colors shadow-sm hover:shadow-md"
            >
              Book Discovery Call
            </motion.button>
            <p className="text-[13px] text-[#86868B] mt-5">
              Gratis • No pressure • Honest conversation
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
