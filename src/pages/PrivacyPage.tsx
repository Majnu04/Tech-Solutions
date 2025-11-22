import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Elite Digital Solutions</title>
        <meta name="description" content="Privacy Policy for Elite Digital Solutions. Learn how we collect, use, and protect your information." />
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
                Privacy Policy
              </h1>
              <p className="text-gray-400 mb-8">
                <strong>Last updated:</strong> September 27, 2025
              </p>
              
              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                  <p className="mb-3">When you contact us through our website, we may collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your name and email address</li>
                    <li>Phone number (optional)</li>
                    <li>Project details and messages you send us</li>
                    <li>Technical information like IP address and browser type</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="mb-3">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and project requests</li>
                    <li>Provide our digital solutions services</li>
                    <li>Improve our website and services</li>
                    <li>Send you updates about our services (with your consent)</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
                  <p className="mb-3">We do not sell, trade, or share your personal information with third parties except:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>When required by law</li>
                    <li>To protect our rights or safety</li>
                    <li>With trusted service providers who help us operate our business</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Analytics</h2>
                  <p>Our website may use cookies and analytics tools to improve user experience and understand website usage patterns.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of communications</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
                  <p className="mb-3">If you have questions about this Privacy Policy, please contact us:</p>
                  <div className="bg-dark-900/50 border border-primary-500/20 p-6 rounded-lg">
                    <p className="font-semibold text-white">Elite Digital Solutions</p>
                    <p>Email: gourishanker0408@gmail.com</p>
                    <p>Phone: +91 7893804498</p>
                    <p>Address: Visakhapatnam, Andhra Pradesh, India</p>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
                  <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.</p>
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

export default PrivacyPage
