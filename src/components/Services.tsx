import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaRobot, FaCode, FaChartLine } from 'react-icons/fa'

const services = [
  {
    icon: <FaRobot className="w-12 h-12" />,
    title: 'AI & Automation',
    description: 'Leverage artificial intelligence to automate workflows, gain insights, and drive smarter business decisions.',
    features: [
      'Custom AI Solutions',
      'Process Automation',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants'
    ]
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Build immersive, high-performance websites and web apps that engage users and accelerate growth.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'eCommerce Solutions',
      'API Integrations'
    ]
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: 'Digital Marketing',
    description: 'Grow your brand with data-driven marketing strategies that maximize reach and ROI.',
    features: [
      'SEO & SEM',
      'Social Media Campaigns',
      'Content Strategy',
      'Analytics & Reporting'
    ]
  }
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="section-badge">Our Expertise</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-6">
          Premium Digital <span className="gradient-text">Solutions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We deliver innovative, scalable, and results-driven digital solutions tailored to your business needs.
          From AI-powered automation to immersive web design, our team ensures your brand stands out.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="card group hover:scale-[1.02] cursor-pointer"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/20 text-primary-400 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-500">
              {service.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
