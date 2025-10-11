'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ClipboardCheck, AlertTriangle, FileText, Workflow, CheckSquare, Users, Truck, BarChart3, MessageCircle, Package, LucideIcon } from 'lucide-react'

interface ConversationMessage {
  type: 'user' | 'info' | 'warning' | 'action' | 'success' | 'footer' | 'file'
  text?: string
  emoji?: string
  title?: string
  details?: string[]
  buttons?: string[]
  icon?: string
  time?: string
  fileName?: string
  fileSize?: string
  fileType?: string
}

interface AgentInfo {
  name: string
  subtitle: string
  icon: LucideIcon
  color: string
}

interface Scenario {
  id: string
  name: string
  agent: AgentInfo
  conversation: ConversationMessage[]
}

// Scenario definitions
const scenarios: Scenario[] = [
  {
    id: 'customer-service',
    name: 'Customer Service Bot',
    agent: {
      name: 'WA #1: Customer Service Bot',
      subtitle: 'UTAMA',
      icon: MessageCircle,
      color: 'from-green-600 to-green-700'
    },
    conversation: [
      {
        type: 'user',
        text: 'Pak harga semen gresik 50kg berapa?',
        time: '09:15'
      },
      {
        type: 'info',
        emoji: '',
        title: '💰 Checking real-time price...',
        time: '09:15',
        details: [
          'Product: Semen Gresik 50kg',
          'Querying database...'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Harga & Stok Tersedia',
        time: '09:15',
        details: [
          'Semen Gresik 50kg: Rp 65.000/sak',
          'Stok tersedia: 450 sak',
          'Lokasi: Gudang Utama',
          'Promo: Beli 50+ sak disc 3%'
        ]
      },
      {
        type: 'user',
        text: 'Pesan 50 sak',
        time: '09:17'
      },
      {
        type: 'info',
        emoji: '',
        title: '📝 Memproses pesanan...',
        time: '09:17',
        details: [
          'Jumlah: 50 sak',
          'Calculating total...',
          'Applying discount...'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Pesanan Dikonfirmasi',
        time: '09:17',
        details: [
          'Order ID: #ORD-7821',
          'Subtotal: Rp 3.250.000',
          'Diskon 3%: -Rp 97.500',
          'Total: Rp 3.152.500',
          '',
          'Generating invoice...'
        ]
      },
      {
        type: 'file',
        fileName: 'Invoice #INV-7821.pdf',
        fileSize: '1 page • 142 kB',
        fileType: 'PDF',
        time: '09:18'
      },
      {
        type: 'info',
        title: 'Detail Pembayaran',
        time: '09:18',
        details: [
          'Total: Rp 3.152.500',
          '',
          'Silakan transfer ke:',
          'BCA 1234567890',
          'A.n: PT Konstruksi Jaya',
          '',
          '📸 Upload bukti transfer setelah bayar'
        ]
      },
      {
        type: 'user',
        text: '📸 [Bukti Transfer]',
        time: '10:30'
      },
      {
        type: 'info',
        emoji: '',
        title: '⏳ Bukti Transfer Diterima',
        time: '10:30',
        details: [
          'Order ID: #ORD-7821',
          'Amount: Rp 3.152.500',
          'Status: Menunggu verifikasi admin',
          'Estimasi: 5-15 menit',
          '',
          'Kami akan kabari setelah diverifikasi ✓'
        ]
      },
      {
        type: 'success',
        emoji: '',
        title: '✓ Pembayaran Disetujui Admin',
        time: '10:45',
        details: [
          'Amount: Rp 3.152.500 ✓',
          'Diverifikasi oleh: Admin Siti',
          'Status: Payment Confirmed',
          'Generating faktur pajak...'
        ]
      },
      {
        type: 'file',
        fileName: 'Faktur Pajak #FP-7821.pdf',
        fileSize: '1 page • 156 kB',
        fileType: 'PDF',
        time: '10:46'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Faktur Pajak Terkirim',
        time: '10:46',
        details: [
          'NPWP: 01.234.567.8-901.000',
          'Status: Processing order',
          'Estimasi kirim: Hari ini 14:00',
          '',
          'Terima kasih atas pembayarannya!'
        ]
      },
      {
        type: 'user',
        text: 'Tracking order saya',
        time: '11:00'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ 🚚 Status Pesanan #ORD-7821',
        time: '11:00',
        details: [
          '✓ Payment confirmed',
          '✓ Order processed',
          '→ Loading to truck (current)',
          'Driver: Pak Joko',
          'ETA: 14:15 WIB',
          '📍 Track: bit.ly/track-7821'
        ]
      },
      {
        type: 'info',
        emoji: '',
        title: '🎉 PROMO FLASH SALE!',
        time: '14:30',
        details: [
          'Cat Tembok Avian 25kg',
          'Harga normal: Rp 450.000',
          'FLASH SALE: Rp 385.000 (14%)',
          'Stok terbatas: 100 pcs',
          'Valid sampai: 17:00 hari ini'
        ]
      },
      {
        type: 'footer',
        text: '24/7 customer service automation'
      }
    ]
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management',
    agent: {
      name: 'WA #2: Inventory Management',
      subtitle: 'INTERNAL',
      icon: Package,
      color: 'from-gray-700 to-gray-800'
    },
    conversation: [
      {
        type: 'info',
        emoji: '',
        title: '📊 Laporan Stok Harian - 30 Sep',
        time: '08:00',
        details: [
          'Total items: 45 SKU',
          'Stock value: Rp 450.000.000',
          'Low stock items: 3 products',
          'Out of stock: 0 products',
          'Movements today: 12 transactions'
        ]
      },
      {
        type: 'warning',
        emoji: '',
        title: '🔴 ALERT: Stok Menipis!',
        time: '10:30',
        details: [
          'Product: Semen Gresik 50kg',
          'Current stock: 8 sak',
          'Minimum level: 50 sak',
          'Status: CRITICAL',
          'Action required: Immediate restock'
        ]
      },
      {
        type: 'user',
        text: 'Restock 200 sak',
        time: '10:32'
      },
      {
        type: 'info',
        emoji: '',
        title: '📝 Creating Purchase Order...',
        time: '10:32',
        details: [
          'Supplier: PT Semen Gresik',
          'Item: Semen Gresik 50kg',
          'Quantity: 200 sak',
          'Price: Rp 60.000/sak (wholesale)',
          'Total: Rp 12.000.000'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ PO Terkirim ke Supplier',
        time: '10:32',
        details: [
          'PO Number: #PO-9284',
          'Supplier: PT Semen Gresik',
          'WhatsApp sent: ✓',
          'Email sent: ✓',
          'Expected delivery: 2 Oct 2025',
          'Payment terms: Net 30'
        ]
      },
      {
        type: 'user',
        text: '📸 [Foto barcode barang masuk]',
        time: '13:15'
      },
      {
        type: 'info',
        emoji: '',
        title: '🔍 Scanning barcode...',
        time: '13:15',
        details: [
          'Processing image...',
          'Detecting barcode...',
          'Reading product data...'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Stok Berhasil Diupdate',
        time: '13:15',
        details: [
          'Product: Cat Avian 25kg',
          'Barcode: 8992832020015',
          'Quantity added: +50 pcs',
          'Stock before: 25 pcs',
          'Stock after: 75 pcs',
          'Updated by: Staff Andi'
        ]
      },
      {
        type: 'user',
        text: 'Prediksi demand minggu depan',
        time: '15:00'
      },
      {
        type: 'info',
        emoji: '',
        title: '🤖 AI Analyzing Data...',
        time: '15:00',
        details: [
          'Historical data: 12 months',
          'Seasonal patterns: Detected',
          'Market trends: Analyzing',
          'Generating forecast...'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '📈 Prediksi Demand (1-7 Oct)',
        time: '15:00',
        details: [
          'Semen Gresik 50kg: ~450 sak',
          'Cat Avian 25kg: ~120 pcs',
          'Besi 10mm: ~300 batang',
          'Confidence level: 87%',
          'Recommendation: Stock up Semen +15%',
          'Reason: Construction season peak'
        ]
      },
      {
        type: 'success',
        emoji: '',
        title: '📋 End of Day Summary',
        time: '17:00',
        details: [
          'Stock in: 150 items (+Rp 8.5jt)',
          'Stock out: 125 items (-Rp 12.3jt)',
          'Net movement: +25 items',
          'Low stock alerts: 1 resolved',
          'Tomorrow reminder: Check Besi 10mm'
        ]
      },
      {
        type: 'footer',
        text: 'Smart inventory automation with AI'
      }
    ]
  },
  {
    id: 'approval-request',
    name: 'Approval Request',
    agent: {
      name: 'Approval AI Agent',
      subtitle: 'smart approval assistant',
      icon: ClipboardCheck,
      color: 'from-purple-600 to-purple-700'
    },
    conversation: [
      {
        type: 'info',
        emoji: '',
        title: '📝 Permintaan Diskon Khusus',
        details: [
          'Dari: Sales Budi',
          'Pelanggan: Kontraktor PT Jaya',
          'Produk: Besi beton 10mm',
          'Jumlah: 500 batang',
          'Diskon diminta: 15%',
          'Alasan: Proyek besar, pelanggan tetap'
        ]
      },
      {
        type: 'action',
        buttons: ['✓ Setuju', '✕ Tolak']
      },
      {
        type: 'user',
        text: 'Setuju'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Diskon Disetujui',
        details: [
          'Disetujui oleh: Manager',
          'Sales Budi telah diberi tahu',
          'Quotation otomatis dikirim ke pelanggan'
        ]
      },
      {
        type: 'footer',
        text: 'Approval cepat tanpa ribet'
      }
    ]
  },
  {
    id: 'stock-alert',
    name: 'Stock Alert',
    agent: {
      name: 'Stock Alert AI',
      subtitle: 'never run out of stock',
      icon: AlertTriangle,
      color: 'from-red-600 to-red-700'
    },
    conversation: [
      {
        type: 'warning',
        emoji: '🚨',
        title: 'Peringatan Stok Menipis',
        details: [
          'Produk: Semen Gresik 50kg',
          'Stok saat ini: 45 sak',
          'Batas minimum: 100 sak'
        ]
      },
      {
        type: 'info',
        title: 'Gudang: Utama',
        text: 'Rata-rata penjualan: 30 sak/hari'
      },
      {
        type: 'user',
        text: 'Pesan 200 sak'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Pesanan pembelian dibuat',
        details: [
          'No. PO: #PO-2847',
          'Supplier: PT Semen Gresik',
          'Jumlah: 200 sak',
          'Estimasi tiba: 2 hari kerja'
        ]
      },
      {
        type: 'footer',
        text: 'Monitoring stok otomatis 24/7'
      }
    ]
  },
  {
    id: 'request-report',
    name: 'Request Report',
    agent: {
      name: 'Report AI Agent',
      subtitle: 'instant analytics & insights',
      icon: FileText,
      color: 'from-blue-600 to-blue-700'
    },
    conversation: [
      {
        type: 'user',
        text: 'Buatkan laporan penjualan bulan ini'
      },
      {
        type: 'info',
        emoji: '',
        title: '📊 Menyusun Laporan...',
        details: [
          'Data penjualan: 1,245 transaksi',
          'Periode: 1-30 November 2024',
          'Format: Excel & PDF'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Laporan Siap',
        details: [
          'Total penjualan: Rp 2.4 Miliar',
          'Pertumbuhan: +18% vs bulan lalu',
          'Produk terlaris: Semen Gresik 50kg',
          'File: penjualan-nov-2024.xlsx'
        ]
      },
      {
        type: 'footer',
        text: 'Laporan instan tanpa tunggu'
      }
    ]
  },
  {
    id: 'create-automation',
    name: 'Create Automation',
    agent: {
      name: 'Automation Builder AI',
      subtitle: 'build workflows in seconds',
      icon: Workflow,
      color: 'from-green-600 to-green-700'
    },
    conversation: [
      {
        type: 'user',
        text: 'Kirim notifikasi WhatsApp ke customer 1 hari sebelum appointment'
      },
      {
        type: 'info',
        emoji: '⚙️',
        title: 'Membuat Automasi...',
        details: [
          'Trigger: 1 hari sebelum appointment',
          'Action: Kirim WA reminder',
          'Template: "Halo {nama}, reminder appointment besok jam {waktu}"'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Automasi Aktif',
        details: [
          'ID: #AUTO-4521',
          'Status: Berjalan',
          'Sudah dijadwalkan: 15 reminder',
          'Success rate: 98%'
        ]
      },
      {
        type: 'footer',
        text: 'Buat automasi tanpa coding'
      }
    ]
  },
  {
    id: 'task-management',
    name: 'Task Management',
    agent: {
      name: 'Task Manager AI',
      subtitle: 'smart task organizer',
      icon: CheckSquare,
      color: 'from-orange-600 to-orange-700'
    },
    conversation: [
      {
        type: 'user',
        text: 'Assign task follow-up ke Sales Budi untuk PT Maju Jaya'
      },
      {
        type: 'info',
        emoji: '📋',
        title: 'Membuat Task...',
        details: [
          'Task: Follow-up quotation',
          'Assigned to: Sales Budi',
          'Client: PT Maju Jaya',
          'Priority: Tinggi',
          'Due date: 2 hari kerja'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Task Dibuat',
        details: [
          'Task ID: #TASK-8934',
          'Notifikasi dikirim ke Sales Budi',
          'Reminder otomatis: H-1',
          'Status: Pending'
        ]
      },
      {
        type: 'footer',
        text: 'Track semua task dengan mudah'
      }
    ]
  },
  {
    id: 'employee-hub',
    name: 'Employee Hub',
    agent: {
      name: 'WA #3: Employee Hub',
      subtitle: 'INTERNAL',
      icon: Users,
      color: 'from-gray-700 to-gray-800'
    },
    conversation: [
      {
        type: 'info',
        emoji: '',
        title: '🌅 Pagi, Andi!',
        time: '07:30',
        details: [
          'Shift hari ini: 08:00 - 17:00',
          'Jangan lupa absen masuk ya!'
        ]
      },
      {
        type: 'user',
        text: '📸 [Selfie + GPS Location]',
        time: '07:58'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Absensi Berhasil',
        time: '07:58',
        details: [
          'Waktu: 07:58 WIB',
          'Lokasi: Kantor Pusat ✓',
          'Status: Tepat waktu (2 min early)',
          'Selamat bekerja!'
        ]
      },
      {
        type: 'user',
        text: 'Komisi',
        time: '12:15'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ 💰 Komisi bulan ini',
        time: '12:15',
        details: [
          'Total: Rp 850.000',
          'Dari 12 transaksi',
          'Rata-rata: Rp 70.833/transaksi',
          'Status: Akan dibayar tanggal 5'
        ]
      },
      {
        type: 'user',
        text: 'Request cuti besok',
        time: '14:30'
      },
      {
        type: 'info',
        emoji: '',
        title: '📝 Memproses request cuti...',
        time: '14:30',
        details: [
          'Tanggal: 1 Oktober 2025',
          'Sisa cuti: 8 hari',
          'Mengirim ke manager...'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Request Cuti Disetujui',
        time: '14:32',
        details: [
          'Disetujui oleh: Manager Budi',
          'Tanggal cuti: 1 Okt 2025',
          'Sisa cuti: 7 hari',
          'Have a good rest! 😊'
        ]
      },
      {
        type: 'user',
        text: '📸 [Selfie Absen Pulang]',
        time: '18:15'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Absen Pulang Berhasil',
        time: '18:15',
        details: [
          'Waktu: 18:15 WIB',
          'Lokasi: Kantor Pusat ✓',
          'Total kerja: 10 jam 17 menit',
          'Overtime: +1 jam 15 menit',
          '',
          'Terima kasih, hati-hati di jalan! 👋'
        ]
      },
      {
        type: 'info',
        emoji: '',
        title: '⏰ Summary Hari Ini',
        time: '18:15',
        details: [
          'Clock in: 07:58 WIB',
          'Clock out: 18:15 WIB',
          'Shift end: 17:00 WIB',
          'Overtime: 1h 15m after shift (paid)',
          'Break time: 1h (auto-deducted)',
          'Net working hours: 9h 17m',
          'Status: Complete ✓'
        ]
      },
      {
        type: 'footer',
        text: 'Complete HR automation with attendance tracking'
      }
    ]
  },
  {
    id: 'delivery-logistics',
    name: 'Delivery & Logistics',
    agent: {
      name: 'WA #4: Delivery & Logistics',
      subtitle: 'OPERASIONAL',
      icon: Truck,
      color: 'from-blue-600 to-blue-700'
    },
    conversation: [
      {
        type: 'info',
        emoji: '',
        title: '🚚 3 Job Baru - Multi-drop Route',
        time: '09:15',
        details: [
          '📍 Stop 1: Pak Budi - Jl. Sudirman 45',
          '→ 20 sak Semen (COD: Rp 1.3jt)',
          '',
          '📍 Stop 2: Bu Sari - Jl. Gatot Subroto 12',
          '→ 10 kaleng Cat (Lunas)',
          '',
          '📍 Stop 3: Pak Ahmad - Jl. Diponegoro 89',
          '→ 50 batang Besi (COD: Rp 2.5jt)',
          '',
          'Total distance: 18.5 km (optimized)',
          'Estimasi komisi: Rp 60.000'
        ]
      },
      {
        type: 'action',
        buttons: ['✓ Terima Job', 'Lihat Route']
      },
      {
        type: 'user',
        text: 'Terima Job',
        time: '09:16'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Job Diterima',
        time: '09:16',
        details: [
          'Status: On the way to Stop 1',
          'GPS tracking: Active',
          'Customers dapat link tracking',
          'Route: Optimized for 3 stops',
          'Total COD to collect: Rp 3.8jt'
        ]
      },
      {
        type: 'user',
        text: 'Delivered Stop 1 Pak Budi 📸',
        time: '09:45'
      },
      {
        type: 'info',
        emoji: '',
        title: '💰 COD Payment - Pak Budi',
        time: '09:45',
        details: [
          'Amount: Rp 1.300.000',
          'Input cash collected:'
        ]
      },
      {
        type: 'user',
        text: '1300000',
        time: '09:46'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Stop 1 Complete',
        time: '09:46',
        details: [
          'Order #ORD-5829: Delivered ✓',
          'COD collected: Rp 1.300.000 ✓',
          'GPS location: Verified ✓',
          'Foto bukti: Uploaded ✓',
          'Remaining stops: 2',
          '',
          '→ Next: Stop 2 (Bu Sari) - 4.2 km'
        ]
      },
      {
        type: 'user',
        text: 'Delivered Stop 2 Bu Sari 📸',
        time: '10:15'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Stop 2 Complete',
        time: '10:15',
        details: [
          'Order #ORD-5830: Delivered ✓',
          'Payment: Lunas (no COD)',
          'GPS location: Verified ✓',
          'Foto bukti: Uploaded ✓',
          'Remaining stops: 1',
          '',
          '→ Next: Stop 3 (Pak Ahmad) - 6.8 km'
        ]
      },
      {
        type: 'user',
        text: 'Delivered Stop 3 Pak Ahmad 📸',
        time: '10:50'
      },
      {
        type: 'info',
        emoji: '',
        title: '💰 COD Payment - Pak Ahmad',
        time: '10:50',
        details: [
          'Amount: Rp 2.500.000',
          'Input cash collected:'
        ]
      },
      {
        type: 'user',
        text: '2500000',
        time: '10:51'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ 🎉 All Stops Complete!',
        time: '10:51',
        details: [
          '✓ Stop 1: Pak Budi (COD collected)',
          '✓ Stop 2: Bu Sari (Lunas)',
          '✓ Stop 3: Pak Ahmad (COD collected)',
          '',
          'Total COD: Rp 3.800.000',
          'Total deliveries: 3',
          'Total distance: 18.5 km',
          'Time: 1h 35m',
          'Komisi: Rp 60.000 (added)',
          '',
          'Return to office to submit cash'
        ]
      },
      {
        type: 'user',
        text: 'Komisi hari ini',
        time: '17:30'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ 💰 Komisi Hari Ini',
        time: '17:30',
        details: [
          'Total komisi: Rp 180.000',
          'Total deliveries: 9 stops',
          'COD collected: Rp 11.400.000',
          'Multi-drop routes: 3',
          'Average: 20k/stop',
          'Efficiency: 97%',
          '',
          'Keep up the great work! 🔥'
        ]
      },
      {
        type: 'footer',
        text: 'Complete logistics automation'
      }
    ]
  },
  {
    id: 'finance-reports',
    name: 'Finance & Reports',
    agent: {
      name: 'WA #5: Finance & Reports',
      subtitle: 'OWNER',
      icon: BarChart3,
      color: 'from-green-600 to-green-700'
    },
    conversation: [
      {
        type: 'info',
        emoji: '',
        title: '🌙 Laporan Harian - 30 Sep 2025',
        time: '20:00',
        details: [
          'Total penjualan: Rp 8.750.000',
          'Jumlah order: 15 transaksi',
          'Profit: Rp 2.187.500 (25%)',
          'Terkirim otomatis jam 20:00 WIB'
        ]
      },
      {
        type: 'user',
        text: 'Laporan minggu ini',
        time: '08:30'
      },
      {
        type: 'info',
        emoji: '',
        title: '⏳ Generating report...',
        time: '08:30',
        details: [
          'Periode: Minggu 39/2025',
          'Aggregating 87 orders...',
          'Creating visualizations...',
          'Generating PDF...'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '✓ Laporan Minggu 39/2025',
        time: '08:32',
        details: [
          'Total transaksi: Rp 45.500.000',
          'Profit margin: Rp 12.300.000 (27%)',
          'Jumlah order: 87 transaksi',
          'Growth: +23% vs minggu lalu',
          'Top product: Semen Gresik 50kg',
          '📄 laporan-minggu-39.pdf',
          'Generated in 2 minutes'
        ]
      },
      {
        type: 'warning',
        emoji: '',
        title: '⚠️ Alert: Piutang Jatuh Tempo',
        time: '08:35',
        details: [
          'PT Maju Jaya: Rp 15.000.000',
          'Jatuh tempo: Besok (1 Okt)',
          'Invoice: #INV-8472',
          'Contact: Pak Rahman',
          'Action: Reminder terkirim otomatis'
        ]
      },
      {
        type: 'user',
        text: 'Cash flow bulan ini',
        time: '11:45'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ 💰 Cash Flow September 2025',
        time: '11:45',
        details: [
          'Total income: Rp 180.500.000',
          'Total expense: Rp 125.000.000',
          'Net profit: Rp 55.500.000',
          'Cash position: Strong 📈',
          'Profit margin: 30.7%',
          'Forecast Oct: Rp 195M (projected)'
        ]
      },
      {
        type: 'user',
        text: 'Analisa profit margin per produk',
        time: '14:20'
      },
      {
        type: 'info',
        emoji: '',
        title: '📊 Analyzing profit margins...',
        time: '14:20',
        details: [
          'Processing sales data...',
          'Calculating COGS...',
          'Ranking by profitability...'
        ]
      },
      {
        type: 'success',
        icon: '',
        title: '📈 Profit Margin Analysis',
        time: '14:21',
        details: [
          '🏆 TOP 3 MOST PROFITABLE:',
          '',
          '1. Cat Avian 25kg',
          '   Margin: 35% | Profit: Rp 15.5jt',
          '',
          '2. Semen Gresik 50kg',
          '   Margin: 22% | Profit: Rp 28.2jt',
          '',
          '3. Besi 10mm',
          '   Margin: 28% | Profit: Rp 12.8jt',
          '',
          'LOW MARGIN ALERT:',
          '• Pasir Cor: Only 8% margin',
          '• Recommendation: Review pricing'
        ]
      },
      {
        type: 'user',
        text: 'Top customers bulan ini',
        time: '15:30'
      },
      {
        type: 'success',
        icon: '',
        title: '✓ 👥 Top Customers September',
        time: '15:30',
        details: [
          '🥇 PT Konstruksi Jaya',
          '   Purchase: Rp 45.5jt (25 orders)',
          '   Favorite: Semen & Besi',
          '   Payment: Always on-time ✓',
          '',
          '🥈 CV Bangun Sejahtera',
          '   Purchase: Rp 32.8jt (18 orders)',
          '   Favorite: Cat & Triplek',
          '   Payment: Net 14',
          '',
          '🥉 Pak Budi (Retail)',
          '   Purchase: Rp 18.2jt (42 orders)',
          '   Favorite: Mixed items',
          '   Payment: COD',
          '',
          '💡 Insight: Top 10 = 65% revenue'
        ]
      },
      {
        type: 'info',
        emoji: '',
        title: '🚨 Transaksi Besar Terdeteksi',
        time: '18:45',
        details: [
          'Amount: Rp 25.000.000',
          'Customer: PT Konstruksi Jaya',
          'Payment: Transfer Bank',
          'Time: 18:45 WIB',
          'Status: Verified ✓',
          'Auto-notification sent to owner'
        ]
      },
      {
        type: 'footer',
        text: 'Real-time financial intelligence'
      }
    ]
  }
]

interface ScenarioDemoProps {
  defaultScenario?: string
  showSelector?: boolean
  autoPlay?: boolean
  className?: string
}

export default function ScenarioDemo({
  defaultScenario = 'approval-request',
  showSelector = true,
  autoPlay = true,
  className = ''
}: ScenarioDemoProps) {
  const [selectedScenario, setSelectedScenario] = useState(defaultScenario)
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isInViewport, setIsInViewport] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const demoRef = useRef<HTMLDivElement>(null)

  const scenario = scenarios.find(s => s.id === selectedScenario) || scenarios[0]
  const AgentIcon = scenario.agent.icon

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (!demoRef.current || !autoPlay) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInViewport(entry.isIntersecting)
      },
      {
        threshold: 0.1, // Trigger when only 10% of demo is visible - more responsive
        rootMargin: '0px 0px -50px 0px' // Trigger even earlier for immediate feedback
      }
    )

    observer.observe(demoRef.current)

    return () => observer.disconnect()
  }, [autoPlay])

  // Reset and start/stop based on scenario change and viewport
  useEffect(() => {
    setCurrentStep(0)
    setIsPlaying(false)

    if (autoPlay && isInViewport) {
      // Immediate start - no delay for better UX
      setIsPlaying(true)
    }
  }, [selectedScenario, autoPlay, isInViewport])

  useEffect(() => {
    if (isPlaying && currentStep < scenario.conversation.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1)
      }, 1200) // Faster messaging - 1.2s instead of 2s
      return () => clearTimeout(timer)
    } else if (currentStep >= scenario.conversation.length) {
      setIsPlaying(false)
    }
  }, [isPlaying, currentStep, scenario.conversation.length])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [currentStep])

  const handlePlay = () => {
    if (currentStep >= scenario.conversation.length) {
      setCurrentStep(0)
    }
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  return (
    <div ref={demoRef} className={`max-w-md w-full ${className}`}>
      {/* Scenario Selector */}
      {showSelector && (
        <div className="bg-white rounded-t-3xl shadow-lg p-4 mb-0">
          <label className="text-gray-700 text-sm font-medium mb-2 block">Pilih Scenario Demo</label>
          <Select value={selectedScenario} onValueChange={setSelectedScenario}>
            <SelectTrigger className="w-full h-11 text-sm bg-white border-2 border-gray-200 text-gray-900 rounded-lg hover:border-gray-300 transition-colors">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              {scenarios.map((s) => (
                <SelectItem
                  key={s.id}
                  value={s.id}
                  className="text-gray-900 text-sm py-2 cursor-pointer hover:bg-gray-100"
                >
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* WhatsApp Interface */}
      <div className={`bg-white shadow-2xl overflow-hidden ${showSelector ? 'rounded-b-3xl' : 'rounded-3xl'}`}>
        {/* WhatsApp Header */}
        <motion.div
          key={selectedScenario}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#075E54] px-4 py-3 flex items-center gap-3"
        >
          <div className={`bg-gradient-to-br ${scenario.agent.color} rounded-full p-2.5`}>
            <AgentIcon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-sm">{scenario.agent.name}</h3>
            <p className="text-green-200 text-xs">
              {autoPlay && !isInViewport ? 'waiting...' : isPlaying ? 'typing...' : 'online'}
            </p>
          </div>
        </motion.div>

        {/* WhatsApp Chat Background */}
        <div
          className="bg-[#E5DDD5] px-4 py-3 min-h-[300px] max-h-[400px] overflow-y-auto"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'%23E5DDD5\'/%3E%3Cpath d=\'M20 20h60v60H20z\' fill=\'none\' stroke=\'%23D1C7B8\' stroke-width=\'0.5\' opacity=\'0.1\'/%3E%3C/svg%3E")'
          }}
          ref={chatContainerRef}
        >
          <AnimatePresence mode="sync">
            {/* Show placeholder when not in viewport */}
            {autoPlay && !isInViewport && currentStep === 0 && (
              <div className="text-center py-20">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
                  </div>
                  <p className="text-gray-500 text-sm">Scroll kebawah untuk mulai demo</p>
                  <p className="text-gray-400 text-xs mt-1">Demo akan otomatis jalan</p>
                </div>
              </div>
            )}

            {/* Show immediate typing indicator when viewport triggered but no messages yet */}
            {autoPlay && isInViewport && isPlaying && currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="flex mb-2">
                  <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[75%] shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span className="text-xs text-gray-500">typing...</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {scenario.conversation.slice(0, currentStep).map((message, index) => (
              <motion.div
                key={`${selectedScenario}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6"
              >
                {message.type === 'user' && (
                  <div className="flex justify-end mb-2">
                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[75%] shadow-sm">
                      <p className="text-sm text-gray-800">{message.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">{message.time || '12:34'}</span>
                        <span className="text-gray-400 text-xs">✓</span>
                      </div>
                    </div>
                  </div>
                )}

                {message.type === 'info' && (
                  <div className="flex mb-2">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[75%] shadow-sm">
                      {message.emoji && <div className="text-xl mb-1">{message.emoji}</div>}
                      <h3 className="font-semibold text-sm mb-1 text-gray-800">{message.title}</h3>
                      {message.details && (
                        <div className="space-y-0.5">
                          {message.details.map((detail, idx) => (
                            <p key={idx} className="text-xs text-gray-600">{detail}</p>
                          ))}
                        </div>
                      )}
                      {message.text && <p className="text-xs text-gray-600">{message.text}</p>}
                      <span className="text-[10px] text-gray-400 block mt-1">{message.time || '12:34'}</span>
                    </div>
                  </div>
                )}

                {message.type === 'warning' && (
                  <div className="flex mb-2">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[75%] shadow-sm border-l-4 border-red-500">
                      {message.emoji && <div className="text-xl mb-1">{message.emoji}</div>}
                      <h3 className="font-semibold text-sm mb-1 text-red-600">{message.title}</h3>
                      {message.details && (
                        <div className="space-y-0.5">
                          {message.details.map((detail, idx) => (
                            <p key={idx} className="text-xs text-gray-600">{detail}</p>
                          ))}
                        </div>
                      )}
                      <span className="text-[10px] text-gray-400 block mt-1">{message.time || '12:34'}</span>
                    </div>
                  </div>
                )}

                {message.type === 'action' && (
                  <div className="flex mb-2">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[75%] shadow-sm">
                      <div className="flex gap-2">
                        {message.buttons?.map((button, idx) => (
                          <button
                            key={idx}
                            className={`${
                              button.includes('Setuju') || button.includes('✓')
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-red-500 hover:bg-red-600'
                            } text-white font-medium text-xs px-3 py-1.5 rounded-md shadow-sm`}
                          >
                            {button}
                          </button>
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 block mt-2">{message.time || '12:34'}</span>
                    </div>
                  </div>
                )}

                {message.type === 'success' && (
                  <div className="flex mb-2">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[75%] shadow-sm border-l-4 border-green-500">
                      {message.icon && (
                        <div className="text-green-500 text-lg mb-1">{message.icon}</div>
                      )}
                      <h3 className="font-semibold text-sm mb-1 text-green-600">{message.title}</h3>
                      {message.details && (
                        <div className="space-y-0.5">
                          {message.details.map((detail, idx) => (
                            <p key={idx} className="text-xs text-gray-600">{detail}</p>
                          ))}
                        </div>
                      )}
                      <span className="text-[10px] text-gray-400 block mt-1">{message.time || '12:34'}</span>
                    </div>
                  </div>
                )}

                {message.type === 'file' && (
                  <div className="flex mb-2">
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2.5 max-w-[75%] shadow-sm border border-gray-200">
                      <div className="flex items-center gap-3">
                        {/* PDF Icon */}
                        <div className="flex-shrink-0 bg-red-500 rounded-lg p-2.5 relative">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                          </svg>
                          <div className="absolute -top-1 -right-1 bg-white rounded-full px-1">
                            <span className="text-[8px] font-bold text-red-500">{message.fileType || 'PDF'}</span>
                          </div>
                        </div>

                        {/* File Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">{message.fileName}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{message.fileSize}</p>
                        </div>

                        {/* Download Arrow */}
                        <div className="flex-shrink-0">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-400 block mt-2">{message.time || '12:34'}</span>
                    </div>
                  </div>
                )}

                {message.type === 'footer' && (
                  <div className="flex justify-center my-3">
                    <div className="bg-white/80 rounded-full px-3 py-1 shadow-sm">
                      <p className="text-[10px] text-gray-500">{message.text}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {currentStep === 0 && !isPlaying && !autoPlay && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-sm">Klik Play untuk mulai demo</p>
            </div>
          )}
        </div>

        {/* WhatsApp Input Bar */}
        <div className="bg-[#F0F0F0] px-4 py-2 flex items-center gap-3">
          <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-gray-400 text-xs">Type a message...</span>
          </div>
          <div className="bg-[#00A884] rounded-full p-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Controls - Only show if selector is visible */}
      {showSelector && (
        <div className="bg-white rounded-b-3xl shadow-lg p-4 flex gap-3 justify-center -mt-px">
          {!isPlaying ? (
            <Button
              onClick={handlePlay}
              className="bg-[#00A884] hover:bg-[#008f6f] text-white font-medium px-6 py-2 text-sm rounded-full"
            >
              {currentStep === 0 ? '▶ Play Demo' : '▶ Resume'}
            </Button>
          ) : (
            <Button
              onClick={handlePause}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 text-sm rounded-full"
            >
              ⏸ Pause
            </Button>
          )}
          <Button
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-2 text-sm rounded-full"
          >
            ↺ Reset
          </Button>
        </div>
      )}
    </div>
  )
}

// Export scenarios for external use
export { scenarios }
export type { Scenario, ConversationMessage, AgentInfo }