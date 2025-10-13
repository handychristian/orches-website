'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { InteractiveSkeleton } from '@/components/loading/component-skeleton'

const ScenarioDemo = dynamic(() => import('@/components/scenario-demo'), {
  loading: () => <InteractiveSkeleton />,
  ssr: false
})
import { Users, Truck, BarChart3, MessageCircle, Package, ChevronRight } from 'lucide-react'

const bots = [
  {
    id: 'customer-service',
    name: 'WA #1: Customer Service Bot',
    number: '+62 812-xxxx-1001',
    icon: MessageCircle,
    color: 'bg-gradient-to-br from-green-600 to-green-700',
    badge: 'UTAMA',
    badgeColor: 'bg-green-500',
    functions: [
      'Terima order dari pelanggan 24/7',
      'Cek harga & stok real-time',
      'Konfirmasi pembayaran otomatis',
      'Generate invoice & faktur pajak',
      'Info promo & katalog produk',
      'Tracking status pesanan'
    ],
    example: 'Customer: "Harga semen 50kg?" → Bot jawab real-time dari database'
  },
  {
    id: 'inventory-management',
    name: 'WA #2: Inventory Management',
    number: '+62 812-xxxx-1002',
    icon: Package,
    color: 'bg-gradient-to-br from-gray-700 to-gray-800',
    badge: 'INTERNAL',
    badgeColor: 'bg-gray-500',
    functions: [
      'Alert stok menipis ke owner',
      'Laporan stok harian otomatis',
      'Input stok masuk via chat/foto',
      'Scan barcode via foto',
      'Prediksi demand AI weekly',
      'Request restock ke supplier'
    ],
    example: '🔴 Alert: Semen Gresik 50kg tinggal 8 sak. Restock!'
  },
  {
    id: 'employee-hub',
    name: 'WA #3: Employee Hub',
    number: '+62 812-xxxx-1003',
    icon: Users,
    color: 'bg-gradient-to-br from-gray-700 to-gray-800',
    badge: 'INTERNAL',
    badgeColor: 'bg-red-500',
    functions: [
      'Absensi masuk & pulang + GPS',
      'Auto-calculate overtime/lembur',
      'Reminder shift H-1',
      'Cek komisi real-time',
      'Request izin/cuti',
      'Download slip gaji',
      'Broadcast info internal'
    ],
    example: 'Andi kirim "Komisi" → Bot: "Komisi bulan ini: Rp 850k"'
  },
  {
    id: 'delivery-logistics',
    name: 'WA #4: Delivery & Logistics',
    number: '+62 812-xxxx-1004',
    icon: Truck,
    color: 'bg-gradient-to-br from-blue-600 to-blue-700',
    badge: 'OPERASIONAL',
    badgeColor: 'bg-blue-500',
    functions: [
      'Multi-drop route optimization',
      'COD/Cash collection tracking',
      'Assign job ke driver otomatis',
      'Share link tracking ke customer',
      'Konfirmasi delivered + foto',
      'GPS real-time driver',
      'Hitung komisi per trip'
    ],
    example: 'Driver: "Delivered Pak Budi" + foto → Update status otomatis'
  },
  {
    id: 'finance-reports',
    name: 'WA #5: Finance & Reports',
    number: '+62 812-xxxx-1005',
    icon: BarChart3,
    color: 'bg-gradient-to-br from-green-600 to-green-700',
    badge: 'OWNER',
    badgeColor: 'bg-green-500',
    functions: [
      'Profit margin analysis per produk',
      'Top customers & products insight',
      'Laporan harian jam 8 malam',
      'Reminder piutang jatuh tempo',
      'Rekap pajak bulanan',
      'Cash flow forecast',
      'Alert transaksi besar (>5jt)',
      'Download laporan by request'
    ],
    example: 'Owner: "Laporan minggu ini" → PDF lengkap terkirim'
  }
]

export default function DemoScenariosPage() {
  const [selectedBot, setSelectedBot] = useState(bots[0].id)

  return (
    <div className="min-h-screen bg-[#111B21] flex">
      {/* Sidebar - Bot List */}
      <div className="w-96 bg-[#111B21] border-r border-[#2A3942] flex flex-col">
        {/* Sidebar Header */}
        <div className="bg-[#202C33] px-4 py-5 border-b border-[#2A3942]">
          <h2 className="text-white text-xl font-medium mb-1">Multiple Bots</h2>
          <p className="text-[#8696A0] text-sm">5 dedicated numbers by role</p>
        </div>

        {/* Bots List Header */}
        <div className="px-4 py-3 bg-[#111B21]">
          <p className="text-[#8696A0] text-xs font-medium uppercase tracking-wider">Role-Based Bots</p>
        </div>

        {/* Bots List */}
        <div className="flex-1 overflow-y-auto">
          {bots.map((bot) => {
            const BotIcon = bot.icon
            const isSelected = selectedBot === bot.id
            return (
              <button
                key={bot.id}
                onClick={() => setSelectedBot(bot.id)}
                className={`group w-full px-4 py-4 flex items-start gap-3 hover:bg-[#202C33] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200 border-b border-[#2A3942] cursor-pointer touch-manipulation ${
                  isSelected ? 'bg-[#2A3942]' : ''
                }`}
              >
                <div className={`${bot.color} rounded-full p-3 relative flex-shrink-0`}>
                  <BotIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white text-sm font-medium truncate">{bot.name}</h3>
                    <span className={`${bot.badgeColor} px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wide flex-shrink-0`}>
                      {bot.badge}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#8696A0] group-hover:text-[#00A884] transition-colors ml-auto flex-shrink-0" />
                  </div>
                  <p className="text-[#8696A0] text-xs mb-2">{bot.number}</p>

                  {/* Functions List - Show when selected */}
                  {isSelected && (
                    <div className="mt-3 space-y-1.5">
                      <p className="text-[#00A884] text-xs font-semibold mb-2">Fungsi:</p>
                      {bot.functions.slice(0, 3).map((func, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#00A884] text-xs">✓</span>
                          <p className="text-[#8696A0] text-xs leading-tight">{func}</p>
                        </div>
                      ))}
                      {bot.functions.length > 3 && (
                        <p className="text-[#00A884] text-xs mt-1">+{bot.functions.length - 3} more...</p>
                      )}
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Setup Info */}
        <div className="p-4 border-t border-[#2A3942] bg-[#111B21]">
          <div className="bg-[#1C2C33] rounded-lg p-3 mb-2">
            <p className="text-white text-xs font-medium mb-2">📱 Role-Based Setup</p>
            <p className="text-[#8696A0] text-xs">1 Number = 1 Role</p>
          </div>
          <div className="bg-[#0C4A3E] rounded-lg p-3">
            <p className="text-[#00D26B] text-xs font-medium mb-1">✓ Keuntungan</p>
            <ul className="text-[#8CE2B4] text-xs space-y-1">
              <li>✓ Clear role separation</li>
              <li>✓ Easy access control</li>
              <li>✓ Dedicated per team</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Demo Area */}
      <div className="flex-1 bg-[#0B141A] flex items-center justify-center p-8">
        <ScenarioDemo
          key={selectedBot}
          defaultScenario={selectedBot}
          showSelector={false}
          autoPlay={true}
          className="max-w-md"
        />
      </div>
    </div>
  )
}