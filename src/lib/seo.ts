import type { Locale, PortfolioData } from '~/data/portfolio';
import type { CaseStudy } from '~/data/case-studies';
import { SITE_URL, absoluteUrl, homePath } from '~/lib/site';

const PERSON_ID = `${SITE_URL}/#person`;

/**
 * JSON-LD for the home page: Person (rich result for personal brand)
 * + WebSite + ProfilePage wrapping the Person.
 */
export function buildHomeJsonLd(locale: Locale, data: PortfolioData) {
  const url = absoluteUrl(homePath(locale));

  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: data.profile.name,
    alternateName: 'Ismael Hurtado',
    jobTitle: data.profile.role,
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
      name: 'Ismael Hurtado · Portfolio',
      inLanguage: [locale],
      publisher: { '@id': PERSON_ID },
    },
  ];
}

/** JSON-LD for a case study: the page itself plus the product it describes. */
export function buildCaseStudyJsonLd(locale: Locale, study: CaseStudy, paths: Record<Locale, string>) {
  const url = absoluteUrl(paths[locale]);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: study.metaTitle,
      description: study.metaDescription,
      inLanguage: locale,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: { '@id': PERSON_ID },
      about: {
        '@type': 'SoftwareApplication',
        name: study.title,
        url: study.url,
        applicationCategory: 'CommunicationApplication',
        operatingSystem: 'Web',
        creator: { '@id': PERSON_ID },
      },
    },
  ];
}
