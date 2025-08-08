import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Code, Globe } from 'lucide-react';

const badges = [
  { Icon: Rocket, text: "BSc Computer Science" },
  { Icon: Code, text: "Full-Stack Certificate" },
  { Icon: Globe, text: "Microsoft • Google • Cisco" }
];

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center"
      aria-label="Hero section introducing Muli Clement Wambua"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          {/* Avatar & Rotating Ring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative inline-block"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1 shadow-lg shadow-purple-500/30">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code className="w-20 h-20 text-purple-400" aria-hidden="true" />
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-400/30"
              aria-hidden="true"
            />
          </motion.div>

          {/* Name & Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Muli Clement
              </span>
              <br />
              <span className="text-white text-4xl md:text-6xl">Wambua</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Web Developer & MERN Stack Specialist
            </p>
            
            <p className="text-lg text-gray-400 mb-8">
              Based in Nairobi, Kenya • Crafting digital experiences in the Codeverse
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-300"
          >
            {badges.map(({ Icon, text }) => (
              <motion.div
                key={text}
                className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 hover:bg-slate-800/80 transition"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-4 h-4 text-purple-400" aria-hidden="true" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {[
              { text: "Explore My Universe", action: 'projects', style: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30" },
              { text: "Make Contact", action: 'contact', style: "border border-purple-400 hover:bg-purple-400/10" }
            ].map(({ text, action, style }) => (
              <motion.button
                key={text}
                className={`${style} px-8 py-3 rounded-full font-semibold transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById(action)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {text}
              </motion.button>
            ))}
          </motion.div>

          {/* Scroll Down Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-purple-400"
              aria-hidden="true"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
