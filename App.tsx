
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import PortfolioSection from './components/PortfolioSection';
import Contact from './components/Contact';
import ProjectViewer from './components/ProjectViewer';
import AdminGenerator from './components/AdminGenerator';
import { CONTENT } from './constants';
import { Language, PortfolioItem } from './types';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // SEO Optimization: Update document title and meta description dynamically
  useEffect(() => {
    const currentContent = CONTENT[lang];
    if (currentContent && currentContent.seo) {
      document.title = currentContent.seo.title;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', currentContent.seo.description);

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', currentContent.seo.keywords);

      // Update html lang attribute
      document.documentElement.lang = lang;
    }
  }, [lang]);

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

  const handleProjectClick = (project: PortfolioItem) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F8] text-morandi-800 flex flex-col md:flex-row relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 right-0 w-[45%] h-full bg-morandi-200/20 hidden md:block"></div>
         <div className="absolute bottom-[5%] left-0 w-[25%] h-[12%] bg-morandi-200/30"></div>
         <div className="absolute top-[10%] left-[5%] w-[12%] h-[20%] bg-[#E8ECEF]/40 mix-blend-multiply hidden md:block"></div>
         <div className="absolute top-[40%] right-[0] w-[20%] h-[30%] bg-accent-red/5 mix-blend-multiply blur-3xl hidden md:block"></div>
         <div className="absolute bottom-[20%] right-[10%] w-[5%] h-[5%] bg-[#DAE0E5]/30 hidden md:block mix-blend-multiply"></div>
         <div className="absolute top-0 left-[24%] w-[1px] h-full bg-morandi-300/20 hidden md:block"></div>
      </div>

      <Navigation 
        lang={lang} 
        setLang={setLang} 
        content={content.nav} 
        onHomeClick={handleBackToHome}
      />
      
      <main className="flex-1 w-full md:ml-52 transition-all duration-300 relative z-10">
        {selectedProject ? (
          <ProjectViewer 
            project={selectedProject} 
            content={content.portfolio} 
            onBack={handleBackToHome}
            lang={lang}
          />
        ) : (
          <>
            <Hero content={content.hero} />
            <PortfolioSection 
              content={content.portfolio} 
              onProjectClick={handleProjectClick} 
              lang={lang}
            />
            <Services content={content.services} />
            <About content={content.about} />
            <Contact content={content.contact} lang={lang} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
