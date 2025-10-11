'use client'

import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ibu Sarah',
    business: 'Catering Jakarta',
    businessSize: '15 karyawan',
    age: '52 tahun',
    techLevel: 'Nggak tech-savvy',
    quote: 'Sebelumnya order masuk via WA, terus saya manual bikin invoice di Word, print, kirim foto. Ribet banget dan sering typo. Sekarang customer order → invoice auto jadi PDF → saya approve via WA → langsung ke customer. Hemat 2 jam setiap hari, dan zero error.',
    result: '14 jam/minggu saved',
    metric1: '2 jam/hari',
    metric2: 'Zero error',
    highlight: 'Auto-invoice + approval workflow'
  },
  {
    name: 'Pak Budi',
    business: 'Toko Bangunan Surabaya',
    businessSize: '8 karyawan',
    age: '47 tahun',
    techLevel: 'Manual Excel user',
    quote: 'Dulu tiap ada order, staff input ke Excel, lalu saya cek manual. Sering stok menipis baru ketahuan. Sekarang automation connect WhatsApp ke Google Sheet inventory. Stok update otomatis, auto-alert kalau menipis. Gak perlu cek manual lagi. Fokus jualan aja.',
    result: 'Zero stock-out 3 bulan',
    metric1: '10+ jam/minggu',
    metric2: '100% inventory accuracy',
    highlight: 'Integrated inventory management'
  },
  {
    name: 'Doni',
    business: 'Laundry Chain',
    businessSize: '3 outlets, 20 karyawan',
    age: '35 tahun',
    techLevel: 'Basic smartphone user',
    quote: 'Punya 3 outlet, dulu ribet banget track order dari customer → assign ke outlet mana → tracking status → payment → receipt. Manual semua, sering miss. Sekarang dari customer order sampai payment otomatis connected. Team cuma fokus cuci baju. Revenue naik 40% dalam 4 bulan.',
    result: '40% revenue growth',
    metric1: '15 jam/minggu',
    metric2: '3x faster processing',
    highlight: 'Multi-location automation'
  }
]

export default function SocialProof() {
  return (
    <section className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Real Businesses. Real Results.
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[21px] text-[#1D1D1F] max-w-3xl mx-auto font-normal leading-[1.4]">
              Business owner <span className="font-semibold text-black">bukan tech people</span>.
            </p>
            <p className="text-[19px] text-[#86868B] max-w-3xl mx-auto mt-4">
              Tapi mereka save 10-20 jam per minggu dengan integrated automation.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction="up">
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0071E3]/10">
                    <Quote className="w-6 h-6 text-[#0071E3]" />
                  </div>
                </div>

                {/* Profile */}
                <div className="mb-6">
                  <h4 className="text-[21px] font-semibold text-black mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[15px] text-[#1D1D1F] font-medium mb-2">
                    {testimonial.business}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[13px] text-[#86868B] bg-gray-100 px-3 py-1 rounded-full">
                      {testimonial.businessSize}
                    </span>
                    <span className="text-[13px] text-[#86868B] bg-gray-100 px-3 py-1 rounded-full">
                      {testimonial.age}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-[13px] text-orange-600 font-medium">
                      👤 {testimonial.techLevel}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-[15px] text-[#1D1D1F] leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Highlight */}
                <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-[13px] text-blue-800 font-medium">
                    🔗 {testimonial.highlight}
                  </p>
                </div>

                {/* Results */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] text-[#86868B] uppercase tracking-wider">
                      Result
                    </span>
                    <span className="text-[17px] font-semibold text-green-600">
                      {testimonial.result}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-[15px] font-semibold text-black">
                        {testimonial.metric1}
                      </p>
                      <p className="text-[11px] text-[#86868B] mt-1">saved</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-[15px] font-semibold text-black">
                        {testimonial.metric2}
                      </p>
                      <p className="text-[11px] text-[#86868B] mt-1">achieved</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Bar */}
        <ScrollReveal delay={0.6}>
          <div className="bg-black rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-[48px] font-bold mb-2"
                >
                  48+ jam
                </motion.div>
                <p className="text-[15px] text-gray-400">
                  Average time saved per month
                </p>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[48px] font-bold mb-2"
                >
                  95%
                </motion.div>
                <p className="text-[15px] text-gray-400">
                  Error reduction rate
                </p>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[48px] font-bold mb-2"
                >
                  2-4 weeks
                </motion.div>
                <p className="text-[15px] text-gray-400">
                  Average implementation time
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.7} className="text-center mt-16">
          <p className="text-[19px] text-[#86868B] mb-8">
            Mau hasil yang sama? Mulai dengan discovery call.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-8 py-4 rounded-full font-semibold text-[17px] transition-colors shadow-sm hover:shadow-md"
          >
            Book Free Discovery Call
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  )
}
