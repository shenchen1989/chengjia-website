
import { Content, PortfolioItem } from './types';

// =================================================================
// 🟢 您的 LOGO 设置
// =================================================================
export const LOGO_URL = "https://i.postimg.cc/mrB5sdLw/LOGO.png"; 

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
      title: "海外华人空间的理想构建者",
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
      viewProject: "查看项目详情",
      backToHome: "返回首页",
    },
    contact: {
      title: "联系我们",
      subtitle: "期待与您沟通您的项目",
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
      viewProject: "View Project",
      backToHome: "Back to Home",
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

// =================================================================
// 🟢 案例列表
// =================================================================
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Nordic Fusion Restaurant",
    category: "Commercial",
    description: "A complete renovation of a 200sqm Asian fusion restaurant in Copenhagen. We focused on warm lighting and durable materials to create a welcoming atmosphere while adhering to strict local hygiene regulations.",
    location: "Copenhagen, Denmark",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3c6221741?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Copenhagen Apartment Renovation",
    category: "Residential",
    description: "Modernizing a historic apartment. We opened up the kitchen to the living room and installed custom cabinetry to maximize storage in the tight Nordic layout.",
    location: "Copenhagen, Denmark",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1374&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Custom Oak Kitchen",
    category: "Customization",
    description: "Design and supply of high-end white oak cabinetry. We sourced the materials and provided detailed installation guides for the local carpentry team.",
    location: "Malmö, Sweden",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  {
    // REPLACED PROJECT: C&B Nail Salon
    id: 4,
    title: "C&B Nail Salon",
    title_zh: "C&B 美甲沙龙",
    category: "Commercial",
    description: "A sophisticated nail salon design featuring warm wood textures, custom polish display shelving, and ergonomic pedicure stations. The space uses a soft beige palette and hidden LED lighting to create a serene, high-end atmosphere for clients.",
    location: "Copenhagen, Denmark",
    year: "2024",
    imageUrl: "https://i.postimg.cc/q7BSVmQd/场景_1.png", 
    gallery: [
      "https://i.postimg.cc/q7BSVmQd/场景_1.png",
      "https://i.postimg.cc/RZLyYr1z/场景_2.png",
      "https://i.postimg.cc/13r2dx0z/场景_3.png",
      "https://i.postimg.cc/SN0PNQDN/场景_7.png",
      "https://i.postimg.cc/HsQhJGh4/场景_8.png",
      "https://i.postimg.cc/y8Ln97hw/场景_9.png"
    ]
  },
  {
    id: 5,
    title: "Minimalist Wardrobe System",
    category: "Customization",
    description: "Full-wall custom wardrobe solution designed to blend seamlessly into the bedroom walls.",
    location: "Odense, Denmark",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1470&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Modern Asian Villa",
    category: "Residential",
    description: "Interior design for a newly built villa, incorporating Feng Shui principles with modern Nordic aesthetics.",
    location: "Milan, Italy",
    year: "2020",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop"
    ]
  },
];
