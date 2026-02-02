
export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  status?: 'STABLE' | 'PENDING';
  link?: string;
  date?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  description: string[];
}

export interface Achievement {
  title: string;
  position: string;
  prize?: string;
  details: string;
  image?: string;
  date?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  details: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
  category: 'Professional' | 'Hackathon';
}
