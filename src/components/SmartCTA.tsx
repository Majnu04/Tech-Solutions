import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp, FaPhone, FaTimes } from 'react-icons/fa'
import { useScrollDepth, useTimeOnPage } from '../hooks/useScrollBehavior'

const SmartCTA = () => {
  const scrollTriggered = useScrollDepth(50)
  const timeTriggered = useTimeOnPage(30)
  const [isDismissed, setIsDismissed] = useState(false)

  const shouldShow = (scrollTriggered || timeTriggered) && !isDismissed

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="card p-6 shadow-2xl border-[#2563EB]/50 relative">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-[#0F172A] border border-[#1E293B] rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <FaTimes className="w-3 h-3" />
            </button>

            <div className="flex items-start gap-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#22C55E] opacity-70"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.15, 0.35] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center border border-white/10 shadow-lg text-xl">
                  🤝
                </div>
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0F172A] border border-[#2563EB]/40 text-[11px] text-[#8BB5FF] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  Neo • Growth Assistant
                </div>
                <h4 className="text-lg font-bold text-white">Elite Digital Solutions</h4>
                <p className="text-sm text-gray-300">Ready when you are—let’s discuss your project</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <motion.a
                href="https://wa.me/917893804498"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#22C55E]/25 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Now
              </motion.a>
              <motion.a
                href="tel:+917893804498"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-[#2563EB]/60 text-[#8BB5FF] font-semibold rounded-lg hover:bg-[#2563EB]/10 transition-all"
              >
                <FaPhone className="w-4 h-4" />
                Call Us
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available Now
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SmartCTA
