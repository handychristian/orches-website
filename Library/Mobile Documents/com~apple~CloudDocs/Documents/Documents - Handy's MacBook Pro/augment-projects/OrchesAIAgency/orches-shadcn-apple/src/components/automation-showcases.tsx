'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, TrendingUp, Zap, Target } from 'lucide-react'

const automationShowcases = [
  {
    id: 'customer-service',
    title: 'Customer Service Automation',
    description: 'Automate 80% of customer inquiries with intelligent chatbots and automated follow-ups.',
    timeSaved: '35 hours/week',
    costReduction: '70%',
    roi: '300%',
    beforeText: 'Manual responses taking 2-3 hours daily',
    afterText: 'Instant responses 24/7 with human handoff when needed',
    industries: ['E-commerce', 'Restaurants', 'Services'],
    icon: <Clock className="w-6 h-6" />,
    color: 'blue'
  },
  {
    id: 'inventory-management',
    title: 'Inventory & Stock Automation',
    description: 'Prevent stockouts and overstock with automated reordering and inventory tracking.',
    timeSaved: '15 hours/week',
    costReduction: '45%',
    roi: '250%',
    beforeText: 'Manual stock checks and Excel spreadsheets',
    afterText: 'Automated alerts and reordering with real-time tracking',
    industries: ['Retail', 'Food & Beverage', 'Manufacturing'],
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'green'
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting Automation',
    description: 'Generate daily, weekly, and monthly financial reports automatically.',
    timeSaved: '20 hours/week',
    costReduction: '60%',
    roi: '400%',
    beforeText: 'Manual data entry and Excel calculations',
    afterText: 'Automated reports with real-time profit/loss tracking',
    industries: ['All Business Types', 'Professional Services', 'Retail'],
    icon: <Target className="w-6 h-6" />,
    color: 'purple'
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation & Follow-up',
    description: 'Automate lead capture, qualification, and nurturing sequences.',
    timeSaved: '25 hours/week',
    costReduction: '55%',
    roi: '350%',
    beforeText: 'Manual lead tracking and follow-up calls',
    afterText: 'Automated lead scoring and nurturing campaigns',
    industries: ['Real Estate', 'Insurance', 'B2B Services'],
    icon: <Zap className="w-6 h-6" />,
    color: 'orange'
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      text: 'text-blue-700',
      icon: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    green: {
      bg: 'from-green-50 to-green-100',
      border: 'border-green-200',
      text: 'text-green-700',
      icon: 'text-green-600',
      badge: 'bg-green-100 text-green-800 border-green-200'
    },
    purple: {
      bg: 'from-purple-50 to-purple-100',
      border: 'border-purple-200',
      text: 'text-purple-700',
      icon: 'text-purple-600',
      badge: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    orange: {
      bg: 'from-orange-50 to-orange-100',
      border: 'border-orange-200',
      text: 'text-orange-700',
      icon: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-800 border-orange-200'
    }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function AutomationShowcases() {
  return (
    <section className="py-24 px-5 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50 rounded-full mb-6 shadow-lg">
            <Zap className="w-4 h-4 mr-2" />
            Automation Possibilities
          </Badge>

          <h2 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Your
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Business Operations
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            See how automation can save your business 20+ hours weekly and reduce operational costs by up to 70%.
          </motion.p>
        </motion.div>

        {/* Automation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {automationShowcases.map((showcase, index) => {
            const colorClasses = getColorClasses(showcase.color)

            return (
              <motion.div
                key={showcase.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="h-full bg-white border-2 shadow-xl rounded-2xl overflow-hidden group cursor-pointer">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border} border`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className={colorClasses.icon}>
                            {showcase.icon}
                          </div>
                        </motion.div>

                        <div className="text-right">
                          <motion.div
                            className="text-3xl font-bold text-gray-900 leading-none"
                            animate={{
                              scale: [1, 1.05, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5
                            }}
                          >
                            {showcase.roi}
                          </motion.div>
                          <div className="text-sm text-gray-600">ROI</div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {showcase.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                        {showcase.description}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-4 mb-6">
                        <div className="flex-1 p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-lg font-semibold text-gray-900">{showcase.timeSaved}</div>
                          <div className="text-xs text-gray-600">Time Saved</div>
                        </div>
                        <div className="flex-1 p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-lg font-semibold text-gray-900">{showcase.costReduction}</div>
                          <div className="text-xs text-gray-600">Cost Reduction</div>
                        </div>
                      </div>

                      {/* Before/After */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 mb-1">Before:</div>
                            <div className="text-sm text-gray-600">{showcase.beforeText}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 mb-1">After:</div>
                            <div className="text-sm text-gray-600">{showcase.afterText}</div>
                          </div>
                        </div>
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <div className="text-sm font-medium text-gray-900 mb-2">Best for:</div>
                        <div className="flex flex-wrap gap-2">
                          {showcase.industries.map((industry, i) => (
                            <Badge
                              key={i}
                              className={`text-xs px-2 py-1 ${colorClasses.badge} border`}
                            >
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg"
                        >
                          Automate This Process
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Not sure which automation fits your business?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free discovery call to identify the best automation opportunities for your specific business needs.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl"
            >
              Schedule Free Discovery Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}