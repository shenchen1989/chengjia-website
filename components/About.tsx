
import React from 'react';
import { Content } from '../types';

interface AboutProps {
  content: Content['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-32 bg-white text-neutral-900"> 
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side - Updated Image Source */}
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative group">
                {/* Decorative border frame */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/30 z-10 pointer-events-none"></div>
                <img 
                    src="https://i.postimg.cc/505wGrbn/ae5fe2583601ba40192d9b813389e1ce.jpg" 
                    alt="Studio Atmosphere" 
                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
             </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <span className="block text-accent-red text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                Since 2010
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-none text-neutral-900">
              {content.title}
            </h2>
            
            <div className="space-y-8 text-neutral-600 font-light leading-loose text-base font-sans">
              {/* Using dangerouslySetInnerHTML to allow span tags for coloring/sizing from constants */}
              <p dangerouslySetInnerHTML={{ __html: content.description1 }}></p>
              <p dangerouslySetInnerHTML={{ __html: content.description2 }}></p>
            </div>
            
            <div className="mt-16 flex gap-16 border-t border-neutral-100 pt-10">
              <div>
                <span className="block text-5xl font-serif text-accent-red mb-2">{content.stats.years}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{content.stats.yearsLabel}</span>
              </div>
              <div>
                <span className="block text-5xl font-serif text-accent-red mb-2">{content.stats.projects}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{content.stats.projectsLabel}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
