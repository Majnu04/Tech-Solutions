import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'

const allProjects = [
  {
    title: 'Vignan\'s Institute of Information Technology – Official Website',
    description: 'Developed a premium, fully responsive academic website for Vignan\'s Institute of Information Technology (VIIT), Duvvada. The platform features a clean UI, structured academic sections, improved navigation, and optimized performance for students and faculty.',
    role: 'Lead Developer & UI/UX Designer',
    result: 'Premium Education Platform LIVE',
    tech: ['React', 'Node.js', 'TailwindCSS', 'Cloud Hosting'],
    image: '/images/vignancollage.jpg',
    link: 'https://vignaniit.edu.in',
    category: 'Featured'
  },
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Built a scalable analytics dashboard using machine learning to provide actionable insights for growing businesses.',
    role: 'Full-stack Developer',
    result: 'Improved client decision-making speed by 40%',
    tech: ['Python', 'TensorFlow', 'React'],
    image: '/AI_Powered_Analytics_Platform_Optimized.webp',
    category: 'Featured'
  },
  {
    title: 'Immersive Web Experience',
    description: 'Designed and developed a visually stunning, interactive website for a tech startup, boosting engagement and conversions.',
    role: 'UI/UX Designer & Developer',
    result: 'Increased user engagement by 60%',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    image: '/images/Immersive_Web_Experience_Cropped.webp',
    category: 'Featured'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing professional skills, projects, and achievements.',
    role: 'Full-stack Developer',
    result: 'LIVE',
    tech: ['React', 'Next.js', 'Vercel', 'CSS3'],
    image: '/images/protfolio.jpg',
    link: 'https://gowri-shanker-portfolio.vercel.app/',
    category: 'Featured'
  },
  {
    title: 'Smart Inventory Management System',
    description: 'Developed an intelligent inventory tracking system with real-time analytics, automated alerts, and predictive restocking capabilities for retail businesses.',
    role: 'Full-stack Developer',
    result: 'Reduced inventory costs by 30%',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/inventory.jpg',
    category: 'Client Projects'
  },
  {
    title: 'Soulserve',
    description: 'Created a modern service platform connecting customers with service providers, featuring booking management, real-time tracking, and payment integration.',
    role: 'Lead Developer',
    result: 'Successfully launched with 500+ users',
    tech: ['React', 'Firebase', 'Stripe', 'TailwindCSS'],
    image: '/images/soulserve.jpg',
    category: 'Client Projects'
  },
  {
    title: 'Reeves',
    description: 'Built a comprehensive business management solution with CRM capabilities, project tracking, and team collaboration tools.',
    role: 'Full-stack Developer',
    result: 'Streamlined business operations',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    image: '/images/reeves.jpg',
    category: 'Client Projects'
  }
]

const AllProjectsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <Helmet>
        <title>All Projects - Elite Digital Solutions | Complete Portfolio</title>
        <meta name="description" content="Browse our complete portfolio of web development, AI solutions, and digital transformation projects. See how Elite Digital Solutions has helped businesses succeed." />
      </Helmet>

      <div className="min-h-screen bg-dark-950 text-gray-100">
        <Header />
        
        <main>
          <section className="min-h-screen section-container bg-dark-900/30">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="section-badge">Complete Portfolio</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-6">
                All <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                A comprehensive collection of our work across various industries and technologies.
              </p>
            </motion.div>

            <div className="space-y-32">
              {allProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/message/REJQPX2ODRQZE1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 group border-2 border-green-400/20"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}

const ProjectCard = ({ project, index, isInView }: any) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
    >
      <div className={isEven ? '' : 'lg:col-start-2'}>
        <span className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-bold rounded-full mb-4">
          {project.category}
        </span>
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

export default AllProjectsPage
