// Generates public/sitemap.xml for every locale x route + articles, with hreflang alternates.
// Run automatically via the "prebuild" npm script. Mirrors ipanemapartners.com sitemap logic.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const SITE_URL = 'https://www.ipanemainstitutional.com';
const languages = ['en', 'pt', 'es'];

// Static routes: path after the locale prefix. client-portal is intentionally excluded (noindex).
const staticRoutes = [
  { path: '', changefreq: 'weekly', priority: 1.0, lastmod: '2026-05-01' },
  { path: '/about', changefreq: 'monthly', priority: 0.8, lastmod: '2026-05-01' },
  { path: '/services', changefreq: 'monthly', priority: 0.9, lastmod: '2026-05-01' },
  { path: '/insights', changefreq: 'weekly', priority: 0.8, lastmod: '2026-05-01' },
  { path: '/schedule-consultation', changefreq: 'monthly', priority: 0.7, lastmod: '2026-05-01' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: 0.3, lastmod: '2026-05-01' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: 0.3, lastmod: '2026-05-01' },
];

// Derive article slugs from src/lib/articles.ts without importing TS.
const articlesSrc = readFileSync(resolve(root, 'src/lib/articles.ts'), 'utf8');
const slugs = [...articlesSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const articleRoutes = slugs.map((slug) => ({
  path: `/insights/${slug}`,
  changefreq: 'monthly',
  priority: 0.7,
  lastmod: '2026-05-01',
}));

const routes = [...staticRoutes, ...articleRoutes];

const xml = ['<?xml version="1.0" encoding="UTF-8"?>'];
xml.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">');

for (const route of routes) {
  for (const lang of languages) {
    xml.push('  <url>');
    xml.push(`    <loc>${SITE_URL}/${lang}${route.path}</loc>`);
    for (const alt of languages) {
      xml.push(`    <xhtml:link rel="alternate" hreflang="${alt}" href="${SITE_URL}/${alt}${route.path}"/>`);
    }
    xml.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en${route.path}"/>`);
    xml.push(`    <lastmod>${route.lastmod}</lastmod>`);
    xml.push(`    <changefreq>${route.changefreq}</changefreq>`);
    xml.push(`    <priority>${route.priority.toFixed(1)}</priority>`);
    xml.push('  </url>');
  }
}
xml.push('</urlset>');

writeFileSync(resolve(root, 'public/sitemap.xml'), xml.join('\n') + '\n');
console.log(`Generated public/sitemap.xml (${routes.length} routes x ${languages.length} locales = ${routes.length * languages.length} URLs)`);
