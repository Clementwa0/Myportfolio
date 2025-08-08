import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from "lucide-react";
import { projects } from './constants';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
  color: string;
  status: string;
}


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

 
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Project Launchpad
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the orbiting planets of my development universe. Each project represents
            a journey of learning, problem-solving, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden cursor-pointer group"
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-600/20 rounded text-purple-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 rounded text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  selectedProject.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  selectedProject.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {selectedProject.status}
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 rounded-full text-purple-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </motion.a>
                {selectedProject.liveUrl && (
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
