export interface Project {
  id: string;
  opusNumber: string;
  title: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Cloud & Architecture";
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  iconName: string;
  level: "Mastery" | "Advanced" | "Proficient";
  featured?: boolean;
}

export interface SkillCategory {
  numeral: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineEntry {
  id: string;
  type: "experience" | "education" | "certification";
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  skillsAcquired?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    email: string;
    status: string;
    bio: string[];
    approach: {
      numeral: string;
      title: string;
      description: string;
    }[];
    stats: {
      label: string;
      value: string;
    }[];
  };
  socials: SocialLink[];
  skillCategories: Record<string, SkillCategory>;
  projects: Project[];
  timeline: TimelineEntry[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Chheng Seyha",
    title: "Junior Web Developer",
    tagline: "Architecting enduring digital systems with classic precision & modern rigor.",
    location: "Phnom Penh, Cambodia",
    email: "seyhachheng26@gmail.com",
    status: "Open for Selected Engagements & Collaborations",
    bio: [
      "I am a software engineer and digital artisan dedicated to the pursuit of structural harmony, enduring code quality, and elevated user experience.",
      "Drawing inspiration from classical architectural discipline, I bridge robust backend engineering with responsive, accessible user interfaces—treating every codebase as an enduring edifice rather than a temporary construct.",
      "Whether engineering complex distributed systems or sculpting refined micro-interactions, my standard remains unwavering: balance, clarity, and uncompromising execution."
    ],
    approach: [
      {
        numeral: "I",
        title: "Firmitas (Durability)",
        description: "Building resilient backends, robust schemas, and typed contracts that stand the test of time and scale."
      },
      {
        numeral: "II",
        title: "Utilitas (Utility)",
        description: "Crafting intuitive, accessible interfaces engineered with relentless focus on ergonomics and user value."
      },
      {
        numeral: "III",
        title: "Venustas (Elegance)",
        description: "Harmonizing typography, spacing, and micro-interactions into cohesive, aesthetic digital experiences."
      }
    ],
    stats: [
      { label: "Years of Practice", value: "IV+" },
      { label: "Systems Deployed", value: "XXV+" },
      { label: "System Availability", value: "99.9%" },
      { label: "Core Technologies", value: "XV+" }
    ]
  },

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/seyha26",
      icon: "Github",
      label: "GitHub Archive"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/chheng-seyha-b2348b278",
      icon: "Linkedin",
      label: "LinkedIn Dossier"
    },
    {
      platform: "Twitter / X",
      url: "https://x.com/[Your-Handle]",
      icon: "Twitter",
      label: "Dispatch Feed"
    },
    {
      platform: "Email",
      url: "mailto:seyhachheng26@gmail.com",
      icon: "Mail",
      label: "Direct Correspondence"
    }
  ],

  skillCategories: {
    frontend: {
      numeral: "I",
      title: "Frontend Architecture",
      description: "Responsive composition, typography, and reactive client engineering.",
      skills: [
        { name: "React.js / Next.js", iconName: "Layers", level: "Mastery", featured: true },
        { name: "TypeScript / ESNext", iconName: "Code2", level: "Mastery", featured: true },
        { name: "Tailwind CSS & Design Systems", iconName: "Palette", level: "Mastery", featured: true },
        { name: "Semantic HTML5 & WCAG Standards", iconName: "Layout", level: "Advanced" },
        { name: "Reactive State Architecture", iconName: "Cpu", level: "Advanced" },
        { name: "Core Web Vitals Optimization", iconName: "Gauge", level: "Mastery" }
      ]
    },
    backend: {
      numeral: "II",
      title: "Backend Systems",
      description: "Scalable services, distributed contracts, and computational logic.",
      skills: [
        { name: "Node.js, Express & Fastify", iconName: "Server", level: "Mastery", featured: true },
        { name: "RESTful & GraphQL API Design", iconName: "Network", level: "Mastery", featured: true },
        { name: "Python / Asynchronous Services", iconName: "Terminal", level: "Advanced" },
        { name: "Cryptographic Auth & JWT Systems", iconName: "ShieldCheck", level: "Mastery" },
        { name: "Serverless & Edge Compute", iconName: "Zap", level: "Advanced" }
      ]
    },
    databases: {
      numeral: "III",
      title: "Data Persistence & Schemas",
      description: "Relational modeling, indexing strategies, and high-integrity storage.",
      skills: [
        { name: "PostgreSQL & Prisma / Drizzle ORM", iconName: "Database", level: "Mastery", featured: true },
        { name: "Distributed Redis Caching", iconName: "HardDrive", level: "Advanced" },
        { name: "Document Stores / MongoDB", iconName: "Box", level: "Proficient" },
        { name: "Cloud Storage Engines", iconName: "Cloud", level: "Advanced" }
      ]
    },
    tools: {
      numeral: "IV",
      title: "Infrastructure & Tooling",
      description: "Automated verification, containerization, and delivery pipelines.",
      skills: [
        { name: "Git & Automated CI/CD Pipelines", iconName: "GitBranch", level: "Mastery", featured: true },
        { name: "Docker Containerization", iconName: "Container", level: "Advanced" },
        { name: "Cloud Architecture (AWS / Vercel)", iconName: "CloudRain", level: "Advanced" },
        { name: "Automated Testing (Vitest & E2E)", iconName: "CheckCircle2", level: "Advanced" },
        { name: "Monorepo & Build Toolchains", iconName: "Wrench", level: "Proficient" }
      ]
    }
  },

  projects: [
    {
      id: "project-pulse-saas",
      opusNumber: "OPUS I",
      title: "PulseAnalytics Cloud",
      category: "Full Stack",
      description: "A real-time telemetry and developer analytics dashboard featuring automated alerting, live event streams, and customizable KPI visualization widgets.",
      longDescription: "Engineered a low-latency web telemetry system capable of ingesting high-throughput webhook events. Designed an interactive analytics workspace with customizable widget grids, exportable report engines, and granular role-based access management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "WebSocket"],
      githubUrl: "https://github.com/seyha26/pulse-analytics",
      liveUrl: "https://pulse-analytics-demo.vercel.app",
      featured: true,
      highlights: [
        "Real-time event processing with sub-50ms latency",
        "Responsive dark mode UI with SVG micro-charts",
        "End-to-end type safety with TypeScript & Zod schemas"
      ]
    },
    {
      id: "project-nexus-commerce",
      opusNumber: "OPUS II",
      title: "Nexus Headless Commerce",
      category: "Frontend",
      description: "An ultra-fast, headless e-commerce storefront powered by Next.js App Router, Stripe checkout, dynamic faceted filtering, and sub-second page transitions.",
      longDescription: "Developed a modern storefront utilizing incremental static regeneration (ISR) and Edge caching. Integrated localized currency conversion, instant optimistic cart management, and seamless guest checkout pipelines.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Next.js", "Stripe API", "Zustand", "Tailwind CSS", "Radix UI"],
      githubUrl: "https://github.com/seyha26/nexus-commerce",
      liveUrl: "https://nexus-commerce-demo.vercel.app",
      featured: true,
      highlights: [
        "Lighthouse performance score of 98+",
        "Optimistic UI updates for zero-lag cart management",
        "Full keyboard accessibility and Screen Reader support"
      ]
    },
    {
      id: "project-flow-api",
      opusNumber: "OPUS III",
      title: "TaskFlow Distributed API",
      category: "Backend",
      description: "A resilient distributed task orchestration API featuring distributed cron scheduling, Redis rate limiting, JWT authentication, and automated OpenAPI documentation.",
      longDescription: "Architected a scalable REST and webhook orchestration engine. Handled distributed worker queues with Redis and BullMQ, implemented token bucket rate limiting, and maintained 99.9% uptime across integration tests.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      tags: ["Node.js", "TypeScript", "Fastify", "Redis", "BullMQ", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/seyha26/taskflow-api",
      liveUrl: "https://taskflow-api-docs.vercel.app",
      featured: true,
      highlights: [
        "Handles 10,000+ jobs/min with automated retry exponential backoff",
        "Comprehensive Swagger/OpenAPI interactive documentation",
        "Docker Compose setup for rapid single-command local development"
      ]
    },
    {
      id: "project-dev-docs",
      opusNumber: "OPUS IV",
      title: "DevCanvas Knowledge Hub",
      category: "Full Stack",
      description: "A developer-first technical documentation and markdown note-taking platform featuring MDX compilation, syntax highlighting, and full-text search.",
      longDescription: "Created a centralized engineering hub supporting versioned documentation, bidirectional cross-linking, code snippet runtimes, and local offline storage synchronization.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      tags: ["Next.js", "TypeScript", "MDX", "Algolia Search", "Tailwind CSS"],
      githubUrl: "https://github.com/seyha26/devcanvas-docs",
      liveUrl: "https://devcanvas-demo.vercel.app",
      featured: false,
      highlights: [
        "Fuzzy instant search across 500+ documentation pages",
        "Interactive code playground with syntax highlighting",
        "Exportable PDF and clean printable views"
      ]
    }
  ],

  timeline: [
    {
      id: "exp-1",
      type: "experience",
      role: "Junior Full-Stack Developer",
      organization: "Pethyeoung Tech",
      location: "Phnom Penh, Cambodia",
      period: "MMXXIII — Present",
      description: "Leading the core frontend architecture and scalable microservices. Mentoring junior developers, standardizing CI/CD deployment pipelines, and reducing bundle sizes by 35%.",
      skillsAcquired: ["Next.js App Router", "TypeScript", "System Architecture", "PostgreSQL", "Team Leadership"]
    },
    {
      id: "exp-2",
      type: "experience",
      role: "Full-Stack Web Developer",
      organization: "[Previous Tech Firm / Digital Agency]",
      location: "Phnom Penh, Cambodia",
      period: "MMXXI — MMXXIII",
      description: "Engineered responsive web applications and customer-facing dashboards for enterprise clients. Spearheaded migration from legacy monolithic codebase to modular React/Node microservices.",
      skillsAcquired: ["React", "Node.js", "REST APIs", "Tailwind CSS", "Docker", "Agile / Scrum"]
    },
    {
      id: "exp-3",
      type: "experience",
      role: "Junior Web Developer & Intern",
      organization: "[Startup Studio / Tech Lab]",
      location: "Phnom Penh, Cambodia",
      period: "MMXX — MMXXI",
      description: "Developed reusable UI components, fixed cross-browser accessibility bugs, and assisted in designing relational database schemas for client MVPs.",
      skillsAcquired: ["JavaScript ES6+", "HTML5/CSS3", "Git", "SQL", "Unit Testing"]
    },
    {
      id: "edu-1",
      type: "education",
      role: "Bachelor of Science in Computer Science / Software Engineering",
      organization: "Beltie International University",
      location: "Phnom Penh, Cambodia",
      period: "MMXVI — MMXX",
      description: "Rigorous study in Data Structures, Algorithms, Distributed Computing, Database Management Systems, and Human-Computer Interaction (HCI). Graduated with honors.",
      skillsAcquired: ["Algorithms & Data Structures", "Database Systems", "Software Engineering Principles"]
    },
    {
      id: "cert-1",
      type: "certification",
      role: "AWS Certified Solutions Architect – Associate",
      organization: "Amazon Web Services (AWS)",
      location: "Credential ID: [Optional ID]",
      period: "MMXXIII",
      description: "Validated proficiency in cloud architecture, scalable container deployments, VPC security, and cost-effective distributed systems design.",
      skillsAcquired: ["Cloud Architecture", "AWS S3 / EC2 / ECS", "Serverless Infrastructure"]
    }
  ]
};
