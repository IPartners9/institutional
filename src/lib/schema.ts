import { SITE_URL } from './languages';
import type { ArticleDef } from './articles';

const PARENT = {
  '@type': 'Organization',
  name: 'Ipanema Partners',
  url: 'https://ipanemapartners.com',
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ipanema Institutional',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    'Cross-border infrastructure and coordination for multi-jurisdictional family offices.',
  sameAs: ['https://ipanemapartners.com'],
  parentOrganization: PARENT,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ipanema Institutional',
  url: SITE_URL,
  publisher: { '@type': 'Organization', name: 'Ipanema Institutional', url: SITE_URL },
};

export function serviceSchema(lang: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Cross-border family office infrastructure and coordination',
    provider: { '@type': 'Organization', name: 'Ipanema Institutional', url: SITE_URL },
    areaServed: 'Global',
    url: `${SITE_URL}/${lang}/services`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Infrastructure & Solutions',
      itemListElement: [
        'Structure Translation',
        'Advisor Coordination',
        'Ongoing Compliance',
        'Market Intelligence',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
}

export function articleSchema(article: ArticleDef, lang: string) {
  const url = `${SITE_URL}/${lang}/insights/${article.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    articleSection: article.category,
    inLanguage: lang,
    dateModified: article.lastmod,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    author: { '@type': 'Organization', name: 'Ipanema Institutional', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Ipanema Institutional',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
  };
}
