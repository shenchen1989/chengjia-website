
import React from 'react';
import { Content } from '../types';
import { MapPin } from 'lucide-react';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex flex-col justify-center bg-transparent overflow-hidden">
      
      {/* Design Elements: Matches the new global background logic but specifically for Hero emphasis */}
      {/* We use transparent bg here to let the global App background show through, or reinforce it */}
      
      <div className="absolute bottom-20 right-20 text-[200px] font-serif text-morandi-200/60 leading-none select-none pointer-events-none hidden lg:block">
          CJ
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-16 relative z-10 w-full">
         <div className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-morandi-800"></span>
                <span className="text-morandi-500 text-xs font-bold tracking-[0.2em] uppercase">
                    {content.experience}
                </span>
            </div>
          
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-morandi-900 leading-[1.1] mb-10 tracking-tight">
                {content.title}
            </h1>
            
            <p className="text-lg md:text-xl text-morandi-600 mb-12 max-w-lg leading-relaxed font-light font-sans">
                {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="flex items-center gap-3 text-morandi-400 text-sm font-medium tracking-wide uppercase">
                    <MapPin size={16} className="text-morandi-800" />
                    {content.location}
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
