
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

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  repoLink: string;
  liveLink: string;
  image: string;
}

export const projectData: Project[] = [
  {
    title: 'Netflix UI Clone',
    description: 'A full Netflix Like UI Clone built purely with HTML and CSS',
    technologies: ['HTML', 'CSS'],
    link: 'https://netflix-ui-clone-neon-two.vercel.app/',
    repoLink: 'https://github.com/Kathan1010/netflix-ui-clone',
    liveLink: 'https://netflix-ui-clone-neon-two.vercel.app/',
    image: 'project-ecommerce',
  },
  {
    title: 'Full 3D Web based Golf Game',
    description: 'A web-based golf game featuring 3D graphics and real-time proper feel and functionality, built with Three.js, WebSocket, and Next.js.',
    technologies: ['Three.js', 'WebSocket', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel', 'stable Diffusion'],
    link: 'https://mini-golf-final-ten.vercel.app/',
    repoLink: 'https://github.com/Kathan1010/Mini-Golf-Final-main',
    liveLink: 'https://mini-golf-final-ten.vercel.app/',
    image: 'project-dashboard',
  },
  {
    title: 'Revamping: A modern web based image gallery',
    description: 'Revamping: A modern, professional image gallery platform',
    technologies: ['React18', 'vite', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    link: 'https://revamped-image-gallery.vercel.app/',
    repoLink: 'https://github.com/Kathan1010/Revamped-Image-Gallery-main',
    liveLink: 'https://revamped-image-gallery.vercel.app/',
    image: 'project-social',
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
