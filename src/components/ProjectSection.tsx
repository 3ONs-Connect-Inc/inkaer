
import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectSectionProps {
  title?: string;
  projects?: Array<{
    title: string;
    category: string;
    difficulty: string;
    duration: string;
    participants: number;
    rating: number;
    description: string;
    tags: string[];
    image: string;
    author: string;
    comments: number;
    type: 'challenge' | 'portfolio';
  }>;
  projectType?: 'challenge' | 'portfolio';
}

const projects = [
  {
    title: "AI-Powered Chatbot",
    category: "Artificial Intelligence",
    difficulty: "Intermediate",
    duration: "2 Weeks",
    participants: 35,
    rating: 4.7,
    description: "Build a smart chatbot using natural language processing and machine learning techniques.",
    tags: ["AI", "NLP", "Machine Learning", "Python"],
    image: "/lovable-uploads/project1.jpg",
    author: "John Doe",
    comments: 12,
    type: 'challenge' as const
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    difficulty: "Advanced",
    duration: "4 Weeks",
    participants: 52,
    rating: 4.9,
    description: "Create a fully functional e-commerce platform with user authentication, product catalog, and shopping cart.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "/lovable-uploads/project2.jpg",
    author: "Jane Smith",
    comments: 23,
    type: 'portfolio' as const
  },
  {
    title: "Mobile Game Development",
    category: "Mobile Development",
    difficulty: "Intermediate",
    duration: "3 Weeks",
    participants: 41,
    rating: 4.6,
    description: "Develop a mobile game for iOS and Android using Unity and C#.",
    tags: ["Unity", "C#", "Mobile Game", "iOS", "Android"],
    image: "/lovable-uploads/project3.jpg",
    author: "Mike Johnson",
    comments: 8,
    type: 'challenge' as const
  },
  {
    title: "Data Analysis Dashboard",
    category: "Data Science",
    difficulty: "Beginner",
    duration: "1 Week",
    participants: 68,
    rating: 4.8,
    description: "Design an interactive dashboard to visualize and analyze large datasets using Python and Tableau.",
    tags: ["Python", "Tableau", "Data Analysis", "Visualization"],
    image: "/lovable-uploads/project4.jpg",
    author: "Emily Brown",
    comments: 15,
    type: 'portfolio' as const
  },
  {
    title: "Cloud Computing Project",
    category: "Cloud Computing",
    difficulty: "Advanced",
    duration: "5 Weeks",
    participants: 39,
    rating: 4.5,
    description: "Deploy and manage a scalable web application on AWS or Azure using Docker and Kubernetes.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "Cloud"],
    image: "/lovable-uploads/project5.jpg",
    author: "David Wilson",
    comments: 29,
    type: 'challenge' as const
  },
  {
    title: "Cybersecurity Challenge",
    category: "Cybersecurity",
    difficulty: "Elite",
    duration: "6 Weeks",
    participants: 27,
    rating: 4.9,
    description: "Participate in a cybersecurity challenge to identify and mitigate vulnerabilities in a simulated network environment.",
    tags: ["Cybersecurity", "Network Security", "Ethical Hacking", "Penetration Testing"],
    image: "/lovable-uploads/project6.jpg",
    author: "Sarah Lee",
    comments: 11,
    type: 'challenge' as const
  }
];

const ProjectSection: React.FC<ProjectSectionProps> = ({ 
  title = "Featured Projects & Challenges", 
  projects: customProjects,
  projectType 
}) => {
  const displayProjects = customProjects || projects;

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-sora font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
            Discover exciting engineering projects and challenges from our community
          </p>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              difficulty={project.difficulty}
              duration={project.duration}
              participants={project.participants}
              rating={project.rating}
              description={project.description}
              tags={project.tags}
              image={project.image}
              author={project.author}
              comments={project.comments}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
