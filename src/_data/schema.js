// LocalBusiness structured data (JSON-LD). Search engines and AI assistants read this
// as the business's fact sheet, so it must match the Google Business Profile exactly.
import site from "./site.js";

const cities = site.serviceArea.flatMap((g) => g.cities);

const business = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: `${site.url}/`,
  email: site.email,
  logo: `${site.url}/assets/img/share-card-02-1200.png`,
  image: `${site.url}/assets/img/share-card-02-1200.png`,
  description:
    "Mobile auto glass service in the north Dallas-Fort Worth metro: windshield replacement, chip and crack repair, in-house ADAS calibration, and door, back and mirror glass. We come to you.",
  // Service-area business: city and state only, no street address.
  address: {
    "@type": "PostalAddress",
    addressLocality: site.baseCities[0],
    addressRegion: site.region,
    addressCountry: "US",
  },
  areaServed: cities.map((c) => ({ "@type": "City", name: `${c}, ${site.region}` })),
  knowsAbout: ["Windshield replacement", "Windshield chip repair", "ADAS calibration", "Auto glass replacement"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto glass services",
    itemListElement: [
      "Windshield replacement",
      "Windshield chip and crack repair",
      "ADAS camera calibration",
      "Door and side glass replacement",
      "Back glass replacement",
      "Side mirror glass replacement",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

if (site.phone) business.telephone = site.phone;
const sameAs = site.profiles.filter((p) => p.url).map((p) => p.url);
if (sameAs.length) business.sameAs = sameAs;
if (site.hoursConfirmed) {
  business.openingHoursSpecification = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ];
}

export default {
  business,
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    publisher: { "@id": `${site.url}/#business` },
  },
};
