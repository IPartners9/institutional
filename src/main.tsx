import { ViteReactSSG } from 'vite-react-ssg';
import type { RouteRecord } from 'vite-react-ssg';
import './index.css';

import LocaleLayout from './LocaleLayout';
import Home from './views/Home';
import Infrastructure from './views/Infrastructure';
import About from './views/About';
import Contact from './views/Contact';
import Insights from './views/Insights';
import ClientPortal from './views/ClientPortal';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsOfService from './views/TermsOfService';
import NotFound from './views/NotFound';
import ArticleRoute from './components/ArticleRoute';

import { languages } from './lib/languages';
import { articles } from './lib/articles';

export const routes: RouteRecord[] = [
  {
    path: ':lang',
    element: <LocaleLayout />,
    // Prerender one branch per locale.
    getStaticPaths: () => languages.map((l) => `/${l}`),
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Infrastructure /> },
      { path: 'schedule-consultation', element: <Contact /> },
      { path: 'insights', element: <Insights /> },
      ...articles.map((a) => ({
        path: `insights/${a.slug}`,
        element: <ArticleRoute def={a} />,
      })),
      { path: 'client-portal', element: <ClientPortal /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
    ],
  },
  // Standalone 404 -> dist/404.html (served by Vercel for unmatched paths).
  { path: '404', element: <NotFound /> },
  { path: '*', element: <NotFound /> },
];

export const createRoot = ViteReactSSG({ routes });
