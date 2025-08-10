const skills = {
  "Programming Languages": [
    "Java",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Python (Basic)",
  ],
  "Frontend Technologies": ["React.js", "Tailwind CSS", "Redux"],
  "Backend Technologies": [
    "Node.js",
    "Express.js",
    "Spring Boot",
    "REST APIs",
    "Hibernate (ORM)",
    "J2EE",
  ],
  Databases: [
    "MongoDB",
    "MySQL",
    "Redis",
  ],
  "Big Data & Distributed Systems": ["Apache Kafka"],
  "DevOps & Cloud": ["AWS (EC2, S3)", "Vercel", "Jenkins", "Linux", "CI/CD"],
  Testing: ["JUnit", "Mockito", "Postman"],
  "Tools & Practices": [
    "Git",
    "GitHub",
    "Maven",
    "SonarCloud",
    "SLF4J",
    "OOP",
    "DSA",
    "Design Patterns",
  ],
};

const projects = [
  {
    id: 1,
    title: "Journal Management System",
    description:
      "A secure journal management platform with full CRUD operations, JWT authentication, Redis caching, and Kafka-based async logging.",
    image: "/images/journal.png",
    "isImage":true,
    tech: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "Kafka",
      "Redis",
      "JUnit",
      "Postman",
      "SonarCloud",
    ],
    features: [
      "Secure JWT authentication",
      "Full CRUD for journals",
      "Redis caching for fast reads",
      "Kafka-based asynchronous logging",
      "Clean REST APIs with validation",
      "Automated testing with JUnit & Postman",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/SheikhAltaf38/JournalApp",
    isLive:false,
    challenge:
      "Designed robust async logging with Kafka while ensuring API validation and comprehensive testing.",
  },
  {
    id: 2,
    title: "E-commerce Clothing Store",
    description:
      "Fully responsive MERN stack e-commerce platform with user authentication, product filtering, sorting, and an admin panel using ShadCN components for UI consistency.",
    image: "/images/ecomm.png",
    "isImage":true,
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "ShadCN"],
    features: [
      "User authentication",
      "Product filtering and sorting",
      "Admin panel for inventory & orders",
      "Responsive design with Tailwind CSS",
      "Reusable UI components with ShadCN",
    ],
    liveUrl: "https://youtu.be/VRY_O4sH1Sc",
    githubUrl: "https://github.com/SheikhAltaf38/Ecommerce-Clothing",
    isLive:true,
    challenge:
      "Integrated a consistent and maintainable UI system with ShadCN components across the platform.",
  },
  {
    id: 3,
    title: "AI Tools Directory",
    description:
      "SEO-optimized directory listing trending AI tools, fully responsive with Google AdSense integration, improving mobile user engagement by 20%.",
    image: "/images/aitools.png",
    "isImage":true,
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "ShadCN"],
    features: [
      "SEO optimized for search engines",
      "Google AdSense monetization",
      "Mobile-first fully responsive design",
      "Trending AI tools curated dynamically",
    ],
    liveUrl: "https://trendingaitools.vercel.app/",
    githubUrl: "https://github.com/SheikhAltaf38/BestAiTools",
    isLive:true,
    challenge:
      "Boosted mobile engagement with a performant, clean UI and monetization via Google AdSense.",
  },
];


// const projectss = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description:
//       "A full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard. Built with microservices architecture for scalability.",
//     image: "🛍️",
//     tech: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
//     features: [
//       "Real-time inventory",
//       "Secure payments",
//       "Admin dashboard",
//       "Order tracking",
//     ],
//     liveUrl: "#",
//     githubUrl: "#",
//     challenge:
//       "Implemented distributed transactions across microservices to ensure data consistency during high-traffic sales.",
//   },
//   {
//     id: 2,
//     title: "AI-Powered Analytics Dashboard",
//     description:
//       "Interactive data visualization platform with machine learning insights, real-time updates, and customizable reports for business intelligence.",
//     image: "📊",
//     tech: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
//     features: [
//       "ML predictions",
//       "Real-time charts",
//       "Custom reports",
//       "Data export",
//     ],
//     liveUrl: "#",
//     githubUrl: "#",
//     challenge:
//       "Optimized real-time data processing pipeline to handle 1M+ data points with sub-second latency.",
//   },
//   {
//     id: 3,
//     title: "Collaborative Code Editor",
//     description:
//       "Real-time collaborative coding platform with syntax highlighting, live cursors, voice chat, and integrated terminal for remote pair programming.",
//     image: "👥",
//     tech: [
//       "React",
//       "Socket.io",
//       "Monaco Editor",
//       "WebRTC",
//       "Express",
//       "MongoDB",
//     ],
//     features: [
//       "Live collaboration",
//       "Voice chat",
//       "Code execution",
//       "Version control",
//     ],
//     liveUrl: "#",
//     githubUrl: "#",
//     challenge:
//       "Built operational transformation algorithm to handle concurrent edits without conflicts.",
//   },
//   {
//     id: 4,
//     title: "Mobile Task Manager",
//     description:
//       "Cross-platform mobile app for team task management with offline sync, push notifications, and advanced project analytics.",
//     image: "📱",
//     tech: [
//       "React Native",
//       "TypeScript",
//       "GraphQL",
//       "Apollo",
//       "PostgreSQL",
//       "Redis",
//     ],
//     features: [
//       "Offline sync",
//       "Push notifications",
//       "Team collaboration",
//       "Analytics",
//     ],
//     liveUrl: "#",
//     githubUrl: "#",
//     challenge:
//       "Implemented offline-first architecture with conflict resolution for seamless user experience.",
//   },
// ];

const experience = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    location: "San Francisco, CA",
    achievements: [
      "Led development of microservices architecture serving 1M+ users",
      "Improved application performance by 60% through optimization",
      "Mentored 5 junior developers and established code review standards",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    location: "New York, NY",
    achievements: [
      "Built scalable web applications using React and Node.js",
      "Designed and implemented RESTful APIs serving 500K+ requests daily",
      "Collaborated with cross-functional teams in Agile environment",
      "Reduced bug reports by 45% through comprehensive testing strategies",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "BigTech Inc.",
    period: "Summer 2020",
    location: "Seattle, WA",
    achievements: [
      "Developed internal tools using React and Python",
      "Automated manual processes saving 20+ hours per week",
      "Participated in code reviews and architectural discussions",
      "Presented final project to senior engineering leadership",
    ],
  },
];

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export { skills, projects, experience, navigation };
