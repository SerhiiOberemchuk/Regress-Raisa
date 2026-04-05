import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const [
    links,
    hero,
    about,
    results,
    examples,
    requirements,
    faq,
    services,
    contact,
    footer,
    privacy,
    terms,
    home,
    common,
    cookie,
    seoHub,
  ] = await Promise.all([
    import(`../messages/${locale}/links.json`).then((m) => m.default),
    import(`../messages/${locale}/hero.json`).then((m) => m.default),
    import(`../messages/${locale}/about.json`).then((m) => m.default),
    import(`../messages/${locale}/results.json`).then((m) => m.default),
    import(`../messages/${locale}/examples.json`).then((m) => m.default),
    import(`../messages/${locale}/requirements.json`).then((m) => m.default),
    import(`../messages/${locale}/faq.json`).then((m) => m.default),
    import(`../messages/${locale}/services.json`).then((m) => m.default),
    import(`../messages/${locale}/contact.json`).then((m) => m.default),
    import(`../messages/${locale}/footer.json`).then((m) => m.default),
    import(`../messages/${locale}/privacy.json`).then((m) => m.default),
    import(`../messages/${locale}/terms.json`).then((m) => m.default),
    import(`../messages/${locale}/home.json`).then((m) => m.default),
    import(`../messages/${locale}/common.json`).then((m) => m.default),
    import(`../messages/${locale}/cookie.json`).then((m) => m.default),
    import(`../messages/${locale}/seoHub.json`).then((m) => m.default),
  ]);

  const messages = {
    links,
    hero,
    about,
    results,
    examples,
    requirements,
    faq,
    services,
    contact,
    footer,
    privacy,
    terms,
    home,
    common,
    cookie,
    seoHub,
  };

  return {
    locale,
    messages,
  };
});
