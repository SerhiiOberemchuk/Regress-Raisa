/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://raisaregres.online",
  generateRobotsTxt: true,
  changefreq: "yearly",
  priority: 1,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/trpc/", "/admin"],
      },
    ],
  },

  exclude: [
    "/404",
    "/500",
    "/admin",
    "/api/*",
    "/sitemap.xml",
    "/robots.txt",
    "/**/admin",
  ],

  transform: async (config, path) => {
    if (path === "/admin" || path.startsWith("/admin/")) {
      return null;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async () => {
    const dateLastMod = new Date().toISOString();
    const pages = [
      { path: "", priority: 1 },
      { path: "terms", priority: 0.5 },
      { path: "privacy", priority: 0.5 },
      { path: "regression-hypnosis-online", priority: 0.8 },
      { path: "regression-therapy-price", priority: 0.7 },
      { path: "regression-therapy-safety", priority: 0.7 },
    ];

    return pages.map((page) => ({
      loc: page.path ? `/${page.path}` : "/",
      changefreq: "yearly",
      priority: page.priority,
      lastmod: dateLastMod,
    }));
  },
};
