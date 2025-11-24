'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollTop } from '@/hooks';
import { cn } from '@/lib/utils';

export const ScrollToTop: React.FC = () => {
  const { showScrollTop, scrollToTop } = useScrollTop();

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 w-16 h-16 bg-gradient-primary text-white rounded-full',
        'shadow-lg shadow-primary/30 z-40 transition-all duration-300',
        'flex items-center justify-center group',
        showScrollTop
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-4'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
};
