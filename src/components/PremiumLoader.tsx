import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const statusMessages = [
  { threshold: 0, message: 'Optimizing performance' },
  { threshold: 35, message: 'Designing conversion flows' },
  { threshold: 70, message: 'Final checks' },
]

type PremiumLoaderProps = {
  open: boolean
  onComplete: () => void
}

const PremiumLoader = ({ open, onComplete }: PremiumLoaderProps) => {
  const prefersReducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [hoverGlow, setHoverGlow] = useState({ x: 0, y: 0, opacity: 0 })
  const rafRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const status = useMemo(() => {
    const current = statusMessages
      .slice()
      .reverse()
      .find((item) => progress >= item.threshold)
    return current?.message ?? statusMessages[0].message
  }, [progress])

  useEffect(() => {
    if (!open) return

    let start: number | null = null
    const duration = prefersReducedMotion ? 1200 : 2600

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp
      const elapsed = timestamp - start
      const eased = Math.min(1, elapsed / duration)
      const easedProgress = Math.round(eased * 100)
      setProgress(easedProgress)

      if (eased < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 300)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [open, prefersReducedMotion, onComplete])

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setHoverGlow({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      opacity: 1,
    })
  }

  const handlePointerLeave = () => {
    setHoverGlow((prev) => ({ ...prev, opacity: 0 }))
  }

  const textVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : 0.4 + index * 0.3,
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[3000] overflow-hidden bg-[#020617]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              background:
                'radial-gradient(1200px at 20% 20%, rgba(77, 124, 254, 0.28), transparent 50%), radial-gradient(1000px at 80% 40%, rgba(147, 197, 253, 0.18), transparent 45%), radial-gradient(900px at 60% 80%, rgba(168, 85, 247, 0.14), transparent 40%)',
            }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(420px at ${hoverGlow.x}px ${hoverGlow.y}px, rgba(77, 124, 254, 0.18), transparent 55%)`,
              opacity: hoverGlow.opacity,
            }}
            animate={{ opacity: hoverGlow.opacity }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="relative flex h-full w-full items-center justify-center px-6 py-10">
            <motion.div
              className="absolute inset-6 rounded-[32px] border border-white/5 bg-white/2 backdrop-blur-3xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-3"
              >
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.32em] text-primary-200">
                  Elite Digital Solutions
                </span>
                <motion.h1
                  className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : 0.2 }}
                >
                  Where elite ideas become digital realities.
                </motion.h1>
              </motion.div>

              <div className="flex flex-col gap-3 text-left">
                {['We build', 'Conversion-first websites', 'Growth-driven digital systems'].map((line, index) => (
                  <motion.p
                    key={line}
                    className="text-2xl font-semibold text-white/90 sm:text-3xl"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="flex w-full flex-col gap-4">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{status}</span>
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {progress}%
                  </motion.span>
                </div>
                <div className="relative h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
                    }}
                    animate={{ x: ['0%', '20%'] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PremiumLoader
