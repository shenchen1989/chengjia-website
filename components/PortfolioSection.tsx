import React from 'react';
import { Content, PortfolioItem, Language } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';
import WatermarkOverlay from './WatermarkOverlay';

interface PortfolioSectionProps {
  content: Content['portfolio'];
  onProjectClick: (item: PortfolioItem) => void;
  lang: Language;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ content, onProjectClick, lang }) => {
  // 过滤掉不该在首页展示的项目
  const visibleItems = PORTFOLIO_ITEMS.filter(item => !item.hideFromHome);

  return (
    <section id="portfolio" className="py-20 bg-transparent">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row items-baseline justify-between border-b border-morandi-300 pb-4">
            <h2 className="text-4xl md:text-5xl font-sans text-morandi-900 tracking-tight">
              {content.title}
            </h2>
            <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-morandi-400">
                <span>Architecture</span>
                <span>Interior</span>
                <span>Furniture</span>
            </div>
        </div>

        {/* Compositional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[10px] w-full">
          {visibleItems.map((item: PortfolioItem, index: number) => {
            const displayTitle = (lang === 'zh' && item.title_zh) ? item.title_zh : item.title;
            
            // Check if the image needs cropping (legacy portfolio pages)
            const needsCrop = item.imageUrl.includes('页面') || item.imageUrl.includes('portfolio');

            const patternIndex = index % 4;

            let colSpan = "";
            let aspectRatio = "";
            let containerClasses = "";
            let textVertical = false;

            switch (patternIndex) {
                case 0:
                    colSpan = "md:col-span-8";
                    aspectRatio = "aspect-[16/11]";
                    containerClasses = "md:mb-16"; 
                    break;
                case 1:
                    colSpan = "md:col-span-4";
                    aspectRatio = "aspect-[3/4]";
                    containerClasses = "md:mt-24";
                    textVertical = true; 
                    break;
                case 2:
                    colSpan = "md:col-span-5";
                    aspectRatio = "aspect-[4/5]";
                    containerClasses = "md:mt-12"; 
                    textVertical = true;
                    break;
                case 3:
                    colSpan = "md:col-span-7";
                    aspectRatio = "aspect-[4/3]";
                    containerClasses = ""; 
                    break;
            }

            return (
                <div 
                    key={item.id} 
                    className={`group cursor-pointer relative ${colSpan} ${containerClasses} ${textVertical ? 'flex flex-row gap-2' : 'flex flex-col'}`}
                    onClick={() => onProjectClick(item)}
                >
                    {/* Image Container */}
                    <div className={`relative overflow-hidden bg-white ${textVertical ? 'flex-1' : 'w-full'} ${aspectRatio}`}>
                        {/* Physical Masks for Thumbnails - 增加遮罩高度至10% */}
                        {needsCrop && (
                            <>
                                <div className="absolute top-0 left-0 right-0 h-[10%] bg-white z-20"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-white z-20"></div>
                            </>
                        )}
                        
                        <img
                            src={item.imageUrl}
                            alt={displayTitle}
                            className={`w-full h-full object-cover transition-all duration-[0.8s] ease-out group-hover:contrast-[1.02] opacity-100 ${needsCrop ? 'scale-[1.18] z-10 relative' : 'group-hover:scale-105'}`}
                            loading="lazy"
                        />
                        <WatermarkOverlay />
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay z-30"></div>
                    </div>

                    {/* Text Container */}
                    {textVertical ? (
                        <div className="hidden md:flex flex-col justify-between items-center w-8 py-1 h-auto self-stretch">
                             <div className="vertical-text text-[10px] tracking-[0.2em] uppercase text-morandi-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {item.year}
                             </div>
                             <div className="vertical-text text-xs tracking-[0.1em] text-morandi-800 font-medium whitespace-nowrap">
                                {item.category.toUpperCase()}
                             </div>
                        </div>
                    ) : (
                        <div className="flex justify-between items-baseline mt-2 px-1">
                            <h3 className="text-xl font-sans text-morandi-900 group-hover:text-morandi-600 transition-colors">
                                {displayTitle}
                            </h3>
                            <div className="flex gap-4 text-[10px] uppercase tracking-widest text-morandi-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span>{item.category}</span>
                                <span>{item.year}</span>
                            </div>
                        </div>
                    )}
                    
                    {/* Mobile Only Text */}
                    <div className={`${textVertical ? 'md:hidden' : 'hidden'} flex justify-between items-baseline mt-2 px-1`}>
                        <h3 className="text-xl font-sans text-morandi-900">
                            {displayTitle}
                        </h3>
                        <span className="text-[10px] text-morandi-400">{item.year}</span>
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