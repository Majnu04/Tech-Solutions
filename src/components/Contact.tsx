import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import axios from 'axios'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    phone: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      // Using Formspree as in original
      await axios.post('https://formspree.io/f/movwlarr', formData)
      setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' })
      setFormData({ name: '', email: '', service: '', phone: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-dark-900 to-dark-950">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="section-badge">Get In Touch</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-6 mb-6">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Ready to start your next project? Let's discuss how we can help your business grow.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-primary-400">Gouri Shanker</span> is ready to help your business grow.
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Contact <span className="text-primary-400 font-semibold">Elite Digital Solutions</span> for new projects, collaborations, or just to say hi!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <FaEnvelope className="text-primary-400 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-gray-300">gourishanker005@gmail.com</p>
                <p className="text-gray-300">elitetechsolutions04@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <FaPhone className="text-primary-400 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Phone</h4>
                <p className="text-gray-300">+91 7893804498</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <FaMapMarkerAlt className="text-primary-400 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Location</h4>
                <p className="text-gray-300">Visakhapatnam, Andhra Pradesh</p>
              </div>
            </div>
          </div>

          {/* CEO Card */}
          <div className="card text-center max-w-sm mx-auto border-2 border-primary-500/20 hover:border-primary-500/40 transition-all">
            <img
              src="https://ui-avatars.com/api/?name=Gouri+Shanker&background=4D7CFE&color=fff&size=96&rounded=true"
              alt="Gouri Shanker"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary-500 shadow-lg shadow-primary-500/30"
            />
            <h4 className="text-2xl font-bold text-primary-400 mb-2">Gouri Shanker</h4>
            <p className="text-gray-400 mb-6">CEO, Elite Digital Solutions</p>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors transform hover:scale-110">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/Majnu04" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors transform hover:scale-110">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://instagram.com/majnu_15__" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors transform hover:scale-110">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="card space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="Your Full Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold mb-2">Service Required *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            >
              <option value="">Select a service</option>
              <option value="ai">AI & Automation</option>
              <option value="web">Web Development</option>
              <option value="marketing">Digital Marketing</option>
              <option value="other">Other / New Project</option>
            </select>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="+91 Your Phone Number"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Project Details *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
              placeholder="Tell us about your project requirements, timeline, and budget..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              {status.message}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
