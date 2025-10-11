'use client'

import { MessageCircle, Instagram, Mail, Zap, Database, Calendar } from 'lucide-react'
import { TextReveal, ScrollReveal, ScaleReveal } from '@/components/ui/scroll-reveal'

const examples = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    examples: [
      'Auto-reply customer 24/7',
      'Order processing via chat',
      'Payment confirmation',
      'Delivery tracking updates'
    ]
  },
  {
    icon: Instagram,
    title: 'Instagram DM Automation',
    examples: [
      'Auto-reply DM & comments',
      'Lead capture from DM',
      'Auto-send catalog/price list',
      'Follow-up nurturing'
    ]
  },
  {
    icon: Mail,
    title: 'Email Workflow',
    examples: [
      'Welcome email sequences',
      'Abandoned cart recovery',
      'Invoice generation & send',
      'Follow-up campaigns'
    ]
  },
  {
    icon: Database,
    title: 'Data Integration',
    examples: [
      'Auto-sync to Google Sheets',
      'Update accounting system',
      'Inventory sync real-time',
      'CRM data integration'
    ]
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    examples: [
      'Auto-assign tasks to team',
      'Status update notifications',
      'Approval workflows',
      'Document generation'
    ]
  },
  {
    icon: Calendar,
    title: 'Scheduling & Reminder',
    examples: [
      'Auto-booking appointments',
      'Meeting reminders',
      'Shift scheduling',
      'Deadline notifications'
    ]
  }
]

export default function AutomationExamples() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Benefit-Focused */}
        <div className="text-center mb-20">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Otomatisasi Apapun yang Bisnis Anda Butuhkan
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[21px] text-[#1D1D1F] max-w-3xl mx-auto font-normal">
              Sistem otomasi custom untuk setiap platform dan workflow.
              <span className="block mt-2 text-[19px] text-[#86868B]">
                Ini hanya contoh kecil - kami bisa automate hampir semua proses bisnis.
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Examples Grid - Clean Monochrome */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => {
            const Icon = example.icon

            return (
              <ScaleReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-colors h-full">
                  {/* Icon - Monochrome */}
                  <div className="mb-6">
                    <Icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[21px] font-semibold text-black mb-4">
                    {example.title}
                  </h3>

                  {/* Examples List - Simple text */}
                  <ul className="space-y-2">
                    {example.examples.map((item, idx) => (
                      <li key={idx} className="text-[14px] text-[#86868B] flex items-start gap-2">
                        <span className="text-black mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleReveal>
            )
          })}
        </div>

        {/* Bottom Note - Clean */}
        <ScrollReveal delay={0.6} className="mt-20 text-center">
          <div className="bg-[#F5F5F7] rounded-2xl p-12">
            <p className="text-[21px] text-black font-medium mb-3">
              Tidak melihat use case Anda?
            </p>
            <p className="text-[17px] text-[#86868B] max-w-2xl mx-auto">
              Ini hanya contoh kecil. Kalau tools atau platform Anda punya API atau cara untuk integrate, kami bisa bangun automation-nya.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}