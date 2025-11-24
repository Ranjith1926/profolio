import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function scrollToSection(sectionId: string) {
  const element = document.querySelector(sectionId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}

export function createParticles(count: number = 30): HTMLDivElement[] {
  const particles: HTMLDivElement[] = [];

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particles.push(particle);
  }

  return particles;
}
