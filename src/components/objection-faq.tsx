'use client'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { CheckCircle2 } from 'lucide-react'

const objections = [
  {
    question: 'Apakah ini cocok untuk bisnis saya?',
    answer: 'Jika bisnis Anda punya pekerjaan repetitif (copy-paste data, kirim pesan berulang, update manual), automation cocok untuk Anda. Kami sudah bantu 50+ bisnis dari berbagai industri.'
  },
  {
    question: 'Saya tidak tech-savvy, apa bisa?',
    answer: 'Tenang! Anda tidak perlu mengerti teknis sama sekali. Kami yang handle semua setup, integration, dan training. Anda tinggal pakai.'
  },
  {
    question: 'Berapa lama implementasi?',
    answer: '2-3 minggu dari discovery call sampai sistem jalan. Simple automation bisa lebih cepat (1 minggu).'
  },
  {
    question: 'Kalau sistemnya rusak/error gimana?',
    answer: '30-day warranty gratis. Setelah itu, pilih maintenance plan (starting Rp 500k/bulan) untuk ongoing support. Atau handle sendiri (kami kasih dokumentasi lengkap).'
  }
]

export default function ObjectionFAQ() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <h3 className="text-[32px] font-semibold text-black mb-3 tracking-tight">
              Masih ragu?
            </h3>
            <p className="text-[17px] text-[#86868B]">
              Pertanyaan yang sering ditanyakan
            </p>
          </ScrollReveal>
        </div>

        {/* Objections Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {objections.map((obj, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0071E3] transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <h4 className="text-[17px] font-semibold text-black">
                    {obj.question}
                  </h4>
                </div>
                <p className="text-[15px] text-[#1D1D1F] leading-relaxed pl-8">
                  {obj.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-[17px] text-[#86868B] mb-4">
              Punya pertanyaan lain?
            </p>
            <a
              href="https://wa.me/6285161912446"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#0071E3] hover:text-[#0051D5] font-semibold text-[15px] transition-colors"
            >
              Chat dengan kami →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
