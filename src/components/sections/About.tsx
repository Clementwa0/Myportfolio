import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Coffee, Users, Calendar, GraduationCap, ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Profile from "../../assets/profile.png"
import { certifications, education } from "../constants";
const highlights = [
  {
    icon: <Award className="text-blue-600" size={24} />,
    title: "BSc Computer Science",
    description: "Second Class Upper Division - SEKU",
  },
  {
    icon: <Users className="text-purple-600" size={24} />,
    title: "IT Support Experience",
    description: "TSC Nairobi - 95% first-contact resolution",
  },
  {
    icon: <BookOpen className="text-green-600" size={24} />,
    title: "Microsoft Certified",
    description: "Security, Compliance & Identity Fundamentals",
  },
  {
    icon: <Coffee className="text-orange-600" size={24} />,
    title: "Community Impact",
    description: "Passionate about digital inclusion & empowerment",
  },
];



const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background elements matching Hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-10 blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-200/40"
          style={{
            width: Math.floor(Math.random() * 20) + 5,
            height: Math.floor(Math.random() * 20) + 5,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, (i % 2 === 0 ? -15 : 15), 0],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="About Me" 
          subtitle="Who I Am" 
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Enhanced Image with frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-xs md:max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500 transform rotate-6"></div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                <img
                  src={Profile}
                  alt="Muli Clement Wambua"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio with improved typography */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ICT Professional & Software Developer
              </span>
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Motivated ICT graduate with expertise in IT support, cybersecurity, and full-stack development. At TSC Nairobi, I provided technical support to over 25 staff members with a <span className="font-semibold text-purple-600">95% first-contact resolution rate</span>.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Passionate about leveraging technology to improve lives, enhance digital literacy, and empower communities. I specialize in building efficient, low-maintenance solutions that drive tangible impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-indigo-50">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Education section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-blue-100">
              <GraduationCap size={24} className="text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">
              Education
            </h4>
          </div>
          
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm"
            >
              <h5 className="text-xl font-bold text-gray-900 mb-2">
                {edu.degree}
              </h5>
              <div className="flex flex-wrap gap-4 mb-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="bg-indigo-100 px-3 py-1 rounded-full text-sm font-medium">
                    {edu.institution}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} className="text-indigo-500" />
                  <span className="text-sm">{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm">{edu.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {edu.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Certifications section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-green-100">
              <Award size={24} className="text-green-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">
              Certifications
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <Card className="h-full p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {cert.name}
                    </h5>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-gray-600">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar size={14} />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      variant="outline" 
                      className="p-0 text-indigo-600 font-medium flex items-center gap-1" 
                      
                    >
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group-hover:text-indigo-800"
                      >
                        Verify credential
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;