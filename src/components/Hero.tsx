import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { Link } from 'react-scroll'
import { usePersonalization } from '../context/PersonalizationContext'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const { goal } = usePersonalization()
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)
  const [allowVideo, setAllowVideo] = useState(true)
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLElement | null>(null)

  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const glowXSpring = useSpring(glowX, { stiffness: 60, damping: 18, mass: 0.8 })
  const glowYSpring = useSpring(glowY, { stiffness: 60, damping: 18, mass: 0.8 })

  const subheadlineMap: Record<string, string> = {
    website: 'High-performance websites built to convert visitors into customers.',
    leads: 'Conversion-first systems designed to generate qualified leads.',
    traffic: 'SEO and campaigns engineered to drive consistent traffic.',
    branding: 'Brand identities that build trust and recognition.'
  }

  const primaryCtaMap: Record<string, string> = {
    website: 'Build My Website',
    leads: 'Get More Leads',
    traffic: 'Grow My Traffic',
    branding: 'Build My Brand'
  }

  const subheadline = goal ? subheadlineMap[goal] : 'We engineer high-converting experiences—fast builds, performance SEO, and campaigns tuned for leads, revenue, and compounding growth.'
  const primaryCta = goal ? primaryCtaMap[goal] : 'Get Instant Estimate'

  const baseTransition = { duration: reduceMotion ? 0.3 : 0.45, ease: [0.25, 0.4, 0.25, 1] }

  useEffect(() => {
    const coarseQuery = window.matchMedia('(pointer: coarse)')
    const update = () => setIsCoarsePointer(coarseQuery.matches)
    update()
    coarseQuery.addEventListener('change', update)
    return () => coarseQuery.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    // Avoid video on data-saver devices
    // @ts-ignore
    const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData
    if (saveData) setAllowVideo(false)
  }, [])

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (isCoarsePointer || reduceMotion) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5
    glowX.set(offsetX * 22)
    glowY.set(offsetY * 18)
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black"
      onPointerMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_at_20%_20%,rgba(77,124,254,0.16),transparent_45%),radial-gradient(900px_at_75%_30%,rgba(147,197,253,0.1),transparent_40%),radial-gradient(820px_at_60%_78%,rgba(168,85,247,0.1),transparent_38%),#020617]" />

        <motion.div
          className="absolute inset-0"
          style={{ translateX: glowXSpring, translateY: glowYSpring, opacity: reduceMotion ? 0 : 0.35 }}
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(520px at center, rgba(77,124,254,0.22), transparent 65%)' }} />
        </motion.div>

        {!reduceMotion && allowVideo && (
          <motion.video
            className="absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            aria-hidden="true"
            poster=""
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </motion.video>
        )}

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.15, scale: 0.98 }}
          animate={{ opacity: 0.22, scale: 1 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 10, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(900px at 30% 30%, rgba(59,130,246,0.14), transparent 55%), radial-gradient(800px at 70% 60%, rgba(16,185,129,0.12), transparent 52%)',
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={baseTransition}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: reduceMotion ? 0 : 0.08 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-white"
          >
            <span className="block">We Don’t Just Build Websites.</span>
            <span className="block text-[#8BB5FF]">We Build Revenue-Driven Businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: reduceMotion ? 0 : 0.16 }}
            className="text-base sm:text-lg md:text-xl text-[#C7CED9] max-w-2xl mx-auto leading-relaxed"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: reduceMotion ? 0 : 0.22 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Link to="home" smooth duration={500}>
              <motion.button
                whileHover={{ scale: reduceMotion ? 1 : 1.03, y: reduceMotion ? 0 : -1 }}
                whileTap={{ scale: 0.985, y: 0 }}
                className="btn-primary cursor-pointer px-8 py-4 text-base w-full sm:w-auto"
              >
                {primaryCta}
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={500}>
              <motion.button
                whileHover={{ scale: reduceMotion ? 1 : 1.02, y: reduceMotion ? 0 : -1 }}
                whileTap={{ scale: 0.985, y: 0 }}
                className="btn-secondary cursor-pointer px-8 py-4 text-base w-full sm:w-auto"
              >
                Free Strategy Call
              </motion.button>
            </Link>
            {goal && (
              <span className="text-xs text-[#8BB5FF] px-3 py-2 rounded-full border border-[#2563EB]/40 bg-[#0B1220]/70">Personalized for your goal</span>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
