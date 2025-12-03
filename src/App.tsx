import React, { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Infrastructure from './views/Infrastructure';
import About from './views/About';
import Contact from './views/Contact';
import Insights from './views/Insights';
import ClientPortal from './views/ClientPortal';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsOfService from './views/TermsOfService';
import Article1 from './views/Article1';
import Article2 from './views/Article2';
import Article3 from './views/Article3';
import Article4 from './views/Article4';
import Article5 from './views/Article5';
import Article6 from './views/Article6';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.INFRASTRUCTURE:
        return <Infrastructure onNavigate={navigate} />;
      case Page.ABOUT:
        return <About />;
      case Page.CONTACT:
        return <Contact />;
      case Page.INSIGHTS:
        return <Insights onNavigate={navigate} />;
      case Page.CLIENT_PORTAL:
        return <ClientPortal />;
      case Page.PRIVACY_POLICY:
        return <PrivacyPolicy />;
      case Page.TERMS_OF_SERVICE:
        return <TermsOfService />;
      case Page.ARTICLE_1:
        return <Article1 />;
      case Page.ARTICLE_2:
        return <Article2 />;
      case Page.ARTICLE_3:
        return <Article3 />;
      case Page.ARTICLE_4:
        return <Article4 />;
      case Page.ARTICLE_5:
        return <Article5 />;
      case Page.ARTICLE_6:
        return <Article6 />;
      case Page.HOME:
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen font-sans bg-offwhite text-charcoal antialiased">
        <Navbar currentPage={currentPage} onNavigate={navigate} />
        <main className="flex-grow pt-20">
          {renderPage()}
        </main>
        <Footer onNavigate={navigate} />
      </div>
    </LanguageProvider>
  );
};

export default App;
