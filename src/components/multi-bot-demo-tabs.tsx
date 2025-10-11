'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScenarioDemo from '@/components/scenario-demo'
import { MessageCircle, Package, Users, Truck, BarChart3, X, ChevronRight } from 'lucide-react'

const bots = [
  {
    id: 'customer-service',
    name: 'Customer Service',
    shortName: 'WA #1',
    number: '+62 812-xxxx-1001',
    icon: MessageCircle,
    badge: 'UTAMA',
    badgeColor: 'bg-green-500',
    color: 'from-green-600 to-green-700',
    features: [
      'Terima order dari pelanggan 24/7',
      'Cek harga & stok real-time',
      'Konfirmasi pembayaran otomatis',
      'Generate invoice & faktur pajak',
      'Info promo & katalog produk',
      'Tracking status pesanan'
    ]
  },
  {
    id: 'inventory-management',
    name: 'Inventory',
    shortName: 'WA #2',
    number: '+62 812-xxxx-1002',
    icon: Package,
    badge: 'INTERNAL',
    badgeColor: 'bg-gray-500',
    color: 'from-gray-700 to-gray-800',
    features: [
      'Alert stok menipis ke owner',
      'Laporan stok harian otomatis',
      'Input stok masuk via chat/foto',
      'Scan barcode via foto',
      'Prediksi demand AI weekly',
      'Request restock ke supplier'
    ]
  },
  {
    id: 'employee-hub',
    name: 'Employee Hub',
    shortName: 'WA #3',
    number: '+62 812-xxxx-1003',
    icon: Users,
    badge: 'INTERNAL',
    badgeColor: 'bg-red-500',
    color: 'from-gray-700 to-gray-800',
    features: [
      'Absensi masuk & pulang + GPS',
      'Auto-calculate overtime/lembur',
      'Reminder shift H-1',
      'Cek komisi real-time',
      'Request izin/cuti',
      'Download slip gaji',
      'Broadcast info internal'
    ]
  },
  {
    id: 'delivery-logistics',
    name: 'Delivery',
    shortName: 'WA #4',
    number: '+62 812-xxxx-1004',
    icon: Truck,
    badge: 'OPERASIONAL',
    badgeColor: 'bg-blue-500',
    color: 'from-blue-600 to-blue-700',
    features: [
      'Multi-drop route optimization',
      'COD/Cash collection tracking',
      'Assign job ke driver otomatis',
      'Share link tracking ke customer',
      'Konfirmasi delivered + foto',
      'GPS real-time driver',
      'Hitung komisi per trip'
    ]
  },
  {
    id: 'finance-reports',
    name: 'Finance',
    shortName: 'WA #5',
    number: '+62 812-xxxx-1005',
    icon: BarChart3,
    badge: 'OWNER',
    badgeColor: 'bg-green-500',
    color: 'from-green-600 to-green-700',
    features: [
      'Profit margin analysis per produk',
      'Top customers & products insight',
      'Laporan harian jam 8 malam',
      'Reminder piutang jatuh tempo',
      'Rekap pajak bulanan',
      'Cash flow forecast',
      'Alert transaksi besar (>5jt)',
      'Download laporan by request'
    ]
  }
]

export default function MultiBotDemoTabs() {
  const [selectedBot, setSelectedBot] = useState(bots[0].id)
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const currentBot = bots.find(b => b.id === selectedBot) || bots[0]
  const BotIcon = currentBot.icon

  return (
    <section id="demo" className="w-full bg-white py-24">
      <div id="demo-section" className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200/50 rounded-full mb-6 shadow-sm"
          >
            <span className="text-sm font-semibold">Live Demo: Real Business Use Case</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 tracking-tight"
          >
            <span className="block">Contoh Real:</span>
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              WhatsApp Automation
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-gray-600 mt-2">
              untuk Toko Bangunan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Lihat bagaimana 1 bisnis bisa pakai <span className="font-semibold text-gray-900">5 nomor WhatsApp berbeda</span> untuk handle Customer Service, Inventory, Employee, Delivery, dan Finance - semuanya otomatis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto"
          >
            <p className="text-sm text-blue-800">
              <span className="font-semibold">💡 Note:</span> Ini cuma 1 contoh implementation. Bisnis Anda bisa beda completely - kami build sesuai kebutuhan spesifik Anda.
            </p>
          </motion.div>
        </div>

      {/* Tabs Navigation - Sticky */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm py-4 -mx-4 px-4 mb-6 shadow-sm overflow-hidden">
        {/* Mobile hint */}
        <div className="md:hidden text-center mb-3">
          <p className="text-xs text-gray-500">👆 Tap untuk lihat demo scenario berbeda</p>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 pb-2 md:justify-center">
          {bots.map((bot) => {
            const Icon = bot.icon
            const isActive = selectedBot === bot.id

            return (
              <button
                key={bot.id}
                onClick={() => setSelectedBot(bot.id)}
                className={`
                  group relative flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-200 cursor-pointer touch-manipulation shrink-0
                  ${isActive
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] border border-gray-200'
                  }
                `}
              >
                {/* Icon */}
                <div className={`
                  p-2 rounded-lg
                  ${isActive ? 'bg-white/20' : 'bg-gray-100'}
                `}>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                </div>

                {/* Text */}
                <div className="text-left">
                  <div className="font-semibold text-sm whitespace-nowrap">
                    {bot.shortName}
                  </div>
                  <div className={`text-xs ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                    {bot.name}
                  </div>
                </div>

                {/* Badge */}
                <span className={`
                  ${bot.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase
                `}>
                  {bot.badge}
                </span>

                {/* Clickable Hint */}
                {!isActive && (
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors ml-1" />
                )}

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-2 h-2 bg-black rotate-45"></div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
        </div>
      </div>

      {/* Current Bot Info */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-6 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className={`bg-gradient-to-br ${currentBot.color} rounded-xl p-3`}>
            <BotIcon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900">{currentBot.name}</h3>
              <span className={`${currentBot.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase`}>
                {currentBot.badge}
              </span>
            </div>
            <p className="text-sm text-gray-600">{currentBot.number}</p>
          </div>
        </div>
      </div>

      {/* Top 3 Features Pills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {currentBot.features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm"
            >
              <span className="text-green-600 mr-1">✓</span>
              {feature}
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => setShowAllFeatures(true)}
            className="text-sm text-black hover:text-gray-700 font-medium transition-colors"
          >
            View all {currentBot.features.length} features →
          </button>
        </div>
      </div>

      {/* Demo Area */}
      <div className="flex justify-center">
        <ScenarioDemo
          key={selectedBot}
          defaultScenario={selectedBot}
          showSelector={false}
          autoPlay={true}
          className="w-full max-w-md"
        />
      </div>

      {/* Features Modal */}
      {showAllFeatures && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAllFeatures(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className={`bg-gradient-to-br ${currentBot.color} rounded-lg p-2`}>
                  <BotIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{currentBot.name}</h3>
                  <p className="text-xs text-gray-500">{currentBot.number}</p>
                </div>
              </div>
              <button
                onClick={() => setShowAllFeatures(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-4">
              <h4 className="font-semibold text-gray-900 mb-4">
                All Features ({currentBot.features.length})
              </h4>
              <div className="space-y-3">
                {currentBot.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <p className="text-sm text-gray-700 flex-1">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200 rounded-b-2xl">
              <button
                onClick={() => setShowAllFeatures(false)}
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2.5 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div id="demo-section-end"></div>
      </div>
    </section>
  )
}
/* Force git sync */
