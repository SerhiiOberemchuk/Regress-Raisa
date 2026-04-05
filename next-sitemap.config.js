/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.raisaregress.online",
  generateRobotsTxt: true,
  changefreq: "yearly",
  priority: 1,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/trpc/",
          "/admin",
          "/en/admin",
          "/it/admin",
        ],
      },
    ],
  },

  exclude: [
    "/404",
    "/500",
    "/api/*",
    "/sitemap.xml",
    "/robots.txt",
    "/uk",
    "/uk/*",
    "/**/admin",
  ],

  additionalPaths: async () => {
    const dateLastMod = new Date().toISOString();
    const locales = ["uk", "it", "en"];
    const pages = [
      { path: "", priority: 1 },
      { path: "what-is-regressive-hypnosis", priority: 0.9 },
      { path: "regression-session-online", priority: 0.9 },
      { path: "regressologist-online", priority: 0.8 },
      { path: "terms", priority: 0.5 },
      { path: "privacy", priority: 0.5 },
      { path: "regression-hypnosis-online", priority: 0.8 },
      { path: "regression-therapy-price", priority: 0.7 },
      { path: "regression-therapy-safety", priority: 0.7 },
    ];

    return locales.flatMap((locale) =>
      pages.map((page) => ({
        loc:
          locale === "uk"
            ? page.path
              ? `/${page.path}`
              : "/"
            : page.path
              ? `/${locale}/${page.path}`
              : `/${locale}`,
        changefreq: page.path ? "monthly" : "weekly",
        priority: page.priority,
        lastmod: dateLastMod,
      })),
    );
  },
};
