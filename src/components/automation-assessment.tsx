'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, RotateCw, Copy, AlertCircle, Clock, MessageSquare, TrendingUp } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const signs = [
  {
    icon: RotateCw,
    color: 'from-blue-500 to-blue-600',
    text: 'Ngerjain task yang sama 2x atau lebih setiap hari',
    example: 'Balas chat customer, update stok, input data'
  },
  {
    icon: Copy,
    color: 'from-purple-500 to-purple-600',
    text: 'Copy-paste data antar tools secara manual',
    example: 'Sheets → WhatsApp, Invoice → Accounting'
  },
  {
    icon: AlertCircle,
    color: 'from-orange-500 to-orange-600',
    text: 'Lupa follow-up customer atau task penting',
    example: 'Terlalu banyak hal manual yang harus diingat'
  },
  {
    icon: Clock,
    color: 'from-red-500 to-red-600',
    text: 'Update harga/stok di banyak tempat satu-satu',
    example: 'Tokopedia, Shopee, WA, Instagram, Website'
  },
  {
    icon: MessageSquare,
    color: 'from-green-500 to-green-600',
    text: 'Tim atau customer tanya "statusnya gimana?" terus',
    example: 'Manual tracking bikin informasi terlambat'
  }
]

export default function AutomationAssessment() {
  const [selectedSigns, setSelectedSigns] = useState<number[]>([])

  const toggleSign = (index: number) => {
    setSelectedSigns(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const score = selectedSigns.length
  const hasScore = score > 0

  // Dynamic scoring insights
  const getScoreInsight = () => {
    if (score === 0) return null
    if (score === 1) return {
      priority: 'LOW',
      color: 'bg-yellow-100 border-yellow-300 text-yellow-800',
      hours: '5-8',
      savings: '2-3 juta',
      message: 'Ada potensi efficiency, tapi belum urgent'
    }
    if (score === 2) return {
      priority: 'MEDIUM',
      color: 'bg-orange-100 border-orange-300 text-orange-800',
      hours: '10-15',
      savings: '4-6 juta',
      message: 'Automation bisa significantly improve workflow Anda'
    }
    if (score >= 3) return {
      priority: 'HIGH',
      color: 'bg-red-100 border-red-300 text-red-800',
      hours: '15-25',
      savings: '6-10 juta',
      message: 'HIGH PRIORITY - Anda waste banyak waktu & uang!'
    }
  }

  const insight = getScoreInsight()

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
              Belum Tau Apa yang Perlu Diotomasi?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[19px] text-[#86868B] max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-gray-700">Cek tanda-tanda di bawah</span> — klik yang Anda alami untuk lihat estimasi waktu & cost yang bisa dihemat.
            </p>
          </ScrollReveal>
        </div>

        {/* Signs Grid - Interactive */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 max-w-6xl mx-auto">
          {signs.map((sign, index) => {
            const IconComponent = sign.icon
            const isSelected = selectedSigns.includes(index)

            return (
              <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ScrollReveal delay={index * 0.1} direction="up">
                  <button
                    onClick={() => toggleSign(index)}
                    className={`w-full text-left bg-white rounded-2xl p-6 border-2 transition-all group cursor-pointer ${
                      isSelected
                        ? 'border-green-500 shadow-lg shadow-green-100'
                        : 'border-gray-100 hover:border-gray-300 hover:shadow-lg'
                    }`}
                  >
                  {/* Icon + Title - horizontal layout */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sign.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <p className="text-[17px] font-semibold text-black leading-snug flex-1 pt-1">
                      {sign.text}
                    </p>
                  </div>

                  {/* Example */}
                  <p className="text-[15px] text-[#86868B]">
                    <span className="italic">{sign.example}</span>
                  </p>
                </button>
              </ScrollReveal>
              </div>
            )
          })}
        </div>

        {/* Score Display */}
        <AnimatePresence>
          {hasScore && insight && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="mb-8"
            >
              <div className={`rounded-2xl p-6 border-2 ${insight.color}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold">{score}/5 Signs</span>
                      <span className="px-3 py-1 bg-white rounded-full text-sm font-semibold">
                        {insight.priority} PRIORITY
                      </span>
                    </div>
                    <p className="text-lg font-semibold mb-2">{insight.message}</p>
                    <p className="text-base opacity-90">
                      <span className="font-semibold">Estimasi:</span> Waste ~{insight.hours} jam/minggu •
                      Automation bisa hemat ~Rp {insight.savings}/bulan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Box - Dynamic */}
        <ScrollReveal delay={0.4}>
          <div className={`rounded-3xl p-8 md:p-12 border-2 transition-all max-w-4xl mx-auto ${
            hasScore
              ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
              : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
          }`}>
            <div className="text-center">
              <h3 className="text-[28px] md:text-[32px] font-bold text-black mb-4">
                {hasScore
                  ? `Mari Hemat ${insight?.hours} Jam/Minggu Anda`
                  : 'Mari Kita Identify Bareng'
                }
              </h3>
              <p className="text-[17px] text-gray-700 mb-8 leading-relaxed">
                <span className="font-semibold">FREE Discovery Call 30 menit</span> —
                {hasScore
                  ? ` Kami deep dive ke ${score} pain point Anda, kasih solusi automation konkrit, dan estimate berapa banyak waktu & uang yang bisa dihemat.`
                  : ' Kami observe workflow Anda, identify 3-5 proses paling repetitive & time-consuming, lalu kasih estimate berapa jam & uang yang bisa dihemat.'
                }
                <span className="block mt-3 text-[15px] text-gray-600">Zero pressure. Pure consultation. Anda yang decide.</span>
              </p>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>100% Gratis</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Dapat ROI Estimate</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>No Commitment</span>
                </div>
              </div>

              <a
                href="https://wa.me/6285161912446"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-white font-semibold text-lg px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  hasScore
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-black hover:bg-gray-800'
                }`}
              >
                {hasScore
                  ? `Book Call - Hemat ${insight?.hours} Jam/Minggu →`
                  : 'Book Free Discovery Call →'
                }
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
