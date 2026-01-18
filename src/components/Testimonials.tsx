import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const clients = [
  {
    name: 'Vignan\'s Institute of Information Technology – Duvvada',
    label: 'Premium Education Partner',
    description: 'Collaborated with VIIT Duvvada to deliver their official digital platform.',
    logo: '/vignanlogo.png'
  },
  {
    name: 'DoFlow',
    label: '#1 Online Learning Platform',
    description: 'Master Skills with DoFlow - Learn from industry experts and transform your career with premium courses.',
    logo: '/Doflow logo.PNG',
    website: 'https://doflow-ebon.vercel.app/#/'
  },
  {
    name: 'Maxpixls',
    label: 'Professional Photography Studio',
    description: 'Capturing moments with precision and artistry. Premium photography services for every occasion.',
    logo: '/elite-3.jpg'
  }
]

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
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setActiveIndex((prev) => {
      const next = prev + newDirection
      if (next < 0) return testimonials.length - 1
      if (next >= testimonials.length) return 0
      return next
    })
  }

  return (
    <section id="testimonials" className="section-container bg-dark-900/50">
      {/* Clients & Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="section-badge">Trusted By</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-6 mb-6">
          Our <span className="gradient-text">Clients & Partners</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card text-center group hover:border-[#2563EB]/50"
            onClick={() => client.website && window.open(client.website, '_blank')}
            style={{ cursor: client.website ? 'pointer' : 'default' }}
          >
            <div className="mb-6 flex items-center justify-center">
              <div className="w-32 h-32 bg-white/5 rounded-2xl flex items-center justify-center p-4 group-hover:bg-white/10 transition-colors">
                <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
              </div>
            </div>
            <span className="inline-block px-3 py-1 bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#8BB5FF] text-xs font-bold rounded-full mb-4">
              {client.label}
            </span>
            <h3 className="text-xl font-semibold text-white mb-3">{client.name}</h3>
            <p className="text-gray-400 text-sm">{client.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="section-badge">What Clients Say</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-6">
          <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Hear from those who have worked with <span className="text-primary-400 font-bold">Gouri Shanker</span> and Elite Digital Solutions.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="absolute w-full"
            >
              <div className="card max-w-3xl mx-auto text-center p-8 lg:p-12 relative">
                <FaQuoteLeft className="text-5xl text-[#2563EB]/25 absolute top-8 left-8" />
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed italic relative z-10">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[activeIndex].author[0]}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white text-lg">{testimonials[activeIndex].author}</div>
                    <div className="text-[#8BB5FF] text-sm">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#2563EB]/50 flex items-center justify-center text-white hover:text-[#8BB5FF] transition-all"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </motion.button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                whileHover={{ scale: 1.2 }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#2563EB] w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#2563EB]/50 flex items-center justify-center text-white hover:text-[#8BB5FF] transition-all"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
