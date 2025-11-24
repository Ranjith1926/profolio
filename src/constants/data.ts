import { NavLink, ContactInfo, Stat, Skill, ExperienceItem, Project, Education } from '@/types';
import { Mail, Github, Linkedin } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: '📞',
    type: 'phone',
    value: '+91 7539901926',
    href: 'tel:+917539901926',
  },
  {
    icon: '✉️',
    type: 'email',
    value: 's.ranjithkumaroffl@gmail.com',
    href: 'mailto:s.ranjithkumaroffl@gmail.com',
  },
];

export const STATS: Stat[] = [
  { value: 4, label: 'Years Experience', suffix: '+' },
  { value: 5, label: 'Major Projects', suffix: '+' },
  { value: 15, label: 'Technologies', suffix: '+' },
  { value: 100, label: 'Success Rate', suffix: '%' },
];

export const SKILLS: Skill[] = [
  {
    category: 'Frontend Development',
    skills: ['React.js', 'Next.js 15', 'TypeScript', 'JavaScript (ES6+)', 'Mantine UI', 'Tailwind CSS'],
  },
  {
    category: 'Mobile Development',
    skills: ['React Native'],
  },
  {
    category: 'State Management',
    skills: ['Redux', 'Redux-Saga'],
  },
  {
    category: 'Developer Tools',
    skills: ['JIRA', 'Chrome DevTools'],
  },
  {
    category: 'APIs & Integrations',
    skills: ['Spotify API', 'Apple Music API', 'Stripe', 'Google Maps', 'YouTube API'],
  },
  {
    category: 'Web Technologies',
    skills: ['HTML5', 'CSS3', 'REST API', 'PWA'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    company: 'Tender Software Pvt Ltd',
    period: 'Apr 2025 – Present',
    responsibilities: [
      'Building scalable SaaS architectures using Next.js and TypeScript',
      'Implementing modern frontend solutions with a focus on performance and user experience',
      'Collaborating with cross-functional teams to deliver enterprise-level applications',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'SPK Hasten Tech',
    period: 'Aug 2021 – Apr 2025',
    responsibilities: [
      'Developed and maintained web and mobile applications using React.js and React Native',
      'Handled end-to-end development lifecycle including planning, implementation, debugging, and deployment',
      'Worked with Agile methodology, participating in sprint planning and daily standups',
      'Integrated third-party APIs and services to enhance application functionality',
      'Collaborated with designers and backend developers to create seamless user experiences',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'planning-beats',
    title: 'Planning Beats',
    badge: 'Full SaaS Platform',
    description:
      'A comprehensive multi-tenant SaaS Event Management Platform designed for DJs, event planners, and vendors. Led the complete architecture and implementation, including SSR with Next.js, authentication & RBAC with NextAuth, payment processing via Stripe, and seamless integrations with Spotify, Apple Music, and YouTube APIs. Built a drag-and-drop event builder, PDF export system, CRM module, financial dashboard, and calendar management system.',
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Redux-Saga',
      'Mantine UI',
      'Tailwind CSS',
      'Stripe',
      'Spotify API',
      'Apple Music API',
      'FullCalendar',
      'jsPDF',
      'Google Maps',
    ],
    featured: true,
    imageText: 'PB',
    liveUrl: 'https://beta.planningbeats.com',
  },
  {
    id: 'helpdesk',
    title: 'Helpdesk System',
    description:
      'Comprehensive employee management system featuring payroll processing, attendance tracking, and ticketing system for internal support.',
    technologies: ['React.js', 'Redux'],
    imageText: 'HD',
    liveUrl: 'http://helpdesk.spk-hasten.com',
  },
  {
    id: 'stationery-mart',
    title: 'Stationery Mart',
    description:
      'Full-featured e-commerce platform with both web and mobile applications for online stationery shopping.',
    technologies: ['React.js', 'React Native'],
    imageText: 'SM',
    liveUrl: 'https://ncd-uat.adapptlabs.com',
  },
  {
    id: 'location-tracker',
    title: 'Location Tracker',
    description: 'Real-time GPS tracking mobile application for location monitoring and route tracking.',
    technologies: ['React Native', 'Google Maps API'],
    imageText: 'LT',
    liveUrl: 'https://ncd-uat.adapptlabs.com',
  },
  {
    id: 'tb-surveillance',
    title: 'TB Surveillance (WHO)',
    description:
      'National health reporting application for tuberculosis surveillance developed for the World Health Organization.',
    technologies: ['React Native'],
    imageText: 'TB',
    liveUrl: 'https://ncd-uat.adapptlabs.com',
  },
];

export const EDUCATION: Education = {
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  institution: 'Pondicherry University',
  grade: 'CGPA: 70%',
};

export const SOCIAL_LINKS = [
  {
    name: 'Email',
    href: 'mailto:s.ranjithkumaroffl@gmail.com',
    ariaLabel: 'Email',
    icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Ranjith1926',
    ariaLabel: 'GitHub',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ranjith-kumar-718091326',
    ariaLabel: 'LinkedIn',
    icon: Linkedin,
  },
];

export const TYPING_TEXT =
  'Building scalable web & mobile experiences — Specialized in React, Next.js & SaaS platforms.';

export const ABOUT_TEXT = `I'm a passionate Software Engineer with over 4 years of experience building modern, scalable web and mobile applications. My expertise lies in React.js, Next.js, and React Native, with a strong focus on creating seamless user experiences and robust SaaS architectures. I've successfully architected and delivered a comprehensive multi-tenant SaaS platform, handling everything from server-side rendering and authentication to complex API integrations with services like Spotify, Apple Music, and Stripe. I thrive in Agile environments, excel at sprint planning and debugging, and am committed to writing clean, maintainable code that scales. Whether it's building enterprise-level applications or innovative mobile solutions, I bring technical excellence and creative problem-solving to every project.`;
