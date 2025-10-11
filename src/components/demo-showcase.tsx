'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MessageCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Zap,
  CheckCircle,
  Smartphone,
  FileSpreadsheet,
  Bot,
  Users,
  Play,
  Pause,
  Send,
  MoreVertical,
  Phone,
  Video,
  AlertTriangle,
  UserX,
  Shield
} from 'lucide-react'

// Mock database for each scenario
const mockDatabases = {
  'customer-service': [
    { orderId: '#12345', customer: 'Sari Dewi', status: 'Dikirim', courier: 'JNE', resi: 'JNE123456789', estimasi: 'Besok sore' },
    { orderId: '#12346', customer: 'Budi Santoso', status: 'Dikemas', courier: '-', resi: '-', estimasi: '2-3 hari' },
    { orderId: '#12347', customer: 'Andi Wijaya', status: 'Pending', courier: '-', resi: '-', estimasi: '-' },
    { orderId: '#12348', customer: 'Maya Sari', status: 'Dikirim', courier: 'JNT', resi: 'JNT987654321', estimasi: 'Hari ini' },
    { orderId: '#12349', customer: 'Rina Dewi', status: 'Selesai', courier: 'SiCepat', resi: 'SC456789123', estimasi: 'Delivered' },
  ],
  'inventory-management': [
    { item: 'Mie Sedaap', stock: 8, minimum: 15, harga: 'Rp 2,500', supplier: 'PT Mie Nusantara' },
    { item: 'Mie Indomie', stock: 25, minimum: 20, harga: 'Rp 2,200', supplier: 'PT Indofood' },
    { item: 'Mie ABC', stock: 12, minimum: 10, harga: 'Rp 2,800', supplier: 'PT ABC Foods' },
    { item: 'Susu Ultra', stock: 5, minimum: 15, harga: 'Rp 4,500', supplier: 'PT Ultra Milk' },
    { item: 'Teh Botol', stock: 30, minimum: 25, harga: 'Rp 3,200', supplier: 'PT Sosro' },
  ],
  'multi-customer-advanced': [
    { orderId: '#12345', customer: 'Sari Dewi', status: 'Dikirim', courier: 'JNE', resi: 'JNE123456789', estimasi: 'Besok sore' },
    { orderId: '#12350', customer: 'Rudi Hartono', status: 'Pending', courier: '-', resi: '-', estimasi: 'Delayed', issue: 'supplier_delay' },
    { orderId: '#12351', customer: 'Maya Indira', status: 'Dikemas', courier: '-', resi: '-', estimasi: '1-2 hari' },
  ]
}

