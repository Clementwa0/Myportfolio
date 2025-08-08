import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, BookOpen, Code, Briefcase,  Mail} from 'lucide-react';

interface AIAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface Message {
  id: number;
  text: string | JSX.Element;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: (
        <div>
          <p className="font-medium mb-2">Hello! I'm Muli's AI assistant. Here's how I can help:</p>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button 
              onClick={() => handleQuickAction('projects')}
              className="flex items-center p-2 bg-slate-800 hover:bg-purple-700 rounded-lg transition-colors text-sm"
            >
              <Code className="w-4 h-4 mr-2" /> Projects
            </button>
            <button 
              onClick={() => handleQuickAction('skills')}
              className="flex items-center p-2 bg-slate-800 hover:bg-purple-700 rounded-lg transition-colors text-sm"
            >
              <BookOpen className="w-4 h-4 mr-2" /> Skills
            </button>
            <button 
              onClick={() => handleQuickAction('experience')}
              className="flex items-center p-2 bg-slate-800 hover:bg-purple-700 rounded-lg transition-colors text-sm"
            >
              <Briefcase className="w-4 h-4 mr-2" /> Experience
            </button>
            <button 
              onClick={() => handleQuickAction('contact')}
              className="flex items-center p-2 bg-slate-800 hover:bg-purple-700 rounded-lg transition-colors text-sm"
            >
              <Mail className="w-4 h-4 mr-2" /> Contact
            </button>
          </div>
        </div>
      ),
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleQuickAction = (action: string) => {
    setInput(action);
    handleSend(action);
  };

  const formatProject = (title: string, description: string, tech: string) => (
    <div className="mb-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
      <p className="font-semibold text-purple-400">{title}</p>
      <p className="text-sm mt-1">{description}</p>
      <p className="text-xs text-gray-400 mt-1">Tech: {tech}</p>
    </div>
  );

  const generateResponse = (userInput: string): string | JSX.Element => {
    const lowercaseInput = userInput.toLowerCase();
    
    const responses: Record<string, string | JSX.Element> = {
      'projects': (
        <div>
          <p className="font-medium mb-3">Muli's featured projects:</p>
          {formatProject(
            "Job Tracker Web App", 
            "Job management app with calendar scheduling, drag-and-drop, and CRUD operations.",
            "MongoDB, Express, React, Node.js, REST API"
          )}
          {formatProject(
            "Auto Spares Shop Management", 
            "POS and inventory system with admin dashboard and role-based access.",
            "MERN Stack, TypeScript, MongoDB Atlas"
          )}
          {formatProject(
            "AI Resume Analyzer", 
            "CV review tool using OpenAI GPT with dynamic suggestions.",
            "React, TypeScript, OpenAI API, Vercel"
          )}
          <p className="mt-3 text-sm text-purple-300">View all projects on his portfolio.</p>
        </div>
      ),
      'skills': (
        <div>
          <p className="font-medium mb-2">Technical Skills:</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-2 bg-slate-800/50 rounded-lg">
              <p className="font-semibold text-purple-400">Frontend</p>
              <p>React, JavaScript, TypeScript, HTML5, CSS3, Tailwind</p>
            </div>
            <div className="p-2 bg-slate-800/50 rounded-lg">
              <p className="font-semibold text-purple-400">Backend</p>
              <p>Node.js, Express, REST APIs, PHP, Laravel</p>
            </div>
            <div className="p-2 bg-slate-800/50 rounded-lg">
              <p className="font-semibold text-purple-400">Databases</p>
              <p>MongoDB, MySQL</p>
            </div>
            <div className="p-2 bg-slate-800/50 rounded-lg">
              <p className="font-semibold text-purple-400">Tools</p>
              <p>Git, GitHub, Postman, Vercel, Netlify</p>
            </div>
          </div>
          <p className="mt-3 font-medium mb-2">Certifications:</p>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Microsoft: Security, Compliance, Identity Fundamentals</li>
            <li>Career Essentials in Cybersecurity (Microsoft/LinkedIn)</li>
            <li>Cisco Networking Academy Certifications</li>
            <li>Google IT Support Professional</li>
          </ul>
        </div>
      ),
      'experience': (
        <div>
          <div className="p-3 bg-slate-800/50 rounded-lg mb-3 border border-slate-700">
            <p className="font-semibold text-purple-400">IT Support Attaché | Teachers Service Commission</p>
            <p className="text-sm text-gray-300">May 2023 - July 2023 | Kenya</p>
            <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
              <li>Provided IT support to 25+ users, resolving 95% of issues on first contact</li>
              <li>Managed hardware/software setup for 30+ devices</li>
              <li>Reduced device configuration time by 30%</li>
              <li>Maintained 100+ IT asset records</li>
            </ul>
          </div>
          <p className="text-sm">Currently pursuing Full-Stack Web Development certification at Power Learn Project Academy</p>
        </div>
      ),
      'contact': (
        <div>
          <p className="font-medium mb-3">Contact Muli:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-purple-400" />
              <span>clementwa01@gmail.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
              </svg>
              <span>LinkedIn (Available on request)</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub (Available on request)</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Portfolio (Available on request)</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-purple-300">Based in Nairobi, Kenya | Open to remote opportunities</p>
        </div>
      ),
      'education': (
        <div>
          <div className="p-3 bg-slate-800/50 rounded-lg mb-3 border border-slate-700">
            <p className="font-semibold text-purple-400">BSc Computer Science</p>
            <p className="text-sm text-gray-300">South Eastern Kenya University | 2020-2024</p>
            <p className="mt-2 text-sm">Second Class Upper Division</p>
            <p className="text-sm mt-1">Coursework: Web Development, Network Systems, Cybersecurity</p>
          </div>
          <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <p className="font-semibold text-purple-400">Full-Stack Web Development (MERN)</p>
            <p className="text-sm text-gray-300">Power Learn Project Academy | Ongoing</p>
            <p className="mt-2 text-sm">Real-world projects with React, Node.js, MongoDB, Express</p>
          </div>
        </div>
      )
    };

    // Direct matches
    if (responses.hasOwnProperty(lowercaseInput)) {
      return responses[lowercaseInput];
    }
    
    // Keyword matching
    const keywords: Record<string, keyof typeof responses> = {
      'project': 'projects',
      'app': 'projects',
      'skill': 'skills',
      'tech': 'skills',
      'work': 'experience',
      'job': 'experience',
      'intern': 'experience',
      'contact': 'contact',
      'email': 'contact',
      'hire': 'contact',
      'school': 'education',
      'study': 'education',
      'degree': 'education',
      'cert': 'skills',
      'train': 'skills'
    };
    
    for (const [keyword, responseKey] of Object.entries(keywords)) {
      if (lowercaseInput.includes(keyword)) {
        return responses[responseKey];
      }
    }
    
    // Special cases
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
      return "Hello! I'm Muli's AI assistant. Ask about his projects, skills, experience, or education!";
    }
    
