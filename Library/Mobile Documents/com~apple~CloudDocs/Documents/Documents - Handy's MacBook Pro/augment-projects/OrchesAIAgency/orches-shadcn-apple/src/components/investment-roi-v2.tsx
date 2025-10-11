'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { Check, TrendingUp, Clock, Zap, X } from 'lucide-react'

type MaintenanceTier = 'none' | 'basic' | 'premium'

const maintenanceOptions = [
  {
    id: 'none' as MaintenanceTier,
    name: 'No Maintenance',
    price: 0,
    priceText: 'Rp 0',
    description: 'Handle sendiri setelah warranty',
    features: [
      '30 hari warranty',
      'Dokumentasi lengkap',
      'Bisa contact untuk paid support'
    ],
    notIncluded: [
      'No priority support',
      'No ongoing updates',
      'No monthly consultation'
    ]
  },
  {
    id: 'basic' as MaintenanceTier,
    name: 'Basic Maintenance',
    price: 500000,
    priceText: 'Rp 500k',
    description: 'Essential support & maintenance',
    features: [
      'Bug fixes & minor updates',
      'Email support (48 jam response)',
      'Monthly health check',
      '1 jam/bulan consultation'
    ],
    popular: false
  },
  {
    id: 'premium' as MaintenanceTier,
    name: 'Premium Maintenance',
    price: 1500000,
    priceText: 'Rp 1.5jt',
    description: 'Full support & continuous optimization',
    features: [
      'Priority bug fixes (24 jam)',
      'Feature updates & optimization',
      'WhatsApp priority support',
      '3 jam/bulan consultation',
      'Monthly report & analytics'
    ],
    popular: true
  }
]

