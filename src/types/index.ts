export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  icon: string;
  type: 'phone' | 'email';
  value: string;
  href: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  badge?: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  imageText: string;
  liveUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  grade: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
