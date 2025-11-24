'use client';

import React from 'react';
import { Section, SectionHeader } from '@/components/ui';
import { PROJECTS } from '@/constants/data';
import { useScrollAnimation } from '@/hooks';

interface ProjectItemProps {
  project: (typeof PROJECTS)[number];
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${
        project.featured ? 'lg:col-span-2' : ''
      } transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 group ${
          project.featured
            ? 'border-2 border-primary bg-gradient-to-br from-indigo-50/50 to-purple-50/50'
            : 'border-slate-200'
        }`}
      >
        {/* Project Image/Badge */}
        <div className="h-48 bg-gradient-primary flex items-center justify-center text-white font-black text-5xl relative overflow-hidden">
          {project.imageText}
          <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-700 animate-shimmer" />
        </div>

        {/* Project Content */}
        <div className="p-8">
          {project.badge && (
            <span className="inline-block bg-gradient-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              {project.badge}
            </span>
          )}

          <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
            {project.title}
          </h3>

          <p className="text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1.5 bg-primary text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects" background="gray">
      <SectionHeader
        label="My Work"
        title="Featured Projects"
        description="Showcasing some of my best work"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};
