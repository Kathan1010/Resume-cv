
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
            { name: 'JavaScript', icon: 'Code' },
            { name: 'Arduino', icon: 'Code' },
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
            { name: 'SQL', icon: 'Database' },
            { name: 'MongoDB', icon: 'Database' },
            { name: 'Node.js', icon: 'Server' },
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
    {
        title: 'Soft Skills',
        skills: [
            { name: 'Team Collaboration', icon: 'Users' },
            { name: 'Effective Communication', icon: 'MessageCircle' },
            { name: 'Problem Solving', icon: 'Brain' },
            { name: 'Adaptability', icon: 'Zap' },
            { name: 'Time Management', icon: 'Clock' },
            { name: 'Creativity', icon: 'Lightbulb' },
            { name: 'Leadership', icon: 'Star' },
            { name: 'Target Oriented', icon: 'CheckCircle' },
            { name: 'Consistency', icon: 'Repeat' },
        ]
    }
];

interface Experience {
  company: string;
  role: string;
  date: string;
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    company: 'Param Software',
    role: 'Intern',
    date: 'Sept - 06 -2025 To Oct - 06 -2025',
    responsibilities: [
      'Architected and implemented a scalable microservices backend with Django and Next.js.',
      'Collaborated with product managers and designers to translate requirements into technical solutions.',
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
        institution: 'RV College of Engineering',
        degree: 'Bachelor of Engineering in Computer Science and Engineering with a specialization in AI & ML',
        date: '2024 - Present',
        description: 'Focused on artificial intelligence and machine learning and data science.'
    },
]
