const NICHE_TEMPLATE = {
  plumber: "meridian",
  plumbing: "meridian",
  hvac: "meridian",
  "hvac contractor": "meridian",
  "garage door repair": "meridian",
  landscaper: "verdant",
  landscaping: "verdant",
  "lawn service": "verdant",
  "lawn care": "verdant",
  "tree service": "verdant",
  electrician: "volt",
  electrical: "volt",
  roofer: "summit",
  roofing: "summit",
  contractor: "summit",
  "general contractor": "summit",
  "concrete contractor": "summit",
  "masonry contractor": "summit",
  "fence contractor": "summit",
  "deck builder": "summit",
  "kitchen remodeler": "summit",
  "bathroom remodeler": "summit",
  "flooring contractor": "summit",
  "drywall contractor": "summit",
  "junk removal": "summit",
  "auto repair shop": "summit",
  "pressure washing": "summit",
  "pest control": "summit",
  locksmith: "summit",
  mover: "summit",
  moving: "summit",
  cleaning: "pure",
  "cleaning service": "pure",
  "maid service": "pure",
  "carpet cleaner": "pure",
  painter: "heritage",
  painting: "heritage",
  handyman: "heritage",
  carpenter: "heritage"
};
function templateForNiche(niche) {
  return NICHE_TEMPLATE[niche.toLowerCase()] || "summit";
}

