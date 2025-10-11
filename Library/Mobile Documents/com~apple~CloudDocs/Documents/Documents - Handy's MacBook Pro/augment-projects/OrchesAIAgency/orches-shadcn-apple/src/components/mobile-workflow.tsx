'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MessageSquare,
  Send,
  Bot,
  FileText,
  DollarSign,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Sparkles,
  Calculator,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  Download,
  Share,
  Copy,
  X
} from 'lucide-react'

// Same data as desktop version
const scenarioTemplates = [
  {
    id: 'website',
    title: 'Website Development',
    shortTitle: 'Website',
    example: 'Halo, saya butuh website untuk toko online saya yang jual fashion. Budget sekitar 15-20 juta. Kapan bisa mulai?',
    estimatedPrice: 17500000,
    timeline: '4-6 weeks',
    features: ['E-commerce platform', 'Payment gateway', 'Admin dashboard', 'Mobile responsive', 'SEO optimization']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    shortTitle: 'Mobile App',
    example: 'Saya mau bikin aplikasi mobile untuk delivery makanan. Fitur seperti Gojek tapi khusus makanan. Budget maksimal 50 juta.',
    estimatedPrice: 45000000,
    timeline: '8-12 weeks',
    features: ['iOS & Android app', 'Real-time tracking', 'Payment integration', 'Push notifications', 'Admin panel']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Campaign',
    shortTitle: 'Marketing',
    example: 'Butuh digital marketing untuk brand skincare baru. Target audience wanita 20-35 tahun. Budget 10 juta per bulan.',
    estimatedPrice: 10000000,
    timeline: '3 months campaign',
    features: ['Social media management', 'Google Ads', 'Content creation', 'Influencer outreach', 'Monthly reporting']
  },
  {
    id: 'branding',
    title: 'Branding & Logo Design',
    shortTitle: 'Branding',
    example: 'Startup tech baru butuh complete branding package. Logo, brand guideline, website, dan marketing materials. Budget 25 juta.',
    estimatedPrice: 25000000,
    timeline: '6-8 weeks',
    features: ['Logo design', 'Brand guidelines', 'Business cards', 'Website design', 'Marketing materials']
  }
]

const processingSteps = [
  { id: 1, text: 'Menganalisis pesan client...', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 2, text: 'Mengekstrak requirements...', icon: <Bot className="w-4 h-4" /> },
  { id: 3, text: 'Mendeteksi budget range...', icon: <Calculator className="w-4 h-4" /> },
  { id: 4, text: 'Memilih template proposal...', icon: <FileText className="w-4 h-4" /> },
  { id: 5, text: 'Menghitung pricing...', icon: <DollarSign className="w-4 h-4" /> },
  { id: 6, text: 'Generating proposal...', icon: <Sparkles className="w-4 h-4" /> }
]

interface MobileWorkflowProps {
  onTimeSaved?: (minutes: number) => void;
}

