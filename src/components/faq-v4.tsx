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

export default function FAQV4() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Apa bedanya integrated automation vs chatbot biasa?',
      answer: 'Chatbot biasa cuma handle chat auto-reply. Integrated automation connect semua tools bisnis Anda jadi 1 system otomatis. Contoh: Customer order via WA → Auto-create invoice → Owner approve via WA 1-click → Auto-update inventory & accounting → Auto-send receipt → Update CRM. Semua connected, zero manual work. Chatbot cuma 1 bagian kecil dari automation.'
    },
    {
      question: 'Apakah saya perlu technical knowledge untuk menggunakan automation?',
      answer: 'Tidak sama sekali. Kami buat semuanya untuk Anda. Setelah automation selesai, Anda hanya perlu menggunakan aplikasi yang sudah familiar (WhatsApp, Email, dll) seperti biasa. Automation bekerja di latar belakang. Kami sediakan training dan dokumentasi lengkap untuk tim Anda.'
    },
    {
      question: 'Berapa biaya totalnya?',
      answer: 'Investment terdiri dari 3 komponen: (1) One-time development fee starting from Rp 1 juta (tergantung complexity & jumlah integrations), (2) Hosting Rp 300k-700k/bulan (tergantung usage), (3) Maintenance & Support Rp 500k/bulan (untuk bug fixes, updates & support). Jauh lebih hemat dibanding hire admin staff yang biayanya bisa Rp 5-7 juta/bulan.'
    },
    {
      question: 'Berapa lama implementasi?',
      answer: 'Implementasi 2-3 minggu dari discovery call sampai sistem live. Simple automation bisa lebih cepat (1 minggu). Anda mulai lihat hasil dalam minggu pertama. Proses: Discovery call → Proposal & payment → Development → Testing → Training → Go-live.'
    },
    {
      question: 'Bagaimana kalau sistemnya error atau butuh update?',
      answer: 'Semua package include Maintenance & Support plan (Rp 500k/bulan) yang cover: bug fixes, minor updates, email support (48 jam response), monthly health check, dan 1 jam/bulan consultation. Jadi kalau ada error atau butuh update, kami yang handle. Anda tinggal lapor, kami fix.'
    },
    {
      question: 'Tools apa aja yang bisa diintegrasikan?',
      answer: 'Hampir semua tools modern: WhatsApp Business API, Instagram, Telegram, Email, Google Sheets, Google Docs, Google Drive, Google Workspace, Airtable, Notion, CRM (HubSpot, Salesforce), accounting software (Accurate, Jurnal, QuickBooks), payment gateways (Midtrans, Xendit), e-commerce platforms (Shopee, Tokopedia, Shopify), dan 400+ tools lainnya. Kalau tools Anda punya API atau webhook, kami bisa connect.'
    },
    {
      question: 'Apakah data saya aman?',
      answer: 'Ya, 100% aman. Kami tidak store data bisnis Anda. Automation berjalan di n8n cloud instance dengan encryption. Kami hanya access saat development dengan permission Anda. Setelah selesai, Anda punya full control. Semua credentials disimpan securely dan encrypted. Compliance dengan standar security internasional.'
    },
    {
      question: 'Bagaimana kalau saya mau ganti atau tambah fitur nanti?',
      answer: 'Sangat fleksibel. Anda bisa request update kapan saja. Minor changes (tweak workflow, tambah 1-2 step) biasanya gratis dan masuk dalam maintenance plan. Major changes (tambah integration baru, workflow kompleks baru) akan ada biaya tambahan sesuai scope. Kami kasih perkiraan dulu sebelum mulai kerjakan.'
    }
  ]

  return (
    <section id="faq" className="w-full bg-white py-24">
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
              Questions?
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Yang sering ditanyakan tentang integrated automation
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
            href="https://wa.me/6285161912446"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105"
          >
            Book Free Discovery Call
          </a>
          <p className="text-sm text-gray-500 mt-4">
            30 menit • Gratis • No pressure
          </p>
        </motion.div>
      </div>
    </section>
  )
}
