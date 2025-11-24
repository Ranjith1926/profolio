'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui';
import { STATS } from '@/constants/data';
import { useScrollAnimation } from '@/hooks';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { isVisible, ref } = useScrollAnimation();

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      const duration = 2000;
      const step = value / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, value, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl font-black font-display bg-gradient-primary bg-clip-text text-transparent">
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
        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
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
