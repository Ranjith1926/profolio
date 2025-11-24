'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  className,
}) => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'text-center mb-16 transition-all duration-800',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      <p className="text-primary font-bold text-sm uppercase tracking-[3px] mb-4">{label}</p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
};
