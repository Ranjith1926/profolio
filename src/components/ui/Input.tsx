import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="mb-6">
        {label && (
          <label htmlFor={id} className="block mb-3 font-bold text-text-primary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full px-6 py-4 border-2 border-slate-200 rounded-xl font-sans text-base',
            'transition-all duration-300 bg-white',
            'focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
