'use client';

import React from 'react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { EXPERIENCE } from '@/constants/data';
import { useScrollAnimation } from '@/hooks';

interface ExperienceItemProps {
  exp: (typeof EXPERIENCE)[number];
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp, index }) => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative md:pl-16 transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-3.5 top-9 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg shadow-primary/50 hidden md:block" />

      <Card hover className="group">
        <div className="mb-6">
          <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
            {exp.title}
          </h3>
          <p className="text-primary font-bold text-lg mb-1">{exp.company}</p>
          <p className="text-text-secondary font-semibold text-sm">{exp.period}</p>
        </div>

        <ul className="space-y-3">
          {exp.responsibilities.map((responsibility, respIndex) => (
            <li
              key={respIndex}
              className="flex gap-3 text-text-secondary leading-relaxed"
            >
              <span className="text-primary font-bold text-xl mt-0.5 flex-shrink-0">
                ▹
              </span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <SectionHeader
        label="My Journey"
        title="Work Experience"
        description="Professional roles and responsibilities"
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />

        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};
