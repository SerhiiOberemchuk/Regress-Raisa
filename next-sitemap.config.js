/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.raisaregress.online",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 1,
  sitemapSize: 5000,

  // не індексуємо сервісні роут-и
  exclude: ["/404", "/500", "/api/*", "/sitemap.xml", "/robots.txt"],

  // hreflang для трьох мов
  alternateRefs: [
    { href: "https://www.raisaregress.online/uk", hreflang: "uk" },
    { href: "https://www.raisaregress.online/it", hreflang: "it" },
    { href: "https://www.raisaregress.online/en", hreflang: "en" },
  ],

  // ЯВНО формуємо тільки потрібні 3 URL
  additionalPaths: async (config) => [
    {
      loc: "/uk",
      changefreq: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/it",
      changefreq: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/en",
      changefreq: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
  ],
};
