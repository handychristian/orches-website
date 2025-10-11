'use client'

import {
  ContainerScroll3D,
  LetterReveal,
  ParallaxLayers,
  ClipPathReveal,
  StickyScrollReveal,
  BlurScaleReveal,
  MagneticScroll,
  WaveText
} from '@/components/ui/scroll-animations-showcase'

export default function AnimationTestPage() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold">Pilih Animasi Favorit Anda 👇</h1>
        </div>
      </nav>

      <div className="space-y-32 pb-32">
        {/* OPTION 1: Letter by Letter Reveal */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-4xl text-center">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 1: Letter by Letter Reveal (3D Rotation)
            </div>
            <LetterReveal
              text="Stop Buang Waktu untuk Pekerjaan Ini"
              className="text-[56px] font-bold text-black leading-tight"
            />
            <p className="text-xl text-gray-600 mt-8">
              Setiap huruf muncul dengan rotasi 3D. Efek dramatic dan eye-catching.
            </p>
          </div>
        </section>

        {/* OPTION 2: Wave Text */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl text-center">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 2: Wave Text (Bouncy Words)
            </div>
            <WaveText
              text="Investasi yang ROI-nya Terlihat dalam Minggu Pertama"
              className="text-[56px] font-bold text-black leading-tight"
            />
            <p className="text-xl text-gray-600 mt-8">
              Setiap kata "melambung" masuk seperti gelombang. Smooth dan playful.
            </p>
          </div>
        </section>

        {/* OPTION 3: Clip Path Reveal */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-4xl text-center">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 3: Clip Path Reveal (Wipe Effect)
            </div>
            <ClipPathReveal className="text-[56px] font-bold text-black leading-tight">
              Sistem Otomasi Custom untuk Bisnis Anda
            </ClipPathReveal>
            <p className="text-xl text-gray-600 mt-8">
              Text "terungkap" dari atas ke bawah seperti curtain. Clean dan modern.
            </p>
          </div>
        </section>

        {/* OPTION 4: 3D Container Scroll */}
        <section className="bg-[#F5F5F7]">
          <div className="text-center pt-20 px-6">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 4: 3D Container Scroll (Like Aceternity)
            </div>
          </div>
          <ContainerScroll3D>
            <div className="bg-white rounded-3xl p-16 shadow-2xl">
              <h2 className="text-5xl font-bold text-black mb-6">
                Otomatisasi Apapun yang Bisnis Anda Butuhkan
              </h2>
              <p className="text-2xl text-gray-600">
                Seluruh card berputar dalam 3D saat scroll. Very Apple-like.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="bg-gray-100 rounded-2xl p-6 h-40"></div>
                <div className="bg-gray-100 rounded-2xl p-6 h-40"></div>
                <div className="bg-gray-100 rounded-2xl p-6 h-40"></div>
              </div>
            </div>
          </ContainerScroll3D>
        </section>

        {/* OPTION 5: Parallax Layers */}
        <section className="min-h-screen bg-white px-6 py-20">
          <div className="text-center mb-16">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 5: Parallax Layers (Multi-Depth)
            </div>
          </div>
          <ParallaxLayers>
            <div className="text-center py-12">
              <h2 className="text-6xl font-bold text-black/20">Background Layer</h2>
            </div>
            <div className="text-center py-12">
              <h2 className="text-5xl font-bold text-black/50">Middle Layer</h2>
            </div>
            <div className="text-center py-12">
              <h2 className="text-4xl font-bold text-black">Front Layer (Fastest)</h2>
              <p className="text-xl text-gray-600 mt-4">
                Setiap layer bergerak dengan kecepatan berbeda, menciptakan depth.
              </p>
            </div>
          </ParallaxLayers>
        </section>

        {/* OPTION 6: Blur + Scale Reveal */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
              Option 6: Blur + Scale Reveal
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <BlurScaleReveal key={i} delay={i * 0.2}>
                  <div className="bg-white rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                    <h3 className="text-2xl font-bold text-black">Card {i}</h3>
                  </div>
                </BlurScaleReveal>
              ))}
            </div>
            <p className="text-xl text-gray-600 mt-8 text-center">
              Muncul dari blur dan scale kecil. Cinematic dan premium feeling.
            </p>
          </div>
        </section>

        {/* OPTION 7: Magnetic Scroll */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-4xl text-center">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 7: Magnetic Scroll (Interactive)
            </div>
            <MagneticScroll>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-16 text-white shadow-2xl">
                <h2 className="text-5xl font-bold mb-6">Gerakkan Mouse Anda</h2>
                <p className="text-2xl opacity-90">
                  Element ini "mengikuti" cursor dengan smooth spring animation.
                </p>
              </div>
            </MagneticScroll>
            <p className="text-xl text-gray-600 mt-8">
              Interactive dan fun. Membuat user engage lebih lama.
            </p>
          </div>
        </section>

        {/* OPTION 8: Sticky Scroll with Progress */}
        <section className="bg-[#F5F5F7]">
          <div className="text-center pt-20 px-6 pb-12">
            <div className="mb-8 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Option 8: Sticky Scroll with Progress Reveal
            </div>
          </div>
          <StickyScrollReveal
            title="Cara Kerja Kami"
            items={[
              {
                heading: "01. Discovery Call",
                content: "Kami dengar masalah bisnis Anda dalam konsultasi 30 menit."
              },
              {
                heading: "02. Custom Build",
                content: "Kami bangun sistem otomasi sesuai kebutuhan spesifik Anda."
              },
              {
                heading: "03. Deploy & Support",
                content: "Deploy automation, langsung hemat waktu. Support berkelanjutan."
              }
            ]}
          />
        </section>

        {/* Summary */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-white">
          <div className="max-w-4xl text-center">
            <h2 className="text-5xl font-bold text-black mb-8">
              Pilih Favorit Anda
            </h2>
            <p className="text-2xl text-gray-600 mb-12">
              Scroll ke atas dan screenshot atau bilang nomor mana yang paling "WOW"
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                "Letter Reveal",
                "Wave Text",
                "Clip Path",
                "3D Container",
                "Parallax",
                "Blur Scale",
                "Magnetic",
                "Sticky Progress"
              ].map((name, i) => (
                <div key={i} className="bg-gray-100 rounded-xl p-4">
                  <div className="text-3xl font-bold text-black mb-2">{i + 1}</div>
                  <div className="text-sm text-gray-600">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
