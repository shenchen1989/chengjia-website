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
      switchLanguage: "切换语言",
    },
    hero: {
      title: "海外华人空间的理想构建者",
      subtitle: "从设计图纸到落地交付。<span class=\"text-accent-red font-medium text-xl\">CJ Studio 诚嘉设计</span> 专注为欧洲及中国的客户提供高品质空间解决方案。我们不只是施工方，更是懂工艺的设计事务所，一切只为设计效果的完美呈现。",
      cta: "获取免费报价",
      experience: "14年从业经验 · 懂施工的设计团队",
      location: "服务地区：丹麦 / 瑞典 / 意大利 / 中国",
    },
    about: {
      title: "关于 CJ Studio (诚嘉设计)",
      description1: "CJ Studio 汇聚了感性的艺术视野 with 理性的工程思维。设计主理人 <span class=\"text-accent-red font-serif text-2xl mx-1\">沈忱 (Shen Chen)</span> 拥有14年行业履历，持有意大利硕士学位，深谙从设计构思到施工落地的每一个细节。他在新西兰与中国均有丰富的实操与设计经验。",
      description2: "市场主理人 <span class=\"text-accent-red font-serif text-2xl mx-1\">徐晨 (Chen Xu)</span> 常驻丹麦，作为活跃于欧洲的艺术家，他精准洞察 market 趋势与高端华人客户的生活方式需求，把控项目的审美高度。",
      stats: {
        years: "14+",
        yearsLabel: "从业经验",
        projects: "50+",
        projectsLabel: "落地案例",
      }
    },
    services: {
      title: "我们的服务",
      subtitle: "以设计效果为导向的全案服务，涵盖空间、产品与品牌视觉，确保从概念到实物的精准还原。",
      items: [
        { title: "商业空间全案设计", description: "餐厅、酒吧、零售店铺及办公空间。提供专业的动线规划与合规设计。", icon: "Commercial" },
        { title: "住宅与别墅室内设计", description: "专注别墅、大平层及私宅改造。提供平面规划到 3D 模拟的完整咨询。", icon: "Home" },
        { title: "家具产品设计", description: "提供原创家具研发与单品定制服务。", icon: "Furniture" },
        { title: "品牌视觉设计 (VI)", description: "为商业客户提供从 LOGO 到导视系统的全套视觉识别设计。", icon: "Branding" },
        { title: "软装搭配与改造", description: "基于预算提供灵活方案，提升空间格调。", icon: "Cabinet" },
        { title: "设计落地与工程监理", description: "提供关键节点巡查与工艺验收，严格把控施工质量。", icon: "Construction" },
      ],
    },
    portfolio: {
      title: "精选案例",
      subtitle: "实用主义 with 美学",
      viewProject: "查看项目详情",
      backToHome: "返回首页",
    },
    contact: {
      title: "联系我们",
      subtitle: "期待与您沟通您的项目",
      email: "电子邮箱",
      phone: "联系电话",
      wechat: "微信咨询",
      location: "工作室：丹麦 / 意大利 / 中国",
      linkedin: "https://www.linkedin.com/in/%E5%BF%B1-%E6%B2%88-117797a3/",
      formName: "您的称呼",
      formEmail: "联系方式 (电话/微信)",
      formMessage: "咨询内容",
      formSubmit: "发送留言",
    },
  },
  en: {
    nav: { home: "Home", services: "Services", portfolio: "Portfolio", about: "About", contact: "Contact", switchLanguage: "Switch Language" },
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
        { title: "Commercial Space Design", description: "Restaurants, bars, retail shops, and offices.", icon: "Commercial" },
        { title: "Residential & Villa Design", description: "Specialized in villas and apartments.", icon: "Home" },
        { title: "Furniture Product Design", description: "Original furniture development and custom bespoke pieces.", icon: "Furniture" },
        { title: "Brand Visual Design (VI)", description: "Complete visual identity solutions including Logos and signage.", icon: "Branding" },
        { title: "Styling & Soft Furnishing", description: "Flexible styling solutions based on your budget.", icon: "Cabinet" },
        { title: "Design Supervision & Build", description: "We are designers who understand construction.", icon: "Construction" },
      ],
    },
    portfolio: { title: "Selected Work", subtitle: "Balancing aesthetics with practicality", viewProject: "View Project", backToHome: "Back to Home" },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your project",
      email: "Email",
      phone: "Phone",
      wechat: "WeChat",
      location: "Studio: Denmark / Italy / China",
      formName: "Name",
      formEmail: "Contact",
      formMessage: "Message",
      formSubmit: "Send Message",
    },
  },
  it: {
    nav: { home: "Home", services: "Servizi", portfolio: "Portfolio", about: "Chi Siamo", contact: "Contatti", switchLanguage: "Cambia Lingua" },
    hero: {
      title: "Architetti d'Interni per il Vostro Spazio Ideale",
      subtitle: "Dal progetto tecnico alla realizzazione finale. <span class=\"text-accent-red font-medium text-xl\">CJ Studio</span> serve clienti in Europa e Cina.",
      cta: "Preventivo Gratuito",
      experience: "14 Anni · Design & Costruzione",
      location: "Danimarca / Svezia / Italia / Cina",
    },
    about: {
      title: "Chi è CJ Studio",
      description1: "Studio CJ rappresenta la convergenza tra visione artisticia e ingegneria razionale.",
      description2: "Market Principal Chen Xu, con sede in Danimarca, è un distinto artista.",
      stats: { years: "14+", yearsLabel: "Anni Esp.", projects: "50+", projectsLabel: "Progetti" }
    },
    services: {
      title: "I Nostri Servizi",
      subtitle: "Approccio guidato dal design.",
      items: [
        { title: "Design Spazi Commerciali", description: "Ristoranti, bar, negozi e uffici.", icon: "Commercial" },
        { title: "Design Residenziale", description: "Ville e appartamenti.", icon: "Home" },
        { title: "Design Prodotto", description: "Sviluppo mobili originali.", icon: "Furniture" },
        { title: "Brand Visual Design", description: "Identità visiva completa.", icon: "Branding" },
        { title: "Styling", description: "Soluzioni flessibili.", icon: "Cabinet" },
        { title: "Supervisione", description: "Controllo qualità in cantiere.", icon: "Construction" },
      ],
    },
    portfolio: { title: "Portfolio", subtitle: "Estetica e praticità", viewProject: "Vedi Progetto", backToHome: "Torna alla Home" },
    contact: { title: "Contattaci", subtitle: "Parliamo del tuo project", email: "Email", phone: "Telefono", wechat: "WeChat", location: "Danimarca / Italia / Cina", formName: "Nome", formEmail: "Contatto", formMessage: "Messaggio", formSubmit: "Invia" },
  },
  da: {
    nav: { home: "Hjem", services: "Ydelser", portfolio: "Portfolio", about: "Om os", contact: "Kontakt", switchLanguage: "Skift Sprog" },
    hero: {
      title: "Eksperter i Indretning",
      subtitle: "Fra tegnestue til virkelighed. <span class=\"span-accent-red font-medium text-xl\">CJ Studio</span> betjener kunder i Europa og Kina.",
      cta: "Få et til tilbud",
      experience: "14 års erfaring",
      location: "Danmark / Sverige / Italien / Kina",
    },
    about: {
      title: "Om CJ Studio",
      description1: "CJ Studio forener kunstnerisk vision med ingeniørkunst.",
      description2: "Markedsansvarlig Chen Xu er en anerkendt kunstner baseret i Danmark.",
      stats: { years: "14+", yearsLabel: "Års Erfaring", projects: "50+", projectsLabel: "Projekter" }
    },
    services: {
      title: "Vores Ydelser",
      subtitle: "Designorienteret tilgang.",
      items: [
        { title: "Erhvervsindretning", description: "Restauranter, butikker og kontorer.", icon: "Commercial" },
        { title: "Boligindretning", description: "Luksusvillaer og lejligheder.", icon: "Home" },
        { title: "Møbeldesign", description: "Originale og specialfremstillede møbler.", icon: "Furniture" },
        { title: "Visuel Identitet", description: "Logo og skiltning.", icon: "Branding" },
        { title: "Styling", description: "Fleksible indretningslouner.", icon: "Cabinet" },
        { title: "Projektledelse", description: "Tilsyn og kvalitetskontrol.", icon: "Construction" },
      ],
    },
    portfolio: { title: "Portfolio", subtitle: "Balance mellem æstetik og funktionalitet", viewProject: "Se Projekt", backToHome: "Tilbage" },
    contact: { title: "Kontakt os", subtitle: "Lad os drøfte dit projekt", email: "E-mail", phone: "Telefon", wechat: "WeChat", location: "Danmark / Italien / Kina", formName: "Navn", formEmail: "Kontakt", formMessage: "Besked", formSubmit: "Send" },
  },
};

