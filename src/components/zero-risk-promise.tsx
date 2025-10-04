'use client'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Shield, CheckCircle2 } from 'lucide-react'

export default function ZeroRiskPromise() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-green-600 text-white text-center py-16 px-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-6">
                <Shield className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-[40px] font-bold mb-4">Jaminan 100% Bebas Risiko</h3>
              <p className="text-[21px] opacity-90">
                Dalam 30 hari pertama, salah satu ini pasti terjadi:
              </p>
            </div>

            <div className="grid md:grid-cols-2 relative">
              <div className="p-10 border-r border-gray-200">
                <div className="mb-8 text-center">
                  <div className="text-6xl font-bold text-green-600 mb-4">✓</div>
                  <p className="text-[24px] font-bold text-black">Hemat 10 Jam/Minggu</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[15px] text-[#1D1D1F]">40 jam/bulan terselamatkan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[15px] text-[#1D1D1F]">Worth ~Rp 2 juta value</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[15px] text-[#1D1D1F]">Fokus grow bisnis, bukan admin</p>
                  </div>
                </div>
              </div>

              {/* OR Badge - Desktop */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-gray-100 border-2 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <span className="text-gray-600 font-bold text-[16px]">ATAU</span>
                </div>
              </div>

              {/* OR Badge - Mobile */}
              <div className="md:hidden py-6 bg-white border-y border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="bg-gray-100 border-2 border-gray-300 rounded-full px-8 py-3">
                    <span className="text-gray-600 font-bold text-[14px]">ATAU</span>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-green-50">
                <div className="mb-8 text-center">
                  <div className="text-6xl font-bold text-green-600 mb-4">💰</div>
                  <p className="text-[24px] font-bold text-black">Refund 100% + Rp 500k</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[15px] text-[#1D1D1F]">Uang kembali 100%</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[15px] text-[#1D1D1F]">Bonus Rp 500k kompensasi waktu</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[15px] text-[#1D1D1F]">Tanpa syarat ribet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-10 bg-gray-50 border-t border-gray-200">
              <p className="text-[21px] font-bold text-black mb-2">
                Apapun yang terjadi, Anda menang.
              </p>
              <p className="text-[15px] text-[#86868B]">
                Kami yang tanggung semua risiko.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
