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
          <div className="card p-6 shadow-2xl border-violet-500/50 relative">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <FaTimes className="w-3 h-3" />
            </button>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👋</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Ready to grow your business?</h4>
                <p className="text-sm text-gray-400">Let's discuss your project</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <motion.a
                href="https://wa.me/917893804498"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Now
              </motion.a>
              <motion.a
                href="tel:+917893804498"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-violet-500/50 text-violet-400 font-semibold rounded-lg hover:bg-violet-500/10 transition-all"
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
