import React, { useState, useEffect } from 'react';
import { Page } from '@/types';
import Button from './Button';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.about'), page: Page.ABOUT },
    { label: t('nav.services'), page: Page.INFRASTRUCTURE },
    { label: t('nav.insights'), page: Page.INSIGHTS },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-lg py-2' : 'bg-navy py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => onNavigate(Page.HOME)}
        >
          <div className="font-serif text-2xl text-white font-bold tracking-wider">
            IPANEMA <span className="text-gold font-light">INSTITUTIONAL</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`text-sm uppercase tracking-widest transition-colors duration-200 ${
                currentPage === link.page ? 'text-gold border-b border-gold pb-1' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="h-6 w-px bg-gray-600 mx-2"></div>

           {/* Language Toggles */}
           <div className="flex items-center space-x-3 text-xs font-bold tracking-widest">
            <button 
              onClick={() => setLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setLanguage('pt')}
              className={`transition-colors ${language === 'pt' ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
            >
              PT
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setLanguage('es')}
              className={`transition-colors ${language === 'es' ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
            >
              ES
            </button>
          </div>
          
          <div className="h-6 w-px bg-gray-600 mx-2"></div>
          
          <button 
            onClick={() => onNavigate(Page.CLIENT_PORTAL)}
            className={`text-sm uppercase tracking-widest transition-colors duration-200 font-semibold ${
                currentPage === Page.CLIENT_PORTAL ? 'text-gold' : 'text-white hover:text-gold'
            }`}
          >
            {t('nav.portal')}
          </button>
          
          <Button 
            variant="primary" 
            onClick={() => onNavigate(Page.CONTACT)}
            className="ml-4"
          >
            {t('nav.contact')}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-white text-lg uppercase tracking-widest hover:text-gold"
              >
                {link.label}
              </button>
            ))}
             {/* Mobile Language Toggles */}
            <div className="flex items-center space-x-6 text-sm font-bold tracking-widest py-2 border-y border-gray-700">
                <button 
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-gold' : 'text-gray-400'}`}
                >
                EN
                </button>
                <button 
                onClick={() => setLanguage('pt')}
                className={`transition-colors ${language === 'pt' ? 'text-gold' : 'text-gray-400'}`}
                >
                PT
                </button>
                <button 
                onClick={() => setLanguage('es')}
                className={`transition-colors ${language === 'es' ? 'text-gold' : 'text-gray-400'}`}
                >
                ES
                </button>
            </div>

            <button 
              onClick={() => {
                  onNavigate(Page.CLIENT_PORTAL);
                  setMobileMenuOpen(false);
              }}
              className="text-left text-white text-lg uppercase tracking-widest hover:text-gold font-semibold"
            >
              {t('nav.portal')}
            </button>
            <Button 
              variant="primary" 
              onClick={() => {
                onNavigate(Page.CONTACT);
                setMobileMenuOpen(false);
              }}
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
