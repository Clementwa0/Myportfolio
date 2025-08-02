import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-[100px]"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-[100px]"
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

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Muli Clement Wambua
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 mt-3 mb-6 bg-indigo-100/60 backdrop-blur-sm rounded-full border border-indigo-200">
              <p className="text-lg md:text-xl text-indigo-700 font-medium">
                ICT Professional & Full-Stack Developer
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Passionate about leveraging technology to create impactful solutions that drive <span className="font-medium text-indigo-600">digital inclusion</span> and community transformation through innovative software development.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              onClick={scrollToProjects} 
              size="lg"
              className="group"
            >
              <span>View My Projects</span>
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-indigo-500/50 hover:border-indigo-600 transition-colors"
              icon={<Download size={20} className="text-indigo-600" />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-5 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {[
              { 
                icon: <Github size={24} />, 
                href: "https://github.com/muliclement",
                color: "bg-gray-800 hover:bg-gray-900",
                text: "text-gray-100"
              },
              { 
                icon: <Linkedin size={24} />, 
                href: "https://linkedin.com/in/muli-clement",
                color: "bg-blue-600 hover:bg-blue-700",
                text: "text-white"
              },
              { 
                icon: <Mail size={24} />, 
                href: "mailto:clementwa01@gmail.com",
                color: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700",
                text: "text-white"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${item.color} ${item.text} hover:scale-105`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div 
              onClick={scrollToProjects}
              className="w-10 h-16 rounded-full border-2 border-indigo-400 flex justify-center p-2 cursor-pointer hover:border-indigo-600 transition-colors"
            >
              <motion.div
                className="w-2 h-2 bg-indigo-500 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;