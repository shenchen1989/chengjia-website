
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

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
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
                    {lang === 'zh' ? '诚嘉设计' : 'CJ Studio'}
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

        {/* Bottom: Lang & Info */}
        <div>
             <button
              onClick={toggleLang}
              className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent-red hover:opacity-80 transition-opacity mb-8"
            >
              {/* Increased size and stroke width for better visibility */}
              <Globe size={22} strokeWidth={2.5} />
              <span>{lang === 'zh' ? 'Switch to English' : '中文界面'}</span>
            </button>
            <div className="text-[9px] text-morandi-300 leading-relaxed font-sans">
                &copy; {new Date().getFullYear()} CJ Studio.<br/>
                All rights reserved.
            </div>
        </div>
      </nav>

      {/* ================= MOBILE TOPBAR ================= */}
      <nav className="md:hidden sticky top-0 z-50 bg-morandi-100/95 backdrop-blur-md border-b border-morandi-200">
        <div className="px-6 h-16 flex justify-between items-center">
            {/* Logo */}
            <a href="#home" onClick={handleLogoClick} className="flex items-center gap-3">
               <div className="h-8 w-8"> 
                   <Logo className="h-full w-full text-accent-red" />
               </div>
               <span className="font-sans font-bold text-lg text-accent-red">
                    {lang === 'zh' ? '诚嘉设计' : 'CJ Studio'}
               </span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-morandi-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-morandi-100 border-b border-morandi-200 shadow-xl h-screen flex flex-col p-8 animate-fade-in">
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
                
                <div className="mt-auto mb-20 border-t border-morandi-200 pt-8">
                     <button
                        onClick={toggleLang}
                        className="flex items-center gap-3 text-base font-bold uppercase tracking-widest text-accent-red"
                        >
                        <Globe size={24} strokeWidth={2.5} />
                        <span>{lang === 'zh' ? 'Switch to English' : '中文界面'}</span>
                    </button>
                </div>
            </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
