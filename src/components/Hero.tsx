import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[128px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
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
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1]
            }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-tight px-4 sm:px-0"
          >
            <span className="block gradient-text bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500 bg-clip-text animate-gradient" style={{ backgroundSize: '200% auto' }}>
              Elite Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed font-normal px-4 sm:px-0"
          >
            Empowering businesses with <span className="text-white font-bold">scalable digital products</span>,{' '}
            <span className="text-white font-bold">AI-driven automation</span>, and{' '}
            <span className="text-white font-bold">next-gen web experiences</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="contact" smooth duration={500}>
              <button className="btn-primary cursor-pointer shadow-2xl shadow-gold-500/20">
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
