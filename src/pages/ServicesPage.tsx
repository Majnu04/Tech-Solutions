import SEO from '../components/SEO'
import Header from '../components/Header'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { serviceSchema } from '../utils/schemas'

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Services | Elite Digital Solutions – Web Development, UI/UX & AI Automation"
        description="Explore our digital solutions: web development, UI/UX design, custom web applications, SEO, and AI automation from Elite Digital Solutions in Visakhapatnam, India."
        keywords="web development, UI/UX design, custom web applications, digital solutions, SEO, AI automation, Elite Digital Solutions"
        canonical="https://elitedigitalsolutions.co.in/services"
        schema={serviceSchema}
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
