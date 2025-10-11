'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  Workflow,
  BarChart3,
  Link2,
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const services = [
  {
    id: 'ai-assistants',
    title: 'AI Assistants',
    shortTitle: 'Assistants',
    description: 'Custom AI solutions tailored for Indonesian business needs',
    icon: Bot,
    color: 'from-blue-500 to-cyan-500',
    image: '/assets/ai-workflow-1.png',
    features: [
      'Bahasa Indonesia + English fluency',
      'Indonesian business law compliance',
      'Cultural context understanding',
      'Multi-platform integration'
    ],
    benefits: [
      { icon: Clock, text: '24/7 availability' },
      { icon: Sparkles, text: 'Smart responses' },
      { icon: Shield, text: 'Secure & compliant' }
    ],
    price: 'Starting from Rp 2,500,000/month'
  },
  {
    id: 'automation',
    title: 'Process Automation',
    shortTitle: 'Automation',
    description: 'Streamline repetitive tasks and optimize workflow efficiency',
    icon: Workflow,
    color: 'from-purple-500 to-pink-500',
    image: '/assets/ai-workflow-2.png',
    features: [
      'Document processing automation',
      'Invoice & inventory management',
      'Customer service automation',
      'Report generation & analytics'
    ],
    benefits: [
      { icon: Zap, text: '10x faster processing' },
      { icon: Check, text: '99.9% accuracy' },
      { icon: Shield, text: 'Error reduction' }
    ],
    price: 'Starting from Rp 5,000,000/month'
  },
  {
    id: 'analytics',
    title: 'Smart Analytics',
    shortTitle: 'Analytics',
    description: 'Transform your data into actionable business insights',
    icon: BarChart3,
    color: 'from-emerald-500 to-teal-500',
    image: '/assets/ai-workflow-3.png',
    features: [
      'Real-time dashboard analytics',
      'Predictive business forecasting',
      'Customer behavior analysis',
      'Market trend identification'
    ],
    benefits: [
      { icon: BarChart3, text: 'Real-time insights' },
      { icon: Sparkles, text: 'Predictive analytics' },
      { icon: Check, text: 'Data-driven decisions' }
    ],
    price: 'Starting from Rp 3,500,000/month'
  },
  {
    id: 'integration',
    title: 'System Integration',
    shortTitle: 'Integration',
    description: 'Connect AI capabilities seamlessly with existing systems',
    icon: Link2,
    color: 'from-orange-500 to-red-500',
    image: '/assets/ai-workflow-4.png',
    features: [
      'API development & integration',
      'Legacy system modernization',
      'Cloud migration support',
      'Security & compliance setup'
    ],
    benefits: [
      { icon: Link2, text: 'Seamless connectivity' },
      { icon: Shield, text: 'Enterprise security' },
      { icon: Zap, text: 'Quick deployment' }
    ],
    price: 'Custom pricing available'
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState('ai-assistants')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const activeServiceData = services.find(service => service.id === activeService)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our AI Solutions
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Intelligent solutions for
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              modern Indonesian businesses
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From AI assistants to workflow automation - we bring cutting-edge technology
            to Indonesian SMEs with solutions designed for your success.
          </motion.p>
        </motion.div>

        {/* Services Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
            {/* Tab List */}
            <motion.div variants={itemVariants} className="mb-12">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-2 bg-white border border-gray-200 rounded-2xl">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl data-[state=active]:bg-gray-50 data-[state=active]:shadow-sm transition-all duration-200"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} ${
                      activeService === service.id ? 'scale-110' : 'scale-100 opacity-70'
                    } transition-all duration-200`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-sm">{service.shortTitle}</div>
                      <div className="text-xs text-gray-500 hidden sm:block">{service.description.split(' ').slice(0, 3).join(' ')}...</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeServiceData && (
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <TabsContent value={activeService} className="mt-0">
                    <Card className="overflow-hidden border-0 shadow-2xl bg-white">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left: Content */}
                        <CardHeader className="p-8 lg:p-12">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${activeServiceData.color}`}>
                              <activeServiceData.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                                {activeServiceData.title}
                              </CardTitle>
                              <Badge className="bg-green-50 text-green-600 border-green-200">
                                {activeServiceData.price}
                              </Badge>
                            </div>
                          </div>

                          <CardDescription className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {activeServiceData.description}
                          </CardDescription>

                          {/* Features */}
                          <div className="space-y-4 mb-8">
                            <h4 className="font-semibold text-gray-900 text-lg">Key Features:</h4>
                            <div className="grid grid-cols-1 gap-3">
                              {activeServiceData.features.map((feature, index) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-3"
                                >
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-green-600" />
                                  </div>
                                  <span className="text-gray-700">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div className="space-y-4 mb-8">
                            <h4 className="font-semibold text-gray-900 text-lg">Benefits:</h4>
                            <div className="flex flex-wrap gap-4">
                              {activeServiceData.benefits.map((benefit, index) => (
                                <motion.div
                                  key={benefit.text}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl"
                                >
                                  <benefit.icon className="w-4 h-4 text-gray-600" />
                                  <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
                              Get Started
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="outline" className="rounded-full px-8">
                              Learn More
                            </Button>
                          </div>
                        </CardHeader>

                        {/* Right: Image */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 lg:min-h-[600px]">
                          <motion.img
                            key={activeServiceData.image}
                            src={activeServiceData.image}
                            alt={activeServiceData.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${activeServiceData.color} opacity-20`} />
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Tabs>
        </motion.div>

        {/* Quick Overview Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="cursor-pointer"
              onClick={() => setActiveService(service.id)}
            >
              <Card className={`relative overflow-hidden transition-all duration-300 ${
                hoveredCard === service.id ? 'shadow-xl border-gray-300' : 'shadow-md hover:shadow-lg'
              } ${activeService === service.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-4 ${
                    hoveredCard === service.id ? 'scale-110' : 'scale-100'
                  } transition-transform duration-200`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="text-sm font-medium text-gray-900">
                    {service.price}
                  </div>
                </CardContent>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 ${
                  hoveredCard === service.id ? 'opacity-5' : ''
                } transition-opacity duration-300`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-0">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to transform your business with AI?
                </h3>
                <p className="text-gray-600">
                  Schedule a free consultation to discuss your specific needs.
                </p>
              </div>
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full whitespace-nowrap">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}