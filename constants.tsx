
import { Project, Certificate, TechItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'spotlight',
    title: 'Spotlyte',
    description: 'End-to-end product design of spotlyte, a next generation LED taxi advertising platform, built to redefine outdoor advertising in Lagos through smart, mobile, high-impact digital displays.',
    image: '/spotlyte.png',
    tags: ['UX/UI', 'Figma'],
    link: '#',
    badge: 'Coming Soon'
  },
  {
    id: 'gnc-perfume',
    title: 'G\u00A0&\u00A0C Perfume Store',
    description: 'A personal e-commerce project focused on building a clean, responsive, and visually engaging shopping experience.',
    image: '/perf.png',
    tags: ['Frontend', 'React'],
    link: '#'
  },
  {
    id: 'fjko-law',
    title: 'FJKO Law Firm',
    description: 'Modern law firm website for FJKO designed to clearly communicate legal services, strengthen credibility and guide potential clients toward consultation and engagement',
    image: '/firm.png',
    tags: ['UX/UI', 'Figma'],
    link: '#'
  },
  {
    id: 'bluepulse-travel',
    title: 'BluePulse Travel Agency',
    description: 'A modern travel agency website for blue Pulse, built with a clean frontend experience that simplifies service discovery and encourages client bookings',
    image: '/agency.png',
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
  { name: 'HTML5', icon: 'html', color: 'text-orange-600' },
  { name: 'CSS3', icon: 'css', color: 'text-blue-600' },
  { name: 'JavaScript', icon: 'javascript', color: 'text-yellow-500' },
  { name: 'React', icon: 'code_blocks', color: 'text-cyan-500' },
  { name: 'Tailwind CSS', icon: 'brush', color: 'text-teal-500' },
  { name: 'Node.js', icon: 'terminal', color: 'text-green-600' },
  { name: 'Bootstrap', icon: 'grid_view', color: 'text-purple-600' },
  { name: 'Material UI', icon: 'widgets', color: 'text-blue-500' },
  { name: 'Vite', icon: 'bolt', color: 'text-yellow-400' }
];

