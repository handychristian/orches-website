'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { TrendingDown } from 'lucide-react'

export default function HonestCloser() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-8">
            <h3 className="text-[36px] md:text-[44px] font-semibold text-black mb-6 leading-tight">
              Let me be honest with you...
            </h3>

            <div className="space-y-6 text-left">
              <p className="text-[19px] text-[#1D1D1F] leading-relaxed">
                Most business owners <span className="font-semibold text-black">wait too long</span> to automate.
              </p>

              <p className="text-[19px] text-[#1D1D1F] leading-relaxed">
                They think <span className="text-[#86868B] italic">"next quarter"</span> or <span className="text-[#86868B] italic">"when I have more revenue."</span>
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-[19px] text-black font-semibold mb-2">
                  But here's the truth:
                </p>
                <p className="text-[17px] text-[#1D1D1F]">
                  Every month you wait = <span className="font-bold text-red-600">Rp 5-10jt wasted</span> on manual work yang sebenarnya bisa otomatis.
                </p>
              </div>

              <p className="text-[19px] text-[#1D1D1F] leading-relaxed">
                You <span className="font-semibold text-black">already know</span> this is smart.
              </p>

              <p className="text-[21px] text-black font-semibold">
                The question isn't <span className="italic">"Should I?"</span>
              </p>

              <p className="text-[28px] md:text-[36px] text-black font-bold">
                It's <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">"Why not NOW?"</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Urgency Visual */}
        <ScrollReveal delay={0.3}>
          <div className="bg-black text-white rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingDown className="w-6 h-6 text-red-400" />
              <span className="text-[15px] font-semibold text-red-400 uppercase tracking-wide">
                Slots Filling Fast
              </span>
            </div>
            <p className="text-[17px] text-gray-300 mb-6">
              We only take 5 new clients per month (untuk maintain quality). Mei sudah ada 2 yang booked.
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-red-500"></div>
              <div className="w-12 h-12 rounded-lg bg-red-500"></div>
              <div className="w-12 h-12 rounded-lg bg-gray-700"></div>
              <div className="w-12 h-12 rounded-lg bg-gray-700"></div>
              <div className="w-12 h-12 rounded-lg bg-gray-700"></div>
            </div>
            <p className="text-[13px] text-gray-400 mt-4">
              🔴 Booked  ⚫ Available
            </p>
          </div>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal delay={0.4}>
          <motion.a
            href="https://wa.me/6285161912446"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-full font-semibold text-[19px] transition-all shadow-lg hover:shadow-xl"
          >
            Book My Spot - Before It's Gone
          </motion.a>
          <p className="text-[13px] text-[#86868B] mt-4">
            Free 30 menit • Zero-Risk Promise • Mulai dalam 16 hari
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
