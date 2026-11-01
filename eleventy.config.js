import cities from "./src/_data/cities.js";

export default function (eleventyConfig) {
  // Static files copied as-is
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({
    "src/favicon.ico": "favicon.ico",
    "src/apple-touch-icon.png": "apple-touch-icon.png",
    "src/icon-192.png": "icon-192.png",
    "src/icon-512.png": "icon-512.png",
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v, null, 2));

  // City landing page URL, e.g. "The Colony" -> /mobile-auto-glass-the-colony-tx/
  eleventyConfig.addFilter("cityUrl", (name) =>
    `/mobile-auto-glass-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-tx/`);

  // True if the city has its own landing page (listed in src/_data/cities.js)
  eleventyConfig.addFilter("hasCityPage", (name) => cities.some((c) => c.name === name));

  // FAQPage structured data built from the same list the FAQ page shows.
  eleventyConfig.addFilter("faqSchema", (faqs, phoneLabel) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replaceAll("[PHONE]", phoneLabel) },
    })),
  }));

  // Breadcrumb structured data for inner pages: Home > This page
  eleventyConfig.addFilter("breadcrumbSchema", (title, url, siteUrl) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}${url}` },
    ],
  }));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
  };
}
