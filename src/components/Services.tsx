import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaRobot, FaCode, FaChartLine, FaVideo, FaPalette } from 'react-icons/fa'

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
  },
  {
    icon: <FaVideo className="w-12 h-12" />,
    title: 'Video Editing',
    description: 'Professional video editing services that bring your stories to life with cinematic quality and engaging visuals.',
    features: [
      'Promotional Videos',
      'Social Media Content',
      'Corporate Videos',
      'Motion Graphics & VFX'
    ]
  },
  {
    icon: <FaPalette className="w-12 h-12" />,
    title: 'Logo Design',
    description: 'Create memorable brand identities with custom logo designs that capture your vision and stand out.',
    features: [
      'Brand Identity Design',
      'Custom Logo Creation',
      'Vector Graphics',
      'Brand Style Guides'
    ]
  }
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.15,
              ease: [0.25, 0.4, 0.25, 1]
            }}
            whileHover={{ y: -12, scale: 1.02 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="card group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div 
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 text-violet-400 mb-6 relative z-10"
              animate={hoveredIndex === index ? { 
                scale: 1.1,
                rotate: [0, -5, 5, 0] 
              } : {}}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors duration-300 relative z-10">
              {service.title}
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
              {service.description}
            </p>
            <ul className="space-y-3 relative z-10 mb-6">
              {service.features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + i * 0.05 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.4 }}
              className="relative z-10"
            >
              <motion.button
                whileHover={{ x: 5 }}
                className="text-violet-400 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-4"
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
