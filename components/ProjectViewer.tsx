
import React, { useEffect, useState } from 'react';
import { PortfolioItem, Content, Language } from '../types';
import { ArrowLeft, MapPin, Calendar, Tag, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import WatermarkOverlay from './WatermarkOverlay';

interface ProjectViewerProps {
  project: PortfolioItem;
  content: Content['portfolio'];
  onBack: () => void;
  lang: Language;
}

const ProjectViewer: React.FC<ProjectViewerProps> = ({ project, content, onBack, lang }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.imageUrl];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
      if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxIndex]);

  const displayTitle = (lang === 'zh' && project.title_zh) ? project.title_zh : project.title;
  
  // Dynamic description logic
  const getDisplayDescription = () => {
    if (lang === 'zh' && project.description_zh) return project.description_zh;
    if (lang === 'it' && project.description_it) return project.description_it;
    if (lang === 'da' && project.description_da) return project.description_da;
    return project.description; // Fallback to English
  };
  const displayDescription = getDisplayDescription();

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 animate-fade-in relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 text-sm font-medium tracking-wide uppercase"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {content.backToHome}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-5xl font-serif font-medium text-neutral-900 mb-6 leading-tight">
                    {displayTitle}
                </h1>
                <p className="text-neutral-600 leading-relaxed text-lg font-light whitespace-pre-line">
                    {displayDescription || "Project description coming soon."}
                </p>
            </div>
            
            <div className="bg-neutral-50 p-6 h-fit border border-neutral-100 rounded-sm">
                <div className="space-y-4">
                    <div>
                        <div className="flex items-center gap-2 text-neutral-400 mb-1 text-xs uppercase tracking-widest">
                            <Tag size={12} /> Category
                        </div>
                        <div className="text-neutral-900 font-medium font-serif">{project.category}</div>
                    </div>
                    {project.location && (
                        <div>
                            <div className="flex items-center gap-2 text-neutral-400 mb-1 text-xs uppercase tracking-widest">
                                <MapPin size={12} /> Location
                            </div>
                            <div className="text-neutral-900 font-medium font-serif">{project.location}</div>
                        </div>
                    )}
                    {project.year && (
                        <div>
                            <div className="flex items-center gap-2 text-neutral-400 mb-1 text-xs uppercase tracking-widest">
                                <Calendar size={12} /> Year
                            </div>
                            <div className="text-neutral-900 font-medium font-serif">{project.year}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="space-y-12">
            <div 
                className="w-full bg-neutral-100 border border-neutral-100 rounded-sm overflow-hidden cursor-zoom-in group relative"
                onClick={() => setLightboxIndex(0)}
            >
                <img 
                    src={images[0]} 
                    alt={displayTitle} 
                    className="w-full h-auto max-h-[85vh] object-contain mx-auto shadow-sm block transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="eager"
                />
                <WatermarkOverlay />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 pointer-events-none">
                    <div className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 backdrop-blur-md">
                        <ZoomIn size={14} /> View Fullscreen
                    </div>
                </div>
            </div>

            {images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.slice(1).map((img, index) => (
                        <div 
                            key={index + 1} 
                            className="w-full bg-neutral-50 overflow-hidden group shadow-sm cursor-zoom-in relative rounded-sm aspect-[4/3] border border-neutral-100"
                            onClick={() => setLightboxIndex(index + 1)}
                        >
                            <img 
                                src={img} 
                                alt={`${displayTitle} detail ${index + 1}`} 
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                loading="eager"
                            />
                            <WatermarkOverlay />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in" onClick={() => setLightboxIndex(null)}>
            <button 
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
                <X size={40} strokeWidth={1.5} />
            </button>

            {images.length > 1 && (
                <>
                    <button 
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : images.length - 1); }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50 hover:bg-white/10 rounded-full"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>
                    
                    <button 
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev !== null && prev < images.length - 1 ? prev + 1 : 0); }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50 hover:bg-white/10 rounded-full"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>
                </>
            )}

            <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
                <div className="relative inline-block max-w-full max-h-full">
                    <img 
                        src={images[lightboxIndex]}
                        alt="Full screen view"
                        className="max-w-full max-h-full object-contain shadow-2xl select-none block"
                        onClick={(e) => e.stopPropagation()} 
                    />
                    <WatermarkOverlay />
                </div>
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 font-sans text-sm tracking-widest z-50">
                {lightboxIndex + 1} / {images.length}
            </div>
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;