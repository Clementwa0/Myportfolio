import {
  Code,
  Server,
  Database,
  Smartphone,
  Palette,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Auto from '../../assets/Auto.png'
import Chat from '../../assets/chat.png'
import Job from '../../assets/job.png'
import Ai from '../../assets/Ai.png'
interface SkillCategory {
  title: string;
  icon: LucideIcon; // store the icon *component*, not JSX
  iconColor: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    iconColor: "text-blue-600",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    iconColor: "text-green-600",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PHP",
      "Socket.io",
      "JWT Auth",
    ],
  },
  {
    title: "Database",
    icon: Database,
    iconColor: "text-purple-600",
    skills: [
      "MongoDB",
      "MySQL",
      "MongoDB Atlas",
      "Database Design",
      "Data Modeling",
    ],
  },
  {
    title: "Testing & Tools",
    icon: Smartphone,
    iconColor: "text-orange-600",
    skills: [
      "Jest",
      "Supertest",
      "MongoDB Memory Server",
      "Postman",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "IT Support",
    icon: Palette,
    iconColor: "text-pink-600",
    skills: [
      "Windows/Linux",
      "Network Setup",
      "Wireshark",
      "Nessus",
      "System Troubleshooting",
    ],
  },
  {
    title: "Platforms & CMS",
    icon: Globe,
    iconColor: "text-indigo-600",
    skills: [
      "Vercel",
      "WordPress",
      "SharePoint",
      "Google Workspace",
      "Canva",
      "Documentation",
    ],
  },
];

export const projects = [
  {
    title: "Real-Time Chat App",
    description:
      "Built a full-stack chat system with real-time messaging, private chats, typing indicators, and read receipts using Socket.io. Deployed on Vercel.",
    image:Chat,
    technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    category: "Web App",
    github:
      "https://github.com/Clementwa0/week-5-web-sockets-assignment-Clementwa0",
    demo: "https://week-5-web-sockets-assignment-cleme.vercel.app",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Developed an AI-powered resume analyzer that provides real-time feedback using OpenAI GPT API. Supports text and file inputs with Tailwind styling.",
    image:Ai,
    technologies: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    category: "Web App",
    github: "https://github.com/Clementwa0/AI-Resume-Analyzer",
    demo: "https://ai-resume-analyzer-jet-seven.vercel.app",
  },
  {
    title: "Job Tracker Web App",
    description:
      "Created a task scheduling and job tracking system using FullCalendar with features like event filtering, modal editing, and drag-and-drop rescheduling.",
    image:Job,
    technologies: ["React", "FullCalendar", "Context API", "Tailwind CSS"],
    category: "Web App",
    github: "https://github.com/Clementwa0/Job-tracker",
    demo: "https://job-tracker-teal.vercel.app",
  },
  {
    title: "Auto Spares Shop Management",
    description:
      "Built a responsive POS and inventory system for auto spares with category filtering, admin tools, floating cart, and MongoDB Atlas integration.",
    image:Auto,
    technologies: ["MERN Stack", "TypeScript", "Tailwind CSS", "MongoDB"],
    category: "Web App",
    github: "https://github.com/Clementwa0/Auto-Spare-MS",
    demo: "https://auto-spare-ms.vercel.app/dashboard",
  },
  {
    title: "Task Manager API + Testing",
    description:
      "Designed a REST API for task management with JWT authentication and full test coverage using Jest, Supertest, and MongoDB Memory Server.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Node.js", "MongoDB", "Jest", "Supertest"],
    category: "Open Source",
    github: "https://github.com/Clementwa0/task-manager",
    demo: "https://vercel.com/clemohhs-projects/task-manager",
  },
  {
    title: "IT Support Documentation System",
    description:
      "Created an internal documentation system for device allocation, IT assets, and setup processes during TSC attachment, improving deployment time by 30%.",
    image:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "System Design",
      "Documentation",
      "Training",
      "IT Asset Management",
    ],
    category: "Internal Tools",
    github: "https://github.com/Clementwa0/it-support-docs",
    demo: "https://it-support-docs.vercel.app",
  },
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