import SEO from '../components/SEO'
import Header from '../components/Header'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Services | Elite Digital Solutions"
        description="Explore AI automation, web development, SEO, and digital marketing services from Elite Digital Solutions in Visakhapatnam, India."
        keywords="services, web development, SEO, digital marketing, AI automation, Elite Digital Solutions"
        canonical="https://elitedigitalsolutions.tech/services"
      />

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        <main className="pt-24">
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ServicesPage