// =================================================================
// 🟢 案例列表 (PORTFOLIO_ITEMS)
// =================================================================
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 27,
    title: "The B Place Cola Guesthouse, Rome",
    title_zh: "罗马梵蒂冈民宿The B Place Cola",
    category: "Commercial",
    description_zh: "项目坐落于罗马梵蒂冈核心区域，是一个融合了时尚艺术与极致居住体验的精品民宿空间。设计核心在于针对不同房间赋予独特的灵魂：从波普艺术大师 Andy Warhol 的色彩碰撞，到 GUCCI、Tiffany、Hermès 及 Chanel 等奢侈品牌的经典元素重构。公共区域则强调了舒适的社交属性与意式优雅的走廊动线，为全球旅客提供了一场跨越设计与时尚的下榻之旅。",
    location: "Rome, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/Gh7yBwmn/Andy_Warhol_Room_25.png",
    gallery: [
      "https://i.postimg.cc/Gh7yBwmn/Andy_Warhol_Room_25.png", "https://i.postimg.cc/Qx4TBGdD/Andy_Warhol_Room_26.png", "https://i.postimg.cc/rFnrdXwk/Andy_Warhol_Room_27.png", 
      "https://i.postimg.cc/c49nKyLq/Andy_Warhol_Room_28.png", "https://i.postimg.cc/RVsH35Zh/Andy_Warhol_Room_29.png", "https://i.postimg.cc/sD6hBdgB/Andy_Warhol_Room_30.png", 
      "https://i.postimg.cc/4xYhVLYc/GUCCI_Room_18.png", "https://i.postimg.cc/fRV0m2V0/GUCCI_Room_19.png", "https://i.postimg.cc/bwZ2kCZH/GUCCI_Room_20.png", 
      "https://i.postimg.cc/T3B59Vbr/GUCCI_Room_21.png", "https://i.postimg.cc/Vk20RqtX/Tiffany_Room_7.png", "https://i.postimg.cc/52DQ3Bzg/Tiffany_Room_8.png", 
      "https://i.postimg.cc/QdvKbQ7S/Tiffany_Room_9.png", "https://i.postimg.cc/TPmLHKqg/公共休息区_1.png", "https://i.postimg.cc/3wp4bkC2/公共休息区_2.png", 
      "https://i.postimg.cc/JnLDwRPj/公共休息区_4.png", "https://i.postimg.cc/s2SQ0M9d/公共区域_24.png", "https://i.postimg.cc/y823Pm9C/爱马仕Room_14.png", 
      "https://i.postimg.cc/mgK1wYMf/爱马仕Room_15.png", "https://i.postimg.cc/SxHYr680/爱马仕Room_16.png", "https://i.postimg.cc/FHwkZyc9/爱马仕Room_17.png", 
      "https://i.postimg.cc/PxQLT07j/走廊_22.png", "https://i.postimg.cc/PJfCx2GH/走廊_23.png", "https://i.postimg.cc/1trgsbjL/走廊_3.png", 
      "https://i.postimg.cc/prVmTqNH/走廊_5.png", "https://i.postimg.cc/qqBNRjf4/走廊_6.png", "https://i.postimg.cc/9MhR3cJd/香奈尔Room_10.png", 
      "https://i.postimg.cc/RFB6rvXD/香奈尔Room_11.png", "https://i.postimg.cc/bJhDXq3V/香奈尔Room_12.png", "https://i.postimg.cc/zBFL84c0/香奈尔Room_13.png"
    ]
  },
  {
    id: 24,
    title: "Vienna YYDS Constellation Art Restaurant",
    title_zh: "维也纳 YYDS 星座艺术餐厅改造",
    category: "Commercial",
    description_zh: "设计灵感源于星空与现代艺术。项目包含极具仪式感的主入口、灵动的星座就餐区、以及充满氛围感的艺术沙龙和吧台区。通过对光影的重塑，为维也纳打造了一个独具魅力的感官餐厅空间。",
    location: "Vienna, Austria",
    year: "2023",
    imageUrl: "https://i.postimg.cc/kgNP19R5/艺术沙龙_11.jpg",
    gallery: [
      "https://i.postimg.cc/kgNP19R5/艺术沙龙_11.jpg", "https://i.postimg.cc/hGSWNwVT/主入口_1.jpg", "https://i.postimg.cc/wB68nPDJ/主入口_2.jpg", 
      "https://i.postimg.cc/qvcHb0hS/休息台阶_3.jpg", "https://i.postimg.cc/dVcKjD14/卡座区_5.jpg", "https://i.postimg.cc/rw2LNzmY/吧区_4.jpg", 
      "https://i.postimg.cc/6pxNfT3M/星座就餐区_6.jpg", "https://i.postimg.cc/T3vXJhw7/星座就餐区_7.jpg", "https://i.postimg.cc/y8hCQBgp/星座就餐区_8.jpg", 
      "https://i.postimg.cc/Nj8vJY9V/星座就餐区_9.jpg", "https://i.postimg.cc/1301CPnb/艺术沙龙_10.jpg", "https://i.postimg.cc/TPRMBSnx/艺术沙龙_12.jpg", 
      "https://i.postimg.cc/XvVSth9j/艺术沙龙_13.jpg", "https://i.postimg.cc/TPRMBSnf/艺术沙龙_14.jpg", "https://i.postimg.cc/hGSWNwVJ/艺术沙龙_15.jpg"
    ]
  },
  {
    id: 22,
    title: "Torino Steakhouse",
    title_zh: "都灵牛排馆",
    category: "Commercial",
    description_zh: "意大利都灵的大型餐饮空间设计。涵盖了完整的外立面改造、一层酒吧台、地下室就餐区以及标志性的楼梯间细节设计。通过冷暖材质的对比与精妙的灯光布置，营造出既高级又舒适的就餐氛围。",
    location: "Torino, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/Y0RVQNXq/地下室就餐区28.jpg",
    gallery: [
      "https://i.postimg.cc/Y0RVQNXq/地下室就餐区28.jpg", "https://i.postimg.cc/CM76PNNf/一层22.jpg", "https://i.postimg.cc/J7xd6qqZ/一层23.jpg", 
      "https://i.postimg.cc/Wb4YQkWf/一层29.jpg", "https://i.postimg.cc/y8Mfgr14/一层收银台21.jpg", "https://i.postimg.cc/g2CMXBYS/一层楼梯厅33.jpg", 
      "https://i.postimg.cc/Z5GfBDTX/一层楼梯厅34.jpg", "https://i.postimg.cc/Nf0CWHJn/一层橱窗24.jpg", "https://i.postimg.cc/TYPNZD7Z/一层橱窗25.jpg", 
      "https://i.postimg.cc/xTdpWzxw/一层橱窗26.jpg", "https://i.postimg.cc/x1JxdSSL/一层酒吧台30.jpg", "https://i.postimg.cc/zGsdbPJF/一层酒吧台31.jpg", 
      "https://i.postimg.cc/Dw9CJY2g/一层酒吧台32.jpg", "https://i.postimg.cc/KjfVt79x/地下室小舞台5.jpg", "https://i.postimg.cc/HsSRx2cz/地下室小舞台6.jpg", 
      "https://i.postimg.cc/jS2VQ9Yn/地下室就餐区10.jpg", "https://i.postimg.cc/t4J0tfGx/地下室就餐区12.jpg", "https://i.postimg.cc/6pmkH0BV/地下室就餐区13.jpg", 
      "https://i.postimg.cc/BnVrhgJw/地下室就餐区14.jpg", "https://i.postimg.cc/jjnGB7jH/地下室就餐区17.jpg", "https://i.postimg.cc/TP5ZBDPc/地下室就餐区18.jpg", 
      "https://i.postimg.cc/XvBTtCvR/地下室就餐区19.jpg", "https://i.postimg.cc/zv86L2Fd/地下室就餐区20.jpg", "https://i.postimg.cc/1Xs2g7Kz/地下室就餐区27.jpg", 
      "https://i.postimg.cc/zGcsdjqX/地下室就餐区7.jpg", "https://i.postimg.cc/T34zk9T2/地下室就餐区8.jpg", "https://i.postimg.cc/6qMj8W34/外立面1.jpg", 
      "https://i.postimg.cc/gjgSxzJh/外立面2.jpg", "https://i.postimg.cc/59gk733c/外立面3.jpg", "https://i.postimg.cc/1RBYCHHf/外立面4.jpg", 
      "https://i.postimg.cc/vTY28gQd/屏风细节设计35.jpg", "https://i.postimg.cc/q7K51HmS/楼梯35.jpg", "https://i.postimg.cc/C1H6VHpC/楼梯36.jpg", 
      "https://i.postimg.cc/TwqHXqv4/楼梯37.jpg", "https://i.postimg.cc/1tcYZc12/楼梯38.jpg", "https://i.postimg.cc/cCxk1gdP/楼梯39.jpg", 
      "https://i.postimg.cc/x8fpjJ0N/楼梯40.jpg", "https://i.postimg.cc/0jVWzkQj/楼梯41.jpg", "https://i.postimg.cc/qvzYC322/楼梯9.jpg", 
      "https://i.postimg.cc/QNmn4bbF/细节11.jpg", "https://i.postimg.cc/dVLXTyGt/酒柜细节15.jpg", "https://i.postimg.cc/vZcj6V5c/酒柜细节16.jpg"
    ]
  },
  {
    id: 23,
    title: "Piedmont Bar Sociale Renovation",
    title_zh: "皮埃蒙特 Bar sociale 改造",
    category: "Commercial",
    description_zh: "皮埃蒙特地区的商业空间改造，旨在通过对吧台区及休息区的重新规划，激活社区社交氛围。设计在保留历史建筑肌理的同时，注入了现代简约的社交功能。",
    location: "Piedmont, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/MHswz88x/11.jpg",
    gallery: [
      "https://i.postimg.cc/MHswz88x/11.jpg", "https://i.postimg.cc/FzFmtH8P/1.jpg", "https://i.postimg.cc/nrdxnttb/10.jpg", 
      "https://i.postimg.cc/D0Ch7KKh/12.jpg", "https://i.postimg.cc/1XWSyZZs/13.jpg", "https://i.postimg.cc/G3zdFvT9/14.jpg", 
      "https://i.postimg.cc/KcQxPt31/15.jpg", "https://i.postimg.cc/WzpjR1CS/2.jpg", "https://i.postimg.cc/C5MYyxXm/3.jpg", 
      "https://i.postimg.cc/SRQq0x3g/4.jpg", "https://i.postimg.cc/j28TRrYc/5.jpg", "https://i.postimg.cc/sxnz3RCT/6.jpg", 
      "https://i.postimg.cc/1XWSyZ1W/7.jpg", "https://i.postimg.cc/6qHKBNxb/8.jpg", "https://i.postimg.cc/0jtv9q1B/9.jpg"
    ]
  },
  {
    id: 15,
    title: "Forest Bamboo Restaurant Austria",
    title_zh: "奥地利筑林餐厅设计",
    category: "Commercial",
    description_zh: "以“筑林”为核心概念，通过大量的竹元素与自然的材质打造出如森林般的餐饮体验。项目涵盖了富有禅意的入口、极具视觉冲击力的竹迷宫区、私密的包间以及露天的月光林地就餐区。该项目展现了在异国他乡对东方美学的现代诠释与精准落地。",
    location: "Austria",
    year: "2024",
    imageUrl: "https://i.postimg.cc/htHYLYtf/轴测图77.jpg",
    gallery: [
      "https://i.postimg.cc/htHYLYtf/轴测图77.jpg", "https://i.postimg.cc/X71mJqMr/休息区24.jpg", "https://i.postimg.cc/ZKs2RnkB/休息区27.jpg", 
      "https://i.postimg.cc/Pf40gKSn/入口4.jpg", "https://i.postimg.cc/vB7CHvMM/包间25.jpg", "https://i.postimg.cc/hj8NP0gK/包间26.jpg", 
      "https://i.postimg.cc/RF12VT9m/包间28.jpg", "https://i.postimg.cc/vT3j5H4Z/卡座53.jpg", "https://i.postimg.cc/HnBKbsr8/卡座54.jpg", 
      "https://i.postimg.cc/zv0MTXyg/卡座沙发区31.jpg", "https://i.postimg.cc/tC48pPc1/卫生间66.jpg", "https://i.postimg.cc/Wb1xTryG/卫生间67.jpg", 
      "https://i.postimg.cc/YqCTMgP1/卫生间68.jpg", "https://i.postimg.cc/TwvZ6s8p/备餐台44.jpg", "https://i.postimg.cc/nchNp7WF/外立面73.jpg", 
      "https://i.postimg.cc/gk21mR7J/外立面74.jpg", "https://i.postimg.cc/sfcbkKTr/寿司吧49.jpg", "https://i.postimg.cc/Pf40gKSt/寿司吧50.jpg", 
      "https://i.postimg.cc/445jDwWx/寿司吧51.jpg", "https://i.postimg.cc/28Sgrvt8/寿司吧52.jpg", "https://i.postimg.cc/yxv50YDB/就餐区35.jpg", 
      "https://i.postimg.cc/Y0bVQqvM/就餐区37.jpg", "https://i.postimg.cc/c1mPpTXM/平面图69.jpg", "https://i.postimg.cc/y6P2Mnvr/平面图80.jpg", 
      "https://i.postimg.cc/445jDwBQ/开放就餐区32.jpg", "https://i.postimg.cc/MT0gKYxf/户外1.jpg", "https://i.postimg.cc/yxVtJSYR/户外10.jpg", 
      "https://i.postimg.cc/8c19FrPL/户外11.jpg", "https://i.postimg.cc/d3qp7Tt2/户外12.jpg", "https://i.postimg.cc/nrHgsQcK/户外13.jpg", 
      "https://i.postimg.cc/brzWG2NH/户外14.jpg", "https://i.postimg.cc/qqkStCMw/户外15.jpg", "https://i.postimg.cc/pr249nXk/户外16.jpg", 
      "https://i.postimg.cc/D02HWbyp/户外17.jpg", "https://i.postimg.cc/RhMy3nVs/户外18.jpg", "https://i.postimg.cc/J01vyB4d/户外19.jpg", 
      "https://i.postimg.cc/ZRPXKLZy/户外2.jpg", "https://i.postimg.cc/Y0pZ4mqZ/户外20.jpg", "https://i.postimg.cc/qqkStCvf/户外21.jpg", 
      "https://i.postimg.cc/vT3j5H4F/户外22.jpg", "https://i.postimg.cc/tTd8Czyx/户外3.jpg", "https://i.postimg.cc/85dxPbDR/户外5.jpg", 
      "https://i.postimg.cc/G2P6hjrJ/户外6.jpg", "https://i.postimg.cc/FRbwsxmp/户外7.jpg", "https://i.postimg.cc/FRbwsxmx/户外8.jpg", 
      "https://i.postimg.cc/D02HWbyX/户外9.jpg", "https://i.postimg.cc/X71mJqMF/月光林地47.jpg", "https://i.postimg.cc/qMDSRqfy/月光林地48.jpg", 
      "https://i.postimg.cc/7Ytd6hvn/月光林地55.jpg", "https://i.postimg.cc/5NKT0ycm/月光林地56.jpg", "https://i.postimg.cc/hPZ6jvF2/月光林地57.jpg", 
      "https://i.postimg.cc/J4Yvn0w6/月光林地58.jpg", "https://i.postimg.cc/pXc4TrN1/月光林地59.jpg", "https://i.postimg.cc/TYNFw18s/月光林地60.jpg", 
      "https://i.postimg.cc/wjtPszHb/月光林地61.jpg", "https://i.postimg.cc/7ZCcT4Dd/月光林地62.jpg", "https://i.postimg.cc/8zF3rGNQ/月光林地63.jpg", 
      "https://i.postimg.cc/DwWDbhnK/月光林地64.jpg", "https://i.postimg.cc/P5Lc8HTT/月光林地65.jpg", "https://i.postimg.cc/6pDPrPpZ/竹迷宫区36.jpg", 
      "https://i.postimg.cc/W1QyGy1M/竹迷宫区38.jpg", "https://i.postimg.cc/sgtLYLgJ/竹迷宫区39.jpg", "https://i.postimg.cc/dVzf2fVn/竹迷宫区40.jpg", 
      "https://i.postimg.cc/bwK5x5wg/竹迷宫区41.jpg", "https://i.postimg.cc/qv9FsFvj/竹迷宫区42.jpg", "https://i.postimg.cc/d0rx49h8/竹迷宫区43.jpg", 
      "https://i.postimg.cc/ZqpMVLWQ/竹迷宫区45.jpg", "https://i.postimg.cc/d0rx49hg/竹迷宫区46.jpg", "https://i.postimg.cc/PqYR2MLs/自助取餐区33.jpg", 
      "https://i.postimg.cc/ZqpMVL9S/自助取餐区34.jpg", "https://i.postimg.cc/qRcWMG0g/船卡座29.jpg", "https://i.postimg.cc/tTd8CzyZ/船卡座30.jpg", 
      "https://i.postimg.cc/9Q4Sq2Cm/轴测图70.jpg", "https://i.postimg.cc/0yL4Y4yP/轴测图71.jpg", "https://i.postimg.cc/htHYLYtD/轴测图72.jpg", 
      "https://i.postimg.cc/13LdGd3z/轴测图75.jpg", "https://i.postimg.cc/RZjY7YZF/轴测图76.jpg", "https://i.postimg.cc/2SPtQtSy/轴测图78.jpg", 
      "https://i.postimg.cc/2SPtQtSL/轴测图79.jpg", "https://i.postimg.cc/7hmcSY5r/酒吧台23.jpg"
    ]
  },
  {
    id: 28,
    title: "Venice Sushi Restaurant",
    title_zh: "威尼斯寿司餐厅设计",
    category: "Commercial",
    description_zh: "位于威尼斯核心地带的现代寿司餐厅设计。项目巧妙地将威尼斯水城特有的材质纹理与日本传统美食的极简精神相结合。通过定制化的半透光隔断、深色木质台面以及灵动的局部光影，营造出一种既具有意式建筑厚重感，又不失东方雅致的餐饮空间体验。",
    location: "Venice, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/x1DjVbkV/场景_2.png",
    gallery: [
      "https://i.postimg.cc/x1DjVbkV/场景_2.png", "https://i.postimg.cc/VkqffLM5/场景_1.png", "https://i.postimg.cc/DybfNcwd/场景_3.png", 
      "https://i.postimg.cc/65G6Phpv/场景_4.png", "https://i.postimg.cc/NMMBk6nR/场景_5.png", "https://i.postimg.cc/G90RRZmk/场景_6.png", 
      "https://i.postimg.cc/4nCGGrxY/场景_7.png", "https://i.postimg.cc/bY4SdrGW/场景_8.png", "https://i.postimg.cc/JzLycF5X/场景_9.png", 
      "https://i.postimg.cc/9f9n5rqJ/场景_11.png", "https://i.postimg.cc/FKSB57Jy/场景_12.png", "https://i.postimg.cc/Z52MMr04/场景_13.png", 
      "https://i.postimg.cc/q7K5VzCL/场景_14.png"
    ]
  },
  {
    id: 25,
    title: "Sushi Ten Outdoor Area Renovation",
    title_zh: "Sushi Ten 户外区域改造",
    category: "Commercial",
    description_zh: "位于意大利的 Sushi Ten 餐厅户外改造项目。通过极简的设计手法和精选的户外材质，打造出宁静而富有和式美学的用餐环境。设计强调了光影在木质格栅间的流动，以及东方禅意元素与现代建筑结构的和谐共生。",
    location: "Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/mhxwzP4c/9.jpg",
    gallery: [
      "https://i.postimg.cc/mhxwzP4c/9.jpg", "https://i.postimg.cc/zfp0tDCM/1.jpg", "https://i.postimg.cc/8s8HJ7G6/10.jpg", 
      "https://i.postimg.cc/bdXTDZPn/11.jpg", "https://i.postimg.cc/5tpn79BR/2.jpg", "https://i.postimg.cc/mrV8XZY0/3.jpg", 
      "https://i.postimg.cc/JhKP673V/4.jpg", "https://i.postimg.cc/0QBZvtHC/5.jpg", "https://i.postimg.cc/hvQst9kg/6.jpg", 
      "https://i.postimg.cc/rsRjwSBX/7.jpg", "https://i.postimg.cc/nM8kjXxz/8.jpg"
    ]
  },
  {
    id: 32,
    title: "Udine Steakhouse",
    title_zh: "乌迪内牛排馆全案设计",
    category: "Commercial",
    description_zh: "位于乌迪内 (Udine) 的牛排馆全案设计。空间融合了工业风与现代奢华感，通过裸露的建筑结构、精选的皮革座椅以及温润的木质色调，营造出一种硬朗而不失优雅的用餐环境。设计特别关注了灯光的氛围营造与动线布局，轴测图与平面图展现了空间的高效利用与美学深度。",
    location: "Udine, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/Px3ZSMr9/场景_7.png",
    gallery: [
      "https://i.postimg.cc/Px3ZSMr9/场景_7.png", "https://i.postimg.cc/Hsf0G34m/场景_1.png", "https://i.postimg.cc/wTt5bnJd/场景_2.png", 
      "https://i.postimg.cc/WbQmRSmx/场景_3.png", "https://i.postimg.cc/28PdpTF5/场景_4.png", "https://i.postimg.cc/rmnWf9Fb/场景_5.png", 
      "https://i.postimg.cc/j5gNMhSV/场景_6.png", "https://i.postimg.cc/3RSptZJs/场景_8.png", "https://i.postimg.cc/xTtCMd8t/iso.jpg", 
      "https://i.postimg.cc/jdZ5Pj2v/plan.jpg"
    ]
  },
  {
    id: 16,
    title: "Vienna Villa, Austria",
    title_zh: "奥地利维也纳别墅",
    category: "Residential",
    description_zh: "位于维也纳的豪华私人别墅全案设计。设计理念旨在现代极简与古典优雅之间寻求平衡。空间布局经过精密规划，包括挑高的客厅、全明厨卫、充满艺术感的旋转楼梯以及专属的办公书房。每一处材质选择与灯光布置都服务于高端居住的舒适性与艺术性。",
    location: "Vienna, Austria",
    year: "2024",
    imageUrl: "https://i.postimg.cc/Cx1ngFk5/客厅1.jpg",
    gallery: [
      "https://i.postimg.cc/Cx1ngFk5/客厅1.jpg", "https://i.postimg.cc/bwBDYKRj/一层洗手间11.jpg", "https://i.postimg.cc/vZNg8pvs/一层洗手间12.jpg", 
      "https://i.postimg.cc/DwZ4T2Ld/三层办公书房36.jpg", "https://i.postimg.cc/SxsYhyCV/三层办公书房37.jpg", "https://i.postimg.cc/Z5RvSTpw/三层办公书房38.jpg", 
      "https://i.postimg.cc/K8z32ZBp/三层办公书房39.jpg", "https://i.postimg.cc/BnVLZdBz/三层卫生间40.jpg", "https://i.postimg.cc/7ZWGPpnd/三层卫生间41.jpg", 
      "https://i.postimg.cc/t4MZRLzQ/三层卫生间42.jpg", "https://i.postimg.cc/13jnRLK1/三层卫生间43.jpg", "https://i.postimg.cc/jSFwqG4c/三层女儿房32.jpg", 
      "https://i.postimg.cc/sgNQft4T/三层女儿房33.jpg", "https://i.postimg.cc/VkVrs3W7/三层女儿房34.jpg", "https://i.postimg.cc/4xS74rQL/三层女儿房35.jpg", 
      "https://i.postimg.cc/Gm583ZxF/三层楼梯30.jpg", "https://i.postimg.cc/FHBdF2Vb/三层楼梯31.jpg", "https://i.postimg.cc/jjnWDZMp/主卧卫生间28.jpg", 
      "https://i.postimg.cc/fbS3VBHn/主卧卫生间29.jpg", "https://i.postimg.cc/Z5MBY1LZ/主卧室22.jpg", "https://i.postimg.cc/mg5zZ0SZ/主卧室23.jpg", 
      "https://i.postimg.cc/vmx143PR/主卧室24.jpg", "https://i.postimg.cc/k5RV2fjd/主卧衣帽间25.jpg", "https://i.postimg.cc/8CfF7tyD/主卧衣帽间26.jpg", 
      "https://i.postimg.cc/GpTB4qMd/主卧衣帽间27.jpg", "https://i.postimg.cc/65z4g728/二层卫生间19.jpg", "https://i.postimg.cc/Dy54HWJb/二层卫生间20.jpg", 
      "https://i.postimg.cc/Z5RvSTp5/二层卫生间21.jpg", "https://i.postimg.cc/htjQBSTP/二层走廊13.jpg", "https://i.postimg.cc/28TLMqbS/儿童书房10.jpg", 
      "https://i.postimg.cc/4NwHqK74/儿童书房9.jpg", "https://i.postimg.cc/Yq8LZ4GK/儿童房14.jpg", "https://i.postimg.cc/5NpQTHYW/儿童房15.jpg", 
      "https://i.postimg.cc/02ZKF6MP/儿童房16.jpg", "https://i.postimg.cc/02ZKF6M8/儿童房17.jpg", "https://i.postimg.cc/VL40pSrf/儿童房18.jpg", 
      "https://i.postimg.cc/SxsYhyCz/入口玄关6.jpg", "https://i.postimg.cc/SxsYhyC9/入口玄关7.jpg", "https://i.postimg.cc/RZFJBMKc/入口玄关8.jpg", 
      "https://i.postimg.cc/WbSqCDFV/厨房2.jpg", "https://i.postimg.cc/rwmRk8xz/楼梯44.jpg", "https://i.postimg.cc/RZFJBMK6/楼梯走廊4.jpg", 
      "https://i.postimg.cc/cLHtSswt/楼梯走廊5.jpg", "https://i.postimg.cc/sDKGqBQR/餐厅3.jpg", "https://i.postimg.cc/ZYXJR4Gv/1F平面图.jpg", 
      "https://i.postimg.cc/jqBR5tp7/2F平面图.jpg", "https://i.postimg.cc/44jXdsDh/3F平面图.jpg"
    ]
  },
  {
    id: 2,
    title: "Numidio Apartment in Rome",
    title_zh: "罗马 numidio 公寓",
    category: "Residential",
    description_zh: "位于罗马 Numidio Quadraro 区域的高端公寓设计项目。通过细腻的材质运用与光影处理，打造极具现代感的私密空间。",
    location: "Rome, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/T3Mt4Dnr/主卧_1.jpg",
    gallery: [
      "https://i.postimg.cc/T3Mt4Dnr/主卧_1.jpg", "https://i.postimg.cc/VkQKVCXW/主卧_2.jpg", "https://i.postimg.cc/GmFXwmjT/主卧_3.jpg", 
      "https://i.postimg.cc/RZ7g5ZTf/主卧_4.jpg", "https://i.postimg.cc/Z58wt5Lc/主卧_5.jpg", "https://i.postimg.cc/BnTm9nCC/主卧_6.jpg", 
      "https://i.postimg.cc/02JtnfKN/卫生间_1.jpg", "https://i.postimg.cc/QdGfyTcZ/卫生间_2.jpg", "https://i.postimg.cc/52dsRC8J/卫生间_3.jpg", 
      "https://i.postimg.cc/hvN2gJw9/厨房_1.jpg", "https://i.postimg.cc/tJ8By1fz/厨房_2.jpg", "https://i.postimg.cc/Vv2K1STR/厨房_3.jpg", 
      "https://i.postimg.cc/NFZdYyV6/厨房_4.jpg", "https://i.postimg.cc/bY5C1MJ1/客厅_1.jpg", "https://i.postimg.cc/1RdCDTtr/客厅_2.jpg", 
      "https://i.postimg.cc/dQfHGX16/客厅_3.jpg", "https://i.postimg.cc/sfL658Xw/客厅_4.jpg", "https://i.postimg.cc/nVWRq5z5/客厅_5.jpg", 
      "https://i.postimg.cc/J4BTxqH4/客厅_6.jpg", "https://i.postimg.cc/vTC0M1jp/次卧_1.jpg", "https://i.postimg.cc/mkKmRcJf/次卧_2.jpg", 
      "https://i.postimg.cc/6qFMw7gx/次卧_3.jpg", "https://i.postimg.cc/Rh2g93yB/次卧_4.jpg"
    ]
  },
  {
    id: 31,
    title: "Tuscany Villa",
    title_zh: "托斯卡纳别墅",
    category: "Residential",
    description_zh: "位于意大利托斯卡纳地区的豪华别墅全案设计。设计完美融合了托斯卡纳传统的田园韵味与现代奢华的居住标准。通过对自然材质的极致运用——如手工石材、原木横梁与大地色系的微水泥，打造出一个具有呼吸感的奢适空间。大面积的落地窗将托斯卡纳起伏的丘陵美景引入室内，模糊了生活空间与大自然的边界，实现了当代人梦寐其求的归家仪式感。",
    location: "Tuscany, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/KYhT0C0f/base_1.png",
    gallery: [
      "https://i.postimg.cc/KYhT0C0f/base_1.png", "https://i.postimg.cc/W4mNTyTQ/GF场景_9.png", "https://i.postimg.cc/xdGfnZnp/GF场景_10.png", 
      "https://i.postimg.cc/GpPLdfdV/GF场景_11.png", "https://i.postimg.cc/8CdpNYTV/GF场景_12.png", "https://i.postimg.cc/90kVL5YR/GF场景_14.png", 
      "https://i.postimg.cc/prSxsbJG/GF场景_16.png", "https://i.postimg.cc/Dfp2vL3k/GF场景_18.png", "https://i.postimg.cc/0j4xVR0c/GF场景_19.png", 
      "https://i.postimg.cc/9FvCT2Mj/GF场景_20.png", "https://i.postimg.cc/fbss2vmX/场景_1.png", "https://i.postimg.cc/wBkpSsk6/场景_2.png", 
      "https://i.postimg.cc/ZqLS1yLY/场景_4.png", "https://i.postimg.cc/635Xw5Hb/场景_5.png", "https://i.postimg.cc/pTGtdb42/场景_8.png", 
      "https://i.postimg.cc/Wbt0zGFv/base_2.png", "https://i.postimg.cc/VLTnCJnQ/base_3.png", "https://i.postimg.cc/wT3DMXy6/base_4.png", 
      "https://i.postimg.cc/Y00L47SR/base_5.png", "https://i.postimg.cc/tJcZWc1f/base_6.png", "https://i.postimg.cc/3Nq4mqyV/base_7.png", 
      "https://i.postimg.cc/v826J4Ph/base_8.png", "https://i.postimg.cc/W3Whcy74/base_9.png", "https://i.postimg.cc/1X84mKWn/base_10.png", 
      "https://i.postimg.cc/d1HLcf9h/base_11.png", "https://i.postimg.cc/mkPhLSdX/base_12.png", "https://i.postimg.cc/vZFDyf5Z/base_13.png", 
      "https://i.postimg.cc/L8KhSLjY/base_14.png", "https://i.postimg.cc/QNzH6Rt1/base_15.png", "https://i.postimg.cc/2jtVHP6g/base_16.png"
    ]
  },
  {
    id: 29,
    title: "Torino Villa",
    title_zh: "都灵别墅",
    category: "Residential",
    description_zh: "都灵全案别墅设计，占地面积广阔。设计上延续了 CJ Studio 一贯的现代简约美学，通过大面积的落地窗引入自然光线，模糊室内外的界限。空间布局上采用了开放式设计，强调动线的流畅与功能的复合。材质选择上以石材、木质与微水泥为主，冷暖交织，营造出一种低调而奢华的静谧感。",
    location: "Torino, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/jdMVRbVV/GF场景_2.png",
    gallery: [
      "https://i.postimg.cc/jdMVRbVV/GF场景_2.png", "https://i.postimg.cc/rFf6qLB7/GF场景_1.png", "https://i.postimg.cc/gjG5PMNL/GF场景_10.png", 
      "https://i.postimg.cc/3N36HLnh/GF场景_11.png", "https://i.postimg.cc/5yfGMPn1/GF场景_12.png", "https://i.postimg.cc/x897Sst1/GF场景_13.png", 
      "https://i.postimg.cc/MZYNYSpn/GF场景_14.png", "https://i.postimg.cc/Prrc3RCz/GF场景_15_1.png", "https://i.postimg.cc/qBGSGTvh/GF场景_16.png", 
      "https://i.postimg.cc/66hghXpd/GF场景_17.png", "https://i.postimg.cc/fTTF2r3n/GF场景_18.png", "https://i.postimg.cc/3JJ6ScyT/GF场景_19.png", 
      "https://i.postimg.cc/jdg1G4NT/GF场景_20.png", "https://i.postimg.cc/FsW62VcF/GF场景_21.png", "https://i.postimg.cc/TY7sZJm5/GF场景_22.png", 
      "https://i.postimg.cc/FsW62VcL/GF场景_23.png", "https://i.postimg.cc/Gm4frTJ4/GF场景_24.png", "https://i.postimg.cc/y8DGB3Xn/GF场景_25.png", 
      "https://i.postimg.cc/HkrNH846/GF场景_26.png", "https://i.postimg.cc/15vxyQx4/GF场景_3.png", "https://i.postimg.cc/wTwK9pKB/GF场景_4.png", 
      "https://i.postimg.cc/qRsYSfc1/GF场景_5.png", "https://i.postimg.cc/HxDR6WMt/GF场景_6.png", "https://i.postimg.cc/xCv7hrGR/GF场景_7.png", 
      "https://i.postimg.cc/HxwKRG0t/GF场景_8.png", "https://i.postimg.cc/vBrjkRLY/GF场景_9.png"
    ]
  },
  {
    id: 36,
    title: "Rome Nettuno Duplex Apartment",
    title_zh: "罗马 Nettuno 复式公寓",
    category: "Residential",
    description_zh: "位于罗马 Nettuno 的大型复式公寓全案设计。空间横跨地下一层（B1）、地面层（1F）及二层（2F）。地下一层专注于私密的休憩空间，包含主卧套房、衣帽间及客房；地面层作为核心社交区域，通过现代壁炉背景墙、开放式厨房与餐厅，以及带有跑步机和洗涤功能的露台，实现了生活功能的高度集成；二层则设计为充满趣味的儿童房与儿子房。整体设计风格现代简约，通过利落的线条与精致的材质对比，打造出极具品质感的都市生活空间。",
    location: "Rome, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/SNDKZWB1/一层客厅电视背景墙.png",
    gallery: [
      "https://i.postimg.cc/SNDKZWB1/一层客厅电视背景墙.png", "https://i.postimg.cc/T3NpPrQb/B1层主卧.jpg", "https://i.postimg.cc/0yXbNpZD/B1层主卧_2.jpg", 
      "https://i.postimg.cc/dVNL08n8/B1层主卧_3.jpg", "https://i.postimg.cc/q7tg6zZh/B1层主卧床头背景.jpg", "https://i.postimg.cc/tg17nYm6/B1层主卧衣帽间_1.jpg", 
      "https://i.postimg.cc/43KnHmFV/B1层主卧衣帽间_2.jpg", "https://i.postimg.cc/6Q7T4y1r/B1层主卧衣帽间_3.jpg", "https://i.postimg.cc/pd9y5p1F/B1层主卧衣柜_写字台梳妆台.jpg", 
      "https://i.postimg.cc/XvXBK2Xs/B1层卫生间_1.png", "https://i.postimg.cc/FK1kbP1W/B1层卫生间_2.png", "https://i.postimg.cc/R086gcHx/B1层卫生间_3.png", 
      "https://i.postimg.cc/nL5j3vQN/B1层卫生间_4.png", "https://i.postimg.cc/W1Yh4MSN/B1层卫生间_5.png", "https://i.postimg.cc/7ZtfLgXY/B1层卫生间_6.png", 
      "https://i.postimg.cc/W1Yh4MSG/B1层卫生间_7.png", "https://i.postimg.cc/YCDhS18Q/B1层卫生间_8.png", "https://i.postimg.cc/yYz9qXpw/B1层客房.jpg", 
      "https://i.postimg.cc/HsC5G4vF/B1层客房_2.jpg", "https://i.postimg.cc/zfL3HVPw/B1层走廊.jpg", "https://i.postimg.cc/8CFsfjnb/B1层走廊与楼梯之间玻璃门.jpg", 
      "https://i.postimg.cc/CKZdnz6H/B1层走廊通往卫生间.jpg", "https://i.postimg.cc/Fs9RgPB9/一层厨房.png", "https://i.postimg.cc/159tcWjR/一层厨房_2.png", 
      "https://i.postimg.cc/QxXtk6yM/一层厨房_3.png", "https://i.postimg.cc/BQMvhxrH/一层客厅.png", "https://i.postimg.cc/8PtCyh2y/一层客厅_2.png", "https://i.postimg.cc/J4PhTbf5/一层客厅壁炉背景墙.png", 
      "https://i.postimg.cc/wjrjz9Ty/一层客厅楼梯.png", "https://i.postimg.cc/SsFQXV94/一层楼梯_入口.png", 
      "https://i.postimg.cc/gJFcw4hL/一层楼梯下方储藏室.png", "https://i.postimg.cc/4dk4Kwc9/一层楼梯通往二层.png", "https://i.postimg.cc/x8905Cgg/一层露台_洗衣机柜_折叠门.png", 
      "https://i.postimg.cc/3RX82pjJ/一层露台带跑步机.png", "https://i.postimg.cc/6qB9c3Y6/一层露台洗衣机柜.png", "https://i.postimg.cc/x8PdVHc8/一层餐厅.png", 
      "https://i.postimg.cc/HntL15Vj/一层餐厅_2.png", "https://i.postimg.cc/c17C3qTD/一层餐厅备餐柜.png", "https://i.postimg.cc/4NJdb8Ss/一层餐厅备餐柜_2.png", 
      "https://i.postimg.cc/KYdjPx6x/二层儿子房间.jpg", "https://i.postimg.cc/yNwxmsMY/二层儿子房间_2.jpg", "https://i.postimg.cc/ydcdn2K0/二层儿子房间卫生间.png", 
      "https://i.postimg.cc/0QDQZhvd/二层儿子房间卫生间_2.png", "https://i.postimg.cc/rmxmg7T9/二层儿子房间卫生间_3.png", "https://i.postimg.cc/1zLXGskX/二层儿子房间开放衣柜.jpg", 
      "https://i.postimg.cc/9fv0dC6H/二层儿童房_1.png", "https://i.postimg.cc/k5kGQq09/二层儿童房_2.png", "https://i.postimg.cc/tgLJ3pKq/二层儿童房_3.png", 
      "https://i.postimg.cc/ydcdn2Kk/二层小客厅.jpg", "https://i.postimg.cc/nrxLWTVR/二层小客厅_2.png", "https://i.postimg.cc/qqG7Hnzh/二层小客厅_3.png", 
      "https://i.postimg.cc/rpvs1Mv3/地下一层到一层楼梯.png"
    ]
  },
  {
    id: 13,
    title: "Lucio Minimalist Apartment in Rome",
    title_zh: "罗马 Lucio 极简公寓",
    category: "Residential",
    description_zh: "位于罗马的一处极简主义公寓改造。设计核心在于对“空”的塑造与对“实”的利用。通过一整面贯穿玄关与客厅的功能性立面设计，集成了收纳、展示与电视柜功能，消解了零碎的视觉干扰。白色基调与柔和的人造光源相结合，在喧嚣的罗马城中营造出一片纯净、有序的静谧居所。",
    location: "Rome, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/prTRnSsy/平面图12.jpg",
    gallery: [
      "https://i.postimg.cc/prTRnSsy/平面图12.jpg", "https://i.postimg.cc/prTRnSsm/入口玄关1.jpg", "https://i.postimg.cc/vTBb6K0g/入口玄关2.jpg", 
      "https://i.postimg.cc/3NRYDqtJ/客厅11.jpg", "https://i.postimg.cc/vBXGTytY/客厅3.jpg", "https://i.postimg.cc/nzTnrxGV/客厅4.jpg", 
      "https://i.postimg.cc/0QZ9jv02/客厅6.jpg", "https://i.postimg.cc/bJLqrP9Z/客厅7.jpg", "https://i.postimg.cc/Vv6mbhKC/玄关一体柜8.jpg", 
      "https://i.postimg.cc/yxdsSGL9/玄关一体柜9.jpg", "https://i.postimg.cc/90MCqkL9/玄关柜10.jpg", "https://i.postimg.cc/RFGvhmLv/电视柜5.jpg", 
      "https://i.postimg.cc/C51Sf2cF/立面13.jpg", "https://i.postimg.cc/rsmMtHfw/立面14.jpg", "https://i.postimg.cc/kG4qtHT4/立面15.jpg", 
      "https://i.postimg.cc/x8CnbZ68/立面16.jpg"
    ]
  },
  {
    id: 14,
    title: "MINI_HOTEL_Livorno酒店",
    title_zh: "托斯卡纳 Livorno Mini Hotel",
    category: "Commercial",
    description_zh: "位于里窝那 (Livorno) 的精品设计酒店。设计方案通过对原有空间的重组，打造了一系列充满叙事性的空间节点：具有视觉冲击力的大厅欢迎区、复古且活泼的酒吧社交空间、以及配备专业音响设备的音乐吧。客房设计则强调了私密性与艺术感的统一，通过色彩与灯光的精准控制，为旅客营造出一种远离尘嚣的意式度假感。",
    location: "Livorno, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/KjNfCqbf/大堂9.jpg",
    gallery: [
      "https://i.postimg.cc/KjNfCqbf/大堂9.jpg", "https://i.postimg.cc/J0qxS68K/大堂10.jpg", "https://i.postimg.cc/0jfnhWvV/大堂11.jpg", 
      "https://i.postimg.cc/gjDs1SpB/大堂12.jpg", "https://i.postimg.cc/Wzn8xWV9/大堂8.jpg", "https://i.postimg.cc/QNkfBt7M/客房_1.jpg", 
      "https://i.postimg.cc/CMHcZ18n/客房_2.jpg", "https://i.postimg.cc/NG7dyMXm/客房_3.jpg", "https://i.postimg.cc/gcqgwJhv/客房_4.jpg", 
      "https://i.postimg.cc/wxcwtvNc/客房_5.jpg", "https://i.postimg.cc/Kcr0KzTP/客房_6.jpg", "https://i.postimg.cc/59qsH0zm/客房_7.jpg", 
      "https://i.postimg.cc/fWj83LdK/客房_8.jpg", "https://i.postimg.cc/3rCtyRGn/客房_9.jpg", "https://i.postimg.cc/DfdxWZGC/客房走廊13.jpg", 
      "https://i.postimg.cc/3rCtyRGS/客房走廊14.jpg", "https://i.postimg.cc/TYdCn6j9/客房走廊15.jpg", "https://i.postimg.cc/NfspRc8d/客房走廊16.jpg", 
      "https://i.postimg.cc/02kc7sGB/客房走廊17.jpg", "https://i.postimg.cc/m2L87s3J/客房走廊18.jpg", "https://i.postimg.cc/tCBD5M2q/走廊_1.jpg", 
      "https://i.postimg.cc/X7sx8zQX/走廊_2.jpg", "https://i.postimg.cc/Nfdb4zpF/走廊_3.jpg", "https://i.postimg.cc/RhRd2smj/酒吧_1.jpg", 
      "https://i.postimg.cc/D0g6Rjh9/酒吧_2.jpg", "https://i.postimg.cc/MHD5gPxk/酒吧_3.jpg", "https://i.postimg.cc/MZb9cTBW/酒吧_4.jpg", 
      "https://i.postimg.cc/gcqgwJhj/酒吧_5.jpg", "https://i.postimg.cc/c1MFKH3H/酒吧_6.jpg", "https://i.postimg.cc/RVSXwBQB/音乐酒吧1.jpg", 
      "https://i.postimg.cc/02VZfBZh/音乐酒吧2.jpg", "https://i.postimg.cc/J4pKq2K9/音乐酒吧3.jpg", "https://i.postimg.cc/8PZwH0w2/音乐酒吧4.jpg", 
      "https://i.postimg.cc/dt5nBx4c/音乐酒吧5.jpg", "https://i.postimg.cc/15vMHjJs/音乐酒吧5b.jpg", "https://i.postimg.cc/Yqd83sbt/音乐酒吧6.jpg", 
      "https://i.postimg.cc/15vMHjJR/音乐酒吧7.jpg"
    ]
  },
  {
    id: 26,
    title: "Tuscany Montecatini Korean BBQ",
    title_zh: "托斯卡纳 montecatini 韩式烤肉馆",
    category: "Commercial",
    description_zh: "位于蒙特卡蒂尼 (Montecatini) 的韩式烤肉馆全案设计。设计巧妙融合了传统的东方美学与托斯卡纳当地的建筑语境。通过深色木质格栅、极简的几何线条以及精心布局的点光源，打造出一个既具有异域风情又符合现代审美的精品餐饮空间。每一处细节都力求展现工艺之美，为食客提供沉浸式的感官体验。",
    location: "Tuscany, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/DwHrpWHm/10.jpg",
    gallery: [
      "https://i.postimg.cc/DwHrpWHm/10.jpg", "https://i.postimg.cc/T3pjcj7M/1.jpg", "https://i.postimg.cc/P59WVL98/11.jpg", 
      "https://i.postimg.cc/Z528s923/12.jpg", "https://i.postimg.cc/T3FVNyFg/13.jpg", "https://i.postimg.cc/mgJYpcJY/14.jpg", 
      "https://i.postimg.cc/JzvNYyvQ/15.jpg", "https://i.postimg.cc/MGByC6JQ/16.jpg", "https://i.postimg.cc/Xv5wRj6F/17.jpg", 
      "https://i.postimg.cc/fbdxGzQY/18.jpg", "https://i.postimg.cc/zfhnszYn/19.jpg", "https://i.postimg.cc/5265m57W/2.jpg", 
      "https://i.postimg.cc/g0hvCzbV/20.jpg", "https://i.postimg.cc/q7K8PJHQ/21.jpg", "https://i.postimg.cc/PqDmgXn2/22.jpg", 
      "https://i.postimg.cc/bvnQ7yfm/23.jpg", "https://i.postimg.cc/pdjDwWM0/24.jpg", "https://i.postimg.cc/d0C8bscX/25.jpg", 
      "https://i.postimg.cc/g2nyKySP/3.jpg", "https://i.postimg.cc/Dw8QcQjT/4.jpg", "https://i.postimg.cc/2SVdxdcS/5.jpg", 
      "https://i.postimg.cc/BnX5C5Yv/6.jpg", "https://i.postimg.cc/zG6C2L6Y/7.jpg", "https://i.postimg.cc/cL2RkK2N/8.jpg", 
      "https://i.postimg.cc/VkpqZSpm/9.jpg"
    ]
  },
  {
    id: 30,
    title: "C&B NAILS SALON",
    title_zh: "C&B 美甲沙龙设计",
    category: "Commercial",
    description_zh: "位于意大利的精品美甲沙龙全案设计。空间以纯净的白色与柔和的粉色调为主旋律，营造出极度舒适且极具女性魅力的理疗环境。设计采用了流畅的曲面元素勾勒出动线，结合极简的家具陈设与考究的氛围灯光，将专业的功能性与高端的审美趣味完美融合，为每一位顾客提供全方位的感官治愈之旅。",
    location: "Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/RZLyYr1z/场景_2.png",
    gallery: [
      "https://i.postimg.cc/RZLyYr1z/场景_2.png", "https://i.postimg.cc/q7BSVmQd/场景_1.png", "https://i.postimg.cc/NGXNVqYD/场景_10.png", 
      "https://i.postimg.cc/zX1dYtXs/场景_11.png", "https://i.postimg.cc/x1ftcXm5/场景_12.png", "https://i.postimg.cc/Hn09LmkC/场景_13.png", 
      "https://i.postimg.cc/057fnY0P/场景_14.png", "https://i.postimg.cc/xjLR5v3Q/场景_15.png", "https://i.postimg.cc/13r2dx0z/场景_3.png", 
      "https://i.postimg.cc/mgyJnxYS/场景_4.png", "https://i.postimg.cc/bYSMhS0T/场景_5.png", "https://i.postimg.cc/MKkLKZt3/场景_6.png", 
      "https://i.postimg.cc/SN0PNQDN/场景_7.png", "https://i.postimg.cc/HsQhJGh4/场景_8.png", "https://i.postimg.cc/y8Ln97hw/场景_9.png"
    ]
  },

  // ================= 放在最后 (Bottom: China Commercial Projects) =================
  {
    id: 20,
    title: "ASCENTIAL Shanghai Office",
    title_zh: "ASCENTIAL上海办公室",
    category: "Commercial",
    description_zh: "为全球信息服务公司打造充满活力且功能齐全的办公环境。该项目为任职于 DLArchitecture 期间参与。",
    location: "Shanghai, China",
    year: "2021",
    imageUrl: "https://i.postimg.cc/qBwPSR8w/portfolio_2025_页面_019ASCENTIAL上海办公室.jpg",
    gallery: ["https://i.postimg.cc/qBwPSR8w/portfolio_2025_页面_019ASCENTIAL上海办公室.jpg", "https://i.postimg.cc/59ghT0w3/portfolio_2025_页面_020ASCENTIAL上海办公室.jpg"]
  },
  {
    id: 33,
    title: "Sushi Nami",
    title_zh: "Sushi Nami 餐厅设计",
    category: "Commercial",
    description_zh: "Sushi Nami 餐厅设计，通过对光影与材质的极致把控，打造出一种深邃且富有张力的现代餐饮空间。设计中融入了立面节点分析图与精细的平面规划，确保了美学表达与商业功能的高度统一。",
    location: "Europe",
    year: "2024",
    imageUrl: "https://i.postimg.cc/tJpdcght/场景_10.jpg",
    gallery: [
      "https://i.postimg.cc/tJpdcght/场景_10.jpg",
      "https://i.postimg.cc/264FTWBL/ELE.jpg",
      "https://i.postimg.cc/0jPG4Npy/PLAN.jpg",
      "https://i.postimg.cc/GtdPfpkt/场景_1.jpg",
      "https://i.postimg.cc/D0nQNzqZ/场景_2.jpg",
      "https://i.postimg.cc/Kjx7WYnK/场景_3.jpg",
      "https://i.postimg.cc/FzNb6Kjk/场景_4.jpg",
      "https://i.postimg.cc/J0M3FhbX/场景_5.jpg",
      "https://i.postimg.cc/QChgzMp1/场景_6.jpg",
      "https://i.postimg.cc/Bb45zvxx/场景_7.jpg",
      "https://i.postimg.cc/L52kWszt/场景_8.jpg",
      "https://i.postimg.cc/rsMGHpSG/场景_9.jpg",
      "https://i.postimg.cc/4ysv03z1/场景_11.jpg"
    ]
  },
  {
    id: 17,
    title: "Standard Chartered Bank Shanghai Office",
    title_zh: "渣打银行上海办公室",
    category: "Commercial",
    description_zh: "渣打银行上海办公室室内设计项目。该项目为任职于 Woods Bagot 期间参与。通过现代办公空间的重新定义，提升企业形象与协作效率。",
    location: "Shanghai, China",
    year: "2023",
    imageUrl: "https://i.postimg.cc/G3TMJmXT/portfolio_2025_页面_004渣打银行上海办公室.jpg",
    gallery: [
      "https://i.postimg.cc/G3TMJmXT/portfolio_2025_页面_004渣打银行上海办公室.jpg",
      "https://i.postimg.cc/9ffb4mDs/portfolio_2025_页面_003渣打银行上海办公室.jpg",
      "https://i.postimg.cc/sgmKDQgJ/portfolio_2025_页面_005渣打银行上海办公室.jpg",
      "https://i.postimg.cc/cH2FypLL/portfolio_2025_页面_006渣打银行上海办公室.jpg",
      "https://i.postimg.cc/28p0HNtq/portfolio_2025_页面_007渣打银行上海办公室.jpg",
      "https://i.postimg.cc/L6zNw0K9/portfolio_2025_页面_008渣打银行上海办公室.jpg",
      "https://i.postimg.cc/JzMPLcMw/portfolio_2025_页面_009渣打银行上海办公室.jpg",
      "https://i.postimg.cc/wBB2tqtK/portfolio_2025_页面_010渣打银行上海办公室.jpg"
    ]
  },
  {
    id: 21,
    title: "MR CHOI Dessert Pudong Airport Store",
    title_zh: "MR CHOI 甜品上海浦东机场店",
    category: "Commercial",
    description_zh: "位于上海浦东国际机场的高客流量交通枢纽精品零售空间。该项目为任职于 DLArchitecture 期间参与。",
    location: "Shanghai, China",
    year: "2020",
    imageUrl: "https://i.postimg.cc/0j7b5SPS/portfolio_2025_页面_025MR_CHOI甜品浦东机场店.jpg",
    gallery: ["https://i.postimg.cc/0j7b5SPS/portfolio_2025_页面_025MR_CHOI甜品浦东机场店.jpg", "https://i.postimg.cc/zvTVDh8W/portfolio_2025_页面_026MR_CHOI甜品浦东机场店.jpg"]
  },
  {
    id: 18,
    title: "Hangzhou Binjiang Intime Shopping Mall",
    title_zh: "杭州滨江银泰购物广场",
    category: "Commercial",
    description_zh: "大型商业综合体设计项目。该项目为任职于 Woods Bagot 期间参与。",
    location: "Hangzhou, China",
    year: "2022",
    imageUrl: "https://i.postimg.cc/sXVn4YHm/portfolio_2025_页面_011杭州滨江银泰购物广场.jpg",
    gallery: ["https://i.postimg.cc/sXVn4YHm/portfolio_2025_页面_011杭州滨江银泰购物广场.jpg", "https://i.postimg.cc/mrWptfYx/portfolio_2025_页面_012杭州滨江银泰购物广场.jpg"]
  },
  {
    id: 19,
    title: "Sunche Oil Shanghai Bund Office",
    title_zh: "鑫驰石油上海外滩办公室",
    category: "Commercial",
    description_zh: "位于外滩的精品办公室设计项目。该项目为任职于 DLArchitecture 期间参与。",
    location: "Shanghai, China",
    year: "2021",
    imageUrl: "https://i.postimg.cc/zDxC9Z3C/portfolio_2025_页面_017鑫驰石油上海外滩办公室.jpg",
    gallery: ["https://i.postimg.cc/zDxC9Z3C/portfolio_2025_页面_017鑫驰石油上海外滩办公室.jpg", "https://i.postimg.cc/Wp5GQLt0/portfolio_2025_页面_018鑫驰石油上海外滩办公室.jpg"]
  },
  {
    id: 34,
    title: "Shanghai Wuyi Road Townhouse",
    title_zh: "上海武夷路排屋",
    category: "Residential",
    description_zh: "上海武夷路老洋房排屋改造项目。在保留历史建筑韵味的同时，注入现代简约的居住功能与审美。该项目为任职于 DLArchitecture 期间参与。通过对室内空间的重组、自然材质的运用以及精细的灯光设计，打造出一处闹中取静的高端海派私密居所。",
    location: "Shanghai, China",
    year: "2023",
    imageUrl: "https://i.postimg.cc/9Qj4rJnL/portfolio_2025_页面_066上海武夷路排屋.jpg",
    gallery: [
      "https://i.postimg.cc/9Qj4rJnL/portfolio_2025_页面_066上海武夷路排屋.jpg",
      "https://i.postimg.cc/8zVFjt0c/portfolio_2025_页面_063上海武夷路排屋.jpg",
      "https://i.postimg.cc/K8yKRJH4/portfolio_2025_页面_064上海武夷路排屋.jpg",
      "https://i.postimg.cc/HsMcYfBb/portfolio_2025_页面_065上海武夷路排屋.jpg",
      "https://i.postimg.cc/zBMSy6Ms/portfolio_2025_页面_117.jpg",
      "https://i.postimg.cc/MT4bnN44/portfolio_2025_页面_118.jpg"
    ]
  },
  {
    id: 35,
    title: "Shaoxing Shangbai Hotel",
    title_zh: "绍兴尚柏酒店",
    category: "Commercial",
    description_zh: "绍兴尚柏酒店全案设计项目。设计旨在平衡 modern 奢华与地域文化特色，为宾客提供极致的商务与休闲居住体验。该项目为任职于 DLArchitecture 期间参与。空间布局涵盖了宏伟的大堂、精致的餐厅以及舒适的客房。项目展现了 CJ Studio 在处理大型商业综合体与高端酒店空间时，对美学与功能的深度把控。",
    location: "Shaoxing, China",
    year: "2023",
    imageUrl: "https://i.postimg.cc/vTzBJsQd/portfolio_2025_页面_040绍兴尚柏酒店.jpg",
    gallery: [
      "https://i.postimg.cc/vTzBJsQd/portfolio_2025_页面_040绍兴尚柏酒店.jpg",
      "https://i.postimg.cc/mkwDvsTq/portfolio_2025_页面_041绍兴尚柏酒店.jpg",
      "https://i.postimg.cc/GtQ2WCb6/portfolio_2025_页面_042绍兴尚柏酒店.jpg",
      "https://i.postimg.cc/j2X5pbRm/portfolio_2025_页面_043绍兴尚柏酒店.jpg"
    ]
  },
  {
    id: 37,
    title: "Zhejiang Ningbo Villa",
    title_zh: "浙江宁波别墅",
    category: "Residential",
    description_zh: "位于浙江宁波的高端私人别墅全案设计。项目通过对空间的艺术化重构，融合了现代奢华与自然意趣。该项目为任职于 DLArchitecture 期间参与。室内设计强调了光影的叙事性，通过大面积的石材与原木搭配，营造出一种静谧且具有厚重感的顶级居住体验。",
    location: "Ningbo, China",
    year: "2023",
    imageUrl: "https://i.postimg.cc/Kj2Xn3SC/portfolio_2025_页面_054浙江宁波别墅.jpg",
    gallery: [
      "https://i.postimg.cc/Kj2Xn3SC/portfolio_2025_页面_054浙江宁波别墅.jpg",
      "https://i.postimg.cc/NFch12qC/portfolio_2025_页面_055浙江宁波别墅.jpg",
      "https://i.postimg.cc/MHSkyfJW/portfolio_2025_页面_056浙江宁波别墅.jpg",
      "https://i.postimg.cc/85WQJB3b/portfolio_2025_页面_057浙江宁波别墅.jpg",
      "https://i.postimg.cc/MZ7Jz51p/portfolio_2025_页面_111.jpg",
      "https://i.postimg.cc/JhfSLHnG/portfolio_2025_页面_112.jpg",
      "https://i.postimg.cc/3J9MvwSh/portfolio_2025_页面_113.jpg",
      "https://i.postimg.cc/yYnqZNf5/portfolio_2025_页面_114.jpg",
      "https://i.postimg.cc/RFwyVC6G/portfolio_2025_页面_115.jpg",
      "https://i.postimg.cc/dVSz5xcH/portfolio_2025_页面_116.jpg"
    ]
  }
];