'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollTop } from '@/hooks';
import { cn } from '@/lib/utils';

export const ScrollToTop: React.FC = () => {
  const { showScrollTop, scrollToTop, scrollProgress } = useScrollTop();

  // SVG circle properties
  const size = 64;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 w-16 h-16 z-40 transition-all duration-300',
        'flex items-center justify-center group',
        showScrollTop
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-4'
      )}
      aria-label="Scroll to top"
    >
      {/* Progress circle SVG */}
      <svg
        className="absolute inset-0 -rotate-90"
        width={size}
        height={size}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-primary/20"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-150"
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary, #6366f1)" />
            <stop offset="100%" stopColor="var(--color-secondary, #8b5cf6)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Inner button with icon */}
      <div className="w-12 h-12 bg-gradient-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center">
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </div>
    </button>
  );
};
