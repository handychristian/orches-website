'use client'

import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const integrations = [
  { src: '/assets/integrations/whatsapp.svg', name: 'WhatsApp' },
  { src: '/assets/integrations/google-sheets.svg', name: 'Google Sheets' },
  { src: '/assets/integrations/instagram.svg', name: 'Instagram' },
  { src: '/assets/integrations/gmail.svg', name: 'Gmail' },
  { src: '/assets/integrations/facebook.svg', name: 'Facebook' },
  { src: '/assets/integrations/slack.svg', name: 'Slack' },
  { src: '/assets/integrations/notion.svg', name: 'Notion' },
  { src: '/assets/integrations/airtable.svg', name: 'Airtable' },
  { src: '/assets/integrations/shopify.svg', name: 'Shopify' },
  { src: '/assets/integrations/telegram.svg', name: 'Telegram' },
  { src: '/assets/integrations/google-drive-color.svg', name: 'Google Drive' },
  { src: '/assets/integrations/shopee.svg', name: 'Shopee' },
  { src: '/assets/integrations/hubspot.svg', name: 'HubSpot' },
  { src: '/assets/integrations/salesforce.svg', name: 'Salesforce' },
  { src: '/assets/integrations/zoom.svg', name: 'Zoom' },
  { src: '/assets/integrations/xendit.svg', name: 'Xendit' },
  { src: '/assets/integrations/tokopedia.svg', name: 'Tokopedia' },
  { src: '/assets/integrations/google-docs.svg', name: 'Google Docs' }
]

export default function IntegrationLogos() {
  // Duplicate for seamless loop
  const row1 = [...integrations.slice(0, 9), ...integrations.slice(0, 9)]
  const row2 = [...integrations.slice(9), ...integrations.slice(9)]

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-black mb-4 tracking-tight leading-[1.1]">
              Connect Semua Tools yang Anda Pakai
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[17px] text-[#86868B] max-w-2xl mx-auto">
              400+ integrasi. Tidak perlu coding. WhatsApp, Google, Accounting software, Payment gateways — semuanya terhubung.
            </p>
          </ScrollReveal>
        </div>

        {/* Scrolling Logos - Row 1 (Left to Right) */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex gap-12 animate-scroll-left">
            {row1.map((integration, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                title={integration.name}
              >
                <Image
                  src={integration.src}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Logos - Row 2 (Right to Left) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex gap-12 animate-scroll-right">
            {row2.map((integration, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                title={integration.name}
              >
                <Image
                  src={integration.src}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-[15px] text-[#86868B]">
              Dan 400+ tools lainnya. Kalau tools Anda punya API, kami bisa connect.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
