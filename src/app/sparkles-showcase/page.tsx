'use client'

import { SparklesSubtle, SparklesFull, SparklesColored } from '@/components/ui/sparkles'

export default function SparklesShowcase() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold">✨ Sparkles Effect Showcase</h1>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Pilih Versi Sparkles</h2>
          <p className="text-xl text-gray-600">
            Hover dan click pada particles untuk interaksi. Pilih yang paling sesuai dengan vibe page Anda!
          </p>
        </section>

        {/* Subtle Version - Recommended for Apple Style */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold">1. Subtle Sparkles ⭐</h3>
              <p className="text-gray-600 mt-2">
                Recommended untuk Apple-style clean design. Soft, minimal, tidak mengganggu message.
              </p>
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              RECOMMENDED
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden" style={{ height: '500px' }}>
            <SparklesSubtle className="absolute inset-0" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Stop Buang Waktu untuk Pekerjaan Ini
                </h2>
                <p className="text-xl text-gray-600">
                  Sistem otomasi custom kami handle semua repetitive task.
                </p>
                <button className="mt-8 bg-[#0071E3] hover:bg-[#0051D5] text-white px-8 py-4 rounded-full font-medium text-lg">
                  Book Discovery Call
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Particle Density</div>
              <div className="text-gray-600">150 (Very Low)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Color</div>
              <div className="text-gray-600">#86868B (Apple Gray)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Size</div>
              <div className="text-gray-600">0.2 - 0.5 (Tiny)</div>
            </div>
          </div>
        </section>

        {/* Full Sparkle Version */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">2. Full Sparkles 🌟</h3>
            <p className="text-gray-600 mt-2">
              Efek penuh seperti di Aceternity. Lebih dramatic, cocok untuk tech/futuristic vibe.
            </p>
          </div>

          <div className="relative bg-black rounded-3xl overflow-hidden" style={{ height: '500px' }}>
            <SparklesFull className="absolute inset-0" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-white mb-6">
                  Otomatisasi Apapun yang Bisnis Anda Butuhkan
                </h2>
                <p className="text-xl text-gray-300">
                  100% custom-built untuk workflow spesifik bisnis Anda.
                </p>
                <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Particle Density</div>
              <div className="text-gray-600">1200 (Very High)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Color</div>
              <div className="text-gray-600">#FFFFFF (White)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Size</div>
              <div className="text-gray-600">0.4 - 1.2 (Medium)</div>
            </div>
          </div>
        </section>

        {/* Colored Version */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">3. Colored Sparkles 💙</h3>
            <p className="text-gray-600 mt-2">
              Apple blue particles. Balance antara subtle dan full, dengan brand color.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden" style={{ height: '500px' }}>
            <SparklesColored className="absolute inset-0" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Investasi yang ROI-nya Terlihat
                </h2>
                <p className="text-xl text-gray-700">
                  One-time fee. Sistem otomasi custom jadi milik Anda selamanya.
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button className="bg-[#0071E3] text-white px-8 py-4 rounded-full font-medium text-lg">
                    Book Call
                  </button>
                  <button className="bg-white text-black border-2 border-gray-300 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Particle Density</div>
              <div className="text-gray-600">500 (Medium)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Color</div>
              <div className="text-gray-600">#0071E3 (Apple Blue)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Size</div>
              <div className="text-gray-600">0.3 - 0.8 (Small)</div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-8 text-center">📊 Quick Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6">Aspect</th>
                  <th className="text-left py-4 px-6">Subtle</th>
                  <th className="text-left py-4 px-6">Full</th>
                  <th className="text-left py-4 px-6">Colored</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Best For</td>
                  <td className="py-4 px-6">Apple-style, Clean UI</td>
                  <td className="py-4 px-6">Tech, Futuristic</td>
                  <td className="py-4 px-6">Branded, Modern</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Performance</td>
                  <td className="py-4 px-6 text-green-400">Excellent ⚡</td>
                  <td className="py-4 px-6 text-yellow-400">Fair ⚠️</td>
                  <td className="py-4 px-6 text-green-400">Good ✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Distraction</td>
                  <td className="py-4 px-6 text-green-400">Minimal</td>
                  <td className="py-4 px-6 text-red-400">High</td>
                  <td className="py-4 px-6 text-yellow-400">Medium</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Recommended?</td>
                  <td className="py-4 px-6 text-green-400">✓ YES</td>
                  <td className="py-4 px-6 text-gray-500">Only if tech vibe</td>
                  <td className="py-4 px-6 text-yellow-400">Maybe</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center mt-8 text-gray-400">
            Bilang "pakai subtle di hero" atau "pakai full" untuk implementasi ke /v3!
          </p>
        </section>

        {/* Tips */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
            <h4 className="font-bold text-blue-900 mb-2">💡 Pro Tip</h4>
            <p className="text-blue-800 text-sm">
              Untuk page yang pain-focused seperti OrchesAI, <strong>Subtle Sparkles</strong> adalah pilihan terbaik.
              Tetap eye-catching tapi tidak distract dari message utama.
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-6">
            <h4 className="font-bold text-purple-900 mb-2">⚡ Performance Note</h4>
            <p className="text-purple-800 text-sm">
              Full Sparkles (1200 particles) bisa lambat di mobile/low-end devices.
              Gunakan hanya jika target audience pakai desktop modern.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