export default function MobileWorkflow({ onTimeSaved }: MobileWorkflowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedTemplate, setSelectedTemplate] = useState(scenarioTemplates[0])
  const [clientMessage, setClientMessage] = useState(selectedTemplate.example)
  const [processingIndex, setProcessingIndex] = useState(0)
  const [generatedProposal, setGeneratedProposal] = useState<any>(null)
  const [generatedInvoice, setGeneratedInvoice] = useState<any>(null)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [startTime, setStartTime] = useState<number>(0)
  const [showDocumentModal, setShowDocumentModal] = useState<'proposal' | 'invoice' | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [whatsappMessages, setWhatsappMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [deliveryStatus, setDeliveryStatus] = useState<'sending' | 'delivered' | 'read'>('sending')

  const steps = [
    { id: 'input', title: 'Client Request', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'processing', title: 'AI Processing', icon: <Bot className="w-5 h-5" /> },
    { id: 'proposal', title: 'Proposal Generated', icon: <FileText className="w-5 h-5" /> },
    { id: 'invoice', title: 'Invoice Ready', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'whatsapp', title: 'WhatsApp Delivery', icon: <Send className="w-5 h-5" /> }
  ]

  // Swipe gesture handler
  const handleSwipeGesture = (event: any, info: PanInfo) => {
    if (info.offset.x > 100 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    } else if (info.offset.x < -100 && currentSlide < steps.length - 1) {
      if (currentSlide === 0 && generatedProposal) {
        setCurrentSlide(currentSlide + 1)
      } else if (currentSlide === 1 && generatedProposal) {
        setCurrentSlide(currentSlide + 1)
      } else if (currentSlide === 2 && generatedInvoice) {
        setCurrentSlide(currentSlide + 1)
      } else if (currentSlide === 3 && whatsappMessages.length > 0) {
        setCurrentSlide(currentSlide + 1)
      }
    }
  }


  // Auto-advance processing
  useEffect(() => {
    if (isProcessing) {
      setStartTime(Date.now())
      const timer = setInterval(() => {
        setTimeElapsed(prev => prev + 0.1)
      }, 100)

      const interval = setInterval(() => {
        setProcessingIndex(prev => {
          if (prev >= processingSteps.length - 1) {
            setTimeout(() => {
              generateProposal()
              setIsProcessing(false)
              setCurrentSlide(2) // Go to proposal slide
            }, 1000)
            return prev
          }
          return prev + 1
        })
      }, 800)

      return () => {
        clearInterval(interval)
        clearInterval(timer)
      }
    }
  }, [isProcessing])

  const generateProposal = () => {
    const proposal = {
      id: `PROP-${Date.now()}`,
      clientName: 'Client',
      projectType: selectedTemplate.title,
      estimatedPrice: selectedTemplate.estimatedPrice,
      timeline: selectedTemplate.timeline,
      features: selectedTemplate.features,
      createdAt: new Date().toLocaleDateString('id-ID'),
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID')
    }
    setGeneratedProposal(proposal)
  }

  const generateInvoice = () => {
    if (!generatedProposal) return

    const invoice = {
      id: `INV-${Date.now()}`,
      proposalId: generatedProposal.id,
      clientName: generatedProposal.clientName,
      projectType: generatedProposal.projectType,
      amount: generatedProposal.estimatedPrice,
      downPayment: Math.round(generatedProposal.estimatedPrice * 0.5),
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID'),
      createdAt: new Date().toLocaleDateString('id-ID'),
      paymentLink: `https://payment.orchesai.com/invoice/${Date.now()}`
    }
    setGeneratedInvoice(invoice)

    // Calculate time saved
    const automationTime = (Date.now() - startTime) / 1000 / 60
    const timeSaved = 45 - automationTime

    if (onTimeSaved) {
      onTimeSaved(Math.max(timeSaved, 40))
    }

    // Show WhatsApp conversation with proposal and approval first
    showWhatsAppApprovalFlow()

    setCurrentSlide(3) // Go to invoice slide
  }

  const showWhatsAppApprovalFlow = () => {
    // Show the complete conversation leading to invoice
    setWhatsappMessages([
      {
        id: 0,
        type: 'incoming',
        text: clientMessage,
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        status: 'read',
        isOriginal: true
      },
      {
        id: 1,
        type: 'system',
        text: '🤖 OrchesAI Assistant activated\n📄 Generating custom proposal...',
        timestamp: new Date(Date.now() - 240000), // 4 minutes ago
        status: 'system'
      },
      {
        id: 2,
        type: 'outgoing',
        text: `Halo! Terima kasih untuk inquiry ${selectedTemplate.title} nya.

Berikut proposal custom untuk project Anda:

📋 **Project**: ${generatedProposal.projectType}
💰 **Investment**: Rp ${generatedProposal.estimatedPrice.toLocaleString('id-ID')}
⏱️ **Timeline**: ${generatedProposal.timeline}

Proposal lengkap sudah saya kirim via attachment.

---
🤖 *Auto-generated by OrchesAI Assistant*`,
        timestamp: new Date(Date.now() - 180000), // 3 minutes ago
        status: 'read'
      },
      {
        id: 3,
        type: 'outgoing',
        text: null,
        document: {
          name: `Proposal_${generatedProposal.id}.pdf`,
          size: '245 KB',
          type: 'pdf'
        },
        timestamp: new Date(Date.now() - 120000), // 2 minutes ago
        status: 'read'
      },
      {
        id: 4,
        type: 'incoming',
        text: 'Wah mantap nih proposalnya! 😍 Ok deal, saya approve semuanya. Pricing juga oke banget. Tolong kirim invoice nya ya buat DP 50%',
        timestamp: new Date(Date.now() - 60000), // 1 minute ago
        status: 'read'
      }
    ])
  }

  const sendInvoiceToWhatsApp = () => {
    setDeliveryStatus('sending')
    setCurrentSlide(4) // Go to WhatsApp slide

    // Continue from existing conversation with proper IDs (5-10)
    // Messages 0-4 are already set by showWhatsAppApprovalFlow

    // AI processing notification
    setTimeout(() => {
      setWhatsappMessages(prev => [...prev, {
        id: 5,
        type: 'system',
        text: '🤖 OrchesAI Assistant activated\n⚡ Auto-generating personalized invoice message...',
        timestamp: new Date(),
        status: 'system'
      }])
    }, 300)

    // Simulate sending process with personalized message
    setTimeout(() => {
      const personalizedMessage = generatePersonalizedMessage()
      setWhatsappMessages(prev => [...prev, {
        id: 6,
        type: 'outgoing',
        text: personalizedMessage,
        timestamp: new Date(),
        status: 'sending'
      }])
      setIsTyping(true)
    }, 1500)

    // Update message status to delivered
    setTimeout(() => {
      setWhatsappMessages(prev => prev.map(msg =>
        msg.id === 6 ? { ...msg, status: 'delivered' } : msg
      ))
      setDeliveryStatus('delivered')
      setIsTyping(false)
    }, 3000)

    // Show invoice document in chat (with system notification)
    setTimeout(() => {
      setWhatsappMessages(prev => [...prev, {
        id: 7,
        type: 'system',
        text: '📄 AI generating invoice PDF...\n🔗 Payment link created automatically',
        timestamp: new Date(),
        status: 'system'
      }])
    }, 3300)

    setTimeout(() => {
      setWhatsappMessages(prev => [...prev, {
        id: 8,
        type: 'outgoing',
        text: null,
        document: {
          name: `Invoice_${generatedInvoice?.id}.pdf`,
          size: '156 KB',
          type: 'pdf'
        },
        timestamp: new Date(),
        status: 'delivered'
      }])
    }, 4000)

    // Client reads messages (extended timing to 15s total)
    setTimeout(() => {
      setWhatsappMessages(prev => prev.map(msg =>
        ({ ...msg, status: 'read' })
      ))
      setDeliveryStatus('read')
    }, 8000)

    // Client typing response (more time to read)
    setTimeout(() => {
      setIsTyping(true)
    }, 10000)

    // Client response (15s total for better pacing)
    setTimeout(() => {
      setIsTyping(false)
      setWhatsappMessages(prev => [...prev, {
        id: 9,
        type: 'incoming',
        text: 'Terima kasih! Invoice sudah saya terima. Untuk DP 50% akan saya transfer hari ini. Kapan project bisa dimulai?',
        timestamp: new Date(),
        status: 'read'
      }])

      // AI completion notification
      setTimeout(() => {
        setWhatsappMessages(prev => [...prev, {
          id: 10,
          type: 'system',
          text: `✅ OrchesAI workflow completed successfully!\n⚡ Total time: ${timeElapsed.toFixed(1)}s (vs 45min manual)`,
          timestamp: new Date(),
          status: 'system'
        }])
      }, 2000)
    }, 13000)
  }

  const generatePersonalizedMessage = () => {
    const clientName = extractClientName(clientMessage)
    const projectType = selectedTemplate.title.toLowerCase()

    return `Halo ${clientName}! 😊

Terima kasih sudah approve proposal untuk project ${projectType} kita.

Berikut invoice untuk pembayaran DP 50%:
• Total: Rp ${generatedInvoice?.amount.toLocaleString('id-ID')}
• DP: Rp ${generatedInvoice?.downPayment.toLocaleString('id-ID')}
• Due: ${generatedInvoice?.dueDate}

Link pembayaran: ${generatedInvoice?.paymentLink}

Setelah DP diterima, kita langsung mulai project dalam 1-2 hari kerja. Ada pertanyaan? 🚀

---
🤖 *Auto-generated by OrchesAI Assistant*
⚡ *Invoice created in ${timeElapsed.toFixed(1)}s vs 45min manual process*`
  }

  const extractClientName = (message: string) => {
    if (message.toLowerCase().includes('saya')) return 'Pak/Bu'
    return 'Client'
  }

  const handleSendRequest = () => {
    setIsProcessing(true)
    setProcessingIndex(0)
    setTimeElapsed(0)
    setCurrentSlide(1) // Go to processing slide
  }

  const resetWorkflow = () => {
    setCurrentSlide(0)
    setIsProcessing(false)
    setProcessingIndex(0)
    setGeneratedProposal(null)
    setGeneratedInvoice(null)
    setTimeElapsed(0)
    setStartTime(0)
    setWhatsappMessages([])
    setIsTyping(false)
    setDeliveryStatus('sending')
  }

  const handleTemplateSelect = (template: typeof scenarioTemplates[0]) => {
    setSelectedTemplate(template)
    setClientMessage(template.example)
  }

  // Navigation helpers
  const canGoNext = () => {
    if (currentSlide === 0) return !!generatedProposal
    if (currentSlide === 1) return !!generatedProposal
    if (currentSlide === 2) return !!generatedInvoice
    if (currentSlide === 3) return whatsappMessages.length > 0
    return false
  }

  const canGoPrevious = () => currentSlide > 0

  return (
    <div className="relative">
      {/* Mobile Progress Indicator */}
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Swiper Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleSwipeGesture}
        >
          {/* Slide 1: Client Request Input */}
          <div className="w-full flex-shrink-0 px-4">
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Client WhatsApp Message
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Choose scenario or customize your message
                  </p>
                </div>

                {/* Template Selector - Mobile Grid */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quick Templates:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {scenarioTemplates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => handleTemplateSelect(template)}
                        className={`p-3 text-center text-sm rounded-lg border transition-all duration-200 ${
                          selectedTemplate.id === template.id
                            ? 'bg-blue-50 border-blue-300 text-blue-700'
                            : 'bg-gray-50 border-gray-200 text-gray-600'
                        }`}
                      >
                        {template.shortTitle}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Input - Mobile Optimized */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Message:
                  </label>
                  <textarea
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                    placeholder="Type client request here..."
                  />
                </div>

                <Button
                  onClick={handleSendRequest}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-base font-medium"
                  disabled={!clientMessage.trim() || isProcessing}
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Client Request
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Slide 2: AI Processing */}
          <div className="w-full flex-shrink-0 px-4">
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Processing Request
                  </h3>
                  <p className="text-gray-600 text-sm">
                    AI is analyzing your client's message
                  </p>
                </div>

                {/* Processing Steps - Mobile Optimized */}
                <div className="space-y-4">
                  {processingSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: index <= processingIndex ? 1 : 0.3,
                        x: 0
                      }}
                      className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                        index <= processingIndex
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        index < processingIndex
                          ? 'bg-green-600 text-white'
                          : index === processingIndex
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {index < processingIndex ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : index === processingIndex ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          step.icon
                        )}
                      </div>
                      <span className={`text-sm font-medium ${
                        index <= processingIndex ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Processing Stats */}
                <div className="mt-6 text-center">
                  <div className="text-lg font-semibold text-blue-600">
                    {timeElapsed.toFixed(1)}s
                  </div>
                  <div className="text-sm text-gray-600">Processing time</div>
                  <div className="text-xs text-green-600 mt-1">
                    Manual process: 45+ minutes
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Slide 3: Generated Proposal */}
          <div className="w-full flex-shrink-0 px-4">
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Proposal Generated
                  </h3>
                  {timeElapsed > 0 && (
                    <Badge className="bg-green-100 text-green-800 mb-2">
                      Generated in {timeElapsed.toFixed(1)}s
                    </Badge>
                  )}
                </div>

                {generatedProposal && (
                  <div className="space-y-4">
                    {/* Proposal Summary - Mobile Optimized */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Project Type</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {generatedProposal.projectType}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-sm text-gray-600">Price</div>
                        <div className="text-lg font-bold text-green-600">
                          Rp {(generatedProposal.estimatedPrice / 1000000).toFixed(1)}M
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-sm text-gray-600">Timeline</div>
                        <div className="text-sm font-semibold text-blue-600">
                          {generatedProposal.timeline}
                        </div>
                      </div>
                    </div>

                    {/* Features List - Condensed for Mobile */}
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Included Features:</div>
                      <div className="grid grid-cols-1 gap-1">
                        {generatedProposal.features.slice(0, 3).map((feature: string, index: number) => (
                          <div key={index} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {generatedProposal.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{generatedProposal.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-6">
                      <Button
                        onClick={() => setShowDocumentModal('proposal')}
                        variant="outline"
                        className="w-full"
                      >
                        View Full Proposal
                      </Button>
                      <Button
                        onClick={generateInvoice}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Client Approved - Generate Invoice
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Slide 4: Generated Invoice */}
          <div className="w-full flex-shrink-0 px-4">
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Invoice Generated
                  </h3>
                  <Badge className="bg-purple-100 text-purple-800">
                    Ready to Send
                  </Badge>
                </div>

                {generatedInvoice && (
                  <div className="space-y-4">
                    {/* Invoice Summary */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Invoice ID</div>
                      <div className="text-lg font-mono font-semibold text-gray-900">
                        {generatedInvoice.id}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-sm text-gray-600">Down Payment</div>
                        <div className="text-lg font-bold text-purple-600">
                          Rp {(generatedInvoice.downPayment / 1000000).toFixed(1)}M
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-sm text-gray-600">Due Date</div>
                        <div className="text-sm font-semibold text-blue-600">
                          {generatedInvoice.dueDate}
                        </div>
                      </div>
                    </div>

                    {/* Payment Link */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-2">Payment Link</div>
                      <div className="text-xs text-blue-600 font-mono break-all">
                        {generatedInvoice.paymentLink}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-6">
                      <Button
                        onClick={() => setShowDocumentModal('invoice')}
                        variant="outline"
                        className="w-full"
                      >
                        View Full Invoice
                      </Button>
                      <Button
                        onClick={sendInvoiceToWhatsApp}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send via WhatsApp
                      </Button>
                    </div>

                    {/* Completion Stats */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                        🎉 Automation Complete!
                      </h4>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg font-bold text-green-600">{timeElapsed.toFixed(1)}s</div>
                          <div className="text-xs text-gray-600">Automation</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-red-600">45m</div>
                          <div className="text-xs text-gray-600">Manual</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-blue-600">99.8%</div>
                          <div className="text-xs text-gray-600">Saved</div>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={resetWorkflow}
                      variant="outline"
                      className="w-full mt-4"
                    >
                      Try Another Scenario
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Slide 5: WhatsApp Chat Interface */}
          <div className="w-full flex-shrink-0 px-4">
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    WhatsApp Delivery
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      deliveryStatus === 'sending' ? 'bg-yellow-500' :
                      deliveryStatus === 'delivered' ? 'bg-blue-500' :
                      'bg-green-500'
                    }`}></div>
                    <span className="text-sm text-gray-600 capitalize">{deliveryStatus}</span>
                  </div>
                </div>

                {/* Authentic WhatsApp Header with AI Agent Branding */}
                <div className="bg-[#075E54] text-white p-3 rounded-t-lg flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm flex items-center">
                      OrchesAI Assistant
                      <div className="ml-1 px-1.5 py-0.5 bg-blue-500 bg-opacity-20 rounded-full text-xs">
                        🤖 AI
                      </div>
                    </div>
                    <div className="text-xs text-green-200 flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                      {deliveryStatus === 'sending' ? 'Processing...' :
                       deliveryStatus === 'delivered' ? 'AI active' :
                       'AI complete'}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <button className="p-1.5 hover:bg-[#128C7E] rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Mobile WhatsApp Chat Interface */}
                <div className="bg-[#E5DDD5] bg-opacity-30 p-3 h-80 overflow-y-auto"
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.05'%3E%3Cpath d='m0 30l30-30h-30v30z'/%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                  <div className="space-y-3">
                    {whatsappMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.type === 'system' ? 'justify-center' :
                          message.type === 'outgoing' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[85%] p-2.5 relative shadow-sm ${
                            message.type === 'system'
                              ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-gray-700 rounded-lg mx-auto text-center'
                              : message.type === 'outgoing'
                              ? 'bg-[#DCF8C6] text-gray-900 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-sm'
                              : message.isOriginal
                              ? 'bg-[#E3F2FD] border-l-4 border-blue-500 text-gray-900 rounded-tl-sm rounded-tr-lg rounded-bl-lg rounded-br-lg'
                              : 'bg-white text-gray-900 rounded-tl-lg rounded-tr-sm rounded-bl-lg rounded-br-lg'
                          }`}
                        >
                          {/* Original Request Label */}
                          {message.isOriginal && (
                            <div className="text-xs text-blue-600 font-medium mb-2 flex items-center">
                              <MessageSquare className="w-3 h-3 mr-1" />
                              Original Client Request
                            </div>
                          )}

                          {/* Text Message */}
                          {message.text && (
                            <div className="text-xs whitespace-pre-wrap">
                              {message.text}
                            </div>
                          )}

                          {/* Document Message */}
                          {message.document && (
                            <div className="flex items-center space-x-2 p-2 bg-white bg-opacity-20 rounded">
                              <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded">
                                <FileText className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-medium text-xs">{message.document.name}</div>
                                <div className="text-xs opacity-75">{message.document.size}</div>
                              </div>
                            </div>
                          )}

                          {/* WhatsApp-style Message Status */}
                          <div className="flex items-center justify-end mt-1.5 space-x-1">
                            <span className="text-xs text-gray-500" style={{ fontSize: '10px' }}>
                              {message.timestamp.toLocaleTimeString('id-ID', {
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                            {message.type === 'outgoing' && (
                              <div className="flex ml-1">
                                {message.status === 'sending' && (
                                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                  </svg>
                                )}
                                {message.status === 'delivered' && (
                                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                                {message.status === 'read' && (
                                  <div className="flex -space-x-0.5">
                                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* WhatsApp-style Typing Indicator */}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white shadow-sm p-3 rounded-tl-lg rounded-tr-sm rounded-bl-lg rounded-br-lg max-w-16">
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* WhatsApp Message Input Area */}
                <div className="bg-[#F0F0F0] p-3 rounded-b-lg flex items-center space-x-2 border-t">
                  <div className="flex-1 bg-white rounded-full px-3 py-2 text-xs text-gray-500">
                    Type a message...
                  </div>
                  <button className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white">
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {whatsappMessages.length > 2 && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                      🎉 Workflow Complete!
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{timeElapsed.toFixed(1)}s</div>
                        <div className="text-xs text-gray-600">Total Time</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">100%</div>
                        <div className="text-xs text-gray-600">Automated</div>
                      </div>
                    </div>

                    <Button
                      onClick={resetWorkflow}
                      variant="outline"
                      className="w-full mt-3"
                      size="sm"
                    >
                      Try Another Scenario
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          variant="outline"
          size="sm"
          disabled={!canGoPrevious()}
          className="flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>

        <div className="text-sm text-gray-600">
          {currentSlide + 1} of {steps.length}
        </div>

        <Button
          onClick={() => setCurrentSlide(Math.min(steps.length - 1, currentSlide + 1))}
          variant="outline"
          size="sm"
          disabled={!canGoNext()}
          className="flex items-center"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Document Modal */}
      {showDocumentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  {showDocumentModal === 'proposal' ? '📄 Full Proposal' : '🧾 Full Invoice'}
                </h3>
                <Button
                  onClick={() => setShowDocumentModal(null)}
                  variant="ghost"
                  size="sm"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {showDocumentModal === 'proposal' && generatedProposal && (
                <div className="space-y-4 text-sm">
                  <div>
                    <strong>Project:</strong> {generatedProposal.projectType}
                  </div>
                  <div>
                    <strong>Price:</strong> Rp {generatedProposal.estimatedPrice.toLocaleString('id-ID')}
                  </div>
                  <div>
                    <strong>Timeline:</strong> {generatedProposal.timeline}
                  </div>
                  <div>
                    <strong>Features:</strong>
                    <ul className="mt-1 ml-4 list-disc">
                      {generatedProposal.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Valid Until:</strong> {generatedProposal.validUntil}
                  </div>
                </div>
              )}

              {showDocumentModal === 'invoice' && generatedInvoice && (
                <div className="space-y-4 text-sm">
                  <div>
                    <strong>Invoice ID:</strong> {generatedInvoice.id}
                  </div>
                  <div>
                    <strong>Project:</strong> {generatedInvoice.projectType}
                  </div>
                  <div>
                    <strong>Total Amount:</strong> Rp {generatedInvoice.amount.toLocaleString('id-ID')}
                  </div>
                  <div>
                    <strong>Down Payment:</strong> Rp {generatedInvoice.downPayment.toLocaleString('id-ID')}
                  </div>
                  <div>
                    <strong>Due Date:</strong> {generatedInvoice.dueDate}
                  </div>
                  <div>
                    <strong>Payment Link:</strong>
                    <div className="mt-1 p-2 bg-gray-100 rounded text-xs break-all">
                      {generatedInvoice.paymentLink}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2 mt-6">
                <Button variant="outline" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}