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
        className="text-center mb-16"
      >
        <span className="text-primary-300 font-semibold text-sm tracking-wider uppercase">New Projects</span>
        <h2 className="text-4xl md:text-5xl font-display font-black mt-4 mb-6">
          Our Latest Work & <span className="gradient-text">Startup Journey</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          <span className="text-primary-300 font-bold">Gouri Shanker</span> Digital Solutions is a fast-growing startup,
          always innovating and building new digital products. Here are some of our most exciting and recent projects!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="card group overflow-hidden"
          >
            <div className="relative h-48 mb-6 -m-8 mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-4 right-4 px-3 py-1 bg-primary-300 text-dark-900 font-bold text-sm rounded-full">
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary-300">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
