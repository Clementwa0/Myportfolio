import Auto from '../../assets/Auto.png'
import Chat from '../../assets/chat.png'
import Job from '../../assets/job.png'
import Ai from '../../assets/Ai.png'
import { Mail, MapPin, Phone, Github} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'certs';
  icon: string;
  description: string;
}


export  const projects = [
    {
      id: 1,
      title: "Job Tracker Web App",
      description: "Task scheduling and job tracking system with event filtering, modal editing, and drag-and-drop rescheduling.",
      longDescription: "A productivity-focused job tracking system built with React and FullCalendar. Users can filter events, edit them in modals, and reschedule via drag-and-drop. Context API ensures efficient state management, while Tailwind CSS styles the UI.",
      image: Job,
      technologies: ["React", "FullCalendar", "Context API", "Tailwind CSS"],
      category: "Web App",
      githubUrl: "https://github.com/Clementwa0/Job-tracker",
      liveUrl: "https://job-tracker-teal.vercel.app",
      color: "from-green-500 to-emerald-500",
      status: "completed"
    },
    {
      id: 2,
      title: "AI Resume Analyzer",
      description: "AI-powered resume analyzer that provides real-time feedback using OpenAI GPT API.",
      longDescription: "Leverages the OpenAI GPT API to analyze resumes in real-time. Users can paste text or upload files, and the app provides keyword optimization, ATS compatibility analysis, and actionable feedback. Designed with React, TypeScript, and Tailwind CSS.",
      image: Ai,
      technologies: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
      category: "Web App",
      githubUrl: "https://github.com/Clementwa0/AI-Resume-Analyzer",
      liveUrl: "https://ai-resume-analyzer-jet-seven.vercel.app",
      color: "from-purple-500 to-pink-500",
      status: "completed"
    },
    {
      id: 3,
      title: "Auto Spares Shop Management",
      description: "Responsive POS and inventory system for auto spares with category filtering, admin tools, and MongoDB Atlas integration.",
      longDescription: "A management system for auto spare shops featuring inventory tracking, category-based filtering, a floating cart, and an admin dashboard. Built with the MERN stack, TypeScript, and Tailwind CSS, deployed on Vercel.",
      image: Auto,
      technologies: ["MERN Stack", "TypeScript", "Tailwind CSS", "MongoDB"],
      category: "Web App",
      githubUrl: "https://github.com/Clementwa0/Auto-Spare-MS",
      liveUrl: "https://auto-spare-ms.vercel.app/dashboard",
      color: "from-orange-500 to-yellow-500",
      status: "inprogress"
    },
    {
      id: 4,
      title: "Real-Time Chat App",
      description: "Full-stack chat system with real-time messaging, private chats, typing indicators, and read receipts using Socket.io.",
      longDescription: "This application enables instant communication between users with features like private chats, typing indicators, and read receipts. Built with React and Node.js, it uses Socket.io for real-time communication and Tailwind CSS for styling. Deployed on Vercel for seamless performance.",
      image: Chat,
      technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
      category: "Web App",
      githubUrl: "https://github.com/Clementwa0/week-5-web-sockets-assignment-Clementwa0",
      liveUrl: "https://week-5-web-sockets-assignment-cleme.vercel.app",
      color: "from-blue-500 to-cyan-500",
      status: "completed"
    },
    {
      id: 5,
      title: "Task Manager API + Testing",
      description: "REST API for task management with JWT authentication and full Jest test coverage.",
      longDescription: "Designed and implemented a secure REST API for managing tasks. Includes JWT authentication, CRUD operations, and complete test coverage using Jest, Supertest, and MongoDB Memory Server.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "MongoDB", "Jest", "Supertest"],
      category: "Open Source",
      githubUrl: "https://github.com/Clementwa0/task-manager",
      liveUrl: "https://vercel.com/clemohhs-projects/task-manager",
      color: "from-red-500 to-pink-500",
      status: "completed"
    },
    {
      id: 6,
      title: "IT Support Documentation System",
      description: "Internal documentation system for device allocation, IT assets, and setup processes during TSC attachment.",
      longDescription: "Created during my TSC attachment, this system manages IT asset documentation, device allocation, and onboarding processes. Improved deployment efficiency by 30% with structured documentation and search capabilities.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["System Design", "Documentation", "Training", "IT Asset Management"],
      category: "Internal Tools",
      githubUrl: "https://github.com/Clementwa0/it-support-docs",
      liveUrl: "https://it-support-docs.vercel.app",
      color: "from-indigo-500 to-blue-500",
      status: "completed"
    }
  ];

export const contactInfo = [
  {
    icon: Mail ,
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
    content: 'Nairobi, Kenya',
    href: 'https://github.com/Clementwa0'
  }
];


