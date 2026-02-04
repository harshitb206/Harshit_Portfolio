
import { Project, SkillCategory, Experience, Achievement, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '001',
    title: 'Ghar Ghar Gyaan',
    type: 'Empowerment Protocol',
    description: 'An AI-powered legal & health rights advisor delivering multilingual support via web, SMS, and voice.',
    stack: ['Streamlit', 'Flask', 'Twilio', 'gTTS'],
    link: 'https://github.com/harshitb206/GharGharGyaan',
    image: '/images/G3.jpeg'
  },
  {
    id: '002',
    title: 'Nivaran',
    type: 'Grievance Resolution',
    description: 'A centralized platform for citizens to report and track resolution of public grievances effectively.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: 'https://github.com/harshitb206/Nivaran',
    image: '/images/Nivaran.jpeg'
  },
  {
    id: '003',
    title: 'EcoVerse',
    type: 'Sustainability AI',
    description: 'Platform focusing on ecological tracking and promoting sustainable practices through data-driven insights.',
    stack: ['Python', 'TensorFlow', 'Flask', 'React'],
    link: 'https://github.com/harshitb206/ECOVERSE',
    image: '/images/Ecoverse.jpeg'
  },
  {
    id: '004',
    title: 'Safe Drive',
    type: 'Computer Vision',
    description: 'IoT-based Drowsiness Detection System using real-time sensors and vision tracking to prevent accidents.',
    stack: ['OpenCV', 'Mediapipe', 'Raspberry Pi', 'Python'],
    link: 'https://github.com/harshitb206/SafeDrive',
    image: '/images/SAFE.jpeg'
  },
  {
    id: '005',
    title: 'Expenza',
    type: 'Financial Intelligence',
    description: 'AI-driven expense tracker that categorizes spending and provides predictive budget analysis.',
    stack: ['React', 'Firebase', 'Scikit-Learn', 'Node.js'],
    link: 'https://github.com/harshitb206/Expenza',
    image: '/images/expenza.jpeg'
  },
  {
    id: '006',
    title: 'HIP',
    type: 'Health Intelligence',
    description: 'Health Intelligence Protocol designed to monitor and analyze patient vitals with predictive alerting.',
    stack: ['NLP', 'Python', 'Flask', 'Docker'],
    link: 'https://github.com/harshitb206/HIP',
    image: '/images/hip.jpeg'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['C/C++', 'Java', 'Python']
  },
  {
    title: 'Core CS & Problem Solving',
    skills: ['DSA', 'OOP', 'OS', 'DBMS', 'Computer Organization', 'Software Engineering']
  },
  {
    title: 'Web Technologies',
    skills: ['HTML/CSS', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'Oracle SQL']
  },
  {
    title: 'ML/AI',
    skills: ['Scikit-Learn', 'OpenCV', 'Pipelines', 'Generative AI']
  },
  {
    title: 'Other Tools',
    skills: ['Git/GitHub', 'Google Cloud', 'VS Code', 'Google Colab', 'Twilio']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Innogeeks 3.0 National Hackathon',
    position: '1st Prize',
    prize: '₹70,000',
    details: 'Developed a cutting-edge AI/ML & IoT-based Drowsiness Detection System using real-time sensors and vision tracking.',
    date: '2024'
  },
  {
    title: 'Hackowasp 7.0 Ideathon - TIET',
    position: '2nd Prize',
    details: 'Built "Ghar Ghar Gyaan," an AI-powered legal & health rights advisor delivering multilingual support via web, SMS, and voice.',
    date: '2024'
  },
  {
    title: 'Hack-O-Mania’25 – NMIMS Chandigarh',
    position: '3rd Prize',
    prize: '₹5,000',
    details: 'Developed an AI-Powered Legal Document Analyzer with Fraud Detection for analyzing contracts and identifying fraudulent clauses.',
    date: '2025'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'ML Intern',
    organization: 'Sensation Software Pvt. Ltd.',
    duration: 'Jun \'25 - Jul \'25',
    description: ['Built regression models for car valuation.', 'Developed AI expense trackers.']
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Amity University Punjab',
    location: 'Mohali, India',
    duration: '2023 — 2027',
    details: 'Current GPA: 7.4'
  }
];

export const EMAIL = 'harshitbhatia206@gmail.com';
export const GITHUB_URL = 'https://github.com/harshitb206';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/harshit-bhatia206/';