const demoScenarios = [
  {
    id: 'customer-service',
    title: 'Smart Customer Service',
    problem: 'Manual customer service responses taking 2-3 hours daily',
    solution: 'AI-powered instant responses with 80% automation',
    beforeTime: '3 hours/day',
    afterTime: '30 minutes/day',
    timeSaved: '2.5 hours daily',
    moneySaved: 'Rp 15M/month',
    roi: '300%',
    workflow: [
      { icon: <Smartphone className="w-6 h-6" />, label: 'Customer WhatsApp', description: 'User tanya order status' },
      { icon: <Bot className="w-6 h-6" />, label: 'AI Processing', description: 'Parse order number & search' },
      { icon: <FileSpreadsheet className="w-6 h-6" />, label: 'Google Sheets', description: 'Find exact order data' },
      { icon: <MessageCircle className="w-6 h-6" />, label: 'Auto Response', description: 'Send detailed status update' }
    ],
    industries: ['E-commerce', 'Restaurants', 'Services'],
    chatDemo: {
      customer: { name: 'Sari Dewi', avatar: '👩🏻‍💼', phone: '+62 812-3456-7890' },
      messages: [
        { type: 'incoming', text: 'Kak, pesanan saya udah dikirim belum? Order #12345', time: '14:23' },
        { type: 'typing', text: 'AI sedang mencari data...', duration: 2000 },
        { type: 'outgoing', text: 'Hai Kak Sari! Pesanan #12345 sudah dikirim via JNE kemarin pukul 15:30. Estimasi tiba besok sore. Resi: JNE123456789 📦✨', time: '14:23' }
      ]
    },
    database: mockDatabases['customer-service']
  },
  {
    id: 'inventory-management',
    title: 'Smart Inventory Tracker',
    problem: 'Manual stock checks and Excel updates taking 4 hours daily',
    solution: 'Real-time inventory tracking with automated reordering',
    beforeTime: '4 hours/day',
    afterTime: '15 minutes/day',
    timeSaved: '3.75 hours daily',
    moneySaved: 'Rp 20M/month',
    roi: '250%',
    workflow: [
      { icon: <Smartphone className="w-6 h-6" />, label: 'WhatsApp Query', description: 'User tanya stok barang' },
      { icon: <Bot className="w-6 h-6" />, label: 'AI Processing', description: 'Parse product name & search' },
      { icon: <FileSpreadsheet className="w-6 h-6" />, label: 'Live Database', description: 'Check current stock level' },
      { icon: <Zap className="w-6 h-6" />, label: 'Auto Action', description: 'Alert if below minimum' }
    ],
    industries: ['Retail', 'Food & Beverage', 'Manufacturing'],
    chatDemo: {
      customer: { name: 'Budi Santoso', avatar: '👨🏻‍💼', phone: '+62 813-2468-1357' },
      messages: [
        { type: 'incoming', text: 'Stok mie sedaap berapa ya? Mau ambil 20 dus', time: '16:45' },
        { type: 'typing', text: 'Checking inventory...', duration: 1500 },
        { type: 'outgoing', text: 'Stok mie sedaap tersisa 8 dus (di bawah minimum 15). Sudah auto-order 50 dus ke supplier, estimasi datang besok pagi. Untuk 20 dus bisa booking dulu? 📋', time: '16:45' }
      ]
    },
    database: mockDatabases['inventory-management']
  },
  {
    id: 'multi-customer-advanced',
    title: 'Advanced Multi-Customer AI',
    problem: 'Cannot handle multiple customers with different urgency levels simultaneously',
    solution: 'AI handles multiple customers, auto-escalates urgent issues, prioritizes responses',
    beforeTime: '8 hours/day',
    afterTime: '1 hour/day',
    timeSaved: '7 hours daily',
    moneySaved: 'Rp 35M/month',
    roi: '500%',
    workflow: [
      { icon: <Users className="w-6 h-6" />, label: 'Multiple Customers', description: 'Handle 10+ chats simultaneously' },
      { icon: <Shield className="w-6 h-6" />, label: 'Sentiment Analysis', description: 'Auto-detect angry customers' },
      { icon: <AlertTriangle className="w-6 h-6" />, label: 'Smart Escalation', description: 'Priority routing to humans' },
      { icon: <CheckCircle className="w-6 h-6" />, label: 'Resolution Tracking', description: 'Monitor all conversations' }
    ],
    industries: ['E-commerce', 'Customer Support', 'Enterprise'],
    chatDemo: {
      customer: { name: 'You (Interactive)', avatar: '👤', phone: '+62 812-0000-0001' },
      angryCustomer: { name: 'Rudi Hartono', avatar: '😡', phone: '+62 813-9999-9999' },
      messages: [
        { type: 'incoming', text: 'hai, cek order #12345 dong', time: '14:20' },
        { type: 'outgoing', text: 'Hai! Order #12345 sudah dikirim via JNE kemarin. Resi: JNE123456789, estimasi tiba besok sore 📦✨', time: '14:20' }
      ],
      angryMessages: [
        { type: 'angry_incoming', text: 'ORDER SAYA TELAT 3 HARI! #12350 SAYA MAU REFUND SEKARANG!', time: '14:21', priority: 'high' },
        { type: 'angry_outgoing', text: '🚨 URGENT: Maaf sekali pak atas keterlambatan order #12350. Saya langsung eskalasi ke supervisor untuk penanganan segera. Tim akan menghubungi dalam 10 menit.', time: '14:21', escalated: true }
      ]
    },
    database: mockDatabases['multi-customer-advanced']
  }
]