const site = {
  businessName: "A A Sewer & Drain",
  tagline: "Professional Plumber Service in Troy",
  description: "A A Sewer & Drain provides quality plumber services in Troy, NY. Licensed, insured, and locally trusted.",
  phone: "+1 518-273-2132",
  email: "contact@a-a-sewer-drain.com",
  address: "Serving Troy, NY",
  city: "Troy",
  region: "NY",
  niche: "plumber",
  template: templateForNiche("plumber"),
  slug: "a-a-sewer-drain",
  url: "https://pmb2.github.io/generated-websites/plumber/a-a-sewer-drain/",
  latitude: 42.734,
  longitude: -73.689,
  rating: 4.7,
  reviewCount: 14,
  yearsInBusiness: 10,
  jobsCompleted: 200,
  heroImage: "/images/hero.jpg",
  galleryImages: [],
  services: [{ slug: "drain-cleaning", title: "Drain Cleaning", description: "Professional drain cleaning services." }, { slug: "pipe-repair", title: "Pipe Repair", description: "Professional pipe repair services." }, { slug: "water-heater", title: "Water Heater", description: "Professional water heater services." }, { slug: "sewer-line", title: "Sewer Line", description: "Professional sewer line services." }, { slug: "fixture-install", title: "Fixture Install", description: "Professional fixture install services." }, { slug: "emergency-plumbing", title: "Emergency Plumbing", description: "Professional emergency plumbing services." }],
  reviews: [
    { name: "Michael R.", rating: 5, text: "Called A A Sewer & Drain for plumber service. They were at my door within an hour.", date: "2026-06-20" },
    { name: "Sarah L.", rating: 5, text: "Professional, courteous, and fair priced. Will definitely call again.", date: "2026-05-15" },
    { name: "Robert K.", rating: 4, text: "Great plumber company. Showed up on time and delivered quality work.", date: "2026-04-28" }
  ],
  faqs: [
    { q: "Do you offer free estimates?", a: "Yes, we provide free, no-obligation estimates for all our services." },
    { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed, bonded, and insured." },
    { q: "What areas do you serve?", a: "We serve Troy, NY and surrounding communities." },
    { q: "How quickly can you respond?", a: "We offer same-day and 24/7 emergency service." },
    { q: "Do you guarantee your work?", a: "Yes, we stand behind every job with a 100% satisfaction guarantee." }
  ],
  mode: "landlord"
};

const NICHE_LABEL = {
  plumber: "Plumber",
  plumbing: "Plumber",
  electrician: "Electrician",
  electrical: "Electrician",
  landscaper: "Landscaper",
  landscaping: "Landscaper",
  "lawn service": "Lawn Care Service",
  "lawn care": "Lawn Care Service",
  "tree service": "Tree Service",
  hvac: "HVAC Contractor",
  "hvac contractor": "HVAC Contractor",
  roofer: "Roofing Contractor",
  roofing: "Roofing Contractor",
  painter: "Painter",
  painting: "Painter",
  "cleaning service": "Cleaning Service",
  cleaning: "Cleaning Service",
  "maid service": "Cleaning Service",
  contractor: "General Contractor",
  "general contractor": "General Contractor",
  handyman: "Handyman",
  "carpet cleaner": "Carpet Cleaning Service",
  mover: "Moving Company",
  moving: "Moving Company",
  "pressure washing": "Pressure Washing Service",
  "concrete contractor": "Concrete Contractor",
  "fence contractor": "Fence Contractor",
  "deck builder": "Deck Builder",
  "kitchen remodeler": "Kitchen Remodeler",
  "bathroom remodeler": "Bathroom Remodeler",
  "flooring contractor": "Flooring Contractor",
  "drywall contractor": "Drywall Contractor",
  "masonry contractor": "Masonry Contractor",
  "auto repair shop": "Auto Repair Shop",
  "garage door repair": "Garage Door Repair Service",
  "junk removal": "Junk Removal Service",
  "pest control": "Pest Control Service",
  locksmith: "Locksmith"
};
function nicheLabel(niche) {
  return NICHE_LABEL[niche.toLowerCase()] || "Home Services Contractor";
}
function localBusinessSchema(site) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", nicheLabel(site.niche).replace(/ /g, "")],
    "@id": `${site.url}#business`,
    name: site.businessName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: [`${site.url}/images/hero.jpg`],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.latitude,
      longitude: site.longitude
    },
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "AdministrativeArea", name: site.region }
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${nicheLabel(site.niche)} Services`,
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `${site.url}/services/${s.slug}/`,
          areaServed: { "@type": "City", name: site.city },
          provider: { "@id": `${site.url}#business` }
        }
      }))
    },
    ...site.rating && site.reviewCount ? {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.rating,
        bestRating: 5,
        worstRating: 1,
        reviewCount: site.reviewCount
      }
    } : {},
    knowsAbout: site.services.map((s) => s.title),
    slogan: site.tagline
  };
}
function faqPageSchema(site) {
  if (!site.faq?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };
}
function serviceSchema(site, serviceSlug) {
  const svc = site.services.find((s) => s.slug === serviceSlug);
  if (!svc) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: svc.title,
    name: `${svc.title} in ${site.city}, ${site.region}`,
    description: svc.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.url}#business`,
      name: site.businessName,
      telephone: site.phone
    },
    areaServed: { "@type": "City", name: site.city, containedInPlace: { "@type": "AdministrativeArea", name: site.region } },
    url: `${site.url}/services/${svc.slug}/`
  };
}
function breadcrumbSchema(site, trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`
    }))
  };
}
function websiteSchema(site) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    name: site.businessName,
    url: site.url,
    publisher: { "@id": `${site.url}#business` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#site-summary", "#site-contact"]
    }
  };
}
function reviewsSchema(site) {
  if (!site.reviews?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: site.reviews.slice(0, 5).map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
        reviewBody: r.text,
        datePublished: r.date,
        itemReviewed: { "@id": `${site.url}#business` }
      }
    }))
  };
}
function metaTitle(site, page) {
  if (page?.service) {
    return `${page.service} in ${site.city}, ${site.region} | ${site.businessName}`;
  }
  if (page?.suffix) {
    return `${page.suffix} | ${site.businessName} — ${site.city}, ${site.region}`;
  }
  return `${site.businessName} | ${nicheLabel(site.niche)} in ${site.city}, ${site.region}`;
}
function metaDescription(site, page) {
  if (page?.text) return page.text.slice(0, 158);
  if (page?.service) {
    return `${page.service} by ${site.businessName} — trusted ${nicheLabel(site.niche).toLowerCase()} serving ${site.city}, ${site.region}. ${site.rating}★ rated. Call ${site.phone} for a free estimate.`;
  }
  return `${site.businessName} — ${nicheLabel(site.niche).toLowerCase()} in ${site.city}, ${site.region}. ${site.services.slice(0, 3).map((s) => s.title).join(", ")} & more. ${site.rating}★ (${site.reviewCount} reviews). Free estimates: ${site.phone}`;
}
function llmsTxt(site) {
  return `# ${site.businessName}

> ${nicheLabel(site.niche)} serving ${site.city}, ${site.region} and surrounding areas. ${site.description}

## Key Facts
- Business: ${site.businessName}
- Category: ${nicheLabel(site.niche)}
- Location: ${site.address}, ${site.city}, ${site.region}
- Phone: ${site.phone}
- Email: ${site.email}
- Rating: ${site.rating}/5 from ${site.reviewCount} reviews
- Years in business: ${site.yearsInBusiness}
- Jobs completed: ${site.jobsCompleted}

## Services
${site.services.map((s) => `- [${s.title}](${site.url}/services/${s.slug}/): ${s.description}`).join("\n")}

## Frequently Asked Questions
${site.faq.map((f) => `- **${f.question}** ${f.answer}`).join("\n")}

## Pages
- [Home](${site.url}/)
- [Services](${site.url}/services/)
- [About](${site.url}/about/)
- [Reviews](${site.url}/reviews/)
`;
}

export { metaDescription as a, localBusinessSchema as b, serviceSchema as c, breadcrumbSchema as d, faqPageSchema as f, llmsTxt as l, metaTitle as m, nicheLabel as n, reviewsSchema as r, site as s, templateForNiche as t, websiteSchema as w };
