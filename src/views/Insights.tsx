import React from 'react';
import { Link } from 'vite-react-ssg';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { articles as articleDefs } from '@/lib/articles';

const Insights: React.FC = () => {
  const { language, t } = useLanguage();
  const href = (path: string) => `/${language}${path}`;
  const articlesData = (t('insights_page.articles') as any[]) || [];

  const readTimes = ['10', '8', '6', '7', '12', '15'];

  return (
    <div className="animate-fade-in">
      <Seo metaKey="insights" path="/insights" />

      <div className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">{t('insights_page.hero.title')}</h1>
          <p className="text-gray-300 max-w-2xl text-lg">{t('insights_page.hero.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-navy font-bold mb-6">{t('insights_page.latest.title')}</h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">{t('insights_page.latest.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {articlesData.map((article: any, index: number) => {
              const def = articleDefs[index];
              if (!def) return null;
              const readTime = `${readTimes[index]} ${t('insights_page.latest.read_time_min')}`;
              return (
                <Link
                  key={index}
                  to={href(`/insights/${def.slug}`)}
                  className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="mb-auto">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-3 block">{article.cat}</span>
                    <h3 className="font-serif text-xl text-navy font-bold mb-4 group-hover:text-gold transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{article.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-400 text-xs">{readTime}</span>
                    <span className="text-navy font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      {t('insights_page.latest.read_more')} &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
