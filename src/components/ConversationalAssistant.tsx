import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaRocket, FaCheckCircle, FaLightbulb, FaChartLine, FaWhatsapp } from 'react-icons/fa'

const introStep = {
  id: 1,
  question: "Hi, I'm Neo. What’s your main goal?",
  options: [
    { text: 'Get more leads', emoji: '🎯' },
    { text: 'Improve website', emoji: '💻' },
    { text: 'Grow traffic', emoji: '🚀' }
  ]
}

const ConversationalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selection, setSelection] = useState<string | null>(null)

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
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-full shadow-2xl shadow-[#2563EB]/50 flex items-center justify-center text-white text-2xl hover:shadow-[#2563EB]/70 transition-shadow"
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
            className="fixed bottom-6 right-6 z-50 w-full max-w-md"
          >
            <div className="card overflow-hidden shadow-2xl border-[#2563EB]/50">
              <div className="bg-gradient-to-r from-[#0F172A] to-[#0B1220] px-6 py-4 flex items-center justify-between border-b border-[#1E293B]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Neo • Growth Assistant</h3>
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

              <div className="p-6 bg-[#0B1220] max-h-[500px] overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selection || 'intro'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-2xl rounded-tl-none p-4 mb-6">
                      <p className="text-white text-base leading-relaxed">
                        {selection ? `Got it. You want to ${selection}. Let's map it out.` : introStep.question}
                      </p>
                    </div>

                    {!selection && (
                      <div className="space-y-3">
                        {introStep.options.map((option, index) => (
                          <motion.button
                            key={option.text}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelection(option.text)}
                            className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2563EB]/50 rounded-xl text-left transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{option.emoji}</span>
                              <span className="text-white font-medium flex-1">{option.text}</span>
                              <span className="text-[#8BB5FF] group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    )}

                    {selection && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                      >
                        <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-xl p-4">
                          <div className="flex items-start gap-3 mb-3">
                            <FaCheckCircle className="text-[#22C55E] text-xl flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-white font-semibold mb-2">We’ll build you a quick plan:</p>
                              <ul className="text-sm text-[#9CA3AF] space-y-1">
                                <li className="flex items-center gap-2">
                                  <FaLightbulb className="text-[#FACC15] text-xs" />
                                  15-min discovery to scope the fastest win
                                </li>
                                <li className="flex items-center gap-2">
                                  <FaChartLine className="text-[#3B82F6] text-xs" />
                                  Conversion-first roadmap tailored to "{selection}"
                                </li>
                                <li className="flex items-center gap-2">
                                  <FaRocket className="text-[#22C55E] text-xs" />
                                  Launch-ready next steps in 48 hours
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
                          className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-bold rounded-xl shadow-lg hover:shadow-[#22C55E]/25 transition-all"
                        >
                          <FaWhatsapp className="text-2xl" />
                          Talk to Neo on WhatsApp
                        </motion.a>

                        <div className="text-center">
                          <p className="text-xs text-[#9CA3AF] mb-2">or call directly</p>
                          <a href="tel:+917893804498" className="text-[#8BB5FF] hover:text-white font-semibold">
                            +91 78938 04498
                          </a>
                        </div>

                        <button
                          onClick={() => setSelection(null)}
                          className="w-full py-2 text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          ← Start over
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ConversationalAssistant
