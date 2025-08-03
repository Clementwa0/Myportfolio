import React from 'react';
import { motion } from 'framer-motion';
import {Linkedin, Mail, Heart, ArrowUp, GitBranch } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <GitBranch size={20} />, href: 'https://github.com/Clementwa0', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/muli-clement-wa/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:clementwa01@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute -top-6 right-8 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>

          {/* Logo/Name */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Muli Clement Wambua
            </h3>
            <p className="text-gray-400 text-center mt-2">
              ICT Professional & Full-Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800 mb-8"></div>

          {/* Copyright */}
          <motion.div
            className="text-center text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="flex items-center justify-center gap-2">
              © 2025 Muli Clement Wambua. Made with
              <Heart size={16} className="text-red-500" />
              and passion for technology.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;