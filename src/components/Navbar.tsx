import React, { useState, useEffect } from 'react';
import { Link } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, type Language } from '@/lib/languages';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const href = (path: string) => `/${language}${path}`;
  const isActive = (path: string) => pathname === href(path);

  const navLinks = [
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.insights'), path: '/insights' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-lg py-2' : 'bg-navy py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <Link to={href('')} className="flex items-center group" aria-label="Ipanema Institutional home">
          <div className="font-serif text-2xl text-white font-bold tracking-wider">
            IPANEMA <span className="text-gold font-light">INSTITUTIONAL</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={href(link.path)}
              className={`text-sm uppercase tracking-widest transition-colors duration-200 ${
                isActive(link.path) ? 'text-gold border-b border-gold pb-1' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="h-6 w-px bg-gray-600 mx-2"></div>

          {/* Language Toggles */}
          <div className="flex items-center space-x-3 text-xs font-bold tracking-widest">
            {languages.map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span className="text-gray-600">|</span>}
                <button
                  onClick={() => setLanguage(l as Language)}
                  className={`transition-colors uppercase ${language === l ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
                  aria-label={`Switch language to ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-600 mx-2"></div>

          <Link
            to={href('/client-portal')}
            className={`text-sm uppercase tracking-widest transition-colors duration-200 font-semibold ${
              isActive('/client-portal') ? 'text-gold' : 'text-white hover:text-gold'
            }`}
          >
            {t('nav.portal')}
          </Link>

          <Button variant="primary" to={href('/schedule-consultation')} className="ml-4">
            {t('nav.contact')}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy absolute w-full top-full left-0 border-t border-gray-700 shadow-xl">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={href(link.path)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-white text-lg uppercase tracking-widest hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Language Toggles */}
            <div className="flex items-center space-x-6 text-sm font-bold tracking-widest py-2 border-y border-gray-700">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLanguage(l as Language);
                    setMobileMenuOpen(false);
                  }}
                  className={`transition-colors uppercase ${language === l ? 'text-gold' : 'text-gray-400'}`}
                  aria-label={`Switch language to ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <Link
              to={href('/client-portal')}
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-white text-lg uppercase tracking-widest hover:text-gold font-semibold"
            >
              {t('nav.portal')}
            </Link>
            <Button
              variant="primary"
              to={href('/schedule-consultation')}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center"
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
