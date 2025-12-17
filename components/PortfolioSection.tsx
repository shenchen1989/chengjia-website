
import React, { useRef } from 'react';
import { Content, PortfolioItem, Language } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import WatermarkOverlay from './WatermarkOverlay';

interface PortfolioSectionProps {
  content: Content['portfolio'];
  onProjectClick: (item: PortfolioItem) => void;
  lang: Language;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ content, onProjectClick, lang }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth / (window.innerWidth < 768 ? 1 : 3);
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Inline styles to hide scrollbar cross-browser
  const hideScrollbarStyle: React.CSSProperties = {
    scrollbarWidth: 'none', // Firefox
    // @ts-ignore
    msOverflowStyle: 'none', // IE and Edge
  };

  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mb-4">
              {content.title}
            </h2>
            <p className="text-neutral-500 font-light text-lg">
              {content.subtitle}
            </p>
          </div>
          
          {/* Slider Controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 active:scale-95"
              aria-label="Previous projects"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 active:scale-95"
              aria-label="Next projects"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 -mx-4 px-4 sm:mx-0 sm:px-0"
              style={hideScrollbarStyle}
            >
              {PORTFOLIO_ITEMS.map((item: PortfolioItem) => {
                const displayTitle = (lang === 'zh' && item.title_zh) ? item.title_zh : item.title;
                
                return (
                    <div 
                        key={item.id} 
                        className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start group cursor-pointer"
                        onClick={() => onProjectClick(item)}
                    >
                      <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-neutral-100 border border-neutral-100 rounded-sm">
                          <img
                          src={item.imageUrl}
                          alt={displayTitle}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                          />
                          <WatermarkOverlay />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm text-xs uppercase tracking-widest font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-neutral-900">
                                  {content.viewProject}
                              </div>
                          </div>
                      </div>
                      <div className="flex flex-col items-start pr-2">
                          <div className="flex justify-between w-full items-start gap-4">
                              <div>
                                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2 block font-medium">
                                  {item.category}
                                  </span>
                                  <h3 className="text-xl md:text-2xl font-serif font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors leading-tight line-clamp-2">
                                  {displayTitle}
                                  </h3>
                                  <p className="text-sm text-neutral-500 mt-2 font-light line-clamp-2">
                                    {item.description}
                                  </p>
                              </div>
                              <ArrowUpRight className="text-neutral-300 group-hover:text-neutral-900 transition-colors flex-shrink-0 mt-1" size={20} />
                          </div>
                      </div>
                    </div>
                );
              })}
              
              {/* Spacer at the end to ensure last item is fully visible when scrolling */}
              <div className="w-1 flex-shrink-0"></div>
            </div>
            
            {/* CSS to hide scrollbar for Webkit browsers (Chrome, Safari) */}
            <style>{`
              div::-webkit-scrollbar {
                  display: none;
              }
            `}</style>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
