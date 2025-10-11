'use client'

import { Wallet, TrendingUp, Target, ArrowDown } from 'lucide-react'

const problem = {
  icon: 'wallet',
  iconColor: 'from-red-500 to-orange-500',
  title: 'Berapa Persen Gaji untuk Kerjaan Repetitif?',
  before: 'Tim Anda habis 60% waktu untuk kerjaan admin repetitif: input data, copy-paste, bikin laporan manual. Itu artinya 60% gaji mereka untuk kerjaan yang harusnya dilakukan robot.',
  after: 'Automasi handle 80% kerjaan repetitif. Tim yang sama, output 3x lipat. Biaya per transaksi turun drastis.',
  timeSaved: 'Hemat Rp 15-30jt/bulan'
}

const iconMap = {
  wallet: Wallet
}

export default function GradientComparison() {
  const IconComponent = iconMap[problem.icon as keyof typeof iconMap]

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Gradient Options Comparison</h1>
        <p className="text-center text-lg text-gray-600 mb-8">Icon positioned beside title (horizontal layout)</p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Option 5: Full Width Top Gradient */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Option 5: Top Bar (2px) - Clean & Minimal</h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
              {/* Top gradient bar */}
              <div className={`h-0.5 bg-gradient-to-r ${problem.iconColor}`}></div>

              <div className="p-6">
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

              {/* Impact */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-[13px] text-[#86868B] mb-1">Impact</p>
                <p className="text-[15px] font-semibold text-green-600">
                  {problem.timeSaved}
                </p>
              </div>
            </div>
          </div>

          {/* Option 6: Icon + Title Gradient Background */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Option 6: Gradient Header - More Visual Impact</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
              {/* Icon and title section with gradient background */}
              <div className="relative -mx-6 -mt-6 px-6 pt-6 pb-4 rounded-t-2xl mb-6">
                {/* Gradient background layer */}
                <div className={`absolute inset-0 bg-gradient-to-r ${problem.iconColor} opacity-100 rounded-t-2xl`}></div>

                {/* Content layer */}
                <div className="relative flex items-center gap-4">
                  <div className={`w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br ${problem.iconColor} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-[21px] font-semibold text-white">
                    {problem.title}
                  </h3>
                </div>
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

              {/* Impact */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-[13px] text-[#86868B] mb-1">Impact</p>
                <p className="text-[15px] font-semibold text-green-600">
                  {problem.timeSaved}
                </p>
              </div>
            </div>
          </div>

          {/* CURRENT - No Gradient */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Current: No Gradient (Baseline)</h2>
            <div className="bg-white rounded-2xl shadow-sm h-full p-6">
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

                {/* Impact */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[13px] text-[#86868B] mb-1">Impact</p>
                  <p className="text-[15px] font-semibold text-green-600">
                    {problem.timeSaved}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
