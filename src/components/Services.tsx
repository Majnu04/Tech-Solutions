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
        className="text-center mb-16"
      >
        <span className="text-primary-300 font-semibold text-sm tracking-wider uppercase">Our Expertise</span>
        <h2 className="text-4xl md:text-5xl font-display font-black mt-4 mb-6">
          Premium Digital <span className="gradient-text">Solutions</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
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
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="card group hover:scale-105 hover:shadow-2xl hover:shadow-primary-300/20"
          >
            <div className="text-primary-300 mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-300 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 mb-6">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-primary-300 rounded-full" />
                  {feature}
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
