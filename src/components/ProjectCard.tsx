import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="relative h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="glass px-3 py-1 rounded-full text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* <a
          href={project.link}
          className="inline-flex items-center text-purple-400 hover:text-purple-300"
        >
          View Project <ExternalLink className="ml-2 w-4 h-4" />
        </a> */}
      </div>
    </div>
  );
}