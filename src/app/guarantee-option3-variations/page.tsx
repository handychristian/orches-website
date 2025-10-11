'use client'

import { Shield, CheckCircle2, Clock, DollarSign, Zap, Award } from 'lucide-react'

export default function Option3Variations() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Option 3 Variations - Split Layout</h1>
        <p className="text-center text-gray-600 mb-12">6 variations of the split layout design</p>

        <div className="space-y-16">
          {/* Variation 1: Original with Better Icons */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Variation 1: With Icons in Split</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-12 px-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                      <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[36px] font-bold mb-4">Jaminan 100% Bebas Risiko</h3>
                    <p className="text-[19px] opacity-90 max-w-2xl mx-auto">
                      Hemat 10 Jam/Minggu atau Uang Kembali + Rp 500k
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div className="p-12 border-r border-gray-200">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
                          <Clock className="w-10 h-10 text-green-600" strokeWidth={2} />
                        </div>
                        <div className="text-6xl font-bold text-green-600 mb-4">10</div>
                        <p className="text-[19px] font-semibold text-black mb-3">Jam/Minggu Terhemat</p>
                        <p className="text-[15px] text-[#86868B]">
                          = 40 jam/bulan<br />
                          Worth ~Rp 2 juta
                        </p>
                      </div>
                    </div>

                    <div className="p-12 bg-green-50">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-2xl mb-6">
                          <DollarSign className="w-10 h-10 text-white" strokeWidth={2} />
                        </div>
                        <div className="text-6xl font-bold text-green-600 mb-4">100%</div>
                        <p className="text-[19px] font-semibold text-black mb-3">Refund + Rp 500k</p>
                        <p className="text-[15px] text-[#86868B]">
                          Kalau tidak hemat<br />
                          10 jam/minggu
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-8 bg-gradient-to-r from-gray-50 to-green-50">
                    <p className="text-[19px] font-bold text-black mb-1">
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

          {/* Variation 2: With Checkmarks & Benefits */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Variation 2: With Benefits Listed</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-6xl mx-auto">
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

                  <div className="grid md:grid-cols-2">
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
              </div>
            </section>
          </div>

          {/* Variation 3: Asymmetric Split with Emphasis */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Variation 3: Asymmetric with Emphasis on Value</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white text-center py-14 px-8">
                    <h3 className="text-[38px] font-bold mb-4">🛡️ Jaminan 100% Bebas Risiko</h3>
                    <p className="text-[19px] opacity-90">
                      Hemat 10 Jam/Minggu atau Uang Kembali + Rp 500k
                    </p>
                  </div>

                  <div className="grid md:grid-cols-5">
                    <div className="md:col-span-3 p-12 bg-green-50">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Zap className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-[28px] font-bold text-black">Hemat 10 Jam/Minggu</p>
                          <p className="text-[15px] text-[#86868B]">Opsi paling menguntungkan</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-4xl font-bold text-green-600">40</span>
                          <span className="text-[17px] text-[#86868B]">jam/bulan terselamatkan</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-green-600">~Rp 2 juta</span>
                          <span className="text-[15px] text-[#86868B]">value/bulan</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 p-12 border-l border-gray-200 flex items-center">
                      <div className="text-center w-full">
                        <p className="text-[17px] text-[#86868B] mb-4">Atau kalau tidak hemat:</p>
                        <div className="bg-green-100 rounded-2xl p-6">
                          <p className="text-[24px] font-bold text-black mb-2">Refund 100%</p>
                          <p className="text-[21px] font-bold text-green-600">+ Rp 500k</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-8 bg-gray-50">
                    <p className="text-[19px] font-bold text-black">
                      Apapun yang terjadi, Anda menang. Kami yang tanggung semua risiko.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variation 4: With Progress/Steps Visual */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Variation 4: With Visual Steps</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <div className="bg-green-600 text-white py-12 px-8">
                    <div className="max-w-3xl mx-auto text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                        <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[36px] font-bold mb-4">Jaminan 100% Bebas Risiko</h3>
                      <p className="text-[17px] opacity-90 mb-8">
                        Dalam 30 hari pertama, ikuti flow ini:
                      </p>

                      <div className="flex items-center justify-center gap-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                          <span className="text-white text-[14px] font-semibold">Start</span>
                        </div>
                        <div className="h-0.5 w-12 bg-white/30"></div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                          <span className="text-white text-[14px] font-semibold">30 Days</span>
                        </div>
                        <div className="h-0.5 w-12 bg-white/30"></div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                          <span className="text-white text-[14px] font-semibold">You Win</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div className="p-10 border-r border-gray-200 relative">
                      <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[12px] font-bold px-3 py-1 rounded-full">
                        BEST OUTCOME
                      </div>
                      <div className="text-center pt-4">
                        <div className="text-7xl mb-4">✓</div>
                        <p className="text-[24px] font-bold text-black mb-3">Hemat 10 Jam/Minggu</p>
                        <div className="bg-green-50 rounded-xl p-4 inline-block">
                          <p className="text-[15px] text-[#1D1D1F]">
                            = 40 jam/bulan<br />
                            Worth <span className="font-bold text-green-600">~Rp 2 juta</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-10 bg-green-50">
                      <div className="text-center">
                        <div className="text-7xl mb-4">💰</div>
                        <p className="text-[24px] font-bold text-black mb-3">Refund + Bonus</p>
                        <div className="bg-white rounded-xl p-4 inline-block border-2 border-green-200">
                          <p className="text-[15px] text-[#1D1D1F]">
                            100% Uang Kembali<br />
                            + <span className="font-bold text-green-600">Rp 500k</span> bonus
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <p className="text-[19px] font-bold mb-1">
                      Apapun yang terjadi, Anda menang.
                    </p>
                    <p className="text-[15px] opacity-90">
                      Kami yang tanggung semua risiko.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variation 5: Clean Premium Look */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Variation 5: Clean Premium</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-green-100">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-16 px-8">
                    <h3 className="text-[42px] font-semibold mb-3">Jaminan Bebas Risiko</h3>
                    <p className="text-[19px] opacity-90">
                      Hemat 10 Jam/Minggu atau Uang Kembali + Rp 500k
                    </p>
                  </div>

                  <div className="p-8 bg-gray-50 border-b border-gray-200">
                    <p className="text-center text-[17px] text-[#86868B]">
                      Dalam 30 hari pertama, salah satu ini pasti terjadi:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                    <div className="p-12">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 font-bold text-xl">1</span>
                          </div>
                          <div>
                            <p className="text-[21px] font-semibold text-black">Hemat 10 Jam/Minggu</p>
                          </div>
                        </div>
                        <div className="pl-16">
                          <div className="space-y-2">
                            <p className="text-[15px] text-[#1D1D1F]">• 40 jam/bulan terselamatkan</p>
                            <p className="text-[15px] text-[#1D1D1F]">• Worth ~Rp 2 juta value</p>
                            <p className="text-[15px] text-[#1D1D1F]">• Fokus grow bisnis</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-12 bg-green-50">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xl">2</span>
                          </div>
                          <div>
                            <p className="text-[21px] font-semibold text-black">Refund + Bonus</p>
                          </div>
                        </div>
                        <div className="pl-16">
                          <div className="space-y-2">
                            <p className="text-[15px] text-[#1D1D1F]">• 100% uang kembali</p>
                            <p className="text-[15px] text-[#1D1D1F]">• + Rp 500k kompensasi</p>
                            <p className="text-[15px] text-[#1D1D1F]">• Tanpa pertanyaan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-10 bg-white">
                    <p className="text-[21px] font-semibold text-black mb-2">
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

          {/* Variation 6: Bold & Confident */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Variation 6: Bold & Confident</h2>
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-6 rounded-xl">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <div className="relative bg-green-600 text-white text-center py-20 px-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-600 to-emerald-700 opacity-90"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-6">
                        <Award className="w-12 h-12 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-[44px] font-bold mb-4">100% Bebas Risiko</h3>
                      <p className="text-[21px] opacity-95 max-w-2xl mx-auto">
                        Hemat 10 Jam/Minggu atau Uang Kembali + Rp 500k
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div className="p-14 border-r border-gray-200">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-2xl mb-6">
                          <span className="text-white font-bold text-3xl">✓</span>
                        </div>
                        <h4 className="text-[28px] font-bold text-black mb-4">
                          10 Jam/Minggu
                        </h4>
                        <p className="text-[17px] text-[#1D1D1F] mb-4">Waktu Terhemat</p>
                        <div className="inline-block bg-green-50 border-2 border-green-200 rounded-xl px-6 py-3">
                          <p className="text-[15px] text-[#1D1D1F]">
                            = <span className="font-bold">40 jam/bulan</span><br />
                            <span className="text-green-600 font-bold">~Rp 2 juta</span> value
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-14 bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-2xl mb-6">
                          <span className="text-white font-bold text-3xl">💰</span>
                        </div>
                        <h4 className="text-[28px] font-bold text-black mb-4">
                          100% Refund
                        </h4>
                        <p className="text-[17px] text-[#1D1D1F] mb-4">+ Bonus Kompensasi</p>
                        <div className="inline-block bg-white border-2 border-green-500 rounded-xl px-6 py-3">
                          <p className="text-[15px] text-[#1D1D1F]">
                            Uang kembali <span className="font-bold">100%</span><br />
                            + Bonus <span className="text-green-600 font-bold">Rp 500k</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-10 bg-black text-white">
                    <p className="text-[21px] font-bold mb-2">
                      Apapun yang terjadi, Anda menang. 🎯
                    </p>
                    <p className="text-[15px] opacity-70">
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
