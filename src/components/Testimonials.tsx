import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    content: "Elite Digital Solutions delivered our project on time with outstanding quality. Their innovative approach helped us scale quickly.",
    author: "Priya",
    role: "Startup Founder"
  },
  {
    content: "Working with Gouri Shanker was a fantastic experience. The team was responsive, creative, and truly cared about our business goals.",
    author: "Rahul M.",
    role: "Business Owner"
  },
  {
    content: "Their technical expertise and dedication made our digital transformation seamless. Highly recommended for any tech project!",
    author: "Anjali",
    role: "Product Manager"
  }
]

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="section-container bg-dark-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="section-badge">What Clients Say</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mt-6 mb-6">
          <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Hear from those who have worked with <span className="text-primary-400 font-bold">Gouri Shanker</span> and Elite Digital Solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="card hover:scale-[1.02]"
          >
            <div className="text-primary-400 text-6xl mb-4 font-serif leading-none">"</div>
            <p className="text-gray-300 mb-8 italic leading-relaxed text-lg">{testimonial.content}</p>
            <div className="border-t border-white/10 pt-6">
              <p className="font-bold text-white text-lg">{testimonial.author}</p>
              <p className="text-gray-400 text-sm mt-1">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
