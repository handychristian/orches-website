'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  FileText,
  MessageSquare,
  TrendingUp,
  Share2,
  Package,
  Calculator,
  Mail,
  Calendar,
  Target,
  Receipt,
  ClipboardCheck,
  Truck,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

// Automation solutions data
const automationSolutions = [
  {
    id: 1,
    title: 'Otomasi Pertanyaan Pelanggan',
    subtitle: 'Sistem Respons Cerdas',
    icon: MessageSquare,
    description: 'Balas pertanyaan pelanggan otomatis lewat WhatsApp, email, dan chat dengan AI yang cerdas.',
    features: [
      'Deteksi otomatis jenis pertanyaan (produk, harga, bantuan)',
      'Ambil data real-time dari inventory & CRM',
      'Buat jawaban personal secara instan',
      'Kirim ke manusia kalau terlalu kompleks',
      'Belajar dari percakapan sebelumnya'
    ],
    handles: [
      'Pertanyaan stok produk',
      'Pertanyaan harga & diskon',
      'Troubleshooting dasar',
      'Status & tracking pesanan',
      'Jam buka & lokasi toko'
    ],
    autoHandled: '80%',
    monthlySaving: 'Rp 15 JUTA',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Otomasi Input Data',
    subtitle: 'Proses Dokumen Otomatis',
    icon: FileText,
    description: 'Ambil data dari invoice, nota, dan dokumen otomatis. Gak perlu ketik manual lagi - AI yang baca dan input semuanya.',
    features: [
      'Scan invoice/nota pakai kamera HP',
      'AI ekstrak vendor, jumlah, tanggal, item',
      'Auto-isi software accounting',
      'Validasi dengan purchase order',
      'Tandai kalau ada yang ganjil'
    ],
    handles: [
      'Invoice & nota supplier',
      'Rekonsiliasi rekening bank',
      'Matching purchase order',
      'Kategorisasi pengeluaran',
      'Konversi multi-currency'
    ],
    timeBefore: '2 menit/dokumen × 200/hari = 6.7 jam sehari',
    timeAfter: '10 detik/dokumen × 200/hari = 33 menit sehari',
    timeSaved: '6.2 jam sehari',
    monthlySaving: 'Rp 15 JUTA',
    dailySaving: 'Rp 500 ribu/hari',
    autoHandled: '95%',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Price Monitoring Automation',
    subtitle: 'Smart Competitor Tracking',
    icon: TrendingUp,
    timeBefore: '45 min/day × 30 days = 22.5 hours monthly',
    timeAfter: '5 min/day × 30 days = 2.5 hours monthly',
    timeSaved: '20 hours monthly',
    monthlySaving: 'Rp 26.6 MILLION',
    extraValue: 'Rp 25M extra revenue',
    autoHandled: '80%',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Social Media Management',
    subtitle: 'Content Optimization Engine',
    icon: Share2,
    timeBefore: '2 hours/day × 30 days = 60 hours monthly',
    timeAfter: '30 min/day × 30 days = 15 hours monthly',
    timeSaved: '45 hours monthly',
    monthlySaving: 'Rp 3.6 MILLION',
    extraValue: '30% better engagement',
    autoHandled: '80%',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Otomasi Restock Inventory',
    subtitle: 'Manajemen Stok Cerdas',
    icon: Package,
    description: 'Gak akan kehabisan stok lagi. AI prediksi demand dan otomatis order ulang sebelum stok habis.',
    features: [
      'Track kecepatan penjualan per produk',
      'Prediksi tanggal stok habis pakai AI',
      'Auto-buat purchase order',
      'Kirim ke supplier via WhatsApp/email',
      'Perhitungkan lead time & musiman'
    ],
    handles: [
      'Reorder produk fast-moving',
      'Lonjakan demand musiman',
      'Inventory multi-lokasi',
      'Tracking lead time supplier',
      'Optimasi minimum order quantity'
    ],
    timeBefore: '3 jam/hari × 30 hari = 90 jam per bulan',
    timeAfter: '30 menit/hari × 30 hari = 15 jam per bulan',
    timeSaved: '75 jam per bulan',
    monthlySaving: 'Rp 26 JUTA',
    extraValue: 'Cegah kehilangan Rp 20 juta',
    autoHandled: '90%',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Otomasi Rekonsiliasi Keuangan',
    subtitle: 'Accounting Otomatis Cerdas',
    icon: Calculator,
    description: 'Cocokkan transaksi bank dengan invoice otomatis. Gak perlu rekonsiliasi manual lagi - AI yang handle semua matching.',
    features: [
      'Auto-ambil transaksi bank setiap hari',
      'Cocokkan dengan invoice & nota',
      'Kategorisasi pengeluaran otomatis',
      'Tandai transaksi duplikat atau mencurigakan',
      'Buat laporan rekonsiliasi otomatis'
    ],
    handles: [
      'Rekonsiliasi rekening bank',
      'Matching statement kartu kredit',
      'Tracking petty cash',
      'Transfer antar rekening',
      'Penyesuaian foreign currency'
    ],
    timeBefore: '4 jam/hari × 22 hari = 88 jam per bulan',
    timeAfter: '1 jam/hari × 22 hari = 22 jam per bulan',
    timeSaved: '66 jam per bulan',
    monthlySaving: 'Rp 5.3 JUTA',
    extraValue: 'Kurangi error 95%',
    autoHandled: '92%',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 7,
    title: 'Email Marketing Automation',
    subtitle: 'Smart Campaign Optimizer',
    icon: Mail,
    description: 'Send personalized emails to thousands automatically. AI writes content, picks best timing, and follows up with leads.',
    features: [
      'Segment customers by behavior',
      'AI writes personalized subject lines',
      'Schedule sends at optimal times',
      'Auto-follow-up with non-openers',
      'A/B test and learn from results'
    ],
    handles: [
      'Welcome email sequences',
      'Abandoned cart recovery',
      'Re-engagement campaigns',
      'Product launch announcements',
      'Birthday & anniversary offers'
    ],
    timeBefore: '3 hours/day × 30 days = 90 hours monthly',
    timeAfter: '45 min/day × 30 days = 22.5 hours monthly',
    timeSaved: '67.5 hours monthly',
    monthlySaving: 'Rp 35.4 MILLION',
    extraValue: 'Rp 30M extra revenue',
    autoHandled: '88%',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 8,
    title: 'Otomasi Jadwal Appointment',
    subtitle: 'Manajemen Kalender Cerdas',
    icon: Calendar,
    description: 'Biarkan customer booking appointment 24/7 otomatis. AI yang handle jadwal, reminder, dan reschedule tanpa staff terlibat.',
    features: [
      'Share link booking via WhatsApp/web',
      'AI cek ketersediaan staff',
      'Auto-kirim konfirmasi & reminder',
      'Handle permintaan reschedule',
      'Sinkron dengan Google/Outlook calendar'
    ],
    handles: [
      'Booking appointment baru',
      'Permintaan reschedule',
      'Manajemen pembatalan',
      'Kirim reminder (H-1)',
      'Follow-up customer yang no-show'
    ],
    timeBefore: '2 jam/hari × 22 hari = 44 jam per bulan',
    timeAfter: '20 menit/hari × 22 hari = 7.3 jam per bulan',
    timeSaved: '36.7 jam per bulan',
    monthlySaving: 'Rp 17.9 JUTA',
    extraValue: 'Pulihkan revenue Rp 15 juta',
    autoHandled: '93%',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 9,
    title: 'Lead Qualification',
    subtitle: 'Smart Prospect Scoring',
    icon: Target,
    timeBefore: '4 hours/day × 22 days = 88 hours monthly',
    timeAfter: '1 hour/day × 22 days = 22 hours monthly',
    timeSaved: '66 hours monthly',
    monthlySaving: 'Rp 5.3 MILLION',
    extraValue: '50% higher conversion',
    autoHandled: '80%',
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 10,
    title: 'Otomasi Tracking Pengeluaran',
    subtitle: 'Manajemen Nota Cerdas',
    icon: Receipt,
    description: 'Foto nota aja dan AI otomatis kategorisasi, tracking, dan siapkan laporan pajak. Gak akan kehilangan nota lagi.',
    features: [
      'Foto nota pakai kamera HP',
      'AI ekstrak jumlah, vendor, kategori',
      'Auto-kategorisasi untuk tax deduction',
      'Track vs budget departemen',
      'Buat expense report instan'
    ],
    handles: [
      'Nota makan bisnis',
      'Biaya transport & travel',
      'Pembelian office supply',
      'Biaya entertain klien',
      'Subscription equipment & software'
    ],
    timeBefore: '1.5 jam/hari × 22 hari = 33 jam per bulan',
    timeAfter: '15 menit/hari × 22 hari = 5.5 jam per bulan',
    timeSaved: '27.5 jam per bulan',
    monthlySaving: 'Rp 2.9 JUTA',
    extraValue: 'Hemat pajak Rp 8 juta/tahun',
    autoHandled: '91%',
    color: 'from-lime-500 to-green-500'
  },
  {
    id: 11,
    title: 'Quality Control Automation',
    subtitle: 'Smart Defect Detection',
    icon: ClipboardCheck,
    timeBefore: '6 hours/day × 22 days = 132 hours monthly',
    timeAfter: '1.5 hours/day × 22 days = 33 hours monthly',
    timeSaved: '99 hours monthly',
    monthlySaving: 'Rp 47.9 MILLION',
    extraValue: 'Prevent Rp 40M losses',
    autoHandled: '80%',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 12,
    title: 'Supply Chain Monitoring',
    subtitle: 'Smart Vendor Management',
    icon: Truck,
    timeBefore: '2.5 hours/day × 22 days = 55 hours monthly',
    timeAfter: '30 min/day × 22 days = 11 hours monthly',
    timeSaved: '44 hours monthly',
    monthlySaving: 'Rp 23.5 MILLION',
    extraValue: 'Prevent Rp 20M losses',
    autoHandled: '80%',
    color: 'from-cyan-600 to-blue-600'
  }
]