    if (lowercaseInput.includes('thank')) {
      return "You're welcome! Feel free to ask if you need more information about Muli's qualifications or experience.";
    }
    
    if (lowercaseInput.includes('hire') || lowercaseInput.includes('recruit')) {
      return "Muli is actively seeking internship opportunities! He specializes in MERN stack development and has experience building full-stack applications. Contact him directly at clementwa01@gmail.com for hiring inquiries.";
    }
    
    // Default response
    return (
      <div>
        <p>I can help you with information about:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><span className="text-purple-400">Projects</span> - Muli's portfolio applications</li>
          <li><span className="text-purple-400">Skills</span> - Technical abilities and certifications</li>
          <li><span className="text-purple-400">Experience</span> - Professional background</li>
          <li><span className="text-purple-400">Education</span> - Degrees and training</li>
          <li><span className="text-purple-400">Contact</span> - How to reach Muli</li>
        </ul>
        <p className="mt-3">Try asking: "Tell me about Muli's projects"</p>
      </div>
    );
  };

  const handleSend = (customInput?: string) => {
    const finalInput = customInput || input;
    if (!finalInput.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: finalInput,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Clear input if not a quick action
    if (!customInput) setInput('');

    // Simulate AI processing
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: generateResponse(finalInput),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-start"
    >
      <div className="bg-slate-800 text-gray-100 p-3 rounded-lg">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-96 max-w-[90vw] h-[32rem] bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl z-40 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Muli's AI Assistant</h3>
                  <p className="text-xs text-purple-100">Ask about projects, skills, experience</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[90%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-slate-800 text-gray-100'
                    }`}
                  >
                    {typeof message.text === 'string' ? (
                      <p className="text-sm">{message.text}</p>
                    ) : (
                      message.text
                    )}
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Muli's background..."
                  className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:border-purple-400 focus:outline-none"
                  aria-label="Ask a question"
                />
                <motion.button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: input.trim() ? 1.05 : 1 }}
                  whileTap={{ scale: input.trim() ? 0.95 : 1 }}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;