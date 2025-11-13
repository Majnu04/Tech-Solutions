import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-dark-950 to-purple-500/5" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-tight px-4 sm:px-0"
          >
            <span className="block gradient-text animate-gradient bg-gradient-to-r from-primary-500 via-purple-500 to-primary-600 bg-clip-text">
              Elite Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-200 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            Empowering businesses with <span className="text-dark-50 font-semibold">scalable digital products</span>,{' '}
            <span className="text-dark-50 font-semibold">AI-driven automation</span>, and{' '}
            <span className="text-dark-50 font-semibold">next-gen web experiences</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="contact" smooth duration={500}>
              <button className="btn-primary cursor-pointer shadow-2xl shadow-accent-yellow/20">
                Start Your Project
              </button>
            </Link>
            <Link to="showcase" smooth duration={500}>
              <button className="btn-secondary cursor-pointer">
                View Portfolio
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
