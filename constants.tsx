

import { Project, Certificate, TechItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'spotlight',
    title: 'Spotlyte',
    description: 'An innovative advertising platform designed to transform digital advertising in emerging markets.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['UX/UI', 'Advertising'],
    link: '#',
    badge: 'Coming Soon'
  },
  {
    id: 'gnc-perfume',
    title: 'G\u00A0&\u00A0C Perfume Store',
    description: 'A personal e-commerce project focused on building a clean, responsive, and visually engaging shopping experience.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Frontend', 'React'],
    link: '#'
  },
  {
    id: 'fjko-law',
    title: 'FJKO Law Firm',
    description: 'Establishing a digital presence for FJKO that centers on clarity, accessibility, and professional trust.',
    image: '/firm.png',
    tags: ['UX/UI', 'Legal'],
    link: '#'
  },
  {
    id: 'bluepulse-travel',
    title: 'BluePulse Travel Agency',
    description: 'A modern travel booking platform designed to provide seamless adventure discovery and vacation planning.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    tags: ['UX/UI', 'Web Design'],
    link: 'http://bluepulsetraveltours.com'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'c1',
    title: 'Digital marketing course',
    issuer: '02 academy',
    year: '2025',
    link: 'digi.png',
    icon: 'school'
  },

  {
    id: 'c2',
    title: 'Software Development bootcamp',
    issuer: 'GoMyCode',
    year: '2025',
    link: '#',
    icon: 'code'
  },

  {
    id: 'c3',
    title: 'Complete UI/UX design, Figma',
    issuer: 'Udemy',
    year: '2024',
    link: 'udemy.png',
    icon: 'brush'
  }
];

export const TECH_STACK: TechItem[] = [
  {
    name: 'FIGMA',
    fullName: 'Figma',
    tags: 'Ideation · Collaborate · Design · Prototype',
    iconType: 'figma',
    icon: 'brush',
    color: 'text-[#A259FF]'
  },
  {
    name: 'ADOBE ILLUSTRATOR',
    fullName: 'Adobe Illustrator',
    tags: 'Brand Design · Visual Design · Vector Assets',
    iconType: 'illustrator',
    icon: 'palette',
    color: 'text-[#FF9A00]'
  },
  {
    name: 'ADOBE INDESIGN',
    fullName: 'Adobe InDesign',
    tags: 'Editorial Layout · Typography · Print & Specs',
    iconType: 'indesign',
    icon: 'menu_book',
    color: 'text-[#FF3366]'
  },
  {
    name: 'CLAUDE',
    fullName: 'Anthropic Claude',
    tags: 'Ideation ',
    iconType: 'claude',
    icon: 'psychology',
    color: 'text-[#CC785C]'
  },
  {
    name: 'VS CODE',
    fullName: 'Visual Studio Code',
    tags: 'Front-End Coding · React · Debugging',
    iconType: 'vscode',
    icon: 'terminal',
    color: 'text-[#007ACC]'
  },
  {
    name: 'LOVABLE',
    fullName: 'Lovable',
    tags: 'Vibecoding · Ideation',
    iconType: 'lovable',
    icon: 'favorite',
    color: 'text-[#FF5722]'
  },
  {
    name: 'VERCEL',
    fullName: 'Vercel',
    tags: 'Hosting Projects · Deployment',
    iconType: 'vercel',
    icon: 'change_history',
    color: 'text-neutral-900'
  }
];
