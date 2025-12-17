
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
    { label: content.services, href: '#services' },
    { label: content.portfolio, href: '#portfolio' },
    { label: content.about, href: '#about' },
    { label: content.contact, href: '#contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" onClick={handleLogoClick} className="flex items-center gap-3 group">
              <div className="relative h-10 w-10">
                   <Logo className="h-full w-full text-neutral-900 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-xl tracking-tight text-neutral-900 leading-none">
                    {lang === 'zh' ? '诚嘉设计' : 'CJ Studio'}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1 font-sans">Interior & Design</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                    onHomeClick();
                }}
                className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1 rounded-sm border border-neutral-200 hover:bg-neutral-50 transition-colors text-xs uppercase tracking-wider text-neutral-600"
            >
              <Globe size={12} />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-neutral-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                    setIsOpen(false);
                    onHomeClick();
                }}
                className="block px-3 py-4 text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 border-b border-neutral-50"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="w-full text-left px-3 py-4 text-base font-medium text-neutral-600 hover:bg-neutral-50 flex items-center gap-2"
            >
              <Globe size={18} />
              {lang === 'zh' ? 'Switch to English' : '切换到中文'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
