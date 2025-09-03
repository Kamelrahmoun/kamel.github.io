import React, { useState, useEffect } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('./assets/data/projects.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (e) {
        console.error("Failed to fetch projects:", e);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);


  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const renderContent = () => {
    if (isLoading) {
      return <p className="text-center text-light/70">Loading projects...</p>;
    }

    if (error) {
      return <p className="text-center text-accent">{error}</p>;
    }

    if (projects.length === 0) {
      return <p className="text-center text-light/70">No projects to display at the moment.</p>;
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="reveal reveal-up" style={{'--delay': `${index * 100}ms`} as React.CSSProperties}>
            <ProjectCard 
              project={project} 
              onClick={() => handleOpenModal(project)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Section id="projects">
        <div className="text-center mb-12 reveal reveal-up">
          <h2 className="text-4xl font-bold">My Portfolio</h2>
          <p className="text-lg text-light/70 mt-2">A selection of my favorite projects.</p>
        </div>
        {renderContent()}
      </Section>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default Projects;