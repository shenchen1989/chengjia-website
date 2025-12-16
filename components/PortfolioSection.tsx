
import React from 'react';
import { Content, PortfolioItem, Language } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioSectionProps {
  content: Content['portfolio'];
  onProjectClick: (item: PortfolioItem) => void;
  lang: Language;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ content, onProjectClick, lang }) => {
  return (
    <section id="portfolio" className="py-24 bg-[#fafaf9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
            {content.title}
          </h2>
          <p className="text-stone-500 font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item: PortfolioItem) => {
            const displayTitle = (lang === 'zh' && item.title_zh) ? item.title_zh : item.title;
            
            return (
                <div 
                    key={item.id} 
                    className="group cursor-pointer block"
                    onClick={() => onProjectClick(item)}
                >
                <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-stone-200">
                    <img
                    src={item.imageUrl}
                    alt={displayTitle}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-xs uppercase tracking-widest font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {content.viewProject}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex justify-between w-full items-start">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">
                            {item.category}
                            </span>
                            <h3 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                            {displayTitle}
                            </h3>
                        </div>
                        <ArrowUpRight className="text-stone-300 group-hover:text-stone-900 transition-colors" size={20} />
                    </div>
                </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
