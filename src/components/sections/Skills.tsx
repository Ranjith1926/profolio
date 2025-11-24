'use client';

import React from 'react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { SKILLS } from '@/constants/data';
import { useScrollAnimation } from '@/hooks';

interface SkillGroupItemProps {
  skillGroup: (typeof SKILLS)[number];
  index: number;
}

const SkillGroupItem: React.FC<SkillGroupItemProps> = ({ skillGroup, index }) => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <div ref={ref}>
      <Card
        hover
        gradient
        className={`group transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <h3 className="font-display text-xl font-bold text-text-primary mb-6">
          {skillGroup.category}
        </h3>
        <div className="flex flex-wrap gap-3">
          {skillGroup.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-4 py-2 bg-slate-50 border-2 border-slate-200 rounded-full text-sm font-semibold text-text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" background="gray">
      <SectionHeader
        label="My Expertise"
        title="Skills & Technologies"
        description="Tools and technologies I use to bring ideas to life"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skillGroup, index) => (
          <SkillGroupItem key={index} skillGroup={skillGroup} index={index} />
        ))}
      </div>
    </Section>
  );
};
