import Auto from '../../assets/Auto.png'
import Chat from '../../assets/chat.png'
import Job from '../../assets/job.png'
import Ai from '../../assets/Ai.png'
import { Mail, MapPin, Phone, Github } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'certs';
  icon: string;
  description: string;
}

export const projects = [
  {
    id: 1,
    title: "JobTrail - AI-Powered Job Platform",
    description:
      "Full-stack job platform for job discovery, applications, profile management, and AI-powered career assistance.",
    longDescription:
      "A full-stack job platform built with Next.js, React, TypeScript, Node.js, Express.js, and MongoDB. The platform provides job discovery, application tracking, user profiles, authentication, and AI-powered career and job processing features using REST APIs and LLM services.",
    image: Job,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Groq API"
    ],
    category: "Web Platform",
    githubUrl: "https://github.com/Clementwa0",
    liveUrl: "https://jobtrailapp.vercel.app/",
    color: "from-green-500 to-emerald-500",
    status: "completed"
  },

  {
    id: 2,
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume analyzer that provides real-time feedback and ATS-focused recommendations.",
    longDescription:
      "An AI-powered resume analysis application that allows users to upload or provide resume content for automated analysis. The application uses AI to provide keyword optimization, ATS compatibility insights, and actionable resume feedback. Built with React, TypeScript, Tailwind CSS, and REST API integration.",
    image: Ai,
    technologies: [
      "React",
      "TypeScript",
      "OpenAI API",
      "REST API",
      "Tailwind CSS"
    ],
    category: "AI Web App",
    githubUrl: "https://github.com/Clementwa0/AI-Resume-Analyzer",
    liveUrl: "https://ai-resume-analyzer-jet-seven.vercel.app",
    color: "from-purple-500 to-pink-500",
    status: "completed"
  },

  {
    id: 3,
    title: "Auto Spares Shop Management",
    description:
      "Responsive auto-spares management platform with inventory, product management, cart functionality, and administrative tools.",
    longDescription:
      "A full-stack management system for an auto-spares business. The platform includes product management, inventory tracking, category filtering, cart functionality, and an administrative dashboard. Built using React, TypeScript, Node.js, Express.js, MongoDB, and Tailwind CSS.",
    image: Auto,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    category: "Business Platform",
    githubUrl: "https://github.com/Clementwa0/Auto-Spare-MS",
    liveUrl: "https://auto-spares.vercel.app/login",
    color: "from-orange-500 to-yellow-500",
    status: "completed"
  },

  {
    id: 4,
    title: "HSE Safety Hub",
    description:
      "Full-stack business platform for PPE products, orders, inventory, quotations, invoicing, and administrative workflows.",
    longDescription:
      "A full-stack safety and PPE business platform built with Next.js, React, TypeScript, MongoDB, and REST APIs. The system supports product management, inventory workflows, customer orders, quotations, invoicing, and administrative operations, with a responsive interface designed for business use.",
    image: Auto,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "REST API",
      "Docker",
      "Vercel"
    ],
    category: "Business Platform",
    githubUrl: "https://github.com/Clementwa0",
    liveUrl: "https://hse-safetyhub.vercel.app",
    color: "from-cyan-500 to-blue-500",
    status: "completed"
  },

  {
    id: 5,
    title: "Real-Time Chat App",
    description:
      "Full-stack real-time messaging application with private chats, typing indicators, and read receipts.",
    longDescription:
      "A real-time communication platform that enables users to exchange messages instantly. The application supports private conversations, typing indicators, read receipts, and real-time communication using Socket.io. The frontend is built with React and Tailwind CSS while Node.js powers the backend.",
    image: Chat,
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "Tailwind CSS"
    ],
    category: "Web App",
    githubUrl:
      "https://github.com/Clementwa0/week-5-web-sockets-assignment-Clementwa0",
    liveUrl:
      "https://week-5-web-sockets-assignment-cleme.vercel.app",
    color: "from-blue-500 to-cyan-500",
    status: "completed"
  },

  {
    id: 6,
    title: "Task Manager API + Testing",
    description:
      "REST API for task management with JWT authentication, CRUD operations, and automated testing.",
    longDescription:
      "A backend REST API designed for task management. The system includes authentication, CRUD operations, MongoDB integration, and automated API testing using Jest and Supertest. MongoDB Memory Server was used to support isolated testing.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Jest",
      "Supertest"
    ],
    category: "Backend API",
    githubUrl: "https://github.com/Clementwa0/task-manager",
    liveUrl: "https://vercel.com/clemohhs-projects/task-manager",
    color: "from-red-500 to-pink-500",
    status: "completed"
  },

  {
    id: 7,
    title: "IT Support Documentation System",
    description:
      "Internal documentation system for ICT assets, device allocation, onboarding, and technical support processes.",
    longDescription:
      "An internal IT documentation system created to support ICT asset management, device allocation, onboarding, and technical support processes. The system provides structured documentation and searchable information to improve consistency and efficiency in IT operations.",
    image:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "System Design",
      "Documentation",
      "Training",
      "IT Asset Management"
    ],
    category: "Internal Tools",
    githubUrl: "https://github.com/Clementwa0/it-support-docs",
    liveUrl: "https://it-support-docs.vercel.app",
    color: "from-indigo-500 to-blue-500",
    status: "completed"
  }
];

