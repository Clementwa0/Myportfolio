import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "The Codeverse", href: "#hero" },
    { name: "Launchpad", href: "#projects" },
    { name: "Dev Orbit", href: "#skills" },
    { name: "Lab Logs", href: "#about" },
    { name: "Teleport", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Codeverse
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Actions (Dark Mode + Links) */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {[
              {
                Icon: Github,
                href: "https://github.com/Clementwa0",
                label: "GitHub",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/in/muli-clement-wa",
                label: "LinkedIn",
              },
              {
                Icon: Mail,
                href: "mailto:clementwa01@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-purple-600/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-purple-600/30 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-slate-900/90 backdrop-blur-md px-4 pb-4"
          >
            <nav className="flex flex-col space-y-4 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}

              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>

                {[
                  { Icon: Github, href: "https://github.com/muliclement" },
                  {
                    Icon: Linkedin,
                    href: "https://linkedin.com/in/muliclement",
                  },
                  { Icon: Mail, href: "mailto:muliclement@gmail.com" },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/50 hover:bg-purple-600/30"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
