
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Content } from '../types';
import Logo from './Logo';

interface NavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
  onHomeClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ lang, setLang, content, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'zh', flag: '🇨🇳', label: '中文' },
    { code: 'en', flag: '🇬🇧', label: 'EN' },
    { code: 'it', flag: '🇮🇹', label: 'IT' },
    { code: 'da', flag: '🇩🇰', label: 'DA' },
  ];

  const handleLangChange = (code: Language) => {
    setLang(code);
    setIsOpen(false);
  };

  const navLinks = [
    { label: content.home, href: '#home' },
    { label: content.portfolio, href: '#portfolio' }, 
    { label: content.services, href: '#services' },
    { label: content.about, href: '#about' },
    { label: content.contact, href: '#contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-52 bg-morandi-100/80 backdrop-blur-sm border-r border-morandi-200 z-50 flex-col justify-between py-10 px-6">
        
        {/* Top: Logo */}
        <div>
            <a href="#home" onClick={handleLogoClick} className="block group mb-14">
              <div className="w-12 h-12 mb-5 opacity-90 hover:opacity-100 transition-opacity"> 
                   <Logo className="w-full h-full text-accent-red" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg tracking-tight text-accent-red leading-none">
                    {lang === 'zh' ? '诚嘉设计' : (lang === 'it' ? 'Studio CJ' : 'CJ Studio')}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-morandi-500 mt-2 font-medium">Interior & Design</span>
              </div>
            </a>

            {/* Middle: Links */}
            <div className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                        onHomeClick();
                    }}
                    className="text-morandi-500 hover:text-morandi-900 transition-all duration-300 text-xs font-bold tracking-[0.15em] uppercase hover:pl-1"
                >
                    {link.label}
                </a>
                ))}
            </div>
        </div>

        {/* Bottom: Flags & Info */}
        <div>
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-accent-red border-b-2 border-accent-red/20 pb-0.5 tracking-wider">
                        切换语言
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {languages.map((l) => (
                        <button
                            key={l.code}
                            onClick={() => handleLangChange(l.code)}
                            className={`flex items-center gap-2 p-1.5 rounded transition-all duration-200 ${lang === l.code ? 'bg-accent-red/10 border border-accent-red/20 scale-105 shadow-sm' : 'hover:bg-white border border-transparent opacity-60'}`}
                            title={l.label}
                        >
                            <span className="text-lg">{l.flag}</span>
                            <span className={`text-[10px] font-bold uppercase tracking-tighter ${lang === l.code ? 'text-accent-red' : 'text-morandi-400'}`}>
                                {l.code}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="text-[9px] text-morandi-300 leading-relaxed font-sans mt-8 pt-6 border-t border-morandi-200">
                &copy; {new Date().getFullYear()} CJ Studio.<br/>
                All rights reserved.
            </div>
        </div>
      </nav>

      {/* ================= MOBILE TOPBAR ================= */}
      <nav className="md:hidden sticky top-0 z-50 bg-morandi-100/95 backdrop-blur-md border-b border-morandi-200">
        <div className="px-6 h-16 flex justify-between items-center">
            <a href="#home" onClick={handleLogoClick} className="flex items-center gap-3">
               <div className="h-8 w-8"> 
                   <Logo className="h-full w-full text-accent-red" />
               </div>
               <span className="font-sans font-bold text-lg text-accent-red">
                    {lang === 'zh' ? '诚嘉设计' : (lang === 'it' ? 'Studio CJ' : 'CJ Studio')}
               </span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-morandi-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-morandi-100 border-b border-morandi-200 shadow-xl h-[calc(100vh-64px)] flex flex-col p-8 animate-fade-in overflow-y-auto">
                <div className="flex flex-col space-y-8 mt-8">
                    {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={() => {
                            setIsOpen(false);
                            onHomeClick();
                        }}
                        className="text-2xl font-sans font-medium text-morandi-900"
                    >
                        {link.label}
                    </a>
                    ))}
                </div>
                
                <div className="mt-auto border-t border-morandi-200 pt-8">
                    <div className="flex items-center gap-2 mb-6">
                        <Globe size={16} className="text-accent-red" />
                        <span className="text-sm font-bold text-morandi-800">切换语言 / Language</span>
                    </div>
                    <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => handleLangChange(l.code)}
                                className={`flex flex-col items-center gap-2 p-3 rounded-lg min-w-[80px] transition-all ${lang === l.code ? 'bg-accent-red/10 border-2 border-accent-red/20' : 'bg-white/50 border-2 border-transparent opacity-70'}`}
                            >
                                <span className="text-3xl">{l.flag}</span>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${lang === l.code ? 'text-accent-red' : 'text-morandi-500'}`}>
                                    {l.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
