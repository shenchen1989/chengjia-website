
import { Content, PortfolioItem } from './types';

// =================================================================
// 🟢 您的 LOGO 设置
// =================================================================
export const LOGO_URL = "https://i.postimg.cc/mrB5sdLw/LOGO.png"; 

export const CONTENT: Record<string, Content> = {
  zh: {
    seo: {
      title: "诚嘉设计 CJ Studio | 欧洲华人室内设计与装修全案服务",
      description: "诚嘉设计(CJ Studio)专注为欧洲及中国客户提供高品质空间解决方案。业务涵盖意大利、丹麦、瑞典及中国的商业空间设计与住宅翻新。14年经验，懂施工、懂设计。",
      keywords: "欧洲华人装修, 意大利室内设计, 丹麦装修公司, 热那亚装修, 诚嘉设计, CJ Studio, 中餐馆设计",
    },
    nav: { home: "首页", services: "服务内容", portfolio: "精选案例", about: "关于我们", contact: "联系我们", langSwitch: "切换语言" },
    hero: {
      title: "海外华人空间的理想构建者",
      subtitle: "从设计图纸到落地交付。<span class=\"text-accent-red font-medium text-xl\">CJ Studio 诚嘉设计</span> 专注为欧洲及中国的客户提供高品质空间解决方案。我们不只是施工方，更是懂工艺的设计事务所，一切只为设计效果的完美呈现。",
      cta: "获取免费报价",
      experience: "14年从业经验 · 懂施工的设计团队",
      location: "服务地区：丹麦 / 瑞典 / 意大利 / 中国",
    },
    about: {
      title: "关于 CJ Studio (诚嘉设计)",
      description1: "CJ Studio 汇聚了感性的艺术视野与理性的工程思维。设计主理人沈忱拥有14年行业履历，持有意大利硕士学位，深谙从设计构思到施工落地的每一个细节。",
      description2: "市场主理人徐晨常驻丹麦，作为活跃于欧洲的艺术家，他精准洞察市场趋势与高端华人客户的生活方式需求。",
      stats: { years: "14+", yearsLabel: "从业经验", projects: "50+", projectsLabel: "落地案例" }
    },
    services: {
      title: "我们的服务",
      subtitle: "以设计效果为导向的全案服务，涵盖空间、产品与品牌视觉，确保从概念到实物的精准还原。",
      items: [
        { title: "商业空间全案设计", description: "涵盖餐厅、酒吧、零售店铺及办公空间。我们提供专业的动线规划与合规设计。", icon: "Commercial" },
        { title: "住宅与别墅室内设计", description: "专注别墅、大平层及私宅改造。提供从平面规划到全场景3D模拟的完整设计咨询。", icon: "Home" },
        { title: "家具产品设计", description: "提供原创家具研发与单品定制服务。", icon: "Furniture" },
        { title: "品牌视觉设计 (VI)", description: "为商业客户提供从LOGO到导视系统的全套视觉识别设计。", icon: "Branding" },
        { title: "软装搭配与改造", description: "基于预算提供灵活的软装方案。", icon: "Cabinet" },
        { title: "设计落地与工程监理", description: "提供关键节点巡查与工艺验收，严格把控施工质量。", icon: "Construction" },
      ],
    },
    portfolio: { title: "精选案例", subtitle: "实用主义与美学的平衡", viewProject: "查看项目详情", backToHome: "返回首页" },
    contact: {
      title: "联系我们",
      subtitle: "期待与您沟通您的项目",
      email: "电子邮箱",
      phone: "联系电话",
      wechat: "微信咨询",
      location: "Via Giro del Vento, Genova, Italy",
      linkedin: "https://www.linkedin.com/in/%E5%BF%B1-%E6%B2%88-117797a3/",
      formName: "您的称呼",
      formEmail: "联系方式 (电话/微信)",
      formMessage: "咨询内容",
      formSubmit: "发送留言",
    },
  },
  en: {
    seo: {
      title: "CJ Studio | Interior Design & Renovation Europe & China",
      description: "Professional interior design and renovation services in Europe and China. Specializing in commercial spaces and luxury residential projects in Italy, Denmark, and Sweden.",
      keywords: "Interior Design Italy, Renovation Denmark, Chinese Architect Europe, Restaurant Design Italy, CJ Studio Genova",
    },
    nav: { home: "Home", services: "Services", portfolio: "Portfolio", about: "About", contact: "Contact", langSwitch: "Language" },
    hero: {
      title: "Interior Design & Renovation Experts",
      subtitle: "From blueprints to reality. <span class=\"text-accent-red font-medium text-xl\">CJ Studio</span> is a design-driven firm serving clients in Europe and China.",
      cta: "Get a Free Quote",
      experience: "14 Years Exp · Design-Led Build",
      location: "Serving: Denmark / Sweden / Italy / China",
    },
    about: {
      title: "About CJ Studio",
      description1: "CJ Studio represents the convergence of artistic vision and rational engineering. Design Principal Shen Chen brings 14 years of diverse international experience.",
      description2: "Market Principal Chen Xu, based in Denmark, is a distinguished Artist with a refined aesthetic and keen market insight.",
      stats: { years: "14+", yearsLabel: "Years Exp.", projects: "50+", projectsLabel: "Projects" }
    },
    services: {
      title: "Services",
      subtitle: "A design-driven approach covering space, product, and brand identity.",
      items: [
        { title: "Commercial Space Design", description: "Restaurants, bars, retail shops, and offices. We provide professional layout planning.", icon: "Commercial" },
        { title: "Residential & Villa Design", description: "Specialized in villas and apartments. We provide full design consulting.", icon: "Home" },
        { title: "Furniture Product Design", description: "Original furniture development and custom bespoke pieces.", icon: "Furniture" },
        { title: "Brand Visual Design (VI)", description: "Complete visual identity solutions including Logos and signage.", icon: "Branding" },
        { title: "Styling & Soft Furnishing", description: "Flexible styling solutions based on your budget.", icon: "Cabinet" },
        { title: "Design Supervision & Build", description: "We are designers who understand construction. We ensure flawless execution.", icon: "Construction" },
      ],
    },
    portfolio: { title: "Selected Work", subtitle: "Balancing aesthetics with practicality", viewProject: "View Project", backToHome: "Back to Home" },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your project",
      email: "Email",
      phone: "Phone",
      wechat: "WeChat",
      location: "Via Giro del Vento, Genova, Italy",
      linkedin: "https://www.linkedin.com/in/%E5%BF%B1-%E6%B2%88-117797a3/",
      formName: "Name",
      formEmail: "Contact",
      formMessage: "Message",
      formSubmit: "Send Message",
    },
  },
  it: {
    seo: {
      title: "Studio CJ | Architettura d'interni e Ristrutturazione Genova",
      description: "Esperti in progettazione d'interni e ristrutturazioni a Genova e in tutta Europa. Specializzati in ristoranti e residenze di lusso.",
      keywords: "Architetto d'interni Genova, Ristrutturazione casa Genova, Interior Design Italia, Studio architettura Genova",
    },
    nav: { home: "Home", services: "Servizi", portfolio: "Portfolio", about: "Chi Siamo", contact: "Contatti", langSwitch: "Lingua" },
    hero: {
      title: "Architetti d'Interni per il Vostro Spazio Ideale",
      subtitle: "Dal progetto tecnico alla realizzazione finale. <span class=\"text-accent-red font-medium text-xl\">CJ Studio</span> è uno studio orientato al design che serve clienti in Europa e Cina.",
      cta: "Preventivo Gratuito",
      experience: "14 Anni di Esperienza · Design & Costruzione",
      location: "Serviamo: Danimarca / Svezia / Italy / Cina",
    },
    about: {
      title: "Chi è CJ Studio",
      description1: "CJ Studio rappresenta la convergenza tra visione artistica e ingegneria razionale. Il Responsabile del Design Shen Chen vanta 14 anni di esperienza internazionale.",
      description2: "Il Responsabile di Mercato Chen Xu, con sede in Danimarca, è un distinto artista con un'estetica raffinata.",
      stats: { years: "14+", yearsLabel: "Anni Esp.", projects: "50+", projectsLabel: "Progetti" }
    },
    services: {
      title: "I Nostri Servizi",
      subtitle: "Un approccio guidato dal design che copre spazio, prodotto e identità di marca.",
      items: [
        { title: "Design Spazi Commerciali", description: "Ristoranti, bar, negozi e uffici. Offriamo una pianificazione professionale.", icon: "Commercial" },
        { title: "Design Residenziale & Ville", description: "Specializzati in ville e appartamenti di lusso. Forniamo consulenza completa.", icon: "Home" },
        { title: "Design del Prodotto & Mobili", description: "Sviluppo di mobili originali e pezzi su misura.", icon: "Furniture" },
        { title: "Brand Visual Design (VI)", description: "Soluzioni complete di identità visiva, inclusi logo e segnaletica.", icon: "Branding" },
        { title: "Styling & Arredamento", description: "Soluzioni di styling flessibili, dalla selezione curata IKEA.", icon: "Cabinet" },
        { title: "Supervisione Design & Build", description: "Siamo designer che capiscono la costruzione. Garantiamo una esecuzione impeccabile.", icon: "Construction" },
      ],
    },
    portfolio: { title: "Opere Selezionate", subtitle: "Equilibrio tra estetica e praticità", viewProject: "Vedi Progetto", backToHome: "Torna alla Home" },
    contact: {
      title: "Contattaci",
      subtitle: "Parliamo del tuo progetto",
      email: "Email",
      phone: "Telefono",
      wechat: "WeChat",
      location: "Via Giro del Vento, Genova, Italy",
      linkedin: "https://www.linkedin.com/in/%E5%BF%B1-%E6%B2%88-117797a3/",
      formName: "Nome",
      formEmail: "Contatto",
      formMessage: "Messaggio",
      formSubmit: "Invia Messaggio",
    },
  },
  da: {
    seo: {
      title: "CJ Studio | Indretningsarkitekt & Renovering Danmark",
      description: "Professionel indretning og renovering i Danmark og Europa. Specialister i erhvervslokaler og luksusboliger.",
      keywords: "Indretningsarkitekt Danmark, Renovering København, Boligindretning Danmark, CJ Studio Danmark",
    },
    nav: { home: "Hjem", services: "Ydelser", portfolio: "Portfolio", about: "Om os", contact: "Kontakt", langSwitch: "Sprog" },
    hero: {
      title: "Eksperter i Indretning og Renovering",
      subtitle: "Fra tegnestue til virkelighed. <span class=\"text-accent-red font-medium text-xl\">CJ Studio</span> er et designorienteret firma.",
      cta: "Få et gratis tilbud",
      experience: "14 års erfaring · Design-drevet byggeri",
      location: "Områder: Danmark / Sverige / Italien / Kina",
    },
    about: {
      title: "Om CJ Studio",
      description1: "CJ Studio er foreningen af kunstnerisk vision og rationel ingeniørkunst. Designansvarlig Shen Chen har 14 års international erfaring.",
      description2: "Markedsansvarlig Chen Xu, baseret i Danmark, er en anerkendt kunstner med en raffineret æstetik.",
      stats: { years: "14+", yearsLabel: "Års Erfaring", projects: "50+", projectsLabel: "Projekter" }
    },
    services: {
      title: "Vores Ydelser",
      subtitle: "En designorienteret tilgang, der dækker rum, produkt og brand-identitet.",
      items: [
        { title: "Design af Erhvervslokaler", description: "Restauranter, barer, butikker og kontorer. Professionel planlægning.", icon: "Commercial" },
        { title: "Bolig- & Villadesign", description: "Specialiseret i luksusvillaer og lejligheder. Fuld rådgivning.", icon: "Home" },
        { title: "Møbel- & Produktdesign", description: "Udvikling af originale møbler og specialfremstillede løsninger.", icon: "Furniture" },
        { title: "Visuel Brand-identitet (VI)", description: "Komplette visuelle løsninger, herunder logoer og skiltning.", icon: "Branding" },
        { title: "Styling & Indretning", description: "Fleksible stylingløsninger, lige fra IKEA-udvalg til specialfremstilling.", icon: "Cabinet" },
        { title: "Designledelse & Byggeri", description: "Vi are designere, der forstår byggeri. Vi fører tilsyn på pladsen.", icon: "Construction" },
      ],
    },
    portfolio: { title: "Udvalgte Projekter", subtitle: "Balance mellem æstetik og funktionalitet", viewProject: "Se Projekt", backToHome: "Tilbage til Forsiden" },
    contact: {
      title: "Kontakt os",
      subtitle: "Lad os drøfte dit projekt",
      email: "E-mail",
      phone: "Telefon",
      wechat: "WeChat",
      location: "Via Giro del Vento, Genova, Italy",
      linkedin: "https://www.linkedin.com/in/%E5%BF%B1-%E6%B2%88-117797a3/",
      formName: "Navn",
      formEmail: "Kontakt",
      formMessage: "Besked",
      formSubmit: "Send Besked",
    },
  },
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. Vienna Villa, Austria
  {
    id: 16,
    title: "Vienna Villa, Austria",
    title_zh: "奥地利维也纳别墅",
    category: "Residential",
    description: "A comprehensive private villa design project located in Vienna, Austria. This project spans across three levels of luxury living space, including a grand living room, state-of-the-art kitchen, cozy children's suites, a peaceful study area, and a sophisticated master bedroom suite. The design harmonizes modern minimalism with the elegance of European living. Through precise spatial planning and meticulous material selection, we created a high-quality sanctuary that perfectly balances artistic aesthetics with daily functionality.",
    description_zh: "位于奥地利维也纳的豪华私人别墅全案设计。该项目涵盖了从一层到三层的完整生活空间规划，包含宏伟的客厅、现代化厨房、温馨的儿童房、静谧的书房以及精致的主卧套间。设计风格融合了现代极简与欧式生活的优雅，通过精密的平面布局与细腻的材质选配，为客户打造了一个兼具艺术审美与实用机能的高品质居所。",
    location: "Vienna, Austria",
    year: "2024",
    imageUrl: "https://i.postimg.cc/Cx1ngFk5/客厅1.jpg",
    gallery: [
      "https://i.postimg.cc/Cx1ngFk5/客厅1.jpg", "https://i.postimg.cc/bwBDYKRj/一层洗手间11.jpg", "https://i.postimg.cc/vZNg8pvs/一层洗手间12.jpg", "https://i.postimg.cc/DwZ4T2Ld/三层办公书房36.jpg", "https://i.postimg.cc/SxsYhyCV/三层办公书房37.jpg", "https://i.postimg.cc/Z5RvSTpw/三层办公书房38.jpg", "https://i.postimg.cc/K8z32ZBp/三层办公书房39.jpg", "https://i.postimg.cc/BnVLZdBz/三层卫生间40.jpg", "https://i.postimg.cc/7ZWGPpnd/三层卫生间41.jpg", "https://i.postimg.cc/t4MZRLzQ/三层卫生间42.jpg", "https://i.postimg.cc/13jnRLK1/三层卫生间43.jpg", "https://i.postimg.cc/jSFwqG4c/三层女儿房32.jpg", "https://i.postimg.cc/sgNQft4T/三层女儿房33.jpg", "https://i.postimg.cc/VkVrs3W7/三层女儿房34.jpg", "https://i.postimg.cc/4xS74rQL/三层女儿房35.jpg", "https://i.postimg.cc/Gm583ZxF/三层楼梯30.jpg", "https://i.postimg.cc/FHBdF2Vb/三层楼梯31.jpg", "https://i.postimg.cc/jjnWDZMp/主卧卫生间28.jpg", "https://i.postimg.cc/fbS3VBHn/主卧卫生间29.jpg", "https://i.postimg.cc/Z5MBY1LZ/主卧室22.jpg", "https://i.postimg.cc/mg5zZ0SZ/主卧室23.jpg", "https://i.postimg.cc/vmx143PR/主卧室24.jpg", "https://i.postimg.cc/k5RV2fjd/主卧衣帽间25.jpg", "https://i.postimg.cc/8CfF7tyD/主卧衣帽间26.jpg", "https://i.postimg.cc/GpTB4qMd/主卧衣帽间27.jpg", "https://i.postimg.cc/65z4g728/二层卫生间19.jpg", "https://i.postimg.cc/Dy54HWJb/二层卫生间20.jpg", "https://i.postimg.cc/Z5RvSTp5/二层卫生间21.jpg", "https://i.postimg.cc/htjQBSTP/二层走廊13.jpg", "https://i.postimg.cc/28TLMqbS/儿童书房10.jpg", "https://i.postimg.cc/4NwHqK74/儿童书房9.jpg", "https://i.postimg.cc/Yq8LZ4GK/儿童房14.jpg", "https://i.postimg.cc/5NpQTHYW/儿童房15.jpg", "https://i.postimg.cc/02ZKF6MP/儿童房16.jpg", "https://i.postimg.cc/02ZKF6M8/儿童房17.jpg", "https://i.postimg.cc/VL40pSrf/儿童房18.jpg", "https://i.postimg.cc/SxsYhyCz/入口玄关6.jpg", "https://i.postimg.cc/SxsYhyC9/入口玄关7.jpg", "https://i.postimg.cc/RZFJBMKc/入口玄关8.jpg", "https://i.postimg.cc/WbSqCDFV/厨房2.jpg", "https://i.postimg.cc/rwmRk8xz/楼梯44.jpg", "https://i.postimg.cc/RZFJBMK6/楼梯走廊4.jpg", "https://i.postimg.cc/cLHtSswt/楼梯走廊5.jpg", "https://i.postimg.cc/sDKGqBQR/餐厅3.jpg", "https://i.postimg.cc/ZYXJR4Gv/1F平面图.jpg", "https://i.postimg.cc/jqBR5tp7/2F平面图.jpg", "https://i.postimg.cc/44jXdsDh/3F平面图.jpg"
    ]
  },
  // 更多项目...
  {
    id: 15,
    title: "Forest Bamboo Restaurant Austria",
    title_zh: "奥地利筑林餐厅设计",
    category: "Commercial",
    description: "An ambitious restaurant design project in Austria centered around the theme of 'Bamboo Forest'.",
    description_zh: "位于奥地利的大型餐饮设计项目，以“筑林”为核心主题。",
    location: "Austria",
    year: "2024",
    imageUrl: "https://i.postimg.cc/htHYLYtf/轴测图77.jpg",
    gallery: [
      "https://i.postimg.cc/htHYLYtf/轴测图77.jpg", "https://i.postimg.cc/X71mJqMr/休息区24.jpg"
    ]
  },
  {
    id: 14,
    title: "Tuscany Livorno Mini Hotel",
    title_zh: "托斯卡纳Livorno Mini Hotel",
    category: "Commercial",
    description: "A boutique hotel design project located in Livorno, Italy.",
    description_zh: "位于意大利里窝那（Livorno）的精品酒店设计项目。",
    location: "Livorno, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/KjNfCqbf/大堂9.jpg",
    gallery: ["https://i.postimg.cc/KjNfCqbf/大堂9.jpg"]
  },
  {
    id: 13,
    title: "Lucio Minimalist Apartment in Rome",
    title_zh: "罗马Lucio极简公寓",
    category: "Residential",
    description: "A minimalist apartment renovation project in Rome.",
    description_zh: "位于罗马的Lucio极简公寓翻新项目。",
    location: "Rome, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/prTRnSsy/平面图12.jpg",
    gallery: ["https://i.postimg.cc/prTRnSsy/平面图12.jpg"]
  }
];
