import React from 'react';
import { SOCIAL_LINKS } from '@/constants/data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark text-white py-12 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={social.ariaLabel}
                className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-primary group"
              >
                <Icon className="w-6 h-6 text-white" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-white/70">
          Copyright © {new Date().getFullYear()} S Ranjith Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
