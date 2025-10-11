'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextReveal, ScrollReveal } from '@/components/ui/scroll-reveal'

function TiltPricingCard({ children, index, recommended }: { children: React.ReactNode; index: number; recommended: boolean }) {
  const [isHovering, setIsHovering] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-8, 8])

  const handleMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative bg-white rounded-2xl p-8 ${
        recommended
          ? 'border-2 border-[#0071E3]'
          : 'border border-gray-200'
      }`}
    >
      {/* Glow effect - stronger for recommended */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          style={{
            background: recommended
              ? 'radial-gradient(circle at center, rgba(0, 113, 227, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(0, 113, 227, 0.08) 0%, transparent 70%)',
          }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  )
}

const packages = [
  {
    name: 'Starter',
    price: 'Rp 5jt',
    period: 'one-time',
    description: 'Untuk bisnis kecil yang mau mulai automation pertama',
    features: [
      '1 automation workflow',
      'Basic WhatsApp/Email automation',
      'Integration ke 2-3 tools',
      '1 bulan support',
      'Training untuk team',
      'Documentation lengkap'
    ],
    recommended: false
  },
  {
    name: 'Professional',
    price: 'Rp 15jt',
    period: 'one-time',
    description: 'Untuk bisnis yang butuh multiple automations',
    features: [
      '3-5 automation workflows',
      'Advanced multi-platform',
      'Integration ke 5-10 tools',
      'Real-time dashboard',
      '3 bulan support',
      'Training & documentation',
      'Priority support',
      'Monthly optimization'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    description: 'Complete automation solution untuk scale besar',
    features: [
      'Unlimited workflows',
      'Complex integrations',
      'Custom API development',
      'Dedicated engineer',
      '12 bulan support',
      'Advanced analytics',
      'White-glove service',
      'Monthly sessions'
    ],
    recommended: false
  }
]

export default function PricingPackages() {
  return (
    <section className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <TextReveal className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Investasi yang ROI-nya Terlihat dalam Minggu Pertama
          </TextReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[21px] text-[#1D1D1F] max-w-3xl mx-auto font-normal">
              One-time fee. Sistem otomasi custom jadi milik Anda selamanya.
              <span className="block mt-2 text-[19px] text-[#86868B]">
                Hemat 20+ jam/minggu = ROI tercapai dalam 2-3 bulan.
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards - Clean Grid with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ perspective: '1500px' }}>
          {packages.map((pkg, index) => (
            <TiltPricingCard key={index} index={index} recommended={pkg.recommended}>
              {/* Recommended Badge */}
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-[#0071E3] text-white text-[12px] font-medium px-4 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-[28px] font-semibold text-black mb-2">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <div className="text-[40px] font-semibold text-black">
                  {pkg.price}
                </div>
                <div className="text-[13px] text-[#86868B]">
                  {pkg.period === 'one-time' ? 'one-time setup' : 'custom quote'}
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] text-[#86868B] mb-8 leading-relaxed">
                {pkg.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-black">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 rounded-full font-normal text-[15px] transition-colors ${
                  pkg.recommended
                    ? 'bg-[#0071E3] hover:bg-[#0051D5] text-white'
                    : 'bg-white hover:bg-gray-50 text-black border border-gray-300'
                }`}
              >
                {pkg.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </TiltPricingCard>
          ))}
        </div>

        {/* Bottom Notes */}
        <div className="mt-20 space-y-6">
          {/* Flexible Pricing Note */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <p className="text-[17px] text-black font-medium mb-2">
              Harga di atas adalah estimasi starting point
            </p>
            <p className="text-[15px] text-[#86868B]">
              Setiap bisnis unik. Di discovery call, kami akan kasih exact quote based on kompleksitas automation yang Anda butuhkan.
            </p>
          </div>

          {/* Payment Terms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              'No hidden fees',
              'Payment in milestones',
              'Money-back guarantee'
            ].map((item, idx) => (
              <div key={idx} className="text-[14px] text-[#86868B]">
                <Check className="w-4 h-4 text-black inline mr-2" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}