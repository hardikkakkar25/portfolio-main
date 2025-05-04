export const METADATA = {
  author: "Hardik Kakkar",
  title: "Portfolio | Hardik Kakkar",
  description:
    "Hardik Kakkar is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "",
  twitterHandle: "",
  keywords: [
    "Hardik Kakkar",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
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
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Resume",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Pasionate FullStack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
  "I love to learn new things",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: hardikkakkar25@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/hardik-kakkar-5999691b2/",
  },
  {
    name: "github",
    url: "https://github.com/hardikkakkar25",
  },
];

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
    "java"
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "tailwindcss",
    "antdesign",
    "chakra-ui",
    "spring"
  ],
  databases: ["mysql", "mongodb"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "On-Demand Healthcare Service Platform",
    description: "On-Demand Healthcare Service Platform using ReactJs + Spring Boot 🏥",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/hardikkakkar25",
    tech: ["react", "tailwindcss"],
  },
  {
    name: "Crypto Portfolio Management Dashboard",
    description: "Crypto Portfolio Management Dashboard using ReactJs + Tailwind CSS + Typescript + NodeJs ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/hardikkakkar25",
    tech: ["typescript", "react", "tailwindcss"],
  },

];



export const WORK_CONTENTS = {
   ALERT_ENTERPRISE :[
    {
      title: "Alert Enterprise",
      description: "Developing robust full stack solutions and tools for security and access management.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Designing and implementing full stack tools to deliver seamless, secure solutions for enterprise clients.
        </div>
      ),
    },
    {
      title: "Transformation",
      description: "Modernizing legacy security systems with scalable and user-friendly full stack applications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer
        </div>
      ),
    },
    {
      title: "Evolution",
      description: "Driving architectural improvements by building scalable APIs and intuitive frontends for security operations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer
        </div>
      ),
    },
    {
      title: "Optimization",
      description: "Enhancing performance and reliability of security-critical applications through full stack optimization and automation.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer Intern
        </div>
      ),
    },
  ]
  
};

export const GTAG = "G-5HCTL2TJ5W";
