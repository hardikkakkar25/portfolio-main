export const METADATA = {
  author: "Hardik Kakkar",
  title: "Hardik Kakkar | Senior Full Stack Developer",
  description:
    "Hardik Kakkar is a Senior Full Stack Developer specializing in dashboards, internal tools, e-commerce platforms, and SaaS MVPs using the MERN stack, GraphQL, and AWS.",
  siteUrl: "",
  twitterHandle: "",
  keywords: [
    "Hardik Kakkar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "E-commerce Developer",
    "Dashboard Developer",
    "SaaS Developer",
    "Freelance Developer",
  ].join(", "),
  image:
    "https://res.cloudinary.com/deadcpd0c/image/upload/v1746337499/y1kqctq1vd4smibq6ggx.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Services",
    ref: "services",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Experience",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Building production-ready dashboards & tools",
  "Architecting e-commerce & inventory systems",
  "Shipping scalable SaaS MVPs",
  "MERN Stack • GraphQL • AWS",
];

export const HERO_BULLETS = [
  "Architecting AI-driven inventory systems for Shopify & Amazon (SP-API).",
  "Building production dashboards and visitor management tools for enterprises.",
  "2.5+ years of experience across Wellness Extract, Alert Enterprise & Freelance.",
  "Open for remote freelance projects and SaaS MVP collaborations.",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:hardikkakkar25@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/hardikkakkar",
  },
  {
    name: "github",
    url: "https://github.com/hardikkakkar25",
  },
];

export const EXTERNAL_LINKS = {
  fiverr: "https://www.fiverr.com/hardikkakkar",
  linkedin: "https://www.linkedin.com/in/hardikkakkar",
};

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "figma",
    "postman",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "redux",
    "tailwindcss",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb", "firebase"],
  other: ["git", "tanstack-query"],
};

