import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { defaultLanguage, isLanguage, type Language } from '@/lib/languages';
import { organizationSchema, websiteSchema } from '@/lib/schema';

const LocaleLayout: React.FC = () => {
  const { lang } = useParams();
  const language: Language = isLanguage(lang) ? lang : defaultLanguage;

  return (
    <LanguageProvider lang={language}>
      <Head>
        <html lang={language} />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Head>
      <div className="flex flex-col min-h-screen font-sans bg-offwhite text-charcoal antialiased">
        <Navbar />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default LocaleLayout;
