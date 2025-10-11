'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { Clock, ArrowRight } from 'lucide-react'

const beforeStory = [
  { time: '06:30', event: 'Bangun, langsung cek WhatsApp. 12 pesan masuk semalam.', emoji: '😴' },
  { time: '07:00', event: 'Breakfast sambil balas WhatsApp. Anak minta perhatian, "bentar ya sayang..."', emoji: '📱' },
  { time: '08:00', event: 'Buka laptop. Copy 15 orders dari WA ke Excel satu-satu.', emoji: '📋' },
  { time: '09:30', event: 'Copy data dari Excel ke sistem accounting. Ada yang salah. Ulang.', emoji: '💢' },
  { time: '11:00', event: 'Email supplier satu-satu untuk restock. Manual. Capek.', emoji: '📧' },
  { time: '13:00', event: 'Lunch? Nanti dulu, ada customer komplain invoice belum dikirim.', emoji: '🍜' },
  { time: '15:00', event: 'Cek stok manual di gudang. Update spreadsheet. Lupa save, file corrupt.', emoji: '😭' },
  { time: '18:00', event: 'Pulang, tapi laptop dibawa. "Just in case ada urgent..."', emoji: '💼' },
  { time: '22:00', event: 'Customer order. Confirmed. Update Excel. Finally sleep.', emoji: '🌙' }
]

const afterStory = [
  { time: '06:30', event: 'Bangun. Cek dashboard automation: 8 orders processed overnight. ✅', emoji: '☀️' },
  { time: '07:00', event: 'Breakfast dengan keluarga. Laptop masih di tas. Tenang.', emoji: '☕' },
  { time: '08:00', event: 'Review dashboard 15 menit. Semua berjalan smooth. No action needed.', emoji: '✨' },
  { time: '09:00', event: 'Meeting dengan tim untuk strategi growth - bukan bahas Excel.', emoji: '📈' },
  { time: '11:00', event: 'Sistem auto-email supplier yang stoknya menipis. Tinggal approve.', emoji: '🤖' },
  { time: '13:00', event: 'Lunch PROPER. Tidak ada laptop. Tidak ada WhatsApp stress.', emoji: '🍽️' },
  { time: '15:00', event: 'Brainstorm produk baru. Energy masih full karena tidak exhausted by manual work.', emoji: '💡' },
  { time: '18:00', event: 'Pulang ON TIME. Laptop stays at office. Peace.', emoji: '🏠' },
  { time: '22:00', event: 'Customer order jam 10 malam? Sistem handle. Anda? Netflix.', emoji: '🎬' }
]

export default function DayInLife() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before')

  const story = activeTab === 'before' ? beforeStory : afterStory

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <TextReveal className="text-[40px] sm:text-[48px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
            Your Day: Before vs After
          </TextReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[17px] text-[#86868B] max-w-2xl mx-auto">
              Ini bukan hype. Ini nyata. Lihat perbedaan konkret di hari Anda.
            </p>
          </ScrollReveal>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-6 py-3 rounded-full text-[15px] font-semibold transition-all ${
                activeTab === 'before'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              😓 Before Automation
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-6 py-3 rounded-full text-[15px] font-semibold transition-all ${
                activeTab === 'after'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              😌 After Automation
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[60px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-300 to-transparent"></div>

          {/* Story Cards */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'before' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {story.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start gap-6"
              >
                {/* Time Badge */}
                <div className="flex-shrink-0 w-[50px] flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    activeTab === 'before'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] text-gray-500 mt-1 font-mono">{item.time}</span>
                </div>

                {/* Event Card */}
                <div className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  activeTab === 'before'
                    ? 'bg-red-50 border-red-200'
                    : 'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                    <p className="text-[15px] text-[#1D1D1F] leading-relaxed flex-1">
                      {item.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full">
              <span className="text-[17px] font-semibold">Which version do you want?</span>
              <ArrowRight className="w-5 h-5" />
            </div>
            <p className="text-[13px] text-[#86868B] mt-4">
              Scroll untuk lihat bagaimana kami bikin ini jadi kenyataan
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