export const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'clementwa01@gmail.com',
    href: 'mailto:clementwa01@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+254 115-062-024',
    href: 'tel:+254115062024'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Machakos, Kenya',
    href: '#contact'
  }
];

export const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Clementwa0',
    label: 'GitHub',
    color: 'hover:text-gray-300'
  }
];

export const stats = [
  { number: '10+', label: 'Projects Completed' },
  { number: '15+', label: 'Technologies Used' },
  { number: '2+', label: 'Years Experience' },
  { number: '100%', label: 'Problem Solver' }
];

export const techStack = [
  {
    name: 'React',
    purpose: 'Component-based UI development'
  },
  {
    name: 'Next.js',
    purpose: 'Full-stack React applications and production web platforms'
  },
  {
    name: 'TypeScript',
    purpose: 'Type-safe application development'
  },
  {
    name: 'JavaScript',
    purpose: 'Modern frontend and backend development'
  },
  {
    name: 'Tailwind CSS',
    purpose: 'Responsive utility-first styling'
  },
  {
    name: 'Node.js',
    purpose: 'Server-side JavaScript and backend development'
  },
  {
    name: 'Express.js',
    purpose: 'REST APIs and backend services'
  },
  {
    name: 'Java',
    purpose: 'Object-oriented application development'
  },
  {
    name: 'Spring Boot',
    purpose: 'Backend applications and REST APIs'
  },
  {
    name: 'MongoDB',
    purpose: 'NoSQL database development'
  },
  {
    name: 'Supabase',
    purpose: 'Database, authentication and backend services'
  },
  {
    name: 'Clerk',
    purpose: 'Authentication and user management'
  },
  {
    name: 'M-Pesa',
    purpose: 'Payment and API integration'
  },
  {
    name: 'Technical SEO',
    purpose: 'Metadata, semantic structure, crawlability and web performance'
  },
  {
    name: 'Git & GitHub',
    purpose: 'Version control and collaborative development'
  },
  {
    name: 'Docker',
    purpose: 'Containerization and application environments'
  },
  {
    name: 'Postman',
    purpose: 'API development and testing'
  },
  {
    name: 'Vercel',
    purpose: 'Production deployment and hosting'
  }
];

export const performanceMetrics = [
  {
    metric: 'First Contentful Paint',
    value: '< 1.5s',
    status: 'good'
  },
  {
    metric: 'Largest Contentful Paint',
    value: '< 2.5s',
    status: 'good'
  },
  {
    metric: 'Cumulative Layout Shift',
    value: '< 0.1',
    status: 'good'
  },
  {
    metric: 'Time to Interactive',
    value: '< 3.0s',
    status: 'good'
  }
];

export const tabs = [
  {
    id: 'overview',
    name: 'Overview'
  },
  {
    id: 'architecture',
    name: 'Architecture'
  },
  {
    id: 'performance',
    name: 'Performance'
  },
  {
    id: 'source',
    name: 'Source'
  }
];

