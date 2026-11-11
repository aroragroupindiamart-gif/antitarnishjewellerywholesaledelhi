import React from 'react';

interface WholesaleSchemaProps {
  category?: string;
  location?: string;
  pageTitle?: string;
  pageDescription?: string;
  urlPath?: string;
}

export function generateWholesaleSchema({
  category = "Jewellery",
  location = "Delhi",
  pageTitle,
  pageDescription,
  urlPath = "",
}: WholesaleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": `Arora Group Wholesale - Anti Tarnish ${category} ${location}`,
    "headline": pageTitle || `Wholesale Anti-Tarnish ${category} in ${location}, Delhi`,
    "description": pageDescription || `Direct factory importer of 316L anti-tarnish waterproof ${category.toLowerCase()} in Delhi NCR. Low ₹3,000 MOV and zero item MOQ.`,
    "url": `https://antitarnishjewellerywholesaledelhi.com${urlPath}`,
    "logo": "https://www.aroragroupwholesale.com/arora-group-logo.png",
    "image": "https://antitarnishjewellerywholesaledelhi.com/og-image.jpg",
    "telephone": "+91-8368484361",
    "priceRange": "₹45 - ₹450",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer, UPI, Credit Card, Razorpay",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, E-134, Tagore Garden Extension",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110027",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6469",
      "longitude": "77.1122"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Arora Group Wholesale",
      "url": "https://www.aroragroupwholesale.com",
      "logo": "https://www.aroragroupwholesale.com/arora-group-logo.png"
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://antitarnishjewellerywholesaledelhi.com${item.url}`
    }))
  };
}

export function generateFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
