import React from 'react';
import Seo from './Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { articleSchema } from '@/lib/schema';
import type { ArticleDef } from '@/lib/articles';

/** Wraps a hardcoded Article view with per-page SEO (title, meta, canonical, hreflang, Article JSON-LD). */
const ArticleRoute: React.FC<{ def: ArticleDef }> = ({ def }) => {
  const { language } = useLanguage();
  const Body = def.component;
  return (
    <>
      <Seo
        title={`${def.title} | Ipanema Institutional`}
        description={def.description}
        path={`/insights/${def.slug}`}
        type="article"
        jsonLd={articleSchema(def, language)}
      />
      <Body />
    </>
  );
};

export default ArticleRoute;
