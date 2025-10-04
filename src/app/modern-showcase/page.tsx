'use client'

import { useState } from 'react'
import {
  CursorFloatingTarget,
  CursorTrail,
  MagneticTarget,
  SplitTextWavy,
  SplitTextScatter,
  LoadingRipple,
  TypewriterNatural,
  TiltCardMicro,
  CardStack,
  AccordionItem,
  MaterialRipple,
  AppleIntelligenceRipple,
  InfiniteLoading,
  NumberCounter
} from '@/components/ui/modern-animations'

export default function ModernShowcase() {
  const [scatterVisible, setScatterVisible] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  return (
    <div className="bg-white min-h-screen">
      <CursorTrail />

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold">Modern UI Animations Showcase 🎨</h1>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-32">

        {/* 1. CURSOR ANIMATIONS */}
        <section>
          <h2 className="text-4xl font-bold mb-4">1. Cursor Animations</h2>
          <p className="text-gray-600 mb-12">Gerakkan mouse Anda untuk lihat efek!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Floating Target */}
            <div className="bg-gray-50 rounded-2xl p-12 min-h-[300px] flex items-center justify-center">
              <CursorFloatingTarget>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Cursor: Floating Target</h3>
                  <p className="text-gray-600">Hover di sini!</p>
                </div>
              </CursorFloatingTarget>
            </div>

            {/* Magnetic Target */}
            <div className="bg-gray-50 rounded-2xl p-12 min-h-[300px] flex items-center justify-center">
              <MagneticTarget>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold">Magnetic Target</h3>
                  <p className="mt-2">Gerakkan mouse di sini!</p>
                </div>
              </MagneticTarget>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 text-white rounded-2xl p-8 text-center">
            <p className="text-sm mb-2">Cursor Trail sudah aktif di seluruh halaman!</p>
            <p className="text-xs text-gray-400">Gerakkan mouse Anda untuk melihat efek trail</p>
          </div>
        </section>

        {/* 2. TEXT & LOADING ANIMATIONS */}
        <section>
          <h2 className="text-4xl font-bold mb-4">2. Text & Loading Animations</h2>
          <p className="text-gray-600 mb-12">Animasi text yang smooth dan engaging</p>

          <div className="space-y-12">
            {/* Split Text Wavy */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12 text-center">
              <p className="text-sm text-gray-600 mb-4">Split Text Wavy</p>
              <SplitTextWavy
                text="Animasi Gelombang Keren!"
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
              />
            </div>

            {/* Split Text Scatter */}
            <div className="bg-gray-50 rounded-2xl p-12 text-center">
              <p className="text-sm text-gray-600 mb-4">Split Text Scatter</p>
              <button
                onClick={() => setScatterVisible(!scatterVisible)}
                className="mb-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800"
              >
                Toggle Scatter
              </button>
              <SplitTextScatter
                text="Text Bertebaran Lalu Menyatu!"
                isVisible={scatterVisible}
                className="text-4xl font-bold"
              />
            </div>

            {/* Loading & Typewriter */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[300px]">
                <p className="text-sm text-gray-600 mb-6">Loading Ripple</p>
                <LoadingRipple />
              </div>

              <div className="bg-gray-50 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[300px]">
                <p className="text-sm text-gray-600 mb-6">Typewriter Natural</p>
                <TypewriterNatural
                  text="Ini text yang diketik secara natural dengan variasi kecepatan..."
                  className="text-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. MICROINTERACTIONS & CARDS */}
        <section>
          <h2 className="text-4xl font-bold mb-4">3. Microinteractions & Cards</h2>
          <p className="text-gray-600 mb-12">Card interactions yang smooth dan modern</p>

          <div className="space-y-12">
            {/* Tilt Card */}
            <div className="bg-gray-50 rounded-2xl p-12">
              <p className="text-sm text-gray-600 mb-6 text-center">Tilt Card - Gerakkan mouse!</p>
              <div className="max-w-md mx-auto">
                <TiltCardMicro>
                  <div className="bg-gradient-to-br from-orange-400 to-pink-600 text-white rounded-2xl p-8">
                    <h3 className="text-3xl font-bold mb-4">3D Tilt Card</h3>
                    <p>Hover untuk lihat efek tilt 3D yang smooth</p>
                  </div>
                </TiltCardMicro>
              </div>
            </div>

            {/* Card Stack */}
            <div className="bg-gray-50 rounded-2xl p-12">
              <p className="text-sm text-gray-600 mb-6 text-center">Card Stack - Click untuk navigate!</p>
              <div className="max-w-md mx-auto">
                <CardStack
                  cards={[
                    { title: 'Card 1', content: 'Ini adalah card pertama. Click card di belakang!' },
                    { title: 'Card 2', content: 'Card kedua dengan konten berbeda' },
                    { title: 'Card 3', content: 'Card terakhir dalam stack' }
                  ]}
                />
              </div>
            </div>

            {/* Accordion */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-sm text-gray-600 mb-6">Smooth Accordion</p>
              {[
                { title: 'Apa itu Automation?', content: 'Automation adalah proses menggunakan teknologi untuk menjalankan tugas repetitif secara otomatis.' },
                { title: 'Berapa lama implementasi?', content: 'Tergantung kompleksitas, biasanya 2-4 minggu dari discovery sampai deployment.' },
                { title: 'Apakah butuh maintenance?', content: 'Ya, kami provide ongoing support dan optimization untuk memastikan automation berjalan optimal.' }
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === index}
                  onToggle={() => setOpenAccordion(openAccordion === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. MATERIAL DESIGN EFFECTS */}
        <section>
          <h2 className="text-4xl font-bold mb-4">4. Material & Apple Design Effects</h2>
          <p className="text-gray-600 mb-12">Inspired by Material Design & Apple</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Material Ripple */}
            <div>
              <p className="text-sm text-gray-600 mb-4">Material Design Ripple</p>
              <MaterialRipple>
                <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
                  <h3 className="text-2xl font-bold">Click Me!</h3>
                  <p className="mt-2">Material Design ripple effect</p>
                </div>
              </MaterialRipple>
            </div>

            {/* Apple Intelligence Ripple */}
            <div className="bg-gray-50 rounded-2xl p-12 flex flex-col items-center justify-center">
              <p className="text-sm text-gray-600 mb-8">Apple Intelligence Ripple</p>
              <AppleIntelligenceRipple />
            </div>
          </div>
        </section>

        {/* 5. TICKER & NUMBER ANIMATIONS */}
        <section>
          <h2 className="text-4xl font-bold mb-4">5. Ticker & Number Animations</h2>
          <p className="text-gray-600 mb-12">Perfect for stats & dynamic content</p>

          <div className="space-y-12">
            {/* Infinite Loading */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-sm text-gray-600 mb-6">Infinite Ticker</p>
              <InfiniteLoading items={['WhatsApp', 'Instagram', 'Email', 'Automation', 'AI', 'n8n']} />
            </div>

            {/* Number Counter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-12 text-center">
                <NumberCounter target={20} />
                <p className="mt-4 text-blue-100">+ jam hemat/minggu</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-12 text-center">
                <NumberCounter target={70} />
                <p className="mt-4 text-purple-100">% biaya turun</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-12 text-center">
                <NumberCounter target={5} />
                <p className="mt-4 text-pink-100">x lebih cepat</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAVORITES */}
        <section className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-16">
          <h2 className="text-4xl font-bold mb-8 text-center">🔥 Top Favorites</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              'Cursor Trail',
              'Split Text Wavy',
              'Tilt Card',
              'Material Ripple',
              'Infinite Loading'
            ].map((name, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                <div className="text-2xl mb-2">⭐</div>
                <div className="text-sm">{name}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-400">
            Bilang nomor section mana yang mau diimplementasikan ke /v3!
          </p>
        </section>
      </div>
    </div>
  )
}
