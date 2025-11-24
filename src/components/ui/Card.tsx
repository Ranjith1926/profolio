import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, gradient = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300',
          hover && 'hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20',
          gradient && 'relative overflow-hidden',
          className
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
