
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Header,
  Hero,
  Projects,
  Skills,
  About,
  Contact,
  DevMode,
  AIAssistant,
  ParticleField,
} from "./components";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [devMode, setDevMode] = useState(false);
  const [showAI, setShowAI] = useState(false);

 useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "/") {
      e.preventDefault();
      setDevMode(prev => !prev);
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);


  return (
    <ThemeProvider>
<div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 text-white overflow-x-hidden">
        <ParticleField />
        <Header />
        <main className="relative z-10">
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <AnimatePresence>
          {devMode && <DevMode onClose={() => setDevMode(false)} />}
        </AnimatePresence>
        <AIAssistant isOpen={showAI} onToggle={() => setShowAI(!showAI)} />
      </div>
    </ThemeProvider>
  );
}

export default App;
