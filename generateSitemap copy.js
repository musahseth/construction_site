const SitemapGenerator = require("sitemap-generator");
const fs = require("fs");

// Initialize generator
const generator = SitemapGenerator("https://www.decarage.com", {
  stripQuerystring: false, // Whether to strip query string from URLs
  filepath: "./public/sitemap.xml", // Path to save the generated sitemap
});

// Start the crawler
generator.on("done", () => {
  console.log("Sitemap generated");
});

// If you want, you can define any event handlers for errors, etc.

generator.start();
