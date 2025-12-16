import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AIAdviser from './components/AIAdviser';
import AdminGenerator from './components/AdminGenerator'; // Import admin
import { CONTENT } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if URL has #admin hash
    const checkHash = () => {
        if (window.location.hash === '#admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    };
    
    checkHash(); // Initial check
    window.addEventListener('hashchange', checkHash); // Listen for changes
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const content = CONTENT[lang];

  // If in Admin mode, show the generator instead of the website
  if (isAdmin) {
      return <AdminGenerator />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      <main>
        <Hero content={content.hero} />
        <Services content={content.services} />
        <About content={content.about} />
        <Portfolio content={content.portfolio} />
        <Contact content={content.contact} />
      </main>
      
      {/* AI Assistant available on all pages */}
      <AIAdviser content={content.ai} lang={lang} />
    </div>
  );
}

export default App;