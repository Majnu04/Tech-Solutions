import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import AllProjectsPage from './pages/AllProjectsPage'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Elite Digital Solutions - AI & Web Development Expert | Gouri Shanker</title>
        <meta name="description" content="Transform your business with AI-powered solutions, cutting-edge web development, and data-driven digital marketing. Led by Gouri Shanker, serving clients globally from India." />
        <meta name="keywords" content="AI solutions, web development, digital marketing, automation, machine learning, React, Python, TensorFlow, elite digital solutions, gouri shanker, tech startup india" />
        <meta name="author" content="Gouri Shanker" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#4D7CFE" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Elite Digital Solutions - AI & Web Development Expert" />
        <meta property="og:description" content="Tailored digital services for your business success. Gouri Shanker Tech Solutions." />
        <meta property="og:image" content="https://www.elitedigitalsolutions.tech/logo.png" />
        <meta property="og:url" content="https://www.elitedigitalsolutions.tech" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elite Digital Solutions" />
        <meta name="twitter:description" content="Boost your brand with Elite Digital Solutions." />
        <meta name="twitter:image" content="https://www.elitedigitalsolutions.tech/logo.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Elite Digital Solutions",
              "url": "https://www.elitedigitalsolutions.tech",
              "logo": "https://www.elitedigitalsolutions.tech/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Gouri Shanker",
                "jobTitle": "CEO & Founder"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Visakhapatnam",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7893804498",
                "contactType": "Customer Service",
                "email": "gourishanker0408@gmail.com"
              },
              "sameAs": [
                "https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/",
                "https://github.com/Majnu04",
                "https://instagram.com/majnu_15__",
                "https://gowri-shanker-portfolio.vercel.app/"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-dark-950 text-gray-100 overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Stats />
          <Showcase />
          <Testimonials />
          <Contact />
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

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Helmet>
        <title>Elite Digital Solutions - AI & Web Development Expert | Gouri Shanker</title>
        <meta name="description" content="Transform your business with AI-powered solutions, cutting-edge web development, and data-driven digital marketing. Led by Gouri Shanker, serving clients globally from India." />
      </Helmet>

      {loading && <LoadingScreen />}
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-projects" element={<AllProjectsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
