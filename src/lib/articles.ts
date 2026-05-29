import type { ComponentType } from 'react';
import Article1 from '@/views/Article1';
import Article2 from '@/views/Article2';
import Article3 from '@/views/Article3';
import Article4 from '@/views/Article4';
import Article5 from '@/views/Article5';
import Article6 from '@/views/Article6';

export interface ArticleDef {
  slug: string;
  title: string;
  description: string;
  category: string;
  lastmod: string;
  component: ComponentType;
}

// Article bodies are English-only for now (see plan). Descriptions reused across locales.
export const articles: ArticleDef[] = [
  {
    slug: 'private-fund-allocation-complexity',
    title: 'Addressing Administrative Complexity in Private Fund Allocations',
    description:
      'Why subscribing to hedge funds, private equity, and credit strategies involves an administrative maze, and how coordination reduces friction across jurisdictions.',
    category: 'Whitepaper',
    lastmod: '2026-05-01',
    component: Article1,
  },
  {
    slug: 'securitized-investment-platform',
    title: 'Constructing Your Securitized Investment Platform: A Comprehensive Approach',
    description:
      'A practical approach to building a securitized investment platform for family offices, from structuring decisions to multi-jurisdictional execution.',
    category: 'Case Study',
    lastmod: '2026-05-01',
    component: Article2,
  },
  {
    slug: 'single-family-investment-vehicle',
    title: 'Establishing a Single-Family Investment Vehicle: A Strategic Guide for Family Offices',
    description:
      'A strategic guide to establishing a single-family investment vehicle, covering structure, governance, and cross-border considerations.',
    category: 'Market Update',
    lastmod: '2026-05-01',
    component: Article3,
  },
  {
    slug: 'structuring-family-office-investments',
    title: 'Structuring Your Family Office Investments: A Strategic Framework',
    description:
      'A framework for structuring family office investments across jurisdictions, balancing tax efficiency, compliance, and operational stability.',
    category: 'Trends',
    lastmod: '2026-05-01',
    component: Article4,
  },
  {
    slug: 'cross-border-hedging-derivatives-tax',
    title: 'Understanding Cross-Border Hedging and Derivative Contracts: Tax Implications for Family Offices',
    description:
      'The tax implications of cross-border hedging and derivative contracts for family offices, and how to coordinate treatment across jurisdictions.',
    category: 'Regulation',
    lastmod: '2026-05-01',
    component: Article5,
  },
  {
    slug: 'feeder-fund-costs',
    title: 'Understanding Feeder Fund Costs: Why Traditional Structures Are Resource-Intensive',
    description:
      'Why traditional feeder fund structures are resource-intensive, the costs involved, and how family offices can evaluate more efficient alternatives.',
    category: 'Comparative Analysis',
    lastmod: '2026-05-01',
    component: Article6,
  },
];
