
import React from 'react';
import { Page } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface InsightsProps {
  onNavigate?: (page: Page) => void;
}

const Insights: React.FC<InsightsProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const articlesData = t('insights_page.articles') as any[];

  // Map the translated data to include the page enum which isn't in the translation file
  const articles = articlesData ? articlesData.map((article: any, index: number) => ({
      ...article,
      page: [Page.ARTICLE_1, Page.ARTICLE_2, Page.ARTICLE_3, Page.ARTICLE_4, Page.ARTICLE_5, Page.ARTICLE_6][index] || Page.HOME,
      readTime: ["10", "8", "6", "7", "12", "15"][index] + " " + t('insights_page.latest.read_time_min')
  })) : [];

  return (
    <div className="animate-fade-in">
      <div className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">{t('insights_page.hero.title')}</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            {t('insights_page.hero.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl text-navy font-bold mb-6">{t('insights_page.latest.title')}</h2>
                <p className="text-charcoal text-lg max-w-2xl mx-auto">
                    {t('insights_page.latest.subtitle')}
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {articles.map((article: any, index: number) => (
                    <div 
                        key={index} 
                        onClick={() => onNavigate && onNavigate(article.page)}
                        className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col h-full group cursor-pointer"
                    >
                        <div className="mb-auto">
                            <span className="text-gold text-xs font-bold uppercase tracking-wider mb-3 block">{article.cat}</span>
                            <h3 className="font-serif text-xl text-navy font-bold mb-4 group-hover:text-gold transition-colors">{article.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">{article.desc}</p>
                        </div>
                        <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                            <span className="text-gray-400 text-xs">{article.readTime}</span>
                            <span className="text-navy font-semibold text-sm group-hover:translate-x-1 transition-transform">{t('insights_page.latest.read_more')} →</span>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination / Load More */}
            <div className="mt-16 text-center">
                <button className="px-8 py-3 border border-navy text-navy font-semibold uppercase tracking-widest text-sm hover:bg-navy hover:text-white transition-colors duration-300">
                    {t('insights_page.latest.load_more')}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
