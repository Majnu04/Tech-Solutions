export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elite Digital Solutions",
  "url": "https://elitedigitalsolutions.co.in",
  "logo": "https://elitedigitalsolutions.co.in/logo.png",
  "description": "Elite Digital Solutions creates high-performance business websites, custom web applications, UI/UX design, and AI automation for businesses.",
  "founder": {
    "@type": "Person",
    "name": "Nelam Gowri Sankar",
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
    "email": "gourishanker005@gmail.com",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Telugu"]
  },
  "sameAs": [
    "https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/",
    "https://github.com/Majnu04",
    "https://instagram.com/majnu_04__"
  ]
}

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Elite Digital Solutions",
  "image": "https://elitedigitalsolutions.co.in/logo.png",
  "url": "https://elitedigitalsolutions.co.in",
  "telephone": "+91-7893804498",
  "email": "gourishanker005@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Visakhapatnam",
    "addressRegion": "Andhra Pradesh",
    "addressCountry": "IN"
  }
}

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Elite Digital Solutions",
  "url": "https://elitedigitalsolutions.co.in"
}

export const creativeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Vignan's Institute of Information Technology – Official Website",
  "author": {
    "@type": "Organization",
    "name": "Elite Digital Solutions",
    "url": "https://elitedigitalsolutions.co.in"
  },
  "url": "https://vignaniit.edu.in",
  "description": "Premium website built for VIIT Duvvada with modern UI and optimized performance.",
  "creator": "Elite Digital Solutions",
  "keywords": "education website, college website, VIIT, web development Visakhapatnam"
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing & Web Development",
  "provider": {
    "@type": "Organization",
    "name": "Elite Digital Solutions",
    "url": "https://elitedigitalsolutions.co.in"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom website development with modern technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization to improve online visibility"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing",
          "description": "Comprehensive digital marketing strategies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation",
          "description": "AI-powered automation solutions for businesses"
        }
      }
    ]
  }
}
