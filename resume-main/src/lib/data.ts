interface Skill {
    name: string;
    icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'C++', icon: 'Code' },
            { name: 'C', icon: 'Code' },
            { name: 'Python', icon: 'Code' },
            { name: 'TypeScript', icon: 'Code' },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'GitHub', icon: 'GitCommit' },
            { name: 'Git', icon: 'GitBranch' },
            { name: 'VS Code', icon: 'Code' },
            { name: 'Jupyter Notebook', icon: 'Code' },
            { name: 'Kaggle', icon: 'Cpu' },
            { name: 'Google Colab', icon: 'Code' },
            { name: 'Anaconda', icon: 'Code' },
            { name: 'Pandas', icon: 'BarChart' },
            { name: 'Numpy', icon: 'BarChart' },
            { name: 'Matplotlib', icon: 'Paintbrush' },
            { name: 'Django', icon: 'Server' },
            { name: 'Next.js', icon: 'Server' },
            { name: 'Tailwind CSS', icon: 'Paintbrush' },
        ],
    },
    {
        title: 'Concepts',
        skills: [
            { name: 'Data Science', icon: 'Database' },
            { name: 'API Development', icon: 'Server' },
            { name: 'Version Control (Git)', icon: 'GitBranch' },
            { name: 'Object-Oriented Programming (OOP)', icon: 'Cog' },
            { name: 'Data Interpretation', icon: 'BarChart' },
            { name: 'Deployment', icon: 'Server' },
        ],
    },
];

interface Experience {
  company: string;
  role: string;
  date: string;
  responsibilities: string[];
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
