import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import type { Project } from '../data/projects';

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-96 lg:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 lg:from-gray-900/50 to-transparent"></div>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          {project.details && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Project Details</h4>
                <dl className="grid grid-cols-2 gap-4">
                  {project.details.client && (
                    <>
                      <dt className="text-gray-400">Client:</dt>
                      <dd className="text-gray-300">{project.details.client}</dd>
                    </>
                  )}
                  {project.details.role && (
                    <>
                      <dt className="text-gray-400">Role:</dt>
                      <dd className="text-gray-300">{project.details.role}</dd>
                    </>
                  )}
                  {project.details.duration && (
                    <>
                      <dt className="text-gray-400">Duration:</dt>
                      <dd className="text-gray-300">{project.details.duration}</dd>
                    </>
                  )}
                </dl>
              </div>
              
              {project.details.challenges && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Challenges & Solutions</h4>
                  <ul className="space-y-4">
                    {project.details.challenges.map((challenge, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-gray-300">{challenge}</p>
                          {project?.details?.solutions?.[index] && (
                            <p className="text-gray-400 mt-1">{project.details.solutions[index]}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-8">
            <div className="flex flex-wrap gap-2 mb-6">
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
      </div>
    </div>
  );
}