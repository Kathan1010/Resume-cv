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
    company: 'Param Software',
    role: 'Intern',
    date: 'Sept - 01 - 2025 To Oct - 06 - 2025',
    responsibilities: [
      'Architected and implemented a scalable microservices backend with Next.js and API routes',
      'Collaborated with product managers and designers to translate requirements into technical solutions.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Vercel', 'Tailwind CSS'],
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
