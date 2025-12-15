import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaCode, FaChartLine, FaBullhorn, FaPalette, FaRocket, FaSeedling, FaStore, FaWhatsapp, FaPhone } from 'react-icons/fa'

const services = [
  { id: 'website', label: 'Website', icon: <FaCode className="w-8 h-8" />, color: 'from-[#2563EB] to-[#1D4ED8]' },
  { id: 'seo', label: 'SEO', icon: <FaChartLine className="w-8 h-8" />, color: 'from-[#0EA5E9] to-[#2563EB]' },
  { id: 'marketing', label: 'Digital Marketing', icon: <FaBullhorn className="w-8 h-8" />, color: 'from-[#22C55E] to-[#16A34A]' },
  { id: 'branding', label: 'Branding', icon: <FaPalette className="w-8 h-8" />, color: 'from-[#F59E0B] to-[#EA580C]' }
]

const businessStages = [
  { id: 'startup', label: 'Startup', icon: <FaSeedling className="w-6 h-6" />, desc: 'Validate and launch quickly' },
  { id: 'growing', label: 'Growing', icon: <FaRocket className="w-6 h-6" />, desc: 'Scale acquisition and revenue' },
  { id: 'established', label: 'Established', icon: <FaStore className="w-6 h-6" />, desc: 'Modernize and optimize performance' }
]

const goals = [
  { id: 'leads', label: 'More Leads' },
  { id: 'traffic', label: 'More Traffic' },
  { id: 'branding', label: 'Better Branding' }
]

const ServiceSelector = () => {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedStage, setSelectedStage] = useState<string | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setTimeout(() => setStep(2), 240)
  }

  const handleStageSelect = (stageId: string) => {
    setSelectedStage(stageId)
    setTimeout(() => setStep(3), 240)
  }

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId)
    setTimeout(() => setStep(4), 240)
  }

  const handleReset = () => {
    setStep(1)
    setSelectedService(null)
    setSelectedStage(null)
    setSelectedGoal(null)
  }

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/8 via-transparent to-[#22C55E]/8 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="section-badge">Get Started</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-4">
          What Do You <span className="gradient-text">Need?</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Answer 2 quick questions and get a personalized strategy call
        </p>
      </motion.div>

      <div className="flex justify-center gap-2 mb-12">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`h-1 rounded-full transition-all duration-500 ${
              num < step ? 'w-16 bg-[#2563EB]' : num === step ? 'w-20 bg-[#2563EB]' : 'w-12 bg-white/10'
            }`}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                What service are you interested in?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleServiceSelect(service.id)}
                    className="group relative p-8 rounded-2xl border-2 border-[#1E293B] bg-[#0B1220] backdrop-blur-sm hover:border-[#2563EB] transition-all text-left overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-4 text-white`}>
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{service.label}</h4>
                    <div className="flex items-center text-[#8BB5FF] font-semibold text-sm group-hover:gap-2 transition-all">
                      Select <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                What stage is your business at?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {businessStages.map((stage, index) => (
                  <motion.button
                    key={stage.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleStageSelect(stage.id)}
                    className="group p-6 rounded-2xl border-2 border-[#1E293B] bg-[#0B1220] backdrop-blur-sm hover:border-[#2563EB] transition-all text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[#2563EB]/10 text-[#8BB5FF] group-hover:bg-[#2563EB]/20 transition-colors">
                        {stage.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{stage.label}</h4>
                        <p className="text-sm text-gray-400">{stage.desc}</p>
                      </div>
                      <span className="text-[#8BB5FF] group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.button>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleReset}
                className="mt-6 mx-auto block text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Go back
              </motion.button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                What's your primary goal?
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {goals.map((goal, index) => (
                  <motion.button
                    key={goal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleGoalSelect(goal.id)}
                    className="p-6 rounded-2xl border-2 border-[#1E293B] bg-[#0B1220] hover:border-[#2563EB] text-left"
                  >
                    <p className="text-white font-semibold text-lg mb-2">{goal.label}</p>
                    <p className="text-sm text-[#9CA3AF]">We'll tailor your strategy for this outcome.</p>
                  </motion.button>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleReset}
                className="mt-6 mx-auto block text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Go back
              </motion.button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center text-white text-4xl"
              >
                ✓
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect! Get Your Free Strategy Call
              </h3>
              <p className="text-lg text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
                You need <span className="text-[#8BB5FF] font-semibold">{services.find(s => s.id === selectedService)?.label}</span> as a <span className="text-[#8BB5FF] font-semibold">{businessStages.find(s => s.id === selectedStage)?.label}</span> aiming for <span className="text-[#8BB5FF] font-semibold">{goals.find(g => g.id === selectedGoal)?.label}</span>. Let's map the fastest path.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.a
                  href="https://wa.me/917893804498"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Get Free Strategy Call
                </motion.a>
                <motion.a
                  href="tel:+917893804498"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <FaPhone className="w-5 h-5" />
                  Call Now
                </motion.a>
              </div>

              <div className="inline-flex items-center gap-4 text-sm text-[#9CA3AF] bg-white/5 rounded-full px-6 py-3">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                Available now • Free 30-min consultation
              </div>

              <button
                onClick={handleReset}
                className="mt-8 text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Start over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ServiceSelector
