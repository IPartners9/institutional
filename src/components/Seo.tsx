import React from 'react';
import { Head } from 'vite-react-ssg';
import { languages, SITE_URL } from '@/lib/languages';
import { meta } from '@/lib/meta';
import { useLanguage } from '@/contexts/LanguageContext';

interface SeoProps {
  /** Key into lib/meta for translated title + description. */
  metaKey?: string;
  /** Explicit title (used for articles, overrides metaKey). */
  title?: string;
  /** Explicit description (used for articles, overrides metaKey). */
  description?: string;
  /** Path after the locale prefix, e.g. '' for home, '/about', '/insights/feeder-fund-costs'. */
  path: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export const Seo: React.FC<SeoProps> = ({ metaKey, title, description, path, type = 'website', noindex, jsonLd }) => {
  const { language } = useLanguage();

  const resolved = metaKey ? meta[metaKey]?.[language] : undefined;
  const finalTitle = title ?? resolved?.title ?? 'Ipanema Institutional';
  const finalDesc = description ?? resolved?.description ?? '';

  const url = `${SITE_URL}/${language}${path}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={url} />
      {languages.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${SITE_URL}/${l}${path}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en${path}`} />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Ipanema Institutional" />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={language} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(b)}
        </script>
      ))}
    </Head>
  );
};

export default Seo;
