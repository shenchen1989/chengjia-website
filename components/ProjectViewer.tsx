
import React, { useEffect } from 'react';
import { PortfolioItem, Content, Language } from '../types';
import { ArrowLeft, MapPin, Calendar, Tag } from 'lucide-react';

interface ProjectViewerProps {
  project: PortfolioItem;
  content: Content['portfolio'];
  onBack: () => void;
  lang: Language;
}

const ProjectViewer: React.FC<ProjectViewerProps> = ({ project, content, onBack, lang }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayTitle = (lang === 'zh' && project.title_zh) ? project.title_zh : project.title;

  return (
    <div className="min-h-screen bg-white pt-12 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-12 text-sm font-medium tracking-wide uppercase"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {content.backToHome}
        </button>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                    {displayTitle}
                </h1>
                <p className="text-stone-600 leading-relaxed text-lg font-light">
                    {project.description || "Project description coming soon."}
                </p>
            </div>
            
            <div className="bg-[#fafaf9] p-8 h-fit border border-stone-100">
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 text-stone-400 mb-1 text-xs uppercase tracking-widest">
                            <Tag size={14} /> Category
                        </div>
                        <div className="text-stone-900 font-medium">{project.category}</div>
                    </div>
                    {project.location && (
                        <div>
                            <div className="flex items-center gap-2 text-stone-400 mb-1 text-xs uppercase tracking-widest">
                                <MapPin size={14} /> Location
                            </div>
                            <div className="text-stone-900 font-medium">{project.location}</div>
                        </div>
                    )}
                    {project.year && (
                        <div>
                            <div className="flex items-center gap-2 text-stone-400 mb-1 text-xs uppercase tracking-widest">
                                <Calendar size={14} /> Year
                            </div>
                            <div className="text-stone-900 font-medium">{project.year}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Gallery */}
        <div className="space-y-12">
            {/* Main Image */}
            <div className="w-full aspect-video bg-stone-100 overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={displayTitle} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Additional Gallery Images */}
            {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.gallery.slice(1).map((img, index) => (
                        <div key={index} className="w-full aspect-[4/3] bg-stone-100 overflow-hidden group">
                            <img 
                                src={img} 
                                alt={`${displayTitle} detail ${index + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectViewer;
