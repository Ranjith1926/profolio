'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { CONTACT_INFO, TYPING_TEXT } from '@/constants/data';
import { useTypingEffect } from '@/hooks';

export const Hero: React.FC = () => {
  const typedText = useTypingEffect(TYPING_TEXT, 50, 1000);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-32 pb-16 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Subtitle */}
        <p className="text-primary font-bold text-sm uppercase tracking-[3px] mb-6 opacity-0 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]">
          Software Engineer
        </p>

        {/* Title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent opacity-0 animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards]">
          S Ranjith Kumar
        </h1>

        {/* Tagline with Typing Effect */}
        <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary mb-10 max-w-4xl mx-auto font-normal leading-relaxed opacity-0 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:forwards]">
          <span className="inline-block border-r-2 border-primary animate-blink">
            {typedText}
          </span>
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 justify-center mb-8 opacity-0 animate-fade-in-up [animation-delay:800ms] [animation-fill-mode:forwards]">
          {CONTACT_INFO.map((contact) => (
            <a
              key={contact.type}
              href={contact.href}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border-2 border-slate-200 hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 font-medium"
            >
              <span className="text-xl">{contact.icon}</span>
              <span className="text-sm sm:text-base">{contact.value}</span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up [animation-delay:1000ms] [animation-fill-mode:forwards]">
          <Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </Link>
          <Link href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
