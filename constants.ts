
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
      subtitle: "从设计图纸到落地交付。CJ Studio 诚嘉设计专注为欧洲及中国的客户提供高品质空间解决方案。我们不只是施工方，更是懂工艺的设计事务所，一切只为设计效果的完美呈现。",
      cta: "获取免费报价",
      experience: "13年设计经验 · 懂施工的设计团队",
      location: "服务地区：丹麦 / 瑞典 / 意大利 / 中国",
    },
    about: {
      title: "关于 CJ Studio (诚嘉设计)",
      description1: "CJ Studio 汇聚了感性的艺术视野与理性的工程思维，由双核团队联合主理。设计主理人 沈忱 (Shen Chen) 拥有13年行业履历，持有意大利 Unina DBE 建筑设计环境硕士学位。他的职业生涯横跨亚、欧、大洋洲：在新西兰从事过2年一线木工与全屋定制安装，积累了极扎实的落地工艺经验；在国内主持过展厅、商业综合体、别墅私宅及餐饮办公等多类型项目。作为“学院派”与“实干派”的结合，沈忱深谙从设计构思到施工落地的每一个细节。依托我们成熟的本地供应商体系，他致力于解决海外装修痛点，真正做到“懂设计、懂工艺、懂落地”，为您提供高品质的一站式交付。",
      description2: "市场主理人 徐晨 (Chen Xu) 常驻丹麦，作为一名活跃于欧洲舞台的男高音歌唱家，他拥有深厚的艺术修养与极高的审美品味。他以敏锐的商业精英视角，精准洞察市场趋势与高端华人客户的生活方式需求，把控每一个项目的格调与品质。",
      stats: {
        years: "13+",
        yearsLabel: "设计经验",
        projects: "50+",
        projectsLabel: "落地案例",
      }
    },
    services: {
      title: "我们的服务",
      subtitle: "以设计效果为导向的全案服务，涵盖空间、产品与品牌视觉，确保从概念到实物的精准还原。",
      items: [
        {
          title: "商业空间全案设计",
          description: "涵盖餐厅、酒吧、零售店铺及办公空间。我们提供专业的动线规划与合规设计，助力商业价值最大化。",
          icon: "Commercial",
        },
        {
          title: "住宅与别墅室内设计",
          description: "专注别墅、大平层及私宅改造。提供从平面规划到全场景3D模拟的完整设计咨询，让家成为艺术与生活的结合。",
          icon: "Home",
        },
        {
          title: "家具产品设计",
          description: "提供原创家具研发与单品定制服务。无论是特殊尺寸的嵌入式柜体，还是具有艺术感的独立家具，我们都能设计并对接生产。",
          icon: "Furniture",
        },
        {
          title: "品牌视觉设计 (VI)",
          description: "为商业客户提供从LOGO、菜单到导视系统的全套视觉识别设计，确保空间风格与品牌形象的高度统一。",
          icon: "Branding",
        },
        {
          title: "软装搭配与改造",
          description: "基于预算提供灵活的软装方案。从宜家(IKEA)选品搭配到高端全屋定制资源对接，提升空间格调。",
          icon: "Cabinet",
        },
        {
          title: "设计落地与工程监理",
          description: "我们不是单纯的施工队，而是懂施工的设计师。提供关键节点巡查与工艺验收，严格把控施工质量，确保设计方案不走样。",
          icon: "Construction",
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
      location: "工作室：丹麦 / 意大利 / 中国",
      linkedin: "https://www.linkedin.com/in/%E5%BF%B1-%E6%B2%88-117797a3/",
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
      title: "Interior Design & Renovation Experts",
      subtitle: "From blueprints to reality. CJ Studio is a design-driven firm serving clients in Europe and China. We go beyond construction—we are designers who master the craft of building, ensuring every detail serves the final aesthetic.",
      cta: "Get a Free Quote",
      experience: "13 Years Exp · Design-Led Build",
      location: "Serving: Denmark / Sweden / Italy / China",
    },
    about: {
      title: "About CJ Studio",
      description1: "CJ Studio represents the convergence of artistic vision and rational engineering. Design Principal Shen Chen brings 13 years of diverse international experience and holds a Master's degree in Architecture Design and Built Environment from Unina DBE, Italy. His expertise bridges theory and practice: he spent 2 years in New Zealand as a hands-on carpenter specializing in custom joinery, and has led a wide range of projects in China, including showrooms, commercial complexes, luxury villas, offices, and restaurants. This unique blend of architectural knowledge and craftsmanship allows him to masterfully control every detail from blueprint to construction. Backed by our mature supplier system, Shen ensures true 'Design-to-Reality' execution.",
      description2: "Market Principal Chen Xu, based in Denmark, is a distinguished Tenor whose deep artistic background informs a refined aesthetic and keen market insight. As a business leader, he understands the lifestyle demands of the high-end Asian community, ensuring every project meets the highest standards of style and class.",
      stats: {
        years: "13+",
        yearsLabel: "Years Exp.",
        projects: "50+",
        projectsLabel: "Projects",
      }
    },
    services: {
      title: "Services",
      subtitle: "A design-driven approach covering space, product, and brand identity, ensuring precision from concept to reality.",
      items: [
        {
          title: "Commercial Space Design",
          description: "Restaurants, bars, retail shops, and offices. We provide professional layout planning and compliance design to maximize commercial value.",
          icon: "Commercial",
        },
        {
          title: "Residential & Villa Design",
          description: "Specialized in villas and apartments. We provide full design consulting from floor plans to 3D simulation, turning houses into artistic homes.",
          icon: "Home",
        },
        {
          title: "Furniture Product Design",
          description: "Original furniture development and custom bespoke pieces. From built-in cabinetry to artistic standalone furniture, we design and manage production.",
          icon: "Furniture",
        },
        {
          title: "Brand Visual Design (VI)",
          description: "Complete visual identity solutions including Logos, menus, and signage systems, ensuring your brand image aligns perfectly with the interior space.",
          icon: "Branding",
        },
        {
          title: "Styling & Soft Furnishing",
          description: "Flexible styling solutions based on your budget, ranging from curated IKEA selections to high-end custom resource procurement.",
          icon: "Cabinet",
        },
        {
          title: "Design Supervision & Build",
          description: "We are not just a construction crew; we are designers who understand construction. We provide site supervision and quality control to ensure the design is executed flawlessly.",
          icon: "Construction",
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
      location: "Studio: Denmark / Italy / China",
      linkedin: "https://www.linkedin.com/in/%E5%BF%B1-%E6%B2%88-117797a3/",
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
  // 1. Villa in Turin (New Replacement)
  {
    id: 11,
    title: "Villa in Turin",
    title_zh: "都灵别墅",
    category: "Residential",
    description: "A luxurious residential renovation project in Turin. The design features a spacious open-plan layout, modern Italian furniture integration, and sophisticated lighting design that enhances the architectural details. From the grand living room to the cozy bedrooms, every space is curated for comfort and style.",
    location: "Turin, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/jdMVRbVV/GF场景_2.png",
    gallery: [
      "https://i.postimg.cc/jdMVRbVV/GF场景_2.png",
      "https://i.postimg.cc/rFf6qLB7/GF场景_1.png",
      "https://i.postimg.cc/gjG5PMNL/GF场景_10.png",
      "https://i.postimg.cc/3N36HLnh/GF场景_11.png",
      "https://i.postimg.cc/5yfGMPn1/GF场景_12.png",
      "https://i.postimg.cc/x897Sst1/GF场景_13.png",
      "https://i.postimg.cc/MZYNYSpn/GF场景_14.png",
      "https://i.postimg.cc/Prrc3RCz/GF场景_15_1.png",
      "https://i.postimg.cc/qBGSGTvh/GF场景_16.png",
      "https://i.postimg.cc/66hghXpd/GF场景_17.png",
      "https://i.postimg.cc/fTTF2r3n/GF场景_18.png",
      "https://i.postimg.cc/3JJ6ScyT/GF场景_19.png",
      "https://i.postimg.cc/jdg1G4NT/GF场景_20.png",
      "https://i.postimg.cc/FsW62VcF/GF场景_21.png",
      "https://i.postimg.cc/TY7sZJm5/GF场景_22.png",
      "https://i.postimg.cc/FsW62VcL/GF场景_23.png",
      "https://i.postimg.cc/Gm4frTJ4/GF场景_24.png",
      "https://i.postimg.cc/y8DGB3Xn/GF场景_25.png",
      "https://i.postimg.cc/HkrNH846/GF场景_26.png",
      "https://i.postimg.cc/15vxyQx4/GF场景_3.png",
      "https://i.postimg.cc/wTwK9pKB/GF场景_4.png",
      "https://i.postimg.cc/qRsYSfc1/GF场景_5.png",
      "https://i.postimg.cc/HxDR6WMt/GF场景_6.png",
      "https://i.postimg.cc/xCv7hrGR/GF场景_7.png",
      "https://i.postimg.cc/HxwKRG0t/GF场景_8.png",
      "https://i.postimg.cc/vBrjkRLY/GF场景_9.png"
    ]
  },
  // 2. Villa in Tuscany (Moved to Front)
  {
    id: 6,
    title: "Villa in Tuscany",
    title_zh: "托斯卡纳别墅",
    category: "Residential",
    description: "A comprehensive villa design in Tuscany, blending classic Italian architectural elements with modern living standards. The project includes detailed floor plans and 3D renderings of both interior and exterior spaces.",
    location: "Tuscany, Italy",
    year: "2024",
    imageUrl: "https://i.postimg.cc/KYhT0C0f/base_1.png",
    gallery: [
      "https://i.postimg.cc/KYhT0C0f/base_1.png",
      "https://i.postimg.cc/xdGfnZnp/GF场景_10.png",
      "https://i.postimg.cc/GpPLdfdV/GF场景_11.png",
      "https://i.postimg.cc/8CdpNYTV/GF场景_12.png",
      "https://i.postimg.cc/90kVL5YR/GF场景_14.png",
      "https://i.postimg.cc/prSxsbJG/GF场景_16.png",
      "https://i.postimg.cc/Dfp2vL3k/GF场景_18.png",
      "https://i.postimg.cc/0j4xVR0c/GF场景_19.png",
      "https://i.postimg.cc/9FvCT2Mj/GF场景_20.png",
      "https://i.postimg.cc/W4mNTyTQ/GF场景_9.png",
      "https://i.postimg.cc/fbss2vmX/场景_1.png",
      "https://i.postimg.cc/wBkpSsk6/场景_2.png",
      "https://i.postimg.cc/ZqLS1yLY/场景_4.png",
      "https://i.postimg.cc/635Xw5Hb/场景_5.png",
      "https://i.postimg.cc/pTGtdb42/场景_8.png",
      "https://i.postimg.cc/1X84mKWn/base_10.png",
      "https://i.postimg.cc/d1HLcf9h/base_11.png",
      "https://i.postimg.cc/mkPhLSdX/base_12.png",
      "https://i.postimg.cc/vZFDyf5Z/base_13.png",
      "https://i.postimg.cc/L8KhSLjY/base_14.png",
      "https://i.postimg.cc/QNzH6Rt1/base_15.png",
      "https://i.postimg.cc/2jtVHP6g/base_16.png",
      "https://i.postimg.cc/Wbt0zGFv/base_2.png",
      "https://i.postimg.cc/VLTnCJnQ/base_3.png",
      "https://i.postimg.cc/wT3DMXy6/base_4.png",
      "https://i.postimg.cc/Y00L47SR/base_5.png",
      "https://i.postimg.cc/tJcZWc1f/base_6.png",
      "https://i.postimg.cc/3Nq4mqyV/base_7.png",
      "https://i.postimg.cc/v826J4Ph/base_8.png",
      "https://i.postimg.cc/W3Whcy74/base_9.png"
    ]
  },
  {
    id: 1,
    title: "Sushi Nami",
    title_zh: "Sushi Nami",
    category: "Commercial",
    description: "A complete renovation of a 200sqm Asian fusion restaurant. We focused on warm lighting and durable materials to create a welcoming atmosphere while adhering to strict local hygiene regulations.",
    location: "Milan, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/tJpdcght/场景_10.jpg",
    gallery: [
      "https://i.postimg.cc/tJpdcght/场景_10.jpg",
      "https://i.postimg.cc/J0M3FhbX/场景_5.jpg",
      "https://i.postimg.cc/QChgzMp1/场景_6.jpg",
      "https://i.postimg.cc/rsMGHpSG/场景_9.jpg",
      "https://i.postimg.cc/GtdPfpkt/场景_1.jpg",
      "https://i.postimg.cc/D0nQNzqZ/场景_2.jpg"
    ]
  },
  {
    id: 2,
    title: "Udine Steakhouse",
    title_zh: "Udine 牛排馆",
    category: "Commercial",
    description: "A comprehensive interior design for a modern steakhouse in Udine. The project features a robust spatial layout including detailed isometric views and floor plans, ensuring a seamless flow between the kitchen and dining areas. The design utilizes warm tones and strategic lighting to create an inviting dining experience.",
    location: "Udine, Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/Hsf0G34m/场景_1.png",
    gallery: [
      "https://i.postimg.cc/Hsf0G34m/场景_1.png",
      "https://i.postimg.cc/wTt5bnJd/场景_2.png",
      "https://i.postimg.cc/WbQmRSmx/场景_3.png",
      "https://i.postimg.cc/28PdpTF5/场景_4.png",
      "https://i.postimg.cc/rmnWf9Fb/场景_5.png",
      "https://i.postimg.cc/j5gNMhSV/场景_6.png",
      "https://i.postimg.cc/Px3ZSMr9/场景_7.png",
      "https://i.postimg.cc/3RSptZJs/场景_8.png",
      "https://i.postimg.cc/xTtCMd8t/iso.jpg",
      "https://i.postimg.cc/jdZ5Pj2v/plan.jpg"
    ]
  },
  {
    id: 3,
    title: "Zen Sushi Restaurant",
    title_zh: "Zen Sushi 寿司餐厅",
    category: "Commercial",
    description: "A serene sushi dining space designed with minimal aesthetics. We utilized light wood textures, traditional dividers, and soft lighting to create a calm Zen atmosphere.",
    location: "Italy",
    year: "2023",
    imageUrl: "https://i.postimg.cc/x1DjVbkV/场景_2.png",
    gallery: [
      "https://i.postimg.cc/x1DjVbkV/场景_2.png",
      "https://i.postimg.cc/VkqffLM5/场景_1.png",
      "https://i.postimg.cc/DybfNcwd/场景_3.png",
      "https://i.postimg.cc/65G6Phpv/场景_4.png",
      "https://i.postimg.cc/NMMBk6nR/场景_5.png",
      "https://i.postimg.cc/G90RRZmk/场景_6.png",
      "https://i.postimg.cc/4nCGGrxY/场景_7.png",
      "https://i.postimg.cc/bY4SdrGW/场景_8.png",
      "https://i.postimg.cc/9f9n5rqJ/场景_11.png",
      "https://i.postimg.cc/FKSB57Jy/场景_12.png",
      "https://i.postimg.cc/Z52MMr04/场景_13.png",
      "https://i.postimg.cc/q7K5VzCL/场景_14.png"
    ]
  },
  {
    id: 4,
    title: "C&B Nail Salon",
    title_zh: "C&B 美甲沙龙",
    category: "Commercial",
    description: "A sophisticated nail salon design featuring warm wood textures, custom polish display shelving, and ergonomic pedicure stations.",
    location: "Italy",
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
    title_zh: "极简定制衣柜系统",
    category: "Customization",
    description: "Full-wall custom wardrobe solution designed to blend seamlessly into the bedroom walls. Maximizing storage while maintaining a clean, uncluttered look.",
    location: "Copenhagen, Denmark",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1470&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  // Added placeholder projects to demonstrate slider functionality
  {
    id: 7,
    title: "Nordic Coffee House",
    title_zh: "北欧极简咖啡馆",
    category: "Commercial",
    description: "A cozy coffee shop design focusing on natural light and acoustic comfort. Uses reclaimed wood and soft textiles.",
    location: "Aarhus, Denmark",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop"]
  },
  {
    id: 8,
    title: "Urban Apartment Renovation",
    title_zh: "城市公寓旧改",
    category: "Residential",
    description: "Transforming an old 1980s apartment into a modern open-plan living space. Complete kitchen and bathroom overhaul.",
    location: "Malmö, Sweden",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1502005229766-939760a98f78?q=80&w=1473&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1502005229766-939760a98f78?q=80&w=1473&auto=format&fit=crop"]
  },
  {
    id: 10,
    title: "Compact Studio Living",
    title_zh: "小户型全屋定制",
    category: "Customization",
    description: "Maximizing 35sqm of space with intelligent custom cabinetry and fold-away furniture solutions.",
    location: "Rome, Italy",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1470&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1470&auto=format&fit=crop"]
  }
];
