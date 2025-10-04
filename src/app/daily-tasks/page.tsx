'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Clock,
  FileText,
  Send,
  UserCheck,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  BarChart3,
  Timer,
  MessageSquare,
  DollarSign,
  Calendar,
  Users,
  Sparkles
} from 'lucide-react'
import ResponsiveWorkflow from '@/components/responsive-workflow'

// Daily Tasks Data
const dailyTasksData = {
  title: 'Daily Business Tasks Automation',
  subtitle: 'Transform 3.5 hours of repetitive work into 16 minutes of automated efficiency',
  tasks: [
    {
      id: 'proposal',
      name: 'Send proposal/quotation',
      description: 'Create custom proposals for client inquiries',
      manualTime: 45,
      automatedTime: 5,
      icon: <FileText className="w-6 h-6" />,
      frequency: '3-5 times/day',
      automation: 'AI generates custom proposals from templates + client data',
      demo: {
        trigger: 'Client WhatsApp: "Minta quotation untuk website toko online"',
        process: 'AI extracts requirements → Selects template → Customizes pricing → Generates PDF',
        result: 'Professional proposal sent in 5 minutes vs 45 minutes manual work'
      }
    },
    {
      id: 'followup',
      name: 'Follow up clients',
      description: 'Send follow-up messages to potential clients',
      manualTime: 30,
      automatedTime: 2,
      icon: <MessageSquare className="w-6 h-6" />,
      frequency: '5-8 times/day',
      automation: 'Automated follow-up sequences based on client stage',
      demo: {
        trigger: 'Client hasn\'t responded to proposal in 3 days',
        process: 'AI checks client status → Selects appropriate follow-up → Personalizes message',
        result: 'Contextual follow-up sent automatically vs manual tracking'
      }
    },
    {
      id: 'status',
      name: 'Update project status',
      description: 'Update clients on project progress',
      manualTime: 45,
      automatedTime: 3,
      icon: <TrendingUp className="w-6 h-6" />,
      frequency: '2-4 times/day',
      automation: 'Auto-generated progress reports from project data',
      demo: {
        trigger: 'Weekly project update due',
        process: 'AI pulls project data → Calculates progress → Generates report → Sends to client',
        result: 'Detailed progress report with visuals sent automatically'
      }
    },
    {
      id: 'invoice',
      name: 'Generate invoice',
      description: 'Create and send invoices to clients',
      manualTime: 30,
      automatedTime: 1,
      icon: <DollarSign className="w-6 h-6" />,
      frequency: '2-3 times/day',
      automation: 'Auto-invoice generation from project milestones',
      demo: {
        trigger: 'Project milestone completed',
        process: 'AI detects completion → Calculates amount → Generates invoice → Sends with payment link',
        result: 'Professional invoice sent instantly with payment integration'
      }
    },
    {
      id: 'report',
      name: 'Send report ke client',
      description: 'Compile and send detailed project reports',
      manualTime: 60,
      automatedTime: 5,
      icon: <BarChart3 className="w-6 h-6" />,
      frequency: '1-2 times/day',
      automation: 'Automated report compilation with analytics',
      demo: {
        trigger: 'Monthly report schedule',
        process: 'AI compiles data → Generates charts → Adds insights → Formats professionally',
        result: 'Comprehensive report with analytics and recommendations'
      }
    }
  ],
  summary: {
    totalManualTime: 210, // 3.5 hours in minutes
    totalAutomatedTime: 16,
    timeSaved: 194, // minutes
    dailyCostSaving: 320000, // Rp 320k assuming Rp 100k/hour
    monthlyRevenue: 9600000, // Rp 9.6M/month
    yearlyRevenue: 115200000, // Rp 115.2M/year
    roi: 2400 // 2400% ROI
  }
}

