import { Content, PortfolioItem } from './types';

// Using the provided URL. If it fails to load, the UI handles it cleanly.
export const LOGO_URL = "https://files.oaiusercontent.com/file-2s95hGq1tXbU6L26TDKN3n";

export const CONTENT: Record<string, Content> = {
  zh: {
    nav: {
      home: "首页",
      services: "服务内容",
      portfolio: "精选案例",
      about: "关于我们",
      contact: "联系我们",
    },
    hero: {
      title: "北欧华人空间的理想构建者",
      subtitle: "从设计图纸到全屋定制落地。CJ Studio 诚嘉设计专注为丹麦、瑞典的华人客户提供高性价比的餐厅装修与住宅改造服务。",
      cta: "获取免费报价",
      experience: "10年设计经验 · 专注落地实操",
      location: "服务地区：丹麦 / 瑞典 / 意大利",
    },
    about: {
      title: "关于 CJ Studio",
      description1: "CJ Studio (诚嘉设计) 是一家立足于北欧，服务全欧华人的室内设计与工程顾问工作室。作为主理人，我拥有10年室内设计经验，并在意大利积累了3年一线华人餐饮与住宅装修实战经验。",
      description2: "我们深知海外装修“人工贵、材料难买、沟通难”的痛点。因此，我们不仅提供美观的效果图，更结合丹麦合伙人的本地资源，为您提供从全屋定制柜体到施工指导的一站式落地解决方案。无论是开店还是安家，我们都致力于用最低的成本，呈现最好的效果。",
      stats: {
        years: "10+",
        yearsLabel: "设计经验",
        projects: "50+",
        projectsLabel: "落地案例",
      }
    },
    services: {
      title: "我们的服务",
      subtitle: "设计只是开始，落地才是关键",
      items: [
        {
          title: "餐饮商业装修",
          description: "中餐馆、奶茶店、亚超设计。我们懂商业动线，懂卫生局要求，更懂如何用有限预算打造高级感，帮您快速开业。",
          icon: "Restaurant",
        },
        {
          title: "全屋定制与软装",
          description: "提供橱柜、衣柜等全屋定制设计与资源对接。解决北欧家具昂贵的问题，从国内/本地优选供应链，完美适配您的空间。",
          icon: "Cabinet",
        },
        {
          title: "住宅翻新改造",
          description: "老房翻新、厨房改造、卫生间升级。我们提供详细的施工图纸，即使是请当地工人，也能确保按图施工，不走弯路。",
          icon: "Home",
        },
      ],
    },
    portfolio: {
      title: "精选案例",
      subtitle: "实用主义与美学的平衡",
    },
    ai: {
      title: "AI 装修顾问",
      subtitle: "担心预算超支？不确定风格？先问问我们的 AI 助手。",
      placeholder: "例如：我在丹麦买了个80平的老公寓，想翻新厨房和厕所，大概要多少钱？",
      send: "发送",
      disclaimer: "AI 估算仅供参考，具体施工报价请联系人工客服。",
      initialMessage: "你好！我是 CJ Studio 的智能助手。无论您是想做全屋定制，还是翻新餐厅，都可以问我。请告诉我您的城市和需求。",
    },
    contact: {
      title: "联系我们",
      subtitle: "免费咨询，欢迎比价",
      email: "电子邮箱",
      phone: "联系电话",
      wechat: "微信咨询",
      location: "工作室：丹麦 & 意大利",
      formName: "您的称呼",
      formEmail: "联系方式 (电话/微信)",
      formMessage: "咨询内容 (如：餐厅装修、全屋定制)",
      formSubmit: "发送留言",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Interior Design & Renovation for Nordic Living",
      subtitle: "CJ Studio specializes in turning spaces into functional, beautiful realities. Serving the Asian community in Denmark & Sweden with cost-effective renovation and custom cabinetry solutions.",
      cta: "Get a Free Quote",
      experience: "10 Years Exp · Concept to Reality",
      location: "Serving: Denmark / Sweden / Italy",
    },
    about: {
      title: "About CJ Studio",
      description1: "CJ Studio is a boutique interior design firm tailored for the Asian community in Europe. With over 10 years of experience, including 3 years of hands-on project management in Italy, we understand the complexities of renovating abroad.",
      description2: "We know that labor is expensive and materials are hard to find. That's why we go beyond drawings. Working with partners in Denmark, we provide practical solutions—from custom cabinetry supply to construction guidance—ensuring your restaurant or home is built on time and on budget.",
      stats: {
        years: "10+",
        yearsLabel: "Years Exp.",
        projects: "50+",
        projectsLabel: "Projects",
      }
    },
    services: {
      title: "Services",
      subtitle: "Practical solutions from concept to completion",
      items: [
        {
          title: "Restaurant & Retail",
          description: "Design for Asian restaurants and bubble tea shops. We optimize workflows, ensure hygiene compliance, and control budgets to help you open faster.",
          icon: "Restaurant",
        },
        {
          title: "Custom Cabinetry",
          description: "Full-house customization (Kitchens, Wardrobes). We design and source high-quality joinery to fit your space perfectly, offering a better value than standard local options.",
          icon: "Cabinet",
        },
        {
          title: "Residential Renovation",
          description: "Old apartment refurbishment, kitchen & bath remodeling. We provide precise construction drawings to ensure local contractors build exactly what you want.",
          icon: "Home",
        },
      ],
    },
    portfolio: {
      title: "Selected Work",
      subtitle: "Balancing aesthetics with practicality",
    },
    ai: {
      title: "AI Renovation Consultant",
      subtitle: "Worried about costs? Ask our AI assistant for a preliminary estimate.",
      placeholder: "Ex: I bought an apartment in Copenhagen, need to redo the kitchen. Estimate?",
      send: "Send",
      disclaimer: "AI estimates are for reference. Contact us for precise quotes.",
      initialMessage: "Hi! I'm the CJ Studio assistant. Ask me about renovation costs, custom furniture, or restaurant design in the Nordics.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your project",
      email: "Email",
      phone: "Phone",
      wechat: "WeChat",
      location: "Studio: Denmark & Italy",
      formName: "Name",
      formEmail: "Contact (Phone/WeChat)",
      formMessage: "Message",
      formSubmit: "Send Message",
    },
  },
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Nordic Fusion Restaurant",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Copenhagen Apartment Renovation",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Custom Oak Kitchen",
    category: "Customization",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Bubble Tea Shop Design",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Minimalist Wardrobe System",
    category: "Customization",
    imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Modern Asian Villa",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
  },
];