export default function InvestmentROIV2() {
  const [selectedMaintenance, setSelectedMaintenance] = useState<MaintenanceTier>('basic')

  const selectedOption = maintenanceOptions.find(opt => opt.id === selectedMaintenance) || maintenanceOptions[0]
  const yearOneCost = 1000000 + (selectedOption.price * 12) + (500000 * 12) // dev + maintenance + hosting avg

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-[40px] sm:text-[48px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
            Your Investment
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[17px] text-[#86868B] max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. Choose maintenance level yang sesuai kebutuhan Anda.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* One-Time Development */}
          <ScrollReveal delay={0.4}>
            <div className="bg-[#F5F5F7] rounded-3xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-black">
                    One-Time Development Fee
                  </h3>
                  <p className="text-[15px] text-[#86868B]">
                    Custom integration build
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[15px] text-[#86868B]">Starting from</span>
                  <span className="text-[40px] font-bold text-black">Rp 1,000,000</span>
                </div>
                <p className="text-[13px] text-[#86868B]">
                  Depends on complexity & number of integrations
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Hosting Cost */}
          <ScrollReveal delay={0.5}>
            <div className="bg-[#F5F5F7] rounded-3xl p-8 mb-6">
              <h3 className="text-[21px] font-semibold text-black mb-4">
                Hosting Cost
              </h3>
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[32px] font-bold text-black">~Rp 300k - 700k</span>
                  <span className="text-[17px] text-[#86868B]">/bulan</span>
                </div>
                <p className="text-[13px] text-[#86868B]">
                  n8n cloud or self-hosted • Depends on usage
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Maintenance Options */}
          <ScrollReveal delay={0.6}>
            <div className="bg-[#F5F5F7] rounded-3xl p-8">
              <div className="mb-6">
                <h3 className="text-[24px] font-semibold text-black mb-2">
                  Maintenance Plan (Optional)
                </h3>
                <p className="text-[15px] text-[#86868B]">
                  Choose maintenance level yang sesuai kebutuhan bisnis Anda
                </p>
              </div>

              {/* Maintenance Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                {maintenanceOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => setSelectedMaintenance(option.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      relative bg-white rounded-2xl p-6 text-left transition-all
                      ${selectedMaintenance === option.id
                        ? 'ring-2 ring-[#0071E3] shadow-lg'
                        : 'ring-1 ring-gray-200 hover:ring-gray-300'
                      }
                    `}
                  >
                    {/* Popular Badge */}
                    {option.popular && (
                      <div className="absolute -top-3 right-4 bg-[#0071E3] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}

                    {/* Radio Indicator */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`
                        w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                        ${selectedMaintenance === option.id
                          ? 'border-[#0071E3] bg-[#0071E3]'
                          : 'border-gray-300'
                        }
                      `}>
                        {selectedMaintenance === option.id && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>

                    {/* Name & Price */}
                    <h4 className="text-[17px] font-semibold text-black mb-1">
                      {option.name}
                    </h4>
                    <div className="text-[24px] font-bold text-black mb-2">
                      {option.priceText}
                      {option.price > 0 && <span className="text-[15px] text-[#86868B]">/bulan</span>}
                    </div>
                    <p className="text-[13px] text-[#86868B] mb-4">
                      {option.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-[13px] text-[#1D1D1F]">{feature}</span>
                        </div>
                      ))}
                      {option.notIncluded?.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 opacity-50">
                          <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-[13px] text-[#86868B]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Cost Summary */}
        <ScrollReveal delay={0.7}>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-200 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[24px] font-semibold text-black">
                Total Cost Year 1
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Your Investment */}
              <div className="bg-white rounded-2xl p-6">
                <h4 className="text-[15px] font-semibold text-[#86868B] mb-4">
                  WITH {selectedOption.name.toUpperCase()}
                </h4>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#86868B]">Development</span>
                    <span className="font-semibold text-black">Rp 1,000,000</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#86868B]">Hosting (12 bulan)</span>
                    <span className="font-semibold text-black">Rp 6,000,000</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#86868B]">Maintenance (12 bulan)</span>
                    <span className="font-semibold text-black">
                      {selectedOption.price > 0 ? `Rp ${(selectedOption.price * 12).toLocaleString('id-ID')}` : 'Rp 0'}
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-semibold text-[#86868B]">Total</span>
                    <span className="text-[28px] font-bold text-green-600">
                      Rp {(yearOneCost / 1000000).toFixed(1)}jt
                    </span>
                  </div>
                </div>
              </div>

              {/* vs Hire Staff */}
              <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
                <h4 className="text-[15px] font-semibold text-red-600 mb-4">
                  HIRE 1 ADMIN STAFF
                </h4>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#86868B]">Salary (12 bulan)</span>
                    <span className="font-semibold text-black">Rp 60,000,000</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#86868B]">Benefits, training, etc</span>
                    <span className="font-semibold text-black">Rp 10,000,000</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-semibold text-[#86868B]">Total</span>
                    <span className="text-[28px] font-bold text-red-600">Rp 70jt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-[15px] opacity-90 mb-1">Your Savings Year 1</p>
                  <p className="text-[36px] font-bold">
                    Rp {((70000000 - yearOneCost) / 1000000).toFixed(1)}jt
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[15px] opacity-90 mb-1">ROI timeline</p>
                  <p className="text-[24px] font-semibold">~2 bulan</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Additional Benefits */}
        <ScrollReveal delay={0.8}>
          <div className="bg-black rounded-3xl p-8 text-white">
            <h3 className="text-[24px] font-semibold text-center mb-8">
              Beyond Cost Savings
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[17px] font-semibold mb-2">24/7 Operations</h4>
                <p className="text-[14px] text-gray-400">
                  Automation never sleeps
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[17px] font-semibold mb-2">Zero Human Error</h4>
                <p className="text-[14px] text-gray-400">
                  Eliminate typos & mistakes
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[17px] font-semibold mb-2">Unlimited Scale</h4>
                <p className="text-[14px] text-gray-400">
                  10x orders, no extra staff
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.9} className="text-center mt-16">
          <p className="text-[17px] text-[#86868B] mb-6">
            Want exact pricing for your workflow?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-7 py-3 rounded-full font-semibold text-[15px] transition-colors shadow-sm hover:shadow-md"
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
