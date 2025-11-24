import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: 'white' | 'gray';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, background = 'white', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'py-24 px-4 relative',
          background === 'gray' && 'bg-slate-50',
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';
