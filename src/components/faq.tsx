'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2 rounded-lg"
      >
        <span className="text-xl font-semibold text-gray-900 pr-8">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-gray-600 flex-shrink-0"
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 text-lg leading-relaxed px-2">{answer}</p>
      </motion.div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Apa itu automation dan bagaimana cara kerjanya?',
      answer: 'Automation adalah proses menggunakan teknologi untuk menjalankan tugas repetitif secara otomatis tanpa intervensi manual. Kami menggunakan n8n untuk menghubungkan berbagai tools yang Anda gunakan (WhatsApp, Email, Google Sheets, CRM, dll) dan membuat workflow otomatis. Contoh: order masuk dari WhatsApp → otomatis update inventory di Google Sheets → kirim konfirmasi ke customer → update accounting software.'
    },
    {
      question: 'Berapa lama waktu implementasi automation?',
      answer: 'Tergantung kompleksitas workflow yang Anda butuhkan. Untuk automation sederhana (3-5 steps), biasanya 1-2 minggu. Untuk yang lebih kompleks seperti multi-bot WhatsApp system, sekitar 3-4 minggu dari discovery call sampai deployment. Kami akan memberikan timeline yang jelas setelah discovery call pertama.'
    },
    {
      question: 'Apakah saya perlu technical knowledge untuk menggunakan automation?',
      answer: 'Tidak sama sekali. Kami build everything untuk Anda. Setelah automation selesai, Anda hanya perlu menggunakan tools yang sudah familiar (WhatsApp, Email, dll) seperti biasa. Automation bekerja di background tanpa Anda harus coding atau setup apapun. Kami juga provide dokumentasi dan training singkat.'
    },
    {
      question: 'Berapa biaya untuk automation? Apakah ada subscription bulanan?',
      answer: 'Kami charge one-time fee berdasarkan kompleksitas automation yang dibangun. Tidak ada subscription bulanan ke kami. Yang Anda bayar hanya: (1) One-time development fee ke OrchesAI, dan (2) biaya n8n hosting sekitar $20-50/bulan tergantung usage. Sistem automation jadi milik Anda selamanya.'
    },
    {
      question: 'Tools apa saja yang bisa diintegrasikan?',
      answer: 'Hampir semua tools modern bisa diintegrasikan: WhatsApp, Instagram, Telegram, Email, Google Sheets, Airtable, Notion, semua CRM (Salesforce, HubSpot, dll), accounting software (Accurate, Jurnal, QuickBooks), payment gateways (Midtrans, Xendit), database (MySQL, PostgreSQL, MongoDB), dan 400+ tools lainnya. Kalau tools Anda punya API atau webhook, kami bisa integrasikan.'
    },
    {
      question: 'Bagaimana kalau automation saya error atau butuh update?',
      answer: 'Kami provide 30 hari warranty setelah deployment. Kalau ada bug atau error dalam 30 hari, kami fix gratis. Setelah itu, Anda bisa pakai maintenance package kami (optional) atau handle sendiri - karena automation code jadi milik Anda, Anda bisa hire developer lain atau kembali ke kami untuk update. We stay flexible.'
    },
    {
      question: 'Apakah data bisnis saya aman?',
      answer: 'Yes. Kami tidak store data bisnis Anda di server kami. Automation berjalan di n8n instance Anda sendiri (self-hosted atau cloud instance milik Anda). Kami hanya access saat development dan troubleshooting (dengan permission Anda). Semua credentials disimpan securely di environment variables dan encrypted.'
    },
    {
      question: 'Saya bukan tech company, apakah automation cocok untuk saya?',
      answer: 'Justru automation paling powerful untuk non-tech businesses! Contoh clients kami: toko bangunan, klinik kecantikan, laundry, catering, distributor. Mereka tidak punya tech team, tapi save 20+ jam per minggu dengan automation. Kalau bisnis Anda punya pekerjaan repetitif (data entry, follow-up customer, invoice, laporan), automation cocok untuk Anda.'
    }
  ]

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Pertanyaan yang sering ditanyakan tentang automation
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Masih ada pertanyaan? Kami siap jawab di discovery call.
          </p>
          <a
            href="#book-discovery-call"
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105"
          >
            Book Free Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
