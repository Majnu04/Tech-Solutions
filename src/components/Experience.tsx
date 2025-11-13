import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const newProjects = [
  {
    title: 'Smart Inventory Management System',
    description: 'A cloud-based platform for retailers, using AI to forecast demand and optimize inventory in real time.',
    status: 'NEW',
    tech: ['Azure', 'Python', 'React'],
    image: '/images/Smart-Inventory-Management-System.jpg'
  },
  {
    title: 'Soulserve',
    description: 'The purpose is to reduce food waste by allowing restaurants, event organizers, or individuals to post leftover food information, and for NGOs or volunteers to see these listings.',
    status: 'NEW',
    tech: ['Node.js', 'MongoDB', 'Vue.js'],
    image: '/images/soulserve.jpeg'
  },
  {
    title: 'Reeves',
    description: 'Built an online food ordering platform for restaurants with a smooth user interface and scalable backend.',
    status: 'NEW',
    tech: ['Azure', 'Python', 'React'],
    image: '/images/reeves.png'
  }
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="section-badge">New Projects</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mt-6 mb-6">
          Our Latest Work & <span className="gradient-text">Startup Journey</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          <span className="text-primary-400 font-bold">Gouri Shanker</span> Digital Solutions is a fast-growing startup,
          always innovating and building new digital products. Here are some of our most exciting and recent projects!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="card group overflow-hidden p-0 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
              <span className="absolute top-4 right-4 px-4 py-1.5 bg-primary-500 text-white font-bold text-xs tracking-wider rounded-full shadow-lg">
                {project.status}
              </span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-400 group-hover:text-primary-300 transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
