'use client'

import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Kami dengar masalah bisnis Anda dalam konsultasi 30 menit.',
    details: [
      'Gratis, no pressure',
      'Analisa proses bisnis',
      'Estimasi waktu & biaya'
    ]
  },
  {
    number: '02',
    title: 'Custom Build',
    description: 'Kami bangun sistem otomasi sesuai kebutuhan spesifik Anda.',
    details: [
      'Design automation flow',
      'Build & integrate',
      'Testing sampai perfect'
    ]
  },
  {
    number: '03',
    title: 'Deploy & Support',
    description: 'Deploy automation, langsung hemat waktu. Support berkelanjutan.',
    details: [
      'Training team Anda',
      'Monitor performance',
      'Ongoing support'
    ]
  }
]

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Bagaimana Kami Bekerja
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[21px] text-[#1D1D1F] max-w-3xl mx-auto font-normal">
              Bukan template. 100% custom-built untuk workflow spesifik bisnis Anda.
              <span className="block mt-3 text-[17px] text-[#86868B]">
                Sistem automation jadi milik Anda selamanya. No recurring fees.
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Steps - Clean Linear Layout */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction="up">
              <div className="border-b border-gray-200 pb-12 last:border-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <div className="text-[72px] font-semibold text-black leading-none">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    {/* Title */}
                    <h3 className="text-[32px] font-semibold text-black mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[19px] text-[#86868B] mb-6 max-w-2xl">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <span className="text-[15px] text-black">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA - Tighter Spacing */}
        <ScrollReveal delay={0.6} className="text-center mt-24">
          <div className="bg-[#F5F5F7] rounded-2xl px-8 py-10 max-w-3xl mx-auto">
            <h3 className="text-[28px] font-semibold text-black mb-3">
              Siap untuk mulai?
            </h3>
            <p className="text-[17px] text-[#86868B] mb-7 max-w-xl mx-auto leading-relaxed">
              Book discovery call sekarang. 30 menit untuk cari tahu berapa banyak waktu yang bisa Anda hemat.
            </p>
            <button className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-7 py-3 rounded-full font-normal text-[17px] transition-colors hover:scale-105">
              Book Discovery Call
            </button>
            <p className="text-[13px] text-[#86868B] mt-5">
              Gratis • No pressure • Honest conversation
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}