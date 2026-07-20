import type { Locale, PortfolioData } from '~/data/portfolio';
import { SITE_URL, absoluteUrl, homePath } from '~/lib/site';

/**
 * JSON-LD for the home page: Person (rich result for personal brand)
 * + WebSite + ProfilePage wrapping the Person.
 */
export function buildHomeJsonLd(locale: Locale, data: PortfolioData) {
  const url = absoluteUrl(homePath(locale));

  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: data.profile.name,
    alternateName: 'Ismael Hurtado',
    jobTitle: locale === 'es' ? 'Senior Full-Stack Engineer · IA / LLM' : 'Senior Full-Stack Engineer · AI / LLM',
    description: data.profile.summary,
    url: SITE_URL,
    email: 'ismaelhurtadov@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressCountry: 'PE',
    },
    knowsLanguage: ['es', 'en'],
    sameAs: data.profile.socials.map(s => s.url),
  };

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${url}#profilepage`,
      url,
      name: data.profile.name,
      inLanguage: locale,
      mainEntity: person,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Ismael Hurtado — Portfolio',
      inLanguage: [locale],
      publisher: { '@id': `${SITE_URL}/#person` },
    },
  ];
}
