import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaArrowsAltH, FaChartLine, FaUsers, FaTachometerAlt } from 'react-icons/fa'

interface CaseStudy {
  id: string
  client: string
  industry: string
  beforeImage: string
  afterImage: string
  metrics: {
    traffic: { before: string; after: string; increase: string }
    leads: { before: string; after: string; increase: string }
    speed: { before: string; after: string; improvement: string }
  }
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    client: 'VIIT Duvvada',
    industry: 'Education',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    metrics: {
      traffic: { before: '2K/mo', after: '12K/mo', increase: '+500%' },
      leads: { before: '50/mo', after: '350/mo', increase: '+600%' },
      speed: { before: '4.2s', after: '0.8s', improvement: '81% faster' }
    }
  },
  {
    id: '2',
    client: 'DoFlow',
    industry: 'E-Learning Platform',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    metrics: {
      traffic: { before: '1K/mo', after: '8K/mo', increase: '+700%' },
      leads: { before: '30/mo', after: '240/mo', increase: '+700%' },
      speed: { before: '3.8s', after: '1.1s', improvement: '71% faster' }
    }
  }
]

const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const constraintsRef = useRef(null)
  const x = useMotionValue(0)
  const clipPath = useTransform(x, (value) => {
    const containerWidth = constraintsRef.current ? (constraintsRef.current as HTMLElement).offsetWidth : 0
    const percentage = ((value + containerWidth / 2) / containerWidth) * 100
    return `inset(0 ${100 - percentage}% 0 0)`
  })

  return (
    <div ref={constraintsRef} className="relative w-full aspect-video rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gray-900">
        <div className="w-full h-full flex items-center justify-center text-gray-600">
          <div className="text-center">
            <p className="text-sm mb-2">Before</p>
            <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-gray-500">
              Legacy Design
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{ clipPath }}
      >
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900 to-purple-900">
          <div className="text-center">
            <p className="text-sm mb-2 text-white">After</p>
            <div className="w-full h-64 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              Modern Elite Design
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        style={{ x }}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        whileHover={{ scale: 1.2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-violet-600">
          <FaArrowsAltH />
        </div>
      </motion.div>

      <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-violet-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
        After
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
        <FaArrowsAltH className="text-violet-400" />
        Drag to compare
      </div>
    </div>
  )
}

const MetricCard = ({ icon, label, before, after, change, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-black/40 border border-white/10 rounded-xl p-6 hover:border-violet-500/50 transition-all group"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors text-xl">
        {icon}
      </div>
      <h4 className="text-white font-semibold">{label}</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Before:</span>
        <span className="text-gray-300">{before}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">After:</span>
        <span className="text-white font-semibold">{after}</span>
      </div>
      <div className="pt-2 border-t border-white/10">
        <span className="text-green-400 font-bold text-lg">{change}</span>
      </div>
    </div>
  </motion.div>
)

const InteractiveCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0)
  const study = caseStudies[activeCase]

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="section-badge">Proven Results</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-4">
          Real <span className="gradient-text">Success Stories</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          See the measurable impact we've delivered for our clients
        </p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-8">
        {caseStudies.map((study, index) => (
          <motion.button
            key={study.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCase(index)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeCase === index
                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {study.client}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activeCase}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        <div className="card p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{study.client}</h3>
              <p className="text-violet-400">{study.industry}</p>
            </div>
            <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 font-semibold text-sm">✓ Project Completed</span>
            </div>
          </div>

          <BeforeAfterSlider beforeImage={study.beforeImage} afterImage={study.afterImage} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard
            icon={<FaChartLine />}
            label="Website Traffic"
            before={study.metrics.traffic.before}
            after={study.metrics.traffic.after}
            change={study.metrics.traffic.increase}
            delay={0.1}
          />
          <MetricCard
            icon={<FaUsers />}
            label="Lead Generation"
            before={study.metrics.leads.before}
            after={study.metrics.leads.after}
            change={study.metrics.leads.increase}
            delay={0.2}
          />
          <MetricCard
            icon={<FaTachometerAlt />}
            label="Page Load Speed"
            before={study.metrics.speed.before}
            after={study.metrics.speed.after}
            change={study.metrics.speed.improvement}
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a href="#contact" className="btn btn-primary inline-flex items-center gap-2">
            Get Similar Results
            <span>→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default InteractiveCaseStudies
