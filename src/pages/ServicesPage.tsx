import Header from '../components/Header'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main className="pt-24">
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage
