import React from 'react';
import { ProjectCard } from './ProjectCard';
import { FeaturedProject } from './FeaturedProject';
import { projects } from '../data/projects';

export function Work() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 flex justify-center text-center"  
   style={{
    background: 'linear-gradient(90deg, #ff8660, #d5491d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}>MY PERSONAL PROJECTS</h2>
        
        {featuredProject && (
          <div className="mb-16">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}