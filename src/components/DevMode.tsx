import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Info, Zap, Layers } from 'lucide-react';

interface DevModeProps {
  onClose: () => void;
}

const DevMode: React.FC<DevModeProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <Info className="w-4 h-4" /> },
    { id: 'architecture', name: 'Architecture', icon: <Layers className="w-4 h-4" /> },
    { id: 'performance', name: 'Performance', icon: <Zap className="w-4 h-4" /> },
    { id: 'source', name: 'Source', icon: <Code className="w-4 h-4" /> }
  ];

  const techStack = [
    { name: 'React 18', purpose: 'UI Framework with Hooks & Context' },
    { name: 'TypeScript', purpose: 'Type Safety & Developer Experience' },
    { name: 'Tailwind CSS', purpose: 'Utility-First Styling System' },
    { name: 'Framer Motion', purpose: 'Smooth Animations & Transitions' },
    { name: 'Lucide React', purpose: 'Consistent Icon Library' },
    { name: 'Vite', purpose: 'Fast Development & Build Tool' }
  ];

  const performanceMetrics = [
    { metric: 'First Contentful Paint', value: '< 1.5s', status: 'good' },
    { metric: 'Largest Contentful Paint', value: '< 2.5s', status: 'good' },
    { metric: 'Cumulative Layout Shift', value: '< 0.1', status: 'good' },
    { metric: 'Time to Interactive', value: '< 3.0s', status: 'good' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 border border-purple-500/30 rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Dev Mode</h2>
              <p className="text-sm text-gray-400">Behind the scenes of The Codeverse</p>
            </div>
          </div>
          <motion.button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-slate-800/50 rounded-lg p-1">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Codeverse is a modern, interactive developer portfolio built with cutting-edge
                    web technologies. It features a space-themed design with smooth animations,
                    responsive layouts, and advanced UI patterns.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Interactive space-themed UI',
                      'Smooth Framer Motion animations',
                      'Responsive design system',
                      'TypeScript for type safety',
                      'Modern React patterns',
                      'Optimized performance'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Technology Stack</h3>
                  <div className="space-y-3">
                    {techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-slate-800/30 rounded-lg p-3"
                      >
                        <span className="font-semibold text-purple-400">{tech.name}</span>
                        <span className="text-gray-300 text-sm">{tech.purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Component Structure</h4>
                  <div className="bg-slate-800/30 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-300">
                      <div>src/</div>
                      <div className="ml-4">├── components/</div>
                      <div className="ml-8">├── Header.tsx</div>
                      <div className="ml-8">├── Hero.tsx</div>
                      <div className="ml-8">├── Projects.tsx</div>
                      <div className="ml-8">├── Skills.tsx</div>
                      <div className="ml-8">└── Contact.tsx</div>
                      <div className="ml-4">├── contexts/</div>
                      <div className="ml-8">└── ThemeContext.tsx</div>
                      <div className="ml-4">└── App.tsx</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Core Web Vitals</h3>
                  <div className="space-y-3">
                    {performanceMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-slate-800/30 rounded-lg p-3"
                      >
                        <span className="text-gray-300">{metric.metric}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400 font-semibold">{metric.value}</span>
                          <div className="w-3 h-3 bg-green-400 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Optimization Techniques</h4>
                  <div className="space-y-2 text-gray-300">
                    <div>• Lazy loading for images and components</div>
                    <div>• Optimized bundle splitting with Vite</div>
                    <div>• Efficient animation with Framer Motion</div>
                    <div>• Responsive images and modern formats</div>
                    <div>• Minimal JavaScript for better performance</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'source' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Code Highlights</h3>
                  <div className="bg-slate-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{`// Theme Context Implementation
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  
  const toggleTheme = () => setIsDark(!isDark);
  
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Patterns</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { pattern: 'Custom Hooks', usage: 'Theme management' },
                      { pattern: 'Context API', usage: 'Global state' },
                      { pattern: 'Motion Variants', usage: 'Animation presets' },
                      { pattern: 'Compound Components', usage: 'Reusable UI patterns' }
                    ].map((item, index) => (
                      <div key={index} className="bg-slate-800/30 rounded-lg p-3">
                        <div className="font-semibold text-purple-400">{item.pattern}</div>
                        <div className="text-sm text-gray-400">{item.usage}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default DevMode;