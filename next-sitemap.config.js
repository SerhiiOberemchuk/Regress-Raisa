/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.raisaregress.online",
  generateRobotsTxt: true,
  changefreq: "yearly",
  priority: 1,
  sitemapSize: 5000,

  exclude: ["/404", "/500", "/api/*", "/sitemap.xml", "/robots.txt"],

  alternateRefs: [
    { href: "https://www.raisaregress.online/uk", hreflang: "uk" },
    { href: "https://www.raisaregress.online/it", hreflang: "it" },
    { href: "https://www.raisaregress.online/en", hreflang: "en" },
  ],

  additionalPaths: async (config) => {
    const dateLastMod = new Date().toISOString();
    return [
      {
        loc: "/uk",
        changefreq: "yearly",
        priority: 1,
        lastmod: dateLastMod,
      },
      {
        loc: "/it",
        changefreq: "yearly",
        priority: 1,
        lastmod: dateLastMod,
      },
      {
        loc: "/en",
        changefreq: "yearly",
        priority: 1,
        lastmod: dateLastMod,
      },
      {
        loc: "/en/terms",
        changefreq: "yearly",
        priority: 0.5,
        lastmod: dateLastMod,
      },
      {
        loc: "/it/terms",
        changefreq: "yearly",
        priority: 0.5,
        lastmod: dateLastMod,
      },
      {
        loc: "/uk/terms",
        changefreq: "yearly",
        priority: 0.5,
        lastmod: dateLastMod,
      },
      {
        loc: "/uk/privacy",
        changefreq: "yearly",
        priority: 0.5,
        lastmod: dateLastMod,
      },
      {
        loc: "/it/privacy",
        changefreq: "yearly",
        priority: 0.5,
        lastmod: dateLastMod,
      },
      {
        loc: "/en/privacy",
        changefreq: "yearly",
        priority: 0.5,
        lastmod: dateLastMod,
      },
    ];
  },
};
