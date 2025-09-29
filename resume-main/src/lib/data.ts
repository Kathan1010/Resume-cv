import { Code, Server, Brain, type LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React & Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'HTML5 & CSS3', level: 99 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js & Express', level: 90 },
      { name: 'Python & Django', level: 75 },
      { name: 'SQL & NoSQL Databases', level: 85 },
      { name: 'REST & GraphQL APIs', level: 92 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Collaboration', level: 98 },
      { name: 'Project Management', level: 88 },
      { name: 'Communication', level: 92 },
    ],
  },
];

interface Experience {
  company: string;
  role: string;
  date: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    company: 'Tech Innovators Inc.',
    role: 'Senior Full-Stack Developer',
    date: 'Jan 2020 - Present',
    responsibilities: [
      'Led the development of a high-traffic e-commerce platform using Next.js and TypeScript.',
      'Architected and implemented a scalable microservices backend with Node.js and Docker.',
      'Mentored junior developers and conducted code reviews to maintain high code quality.',
      'Collaborated with product managers and designers to translate requirements into technical solutions.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    company: 'Creative Solutions Co.',
    role: 'Mid-Level Frontend Developer',
    date: 'Jun 2017 - Dec 2019',
    responsibilities: [
      'Developed and maintained responsive user interfaces for client websites using React.',
      'Improved website performance by 30% through code optimization and lazy loading.',
      'Integrated third-party APIs for payments, mapping, and social media.',
      'Worked in an Agile team, participating in daily stand-ups and sprint planning.',
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Sass', 'Webpack', 'Jest'],
  },
];


interface Education {
    institution: string;
    degree: string;
    date: string;
    description: string;
}

export const educationData: Education[] = [
    {
        institution: 'University of Technology',
        degree: 'Master of Science in Computer Science',
        date: '2015 - 2017',
        description: 'Focused on artificial intelligence and machine learning. Thesis on natural language processing.'
    },
    {
        institution: 'State University',
        degree: 'Bachelor of Science in Software Engineering',
        date: '2011 - 2015',
        description: 'Graduated with honors. President of the university coding club.'
    }
]
