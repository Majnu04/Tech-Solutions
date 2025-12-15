import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { scroller } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import EstimateModal from './EstimateModal'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [estimateOpen, setEstimateOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: 'Home', to: 'home', type: 'scroll' as const },
    { name: 'About', to: 'about', type: 'scroll' as const },
    { name: 'Services', path: '/services', type: 'route' as const },
    { name: 'Showcase', to: 'showcase', type: 'scroll' as const },
    { name: 'Contact', to: 'contact', type: 'scroll' as const },
  ]

  // Universal nav handler - works on ALL pages and routes
  const handleNavClick = (item: typeof navItems[number]) => {
    setMobileMenuOpen(false)

    if (item.type === 'route' && item.path) {
      navigate(item.path)
      return
    }

    const sectionId = item.to
    if (!sectionId) return

    if (location.pathname !== '/') {
      // On other pages: navigate to home, then scroll after page loads
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      // On home page: just scroll
      scroller.scrollTo(sectionId, {
        smooth: true,
        offset: -80,
        duration: 500
      })
    }
  }

  // Handle scroll after navigation from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          offset: -80,
          duration: 500
        })
      }, 100)
      window.history.replaceState({}, document.title)
    }
  }, [location])

  // Logo click handler
  const handleLogoClick = () => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      scroller.scrollTo('home', { smooth: true, offset: -80, duration: 500 })
    }
  }

  // Mobile Menu Component (rendered via Portal)
  const MobileMenu = () => {
    if (!mobileMenuOpen) return null
    
    return createPortal(
      <div className="md:hidden" style={{ position: 'fixed', inset: 0, zIndex: 99999 }}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 99999,
          }}
        />
        
        {/* Menu Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.25 }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '75vw',
            maxWidth: '300px',
            backgroundColor: '#0d0d0d',
            borderLeft: '1px solid rgba(77, 124, 254, 0.3)',
            boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
            zIndex: 100000,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Menu Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: '#0d0d0d',
          }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4D7CFE' }}>Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '24px',
                color: '#9ca3af',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
              }}
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Items */}
          <nav style={{ padding: '16px', backgroundColor: '#0d0d0d', flex: 1 }}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px',
                  fontSize: '18px',
                  color: '#d1d5db',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  cursor: 'pointer',
                  fontWeight: 500,
                }}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                setEstimateOpen(true)
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '16px',
                fontSize: '18px',
                color: '#0b0b0f',
                background: 'linear-gradient(135deg, #4D7CFE, #9b8cff)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: 700,
                marginTop: '12px'
              }}
            >
              Get Instant Estimate
            </button>
          </nav>
        </motion.div>
      </div>,
      document.body
    )
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="section-container py-0 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={handleLogoClick} className="cursor-pointer flex items-center">
            <img
              src="/logo.png"
              alt="Elite Digital Solutions"
              className="rounded-full"
              style={{ width: '72px', height: '72px' }}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="relative text-gray-300 hover:text-primary-400 cursor-pointer transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setEstimateOpen(true)}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-primary-500/25 transition hover:bg-primary-400"
            >
              Get Instant Estimate
            </button>

            <button
              onClick={() => setEstimateOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-full bg-primary-500 px-3 py-2 text-xs font-semibold text-black shadow-md shadow-primary-500/20 transition hover:bg-primary-400"
            >
              Estimate
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl text-white p-2 hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Portal */}
      <MobileMenu />

      {/* Estimate Modal */}
      <EstimateModal open={estimateOpen} onClose={() => setEstimateOpen(false)} />
    </>
  )
}

export default Header
