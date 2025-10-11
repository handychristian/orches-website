'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 'customer-communication',
    title: 'Customer Communication Hub',
    tagline: 'Automate Every Conversation.',
    description: 'Reduce customer service costs by 70% with intelligent automated responses and follow-ups.',
    background: 'bg-black',
    textColor: 'text-white',
    image: '/assets/hero-automation.png',
    primaryButton: { text: 'Schedule Discovery Call', variant: 'primary' },
    secondaryButton: { text: 'View ROI Calculator', variant: 'outline' }
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Center',
    tagline: 'Data-Driven Decisions.',
    description: 'Transform raw business data into actionable insights that save 20+ hours weekly.',
    background: 'bg-gray-50',
    textColor: 'text-black',
    image: '/assets/ai-workflow-1.png',
    primaryButton: { text: 'Schedule Discovery Call', variant: 'primary' },
    secondaryButton: { text: 'View Case Studies', variant: 'outline' }
  }
]

const gridProducts = [
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    subtitle: 'Eliminate manual processes and reduce operational costs by 60%.',
    background: 'bg-gray-50',
    textColor: 'text-black',
    image: '/assets/ai-workflow-2.png'
  },
  {
    id: 'smart-scheduling',
    title: 'Smart Scheduling System',
    subtitle: 'Automated appointment booking that works 24/7 for your business.',
    background: 'bg-gray-50',
    textColor: 'text-black',
    image: '/assets/ai-workflow-3.png'
  },
  {
    id: 'inventory-optimizer',
    title: 'Inventory Optimizer Pro',
    subtitle: 'Prevent stockouts and overstock. Save money automatically.',
    background: 'bg-black',
    textColor: 'text-white',
    image: '/assets/ai-workflow-4.png'
  },
  {
    id: 'financial-tracker',
    title: 'Financial Tracker Plus',
    subtitle: 'Track revenue, expenses, and profit margins in real-time.',
    background: 'bg-gray-50',
    textColor: 'text-black',
    image: '/assets/ai-workflow-5.png'
  }
]

export default function ProductShowcase() {
  return (
    <div className="w-full">
      {/* Full-Screen Product Heroes */}
      {products.map((product, index) => (
        <motion.section
          key={product.id}
          className={`min-h-screen flex items-center justify-center ${product.background} relative overflow-hidden`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-5 text-center relative z-10">
            {/* Product Title */}
            <motion.h2
              className={`text-7xl sm:text-8xl lg:text-9xl font-semibold ${product.textColor} mb-4 tracking-tight leading-none`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {product.title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Product Tagline */}
            <motion.p
              className={`text-3xl sm:text-4xl ${product.textColor} mb-8 font-light`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {product.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
                  product.background === 'bg-black'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {product.primaryButton.text}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
                  product.background === 'bg-black'
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {product.secondaryButton.text}
              </Button>
            </motion.div>

            {/* Product Image */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                style={{
                  filter: product.background === 'bg-black'
                    ? "drop-shadow(0 30px 60px rgba(255,255,255,0.1))"
                    : "drop-shadow(0 30px 60px rgba(0,0,0,0.15))"
                }}
              />
            </motion.div>
          </div>
        </motion.section>
      ))}

      {/* 2x2 Grid Section - Apple Style */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {gridProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className={`min-h-[80vh] flex flex-col items-center justify-center ${product.background} p-8 text-center relative overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Product Title */}
              <motion.h3
                className={`text-4xl sm:text-5xl lg:text-6xl font-semibold ${product.textColor} mb-4 tracking-tight leading-tight`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {product.title}
              </motion.h3>

              {/* Product Subtitle */}
              <motion.p
                className={`text-lg sm:text-xl ${product.textColor} mb-8 max-w-md leading-relaxed opacity-80`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {product.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Button
                  size="lg"
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    product.background === 'bg-black'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Schedule Discovery Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    product.background === 'bg-black'
                      ? 'border-white text-white hover:bg-white hover:text-black'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  View ROI Calculator
                </Button>
              </motion.div>

              {/* Product Image */}
              <motion.div
                className="max-w-sm mx-auto group-hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto rounded-xl shadow-xl"
                  style={{
                    filter: product.background === 'bg-black'
                      ? "drop-shadow(0 20px 40px rgba(255,255,255,0.1))"
                      : "drop-shadow(0 20px 40px rgba(0,0,0,0.15))"
                  }}
                />
              </motion.div>

              {/* Hover overlay effect */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                  product.background === 'bg-black' ? 'bg-white' : 'bg-black'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section - Apple Style */}
      <section className="py-20 bg-gray-50 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl sm:text-5xl font-semibold text-black mb-6 tracking-tight">
            Ready to automate
            <br />
            your business processes?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Free discovery call to identify which repetitive tasks we can automate.
            See if we can save your business 20+ hours weekly.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium"
          >
            Schedule Free Discovery Call
          </Button>
        </motion.div>
      </section>
    </div>
  )
}