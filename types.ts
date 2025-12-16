
export type Language = 'zh' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: 'Restaurant' | 'Home' | 'Commercial' | 'Cabinet';
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description?: string; // Extended description for the detail page
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
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  // Adding ai property as optional any to prevent build errors if old AIAdviser file is checked
  ai?: any;
}
