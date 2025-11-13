import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-container bg-dark-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-primary-300 font-semibold text-sm tracking-wider uppercase">About Us</span>
        <h2 className="text-4xl md:text-5xl font-display font-black mt-4 mb-6">
          Who We <span className="gradient-text">Are</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <span className="text-primary-300 font-bold">Elite Digital Solutions</span>, led by CEO{' '}
          <span className="text-primary-300 font-bold">Gouri Shanker</span>, is dedicated to delivering
          innovative digital solutions. Our mission is to empower startups and businesses with{' '}
          <span className="text-white font-semibold">cutting-edge technology</span>,{' '}
          <span className="text-white font-semibold">creative design</span>, and{' '}
          <span className="text-white font-semibold">data-driven strategies</span>. We value transparency,
          collaboration, and measurable results.
        </p>
      </motion.div>
    </section>
  )
}

export default About
