import { StaticImageData } from 'next/image';

// Types
export type Skill = {
  name: string;
  level: number; // 0-100
  category: 'programming' | 'networking' | 'cybersecurity' | 'tools';
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

export type Experience = {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

// Data
export const skills: Skill[] = [
  // Programming
  { name: 'JavaScript', level: 85, category: 'programming' },
  { name: 'TypeScript', level: 75, category: 'programming' },
  { name: 'React.js', level: 80, category: 'programming' },
  { name: 'Next.js', level: 75, category: 'programming' },
  { name: 'Node.js', level: 70, category: 'programming' },
  { name: 'HTML/CSS', level: 90, category: 'programming' },
  { name: 'Python', level: 65, category: 'programming' },
  { name: 'SQL', level: 70, category: 'programming' },
  
  // Networking
  { name: 'TCP/IP', level: 75, category: 'networking' },
  { name: 'DNS', level: 70, category: 'networking' },
  { name: 'DHCP', level: 65, category: 'networking' },
  { name: 'Network Security', level: 60, category: 'networking' },
  
  // Cybersecurity
  { name: 'Security Protocols', level: 65, category: 'cybersecurity' },
  { name: 'Vulnerability Assessment', level: 60, category: 'cybersecurity' },
  { name: 'Security Awareness', level: 75, category: 'cybersecurity' },
  { name: 'Encryption', level: 65, category: 'cybersecurity' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },
  { name: 'Docker', level: 60, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
  { name: 'JIRA', level: 65, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 'Travel Dashboard',
    title: 'Travel Dashboard',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, and secure checkout system.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    imageUrl: '/files/travel.png',
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    featured: true,
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: 'A task management application with features like drag-and-drop, task categories, and deadline notifications.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: 'https://task-app.example.com',
    githubUrl: 'https://github.com/Clementwa0/Travell-agency-dashboard',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations.',
    tags: ['JavaScript', 'Weather API', 'CSS', 'HTML'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: 'https://weather-app.example.com',
    githubUrl: 'https://github.com/username/weather-app',
    featured: false,
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A content management system for blogging with categories, tags, and user authentication.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com/username/blog-platform',
    featured: false,
  }
];

export const aboutMe = {
  bio: `I am a passionate and detail-oriented Junior Software Developer with a solid foundation in web development, software engineering, and cybersecurity. My focus is on building scalable and efficient software solutions, and I'm continuously learning new technologies to improve my craft.`,
  mission: `My goal is to contribute to impactful software projects, learn from experienced developers, and become a full-stack engineer who integrates AI into development workflows.`,
};


export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'South Eastern Kenya University',
    location: 'Kitui, Kenya',
    period: 'Oct 2020 - Oct 2024',
    description: 'Focused on software engineering, data structures, databases, cybersecurity, and AI fundamentals.',
  },
];

export const certifications:Certification[]  = [
  {
    name: 'Google IT Support Certificate',
    issuer: 'Google (via Coursera)',
    date: '2023',
    url: 'https://coursera.org/verify/professional-cert/TTMFC73CTUDH', // Optional
  },
  {
    name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/MuliClement-5161/6CB56644FE3B24CF?sharingId=45701E47303B537', // Optional
  },
];

export const experiences :Experience[] = [
  {
    position: 'IT Support Intern',
    company: 'Teachers Service Commission',
    location: 'Nairobi, Kenya',
    period: 'May 2023 - June 2023',
    description: [
      'Troubleshot hardware and software issues for over 200 staff members.',
      'Installed and configured Windows-based systems and printers.',
      'Maintained inventory and documentation using Excel and internal tools.',
    ],
  },
  {
    position: 'Freelance Web Developer',
    company: 'Self-employed / Client-based Projects',
    location: 'Remote',
    period: '2025 - Present',
    description: [
      'Built responsive websites using HTML, CSS, JavaScript, and React.js.',
      'Collaborated with local businesses to design IT service sites and portfolios.',
    ],
  },
];
