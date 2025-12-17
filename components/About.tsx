
import React from 'react';
import { Content } from '../types';

interface AboutProps {
  content: Content['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-neutral-900 text-neutral-100 scroll-mt-24"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[3/4] overflow-hidden bg-neutral-800 rounded-sm">
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Studio Atmosphere" 
                    className="w-full h-full object-cover opacity-60 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
             </div>
             {/* Decorative text */}
             <div className="absolute -bottom-6 -right-6 text-[120px] font-serif leading-none text-white opacity-5 hidden lg:block select-none pointer-events-none">
                 CJ
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="block text-neutral-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Established 2014
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight text-white">
              {content.title}
            </h2>
            <div className="space-y-8 text-neutral-300 font-light leading-relaxed text-lg border-l border-neutral-700 pl-8">
              <p>{content.description1}</p>
              <p>{content.description2}</p>
            </div>
            
            <div className="mt-16 flex gap-12">
              <div>
                <span className="block text-4xl font-serif text-white mb-2">{content.stats.years}</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">{content.stats.yearsLabel}</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-white mb-2">{content.stats.projects}</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">{content.stats.projectsLabel}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
