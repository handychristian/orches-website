'use client'

import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { X } from 'lucide-react'

const enemies = [
  {
    icon: '🌙',
    title: 'The Midnight WhatsApp',
    description: 'Customer order jam 2 pagi. Anda bangun, balas, gabisa tidur lagi. Besok ngantuk. Repeat.'
  },
  {
    icon: '📊',
    title: 'The Spreadsheet Prison',
    description: 'Copy dari WhatsApp. Paste ke Excel. Copy ke Accounting. Copy ke... wait, udah di-paste belum? Check lagi. 3 jam hilang.'
  },
  {
    icon: '😰',
    title: 'The Sunday Night Dread',
    description: 'Minggu malam, perut mules. Besok Senin. 50 order harus di-process. Liburan? Forget it.'
  }
]

export default function TheEnemy() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header with Enemy Positioning */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <X className="w-4 h-4 text-red-600" strokeWidth={3} />
              <span className="text-[13px] font-semibold text-red-700 uppercase tracking-wide">
                The Real Enemy
              </span>
            </div>
          </ScrollReveal>

          <div className="text-[40px] sm:text-[48px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
            Tired of Being a Slave<br />to Your Business?
          </div>

          <ScrollReveal delay={0.2}>
            <p className="text-[19px] text-[#1D1D1F] max-w-3xl mx-auto leading-relaxed mb-3">
              You started this business to be <span className="font-semibold text-black">FREE.</span>
            </p>
            <p className="text-[17px] text-[#86868B] max-w-3xl mx-auto leading-relaxed">
              But now you're working 70-hour weeks, answering WhatsApp at dinner, and your family barely sees you.
            </p>
          </ScrollReveal>
        </div>

        {/* Enemy Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {enemies.map((enemy, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15} direction="up">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all">
                {/* Icon */}
                <div className="text-5xl mb-4">{enemy.icon}</div>

                {/* Title */}
                <h3 className="text-[19px] font-semibold text-black mb-3">
                  {enemy.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#1D1D1F] leading-relaxed">
                  {enemy.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Solution Pivot */}
        <ScrollReveal delay={0.4}>
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 text-center text-white">
            <p className="text-[21px] font-semibold mb-3">
              It doesn't have to be this way.
            </p>
            <p className="text-[17px] text-gray-300 max-w-2xl mx-auto">
              73 business owners sudah escape dari "spreadsheet prison" dan "midnight WhatsApp". Sekarang giliran Anda.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
