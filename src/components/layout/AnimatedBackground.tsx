'use client';

import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const particleCount = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-primary opacity-10 animate-float';

      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;

      fragment.appendChild(particle);
    }

    particlesRef.current.appendChild(fragment);
  }, []);

  return (
    <>
      {/* Gradient Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-pink-50/30" />

      {/* Animated Grid */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-move-bg">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Floating Particles */}
      <div
        ref={particlesRef}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      />

      {/* Pulse Effect */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/15 to-transparent animate-pulse-slow" />
      </div>
    </>
  );
};
