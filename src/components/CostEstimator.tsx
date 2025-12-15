import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCheck, FaCode, FaChartLine, FaBullhorn, FaPalette, FaVideo, FaMobileAlt, FaRocket } from 'react-icons/fa'

interface ServiceOption {
  id: string
  name: string
  price: number
  icon: JSX.Element
  popular?: boolean
}

const serviceOptions: ServiceOption[] = [
  { id: 'landing', name: 'Landing Page', price: 15000, icon: <FaCode /> },
  { id: 'website', name: 'Full Website (5-10 pages)', price: 35000, icon: <FaCode /> },
  { id: 'ecommerce', name: 'E-Commerce Store', price: 55000, icon: <FaMobileAlt /> },
  { id: 'seo', name: 'SEO Package (3 months)', price: 25000, icon: <FaChartLine />, popular: true },
  { id: 'social', name: 'Social Media Marketing', price: 20000, icon: <FaBullhorn /> },
  { id: 'branding', name: 'Brand Identity Package', price: 18000, icon: <FaPalette /> },
  { id: 'video', name: 'Video Editing (per video)', price: 5000, icon: <FaVideo /> },
  { id: 'maintenance', name: 'Monthly Maintenance', price: 8000, icon: <FaRocket /> }
]

const CostEstimator = () => {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set())

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  const totalCost = Array.from(selectedServices).reduce((sum, serviceId) => {
    const service = serviceOptions.find(s => s.id === serviceId)
    return sum + (service?.price || 0)
  }, 0)

  const discount = selectedServices.size >= 3 ? 0.15 : selectedServices.size >= 2 ? 0.10 : 0
  const finalCost = totalCost * (1 - discount)

  return (
    <section className="section-container bg-gradient-to-b from-black to-violet-950/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="section-badge">Pricing Calculator</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-4">
          Get an <span className="gradient-text">Instant Estimate</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Select the services you need and see pricing in real-time
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {serviceOptions.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleService(service.id)}
                className={`group relative p-6 rounded-xl border-2 transition-all text-left ${
                  selectedServices.has(service.id)
                    ? 'border-violet-500 bg-violet-500/10'
                    : 'border-white/10 bg-black/40 hover:border-white/20'
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-bold rounded-full">
                    Popular
                  </span>
                )}
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-lg text-2xl transition-colors ${
                    selectedServices.has(service.id)
                      ? 'bg-violet-500 text-white'
                      : 'bg-white/5 text-violet-400'
                  }`}>
                    {service.icon}
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedServices.has(service.id)
                      ? 'border-violet-500 bg-violet-500'
                      : 'border-white/20'
                  }`}>
                    {selectedServices.has(service.id) && (
                      <FaCheck className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-violet-400">
                  ₹{service.price.toLocaleString('en-IN')}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-24 h-fit"
        >
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Your Estimate</h3>
            
            {selectedServices.size === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-white/30 text-3xl">
                  ₹
                </div>
                <p className="text-gray-400 text-sm">Select services to see pricing</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                  {Array.from(selectedServices).map(serviceId => {
                    const service = serviceOptions.find(s => s.id === serviceId)
                    return (
                      <div key={serviceId} className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{service?.name}</span>
                        <span className="text-white font-semibold">
                          ₹{service?.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white font-semibold">₹{totalCost.toLocaleString('en-IN')}</span>
                  </div>
                  {discount > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-between items-center text-green-400"
                    >
                      <span className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-green-500/20 rounded text-xs font-bold">
                          {discount * 100}% OFF
                        </span>
                        Bundle Discount
                      </span>
                      <span className="font-semibold">-₹{(totalCost * discount).toLocaleString('en-IN')}</span>
                    </motion.div>
                  )}
                </div>

                <div className="pt-6 border-t border-white/10 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white font-bold">Total Estimate</span>
                    <motion.span
                      key={finalCost}
                      initial={{ scale: 1.2, color: '#a78bfa' }}
                      animate={{ scale: 1, color: '#ffffff' }}
                      className="text-3xl font-bold text-white"
                    >
                      ₹{finalCost.toLocaleString('en-IN')}
                    </motion.span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">*Starting price. Final cost may vary based on requirements</p>
                </div>

                <motion.a
                  href="https://wa.me/917893804498"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary w-full justify-center text-center mb-3"
                >
                  Get Detailed Quote
                </motion.a>

                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-2">or call us directly</p>
                  <a href="tel:+917893804498" className="text-violet-400 hover:text-violet-300 font-semibold text-sm">
                    +91 78938 04498
                  </a>
                </div>

                {selectedServices.size >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-violet-500/10 border border-violet-500/30 rounded-lg"
                  >
                    <p className="text-sm text-violet-300 text-center">
                      🎉 Save {discount * 100}% with a bundle package!
                    </p>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CostEstimator
