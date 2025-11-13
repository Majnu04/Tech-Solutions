import { Link } from 'react-scroll'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary-400">About</h4>
            <p className="text-gray-400 leading-relaxed">
              Elite Digital Solutions by Gouri Shanker delivers innovative digital products and solutions for startups and businesses.
              We value transparency, collaboration, and measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary-400">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'About', 'Services', 'Showcase', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 cursor-pointer transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary-400">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <span className="text-gray-500">Email:</span><br />
                elitetechsolutions04@gmail.com
              </p>
              <p>
                <span className="text-gray-500">Phone:</span><br />
                +91 7893804498
              </p>
              <p>
                <span className="text-gray-500">Location:</span><br />
                Visakhapatnam, Andhra Pradesh
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary-400">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-primary-500 border border-white/10 hover:border-primary-500 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
              >
                <FaLinkedin className="text-xl text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://github.com/Majnu04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-primary-500 border border-white/10 hover:border-primary-500 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
              >
                <FaGithub className="text-xl text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com/majnu_15__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-primary-500 border border-white/10 hover:border-primary-500 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
              >
                <FaInstagram className="text-xl text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            © 2025 <span className="text-primary-400 font-bold">Gouri Shanker</span> – Elite Digital Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy.html" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
