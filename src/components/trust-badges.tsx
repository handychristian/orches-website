'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Zap } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    text: '30-Day Warranty'
  },
  {
    icon: Clock,
    text: '2-3 Minggu Setup'
  },
  {
    icon: Zap,
    text: 'Win-Win Guarantee'
  }
]

export default function TrustBadges() {
  return (
    <section className="py-12 px-6 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          {badges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-green-600" strokeWidth={2.5} />
                </div>
                <span className="text-[15px] font-medium text-[#1D1D1F]">
                  {badge.text}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
