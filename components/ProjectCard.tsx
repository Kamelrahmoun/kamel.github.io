import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="text-left glass-card rounded-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`View details for ${project.title}`}
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <p className="text-accent text-sm font-medium mb-1">{project.category}</p>
        <h3 className="text-xl font-bold mb-2 text-light">{project.title}</h3>
        <p className="text-light/70 text-base">{project.description}</p>
      </div>
    </button>
  );
};

export default ProjectCard;