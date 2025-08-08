import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { categories, skills } from './constants';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dev Orbit
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            A snapshot of my technical toolkit.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.key
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Compact Skills Badges */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 text-sm text-white hover:bg-slate-700 transition-colors duration-200"
            >
              <span className="text-lg">{skill.icon}</span>
              <span className="truncate">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Tree Visualization (Orbit) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 mx-auto"
            >
              <div className="relative w-full h-full">
                {filteredSkills.slice(0, 8).map((skill, index) => {
                  const angle = (index / 8) * 2 * Math.PI;
                  const radius = 100;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm"
                      style={{
                        left: `calc(50% + ${x}px - 16px)`,
                        top: `calc(50% + ${y}px - 16px)`,
                      }}
                      whileHover={{ scale: 1.2 }}
                      title={skill.name}
                    >
                      {skill.icon}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SKILLS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
