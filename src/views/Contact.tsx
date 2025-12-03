
import React, { useState } from 'react';
import Button from '@/components/Button';
import { generateStrategyInsight } from '@/services/geminiService';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    region: 'Global',
    message: ''
  });
  
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetInsight = async () => {
    if (!formData.industry) return;
    
    setIsLoadingAi(true);
    setAiInsight(null);
    try {
        const insight = await generateStrategyInsight(formData.industry, formData.region);
        setAiInsight(insight);
    } finally {
        setIsLoadingAi(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact_page.form.success'));
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-navy py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">{t('contact_page.hero.title')}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t('contact_page.hero.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="font-serif text-3xl text-navy font-bold mb-6">{t('contact_page.info.title')}</h2>
            <p className="text-gray-600 mb-8 text-lg font-sans">
              {t('contact_page.info.desc')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy/10 flex items-center justify-center text-navy rounded-sm mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy">{t('contact_page.info.hq')}</h4>
                  <p className="text-gray-600">123 Financial District Blvd,<br/>Suite 500<br/>London, UK</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy/10 flex items-center justify-center text-navy rounded-sm mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy">{t('contact_page.info.email')}</h4>
                  <p className="text-gray-600">info@ipanemapartners.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 shadow-lg border-t-4 border-navy">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t('contact_page.form.name')}</label>
                  <input required type="text" name="name" onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t('contact_page.form.email')}</label>
                  <input required type="email" name="email" onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-navy transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t('contact_page.form.company')}</label>
                  <input type="text" name="company" onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                   <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t('contact_page.form.region')}</label>
                   <select name="region" onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-navy transition-colors">
                     <option value="Global">{t('contact_page.form.region_opts.global')}</option>
                     <option value="Europe">{t('contact_page.form.region_opts.europe')}</option>
                     <option value="Asia">{t('contact_page.form.region_opts.asia')}</option>
                     <option value="Americas">{t('contact_page.form.region_opts.americas')}</option>
                     <option value="Middle East">{t('contact_page.form.region_opts.me')}</option>
                   </select>
                </div>
              </div>

              <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t('contact_page.form.industry')}</label>
                  <div className="flex gap-2">
                    <input 
                        type="text" 
                        name="industry" 
                        placeholder={t('contact_page.form.industry_ph')}
                        onChange={handleChange} 
                        className="w-full border border-gray-300 p-3 focus:outline-none focus:border-navy transition-colors" 
                    />
                    <button 
                        type="button" 
                        onClick={handleGetInsight}
                        disabled={!formData.industry || isLoadingAi}
                        className="bg-navy/10 text-navy hover:bg-navy/20 px-4 text-xs font-bold uppercase transition-colors whitespace-nowrap"
                    >
                        {isLoadingAi ? t('contact_page.form.ai_btn.loading') : t('contact_page.form.ai_btn.idle')}
                    </button>
                  </div>
                  {aiInsight && (
                      <div className="mt-2 p-3 bg-gold/10 border-l-2 border-gold text-sm text-charcoal italic">
                          <strong className="text-gold not-italic">{t('contact_page.form.ai_insight')}</strong> {aiInsight}
                      </div>
                  )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t('contact_page.form.message')}</label>
                <textarea required name="message" rows={4} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-navy transition-colors"></textarea>
              </div>

              <Button type="submit" className="w-full">
                {t('contact_page.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
