'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GraduationCap, Target, Rocket, Gift, BookOpen, Building } from 'lucide-react'

const learningOption = {
  id: 'ai-learning',
  icon: BookOpen,
  badge: 'COMING SOON',
  badgeColor: 'bg-orange-500',
  title: 'Komunitas Belajar AI OrchesAI',
  subtitle: 'Program learning sedang kami persiapkan',
  features: [
    'Pahami dasar-dasar AI & kemungkinan yang bisa dilakukan',
    'Praktek langsung pakai AI tools & automation',
    'Lihat contoh real AI use cases di berbagai industri',
    'Buat AI assistant pertama kamu step-by-step',
    'Join komunitas AI enthusiasts & learners Indonesia'
  ],
  cta: 'Join Waitlist & Tanya-tanya',
  ctaStyle: 'bg-orange-600 hover:bg-orange-700 text-white',
  href: 'https://wa.me/6285161912446?text=Halo,%20saya%20tertarik%20join%20waitlist%20untuk%20program%20belajar%20AI'
}

export default function EducationBridge() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200/50 rounded-full mb-6 shadow-sm"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">AI Learning Path</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight"
          >
            <span className="block">Belum Siap Invest Besar?</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Atau Mau Belajar Dulu?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4 md:px-0 break-words"
          >
            Kalau belum siap invest besar, <span className="font-semibold text-gray-900">atau mungkin mau belajar AI dulu</span>, kami sedang persiapkan program learning yang bisa jadi alternative
          </motion.p>
        </div>

        {/* Single Card */}
        <div className="flex justify-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden max-w-sm md:max-w-lg w-full mx-2 md:mx-0"
          >
            {/* Badge */}
            <div className={`inline-flex items-center px-3 py-1 ${learningOption.badgeColor} text-white text-xs font-bold rounded-full mb-4 md:mb-6`}>
              {learningOption.badge}
            </div>

            {/* Icon & Title */}
            <div className="flex items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-gray-900 leading-tight break-words">{learningOption.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{learningOption.subtitle}</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {learningOption.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 md:gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 leading-relaxed break-words">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              className={`w-full ${learningOption.ctaStyle} font-medium py-2.5 md:py-3 rounded-lg transition-colors text-base md:text-lg`}
              asChild
            >
              <a
                href={learningOption.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {learningOption.cta}
              </a>
            </Button>

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 text-base md:text-lg font-medium px-4 md:px-0">
            "Join waitlist sekarang & dapatkan early access + special price"
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm text-orange-700 font-medium">Program launching soon ⏰</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}