export default function AutomationShowcase() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-[980px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-7xl font-semibold mb-6 text-gray-900 tracking-tight leading-[1.05]">
            Otomasi bisnis Anda.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Hemat ratusan jam kerja dan jutaan rupiah dengan AI.
          </p>
        </motion.div>

        {/* Automation Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[automationSolutions[0], automationSolutions[1], automationSolutions[4], automationSolutions[5], automationSolutions[7], automationSolutions[9]].map((solution, index) => {
            const Icon = solution.icon
            const isExpanded = expandedCard === solution.id

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Image Placeholder */}
                <div className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${solution.color} mb-6 overflow-hidden cursor-pointer`}
                  onClick={() => toggleCard(solution.id)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-24 h-24 text-white/30" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                    Workflow Image Placeholder
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1 tracking-tight">
                      {solution.title}
                    </h3>
                    <p className="text-base text-gray-500 font-light">
                      {solution.subtitle}
                    </p>
                  </div>

                  {solution.description && (
                    <p className="text-base text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  )}

                  {!isExpanded && solution.features && solution.features.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Cara kerjanya:</p>
                      <ul className="space-y-1.5">
                        {solution.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!isExpanded && solution.handles && solution.handles.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-900 mb-2">
                        Tangani {solution.autoHandled} otomatis:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.handles.slice(0, 3).map((item, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-6 pt-4 border-t border-gray-100">
                          {/* Time Comparison */}
                          {solution.timeBefore && (
                            <div className="bg-gray-50 rounded-xl p-5">
                              <h4 className="text-sm font-semibold text-gray-900 mb-3">Perbandingan Waktu</h4>
                              <div className="space-y-2">
                                <div className="flex items-start">
                                  <span className="text-red-600 font-medium text-xs mr-2">Sebelum:</span>
                                  <span className="text-sm text-gray-600">{solution.timeBefore}</span>
                                </div>
                                <div className="flex items-start">
                                  <span className="text-green-600 font-medium text-xs mr-2">Sesudah:</span>
                                  <span className="text-sm text-gray-600">{solution.timeAfter}</span>
                                </div>
                                <div className="flex items-start pt-2 border-t border-gray-200">
                                  <span className="text-blue-600 font-semibold text-xs mr-2">Hemat:</span>
                                  <span className="text-sm font-medium text-gray-900">{solution.timeSaved}</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Financial Impact */}
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Dampak Finansial</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Hemat Per Bulan</span>
                                <span className="text-base font-semibold text-blue-600">{solution.monthlySaving}</span>
                              </div>
                              {solution.dailySaving && (
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600">Hemat Per Hari</span>
                                  <span className="text-sm font-medium text-gray-900">{solution.dailySaving}</span>
                                </div>
                              )}
                              {solution.extraValue && (
                                <div className="flex justify-between items-center pt-2 border-t border-blue-100">
                                  <span className="text-sm text-gray-600">Nilai Tambahan</span>
                                  <span className="text-sm font-medium text-green-600">{solution.extraValue}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* AI Edge Cases (if available) */}
                          {solution.handles && solution.handles.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                Tangani {solution.autoHandled} otomatis:
                              </h4>
                              <div className="space-y-2">
                                {solution.handles.map((item, idx) => (
                                  <div key={idx} className="flex items-start bg-gray-50 rounded-lg p-3">
                                    <span className="text-green-600 mr-2 mt-0.5">✓</span>
                                    <span className="text-sm text-gray-700">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleCard(solution.id)}
                      className="text-blue-600 font-medium text-sm flex items-center hover:translate-x-1 transition-transform"
                    >
                      {isExpanded ? (
                        <>
                          Tutup detail <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          Lihat detail workflow <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center py-20"
        >
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Lihat aksinya.
          </h2>
          <p className="text-2xl text-gray-600 mb-12 font-light">
            Coba Otomasi Pertanyaan Pelanggan secara langsung.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 text-lg rounded-full shadow-sm"
            onClick={() => window.location.href = '/daily-tasks'}
          >
            Coba demo
          </Button>
        </motion.div>
      </div>
    </div>
  )
}