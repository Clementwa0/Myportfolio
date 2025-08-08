import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Award,
  Coffee,
  Code2,
  ShieldCheck,
} from "lucide-react";
import { stats } from "./constants";

const About: React.FC = () => {
 const achievements = [
  // 2025
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Full-Stack Certificate",
    subtitle: "Power Learn Project Academy",
    year: "2025",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title:
      "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    subtitle: "Microsoft",
    year: "2025",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/MuliClement-5161/6CB56644FE3B24CF?sharingId=45701E47303B537",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Career Essentials in Cybersecurity",
    subtitle: "Microsoft & LinkedIn",
    year: "2025",
    url: "https://www.credly.com/badges/25ae254d-21fb-4908-8971-885e1867eb53/public_url",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Introduction to Cybersecurity",
    subtitle: "Cisco Networking Academy",
    year: "2025",
    url: "https://www.credly.com/badges/68217868-5dac-496c-8bfa-a6aba481ef70/public_url",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Networking Basics",
    subtitle: "Cisco Networking Academy",
    year: "2025",
    url: "https://www.credly.com/badges/25ae254d-21fb-4908-8971-885e1867eb53/public_url",
  },

  // 2024
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "BSc Computer Science",
    subtitle: "South Eastern Kenya University",
    year: "2024",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Google Certified",
    subtitle: "Google IT Support Professional Certificate",
    year: "2023",
    url: "https://coursera.org/verify/professional-cert/TTMFC73CTUDH",
  },
];


  return (
    <section id="about" className="p-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lab Logs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every developer has a story. Mine is written in lines of code,
            late-night debugging sessions, and the constant pursuit of elegant
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>Based in Nairobi, Kenya</span>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey into the codeverse began with curiosity and a simple
                question: "How do websites work?" That question led me down a
                rabbit hole of HTML, CSS, and JavaScript that I'm still
                exploring today.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my Full-Stack Certificate while building
                real-world applications that solve actual problems. I believe
                the best way to learn is by doing, which is why every project in
                my portfolio addresses a genuine need.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in
                cybersecurity, contributing to open source, or mentoring fellow
                developers who are just starting their journey in the vast
                codeverse.
              </p>
            </div>

            {/* Current Focus */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <Coffee className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">
                  Currently Working On
                </h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Auto Spares Shop Management System (React + Node.js)</li>
                <li>• Advanced authentication with Clerk integration</li>
                <li>• AI-powered CV review and optimization tool</li>
                <li>• Contributing to open source MERN stack projects</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Milestones</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.a
                    key={index}
                    href={achievement.url || "#"}
                    target={achievement.url ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-700/40 bg-slate-800/20 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="text-purple-400 shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white leading-snug">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {achievement.subtitle}
                      </p>
                    </div>
                    <span className="text-xs text-purple-400 font-semibold">
                      {achievement.year}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/20"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Learning Timeline
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Learning Timeline</h3>
              <div className="space-y-4">
                {[
                  { year: '2022', event: 'Started Computer Science degree', status: 'completed' },
                  { year: '2023', event: 'First full-stack project', status: 'completed' },
                  { year: '2024', event: 'Professional certifications', status: 'completed' },
                  { year: '2025', event: 'Full-Stack Certificate completion', status: 'in-progress' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${
                      item.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                    <div>
                      <span className="text-purple-400 font-semibold">{item.year}</span>
                      <span className="text-gray-300 ml-2">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
