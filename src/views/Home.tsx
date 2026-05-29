import React from 'react';
import { Link } from 'vite-react-ssg';
import Button from '@/components/Button';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';

const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const href = (path: string) => `/${language}${path}`;

  return (
    <>
      <Seo metaKey="home" path="" />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-navy overflow-hidden">
        {/* Abstract Dark Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hero-family-office.jpg"
            alt="Cross-border family office infrastructure"
            width={1920}
            height={1080}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>

        <div className="relative container mx-auto px-6 z-10 py-32">
          <div className="max-w-3xl">
            <p className="font-serif text-gold text-xl md:text-2xl italic mb-4 tracking-wide">
              {t('hero.eyebrow')}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              {t('hero.title')}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to={href('/schedule-consultation')}>{t('hero.cta.book')}</Button>
              <Button variant="outline" to={href('/about')}>
                {t('hero.cta.learn')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Established Family Offices (Who We Serve) */}
      <section className="pt-16 pb-32 md:pt-20 md:pb-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-navy font-bold mb-4">{t('who.title')}</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-charcoal text-lg md:text-xl leading-loose mb-10 font-light">{t('who.p1')}</p>
            <p className="text-charcoal text-lg md:text-xl leading-loose font-light">{t('who.p2')}</p>
          </div>
        </div>
      </section>

      {/* Infrastructure & Solutions */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-navy font-bold mb-4">{t('infra.title')}</h2>
            <p className="text-gray-600 text-lg">{t('infra.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { eyebrow: t('card.foundation'), title: t('card.structure.title'), desc: t('card.structure.desc') },
              { eyebrow: t('card.orchestration'), title: t('card.advisor.title'), desc: t('card.advisor.desc') },
              { eyebrow: t('card.protection'), title: t('card.compliance.title'), desc: t('card.compliance.desc') },
              { eyebrow: t('card.intelligence'), title: t('card.market.title'), desc: t('card.market.desc') },
            ].map((card, idx) => (
              <Link
                key={idx}
                to={href('/services')}
                className="bg-white p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left block"
              >
                <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">{card.eyebrow}</span>
                <h3 className="font-serif text-3xl text-navy mb-4">{card.title}</h3>
                <div className="w-12 h-0.5 bg-gray-200 mb-6"></div>
                <p className="text-gray-600 leading-relaxed text-sm font-sans">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Access Section */}
      <section className="bg-[#F0EBE0] py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-3 block">{t('strat.eyebrow')}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-8">{t('strat.title')}</h2>
          <p className="text-charcoal text-lg md:text-xl font-sans leading-relaxed max-w-4xl mx-auto">{t('strat.desc')}</p>
        </div>
      </section>

      {/* About Ipanema Institutional - Dark Section */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8 md:mb-12">{t('about.home.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2 prose prose-lg text-gray-300 font-sans leading-relaxed max-w-none">
                <p className="mb-6">{t('about.home.p1')}</p>
                <p>{t('about.home.p2')}</p>
              </div>

              <div className="md:col-span-1 flex justify-center md:border-l md:border-gray-700 md:pl-12 pt-8 md:pt-0 border-t border-gray-700 md:border-t-0">
                <div className="text-center">
                  <div className="font-serif text-6xl text-gold font-bold mb-2">{t('about.metric.number')}</div>
                  <div className="text-white text-sm uppercase tracking-widest font-semibold">{t('about.metric.label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-offwhite py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-navy font-bold mb-6">{t('cta_bottom.title')}</h2>
            <p className="text-charcoal text-lg mb-10 leading-relaxed">{t('cta_bottom.desc')}</p>
            <Button to={href('/schedule-consultation')}>{t('cta_bottom.button')}</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
