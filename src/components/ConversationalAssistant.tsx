import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaRocket, FaCheckCircle, FaLightbulb, FaChartLine, FaWhatsapp } from 'react-icons/fa'

interface Step {
  id: number
  question: string
  options: { text: string; emoji: string; next?: number }[]
  type: 'choice' | 'final'
}

const conversationFlow: Step[] = [
  {
    id: 1,
    question: "Hi there! 👋 What's your main goal right now?",
    options: [
      { text: 'Get more customers online', emoji: '🎯', next: 2 },
      { text: 'Build/redesign my website', emoji: '💻', next: 3 },
      { text: 'Improve my search rankings', emoji: '📈', next: 4 },
      { text: 'Just exploring options', emoji: '🔍', next: 5 }
    ],
    type: 'choice'
  },
  {
    id: 2,
    question: "Smart choice! Getting customers is what it's all about. How are you reaching them now?",
    options: [
      { text: 'Mostly word of mouth', emoji: '💬', next: 6 },
      { text: 'Social media posts', emoji: '📱', next: 6 },
      { text: "I'm just starting out", emoji: '🌱', next: 6 },
      { text: 'Paid ads but not working', emoji: '😓', next: 6 }
    ],
    type: 'choice'
  },
  {
    id: 3,
    question: "A great website changes everything! What's most important for your site?",
    options: [
      { text: 'Looking professional & modern', emoji: '✨', next: 6 },
      { text: 'Getting leads & sales', emoji: '💰', next: 6 },
      { text: 'Mobile-friendly design', emoji: '📱', next: 6 },
      { text: 'Fast loading speed', emoji: '⚡', next: 6 }
    ],
    type: 'choice'
  },
  {
    id: 4,
    question: "Rankings = visibility = growth! Are you showing up on Google at all?",
    options: [
      { text: "Yes, but not on first page", emoji: '😐', next: 6 },
      { text: "Barely visible or not at all", emoji: '😟', next: 6 },
      { text: "Not sure, haven't checked", emoji: '🤷', next: 6 },
      { text: "Doing okay, want to improve", emoji: '📊', next: 6 }
    ],
    type: 'choice'
  },
  {
    id: 5,
    question: "No worries! We love helping businesses explore their options. What industry are you in?",
    options: [
      { text: 'Local business/service', emoji: '🏪', next: 6 },
      { text: 'E-commerce/online store', emoji: '🛒', next: 6 },
      { text: 'Professional services', emoji: '👔', next: 6 },
      { text: 'Creative/agency', emoji: '🎨', next: 6 }
    ],
    type: 'choice'
  },
  {
    id: 6,
    question: "Perfect! Based on what you've told me, you need a custom strategy. Let's talk!",
    options: [],
    type: 'final'
  }
]

const ConversationalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [history, setHistory] = useState<number[]>([1])

  const step = conversationFlow.find(s => s.id === currentStep)

  const handleOptionClick = (nextStepId?: number) => {
    if (nextStepId) {
      setCurrentStep(nextStepId)
      setHistory([...history, nextStepId])
    }
  }

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory)
      setCurrentStep(newHistory[newHistory.length - 1])
    }
  }

  const handleReset = () => {
    setCurrentStep(1)
    setHistory([1])
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full shadow-2xl shadow-violet-500/50 flex items-center justify-center text-white text-2xl hover:shadow-violet-500/70 transition-shadow"
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-6 z-50 w-full max-w-md"
          >
            <div className="card overflow-hidden shadow-2xl border-violet-500/50">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Growth Assistant</h3>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Online now
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 bg-black/40 max-h-[500px] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {step && (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl rounded-tl-none p-4 mb-6">
                        <p className="text-white text-base leading-relaxed">{step.question}</p>
                      </div>

                      {step.type === 'choice' && (
                        <div className="space-y-3">
                          {step.options.map((option, index) => (
                            <motion.button
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleOptionClick(option.next)}
                              className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 rounded-xl text-left transition-all group"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{option.emoji}</span>
                                <span className="text-white font-medium flex-1">{option.text}</span>
                                <span className="text-violet-400 group-hover:translate-x-1 transition-transform">→</span>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      )}

                      {step.type === 'final' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                            <div className="flex items-start gap-3 mb-3">
                              <FaCheckCircle className="text-green-400 text-xl flex-shrink-0 mt-1" />
                              <div>
                                <p className="text-white font-semibold mb-2">Great! Here's what we recommend:</p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                  <li className="flex items-center gap-2">
                                    <FaLightbulb className="text-yellow-400 text-xs" />
                                    Custom strategy session (free)
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <FaChartLine className="text-blue-400 text-xs" />
                                    Growth roadmap tailored to you
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <FaRocket className="text-violet-400 text-xs" />
                                    Fast implementation timeline
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <motion.a
                            href="https://wa.me/917893804498"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all"
                          >
                            <FaWhatsapp className="text-2xl" />
                            Let's Talk on WhatsApp
                          </motion.a>

                          <div className="text-center">
                            <p className="text-xs text-gray-400 mb-2">or call directly</p>
                            <a href="tel:+917893804498" className="text-violet-400 hover:text-violet-300 font-semibold">
                              +91 78938 04498
                            </a>
                          </div>

                          <button
                            onClick={handleReset}
                            className="w-full py-2 text-gray-400 hover:text-white text-sm transition-colors"
                          >
                            ← Start over
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {history.length > 1 && step?.type !== 'final' && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleBack}
                    className="mt-4 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    ← Go back
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ConversationalAssistant
