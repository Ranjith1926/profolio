'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui';
import { STATS } from '@/constants/data';
import { useScrollAnimation } from '@/hooks';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  isVisible: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <div className="text-5xl font-black font-display bg-gradient-primary bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
};

interface StatItemProps {
  stat: (typeof STATS)[number];
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ stat, index }) => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <div ref={ref}>
      <Card
        hover
        className={`text-center shadow-lg transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
        <p className="text-text-secondary font-semibold mt-2">{stat.label}</p>
      </Card>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 -mt-12 mb-24 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, index) => (
          <StatItem key={index} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
};
