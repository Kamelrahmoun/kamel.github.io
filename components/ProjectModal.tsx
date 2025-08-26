import React, { useState, useEffect } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    if (project) {
        document.body.style.overflow = 'hidden';
        setActiveImage(project.imageUrl);
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  // Combine imageUrl and gallery into a single, unique array for the thumbnails
  const galleryImages = Array.from(new Set([project.imageUrl, ...(project.gallery || [])]));

  return (
    <div 
      className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="glass-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-light/70 hover:text-light transition-colors z-10"
          aria-label="Close project details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <img src={activeImage || ''} alt={project.title} className="w-full h-auto max-h-[50vh] object-contain rounded-lg mb-4" />
        
        {galleryImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 ${
                  activeImage === img ? 'ring-2 ring-accent scale-105' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="flex justify-between items-start flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <p className="text-accent text-sm font-medium mb-2">{project.category}</p>
            <h2 className="text-3xl font-bold">{project.title}</h2>
          </div>
          {project.driveLink && (
            <a
              href={project.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 flex-shrink-0 bg-light/10 text-light font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-light/20 hover:scale-105 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>View on Drive</span>
            </a>
          )}
        </div>

        <p className="text-light/90 leading-relaxed">{project.detailedDescription}</p>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ProjectModal;