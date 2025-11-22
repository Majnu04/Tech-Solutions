import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Elite Digital Solutions</title>
        <meta name="description" content="Terms of Service for Elite Digital Solutions. Review our service terms and conditions." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-dark-950 text-gray-100">
        <Header />
        
        <main className="section-container py-20">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors">
              ← Back to Home
            </Link>
            
            <div className="card">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                Terms of Service
              </h1>
              <p className="text-gray-400 mb-8">
                <strong>Last updated:</strong> September 27, 2025
              </p>
              
              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>By accessing and using Elite Digital Solutions website and services, you accept and agree to be bound by these Terms of Service.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
                  <p className="mb-3">Elite Digital Solutions provides:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>AI and automation solutions</li>
                    <li>Web development services</li>
                    <li>Digital marketing strategies</li>
                    <li>Custom software development</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Client Responsibilities</h2>
                  <p className="mb-3">As a client, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Cooperate in the project development process</li>
                    <li>Respect our intellectual property rights</li>
                    <li>Make timely payments as agreed</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Project Scope and Deliverables</h2>
                  <p className="mb-3">All projects will be defined by a written agreement that outlines:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Project scope and requirements</li>
                    <li>Timeline and milestones</li>
                    <li>Payment terms and schedule</li>
                    <li>Deliverables and acceptance criteria</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Project costs will be agreed upon before work begins</li>
                    <li>Payment schedules will be outlined in project agreements</li>
                    <li>Late payments may incur additional charges</li>
                    <li>Refund policies will be specified per project</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
                  <p className="mb-3">Upon full payment, clients receive ownership of custom-developed materials. Elite Digital Solutions retains rights to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>General methodologies and processes</li>
                    <li>Pre-existing tools and frameworks</li>
                    <li>Portfolio rights for marketing purposes</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
                  <p>Elite Digital Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
                  <p>Either party may terminate a project agreement with written notice. Termination terms will be outlined in individual project contracts.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Modifications</h2>
                  <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
                  <p className="mb-3">For questions about these Terms of Service, contact us:</p>
                  <div className="bg-dark-900/50 border border-primary-500/20 p-6 rounded-lg">
                    <p className="font-semibold text-white">Elite Digital Solutions</p>
                    <p>Email: gourishanker0408@gmail.com</p>
                    <p>Phone: +91 7893804498</p>
                    <p>Address: Visakhapatnam, Andhra Pradesh, India</p>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
                  <p>These terms shall be governed by and construed in accordance with the laws of India.</p>
                </section>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default TermsPage
