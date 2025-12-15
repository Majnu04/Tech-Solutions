import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const progressStages = [
  { max: 30, message: 'Analyzing business goals' },
  { max: 60, message: 'Designing conversion-first journey' },
  { max: 90, message: 'Performance + SEO optimization' },
  { max: 100, message: 'Ready to launch growth' }
]

const focusOptions = ['Website', 'SEO', 'Performance Ads', 'Branding'] as const

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [focus, setFocus] = useState<typeof focusOptions[number]>('Website')

  useEffect(() => {
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(100, current + Math.max(4, Math.floor(Math.random() * 9)))
      setProgress(current)
      if (current >= 100) {
        clearInterval(timer)
      }
    }, 180)
    return () => clearInterval(timer)
  }, [])

  const currentMessage = useMemo(() => {
    return progressStages.find(stage => progress <= stage.max)?.message ?? progressStages.at(-1)?.message
  }, [progress])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-xl p-8 rounded-3xl bg-[#0B1220]/90 border border-[#1E293B] shadow-[0_20px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(37,99,235,0.15)] backdrop-blur"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8BB5FF]">Elite Digital Solutions</p>
            <h3 className="text-xl font-bold text-white">Preparing your experience</h3>
          </div>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center text-white font-black"
          >
            E
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-300">
            <span>{currentMessage}</span>
            <span className="text-[#8BB5FF] font-semibold">{progress}%</span>
          </div>

          <div className="relative h-3 rounded-full bg-white/5 overflow-hidden border border-white/10">
            <motion.div
              key={progress}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#22C55E] shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="text-sm text-gray-400"
            >
              {currentMessage}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 space-y-3">
          <p className="text-xs text-gray-400">What are you here for?</p>
          <div className="grid grid-cols-2 gap-3">
            {focusOptions.map(option => {
              const active = focus === option
              return (
                <motion.button
                  key={option}
                  onClick={() => setFocus(option)}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all ${
                    active
                      ? 'border-[#2563EB] bg-[#2563EB]/15 text-white'
                      : 'border-[#1E293B] bg-white/5 text-gray-300 hover:border-[#2563EB]/50'
                  }`}
                >
                  <span>{option}</span>
                  {active && <span className="text-xs text-[#8BB5FF]">Selected</span>}
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
