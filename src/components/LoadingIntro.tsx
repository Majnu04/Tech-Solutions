import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { GrowthGoal, usePersonalization } from '../context/PersonalizationContext'

type Stage = 'intro' | 'question'

const options: { id: Exclude<GrowthGoal, null>; label: string; desc: string }[] = [
  { id: 'website', label: 'Website', desc: 'High-converting builds' },
  { id: 'leads', label: 'Leads', desc: 'Qualified pipeline' },
  { id: 'traffic', label: 'Traffic', desc: 'SEO + performance ads' },
  { id: 'branding', label: 'Branding', desc: 'Trust-building identity' }
]

const LoadingIntro = ({ onComplete }: { onComplete: () => void }) => {
  const { goal, setGoal } = usePersonalization()
  const [stage, setStage] = useState<Stage>('intro')
  const [localGoal, setLocalGoal] = useState<GrowthGoal>(goal)
  const [message, setMessage] = useState('Building conversion-first digital experiences')

  useEffect(() => {
    const introTimer = setTimeout(() => setStage('question'), 1600)
    return () => clearTimeout(introTimer)
  }, [])

  useEffect(() => {
    if (goal) {
      setLocalGoal(goal)
      setStage('question')
      setTimeout(() => {
        setMessage('Personalizing your experience…')
        setTimeout(onComplete, 800)
      }, 600)
    }
  }, [goal, onComplete])

  const handleSelect = (value: Exclude<GrowthGoal, null>) => {
    setLocalGoal(value)
    setGoal(value)
    setMessage('Great choice. Personalizing your experience…')
    setTimeout(onComplete, 900)
  }

  const activeOption = useMemo(() => options.find(o => o.id === localGoal), [localGoal])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
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
            <AnimatePresence mode="wait">
              <motion.h3
                key={stage}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="text-xl font-bold text-white"
              >
                {stage === 'intro' ? 'Preparing your experience' : 'What are you here to grow?'}
              </motion.h3>
            </AnimatePresence>
          </div>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center text-white font-black"
          >
            E
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {stage === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-sm text-gray-300">Building conversion-first digital experiences</p>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden border border-white/10">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#22C55E]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {stage === 'question' && (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                {options.map(option => {
                  const active = option.id === localGoal
                  return (
                    <motion.button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98, y: 0 }}
                      className={`text-left px-4 py-3 rounded-xl border transition-all ${
                        active
                          ? 'border-[#2563EB] bg-[#2563EB]/15 text-white'
                          : 'border-[#1E293B] bg-white/5 text-gray-300 hover:border-[#2563EB]/50'
                      }`}
                      aria-pressed={active}
                    >
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-xs text-gray-400">{option.desc}</div>
                    </motion.button>
                  )
                })}
              </div>

              <AnimatePresence mode="wait">
                {activeOption && (
                  <motion.div
                    key={activeOption.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.35 }}
                    className="text-sm text-[#8BB5FF]"
                  >
                    Great choice. Personalizing your experience…
                  </motion.div>
                )}
              </AnimatePresence>

              {!activeOption && (
                <p className="text-xs text-gray-500">Select one to continue</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 text-xs text-gray-500">No spam. Just conversion-first thinking.</div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingIntro
