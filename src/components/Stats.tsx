import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  { number: 3, label: 'Innovative Projects', suffix: '+' },
  { number: 5, label: 'Tech Collaborations', suffix: '+' },
  { number: 1, label: 'Startup Journey', suffix: '' }
]

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="section-container bg-gradient-to-br from-primary-300/10 to-purple-900/10">
      <div ref={ref} className="grid md:grid-cols-3 gap-12">
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
      className="text-center"
    >
      <div className="text-6xl md:text-7xl font-black gradient-text mb-4">
        {count}{stat.suffix}
      </div>
      <div className="text-xl text-gray-300 font-medium">{stat.label}</div>
    </motion.div>
  )
}

export default Stats
