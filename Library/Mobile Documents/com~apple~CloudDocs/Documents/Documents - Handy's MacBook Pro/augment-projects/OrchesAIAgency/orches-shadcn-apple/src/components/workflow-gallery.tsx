'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, TrendingUp, FileText, MessageCircle, BarChart3 } from 'lucide-react'

const workflows = [
  {
    title: "Customer Service Automation",
    description: "AI-powered customer support workflow that handles inquiries 24/7 with intelligent routing and response generation",
    image: "/assets/ai-workflow-1.png",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-500",
    metrics: "98% satisfaction rate"
  },
  {
    title: "Sales Pipeline Optimization",
    description: "Intelligent lead scoring and nurturing system that maximizes conversion rates through personalized engagement",
    image: "/assets/ai-workflow-2.png",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    metrics: "35% higher conversions"
  },
  {
    title: "Document Processing",
    description: "Automated document analysis and data extraction for streamlined business operations",
    image: "/assets/ai-workflow-3.png",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    metrics: "10x faster processing"
  },
  {
    title: "Marketing Automation",
    description: "Multi-channel campaign orchestration with smart targeting and performance optimization",
    image: "/assets/ai-workflow-4.png",
    icon: Sparkles,
    color: "from-orange-500 to-red-500",
    metrics: "250% ROI improvement"
  },
  {
    title: "Business Intelligence",
    description: "Real-time analytics and reporting dashboard for data-driven decision making",
    image: "/assets/ai-workflow-5.png",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-500",
    metrics: "Real-time insights"
  }
]

const stats = [
  { number: "10M+", label: "Transactions/day", icon: "⚡" },
  { number: "99.99%", label: "Uptime SLA", icon: "🛡️" },
  { number: "50ms", label: "Avg. Response", icon: "🚀" }
]

export default function WorkflowGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-24 px-5 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border-purple-200/50 px-4 py-2 mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Workflow Gallery
            </Badge>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-5 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(45deg, #1d1d1f, #6366f1, #8b5cf6, #1d1d1f)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              AI Workflow Gallery
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our comprehensive suite of AI-powered automation workflows designed for Indonesian enterprises.
          </motion.p>
        </motion.div>

        {/* Enhanced Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {workflows.map((workflow, index) => {
            const IconComponent = workflow.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Card
                    className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl bg-gradient-to-br from-white to-gray-50 ${
                      selectedImage === index ? 'ring-2 ring-blue-500/50' : ''
                    }`}
                    onClick={() => setSelectedImage(selectedImage === index ? null : index)}
                  >
                    <CardContent className="p-0 relative">
                      {/* Enhanced image container */}
                      <motion.div
                        className="h-64 relative overflow-hidden rounded-t-2xl"
                        style={{
                          backgroundImage: `url(${workflow.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        {/* Gradient overlay */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${workflow.color} opacity-20 transition-opacity duration-300`}
                          animate={{
                            opacity: hoveredCard === index ? 0.3 : 0.1
                          }}
                        />

                        {/* Floating icon */}
                        <motion.div
                          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center"
                          animate={{
                            scale: hoveredCard === index ? 1.1 : 1,
                            rotate: hoveredCard === index ? 5 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className={`w-6 h-6 bg-gradient-to-r ${workflow.color} bg-clip-text text-transparent`} />
                        </motion.div>

                        {/* Metrics badge */}
                        <motion.div
                          className="absolute bottom-4 left-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: hoveredCard === index ? 1 : 0,
                            x: hoveredCard === index ? 0 : -20
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 shadow-lg">
                            {workflow.metrics}
                          </Badge>
                        </motion.div>

                        {/* Play button overlay */}
                        <AnimatePresence>
                          {selectedImage === index && (
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div
                                className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                                animate={{
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Hover particle effects */}
                        {hoveredCard === index && (
                          <motion.div className="absolute inset-0 pointer-events-none">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{
                                  left: `${20 + i * 30}%`,
                                  top: `${30 + i * 20}%`
                                }}
                                animate={{
                                  y: [-10, -30, -10],
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Enhanced content */}
                      <motion.div
                        className="p-6 relative"
                        animate={{
                          backgroundColor: hoveredCard === index ? "rgba(249, 250, 251, 1)" : "rgba(255, 255, 255, 1)"
                        }}
                      >
                        <motion.h3
                          className="text-xl font-semibold text-gray-900 mb-3 leading-tight"
                          animate={{
                            color: hoveredCard === index ? "#1f2937" : "#374151"
                          }}
                        >
                          {workflow.title}
                        </motion.h3>
                        <motion.p
                          className="text-gray-600 leading-relaxed text-sm"
                          animate={{
                            opacity: hoveredCard === index ? 0.9 : 0.8
                          }}
                        >
                          {workflow.description}
                        </motion.p>

                        {/* Animated underline */}
                        <motion.div
                          className={`absolute bottom-0 left-6 h-0.5 bg-gradient-to-r ${workflow.color} rounded-full`}
                          animate={{
                            width: hoveredCard === index ? "calc(100% - 48px)" : "0%"
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="text-center p-16 bg-gradient-to-br from-gray-50 to-blue-50 border-0 rounded-3xl shadow-xl overflow-hidden relative">
            {/* Background animation */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <CardContent className="p-0 relative z-10">
              <motion.h3
                className="text-3xl font-semibold text-gray-900 mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Built for Scale
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our workflows handle millions of transactions daily for Indonesia's leading enterprises.
              </motion.p>

              <div className="flex justify-center gap-16 flex-wrap">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className="text-6xl mb-3"
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 2
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-4xl font-semibold text-blue-600 mb-2"
                      animate={{
                        scale: [1, 1.02, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}