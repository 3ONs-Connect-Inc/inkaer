
import React from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import ShowWhatYouGotSection from '@/components/ShowWhatYouGotSection';
import ProjectSection from '@/components/ProjectSection';
import Footer from '@/components/Footer';

const LoginLanding = () => {
  // Portfolio projects ready for review
  const portfolioProjects = [
    {
      title: "Automated Assembly Line Design",
      category: "Mechanical Engineering",
      difficulty: "Advanced",
      duration: "Submitted 2 days ago",
      participants: 1,
      rating: 4.8,
      description: "Complete mechanical design of an automated assembly line with robotic integration and quality control systems.",
      tags: ["CAD", "Automation", "Robotics"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Sarah Mitchell",
      comments: 3,
      type: "portfolio" as const
    },
    {
      title: "Wind Turbine Blade Optimization", 
      category: "Aerospace Engineering",
      difficulty: "Expert",
      duration: "Submitted 1 week ago",
      participants: 1,
      rating: 4.9,
      description: "Aerodynamic optimization of wind turbine blades using computational fluid dynamics and structural analysis.",
      tags: ["CFD", "Optimization", "Renewable Energy"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Marcus Chen",
      comments: 7,
      type: "portfolio" as const
    }
  ];

  // Featured challenges
  const featuredChallenges = [
    {
      title: "Project Alpha",
      category: "Backend Engineering",
      difficulty: "Intermediate",
      duration: "4-5 hrs",
      participants: 34,
      rating: 4.5,
      description: "Advanced backend system with microservices architecture and real-time data processing capabilities.",
      tags: ["Python", "Docker", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      author: "John Stone",
      comments: 12,
      type: "challenge" as const
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "CAD Design",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Cathy Lee",
      comments: 25,
      type: "challenge" as const
    }
  ];

  const newProjects = [
    {
      title: "Modular Drone Frame",
      category: "Mechanical Design",
      difficulty: "Beginner",
      duration: "2-3 hrs", 
      participants: 23,
      rating: 4.2,
      description: "Design and prototype a modular drone frame system with interchangeable components.",
      tags: ["CAD", "Drone", "Modular"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      author: "Daniel Brown",
      comments: 18,
      type: "challenge" as const
    }
  ];

  const myProjects = [
    {
      title: "Cooling Plate Simulation",
      category: "Thermal Analysis", 
      difficulty: "Elite",
      duration: "8-10 hrs",
      participants: 78,
      rating: 4.9,
      description: "Advanced computational fluid dynamics simulation for cooling plate optimization.",
      tags: ["CFD", "Simulation", "Thermal"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Ivy Timmons",
      comments: 31,
      type: "challenge" as const
    }
  ];

  const starredProjects = [
    {
      title: "Bracket Fatigue Test",
      category: "Structural Analysis",
      difficulty: "Intermediate", 
      duration: "5-7 hrs",
      participants: 45,
      rating: 4.4,
      description: "Comprehensive fatigue analysis and testing protocol for structural bracket components.",
      tags: ["FEA", "Testing", "Structural"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Kevin Carpenter",
      comments: 10,
      type: "challenge" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        <LoggedInNavbar />
        
        {/* Welcome Message */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900">
                Welcome back! 👋
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
                Continue your engineering journey and showcase your skills with new challenges.
              </p>
            </div>
          </div>
        </section>

        <ShowWhatYouGotSection />
        
        <div className="space-y-8">
          <ProjectSection 
            title="Featured Portfolio Projects" 
            projects={portfolioProjects}
            projectType="portfolio"
          />
          <ProjectSection 
            title="Featured Challenges" 
            projects={featuredChallenges}
            projectType="challenge"
          />
          <ProjectSection 
            title="New Challenges" 
            projects={newProjects}
            projectType="challenge"
          />
          <ProjectSection 
            title="My Projects" 
            projects={myProjects}
            projectType="challenge"
          />
          <ProjectSection 
            title="Starred Projects" 
            projects={starredProjects}
            projectType="challenge"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LoginLanding;
