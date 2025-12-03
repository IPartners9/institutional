
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const values = t('about_page.values.items') as any[];
  const diffs = t('about_page.diff.items') as any[];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">{t('about_page.hero.title')}</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            {t('about_page.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Mission & Stats Section */}
      <div className="bg-navy py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission Text */}
            <div>
              <h2 className="font-serif text-4xl text-white font-bold mb-2">{t('about_page.mission.title')}</h2>
              <p className="font-serif text-gold italic text-xl mb-8">{t('about_page.mission.subtitle')}</p>
              <p className="font-sans text-gray-300 text-lg leading-relaxed mb-6">
                {t('about_page.mission.p1')}
              </p>
              <p className="font-sans text-gray-300 text-lg leading-relaxed">
                {t('about_page.mission.p2')}
              </p>
            </div>

            {/* Stats Grid - Single Metric */}
            <div className="flex justify-center items-center lg:pl-12 pt-4">
              <div className="text-center">
                <div className="font-serif text-6xl text-gold font-bold mb-2">31+</div>
                <p className="text-white font-sans font-semibold text-sm uppercase tracking-widest">{t('about.metric.label')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Values Header */}
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl text-navy font-bold mb-4">{t('about_page.values.title')}</h2>
              <p className="text-gray-500 text-lg font-light max-w-xs">{t('about_page.values.subtitle')}</p>
            </div>

            {/* Values Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {values && values.map((val: any, idx: number) => (
                  <div key={idx}>
                    <h3 className="font-serif text-2xl text-navy font-bold mb-4">{val.title}</h3>
                    <p className="text-charcoal leading-relaxed text-lg">
                      {val.desc}
                    </p>
                  </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="bg-offwhite py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-navy font-bold mb-4">{t('about_page.diff.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              {t('about_page.diff.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {diffs && diffs.map((item: any, idx: number) => (
                 <div key={idx} className="p-10 border-t-4 border-transparent hover:bg-white hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm group cursor-default">
                    <h3 className="font-serif text-xl text-navy font-bold mb-4">{item.title}</h3>
                    <p className="text-charcoal leading-relaxed">
                      {item.desc}
                    </p>
                 </div>
             ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="bg-navy py-24 mb-1 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Statement */}
            <div className="flex items-center">
               <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight">
                 {t('about_page.leadership.title')}
               </h2>
            </div>

            {/* Right Column: Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
               <div>
                  <h4 className="font-bold text-white text-lg font-serif">Gabriel Pincus</h4>
                  <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{t('about_page.leadership.roles.md')}</p>
               </div>
               <div>
                  <h4 className="font-bold text-white text-lg font-serif">William Hodgson</h4>
                  <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{t('about_page.leadership.roles.md')}</p>
               </div>
               <div>
                  <h4 className="font-bold text-white text-lg font-serif">Stephane Trubert</h4>
                  <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{t('about_page.leadership.roles.md')}</p>
               </div>
               <div>
                   <h4 className="font-bold text-white text-lg font-serif">Adena Polozkova</h4>
                   <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{t('about_page.leadership.roles.pr')}</p>
               </div>
               <div>
                  <h4 className="font-bold text-white text-lg font-serif">Giü Palmiasno</h4>
                  <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{t('about_page.leadership.roles.ae')}</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
