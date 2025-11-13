import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  { number: 10, label: 'Projects Completed', suffix: '+' },
  { number: 8, label: 'Happy Clients', suffix: '+' },
  { number: 100, label: 'Client Satisfaction', suffix: '%' }
]

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="section-container bg-gradient-to-br from-primary-500/10 via-dark-900/50 to-purple-600/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent" />
      <div ref={ref} className="grid md:grid-cols-3 gap-12 md:gap-16 relative z-10">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} isInView={isInView} delay={index * 0.2} />
        ))}
      </div>
    </section>
  )
}

const StatCard = ({ stat, isInView, delay }: { stat: typeof stats[0], isInView: boolean, delay: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = stat.number
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.number])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
    >
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6">
        {count}{stat.suffix}
      </div>
      <div className="text-xl md:text-2xl text-gray-300 font-medium">{stat.label}</div>
    </motion.div>
  )
}

export default Stats
