
import React from 'react';
import { Content, Language } from '../types';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface ContactProps {
  content: Content['contact'];
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ content, lang }) => {
  return (
    <footer id="contact" className="bg-[#1A1A18] text-neutral-400 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          
          {/* Contact Info */}
          <div>
            <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-white p-2 rounded-full">
                         <Logo className="h-8 w-8 text-neutral-900" />
                    </div>
                </div>
                <h2 className="text-4xl font-serif text-white mb-6">{content.title}</h2>
                <p className="text-neutral-500 font-light mb-8">{content.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 w-24 pt-1">Location</span>
                <div className="flex flex-col gap-1">
                    <span className="text-neutral-300 font-light">
                        {content.location}
                    </span>
                    <span className="text-[10px] text-neutral-600 uppercase tracking-tighter">Genova, Italy</span>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 w-24 pt-1">Phone</span>
                <a href="tel:+393242609338" className="text-neutral-300 font-light hover:text-white transition-colors">
                    +39 3242609338
                </a>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 w-24 pt-1">Email</span>
                <a href="mailto:info@chengjiadesign.com" className="text-neutral-300 font-light hover:text-white transition-colors">
                    info@chengjiadesign.com
                </a>
              </div>

              <div className="flex items-start gap-6">
                 <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 w-24 pt-1">WeChat</span>
                 <span className="text-neutral-300 font-light">moomin521</span>
              </div>
              
              {content.linkedin && (
                 <div className="flex items-start gap-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 w-24 pt-1">Social</span>
                    <a href={content.linkedin} target="_blank" rel="noopener" className="text-neutral-300 font-light hover:text-white transition-colors">
                        LinkedIn
                    </a>
                 </div>
              )}
            </div>
          </div>

          {/* Minimal Form */}
          <div className="bg-[#2A2A28] p-10 rounded-sm">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-8">
                  <div className="relative">
                    <input type="text" placeholder={content.formName} className="w-full bg-transparent border-b border-neutral-600 py-3 text-white focus:border-white outline-none transition-colors placeholder-neutral-600" />
                  </div>
                  <div className="relative">
                    <input type="text" placeholder={content.formEmail} className="w-full bg-transparent border-b border-neutral-600 py-3 text-white focus:border-white outline-none transition-colors placeholder-neutral-600" />
                  </div>
              </div>
              <div className="relative">
                <textarea rows={3} placeholder={content.formMessage} className="w-full bg-transparent border-b border-neutral-600 py-3 text-white focus:border-white outline-none transition-colors resize-none placeholder-neutral-600"></textarea>
              </div>
              <button type="submit" className="bg-white text-neutral-900 px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors w-full md:w-auto">
                {content.formSubmit}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} CJ Studio.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Interior Design in Europe & China</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
