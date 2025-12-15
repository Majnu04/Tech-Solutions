import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const featuredProjects = [
  {
    title: 'Vignan\'s Institute of Information Technology – Official Website',
    description: 'Developed a premium, fully responsive academic website for Vignan\'s Institute of Information Technology (VIIT), Duvvada. The platform features a clean UI, structured academic sections, improved navigation, and optimized performance for students and faculty.',

    result: 'Premium Education Platform LIVE',
    tech: ['React', 'Node.js', 'TailwindCSS', 'Cloud Hosting'],
    image: '/images/vignancollage.jpg',
    link: 'https://vignaniit.edu.in'
  },
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Built a scalable analytics dashboard using machine learning to provide actionable insights for growing businesses.',

    result: 'Improved client decision-making speed by 40%',
    tech: ['Python', 'TensorFlow', 'React'],
    image: '/images/ai-analytics-dashboard-screenshot.webp.webp'
  },
  {
    title: 'DoFlow - Online Learning Platform',
    description: 'Developed a premium online learning platform where users can master skills from industry experts. Features include course management, user authentication, responsive design, and seamless navigation for an enhanced learning experience.',
    result: '#1 Online Learning Platform',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    image: '/images/Doflow-ss.jpeg',
    link: 'https://doflow-ebon.vercel.app/#/'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing professional skills, projects, and achievements.',
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
    <section id="showcase" className="section-container" style={{ background: '#020617' }}>
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
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.9, 
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
    >
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
        className={isEven ? '' : 'lg:col-start-2'}
      >
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="text-3xl md:text-4xl font-black mb-6"
        >
          {project.title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="text-gray-300 mb-6 text-lg leading-relaxed"
        >
          {project.description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="space-y-3 mb-8"
        >
          <p className="text-[#9CA3AF]">
            <span className="font-semibold text-white"></span> {project.role}
          </p>
          <p className="text-[#8BB5FF] font-semibold flex items-center gap-2">
            <span className="text-xl">✓</span> {project.result}
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.2 + 0.6 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {project.tech.map((tech: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.6 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-[#2563EB]/10 border border-[#2563EB]/40 text-[#8BB5FF] rounded-lg text-sm font-medium hover:bg-[#2563EB]/20 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        {project.link && (
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 + 0.7 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            🌐 View Live Project
          </motion.a>
        )}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
      >
        <motion.div
          whileHover={{ scale: 1.03, y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1E293B] group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB]/25 to-[#1D4ED8]/25 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative">
            <motion.img
              src={project.image}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={imageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Showcase
