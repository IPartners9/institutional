import React from 'react';
import Button from '@/components/Button';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceSchema } from '@/lib/schema';

const PILLAR_IMAGES = [
  '/images/service-corporate.jpg',
  '/images/service-banking.jpg',
  '/images/service-asset-protection.jpg',
  '/images/service-legacy.jpg',
];

const Infrastructure: React.FC = () => {
  const { language, t } = useLanguage();
  const href = (path: string) => `/${language}${path}`;
  const services = t('infrastructure_page.services') as any[];

  return (
    <div className="animate-fade-in">
      <Seo metaKey="services" path="/services" jsonLd={serviceSchema(language)} />

      {/* Header */}
      <div className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">{t('infrastructure_page.hero.title')}</h1>
          <p className="text-gray-300 max-w-2xl text-lg">{t('infrastructure_page.hero.subtitle')}</p>
        </div>
      </div>

      {/* Service Pillars Section */}
      <div className="bg-white py-24 border-t border-gray-200">
        <div className="container mx-auto px-6 space-y-24">
          {services &&
            services.map((service: any, index: number) => {
              const isEven = index % 2 === 0;
              const img = PILLAR_IMAGES[index % PILLAR_IMAGES.length];
              const ImageBlock = (
                <img
                  src={img}
                  alt={service.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto shadow-2xl grayscale-[30%]"
                />
              );
              const TextBlock = (
                <>
                  <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">{service.label}</span>
                  <h2 className="font-serif text-4xl text-navy font-bold mb-6">{service.title}</h2>
                  <div className="prose prose-lg text-charcoal font-sans leading-relaxed">
                    <p className="mb-4">{service.desc1}</p>
                    <p className="mb-4">{service.desc2}</p>
                    <h3 className="font-bold text-navy text-sm uppercase tracking-wider mt-6 mb-3">{service.includes_title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                      {service.items.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              );

              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {isEven ? (
                    <>
                      <div className="lg:col-span-5 order-2 lg:order-1">{ImageBlock}</div>
                      <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-10">{TextBlock}</div>
                    </>
                  ) : (
                    <>
                      <div className="lg:col-span-7 lg:pr-10">{TextBlock}</div>
                      <div className="lg:col-span-5">{ImageBlock}</div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 pb-24 mt-12">
        <div className="bg-navy/5 p-12 text-center rounded-sm">
          <h2 className="font-serif text-2xl text-navy font-bold mb-4">{t('infrastructure_page.cta.title')}</h2>
          <p className="text-gray-600 mb-8">{t('infrastructure_page.cta.subtitle')}</p>
          <Button to={href('/schedule-consultation')}>{t('infrastructure_page.cta.button')}</Button>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
