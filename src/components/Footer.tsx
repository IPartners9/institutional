import React from 'react';
import { Link } from 'vite-react-ssg';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const href = (path: string) => `/${language}${path}`;

  const links = [
    { label: t('nav.home'), path: '' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.insights'), path: '/insights' },
    { label: t('nav.portal'), path: '/client-portal' },
    { label: t('nav.contact'), path: '/schedule-consultation' },
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="font-serif text-2xl font-bold tracking-wider mb-6">
              IPANEMA <span className="text-gold font-light">INSTITUTIONAL</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-lg text-gold mb-6">{t('footer.navigation')}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path || 'home'}>
                  <Link to={href(link.path)} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-lg text-gold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="mr-2">Email:</span>
                <a href="mailto:admin@ipanemapartners.com" className="hover:text-gold transition-colors">
                  admin@ipanemapartners.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal/Disclaimer */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-lg text-gold mb-6">{t('footer.legal')}</h4>
            <div className="text-gray-500 text-xs leading-relaxed space-y-3">
              <p>{t('footer.disclaimer')}</p>
              <p>{t('footer.disclaimer2')}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <Link to={href('/privacy-policy')} className="text-gray-500 hover:text-white text-xs underline">
                {t('footer.privacy')}
              </Link>
              <Link to={href('/terms-of-service')} className="text-gray-500 hover:text-white text-xs underline">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Ipanema Institutional. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