export const SERVICES = [
  {
    id: "dashboards",
    title: "Dashboards & Admin Panels",
    description:
      "Custom analytics dashboards, admin panels, and internal tools using React, TypeScript, and Node.js. Role-based access, charts, and clean UX for teams that live in their tools.",
    tech: ["React", "TypeScript", "Node.js", "REST", "GraphQL", "Chart libraries"],
    gradient: ["#6366f1", "#8b5cf6"],
  },
  {
    id: "internal-tools",
    title: "Internal Tools & Automation",
    description:
      "Internal portals, process automation, and workflow tools that reduce manual work. APIs, cron jobs, and integrations designed around your business processes.",
    tech: ["MERN", "Redis", "WebSockets", "Cron jobs", "Microservices"],
    gradient: ["#14b8a6", "#0891b2"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores & Inventory Systems",
    description:
      "E-commerce websites and back-office systems with real-time inventory sync across Shopify, Amazon FBA/FBM and other channels. Focus on reliability, performance, and maintainability.",
    tech: ["Shopify Admin API", "Amazon SP-API", "Node.js", "GraphQL", "AWS"],
    gradient: ["#f97316", "#ea580c"],
  },
  {
    id: "saas",
    title: "SaaS MVPs & Product Builds",
    description:
      "From idea to first paying users: authentication, billing integration, multi-tenant dashboards, and scalable APIs so your SaaS can grow without rewrites.",
    tech: ["MERN", "REST/GraphQL", "Stripe", "AWS", "Docker"],
    gradient: ["#ec4899", "#be185d"],
  },
];

export const PROJECTS = [
  {
    name: "Shopify & Amazon Inventory Management System",
    category: "E-Commerce · Inventory · Internal Tool",
    description:
      "Multi-channel inventory management platform that syncs stock in real time between Shopify and Amazon (FBA/FBM). Handles SKU mapping, demand forecasting, and price optimization.",
    responsibilities: [
      "Architected backend using MERN, GraphQL, and AWS (EC2, RDS).",
      "Integrated Shopify Admin API and Amazon SP-API for real-time sync.",
      "Reduced inventory discrepancies by ~85% and improved fulfillment efficiency.",
    ],
    gradient: ["#6366f1", "#4f46e5"],
    url: "https://github.com/hardikkakkar25",
    tech: ["react", "mongodb", "redux"],
    techStack: "MERN, GraphQL, Shopify Admin API, Amazon SP-API, AWS, Redis",
    featured: true,
  },
  {
    name: "Visitor Management System (VMS)",
    category: "Enterprise · Internal Tool · Security",
    description:
      "Enterprise-grade VMS for real-time visitor check-in/check-out, badge generation, and security integration across multiple locations.",
    responsibilities: [
      "Designed REST APIs and MERN frontend for real-time visitor tracking.",
      "Implemented QR-based badges, RBAC, and email notifications.",
      "Reduced visitor processing time by ~40% and improved auditability.",
    ],
    gradient: ["#14b8a6", "#0d9488"],
    url: "https://github.com/hardikkakkar25",
    tech: ["react", "mongodb", "firebase"],
    techStack: "React, Node.js, Express, MongoDB, JWT, AWS, SendGrid",
    featured: false,
  },
  {
    name: "E-Commerce Storefront",
    category: "E-Commerce · Storefront",
    description:
      "Responsive, conversion-focused online store with modern product listings, cart, and checkout. Optimized for performance and mobile traffic.",
    responsibilities: [
      "Implemented pixel-perfect frontend with React and Tailwind.",
      "Integrated API-driven product catalog and cart logic.",
      "Improved mobile usability and accessibility to grow mobile traffic.",
    ],
    gradient: ["#f97316", "#dc2626"],
    url: "https://github.com/hardikkakkar25",
    tech: ["react", "tailwindcss", "nextjs"],
    techStack: "React, Tailwind, Node.js, REST APIs",
    featured: false,
  },
  {
    name: "Internal Analytics Dashboard",
    category: "Dashboards · Analytics",
    description:
      "Internal dashboard for business KPIs with charts, filters, and user roles. Designed for teams to quickly get insights from live data.",
    responsibilities: [
      "Built reusable chart components and filterable views in React.",
      "Connected to backend APIs for live metrics and role-based access.",
    ],
    gradient: ["#8b5cf6", "#6366f1"],
    url: "https://github.com/hardikkakkar25",
    tech: ["react", "typescript", "redux"],
    techStack: "React, TypeScript, Node.js, Chart library, REST APIs",
    featured: false,
  },
  {
    name: "Opportunity Forge (SaaS MVP)",
    category: "SaaS · Automation · MVP",
    description:
      "SaaS-style tool that automates job/gig discovery and outreach using scraping and AI-generated emails (in progress / build-in-public).",
    responsibilities: [
      "Designed core architecture and frontend for configuration and dashboards.",
      "Integrated AI API and scraping backend (planned/ongoing).",
    ],
    gradient: ["#ec4899", "#9333ea"],
    url: "https://github.com/hardikkakkar25",
    tech: ["react", "nextjs", "mongodb"],
    techStack: "React, Node.js, Python, REST APIs, AI API (DeepSeek-R1)",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    company: "Wellness Extract",
    role: "Senior Software Developer",
    period: "Sep 2025 – Present",
    description:
      "Leading a team of 4 engineers to build an Inventory Management System (IMS) and AI-powered e-commerce tools.",
    bullets: [
      "Architected scalable backend systems integrating Shopify, Amazon FBA/FBM, and multiple platforms with real-time sync.",
      "Implemented ML-driven demand forecasting and inventory optimization.",
      "Improved API performance (from seconds to sub-second) using GraphQL optimizations, indexing, and caching.",
    ],
    tech: "MERN, GraphQL, MongoDB, MySQL/RDS, AWS, Redis, Docker, Python",
  },
  {
    company: "Alert Enterprise",
    role: "Software Engineer I",
    period: "Jul 2024 – Sep 2025",
    description:
      "Developed and maintained an enterprise Visitor Management System (VMS) with real-time tracking and security integration.",
    bullets: [
      "Built REST APIs, implemented RBAC, and integrated notifications and badge generation.",
      "Optimized database queries and improved visitor processing efficiency.",
    ],
    tech: "MERN, REST APIs, MongoDB, JWT, AWS",
  },
  {
    company: "Alert Enterprise",
    role: "Trainee",
    period: "Aug 2023 – Jul 2024",
    description:
      "Contributed to frontend and backend tasks, learning large-scale enterprise architectures.",
    bullets: [
      "Collaborated with senior engineers on Ext JS/React and backend services.",
    ],
    tech: "React, Ext JS, Node.js",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "Nov 2021 – Jul 2023",
    description:
      "Developed and maintained multiple MERN applications for clients, focusing on performance and reliability.",
    bullets: [
      "Used Redis and WebSockets to ensure 100% message delivery for real-time features.",
      "Worked with MongoDB and MySQL for efficient data modeling and queries.",
    ],
    tech: "MERN, Redis, WebSockets, MongoDB, MySQL",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Hardik turned a complex idea into a clean, production-ready web app. Communication was clear, deadlines were met, and he proactively suggested improvements that made the final product much better.",
    attribution: "E-commerce Founder",
    project: "Custom Web App",
  },
  {
    quote:
      "Great experience working with Hardik. The dashboard he built for our internal team is fast, intuitive, and well-documented. Would definitely collaborate again for future iterations.",
    attribution: "Operations Lead",
    project: "Internal Dashboard Project",
  },
  {
    quote:
      "Professional, detail-oriented, and reliable. Hardik handled our integrations and backend logic with strong ownership and made sure everything worked smoothly in production.",
    attribution: "CTO",
    project: "SaaS Startup",
  },
];

export const ABOUT_BIO = {
  paragraph:
    "Hardik Kakkar is a Senior Full Stack Developer specializing in e-commerce platforms, inventory systems, dashboards, and SaaS products. With 2.5+ years of professional experience across Wellness Extract, Alert Enterprise, and freelance projects, Hardik builds scalable systems using the MERN stack, GraphQL, and AWS. The focus is on reliability, clean architecture, and shipping production-ready features that actually move business metrics.",
  skills: [
    "MERN, Node.js, React, TypeScript, GraphQL, REST APIs",
    "Shopify Admin API, Amazon SP-API, microservices, event-driven systems",
    "AWS (EC2, RDS, Lambda), Redis, Docker, MongoDB, MySQL",
  ],
};

export const WORK_CONTENTS = {
  WELLNESS_EXTRACT: [
    {
      title: "Wellness Extract",
      description:
        "Leading a team of 4 engineers to build an Inventory Management System (IMS) and AI-powered e-commerce tools.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Software Developer
        </div>
      ),
    },
    {
      title: "Architecture",
      description:
        "Architected scalable backend systems integrating Shopify, Amazon FBA/FBM, and multiple platforms with real-time sync.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MERN, GraphQL, AWS
        </div>
      ),
    },
    {
      title: "AI & ML",
      description:
        "Implemented ML-driven demand forecasting and inventory optimization to reduce stockouts and overstock.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Python, ML Models
        </div>
      ),
    },
    {
      title: "Performance",
      description:
        "Improved API performance from seconds to sub-second using GraphQL optimizations, indexing, and caching.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Redis, Query Optimization
        </div>
      ),
    },
  ],
  ALERT_ENTERPRISE: [
    {
      title: "Alert Enterprise",
      description:
        "Developed and maintained an enterprise Visitor Management System (VMS) with real-time tracking and security integration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Software Engineer I
        </div>
      ),
    },
    {
      title: "API Development",
      description:
        "Built REST APIs, implemented RBAC, and integrated notifications and badge generation.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          REST APIs, JWT
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Optimized database queries and improved visitor processing efficiency by ~40%.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MongoDB, Performance
        </div>
      ),
    },
    {
      title: "Training",
      description:
        "Started as a trainee, learning large-scale enterprise architectures and collaborating with senior engineers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Trainee → Engineer
        </div>
      ),
    },
  ],
  FREELANCE: [
    {
      title: "Freelance",
      description:
        "Developed and maintained multiple MERN applications for clients, focusing on performance and reliability.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full-Stack Developer
        </div>
      ),
    },
    {
      title: "Real-time Features",
      description:
        "Used Redis and WebSockets to ensure 100% message delivery for real-time features.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          WebSockets, Redis
        </div>
      ),
    },
    {
      title: "Data Modeling",
      description:
        "Worked with MongoDB and MySQL for efficient data modeling and queries.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MongoDB, MySQL
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
