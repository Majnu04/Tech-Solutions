import { Link as RouterLink } from 'react-router-dom'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_at_20%_0%,rgba(37,99,235,0.12),transparent_45%),radial-gradient(700px_at_85%_10%,rgba(34,197,94,0.08),transparent_35%)]" />
      <div className="section-container relative z-10 py-12 sm:py-16">
        <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div>
              <span className="section-badge">Ready to grow?</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-black leading-tight text-white">
                Let&apos;s build a faster, stronger digital presence.
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-400 leading-relaxed">
                Elite Digital Solutions creates high-performance websites, AI automation, SEO systems, and digital campaigns designed to convert and scale.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
              <a href="/#contact" className="btn-primary inline-flex items-center justify-center px-5 py-3.5 text-sm">
                Start a Project
              </a>
              <RouterLink to="/services" className="btn-secondary inline-flex items-center justify-center px-5 py-3.5 text-sm">
                View Services
              </RouterLink>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.2fr_0.85fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src="/logo.png" alt="Elite Digital Solutions" className="h-14 w-14 rounded-full border border-white/10" loading="eager" decoding="async" />
              <div>
                <p className="text-white font-bold text-lg leading-tight">Elite Digital Solutions</p>
                <p className="text-sm text-gray-500">Web Development, SEO & AI Automation</p>
              </div>
            </div>
            <p className="max-w-md text-sm sm:text-base text-gray-400 leading-relaxed">
              Built for businesses that want a premium digital presence with measurable performance, clear messaging, and stronger search visibility.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 text-primary-400">Explore</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/#about' },
                { label: 'Showcase', href: '/#showcase' },
                { label: 'Contact', href: '/#contact' },
                { label: 'All Projects', href: '/all-projects' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 text-primary-400">Services</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: 'Web Development', href: '/services' },
                { label: 'SEO & Performance', href: '/services' },
                { label: 'Digital Marketing', href: '/services' },
                { label: 'AI Automation', href: '/services' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 text-primary-400">Contact</h4>
            <address className="not-italic space-y-3 text-gray-400">
              <a href="mailto:elitetechsolutions04@gmail.com" className="flex items-start gap-3 transition-colors hover:text-primary-400">
                <FaEnvelope className="mt-1 shrink-0" />
                <span>elitetechsolutions04@gmail.com</span>
              </a>
              <a href="tel:+917893804498" className="flex items-start gap-3 transition-colors hover:text-primary-400">
                <FaPhone className="mt-1 shrink-0" />
                <span>+91 7893804498</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Visakhapatnam,+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-primary-400"
              >
                <FaMapMarkerAlt className="mt-1 shrink-0" />
                <span>Visakhapatnam, Andhra Pradesh</span>
              </a>
            </address>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-primary-500/40 hover:bg-primary-500 hover:text-white hover:scale-105"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/Majnu04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-primary-500/40 hover:bg-primary-500 hover:text-white hover:scale-105"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://instagram.com/majnu_15__"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-primary-500/40 hover:bg-primary-500 hover:text-white hover:scale-105"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-gray-500">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 <span className="text-primary-400 font-semibold">Elite Digital Solutions</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <RouterLink to="/privacy" className="transition-colors hover:text-primary-400">Privacy Policy</RouterLink>
              <RouterLink to="/terms" className="transition-colors hover:text-primary-400">Terms of Service</RouterLink>
            </div>
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.24em] text-gray-600">
            Based in Visakhapatnam, India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
