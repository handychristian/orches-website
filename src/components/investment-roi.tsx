'use client'

import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { Check, TrendingUp, Clock, Zap } from 'lucide-react'

export default function InvestmentROI() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Your Investment
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[21px] text-[#1D1D1F] max-w-3xl mx-auto font-normal leading-[1.4]">
              Built for your business. Priced transparently.
            </p>
            <p className="text-[19px] text-[#86868B] max-w-3xl mx-auto mt-4">
              No hidden fees. No surprises. Sistem jadi milik Anda selamanya.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing & ROI Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Pricing Structure */}
          <ScrollReveal delay={0.4}>
            <div className="bg-[#F5F5F7] rounded-3xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[28px] font-semibold text-black">
                  Pricing Structure
                </h3>
              </div>

              <div className="space-y-6">
                {/* One-time Fee */}
                <div className="pb-6 border-b border-gray-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-[19px] font-semibold text-black mb-1">
                        One-Time Development Fee
                      </h4>
                      <p className="text-[15px] text-[#86868B]">
                        Custom integration build
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-[32px] font-bold text-black mb-1">
                      Starting from Rp 2,000,000
                    </p>
                    <p className="text-[13px] text-[#86868B]">
                      Depends on complexity & number of integrations
                    </p>
                  </div>
                </div>

                {/* Hosting Cost */}
                <div className="pb-6 border-b border-gray-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-[19px] font-semibold text-black mb-1">
                        Hosting Cost
                      </h4>
                      <p className="text-[15px] text-[#86868B]">
                        n8n cloud or self-hosted
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-[28px] font-bold text-black mb-1">
                      ~Rp 300k - 700k<span className="text-[19px] font-normal text-[#86868B]">/bulan</span>
                    </p>
                    <p className="text-[13px] text-[#86868B]">
                      Depends on usage & workflow complexity
                    </p>
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <h4 className="text-[17px] font-semibold text-black mb-4">
                    What's Included
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Custom automation workflow design',
                      'Full integration setup',
                      'Testing & deployment',
                      'Team training (1 jam)',
                      '30 hari warranty & support',
                      'Documentation lengkap'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-[15px] text-[#1D1D1F]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* No Hidden Fees Badge */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-[15px] text-green-800 font-medium">
                    ✓ No subscription to us • System milik Anda selamanya
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ROI Comparison */}
          <ScrollReveal delay={0.5}>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-10 h-full border border-blue-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[28px] font-semibold text-black">
                  ROI Comparison
                </h3>
              </div>

              {/* Hire Staff */}
              <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-red-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[19px] font-semibold text-black">
                    💼 Hire 1 Admin Staff
                  </h4>
                  <span className="text-[13px] text-red-600 font-medium bg-red-100 px-3 py-1 rounded-full">
                    Traditional
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-[#86868B]">Salary per month</span>
                    <span className="font-semibold text-black">Rp 5,000,000</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-[#86868B]">Per year</span>
                    <span className="font-semibold text-black">Rp 60,000,000</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-[#86868B]">+ Benefits, training, etc</span>
                    <span className="font-semibold text-black">~Rp 10,000,000</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-semibold text-[#86868B]">Total Year 1</span>
                    <span className="text-[28px] font-bold text-red-600">Rp 70jt</span>
                  </div>
                </div>
              </div>

              {/* Automation */}
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[19px] font-semibold text-black">
                    🤖 Integrated Automation
                  </h4>
                  <span className="text-[13px] text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">
                    Modern
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-[#86868B]">One-time development</span>
                    <span className="font-semibold text-black">Rp 2,000,000</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-[#86868B]">Hosting per year</span>
                    <span className="font-semibold text-black">Rp 6,000,000</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-[#86868B]">Maintenance (optional)</span>
                    <span className="font-semibold text-black">Rp 0</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-semibold text-[#86868B]">Total Year 1</span>
                    <span className="text-[28px] font-bold text-green-600">Rp 8jt</span>
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div className="mt-8 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6" />
                  <h4 className="text-[19px] font-semibold">
                    Your Savings
                  </h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[17px]">Cost savings Year 1</span>
                    <span className="text-[32px] font-bold">Rp 62jt</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-green-500">
                    <span className="text-[15px] opacity-90">ROI timeline</span>
                    <span className="text-[19px] font-semibold">~2 bulan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] opacity-90">Time saved per week</span>
                    <span className="text-[19px] font-semibold">20+ jam</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Additional Benefits */}
        <ScrollReveal delay={0.6}>
          <div className="bg-black rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-[32px] font-semibold text-center mb-12">
              Beyond Cost Savings
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[19px] font-semibold mb-2">24/7 Operations</h4>
                <p className="text-[15px] text-gray-400">
                  Automation never sleeps. Handle customer requests anytime.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[19px] font-semibold mb-2">Zero Human Error</h4>
                <p className="text-[15px] text-gray-400">
                  Eliminate typos, missing data, dan calculation errors.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[19px] font-semibold mb-2">Unlimited Scale</h4>
                <p className="text-[15px] text-gray-400">
                  Handle 10x orders without hiring 10x staff.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.7} className="text-center mt-20">
          <p className="text-[21px] text-[#86868B] mb-8 max-w-2xl mx-auto">
            Want exact pricing for your workflow?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-8 py-4 rounded-full font-semibold text-[17px] transition-colors shadow-sm hover:shadow-md"
          >
            Discuss Your Budget
          </motion.button>
          <p className="text-[13px] text-[#86868B] mt-4">
            Free consultation • Custom quote dalam 24 jam
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
