import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

const stats = [
  { number: 50, label: 'Projects Completed', suffix: '+' },
  { number: 35, label: 'Happy Clients', suffix: '+' },
  { number: 100, label: 'Client Satisfaction', suffix: '%' },
  { number: 3, label: 'Years Experience', suffix: '+' }
]

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(37,99,235,0.06), transparent 35%), radial-gradient(circle at 80% 30%, rgba(34,197,94,0.05), transparent 35%), #020617' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} isInView={isInView} delay={index * 0.15} />
        ))}
      </div>
    </section>
  )
}

const StatCard = ({ stat, isInView, delay }: { stat: typeof stats[0], isInView: boolean, delay: number }) => {
  const count = useSpring(0, { duration: 2000, bounce: 0 })
  const displayCount = useTransform(count, (latest) => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      count.set(stat.number)
    }
  }, [isInView, stat.number, count])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="text-center p-6 lg:p-8 rounded-2xl bg-[#0B1220] backdrop-blur-sm border border-[#1E293B] hover:border-[#2563EB]/50 transition-all duration-500 cursor-default group"
    >
      <motion.div 
        className="text-5xl lg:text-7xl font-black gradient-text mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span>{displayCount}</motion.span>{stat.suffix}
      </motion.div>
      <div className="text-base lg:text-xl text-[#9CA3AF] font-medium group-hover:text-white transition-colors">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default Stats
