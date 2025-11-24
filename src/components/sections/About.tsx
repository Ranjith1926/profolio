'use client';

import React from 'react';
import { Section, SectionHeader } from '@/components/ui';
import { ABOUT_TEXT } from '@/constants/data';
import { useScrollAnimation } from '@/hooks';

export const About: React.FC = () => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <Section id="about">
      <SectionHeader
        label="Get To Know Me"
        title="About Me"
        description="Passionate about creating exceptional digital experiences"
      />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-lg shadow-primary/10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-lg md:text-xl leading-relaxed text-text-secondary">
          {ABOUT_TEXT.split(/(\*\*.*?\*\*)/).map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={index} className="text-text-primary font-bold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <span key={index}>{part}</span>;
          })}
        </p>
      </div>
    </Section>
  );
};
