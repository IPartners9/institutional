export enum Page {
  HOME = 'HOME',
  INFRASTRUCTURE = 'INFRASTRUCTURE',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  INSIGHTS = 'INSIGHTS',
  CLIENT_PORTAL = 'CLIENT_PORTAL',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_OF_SERVICE = 'TERMS_OF_SERVICE',
  ARTICLE_1 = 'ARTICLE_1',
  ARTICLE_2 = 'ARTICLE_2',
  ARTICLE_3 = 'ARTICLE_3',
  ARTICLE_4 = 'ARTICLE_4',
  ARTICLE_5 = 'ARTICLE_5',
  ARTICLE_6 = 'ARTICLE_6',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
