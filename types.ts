

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  badge?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link: string;
  icon: string;
}

export interface TechItem {
  name: string;
  fullName?: string;
  tags?: string;
  icon?: string;
  iconType?: string;
  color?: string;
}

export enum TabType {
  PROJECTS = 'Projects',
  CERTIFICATES = 'Certificates',
  TECH_STACK = 'Tech Stack'
}