export const skills: Skill[] = [
  // =========================
  // FRONTEND
  // =========================
  {
    name: 'React',
    level: 90,
    category: 'frontend',
    icon: '⚛️',
    description: 'Building dynamic and reusable user interfaces'
  },
  {
    name: 'Next.js',
    level: 85,
    category: 'frontend',
    icon: '▲',
    description: 'Building production-ready full-stack React applications'
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'frontend',
    icon: '🟨',
    description: 'Modern JavaScript for frontend and backend development'
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'frontend',
    icon: '📘',
    description: 'Type-safe development and maintainable application architecture'
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    category: 'frontend',
    icon: '🎨',
    description: 'Responsive utility-first UI development'
  },
  {
    name: 'Technical SEO',
    level: 75,
    category: 'frontend',
    icon: '🔎',
    description: 'Metadata, semantic HTML, crawlability and web performance'
  },
  {
    name: 'Framer Motion',
    level: 80,
    category: 'frontend',
    icon: '🎭',
    description: 'Animations, transitions and interactive UI effects'
  },

  // =========================
  // BACKEND
  // =========================
  {
    name: 'Node.js',
    level: 85,
    category: 'backend',
    icon: '🟢',
    description: 'Server-side JavaScript and backend application development'
  },
  {
    name: 'Express.js',
    level: 85,
    category: 'backend',
    icon: '🚂',
    description: 'REST APIs, middleware and backend services'
  },
  {
    name: 'Java',
    level: 75,
    category: 'backend',
    icon: '☕',
    description: 'Object-oriented programming and backend development'
  },
  {
    name: 'Spring Boot',
    level: 70,
    category: 'backend',
    icon: '🍃',
    description: 'Building Java backend applications and REST APIs'
  },
  {
    name: 'MongoDB',
    level: 80,
    category: 'backend',
    icon: '🍃',
    description: 'NoSQL database design and application integration'
  },
  {
    name: 'Supabase',
    level: 75,
    category: 'backend',
    icon: '⚡',
    description: 'Database, authentication and backend services'
  },
  {
    name: 'M-Pesa',
    level: 70,
    category: 'backend',
    icon: '💳',
    description: 'Payment and third-party API integration'
  },

  // =========================
  // TOOLS
  // =========================
  {
    name: 'Git & GitHub',
    level: 90,
    category: 'tools',
    icon: '📝',
    description: 'Version control, collaboration and source management'
  },
  {
    name: 'Docker',
    level: 70,
    category: 'tools',
    icon: '🐳',
    description: 'Containerized application development and deployment'
  },
  {
    name: 'Postman',
    level: 85,
    category: 'tools',
    icon: '🚀',
    description: 'REST API development, testing and debugging'
  },
  {
    name: 'Clerk',
    level: 75,
    category: 'tools',
    icon: '🔐',
    description: 'Authentication and user management'
  },
  {
    name: 'Vercel',
    level: 85,
    category: 'tools',
    icon: '▲',
    description: 'Web application deployment and hosting'
  },
  {
    name: 'Vite',
    level: 80,
    category: 'tools',
    icon: '⚡',
    description: 'Fast development server and frontend build tooling'
  },
  {
    name: 'VS Code',
    level: 90,
    category: 'tools',
    icon: '💻',
    description: 'Primary development environment and code editing'
  },

  // =========================
  // CERTIFICATIONS
  // =========================
  {
    name: 'Microsoft SC-900',
    level: 100,
    category: 'certs',
    icon: '🏆',
    description: 'Microsoft Security, Compliance and Identity Fundamentals'
  },
  {
    name: 'Google IT Support',
    level: 100,
    category: 'certs',
    icon: '🏆',
    description: 'IT support, troubleshooting and systems fundamentals'
  },
  {
    name: 'Cisco Networking',
    level: 100,
    category: 'certs',
    icon: '🏆',
    description: 'Networking fundamentals and network device configuration'
  },
  {
    name: 'MERN Development',
    level: 100,
    category: 'certs',
    icon: '🏆',
    description: 'Full-stack web development using the MERN stack'
  }
];

export const categories = [
  {
    key: 'all',
    name: 'All Skills',
    color: 'from-purple-500 to-pink-500'
  },
  {
    key: 'frontend',
    name: 'Frontend',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    key: 'backend',
    name: 'Backend',
    color: 'from-green-500 to-emerald-500'
  },
  {
    key: 'tools',
    name: 'Tools',
    color: 'from-orange-500 to-red-500'
  },
  {
    key: 'certs',
    name: 'Certifications',
    color: 'from-yellow-500 to-amber-500'
  }
];
