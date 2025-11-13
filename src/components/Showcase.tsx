import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Built a scalable analytics dashboard using machine learning to provide actionable insights for growing businesses.',
    role: 'Full-stack Developer',
    result: 'Improved client decision-making speed by 40%',
    tech: ['Python', 'TensorFlow', 'React'],
    image: '/AI_Powered_Analytics_Platform_Optimized.webp'
  },
  {
    title: 'Immersive Web Experience',
    description: 'Designed and developed a visually stunning, interactive website for a tech startup, boosting engagement and conversions.',
    role: 'UI/UX Designer & Developer',
    result: 'Increased user engagement by 60%',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    image: '/images/Immersive_Web_Experience_Cropped.webp'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing professional skills, projects, and achievements.',
    role: 'Full-stack Developer',
    result: 'LIVE',
    tech: ['React', 'Next.js', 'Vercel', 'CSS3'],
    image: '/Portfolio2.jpg',
    link: 'https://gowri-shanker-portfolio.vercel.app/'
  }
]

const Showcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="showcase" className="section-container bg-dark-900/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-primary-300 font-semibold text-sm tracking-wider uppercase">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-display font-black mt-4 mb-6">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, isInView }: any) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
    >
      <div className={isEven ? '' : 'lg:col-start-2'}>
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-lg">{project.description}</p>
        <p className="text-gray-400 mb-2">
          <span className="font-semibold">Role:</span> {project.role}
        </p>
        <p className="text-green-400 font-semibold mb-6">
          ✓ {project.result}
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-4 py-2 glass border-primary-300/30 text-primary-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            🌐 View Live Project
          </a>
        )}
      </div>
      <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-300/20"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Showcase
