import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = {
    links: (await import(`../messages/${locale}/links.json`)).default,
    hero: (await import(`../messages/${locale}/hero.json`)).default,
    about: (await import(`../messages/${locale}/about.json`)).default,
    results: (await import(`../messages/${locale}/results.json`)).default,
    examples: (await import(`../messages/${locale}/examples.json`)).default,
    requirements: (await import(`../messages/${locale}/requirements.json`))
      .default,
    faq: (await import(`../messages/${locale}/faq.json`)).default,
    services: (await import(`../messages/${locale}/services.json`)).default,
    contact: (await import(`../messages/${locale}/contact.json`)).default,
    footer: (await import(`../messages/${locale}/footer.json`)).default,
  };

  return {
    locale,
    messages,
  };
});
