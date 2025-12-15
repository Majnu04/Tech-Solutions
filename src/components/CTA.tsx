import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp, FaPhone, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-12 lg:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 relative z-10"
            >
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10"
            >
              Let's discuss how Elite Digital Solutions can help you achieve your goals with cutting-edge technology and innovative strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
            >
              <motion.a
                href="https://wa.me/917893804498"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl overflow-hidden inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                <FaWhatsapp className="text-2xl" />
                <span>WhatsApp Us</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaArrowRight />
                </motion.div>
              </motion.a>

              <motion.a
                href="tel:+917893804498"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-violet-500/50 text-white font-bold rounded-xl hover:bg-violet-500/10 transition-all inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <FaPhone className="text-xl" />
                <span>Call Now</span>
              </motion.a>

              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <span>Get Started</span>
                  <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-sm text-gray-500 relative z-10"
            >
              <p>✓ Free Consultation • ✓ 100% Client Satisfaction • ✓ Fast Response Time</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
