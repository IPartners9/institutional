import React from 'react';
import { Head, Link } from 'vite-react-ssg';
import { SITE_URL } from '@/lib/languages';

/** Standalone 404 (no locale layout / context). Prerendered to dist/404.html. */
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-white text-center px-6">
      <Head>
        <html lang="en" />
        <title>Page Not Found | Ipanema Institutional</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}/en`} />
      </Head>
      <div className="font-serif text-7xl text-gold font-bold mb-4">404</div>
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-300 max-w-md mb-10">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        to="/en"
        className="px-8 py-3 bg-gold text-white font-sans font-semibold tracking-wide text-sm uppercase hover:bg-[#8f754a] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
