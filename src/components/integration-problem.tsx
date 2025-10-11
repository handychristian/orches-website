'use client'

import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  {
    title: 'Manual Data Entry Everywhere',
    before: [
      'Order masuk WA',
      'Copy ke Excel',
      'Copy ke Accurate',
      'Manual email customer'
    ],
    after: [
      'Order masuk WA',
      'Auto-update database',
      'Auto-sync accounting',
      'Auto-send confirmation'
    ],
    timeWasted: '45 menit per order',
    timeSaved: '2 menit per order',
    risk: 'Prone to typo & missing data'
  },
  {
    title: 'No Approval Workflow',
    before: [
      'Discount request',
      'Screenshot chat',
      'WA ke owner',
      'Wait for reply',
      'Manual update system'
    ],
    after: [
      'Discount request',
      'Auto-notification to owner',
      'Approve via 1-click WA',
      'Auto-apply & notify customer'
    ],
    timeWasted: '15-30 menit delay',
    timeSaved: 'Real-time approval',
    risk: 'Slow response, missed opportunities'
  },
  {
    title: 'Reporting Takes Hours',
    before: [
      'Export dari 3+ systems',
      'Combine manual di Excel',
      'Format & calculate',
      'Send via email'
    ],
    after: [
      'Request laporan via WA',
      'Auto-generate dari database',
      'Auto-formatted dashboard',
      'Delivered instantly'
    ],
    timeWasted: '3-4 jam setiap hari',
    timeSaved: '5 menit on-demand',
    risk: 'Always outdated, time-consuming'
  }
]

export default function IntegrationProblem() {
  return (
    <section className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Masalahnya Bukan Cuma Manual Work.
          </TextReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[24px] text-[#1D1D1F] font-semibold max-w-4xl mx-auto leading-[1.3] mb-4">
              Masalahnya adalah Manual Switching Antar 5+ Tools Setiap Hari.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[19px] text-[#86868B] max-w-3xl mx-auto font-normal">
              WhatsApp → Excel → Accounting → Email → Back to WhatsApp.
              <span className="block mt-2">
                Data scattered. Prone to error. Butuh re-input berkali-kali.
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Problems Grid */}
        <div className="space-y-12">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction="up">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="p-8 lg:p-12">
                  {/* Title */}
                  <h3 className="text-[32px] font-semibold text-black mb-8">
                    {problem.title}
                  </h3>

                  {/* Before/After Comparison */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Before - Red tone */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span className="text-[13px] font-semibold text-red-600 tracking-wider">
                          SEKARANG (Manual)
                        </span>
                      </div>
                      <div className="space-y-3">
                        {problem.before.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                              <span className="text-[11px] font-bold text-red-600">{idx + 1}</span>
                            </div>
                            <p className="text-[15px] text-[#1D1D1F] leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-red-200">
                        <p className="text-[13px] text-[#86868B] mb-1">Time wasted</p>
                        <p className="text-[17px] font-semibold text-red-600">{problem.timeWasted}</p>
                        <p className="text-[13px] text-red-600 mt-2">{problem.risk}</p>
                      </div>
                    </div>

                    {/* Arrow Divider */}
                    <div className="hidden md:flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-[#0071E3]" strokeWidth={2} />
                    </div>

                    {/* After - Green tone */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-[13px] font-semibold text-green-600 tracking-wider">
                          DENGAN INTEGRATED AUTOMATION
                        </span>
                      </div>
                      <div className="space-y-3">
                        {problem.after.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                            </div>
                            <p className="text-[15px] text-[#1D1D1F] leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-green-200">
                        <p className="text-[13px] text-[#86868B] mb-1">Time saved to</p>
                        <p className="text-[17px] font-semibold text-green-600">{problem.timeSaved}</p>
                        <p className="text-[13px] text-green-600 mt-2">Zero error, always synced</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-xl p-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <span className="text-[15px] text-[#86868B]">Total time saved per week:</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[28px] font-semibold text-black">
                          {index === 0 ? '18+ jam' : index === 1 ? '10+ jam' : '20+ jam'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Summary */}
        <ScrollReveal delay={0.6} className="mt-20 text-center">
          <div className="bg-black rounded-3xl px-8 py-12 max-w-4xl mx-auto text-white">
            <h3 className="text-[32px] font-semibold mb-4">
              From Chaos to Connected
            </h3>
            <p className="text-[19px] text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Integrated automation connect semua tools Anda jadi 1 seamless workflow.
              <span className="block mt-2">
                Bukan cuma hemat waktu. Tapi eliminate human error completely.
              </span>
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold text-[17px] transition-colors"
            >
              Discuss Your Workflow
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
