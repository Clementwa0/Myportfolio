import React from "react";
import { motion } from "framer-motion";

interface SkillsProps {
  onClose: () => void;
}

const Skills: React.FC<SkillsProps> = ({ onClose }) => {
  const skillCategories = [
    { title: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { title: "Backend", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { title: "Tools & Workflow", skills: ["Git", "Vite", "Figma", "ESLint", "Prettier"] },
  ];

  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <button
            onClick={onClose}
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Close
          </button>

          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-300 hover:text-white transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