export const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Clementwa0',
    label: 'GitHub',
    color: 'hover:text-gray-300'
  },
  // {
  //   icon: <Linkedin className="w-6 h-6" />,
  //   href: 'https://linkedin.com/in/muliclement',
  //   label: 'LinkedIn',
  //   color: 'hover:text-blue-400'
  // },
  // {
  //   icon: <Twitter className="w-6 h-6" />,
  //   href: 'https://twitter.com/muliclement',
  //   label: 'Twitter',
  //   color: 'hover:text-sky-400'
  // }
];

export const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Problem Solver' }
  ];
export const techStack = [
    { name: 'React 18', purpose: 'UI Framework with Hooks & Context' },
    { name: 'TypeScript', purpose: 'Type Safety & Developer Experience' },
    { name: 'Tailwind CSS', purpose: 'Utility-First Styling System' },
    { name: 'Framer Motion', purpose: 'Smooth Animations & Transitions' },
    { name: 'Lucide React', purpose: 'Consistent Icon Library' },
    { name: 'Vite', purpose: 'Fast Development & Build Tool' }
  ];

export  const performanceMetrics = [
    { metric: 'First Contentful Paint', value: '< 1.5s', status: 'good' },
    { metric: 'Largest Contentful Paint', value: '< 2.5s', status: 'good' },
    { metric: 'Cumulative Layout Shift', value: '< 0.1', status: 'good' },
    { metric: 'Time to Interactive', value: '< 3.0s', status: 'good' }
  ];
export   const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'performance', name: 'Performance' },
    { id: 'source', name: 'Source' }
  ];
export  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend', icon: '⚛️', description: 'Building dynamic UIs with hooks and context' },
    { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘', description: 'Type-safe development and better code quality' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: '🎨', description: 'Utility-first CSS for rapid UI development' },
    { name: 'Framer Motion', level: 80, category: 'frontend', icon: '🎭', description: 'Advanced animations and micro-interactions' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend', icon: '🟢', description: 'Server-side JavaScript and API development' },
    { name: 'Express.js', level: 85, category: 'backend', icon: '🚂', description: 'RESTful APIs and middleware architecture' },
    { name: 'MongoDB', level: 80, category: 'backend', icon: '🍃', description: 'NoSQL database design and optimization' },
    { name: 'Supabase', level: 75, category: 'backend', icon: '⚡', description: 'Real-time databases and authentication' },
    
    // Tools
    { name: 'Git & GitHub', level: 85, category: 'tools', icon: '📝', description: 'Version control and collaborative development' },
    { name: 'Vite', level: 80, category: 'tools', icon: '⚡', description: 'Fast build tool and development server' },
    { name: 'Clerk', level: 75, category: 'tools', icon: '🔐', description: 'Authentication and user management' },
    { name: 'Vercel', level: 80, category: 'tools', icon: '▲', description: 'Deployment and hosting solutions' },
    
    // Certifications
    { name: 'Microsoft Certified', level: 100, category: 'certs', icon: '🏆', description: 'Azure and productivity solutions' },
    { name: 'Google Certified', level: 100, category: 'certs', icon: '🏆', description: 'Cloud and digital skills' },
    { name: 'Cisco Certified', level: 100, category: 'certs', icon: '🏆', description: 'Networking and cybersecurity' }
  ];

 export const categories = [
    { key: 'all', name: 'All Skills', color: 'from-purple-500 to-pink-500' },
    { key: 'frontend', name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', name: 'Backend', color: 'from-green-500 to-emerald-500' },
    { key: 'tools', name: 'Tools', color: 'from-orange-500 to-red-500' },
    { key: 'certs', name: 'Certifications', color: 'from-yellow-500 to-amber-500' }
  ];

export const filters = ["All", "Web App", "Mobile", "UI/UX", "Open Source"];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "South Eastern Kenya University (SEKU)",
    period: "2020 - 2024",
    location: "Kitui, Kenya",
    description: "Graduated with Second Class Upper Division",
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    date: "May 2025",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/MuliClement-5161/6CB56644FE3B24CF?sharingId=45701E47303B537",
  },
  {
    name: "Career Essentials in Cybersecurity",
    issuer: "Microsoft & LinkedIn",
    date: "April 2025",
    url: "https://www.credly.com/badges/25ae254d-21fb-4908-8971-885e1867eb53/public_url",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "February 2025",
    url: "https://www.credly.com/badges/68217868-5dac-496c-8bfa-a6aba481ef70/public_url",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "February 2025",
    url: "https://www.credly.com/badges/25ae254d-21fb-4908-8971-885e1867eb53/public_url",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google via Coursera",
    date: "August 2023",
    url: "https://coursera.org/verify/professional-cert/TTMFC73CTUDH",
  },
  {
    name: "Full-Stack Developer Path",
    issuer: "Power Learn Project (PLP)",
    date: "Expected August 2025",
    url: "https://powerlearnproject.org/",
  },
];