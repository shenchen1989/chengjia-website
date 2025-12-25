
export type Language = 'zh' | 'en' | 'it' | 'da';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: 'Restaurant' | 'Home' | 'Commercial' | 'Cabinet' | 'Construction' | 'Furniture' | 'Branding';
}

export interface PortfolioItem {
  id: number;
  title: string;
  title_zh?: string; // Optional Chinese title
  category: string;
  description?: string; // Extended description for the detail page (English)
  description_zh?: string; // Extended description for the detail page (Chinese)
  location?: string;
  year?: string;
  imageUrl: string; // Cover image
  gallery?: string[]; // Array of additional images
}

export interface Content {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    switchLanguage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    experience: string;
    location: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    stats: {
      years: string;
      yearsLabel: string;
      projects: string;
      projectsLabel: string;
    }
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    viewProject: string;
    backToHome: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    wechat: string;
    location: string;
    linkedin?: string; 
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  ai?: any;
}
