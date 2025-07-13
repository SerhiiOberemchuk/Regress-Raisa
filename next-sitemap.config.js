/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.raisaregress.online",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/500"],
  alternateRefs: [
    {
      href: "https://www.raisaregress.online/uk",
      hreflang: "uk",
    },
    {
      href: "https://www.raisaregress.online/it",
      hreflang: "it",
    },
    {
      href: "https://www.raisaregress.online/en",
      hreflang: "en",
    },
  ],
};
