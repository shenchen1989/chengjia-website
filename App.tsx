
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import AdminGenerator from './components/AdminGenerator';
import { CONTENT } from './constants';
import { Language, PortfolioItem } from './types';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const checkHash = () => {
        if (window.location.hash === '#admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const content = CONTENT[lang];

  if (isAdmin) {
      return <AdminGenerator />;
  }

  // Navigation handlers
  const handleProjectClick = (project: PortfolioItem) => {
    setSelectedProject(project);
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        content={content.nav} 
        onHomeClick={handleBackToHome}
      />
      
      <main>
        {selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            content={content.portfolio} 
            onBack={handleBackToHome}
          />
        ) : (
          <>
            <Hero content={content.hero} />
            <Services content={content.services} />
            <About content={content.about} />
            <Portfolio content={content.portfolio} onProjectClick={handleProjectClick} />
            <Contact content={content.contact} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
