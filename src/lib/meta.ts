import type { Language } from './languages';

export type MetaEntry = { title: string; description: string };

// Per-route, per-locale title + description. Titles include the brand suffix.
// House style: no em-dashes in any language.
export const meta: Record<string, Record<Language, MetaEntry>> = {
  home: {
    en: {
      title: 'Ipanema Institutional | The International Layer of Your Family Office',
      description:
        'Cross-border infrastructure and coordination for multi-jurisdictional family offices. Structure translation, advisor coordination, ongoing compliance, and market intelligence.',
    },
    pt: {
      title: 'Ipanema Institutional | A Camada Internacional do Seu Family Office',
      description:
        'Infraestrutura e coordenação transfronteiriça para family offices multijurisdicionais. Tradução de estruturas, coordenação de assessores, conformidade contínua e inteligência de mercado.',
    },
    es: {
      title: 'Ipanema Institutional | La Capa Internacional de su Family Office',
      description:
        'Infraestructura y coordinación transfronteriza para family offices multijurisdiccionales. Traducción de estructuras, coordinación de asesores, cumplimiento continuo e inteligencia de mercado.',
    },
  },
  about: {
    en: {
      title: 'About Ipanema Institutional | Cross-Border Operating System',
      description:
        'A specialized division of Ipanema Partners providing the cross-border infrastructure and coordination that multi-jurisdictional families need to operate efficiently.',
    },
    pt: {
      title: 'Sobre a Ipanema Institutional | Sistema Operacional Transfronteiriço',
      description:
        'Uma divisão especializada da Ipanema Partners que fornece a infraestrutura e a coordenação transfronteiriça que famílias multijurisdicionais precisam para operar com eficiência.',
    },
    es: {
      title: 'Sobre Ipanema Institutional | Sistema Operativo Transfronterizo',
      description:
        'Una división especializada de Ipanema Partners que ofrece la infraestructura y la coordinación transfronteriza que las familias multijurisdiccionales necesitan para operar con eficiencia.',
    },
  },
  services: {
    en: {
      title: 'Infrastructure & Solutions | Ipanema Institutional',
      description:
        'Four core pillars for multi-jurisdictional family offices: structure translation, advisor coordination, ongoing compliance, and market intelligence.',
    },
    pt: {
      title: 'Infraestrutura e Soluções | Ipanema Institutional',
      description:
        'Quatro pilares centrais para family offices multijurisdicionais: tradução de estruturas, coordenação de assessores, conformidade contínua e inteligência de mercado.',
    },
    es: {
      title: 'Infraestructura y Soluciones | Ipanema Institutional',
      description:
        'Cuatro pilares centrales para family offices multijurisdiccionales: traducción de estructuras, coordinación de asesores, cumplimiento continuo e inteligencia de mercado.',
    },
  },
  insights: {
    en: {
      title: 'Insights | Ipanema Institutional',
      description:
        'Research and analysis on private fund administration, family office structuring, cross-border compliance, and multi-jurisdictional investment platforms.',
    },
    pt: {
      title: 'Insights | Ipanema Institutional',
      description:
        'Pesquisa e análise sobre administração de fundos privados, estruturação de family offices, conformidade transfronteiriça e plataformas de investimento multijurisdicionais.',
    },
    es: {
      title: 'Insights | Ipanema Institutional',
      description:
        'Investigación y análisis sobre administración de fondos privados, estructuración de family offices, cumplimiento transfronterizo y plataformas de inversión multijurisdiccionales.',
    },
  },
  contact: {
    en: {
      title: 'Schedule a Strategy Audit | Ipanema Institutional',
      description:
        'Schedule a confidential strategy audit to explore whether Ipanema Institutional is the right partner for your family office international infrastructure.',
    },
    pt: {
      title: 'Agende uma Auditoria Estratégica | Ipanema Institutional',
      description:
        'Agende uma auditoria estratégica confidencial para avaliar se a Ipanema Institutional é o parceiro certo para a infraestrutura internacional do seu family office.',
    },
    es: {
      title: 'Agende una Auditoría Estratégica | Ipanema Institutional',
      description:
        'Agende una auditoría estratégica confidencial para evaluar si Ipanema Institutional es el socio adecuado para la infraestructura internacional de su family office.',
    },
  },
  clientPortal: {
    en: {
      title: 'Client Portal | Ipanema Institutional',
      description: 'Secure client portal access for Ipanema Institutional family office clients.',
    },
    pt: {
      title: 'Portal do Cliente | Ipanema Institutional',
      description: 'Acesso seguro ao portal do cliente para clientes family office da Ipanema Institutional.',
    },
    es: {
      title: 'Portal del Cliente | Ipanema Institutional',
      description: 'Acceso seguro al portal del cliente para clientes family office de Ipanema Institutional.',
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy | Ipanema Institutional',
      description: 'How Ipanema Institutional collects, uses, and protects personal information.',
    },
    pt: {
      title: 'Política de Privacidade | Ipanema Institutional',
      description: 'Como a Ipanema Institutional coleta, usa e protege informações pessoais.',
    },
    es: {
      title: 'Política de Privacidad | Ipanema Institutional',
      description: 'Cómo Ipanema Institutional recopila, usa y protege la información personal.',
    },
  },
  terms: {
    en: {
      title: 'Terms of Service | Ipanema Institutional',
      description: 'The terms governing use of the Ipanema Institutional website and services.',
    },
    pt: {
      title: 'Termos de Serviço | Ipanema Institutional',
      description: 'Os termos que regem o uso do site e dos serviços da Ipanema Institutional.',
    },
    es: {
      title: 'Términos del Servicio | Ipanema Institutional',
      description: 'Los términos que rigen el uso del sitio web y los servicios de Ipanema Institutional.',
    },
  },
};
