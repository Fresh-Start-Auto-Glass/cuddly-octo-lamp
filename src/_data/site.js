// Business facts used across every page and in the structured data (schema).
// Keep these identical to Google Business Profile, Bing, Apple, Yelp, etc. (NAP consistency).
export default {
  name: "Fresh Start Auto Glass",
  legalName: "Fresh Start Auto Glass LLC",
  url: "https://freshstartautoglass.com",
  email: "info@freshstartautoglass.com",

  // JD's business line (Visible). Set to null to fall back to the placeholder and drop it from the schema.
  phone: "(972) 482-0224",
  phoneDisplayPlaceholder: "(XXX) XXX-XXXX",
  // Used by templates: shows the real number once set, otherwise the placeholder.
  // Until a real number exists, "call" links point to the contact page instead.
  get phoneLabel() { return this.phone || this.phoneDisplayPlaceholder; },
  get phoneHref() { return this.phone ? "tel:+1" + this.phone.replace(/\D/g, "") : "/contact/"; },

  // Confirmed Nov 1, 2026 (JD): Saturdays 8 to 2 to start. Keep schema.js in sync.
  hours: "Monday to Friday, 8 AM to 6 PM; Saturday, 8 AM to 2 PM",
  // Same hours, one line per row, for the footer and contact page.
  hoursLines: ["Mon to Fri: 8 AM to 6 PM", "Saturday: 8 AM to 2 PM", "Sunday: Closed"],
  hoursConfirmed: true,

  // Launch offer banner (top of every page) + FAQ terms. Hidden automatically on any build after `ends`.
  // Out-of-pocket jobs only until insurance-incentive rules are checked. Never tie it to filing a claim or to reviews.
  launchOffer: {
    enabled: true,
    ends: "2026-11-30",
    // Before `opens` the bar says "Opening November 8"; builds on or after that date say "Now open".
    // The site is static, so redeploy on Nov 8 to flip it.
    opens: "2026-11-08",
    get headline() {
      const open = new Date() >= new Date(this.opens + "T00:00:00-06:00");
      return (open ? "Now open: " : "Opening November 8: ") + "our first 50 customers get a $25 Amazon gift card.";
    },
    terms: "Out-of-pocket (non-insurance) jobs only. Gift card is emailed after the job is completed and paid in full. One per customer. Ends November 30, 2026, or after 50 customers, whichever comes first.",
  },
  get showLaunchOffer() {
    return this.launchOffer.enabled && new Date() <= new Date(this.launchOffer.ends + "T23:59:59-06:00");
  },

  // Google Analytics 4 (Measurement ID). Loads only on the live domain, never on localhost or Netlify previews.
  gaId: "G-85HQ70Z167",
  liveHosts: ["freshstartautoglass.com", "www.freshstartautoglass.com"],

  // Profiles elsewhere. Shown in the footer and listed as "sameAs" in the schema. null = hidden.
  googleReviewUrl: "https://g.page/r/CWh7CXhJMsdPEBM/review",
  profiles: [
    { label: "Google", url: "https://g.page/r/CWh7CXhJMsdPEBM" },
    { label: "Facebook", url: "https://www.facebook.com/freshstartautoglass" },
    { label: "Instagram", url: "https://www.instagram.com/freshstartautoglassdfw/" },
  ],

  baseCities: ["Little Elm", "Oak Point"],
  region: "TX",

  // Priority cities with their own landing pages live in cities.js.

  serviceArea: [
    { group: "Our home base", cities: ["Little Elm", "Oak Point"] },
    {
      group: "Denton County",
      cities: ["Frisco", "Denton", "The Colony", "Lewisville", "Aubrey", "Flower Mound", "Argyle", "Highland Village",
        "Corinth", "Lake Dallas", "Providence Village", "Pilot Point", "Sanger", "Northlake", "Lantana"],
    },
    { group: "Collin County", cities: ["McKinney", "Plano", "Prosper", "Celina", "Allen", "Melissa", "Anna"] },
    { group: "Southern Denton and Tarrant edge", cities: ["Roanoke", "Trophy Club"] },
    { group: "Northwest Dallas County", cities: ["Carrollton", "Coppell", "Addison"] },
    // Extended area along the route east to Forney (added Nov 1, 2026; JD to confirm the list).
    // A trip fee may apply here (cash jobs). No dollar amount on the site.
    {
      group: "Extended service area",
      note: "A trip fee may apply. We'll include it in your free quote.",
      cities: ["Wylie", "Murphy", "Sachse", "Richardson", "Garland", "Rowlett", "Mesquite", "Sunnyvale", "Rockwall", "Heath", "Forney"],
    },
  ],

  nav: [
    { label: "Services", url: "/services/" },
    { label: "Our work", url: "/our-work/" },
    { label: "Service area", url: "/service-area/" },
    { label: "FAQ", url: "/faq/" },
    { label: "About", url: "/about/" },
    { label: "Contact", url: "/contact/" },
  ],
};
