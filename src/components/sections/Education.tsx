'use client';

import React from 'react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { EDUCATION } from '@/constants/data';
import { useScrollAnimation } from '@/hooks';

export const Education: React.FC = () => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <Section id="education">
      <SectionHeader
        label="Academic Background"
        title="Education"
        description="Building a strong foundation"
      />

      <div ref={ref} className="max-w-3xl mx-auto">
        <Card
          className={`text-center relative overflow-hidden transition-all duration-800 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Decorative Emoji */}
          <div className="absolute -top-8 -right-8 text-9xl opacity-5">🎓</div>

          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {EDUCATION.degree}
            </h3>
            <p className="text-primary font-bold text-xl mb-3">{EDUCATION.institution}</p>
            <p className="text-text-secondary text-lg">{EDUCATION.grade}</p>
          </div>
        </Card>
      </div>
    </Section>
  );
};