export default function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [chatMessages, setChatMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [liveStats, setLiveStats] = useState({
    messagesHandled: 47,
    timeSaved: 3.2,
    costSaved: 425000
  })
  const [userInput, setUserInput] = useState('')
  const [highlightedRow, setHighlightedRow] = useState(null)
  const [isInteractiveMode, setIsInteractiveMode] = useState(false)
  const [angryCustomerMessages, setAngryCustomerMessages] = useState([])
  const [isAngryCustomerActive, setIsAngryCustomerActive] = useState(false)
  const [showEscalationAlert, setShowEscalationAlert] = useState(false)

  const currentDemo = demoScenarios[activeDemo] || demoScenarios[0]

  // Auto-play workflow animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= demoScenarios[activeDemo].workflow.length - 1) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, activeDemo])

  // Angry customer simulation for advanced demo
  useEffect(() => {
    if (currentDemo?.id === 'multi-customer-advanced' && isInteractiveMode && chatMessages.length > 0) {
      // Trigger angry customer after user sends first message
      const timer = setTimeout(() => {
        setIsAngryCustomerActive(true)
        setAngryCustomerMessages([
          {
            id: Date.now(),
            type: 'angry_incoming',
            text: 'ORDER SAYA TELAT 3 HARI! #12350 SAYA MAU REFUND SEKARANG!',
            time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
            priority: 'high'
          }
        ])

        // Auto-escalate after 2 seconds
        setTimeout(() => {
          setAngryCustomerMessages(prev => [...prev, {
            id: Date.now() + 1,
            type: 'angry_outgoing',
            text: '🚨 URGENT: Maaf sekali pak atas keterlambatan order #12350. Saya langsung eskalasi ke supervisor untuk penanganan segera. Tim akan menghubungi dalam 10 menit.',
            time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
            escalated: true
          }])
          setShowEscalationAlert(true)

          // Hide alert after 3 seconds
          setTimeout(() => setShowEscalationAlert(false), 3000)
        }, 2000)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [chatMessages.length, isInteractiveMode, currentDemo?.id])

  // AI Search function for interactive mode
  const searchDatabase = (query) => {
    const database = currentDemo?.database
    const lowerQuery = query.toLowerCase()

    if (!database) {
      return { result: null, searchTerm: query, type: 'unknown' };
    }

    if (currentDemo?.id === 'customer-service') {
      // Search for order number
      const orderMatch = query.match(/#?(\d+)/);
      if (orderMatch) {
        const orderId = '#' + orderMatch[1];
        const result = database.find(item => item.orderId === orderId);
        return { result, searchTerm: orderId, type: 'order' };
      }
    } else if (currentDemo?.id === 'inventory-management') {
      // Search for product name
      const result = database.find(item =>
        item.item.toLowerCase().includes(lowerQuery) ||
        lowerQuery.includes(item.item.toLowerCase().split(' ')[1]?.toLowerCase())
      );
      return { result, searchTerm: lowerQuery, type: 'inventory' };
    } else if (currentDemo?.id === 'multi-customer-advanced') {
      // Search for order number (same as customer-service but for advanced demo)
      const orderMatch = query.match(/#?(\d+)/);
      if (orderMatch) {
        const orderId = '#' + orderMatch[1];
        const result = database.find(item => item.orderId === orderId);
        return { result, searchTerm: orderId, type: 'order' };
      }
    }

    return { result: null, searchTerm: query, type: 'unknown' };
  }

  // Generate enhanced AI response based on search result (fallback version)
  const generateAIResponse = (searchResult, originalQuery) => {
    const lowerMessage = originalQuery.toLowerCase()

    // Handle greetings
    if (lowerMessage.match(/^(hai|halo|hello|hi|selamat)/)) {
      if (currentDemo?.id === 'customer-service' || currentDemo?.id === 'multi-customer-advanced') {
        return "Hai! Saya customer service AI OrchesAI. Ada yang bisa saya bantu? Mau cek status order atau ada pertanyaan lain? 😊";
      } else {
        return "Hai! Saya inventory assistant OrchesAI. Mau cek stok barang apa hari ini? 📋";
      }
    }

    if (!searchResult.result) {
      if (currentDemo?.id === 'customer-service' || currentDemo?.id === 'multi-customer-advanced') {
        return "Hmm, saya tidak menemukan order tersebut. Bisa kasih nomor order yang benar? Atau mau bantuan lain? 🔍";
      } else {
        return "Produk tidak ditemukan. Coba tanya 'mie sedaap', 'mie indomie', 'susu ultra', atau 'teh botol'? 🔍";
      }
    }

    const { result, type } = searchResult;

    if (type === 'order') {
      const statusText = result.status === 'Dikirim' ? 'sudah dikirim' :
                        result.status === 'Dikemas' ? 'sedang dikemas' :
                        result.status === 'Pending' ? 'masih dalam antrian' : 'telah selesai';

      if (result.status === 'Dikirim') {
        return `Order ${result.orderId} ${statusText} via ${result.courier}! Resi: ${result.resi}, estimasi tiba ${result.estimasi} 📦✨`;
      } else if (result.status === 'Dikemas') {
        return `Order ${result.orderId} ${statusText} dan akan dikirim dalam 1-2 hari. Estimasi tiba: ${result.estimasi} 📦`;
      } else {
        return `Order ${result.orderId} ${statusText}. Status akan diupdate segera ya! 📋`;
      }
    } else if (type === 'inventory') {
      const lowStock = result.stock < result.minimum;
      const stockStatus = lowStock ? 'di bawah minimum' : 'tersedia';

      if (lowStock) {
        return `Stok ${result.item} tersisa ${result.stock} pcs (di bawah minimum ${result.minimum}). Sudah auto-order ke ${result.supplier}! Harga: ${result.harga} ⚠️📋`;
      } else {
        return `Stok ${result.item} tersedia ${result.stock} pcs. Harga: ${result.harga}. Ready untuk order! ✅`;
      }
    }

    return "Data ditemukan! 👍";
  }

  // Handle user sending message
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const messageText = userInput;
    setUserInput('');

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'incoming',
      text: messageText,
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      avatar: currentDemo.chatDemo.customer.avatar
    };

    setChatMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Call AI API
      console.log('Calling AI API with:', {
        message: messageText,
        demoType: currentDemo.id,
        conversationHistory: chatMessages.map(msg => ({
          role: msg.type === 'incoming' ? 'user' : 'assistant',
          content: msg.text
        }))
      });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          demoType: currentDemo.id,
          conversationHistory: chatMessages.map(msg => ({
            role: msg.type === 'incoming' ? 'user' : 'assistant',
            content: msg.text
          }))
        }),
      });

      console.log('API Response status:', response.status, response.statusText);

      if (!response.ok) {
        throw new Error(`Failed to get AI response: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);

      // Validate response structure
      if (!data || typeof data !== 'object') {
        throw new Error('Invalid response format');
      }

      // Highlight row if data found
      if (data?.foundData) {
        const rowIndex = currentDemo.database.findIndex(item =>
          currentDemo.id === 'customer-service' ?
            item.orderId === data.foundData.orderId :
            item.item === data.foundData.item
        );
        setHighlightedRow(rowIndex);
      }

      // Add AI response
      setTimeout(() => {
        setIsTyping(false);

        const aiMessage = {
          id: Date.now() + 1,
          type: 'outgoing',
          text: data?.response || 'Sorry, I encountered an error processing your request.',
          time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
        };

        setChatMessages(prev => [...prev, aiMessage]);

        // Update stats
        setLiveStats(prev => ({
          messagesHandled: prev.messagesHandled + 1,
          timeSaved: prev.timeSaved + 0.1,
          costSaved: prev.costSaved + 15000
        }));

        // Clear highlight after delay
        setTimeout(() => setHighlightedRow(null), 3000);
      }, 1500);

    } catch (error) {
      console.error('Error calling AI API:', error);
      setIsTyping(false);

      // Fallback to mock response
      const searchResult = searchDatabase(messageText);
      const aiResponse = generateAIResponse(searchResult, messageText);

      // Highlight row if found
      if (searchResult.result) {
        const rowIndex = currentDemo.database.findIndex(item =>
          currentDemo.id === 'customer-service' ?
            item.orderId === searchResult.result.orderId :
            item.item === searchResult.result.item
        );
        setHighlightedRow(rowIndex);
      }

      const aiMessage = {
        id: Date.now() + 1,
        type: 'outgoing',
        text: aiResponse,
        time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, aiMessage]);

      // Update stats
      setLiveStats(prev => ({
        messagesHandled: prev.messagesHandled + 1,
        timeSaved: prev.timeSaved + 0.1,
        costSaved: prev.costSaved + 15000
      }));

      // Clear highlight after delay
      setTimeout(() => setHighlightedRow(null), 3000);
    }
  }

  const playAnimation = () => {
    setCurrentStep(0)
    setIsPlaying(true)
    setChatMessages([])
    setIsTyping(false)

    // Start chat simulation
    setTimeout(() => {
      const demo = demoScenarios[activeDemo]
      const messages = demo?.chatDemo?.messages

      // Safety check for demo and messages
      if (!demo || !messages || messages.length < 3) {
        console.error('Invalid demo data or insufficient messages')
        setIsPlaying(false)
        return
      }

      // Add incoming message
      setChatMessages([{
        id: 1,
        type: 'incoming',
        text: messages[0]?.text || 'Test message',
        time: messages[0]?.time || '14:20',
        avatar: demo.chatDemo?.customer?.avatar || '👤'
      }])

      // Update stats
      setLiveStats(prev => ({
        ...prev,
        messagesHandled: prev.messagesHandled + 1
      }))

      // Show typing indicator
      setTimeout(() => {
        setIsTyping(true)

        // Add AI response after typing
        setTimeout(() => {
          setIsTyping(false)
          setChatMessages(prev => [...prev, {
            id: 2,
            type: 'outgoing',
            text: messages[2]?.text || 'AI response message',
            time: messages[2]?.time || '14:21'
          }])

          // Update live stats
          setLiveStats(prev => ({
            messagesHandled: prev.messagesHandled + 1,
            timeSaved: prev.timeSaved + 0.5,
            costSaved: prev.costSaved + 25000
          }))
        }, messages[1]?.duration || 2000)
      }, 1000)
    }, 2000)
  }

  const stopAnimation = () => {
    setIsPlaying(false)
    setCurrentStep(0)
    setChatMessages([])
    setIsTyping(false)
    setHighlightedRow(null)
    setIsInteractiveMode(false)
    setUserInput('')
    setLiveStats({
      messagesHandled: 47,
      timeSaved: 3.2,
      costSaved: 425000
    })
  }

  const enableInteractiveMode = () => {
    setIsInteractiveMode(true)
    setIsPlaying(false)
    setCurrentStep(0)
    setChatMessages([])
    setIsTyping(false)
    setHighlightedRow(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="pt-24 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50 rounded-full mb-6 shadow-lg">
            <Play className="w-4 h-4 mr-2" />
            Interactive Demo
          </Badge>

          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            See Automation
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Action
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch how AI automation transforms repetitive tasks into seamless workflows
          </p>
        </motion.div>
      </div>

      {/* Demo Selector */}
      <div className="max-w-4xl mx-auto px-5 mb-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {demoScenarios.map((demo, index) => (
            <motion.button
              key={demo.id}
              onClick={() => {
                setActiveDemo(index)
                setIsPlaying(false)
                setCurrentStep(0)
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {demo.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Demo Area */}
      <div className="max-w-7xl mx-auto px-5">
        <div className={`grid grid-cols-1 gap-8 items-start ${
          currentDemo.id === 'multi-customer-advanced'
            ? 'lg:grid-cols-4'
            : 'lg:grid-cols-3'
        }`}>

          {/* Left Side: WhatsApp Simulation */}
          <motion.div
            key={`${activeDemo}-whatsapp`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                {/* WhatsApp Header */}
                <div className="bg-green-600 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{currentDemo.chatDemo.customer.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{currentDemo.chatDemo.customer.name}</h4>
                      <p className="text-sm text-green-100">online</p>
                    </div>
                    <div className="flex gap-3">
                      <Video className="w-5 h-5" />
                      <Phone className="w-5 h-5" />
                      <MoreVertical className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="h-80 bg-gray-100 bg-opacity-30 overflow-y-auto">
                  <div className="p-4 space-y-3">
                    <AnimatePresence>
                      {chatMessages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs px-4 py-2 rounded-lg ${
                            message.type === 'outgoing'
                              ? 'bg-green-500 text-white rounded-br-none'
                              : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.type === 'outgoing' ? 'text-green-100' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </p>
                          </div>
                        </motion.div>
                      ))}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex justify-start"
                        >
                          <div className="bg-white px-4 py-2 rounded-lg rounded-bl-none shadow-sm">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-3 bg-gray-50 border-t">
                  <div className="flex items-center gap-2">
                    {isInteractiveMode ? (
                      <>
                        <input
                          type="text"
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder={
                            currentDemo.id === 'customer-service' ?
                            'Ask about order status... (e.g. "order #12345")' :
                            'Ask about stock... (e.g. "stok mie sedaap")'
                          }
                          className="flex-1 bg-white rounded-full px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={handleSendMessage}
                          disabled={!userInput.trim()}
                          className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 disabled:bg-gray-400 transition-colors"
                        >
                          <Send className="w-4 h-4 text-white" />
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500">
                          Type a message...
                        </div>
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <Send className="w-4 h-4 text-white" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Live Stats */}
                <div className="p-4 bg-blue-50 border-t">
                  <h5 className="font-semibold text-gray-900 mb-2">Live Stats Today</h5>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Messages handled:</span>
                      <motion.span
                        className="font-semibold text-blue-600"
                        animate={liveStats.messagesHandled > 47 ? { scale: [1, 1.1, 1] } : {}}
                      >
                        {liveStats.messagesHandled}
                      </motion.span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time saved:</span>
                      <motion.span
                        className="font-semibold text-green-600"
                        animate={liveStats.timeSaved > 3.2 ? { scale: [1, 1.1, 1] } : {}}
                      >
                        {liveStats.timeSaved.toFixed(1)}h
                      </motion.span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost saved:</span>
                      <motion.span
                        className="font-semibold text-purple-600"
                        animate={liveStats.costSaved > 425000 ? { scale: [1, 1.1, 1] } : {}}
                      >
                        Rp {(liveStats.costSaved / 1000).toFixed(0)}k
                      </motion.span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Angry Customer Chat (Advanced Demo Only) */}
          {currentDemo.id === 'multi-customer-advanced' && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <Card className={`shadow-xl border-0 overflow-hidden ${
                isAngryCustomerActive ? 'bg-red-50 border-red-200' : 'bg-white'
              }`}>
                <CardContent className="p-0">
                  {/* Angry Customer Header */}
                  <div className={`p-4 text-white ${
                    isAngryCustomerActive ? 'bg-red-600' : 'bg-gray-400'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{currentDemo.chatDemo.angryCustomer.avatar}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{currentDemo.chatDemo.angryCustomer.name}</h4>
                        <p className="text-sm opacity-90">
                          {isAngryCustomerActive ? 'URGENT - ANGRY' : 'offline'}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        {isAngryCustomerActive && (
                          <AlertTriangle className="w-5 h-5 text-yellow-300" />
                        )}
                        <Phone className="w-5 h-5" />
                        <MoreVertical className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Angry Customer Messages */}
                  <div className="h-80 bg-gray-100 bg-opacity-30 overflow-y-auto">
                    <div className="p-4 space-y-3">
                      <AnimatePresence>
                        {angryCustomerMessages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${message.type === 'angry_outgoing' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`max-w-xs px-4 py-2 rounded-lg ${
                              message.type === 'angry_outgoing'
                                ? 'bg-red-500 text-white rounded-br-none'
                                : 'bg-red-100 text-red-800 rounded-bl-none shadow-sm border border-red-200'
                            }`}>
                              <p className="text-sm font-medium">{message.text}</p>
                              <div className="flex items-center justify-between mt-1">
                                <p className={`text-xs ${
                                  message.type === 'angry_outgoing' ? 'text-red-100' : 'text-red-600'
                                }`}>
                                  {message.time}
                                </p>
                                {message.escalated && (
                                  <Shield className="w-3 h-3 text-yellow-300" />
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {!isAngryCustomerActive && (
                        <div className="text-center text-gray-500 py-8">
                          <UserX className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">Waiting for customer...</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Escalation Alert */}
                  {showEscalationAlert && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-yellow-100 border-t border-yellow-200 p-3"
                    >
                      <div className="flex items-center gap-2 text-yellow-800">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          ⚡ Auto-escalated to human supervisor
                        </span>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Middle: Workflow Visualization */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="p-8 shadow-xl border-0 bg-white">
              <CardContent className="p-0">
                {/* Demo Controls */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {currentDemo.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      onClick={playAnimation}
                      disabled={isPlaying || isInteractiveMode}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      {isPlaying ? 'Playing...' : 'Auto Demo'}
                    </Button>
                    <Button
                      onClick={enableInteractiveMode}
                      disabled={isPlaying || isInteractiveMode}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Users className="w-4 h-4 mr-1" />
                      Try Yourself
                    </Button>
                    <Button
                      onClick={stopAnimation}
                      size="sm"
                      variant="outline"
                    >
                      <Pause className="w-4 h-4 mr-1" />
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Interactive Mode Instructions */}
                {isInteractiveMode && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">🎮 Interactive Mode Active!</h4>
                    <p className="text-sm text-blue-700">
                      {currentDemo.id === 'customer-service' ?
                        'Try asking about order numbers: #12345, #12346, #12347, #12348, #12349' :
                        'Try asking about stock: "stok mie sedaap", "mie indomie", "susu ultra", "teh botol"'
                      }
                    </p>
                  </div>
                )}

                {/* Workflow Steps */}
                <div className="space-y-6">
                  {currentDemo.workflow.map((step, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                        currentStep >= index
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200'
                          : 'bg-gray-50 border-2 border-gray-100'
                      }`}
                      animate={{
                        scale: currentStep === index ? 1.02 : 1,
                        backgroundColor: currentStep >= index ? '#f0f9ff' : '#f9fafb'
                      }}
                    >
                      {/* Step Icon */}
                      <motion.div
                        className={`flex items-center justify-center w-12 h-12 rounded-full ${
                          currentStep >= index
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                        animate={{
                          backgroundColor: currentStep >= index ? '#2563eb' : '#d1d5db',
                          color: currentStep >= index ? '#ffffff' : '#6b7280'
                        }}
                      >
                        {step.icon}
                      </motion.div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{step.label}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>

                      {/* Completion Check */}
                      <AnimatePresence>
                        {currentStep > index && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="text-green-600"
                          >
                            <CheckCircle className="w-6 h-6" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Arrow */}
                      {index < currentDemo.workflow.length - 1 && (
                        <motion.div
                          className="absolute left-10 mt-16"
                          animate={{
                            opacity: currentStep > index ? 0.3 : 0.1
                          }}
                        >
                          <ArrowRight className="w-4 h-4 text-blue-600 transform rotate-90" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side: Google Sheets Mock */}
          <motion.div
            key={`${activeDemo}-sheets`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Google Sheets Interface */}
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                {/* Sheets Header */}
                <div className="bg-green-600 p-4 text-white">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5" />
                    <h4 className="font-semibold">
                      {currentDemo.id === 'customer-service' ? 'Order Database' : 'Inventory Database'}
                    </h4>
                    <Badge className="bg-green-100 text-green-800 border-green-200 ml-auto">
                      Live Data
                    </Badge>
                  </div>
                </div>

                {/* Sheets Table */}
                <div className="overflow-hidden">
                  <div className="bg-gray-50 p-2 border-b text-xs text-gray-600">
                    📊 Google Sheets - Real-time Database Connection
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          {currentDemo.id === 'customer-service' ? (
                            <>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Order ID</th>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Customer</th>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Status</th>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Courier</th>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Estimasi</th>
                            </>
                          ) : (
                            <>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Product</th>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Stock</th>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Min</th>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Price</th>
                              <th className="px-3 py-2 text-left font-medium text-gray-700">Status</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {currentDemo.database.map((row, index) => (
                          <motion.tr
                            key={index}
                            className={`border-b transition-all duration-500 ${
                              highlightedRow === index
                                ? 'bg-yellow-100 border-yellow-300 shadow-md'
                                : 'hover:bg-gray-50'
                            }`}
                            animate={{
                              backgroundColor: highlightedRow === index ? '#fef3c7' : '#ffffff',
                              scale: highlightedRow === index ? 1.02 : 1
                            }}
                          >
                            {currentDemo.id === 'customer-service' ? (
                              <>
                                <td className="px-3 py-3 font-mono text-blue-600">{row.orderId}</td>
                                <td className="px-3 py-3">{row.customer}</td>
                                <td className="px-3 py-3">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    row.status === 'Dikirim' ? 'bg-green-100 text-green-800' :
                                    row.status === 'Dikemas' ? 'bg-yellow-100 text-yellow-800' :
                                    row.status === 'Selesai' ? 'bg-blue-100 text-blue-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    {row.status}
                                  </span>
                                </td>
                                <td className="px-3 py-3 text-gray-600">{row.courier}</td>
                                <td className="px-3 py-3 text-gray-600">{row.estimasi}</td>
                              </>
                            ) : (
                              <>
                                <td className="px-3 py-3 font-medium">{row.item}</td>
                                <td className="px-3 py-3">
                                  <span className={`font-mono ${
                                    row.stock < row.minimum ? 'text-red-600 font-bold' : 'text-green-600'
                                  }`}>
                                    {row.stock}
                                  </span>
                                </td>
                                <td className="px-3 py-3 text-gray-500">{row.minimum}</td>
                                <td className="px-3 py-3 text-gray-600">{row.harga}</td>
                                <td className="px-3 py-3">
                                  {row.stock < row.minimum ? (
                                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                                      Low Stock ⚠️
                                    </span>
                                  ) : (
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                      In Stock ✅
                                    </span>
                                  )}
                                </td>
                              </>
                            )}
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* AI Search Indicator */}
                {highlightedRow !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-blue-50 border-t border-blue-200"
                  >
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-700 font-medium">
                        AI found matching data in row {highlightedRow + 1}! 🎯
                      </span>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>

            {/* Results & Impact */}
            {/* Problem/Solution */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Current Problem:</h4>
                      <p className="text-gray-600">{currentDemo.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">AI Solution:</h4>
                      <p className="text-gray-600">{currentDemo.solution}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-0 text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-1">{currentDemo.timeSaved}</div>
                  <div className="text-sm text-blue-600">Time Saved</div>
                </CardContent>
              </Card>
              <Card className="p-4 shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-0 text-center">
                  <div className="text-3xl font-bold text-green-700 mb-1">{currentDemo.moneySaved}</div>
                  <div className="text-sm text-green-600">Money Saved</div>
                </CardContent>
              </Card>
            </div>

            {/* Before/After Comparison */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <CardContent className="p-0">
                <h4 className="font-semibold text-gray-900 mb-4">Before vs After</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <span className="text-gray-700">Manual Process:</span>
                    <span className="font-semibold text-red-700">{currentDemo.beforeTime}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-gray-700">Automated Process:</span>
                    <span className="font-semibold text-green-700">{currentDemo.afterTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ROI Highlight */}
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-0 text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">{currentDemo.roi}</div>
                <div className="text-purple-600 font-medium">Return on Investment</div>
                <div className="text-sm text-purple-500 mt-1">Payback in less than 2 months</div>
              </CardContent>
            </Card>

            {/* Industries */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <CardContent className="p-0">
                <h4 className="font-semibold text-gray-900 mb-3">Perfect for:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentDemo.industries.map((industry, index) => (
                    <Badge key={index} className="bg-gray-100 text-gray-700 border-gray-200">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl">
                Automate This Process
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-5 py-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          Ready to transform your business?
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Schedule a free discovery call to see which processes we can automate for you.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl"
        >
          Schedule Free Discovery Call
        </Button>
      </div>
    </div>
  )
}