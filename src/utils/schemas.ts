export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elite Digital Solutions",
  "url": "https://elitedigitalsolutions.tech",
  "logo": "https://elitedigitalsolutions.tech/logo.png",
  "description": "Professional web development, SEO & digital marketing services to grow your business online.",
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
    "email": "gourishanker0408@gmail.com",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Telugu"]
  },
  "sameAs": [
    "https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/",
    "https://github.com/Majnu04",
    "https://instagram.com/majnu_15__"
  ]
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elite Digital Solutions",
  "image": "https://elitedigitalsolutions.tech/logo.png",
  "url": "https://elitedigitalsolutions.tech",
  "telephone": "+91-7893804498",
  "email": "gourishanker0408@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Visakhapatnam",
    "addressLocality": "Visakhapatnam",
    "addressRegion": "AP",
    "postalCode": "530046",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.6868,
    "longitude": 83.2185
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Elite Digital Solutions",
  "url": "https://elitedigitalsolutions.tech",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://elitedigitalsolutions.tech/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing & Web Development",
  "provider": {
    "@type": "Organization",
    "name": "Elite Digital Solutions"
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
