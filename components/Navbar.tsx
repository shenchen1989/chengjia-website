import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Content } from '../types';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
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

  return (
    <nav className="sticky top-0 z-50 bg-[#fafaf9]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              {/* Attempt to show image, fallback to styling if broken */}
              <div className="relative h-10 w-10 overflow-hidden">
                   <img 
                    src={LOGO_URL} 
                    alt="CJ Studio" 
                    className="h-full w-full object-contain opacity-100 group-hover:opacity-80 transition-opacity"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        // Show text fallback if image fails
                        e.currentTarget.parentElement?.classList.add('bg-stone-900', 'rounded-sm', 'flex', 'items-center', 'justify-center');
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-serif text-lg italic">CJ</span>';
                    }} 
                   />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-semibold text-xl tracking-tight text-stone-900 leading-none">CJ Studio</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1">Interior & Design</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-500 hover:text-stone-900 transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1 rounded-sm border border-stone-200 hover:bg-stone-100 transition-colors text-xs uppercase tracking-wider text-stone-600"
            >
              <Globe size={12} />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#fafaf9] border-t border-stone-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 border-b border-stone-100"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="w-full text-left px-3 py-4 text-base font-medium text-stone-600 hover:bg-stone-100 flex items-center gap-2"
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

export default Navbar;