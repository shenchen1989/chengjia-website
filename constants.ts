
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
      experience: "13年设计经验 · 专注落地实操",
      location: "服务地区：丹麦 / 瑞典 / 意大利",
    },
    about: {
      title: "关于 CJ Studio (诚嘉设计)",
      description1: "CJ Studio 汇聚了感性的艺术视野与理性的工程思维，由双核团队联合主理。市场主理人 徐晨 (Chen Xu) 常驻丹麦，作为一名活跃于欧洲舞台的男高音歌唱家，他拥有深厚的艺术修养与极高的审美品味。他以敏锐的商业精英视角，精准洞察市场趋势与高端华人客户的生活方式需求，把控每一个项目的格调与品质。",
      description2: "设计主理人 沈忱 (Shen Chen) 拥有13年行业履历，持有意大利 Unina DBE 建筑环境硕士学位。他的职业生涯横跨亚、欧、大洋洲：在新西兰从事过2年一线木工与全屋定制安装，积累了极扎实的落地工艺经验；在国内主持过展厅、商业综合体、别墅私宅及餐饮办公等多类型项目。作为“学院派”与“实干派”的结合，沈忱深谙从设计构思到施工落地的每一个细节。依托我们成熟的本地供应商体系，他致力于解决海外装修痛点，真正做到“懂设计、懂工艺、懂落地”，为您提供高品质的一站式交付。",
      stats: {
        years: "13+",
        yearsLabel: "设计经验",
        projects: "50+",
        projectsLabel: "落地案例",
      }
    },
    services: {
      title: "我们的服务",
      subtitle: "提供概念设计、施工图深化、现场管理及建材采购咨询，全方位助力项目落地。",
      items: [
        {
          title: "商业空间全案设计",
          description: "涵盖餐厅、酒吧、零售店铺、办公空间、理发店及美甲店。我们提供专业的商业动线规划与卫生局合规设计，助力您快速开业。",
          icon: "Commercial",
        },
        {
          title: "住宅与别墅室内设计",
          description: "专注别墅、大平层及老房改造。提供从平面方案规划到全场景3D模型模拟的完整设计咨询服务，包含施工图深化与详细预算清单。",
          icon: "Home",
        },
        {
          title: "软装搭配与高性价比改造",
          description: "针对预算有限的客户，提供基于宜家(IKEA)、JYSK等品牌的家具选品与搭配方案；同时也提供高端全屋定制资源，丰俭由人。",
          icon: "Cabinet",
        },
        {
          title: "全程施工托管与主材陪购",
          description: "提供施工关键节点现场巡查与质量验收，确保设计精准落地。利用本地建材渠道资源，提供陪同选材服务，从瓷砖、地板到灯具五金，帮您把控预算与品质。",
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
      location: "工作室：丹麦 & 意大利",
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
      title: "Interior Design & Renovation for Nordic Living",
      subtitle: "CJ Studio specializes in turning spaces into functional, beautiful realities. Serving the Asian community in Denmark & Sweden with cost-effective renovation and custom cabinetry solutions.",
      cta: "Get a Free Quote",
      experience: "13 Years Exp · Concept to Reality",
      location: "Serving: Denmark / Sweden / Italy",
    },
    about: {
      title: "About CJ Studio",
      description1: "CJ Studio represents the convergence of artistic vision and rational engineering. Market Principal Chen Xu, based in Denmark, is a distinguished Tenor whose deep artistic background informs a refined aesthetic and keen market insight. As a business leader, he understands the lifestyle demands of the high-end Asian community, ensuring every project meets the highest standards of style and class.",
      description2: "Design Principal Shen Chen brings 13 years of diverse international experience and holds a Master's degree in Built Environment from Unina DBE, Italy. His expertise bridges theory and practice: he spent 2 years in New Zealand as a hands-on carpenter specializing in custom joinery, and has led a wide range of projects in China, including showrooms, commercial complexes, luxury villas, offices, and restaurants. This unique blend of architectural knowledge and craftsmanship allows him to masterfully control every detail from blueprint to construction. Backed by our mature supplier system, Shen ensures true 'Design-to-Reality' execution.",
      stats: {
        years: "13+",
        yearsLabel: "Years Exp.",
        projects: "50+",
        projectsLabel: "Projects",
      }
    },
    services: {
      title: "Services",
      subtitle: "Concept Design, Layout Planning, 3D Modeling, Rendering, Construction Drawings & Budgeting.",
      items: [
        {
          title: "Commercial Space Design",
          description: "Restaurants, bars, retail shops, offices, hair & nail salons. We optimize workflows and hygiene compliance to help you open your business faster.",
          icon: "Commercial",
        },
        {
          title: "Residential & Villa Design",
          description: "Specialized in villas and apartments. We provide full design consulting: layout planning, 3D spatial simulation, construction drawings, and detailed budgeting.",
          icon: "Home",
        },
        {
          title: "Styling & Budget Solutions",
          description: "From budget-friendly makeovers using IKEA/JYSK curation to high-end custom joinery. We provide soft furnishing advice to fit your specific budget.",
          icon: "Cabinet",
        },
        {
          title: "Project Management & Procurement",
          description: "We offer on-site supervision at key construction milestones to ensure design fidelity. We also assist with material selection (tiles, flooring, lighting), leveraging local supplier networks to balance quality and budget.",
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
      location: "Studio: Denmark & Italy",
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
  {
    id: 6,
    title: "Modern Asian Villa",
    title_zh: "现代亚洲风格别墅",
    category: "Residential",
    description: "Interior design for a newly built villa, incorporating Feng Shui principles with modern Nordic aesthetics. Creating harmony between traditional values and contemporary living.",
    location: "Stockholm, Sweden",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop"
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
    id: 9,
    title: "Fusion Tea House",
    title_zh: "新中式茶饮店",
    category: "Commercial",
    description: "Blending traditional Chinese tea culture with modern Scandinavian design elements. Clean lines meets warm bamboo textures.",
    location: "Copenhagen, Denmark",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1374&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1374&auto=format&fit=crop"]
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
