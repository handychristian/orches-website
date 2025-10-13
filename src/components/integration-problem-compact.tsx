'use client'

import { motion } from 'framer-motion'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'
import { ArrowDown, Wallet, TrendingUp, Target } from 'lucide-react'

const problems = [
  {
    icon: 'wallet',
    iconColor: 'from-red-500 to-orange-500',
    title: 'Berapa Persen Gaji untuk Kerjaan Repetitif?',
    before: 'Tim Anda habis 60% waktu untuk kerjaan admin repetitif: input data, copy-paste, bikin laporan manual. Itu artinya 60% gaji mereka untuk kerjaan yang harusnya dilakukan robot.',
    after: 'Automasi handle 80% kerjaan repetitif. Tim yang sama, output 3x lipat. Biaya per transaksi turun drastis.',
    timeSaved: 'Hemat Rp 15-30jt/bulan'
  },
  {
    icon: 'trending-up',
    iconColor: 'from-blue-500 to-cyan-500',
    title: 'Pengen Scale Tapi Tim Tetap Lean?',
    before: 'Revenue naik 50%? Harus tambah 5 karyawan baru. Profit margin tetap segitu-gitu aja. Ga bisa gede.',
    after: 'Automasi bisa scale unlimited tanpa tambah karyawan. Revenue naik 3x, jumlah tim tetap. Profit margin makin gede.',
    timeSaved: 'Omset naik tanpa nambah karyawan'
  },
  {
    icon: 'target',
    iconColor: 'from-green-500 to-emerald-500',
    title: 'Tim Anda Harusnya Bantu Jualan, Bukan Input Excel',
    before: 'Tim Anda habis 80% waktu ngurusin operasional harian. Cuma 20% fokus ke marketing, inovasi, ekspansi. Bisnis jalan di tempat.',
    after: '80% operasional jalan otomatis. Tim bisa fokus 80% waktu untuk cari customer baru, develop produk, expand bisnis.',
    timeSaved: 'Fokus grow bisnis, bukan urus admin'
  }
]

const iconMap = {
  wallet: Wallet,
  'trending-up': TrendingUp,
  target: Target
}

export default function IntegrationProblemCompact() {
  return (
    <section id="problem" className="py-24 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Emotional */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
              Pengen Scale, Tapi Kok Harus<br />Nambah Karyawan Terus?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[19px] text-[#1D1D1F] max-w-3xl mx-auto leading-relaxed mb-3">
              Bisnis yang sehat: <span className="font-semibold text-black">revenue naik 3x, team size naik cuma 20%.</span>
            </p>
            <p className="text-[17px] text-[#86868B] max-w-3xl mx-auto leading-relaxed">
              Bukan 3x juga.
            </p>
          </ScrollReveal>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12" style={{ height: 'auto' }}>
          {problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap]

            return (
            <ScrollReveal key={index} delay={index * 0.15} direction="up">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col" style={{ overflow: 'visible', height: 'auto', minHeight: 'fit-content' }}>
                {/* Top gradient bar */}
                <div className={`h-0.5 bg-gradient-to-r ${problem.iconColor} rounded-t-2xl`}></div>

                <div className="p-6 flex-1">
                  {/* Icon + Title horizontal */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br ${problem.iconColor} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-[21px] font-semibold text-black">
                      {problem.title}
                    </h3>
                  </div>

                {/* Before */}
                <div className="mb-4">
                  <div className="text-[11px] font-semibold text-red-600 tracking-wider mb-2">
                    SEKARANG
                  </div>
                  <p className="text-[14px] text-[#1D1D1F] leading-relaxed">
                    {problem.before}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-start my-4 pl-4">
                  <ArrowDown className="w-5 h-5 text-[#0071E3]" strokeWidth={2} />
                </div>

                {/* After */}
                <div className="mb-4">
                  <div className="text-[11px] font-semibold text-green-600 tracking-wider mb-2">
                    DENGAN AUTOMATION
                  </div>
                  <p className="text-[14px] text-[#1D1D1F] leading-relaxed">
                    {problem.after}
                  </p>
                </div>

                  {/* Impact/ROI */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-[13px] text-[#86868B] mb-1">Impact</p>
                    <p className="text-[15px] font-semibold text-green-600">
                      {problem.timeSaved}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )})}
        </div>
      </div>
    </section>
  )
}
