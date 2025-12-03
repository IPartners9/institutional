
import React, { useState } from 'react';
import Button from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const ClientPortal: React.FC = () => {
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [supportMessage, setSupportMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSupportMessage('');
    setLoading(true);

    // Simulate network request delay
    setTimeout(() => {
      setError(t('portal_page.login.error'));
      setLoading(false);
    }, 1500);
  };

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSupportMessage(t('portal_page.login.support_msg'));
    setError(''); // Clear any existing login errors to avoid clutter
  };

  return (
    <div className="animate-fade-in min-h-[70vh] flex flex-col">
       <div className="bg-navy py-12 text-center">
        <div className="container mx-auto px-6">
            <h1 className="font-serif text-3xl md:text-4xl text-white font-bold">{t('portal_page.hero.title')}</h1>
            <p className="text-gray-300 mt-2 text-sm uppercase tracking-widest">{t('portal_page.hero.subtitle')}</p>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-6 bg-offwhite">
        <div className="bg-white p-8 md:p-12 shadow-lg border-t-4 border-gold w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4 text-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h2 className="font-serif text-2xl text-navy font-bold">{t('portal_page.login.title')}</h2>
            <p className="text-gray-500 text-sm mt-2">{t('portal_page.login.subtitle')}</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-2">{t('portal_page.login.username')}</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                placeholder={t('portal_page.login.username_ph')}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-2">{t('portal_page.login.password')}</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                placeholder={t('portal_page.login.password_ph')}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-center">
                 <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 {error}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t('portal_page.login.btn.loading') : t('portal_page.login.btn.idle')}
            </Button>

            <div className="text-center mt-6 pt-6 border-t border-gray-100">
              <button 
                type="button"
                onClick={handleSupportClick} 
                className="text-xs text-gray-500 hover:text-navy transition-colors underline bg-transparent border-none cursor-pointer"
              >
                {t('portal_page.login.forgot')}
              </button>
              <span className="mx-2 text-gray-300">|</span>
              <button 
                type="button"
                onClick={handleSupportClick} 
                className="text-xs text-gray-500 hover:text-navy transition-colors underline bg-transparent border-none cursor-pointer"
              >
                {t('portal_page.login.request')}
              </button>
              
              {supportMessage && (
                  <div className="mt-4 p-3 bg-navy/5 text-navy text-xs font-semibold rounded animate-fade-in border border-navy/10">
                      {supportMessage}
                  </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