export default function DailyTasksPage() {
  const [activeTask, setActiveTask] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [simulationData, setSimulationData] = useState({
    timeElapsed: 0,
    tasksCompleted: 0,
    moneySaved: 0
  })

  const currentTask = dailyTasksData.tasks[activeTask]

  // Simulation animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setSimulationData(prev => ({
          timeElapsed: Math.min(prev.timeElapsed + 1, dailyTasksData.summary.timeSaved),
          tasksCompleted: Math.min(prev.tasksCompleted + 0.1, dailyTasksData.tasks.length),
          moneySaved: Math.min(prev.moneySaved + 1650, dailyTasksData.summary.dailyCostSaving)
        }))
      }, 50)

      const timer = setTimeout(() => {
        setIsPlaying(false)
        setCurrentStep(0)
      }, 10000)

      return () => {
        clearInterval(interval)
        clearTimeout(timer)
      }
    }
  }, [isPlaying])

  const startSimulation = () => {
    setIsPlaying(true)
    setCurrentStep(0)
    setSimulationData({ timeElapsed: 0, tasksCompleted: 0, moneySaved: 0 })
  }

  const stopSimulation = () => {
    setIsPlaying(false)
    setSimulationData({ timeElapsed: 0, tasksCompleted: 0, moneySaved: 0 })
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
          <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50 rounded-full mb-6 shadow-lg">
            <Timer className="w-4 h-4 mr-2" />
            Daily Tasks Automation
          </Badge>

          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Save{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              3.2 Hours Daily
            </span>
            <br />
            on Repetitive Tasks
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {dailyTasksData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={startSimulation}
              disabled={isPlaying}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              {isPlaying ? 'Running Simulation...' : 'Start Live Simulation'}
            </Button>
            <Button
              onClick={stopSimulation}
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50"
            >
              <Pause className="w-5 h-5 mr-2" />
              Reset
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Live Stats Dashboard */}
      <div className="max-w-7xl mx-auto px-5 mb-12">
        <Card className="shadow-xl border-0 bg-white overflow-hidden">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Live Automation Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Time Saved */}
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-green-600 mb-2"
                  animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
                >
                  {Math.round(simulationData.timeElapsed)} min
                </motion.div>
                <div className="text-gray-600">Time Saved Today</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(simulationData.timeElapsed / dailyTasksData.summary.timeSaved) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Tasks Automated */}
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-blue-600 mb-2"
                  animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0, delay: 0.2 }}
                >
                  {Math.round(simulationData.tasksCompleted)}
                </motion.div>
                <div className="text-gray-600">Tasks Automated</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(simulationData.tasksCompleted / dailyTasksData.tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Money Saved */}
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-purple-600 mb-2"
                  animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0, delay: 0.4 }}
                >
                  Rp {(simulationData.moneySaved / 1000).toFixed(0)}k
                </motion.div>
                <div className="text-gray-600">Cost Saved Today</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(simulationData.moneySaved / dailyTasksData.summary.dailyCostSaving) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks Breakdown */}
      <div className="max-w-7xl mx-auto px-5 mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Daily Tasks Breakdown
        </h2>

        {/* Task Selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {dailyTasksData.tasks.map((task, index) => (
            <motion.button
              key={task.id}
              onClick={() => setActiveTask(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTask === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {task.name}
            </motion.button>
          ))}
        </div>

        {/* Task Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTask}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Task Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        {currentTask.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{currentTask.name}</h3>
                        <p className="text-gray-600">{currentTask.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                        <span className="text-gray-700">Manual Process:</span>
                        <span className="font-semibold text-red-700">{currentTask.manualTime} minutes</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-gray-700">Automated Process:</span>
                        <span className="font-semibold text-green-700">{currentTask.automatedTime} minutes</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="text-gray-700">Time Saved:</span>
                        <span className="font-semibold text-blue-700">{currentTask.manualTime - currentTask.automatedTime} minutes</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Automation Process:</h4>
                      <p className="text-gray-600">{currentTask.automation}</p>
                    </div>
                  </div>

                  {/* Demo Simulation */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Live Demo:</h4>
                    <div className="space-y-4">
                      <Card className="p-4 bg-yellow-50 border border-yellow-200">
                        <h5 className="font-medium text-yellow-800 mb-2">Trigger:</h5>
                        <p className="text-yellow-700 text-sm">{currentTask.demo.trigger}</p>
                      </Card>

                      <Card className="p-4 bg-blue-50 border border-blue-200">
                        <h5 className="font-medium text-blue-800 mb-2">AI Process:</h5>
                        <p className="text-blue-700 text-sm">{currentTask.demo.process}</p>
                      </Card>

                      <Card className="p-4 bg-green-50 border border-green-200">
                        <h5 className="font-medium text-green-800 mb-2">Result:</h5>
                        <p className="text-green-700 text-sm">{currentTask.demo.result}</p>
                      </Card>
                    </div>

                    <div className="mt-6 text-center">
                      <div className="text-sm text-gray-500 mb-2">Frequency: {currentTask.frequency}</div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        Demo This Task
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Workflow Demo */}
      <div className="max-w-7xl mx-auto px-5 mb-16">
        <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border-purple-200/50 rounded-full mb-4 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Live Interactive Demo
              </Badge>
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                Experience Full Automation Workflow
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how AI transforms a simple client WhatsApp message into a complete proposal and invoice in seconds
              </p>
            </div>

            <ResponsiveWorkflow
              onTimeSaved={(minutes) => {
                // Update live stats when workflow completes
                setSimulationData(prev => ({
                  ...prev,
                  timeSaved: prev.timeSaved + minutes,
                  moneySaved: prev.moneySaved + (minutes * 6667) // Rp 400k/hour = Rp 6667/minute
                }))
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Summary Stats */}
      <div className="max-w-7xl mx-auto px-5 mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Business Impact Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">
                {Math.round(dailyTasksData.summary.timeSaved / 60 * 10) / 10}h
              </div>
              <div className="text-sm text-green-600">Daily Time Saved</div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">
                Rp {(dailyTasksData.summary.dailyCostSaving / 1000).toFixed(0)}k
              </div>
              <div className="text-sm text-blue-600">Daily Cost Savings</div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">
                Rp {(dailyTasksData.summary.monthlyRevenue / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-purple-600">Monthly Revenue Gain</div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-700 mb-2">
                {dailyTasksData.summary.roi}%
              </div>
              <div className="text-sm text-orange-600">ROI in 6 months</div>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-5 py-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          Ready to automate your daily tasks?
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Stop losing 3+ hours daily on repetitive work. Let AI handle it while you focus on growing your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Free Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50"
          >
            <Users className="w-5 h-5 mr-2" />
            See More Demos
          </Button>
        </div>
      </div>
    </div>
  )
}