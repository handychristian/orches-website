'use client'

import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { X, Check, ArrowDown } from 'lucide-react'

const comparison = [
  {
    feature: 'Auto-reply chat',
    chatbot: true,
    integrated: true
  },
  {
    feature: 'Generate invoice otomatis',
    chatbot: false,
    integrated: true
  },
  {
    feature: 'Workflow approval built-in',
    chatbot: false,
    integrated: true
  },
  {
    feature: 'Auto-sync to accounting',
    chatbot: false,
    integrated: true
  },
  {
    feature: 'Auto-send confirmation email',
    chatbot: false,
    integrated: true
  },
  {
    feature: 'Real-time dashboard & reports',
    chatbot: false,
    integrated: true
  }
]

const flowSteps = [
  'Customer order via WA',
  'Chatbot confirm & capture details',
  'Auto-create invoice (PDF)',
  'Send to owner for approval (WA notification)',
  '[Owner approve via 1-click WA reply]',
  'Auto-update inventory (Google Sheet)',
  'Auto-record to accounting (Accurate)',
  'Auto-send invoice + payment link to customer',
  'When paid: Auto-send receipt & thank you'
]

export default function WhyIntegrated() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Chatbot Alone Can't Do This.
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[21px] text-[#1D1D1F] max-w-3xl mx-auto font-normal leading-[1.4]">
              Di market sudah banyak chatbot. Tapi chatbot cuma solve 1 masalah: <span className="font-semibold text-black">reply chat</span>.
            </p>
            <p className="text-[19px] text-[#86868B] max-w-3xl mx-auto mt-4">
              Bisnis Anda butuh lebih dari itu. Butuh <span className="font-semibold text-black">full integration</span> antar semua tools.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison Table */}
        <ScrollReveal delay={0.4}>
          <div className="bg-[#F5F5F7] rounded-3xl overflow-hidden shadow-sm mb-20">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
              {/* Feature Column */}
              <div className="p-8">
                <div className="h-16 flex items-center mb-6">
                  <h4 className="text-[17px] font-semibold text-[#86868B]">
                    Fitur
                  </h4>
                </div>
                <div className="space-y-4">
                  {comparison.map((item, idx) => (
                    <div key={idx} className="h-12 flex items-center">
                      <span className="text-[15px] text-black">
                        {item.feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Just Chatbot Column */}
              <div className="p-8 bg-white/50">
                <div className="h-16 flex flex-col justify-center mb-6">
                  <h4 className="text-[19px] font-semibold text-black">
                    Just Chatbot
                  </h4>
                  <span className="text-[13px] text-[#86868B] mt-1">
                    Point solution
                  </span>
                </div>
                <div className="space-y-4">
                  {comparison.map((item, idx) => (
                    <div key={idx} className="h-12 flex items-center justify-center">
                      {item.chatbot ? (
                        <Check className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                      ) : (
                        <X className="w-6 h-6 text-red-400" strokeWidth={2.5} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrated Automation Column */}
              <div className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="h-16 flex flex-col justify-center mb-6">
                  <h4 className="text-[19px] font-semibold text-black">
                    Integrated Automation
                  </h4>
                  <span className="text-[13px] text-green-700 mt-1 font-medium">
                    Full solution ✓
                  </span>
                </div>
                <div className="space-y-4">
                  {comparison.map((item, idx) => (
                    <div key={idx} className="h-12 flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Use Case Example */}
        <ScrollReveal delay={0.5}>
          <div className="bg-black rounded-3xl p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-[32px] sm:text-[40px] font-semibold mb-4">
                  Real Example: Customer Order Flow
                </h3>
                <p className="text-[17px] text-gray-400">
                  Lihat bagaimana integrated automation connect semuanya jadi 1 seamless flow
                </p>
              </div>

              {/* Flow Steps */}
              <div className="space-y-1">
                {flowSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Step number/arrow */}
                    <div className="flex-shrink-0 mt-1">
                      {idx < flowSteps.length - 1 ? (
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[13px] font-semibold">
                            {idx + 1}
                          </div>
                          <ArrowDown className="w-4 h-4 text-gray-600 mt-2" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    {/* Step text */}
                    <div className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                      step.includes('[Owner')
                        ? 'bg-blue-900/50 border border-blue-700'
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                      <p className={`text-[15px] ${
                        step.includes('[Owner')
                          ? 'text-blue-200 font-medium'
                          : 'text-gray-300'
                      }`}>
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-12 text-center">
                <div className="inline-block bg-white/10 rounded-2xl px-6 py-4">
                  <p className="text-[15px] text-gray-300 mb-2">
                    <span className="font-semibold text-white">This is what integration means.</span>
                  </p>
                  <p className="text-[13px] text-gray-400">
                    Semua happen otomatis. Zero manual work. Zero human error.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6} className="text-center mt-20">
          <p className="text-[21px] text-[#86868B] mb-8 max-w-2xl mx-auto">
            Bisnis Anda punya workflow lain yang bisa diintegrasikan?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-8 py-4 rounded-full font-semibold text-[17px] transition-colors shadow-sm hover:shadow-md"
          >
            Let's Discuss Your Workflow
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  )
}
