'use client'

import {
  MeshGradient,
  FloatingOrbs,
  AuroraGradient,
  SubtleGrid,
  NoiseGrain,
  SubtleWaves,
  MinimalDots,
  GlowSpots
} from '@/components/ui/clean-backgrounds'

export default function CleanBackgroundsShowcase() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold">✨ Clean Background Animations - Lebih Subtle dari Sparkles</h1>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Background yang Clean, Tapi Ada Gerakan</h2>
          <p className="text-xl text-gray-600">
            Lebih minimalist dari sparkles. Background ga polos, tapi tetap super clean dan Apple-style.
          </p>
        </section>

        {/* 1. Mesh Gradient */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold">1. Mesh Gradient 🎨</h3>
              <p className="text-gray-600 mt-2">
                Seperti yang Apple pakai. Gradient halus yang bergerak smooth.
              </p>
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              PALING CLEAN
            </div>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ height: '500px' }}>
            <MeshGradient />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Stop Buang Waktu untuk Pekerjaan Ini
                </h2>
                <p className="text-xl text-gray-600">
                  Background bergerak halus, tapi super clean
                </p>
                <button className="mt-8 bg-[#0071E3] hover:bg-[#0051D5] text-white px-8 py-4 rounded-full font-medium text-lg">
                  Book Discovery Call
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Movement</div>
              <div className="text-gray-600">Slow gradient shift</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Distraction</div>
              <div className="text-gray-600">Very Low</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Vibe</div>
              <div className="text-gray-600">Apple Premium</div>
            </div>
          </div>
        </section>

        {/* 2. Floating Orbs */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">2. Floating Orbs 🫧</h3>
            <p className="text-gray-600 mt-2">
              Lingkaran besar yang blur, floating slow di background
            </p>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ height: '500px' }}>
            <FloatingOrbs />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Otomatisasi Apapun yang Bisnis Anda Butuhkan
                </h2>
                <p className="text-xl text-gray-600">
                  Orbs bergerak halus, clean dan modern
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Movement</div>
              <div className="text-gray-600">Slow float</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Distraction</div>
              <div className="text-gray-600">Very Low</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Vibe</div>
              <div className="text-gray-600">Modern, Soft</div>
            </div>
          </div>
        </section>

        {/* 3. Aurora Gradient */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">3. Aurora Gradient 🌌</h3>
            <p className="text-gray-600 mt-2">
              Gradient wave seperti northern lights. Smooth banget.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ height: '500px' }}>
            <AuroraGradient />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Investasi yang ROI-nya Terlihat
                </h2>
                <p className="text-xl text-gray-600">
                  One-time fee. Sistem jadi milik Anda selamanya.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Movement</div>
              <div className="text-gray-600">Wave motion</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Distraction</div>
              <div className="text-gray-600">Low</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Vibe</div>
              <div className="text-gray-600">Premium, Elegant</div>
            </div>
          </div>
        </section>

        {/* 4. Glow Spots */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">4. Glow Spots 💡</h3>
            <p className="text-gray-600 mt-2">
              Large soft glow yang bergerak slow. Super clean.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ height: '500px' }}>
            <GlowSpots />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  100% Custom-Built untuk Workflow Anda
                </h2>
                <p className="text-xl text-gray-600">
                  Bukan template. Built khusus untuk bisnis Anda.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Movement</div>
              <div className="text-gray-600">Very slow</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Distraction</div>
              <div className="text-gray-600">Minimal</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Vibe</div>
              <div className="text-gray-600">Ultra Clean</div>
            </div>
          </div>
        </section>

        {/* 5. Subtle Grid */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">5. Subtle Grid 📐</h3>
            <p className="text-gray-600 mt-2">
              Grid lines yang fade in/out. Techy tapi tetap clean.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ height: '500px' }}>
            <SubtleGrid />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Hemat 20+ Jam Per Minggu
                </h2>
                <p className="text-xl text-gray-600">
                  Otomasi repetitive tasks, fokus ke growth
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Movement</div>
              <div className="text-gray-600">Pulse fade</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Distraction</div>
              <div className="text-gray-600">Very Low</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Vibe</div>
              <div className="text-gray-600">Tech, Structured</div>
            </div>
          </div>
        </section>

        {/* 6. Subtle Waves */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">6. Subtle Waves 🌊</h3>
            <p className="text-gray-600 mt-2">
              Wave pattern yang gentle. Calming dan clean.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ height: '500px' }}>
            <SubtleWaves />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Automation yang Langsung Terasa Impact-nya
                </h2>
                <p className="text-xl text-gray-600">
                  ROI terlihat dari minggu pertama
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Movement</div>
              <div className="text-gray-600">Gentle wave</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Distraction</div>
              <div className="text-gray-600">Very Low</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Vibe</div>
              <div className="text-gray-600">Calm, Premium</div>
            </div>
          </div>
        </section>

        {/* 7. Minimal Dots */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">7. Minimal Dots ⚪</h3>
            <p className="text-gray-600 mt-2">
              Lebih clean dari sparkles - fewer, larger dots
            </p>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ height: '500px' }}>
            <MinimalDots />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Free Discovery Call 30 Menit
                </h2>
                <p className="text-xl text-gray-600">
                  No pressure, no commitment. Cuma ngobrol.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Movement</div>
              <div className="text-gray-600">Pulse scale</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Distraction</div>
              <div className="text-gray-600">Very Low</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Vibe</div>
              <div className="text-gray-600">Minimal, Clean</div>
            </div>
          </div>
        </section>

        {/* 8. Noise Grain */}
        <section className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold">8. Noise Grain 🎞️</h3>
            <p className="text-gray-600 mt-2">
              Film grain effect. Subtle texture yang bergerak.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ height: '500px' }}>
            <NoiseGrain />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-2xl px-6">
                <h2 className="text-6xl font-bold text-black mb-6">
                  Potong Biaya Operasional 70%
                </h2>
                <p className="text-xl text-gray-600">
                  Scale tanpa nambah headcount
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Movement</div>
              <div className="text-gray-600">Grain shift</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Distraction</div>
              <div className="text-gray-600">Very Low</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold mb-1">Vibe</div>
              <div className="text-gray-600">Film, Artistic</div>
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
                  <th className="text-left py-4 px-6">Background</th>
                  <th className="text-left py-4 px-6">Vibe</th>
                  <th className="text-left py-4 px-6">Clean Level</th>
                  <th className="text-left py-4 px-6">Recommended?</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Mesh Gradient</td>
                  <td className="py-4 px-6">Apple Premium</td>
                  <td className="py-4 px-6 text-green-400">Excellent ⭐⭐⭐</td>
                  <td className="py-4 px-6 text-green-400">✓ YES</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Floating Orbs</td>
                  <td className="py-4 px-6">Modern, Soft</td>
                  <td className="py-4 px-6 text-green-400">Excellent ⭐⭐⭐</td>
                  <td className="py-4 px-6 text-green-400">✓ YES</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Aurora Gradient</td>
                  <td className="py-4 px-6">Elegant</td>
                  <td className="py-4 px-6 text-green-400">Very Good ⭐⭐</td>
                  <td className="py-4 px-6 text-yellow-400">Maybe</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Glow Spots</td>
                  <td className="py-4 px-6">Ultra Clean</td>
                  <td className="py-4 px-6 text-green-400">Excellent ⭐⭐⭐</td>
                  <td className="py-4 px-6 text-green-400">✓ YES</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Subtle Grid</td>
                  <td className="py-4 px-6">Tech, Structured</td>
                  <td className="py-4 px-6 text-yellow-400">Good ⭐</td>
                  <td className="py-4 px-6 text-gray-500">If tech vibe</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Subtle Waves</td>
                  <td className="py-4 px-6">Calm, Premium</td>
                  <td className="py-4 px-6 text-green-400">Very Good ⭐⭐</td>
                  <td className="py-4 px-6 text-yellow-400">Maybe</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-semibold">Minimal Dots</td>
                  <td className="py-4 px-6">Minimal</td>
                  <td className="py-4 px-6 text-green-400">Very Good ⭐⭐</td>
                  <td className="py-4 px-6 text-yellow-400">Maybe</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Noise Grain</td>
                  <td className="py-4 px-6">Artistic</td>
                  <td className="py-4 px-6 text-yellow-400">Good ⭐</td>
                  <td className="py-4 px-6 text-gray-500">For specific brands</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center mt-8 text-gray-400">
            Top 3 Recommendations: Mesh Gradient, Floating Orbs, Glow Spots
          </p>
        </section>

        {/* Final Recommendation */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
            <h4 className="font-bold text-blue-900 mb-2">💡 Pro Tip</h4>
            <p className="text-blue-800 text-sm">
              <strong>Mesh Gradient</strong> adalah pilihan paling safe. Seperti yang Apple pakai, clean banget,
              tapi tetap ada depth. Perfect untuk pain-focused messaging.
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-6">
            <h4 className="font-bold text-purple-900 mb-2">⚡ Alternative</h4>
            <p className="text-purple-800 text-sm">
              Kalau mau yang lebih playful tapi tetap clean, <strong>Floating Orbs</strong> atau <strong>Glow Spots</strong>
              adalah pilihan bagus. Modern dan soft.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
