import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const featuredProjects = [
  {
    title: 'Vignan\'s Institute of Information Technology – Official Website',
    description: 'Developed a premium, fully responsive academic website for Vignan\'s Institute of Information Technology (VIIT), Duvvada. The platform features a clean UI, structured academic sections, improved navigation, and optimized performance for students and faculty.',
    role: 'Lead Developer & UI/UX Designer',
    result: 'Premium Education Platform LIVE',
    tech: ['React', 'Node.js', 'TailwindCSS', 'Cloud Hosting'],
    image: '/images/vignancollage.jpg',
    link: 'https://vignaniit.edu.in'
  },
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Built a scalable analytics dashboard using machine learning to provide actionable insights for growing businesses.',
    role: 'Full-stack Developer',
    result: 'Improved client decision-making speed by 40%',
    tech: ['Python', 'TensorFlow', 'React'],
    image: '/images/ai-analytics-dashboard-screenshot.webp.webp'
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
    image: '/images/protfolio.jpg',
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
        className="text-center mb-20"
      >
        <span className="section-badge">Portfolio</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-6">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Explore our latest work and see how we've helped businesses transform digitally.
        </p>
      </motion.div>

      <div className="space-y-32 mb-16">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} isInView={isInView} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <a
          href="/all-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          View All Projects →
        </a>
      </motion.div>
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
        <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>
        <div className="space-y-3 mb-8">
          <p className="text-gray-400">
            <span className="font-semibold text-white">Role:</span> {project.role}
          </p>
          <p className="text-primary-400 font-semibold flex items-center gap-2">
            <span className="text-xl">✓</span> {project.result}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 text-primary-400 rounded-lg text-sm font-medium hover:bg-primary-500/20 transition-colors"
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
          whileHover={{ scale: 1.02, y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/20 border border-white/5 group"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Showcase
