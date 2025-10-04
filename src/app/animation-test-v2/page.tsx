'use client'

import {
  BlurScaleReveal,
  SplitTextReveal,
  ElasticReveal,
  GradientWipeReveal,
  TypewriterReveal,
  FlipReveal,
  SpotlightTextReveal,
  GlitchReveal,
  ProgressReveal
} from '@/components/ui/scroll-animations-showcase'

export default function AnimationTestV2Page() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold">Animasi Lebih Extreme 🔥 (Pilih Favorit)</h1>
        </div>
      </nav>

      <div className="space-y-32 pb-32">
        {/* OPTION 9: Split Text Reveal */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-4xl text-center">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 9: Split Text Reveal (Characters Explode In)
            </div>
            <SplitTextReveal
              text="Stop Buang Waktu untuk Pekerjaan Ini"
              className="text-[56px] font-bold text-black leading-tight"
            />
            <p className="text-xl text-gray-600 mt-8">
              Setiap huruf "meledak" masuk dari kiri-kanan dengan rotasi. Very dramatic!
            </p>
          </div>
        </section>

        {/* OPTION 10: Elastic Bounce */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
              Option 10: Elastic Bounce (Spring Physics)
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <ElasticReveal key={i} delay={i * 0.15}>
                  <div className="bg-white rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                    <h3 className="text-3xl font-bold text-black">Card {i}</h3>
                  </div>
                </ElasticReveal>
              ))}
            </div>
            <p className="text-xl text-gray-600 mt-8 text-center">
              Bounce dengan spring physics. Playful dan eye-catching!
            </p>
          </div>
        </section>

        {/* OPTION 11: Gradient Wipe */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-4xl text-center">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 11: Gradient Wipe Reveal
            </div>
            <GradientWipeReveal className="text-[64px] font-bold leading-tight">
              <div>Investasi yang ROI-nya</div>
              <div>Terlihat dalam Minggu Pertama</div>
            </GradientWipeReveal>
            <p className="text-xl text-gray-600 mt-8">
              Gradient "menyapu" text dari transparan ke hitam. Smooth dan premium.
            </p>
          </div>
        </section>

        {/* OPTION 12: Typewriter */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl text-center">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 12: Typewriter Effect
            </div>
            <TypewriterReveal
              text="Sistem Otomasi Custom untuk Bisnis Anda"
              className="text-[56px] font-bold text-black leading-tight"
            />
            <p className="text-xl text-gray-600 mt-8">
              Text "diketik" satu-satu dengan cursor. Engaging dan personal.
            </p>
          </div>
        </section>

        {/* OPTION 13: 3D Flip Cards */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-5xl">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
              Option 13: 3D Flip Cards (Perspective)
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { title: 'WhatsApp Automation', desc: 'Auto-reply 24/7' },
                { title: 'Email Workflow', desc: 'Smart sequences' },
                { title: 'Data Integration', desc: 'Real-time sync' }
              ].map((item, i) => (
                <FlipReveal key={i} delay={i * 0.2}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl p-8 h-64 flex flex-col justify-center shadow-2xl">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </FlipReveal>
              ))}
            </div>
            <p className="text-xl text-gray-600 mt-8 text-center">
              Cards "flip" masuk dengan 3D perspective. Very Apple-like!
            </p>
          </div>
        </section>

        {/* OPTION 14: Spotlight Reveal */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-black">
          <div className="max-w-4xl text-center">
            <div className="mb-8 text-sm font-medium text-gray-400 uppercase tracking-wider">
              Option 14: Spotlight Reveal (Circular)
            </div>
            <SpotlightTextReveal
              text="Otomatisasi Apapun yang Bisnis Anda Butuhkan"
              className="text-[56px] font-bold text-white leading-tight"
            />
            <p className="text-xl text-gray-400 mt-8">
              Circular spotlight "mengungkap" text dari tengah. Cinematic!
            </p>
          </div>
        </section>

        {/* OPTION 15: Glitch Effect */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-4xl">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
              Option 15: Glitch Reveal (Tech/Cyber)
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <GlitchReveal key={i} delay={i * 0.3}>
                  <div className="bg-black text-white rounded-2xl p-12 text-center">
                    <h3 className="text-4xl font-bold mb-4">20+ jam</h3>
                    <p className="text-gray-400">Waktu yang dihemat</p>
                  </div>
                </GlitchReveal>
              ))}
            </div>
            <p className="text-xl text-gray-600 mt-8 text-center">
              Glitch effect dengan blur dan color shift. Tech/cyber vibe!
            </p>
          </div>
        </section>

        {/* OPTION 16: Enhanced Progress Reveal */}
        <section className="bg-white">
          <div className="text-center pt-20 px-6 pb-12">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 16: Progress Bar + Card Highlight (Enhanced)
            </div>
          </div>
          <ProgressReveal
            title="Cara Kerja Kami"
            items={[
              {
                title: "01. Discovery Call - Gratis",
                description: "Kami dengar masalah bisnis Anda dalam konsultasi 30 menit. Gratis, no pressure, no commitment."
              },
              {
                title: "02. Custom Build - Tailored",
                description: "Kami bangun sistem otomasi 100% custom sesuai workflow spesifik bisnis Anda. Bukan template."
              },
              {
                title: "03. Deploy & Support - Ongoing",
                description: "Deploy automation, langsung hemat waktu. Support berkelanjutan untuk optimasi."
              }
            ]}
          />
        </section>

        {/* OPTION 6 Enhanced: Blur Scale with Rotation */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
              Option 6+ (Enhanced): Blur Scale with More Intensity
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: '20+', label: 'jam', sublabel: 'Waktu hemat' },
                { num: '70%', label: '', sublabel: 'Biaya turun' },
                { num: '5x', label: '', sublabel: 'Lebih cepat' }
              ].map((item, i) => (
                <BlurScaleReveal key={i} delay={i * 0.2}>
                  <div className="bg-white rounded-3xl p-12 h-80 flex flex-col items-center justify-center shadow-2xl border border-gray-200">
                    <h3 className="text-6xl font-bold text-black mb-2">
                      {item.num}
                      <span className="text-3xl ml-1">{item.label}</span>
                    </h3>
                    <p className="text-gray-600 text-center mt-4">{item.sublabel}</p>
                  </div>
                </BlurScaleReveal>
              ))}
            </div>
            <p className="text-xl text-gray-600 mt-8 text-center">
              Ini option 6 yang lebih intense dengan stats. Premium feeling!
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-5xl text-center">
            <h2 className="text-5xl font-bold text-black mb-8">
              Pilih Favorit Anda 🔥
            </h2>
            <p className="text-2xl text-gray-600 mb-12">
              Scroll ke atas dan bilang nomor option mana yang paling WOW
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                "Split Text (9)",
                "Elastic Bounce (10)",
                "Gradient Wipe (11)",
                "Typewriter (12)",
                "3D Flip (13)",
                "Spotlight (14)",
                "Glitch (15)",
                "Progress Bar (16)"
              ].map((name, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-4xl font-bold mb-2">{i + 9}</div>
                  <div className="text-sm opacity-90">{name}</div>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-500 mt-12">
              Atau bilang "gabungin option X dengan Y" kalau mau kombinasi!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
