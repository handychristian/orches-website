'use client'

import { Shield, CheckCircle2 } from 'lucide-react'

export default function GuaranteeComparison() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Zero Risk Promise - Design Options</h1>
        <p className="text-center text-gray-600 mb-12">Compare 6 different design approaches</p>

        <div className="space-y-16">
          {/* Option 1: Current Clean Minimal */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Option 1: Current Clean & Minimal</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-green-100">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <Shield className="w-10 h-10 text-green-600" strokeWidth={2} />
                    </div>
                    <h3 className="text-[32px] md:text-[40px] font-semibold text-black leading-tight mb-4">
                      🛡️ Jaminan 100% Bebas Risiko
                    </h3>
                    <p className="text-[19px] md:text-[21px] text-[#1D1D1F] font-medium max-w-2xl mx-auto">
                      Hemat 10 Jam/Minggu atau Uang Kembali + Rp 500k
                    </p>
                  </div>

                  <div className="text-center mb-10 pb-10 border-b border-gray-200">
                    <p className="text-[15px] text-[#86868B] mb-1">
                      10 jam/minggu = 40 jam/bulan terselamatkan
                    </p>
                    <p className="text-[17px] text-[#1D1D1F] font-semibold">
                      Worth ~Rp 2 juta/bulan <span className="text-[15px] text-[#86868B] font-normal">(@ Rp 50k/jam)</span>
                    </p>
                  </div>

                  <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-white mb-10">
                    <p className="text-[17px] md:text-[19px] leading-relaxed mb-10 text-center opacity-90">
                      Dalam 30 hari pertama, salah satu ini pasti terjadi:
                    </p>

                    <div className="space-y-8">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-[20px]">1</span>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-[19px] md:text-[21px] font-semibold leading-relaxed mb-2">
                            Hemat minimal 10 jam/minggu
                          </p>
                          <p className="text-[15px] md:text-[17px] leading-relaxed opacity-90">
                            = 40 jam/bulan (senilai ~Rp 2 juta) untuk fokus grow bisnis
                          </p>
                        </div>
                      </div>

                      <div className="text-center py-2">
                        <span className="text-white/60 font-medium text-[14px] tracking-widest">ATAU</span>
                      </div>

                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-[20px]">2</span>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-[19px] md:text-[21px] font-semibold leading-relaxed mb-2">
                            Refund 100% + Rp 500k bonus
                          </p>
                          <p className="text-[15px] md:text-[17px] leading-relaxed opacity-90">
                            Kami yang bayar Anda sebagai kompensasi waktu
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={2} />
                      <span className="text-[14px] text-[#1D1D1F]">Tanpa syarat ribet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={2} />
                      <span className="text-[14px] text-[#1D1D1F]">Tanpa pertanyaan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={2} />
                      <span className="text-[14px] text-[#1D1D1F]">Tanpa drama</span>
                    </div>
                  </div>

                  <div className="text-center pt-8 border-t border-gray-200">
                    <p className="text-[19px] md:text-[21px] text-black font-semibold mb-2">
                      Apapun yang terjadi, Anda menang.
                    </p>
                    <p className="text-[15px] text-[#86868B]">
                      Kami yang tanggung semua risiko.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Option 2: Bold Cards with Icons */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Option 2: Bold Cards with Icons</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-green-600 rounded-3xl mb-6 shadow-lg">
                    <Shield className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[36px] md:text-[44px] font-bold text-black leading-tight mb-4">
                    Jaminan 100% Bebas Risiko
                  </h3>
                  <p className="text-[21px] text-[#1D1D1F] font-medium">
                    Hemat 10 Jam/Minggu atau Uang Kembali + Rp 500k
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-500">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-green-600 font-bold text-3xl">✓</span>
                      </div>
                      <h4 className="text-[24px] font-bold text-black mb-3">Hemat 10 Jam/Minggu</h4>
                      <p className="text-[16px] text-[#86868B]">
                        = 40 jam/bulan (worth ~Rp 2 juta) untuk fokus grow bisnis
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-green-600 rounded-2xl p-8 shadow-xl text-white border-2 border-green-700">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-3xl">💰</span>
                      </div>
                      <h4 className="text-[24px] font-bold mb-3">Refund 100% + Rp 500k</h4>
                      <p className="text-[16px] opacity-90">
                        Kami bayar Anda sebagai kompensasi waktu
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white rounded-2xl p-8">
                  <p className="text-[19px] font-bold text-black mb-2">
                    Apapun yang terjadi, Anda menang.
                  </p>
                  <p className="text-[15px] text-[#86868B]">
                    Kami yang tanggung semua risiko.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Option 3: Split Layout with Visual Divider */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Option 3: Split Layout with Visual Divider</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <div className="bg-green-600 text-white text-center py-12 px-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                      <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[36px] font-bold mb-4">Jaminan 100% Bebas Risiko</h3>
                    <p className="text-[19px] opacity-90">
                      Hemat 10 Jam/Minggu atau Uang Kembali + Rp 500k
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div className="p-10 border-r border-gray-200">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-green-600 mb-4">10</div>
                        <p className="text-[17px] font-semibold text-black mb-2">Jam/Minggu Terhemat</p>
                        <p className="text-[14px] text-[#86868B]">
                          = 40 jam/bulan<br />
                          Worth ~Rp 2 juta
                        </p>
                      </div>
                    </div>

                    <div className="p-10 bg-green-50">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-green-600 mb-4">100%</div>
                        <p className="text-[17px] font-semibold text-black mb-2">Refund + Rp 500k</p>
                        <p className="text-[14px] text-[#86868B]">
                          Kalau tidak hemat<br />
                          10 jam/minggu
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-8 bg-gray-50">
                    <p className="text-[17px] font-bold text-black">
                      Apapun yang terjadi, Anda menang. Kami yang tanggung semua risiko.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Option 4: Minimal with Big Numbers */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Option 4: Minimal with Big Numbers</h2>
            <section className="bg-white py-12 px-6 rounded-xl">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                  <h3 className="text-[40px] md:text-[48px] font-semibold text-black mb-6">
                    🛡️ Jaminan Bebas Risiko
                  </h3>
                  <p className="text-[17px] text-[#86868B] max-w-2xl mx-auto">
                    Dalam 30 hari pertama, salah satu ini pasti terjadi:
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                  <div className="flex-1 max-w-sm">
                    <div className="text-7xl font-bold text-green-600 mb-4">10h</div>
                    <p className="text-[19px] font-semibold text-black mb-2">Hemat per Minggu</p>
                    <p className="text-[15px] text-[#86868B]">Worth ~Rp 2 juta/bulan</p>
                  </div>

                  <div className="text-4xl text-gray-300 hidden md:block">atau</div>

                  <div className="flex-1 max-w-sm">
                    <div className="text-7xl font-bold text-green-600 mb-4">Rp 500k</div>
                    <p className="text-[19px] font-semibold text-black mb-2">Bonus + Full Refund</p>
                    <p className="text-[15px] text-[#86868B]">Kalau tidak hemat 10 jam</p>
                  </div>
                </div>

                <div className="inline-block bg-green-50 rounded-2xl px-8 py-6 border border-green-200">
                  <p className="text-[17px] font-bold text-black">
                    Apapun yang terjadi, Anda menang.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Option 5: Gradient Card with Badges */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Option 5: Gradient Card with Badges</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-green-600 via-green-600 to-emerald-700 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
                  <div className="text-center mb-10">
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                      <span className="text-white font-semibold text-[14px]">✓ 100% RISK-FREE GUARANTEE</span>
                    </div>
                    <h3 className="text-[36px] md:text-[44px] font-bold mb-4">
                      Jaminan Bebas Risiko
                    </h3>
                    <p className="text-[19px] opacity-90">
                      Hemat 10 Jam/Minggu atau Uang Kembali + Rp 500k
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                    <p className="text-center text-[17px] mb-8 opacity-90">
                      Dalam 30 hari pertama, pilih salah satu:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-6 text-black">
                        <p className="text-[21px] font-bold mb-2">✓ Hemat 10 Jam/Minggu</p>
                        <p className="text-[15px] text-[#86868B]">= 40 jam/bulan (worth ~Rp 2 juta)</p>
                      </div>

                      <div className="bg-white rounded-xl p-6 text-black">
                        <p className="text-[21px] font-bold mb-2">💰 Refund 100% + Rp 500k</p>
                        <p className="text-[15px] text-[#86868B]">Kami bayar Anda sebagai kompensasi</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[19px] font-bold">
                      Apapun yang terjadi, Anda menang. 🎯
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Option 6: Timeline/Flow Style */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Option 6: Timeline/Flow Style</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
                  <div className="text-center mb-12">
                    <h3 className="text-[36px] md:text-[44px] font-bold text-black mb-4">
                      🛡️ Jaminan 100% Bebas Risiko
                    </h3>
                    <p className="text-[17px] text-[#86868B]">
                      Dalam 30 hari pertama, ini yang akan terjadi:
                    </p>
                  </div>

                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>

                    <div className="space-y-8 relative">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                          <span className="text-white font-bold text-[20px]">1</span>
                        </div>
                        <div className="flex-1 bg-green-50 rounded-2xl p-6 mt-2">
                          <h4 className="text-[21px] font-bold text-black mb-2">Hemat Minimal 10 Jam/Minggu</h4>
                          <p className="text-[15px] text-[#86868B]">
                            = 40 jam/bulan (senilai ~Rp 2 juta) untuk fokus grow bisnis
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center z-10">
                          <span className="text-gray-600 font-semibold text-[16px]">ATAU</span>
                        </div>
                        <div className="flex-1 mt-4">
                        </div>
                      </div>

                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                          <span className="text-white font-bold text-[20px]">2</span>
                        </div>
                        <div className="flex-1 bg-green-50 rounded-2xl p-6 mt-2">
                          <h4 className="text-[21px] font-bold text-black mb-2">Refund 100% + Rp 500k Bonus</h4>
                          <p className="text-[15px] text-[#86868B]">
                            Kami yang bayar Anda sebagai kompensasi waktu
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12 pt-8 border-t border-gray-200">
                    <p className="text-[19px] font-bold text-black mb-2">
                      Apapun yang terjadi, Anda menang.
                    </p>
                    <p className="text-[15px] text-[#86868B]">
                      Kami yang tanggung semua risiko.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
