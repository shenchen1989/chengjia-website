import { Content, PortfolioItem } from './types';

// =================================================================
// 🟢 您的 LOGO 设置
// =================================================================
export const LOGO_URL = "https://i.postimg.cc/mrB5sdLw/LOGO.png"; 

export const CONTENT: Record<string, Content> = {
  zh: {
    seo: {
      title: "诚嘉设计 CJ Studio | 欧洲华人室内设计与装修全案服务",
      description: "诚嘉设计(CJ Studio)专注为欧洲及中国客户提供高品质空间解决方案。业务涵盖意大利、丹麦、瑞典及中国的商业空间设计与住宅翻新. 14年经验，懂施工、懂设计。",
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
      description2: "市场主理人徐晨常驻丹麦，作为活跃于欧洲的艺术家，他精准洞察 market 趋势与高端华人客户的生活方式需求。",
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
      subtitle: "Dal progetto tecnico alla realizzazione finale. <span class=\"text-accent-red font-medium text-xl\">CJ Studio</span> è uno studio orientato al design che serve clients in Europe and Cina.",
      cta: "Preventivo Gratuito",
      experience: "14 Anni di Esperienza · Design & Costruzione",
      location: "Serviamo: Danimarca / Svezia / Italy / Cina",
    },
    about: {
      title: "Chi è CJ Studio",
      description1: "CJ Studio rappresenta la convergenza tra visione artistica e ingegneria razionale. Il Responsabile del Design Shen Chen vanta 14 anni di experience internazionale.",
      description2: "Il Responsabile di Mercato Chen Xu, con sede in Danimarca, è un distinto artista con un'estetica raffinata.",
      stats: { years: "14+", yearsLabel: "Anni Esp.", projects: "50+", projectsLabel: "Progetti" }
    },
    services: {
      title: "I Nostri Servizi",
      subtitle: "Un approccio guidato dal design che copre spazio, producto e identità di marca.",
      items: [
        { title: "Design Spazi Commerciali", description: "Ristoranti, bar, negozi e uffici. Offriamo una pianificazione professionale.", icon: "Commercial" },
        { title: "Design Residenziale & Ville", description: "Specializzati in ville e apartments di lusso. Forniamo consulenza completa.", icon: "Home" },
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
      subtitle: "Fra tegnestue till virkelighed. <span class=\"text-accent-red font-medium text-xl\">CJ Studio</span> er et designorienteret firma.",
      cta: "Få et gratis tillbud",
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
      subtitle: "En designorienteret tillgang, der dækker rum, produkt og brand-identitet.",
      items: [
        { title: "Design af Erhvervslokaler", description: "Restauranter, barer, butikker og kontorer. Professionel planlægning.", icon: "Commercial" },
        { title: "Bolig- & Villadesign", description: "Specialiseret i luksusvillaer og lejligheder. Fuld rådgivning.", icon: "Home" },
        { title: "Møbel- & Produktdesign", description: "Udvikling af originale møbler og specialfremstillede løsninger.", icon: "Furniture" },
        { title: "Visuel Brand-identitet (VI)", description: "Komplette visuelle løsninger, herunder logoer og skiltning.", icon: "Branding" },
        { title: "Styling & Indretning", description: "Fleksible stylingløsninger, lige fra IKEA-udvalg till specialfremstilling.", icon: "Cabinet" },
        { title: "Designledelse & Byggeri", description: "Vi are designere, der forstår byggeri. Vi fører tilsyn på pladsen.", icon: "Construction" },
      ],
    },
    portfolio: { title: "Udvalgte Projekter", subtitle: "Balance mellem æstetik og funktionalitet", viewProject: "Se Projekt", backToHome: "Tilbage till Forsiden" },
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
  // ==========================================
  // 🍽️ 第一优先级：餐厅项目 (RESTAURANTS)
  // ==========================================
  {
    id: 15,
    title: "Forest Bamboo Restaurant Austria",
    title_zh: "奥地利筑林餐厅设计",
    category: "Commercial",
    description: "An ambitious restaurant design project in Austria centered around the theme of 'Bamboo Forest'.",
    description_zh: "位于奥地利的大型餐饮设计项目，以“筑林”为核心主题。该项目融合了自然美学与现代用餐体验。",
    location: "Austria",
    year: "2024",
    imageUrl: "https://i.postimg.cc/htHYLYtf/轴测图77.jpg",
    gallery: ["https://i.postimg.cc/htHYLYtf/轴测图77.jpg", "https://i.postimg.cc/X71mJqMr/休息区24.jpg"]
  },
  {
    id: 26,
    title: "WinHouse Steakhouse",
    title_zh: "WinHouse牛排馆",
    category: "Commercial",
    description: "Interior design for WinHouse Steakhouse. 美式工业风与高端用餐氛围的融合。",
    description_zh: "WinHouse牛排馆室内设计项目。致力于打造一个兼具美式工业风与高端用餐氛围的现代商业空间。",
    location: "Shanghai, China",
    year: "2020",
    imageUrl: "https://i.postimg.cc/L4VrZX5q/portfolio_2025_页面_038_Win_House牛排馆.jpg",
    gallery: ["https://i.postimg.cc/L4VrZX5q/portfolio_2025_页面_038_Win_House牛排馆.jpg"]
  },

  // ==========================================
  // 🏨 第二优先级：精品酒店项目 (HOTELS)
  // ==========================================
  {
    id: 14,
    title: "Tuscany Livorno Mini Hotel",
    title_zh: "托斯卡纳Livorno Mini Hotel",
    category: "Commercial",
    description: "A boutique hotel design project located in Livorno, Italy.",
    description_zh: "位于意大利里窝那（Livorno）的精品酒店设计项目。强调托斯卡纳式的舒适与现代设计感。",
    location: "Livorno, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/KjNfCqbf/大堂9.jpg",
    gallery: ["https://i.postimg.cc/KjNfCqbf/大堂9.jpg"]
  },

  // ==========================================
  // 🏡 第三优先级：住宅与别墅 (RESIDENTIAL)
  // ==========================================
  {
    id: 16,
    title: "Vienna Villa, Austria",
    title_zh: "奥地利维也纳别墅",
    category: "Residential",
    description: "A comprehensive private villa design project located in Vienna, Austria.",
    description_zh: "位于奥地利维也纳的豪华私人别墅全案设计。从空间规划到软装搭配的完整呈现。",
    location: "Vienna, Austria",
    year: "2024",
    imageUrl: "https://i.postimg.cc/Cx1ngFk5/客厅1.jpg",
    gallery: ["https://i.postimg.cc/Cx1ngFk5/客厅1.jpg", "https://i.postimg.cc/bwBDYKRj/一层洗手间11.jpg", "https://i.postimg.cc/ZYXJR4Gv/1F平面图.jpg"]
  },
  {
    id: 13,
    title: "Lucio Minimalist Apartment in Rome",
    title_zh: "罗马Lucio极简公寓",
    category: "Residential",
    description: "A minimalist apartment renovation project in Rome.",
    description_zh: "位于罗马的Lucio极简公寓翻新项目。在古城中创造极简的居住艺术。",
    location: "Rome, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/prTRnSsy/平面图12.jpg",
    gallery: ["https://i.postimg.cc/prTRnSsy/平面图12.jpg"]
  },
  // [今日上传的旧项目 - 靠后放]
  {
    id: 37,
    title: "Shanghai Shaoxing Road Duplex Apartment",
    title_zh: "上海绍兴路复式老洋房公寓",
    category: "Residential",
    description: "Historic garden house restoration with contemporary luxury.",
    description_zh: "上海绍兴路老洋房复式公寓。将历史建筑底蕴与现代生活方式完美结合。",
    location: "Shanghai, China",
    year: "2020",
    imageUrl: "https://i.postimg.cc/fL4Rkv5z/portfolio_2025_页面_070上海绍兴路复式老洋房公寓.jpg",
    gallery: ["https://i.postimg.cc/fL4Rkv5z/portfolio_2025_页面_070上海绍兴路复式老洋房公寓.jpg"]
  },
  {
    id: 36,
    title: "Shanghai Wuyi Road Townhouse",
    title_zh: "上海武夷路排屋",
    category: "Residential",
    description: "Heritage preservation and luxury living.",
    description_zh: "上海武夷路历史排屋翻新。在繁华都市中心保留一方私密静谧。",
    location: "Shanghai, China",
    year: "2020",
    imageUrl: "https://i.postimg.cc/8zVFjt0c/portfolio_2025_页面_063上海武夷路排屋.jpg",
    gallery: ["https://i.postimg.cc/8zVFjt0c/portfolio_2025_页面_063上海武夷路排屋.jpg"]
  },
  {
    id: 35,
    title: "Liaoning Anshan Villa",
    title_zh: "辽宁鞍山别墅",
    category: "Residential",
    imageUrl: "https://i.postimg.cc/0NY0zznp/portfolio_2025_页面_058辽宁鞍山别墅.jpg",
    gallery: ["https://i.postimg.cc/0NY0zznp/portfolio_2025_页面_058辽宁鞍山别墅.jpg"]
  },
  {
    id: 34,
    title: "Zhejiang Ningbo Villa",
    title_zh: "浙江宁波别墅",
    category: "Residential",
    imageUrl: "https://i.postimg.cc/Kj2Xn3SC/portfolio_2025_页面_054浙江宁波别墅.jpg",
    gallery: ["https://i.postimg.cc/Kj2Xn3SC/portfolio_2025_页面_054浙江宁波别墅.jpg"]
  },
  {
    id: 33,
    title: "Shanghai Ziyun Road Apartment",
    title_zh: "上海紫云路公寓",
    category: "Residential",
    imageUrl: "https://i.postimg.cc/1R2szXjv/portfolio_2025_页面_050上海紫云路公寓.jpg",
    gallery: ["https://i.postimg.cc/1R2szXjv/portfolio_2025_页面_050上海紫云路公寓.jpg"]
  },
  {
    id: 32,
    title: "Japan NISEKO Ski Resort Villa",
    title_zh: "日本NISEKO滑雪度假别墅",
    category: "Residential",
    imageUrl: "https://i.postimg.cc/kXY8GQdL/portfolio_2025_页面_048日本NISEKO滑雪度假别墅.jpg",
    gallery: ["https://i.postimg.cc/kXY8GQdL/portfolio_2025_页面_048日本NISEKO滑雪度假别墅.jpg"]
  },

  // ==========================================
  // 🏢 第四优先级：办公/商业 (OFFICE & COMMERCIAL) -> 最后放
  // ==========================================
  {
    id: 17,
    title: "Standard Chartered Bank Shanghai Office",
    title_zh: "渣打银行上海办公室",
    category: "Commercial",
    description: "Dynamic banking environment design by Woods Bagot.",
    description_zh: "渣打银行上海办公室。Woods Bagot 期间作品。",
    location: "Shanghai, China",
    year: "2023",
    imageUrl: "https://i.postimg.cc/G3TMJmXT/portfolio_2025_页面_004渣打银行上海办公室.jpg",
    gallery: ["https://i.postimg.cc/G3TMJmXT/portfolio_2025_页面_004渣打银行上海办公室.jpg", "https://i.postimg.cc/sgmKDQgJ/portfolio_2025_页面_005渣打银行上海办公室.jpg"]
  },
  {
    id: 18,
    title: "Hangzhou Binjiang Intime Shopping Mall",
    title_zh: "杭州滨江银泰购物广场",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/sXVn4YHm/portfolio_2025_页面_011杭州滨江银泰购物广场.jpg",
    gallery: ["https://i.postimg.cc/sXVn4YHm/portfolio_2025_页面_011杭州滨江银泰购物广场.jpg"]
  },
  {
    id: 19,
    title: "Sunche Oil Shanghai Bund Office",
    title_zh: "鑫驰石油上海外滩办公室",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/zDxC9Z3C/portfolio_2025_页面_017鑫驰石油上海外滩办公室.jpg",
    gallery: ["https://i.postimg.cc/zDxC9Z3C/portfolio_2025_页面_017鑫驰石油上海外滩办公室.jpg"]
  },
  {
    id: 20,
    title: "ASCENTIAL Shanghai Office",
    title_zh: "ASCENTIAL上海办公室",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/qBwPSR8w/portfolio_2025_页面_019ASCENTIAL上海办公室.jpg",
  },
  {
    id: 24,
    title: "Challenge Textile Group Shanghai Office",
    title_zh: "嘉麟杰纺织集团上海办公室",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/sf8gqwPW/portfolio_2025_页面_032嘉麟杰纺织集团上海办公室.jpg",
  },
  {
    id: 27,
    title: "Santoni Yiwu Textile Machinery Exhibition",
    title_zh: "santoni义乌纺织机械展",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/zv18DPxF/portfolio_2025_页面_037santoni义乌纺织机械展.jpg",
  },
  {
    id: 25,
    title: "Shanghai Lingerie Exhibition",
    title_zh: "上海内衣展",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/HsDVj6Jn/portfolio_2025_页面_034上海内衣展.jpg",
  },
  {
    id: 22,
    title: "JUZPLAY Fitness Center Shanghai",
    title_zh: "上海 JUZPLAY 健身中心",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/sXr26X5T/portfolio_2025_页面_027上海JUZPLAY健身中心.jpg",
  },
  {
    id: 23,
    title: "One Plus Yoga & Fitness Center",
    title_zh: "上海浦东假日酒店一加瑜伽健身中心",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/Wz4q8zPQ/portfolio_2025_页面_031_上海浦东假日酒店一加瑜伽健身中心.jpg",
  },

  // ==========================================
  // 🗑️ 被要求“往后放”且“不出现在首页”的项目 (END ITEMS)
  // ==========================================
  {
    id: 28,
    title: "KFC Store Design & Detailing",
    title_zh: "KFC店面设计与深化",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/L6pLG930/portfolio_2025_页面_039KFC店面设计与深化.jpg",
    hideFromHome: true
  },
  {
    id: 21,
    title: "MR CHOI Dessert Pudong Airport Store",
    title_zh: "MR CHOI 甜品浦东机场店",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/0j7b5SPS/portfolio_2025_页面_025MR_CHOI甜品浦东机场店.jpg",
    hideFromHome: true
  },
  {
    id: 31,
    title: "Sanya Shangri-La Resort Construction Deepening",
    title_zh: "三亚香格里拉度假酒店施工深化",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/44MFc9Z9/portfolio_2025_页面_046三亚香格里拉度假酒店施工深化.jpg",
    hideFromHome: true
  },
  {
    id: 30,
    title: "Shanghai Xuhui Cape Good Hope Hotel",
    title_zh: "上海徐汇好望角酒店",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/TPqZqY0S/portfolio_2025_页面_044上海徐汇好望角酒店.jpg",
    hideFromHome: true
  },
  {
    id: 29,
    title: "Shaoxing Shangbai Hotel",
    title_zh: "绍兴尚柏酒店",
    category: "Commercial",
    imageUrl: "https://i.postimg.cc/vTzBJsQd/portfolio_2025_页面_040绍兴尚柏酒店.jpg",
    hideFromHome: true
  }
];