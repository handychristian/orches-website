'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { Check, TrendingUp, ChevronDown } from 'lucide-react'

export default function PricingSimple() {
  const [showMaintenanceDetails, setShowMaintenanceDetails] = useState(false)

  const maintenanceCost = 500000
  const yearOneCost = 1000000 + (500000 * 12) + (maintenanceCost * 12)

  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <TextReveal className="text-[40px] sm:text-[48px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
            Simple Pricing
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[17px] text-[#86868B]">
              No hidden fees. No surprises. Choose apa yang sesuai kebutuhan Anda.
            </p>
          </ScrollReveal>
        </div>


        {/* Main Pricing Card */}
        <ScrollReveal delay={0.4}>
          <div className="bg-white rounded-3xl p-10 border-l-4 border-[#0071E3] shadow-sm mb-8">
            {/* Development Fee */}
            <div className="mb-10">
              <div className="text-[19px] font-semibold text-black mb-2">
                One-Time Development Fee
              </div>
              <div className="text-[15px] text-[#86868B] mb-3">
                Starting from
              </div>
              <div className="text-[40px] font-bold text-black mb-2">
                Rp 1,000,000
              </div>
              <p className="text-[14px] text-[#86868B]">
                Depends on complexity & number of integrations
              </p>
            </div>

            {/* Hosting */}
            <div className="mb-10">
              <div className="text-[19px] font-semibold text-black mb-3">
                Hosting
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[32px] font-bold text-black">Rp 300k - 700k</span>
                <span className="text-[17px] text-[#86868B]">/bulan</span>
              </div>
              <p className="text-[14px] text-[#86868B]">
                Depends on usage & workflow complexity
              </p>
            </div>

            {/* Maintenance */}
            <div>
              <div className="text-[19px] font-semibold text-black mb-2">
                Maintenance & Support
              </div>
              <div className="text-[15px] text-[#86868B] mb-3">
                Starting from
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[32px] font-bold text-black">Rp 500k</span>
                <span className="text-[17px] text-[#86868B]">/bulan</span>
              </div>

              <div className="bg-[#F5F5F7] rounded-xl p-4">
                <div
                  onClick={() => setShowMaintenanceDetails(!showMaintenanceDetails)}
                  className="flex items-center gap-2 text-[14px] text-[#0071E3] hover:text-[#0051D5] mb-3 cursor-pointer"
                >
                  <span>What's included</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMaintenanceDetails ? 'rotate-180' : ''}`} />
                </div>

                {showMaintenanceDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    {[
                      'Bug fixes & minor updates',
                      'Email support (48 jam response)',
                      'Monthly health check',
                      '1 jam/bulan consultation'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-[13px] text-[#1D1D1F]">{feature}</span>
                      </div>
                    ))}
                    <div className="pt-2 mt-2 border-t border-gray-200">
                      <p className="text-[12px] text-[#86868B]">
                        Need more? Premium support (Rp 1.5jt/bulan) available - <span className="text-[#0071E3]">ask us</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.6} className="text-center">
          <p className="text-[17px] text-[#86868B] mb-6">
            Penasaran bagaimana automation bisa bekerja di bisnis Anda?
          </p>
          <motion.a
            href="https://wa.me/6285161912446"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#0071E3] hover:bg-[#0051D5] text-white px-7 py-3 rounded-full font-semibold text-[15px] transition-colors shadow-sm hover:shadow-md"
          >
            Book Discovery Call
          </motion.a>
          <p className="text-[13px] text-[#86868B] mt-4">
            Free 30 menit • Custom quote dalam 24 jam
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
