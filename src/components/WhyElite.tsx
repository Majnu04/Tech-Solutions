import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaBolt, FaShieldAlt, FaChartBar, FaClock } from 'react-icons/fa'

const points = [
  {
    title: 'Conversion-First Delivery',
    summary: 'Built to convert, not just look good.',
    detail: 'Every page is mapped to a buyer journey with clear CTAs, social proof, and offer hierarchy to maximize leads.',
    icon: <FaChartBar />
  },
  {
    title: 'Performance Obsessed',
    summary: 'Fast, secure, and stable.',
    detail: 'Code-splitting, image optimization, and Lighthouse-first builds keep load times under 1s on modern devices.',
    icon: <FaBolt />
  },
  {
    title: 'Enterprise-Grade Reliability',
    summary: 'Process, QA, and governance.',
    detail: 'Version control, preview environments, regression checks, and uptime-friendly deployments.',
    icon: <FaShieldAlt />
  },
  {
    title: 'Speed to Launch',
    summary: 'Weeks, not months.',
    detail: 'Tight feedback loops, async reviews, and ready-to-ship component library for rapid releases.',
    icon: <FaClock />
  }
]

const WhyElite = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="section-badge">Why Elite</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-4">
          Built for <span className="gradient-text">Results</span>
        </h2>
        <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
          Interactive reveals that show exactly how we drive conversions and growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {points.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#2563EB]/12 text-[#8BB5FF] text-xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="text-[#8BB5FF] text-lg"
                    >
                      +
                    </motion.span>
                  </div>
                  <p className="text-sm text-[#9CA3AF] mt-2">{item.summary}</p>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        key="detail"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-white mt-4 leading-relaxed"
                      >
                        {item.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default WhyElite
