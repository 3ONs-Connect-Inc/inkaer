import React from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import ShowWhatYouGotSection from '@/components/ShowWhatYouGotSection';
import ProjectSection from '@/components/ProjectSection';
import Footer from '@/components/Footer';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const LoginLanding = () => {
  // Sample project data
  const featuredProjects = [
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
      comments: 12
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
      comments: 25
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
      comments: 18
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
      comments: 31
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
      comments: 10
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Static Background */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid className="absolute inset-0 size-full" />
      </div>

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
            title="Featured Projects" 
            projects={featuredProjects}
          />
          <ProjectSection 
            title="New Projects" 
            projects={newProjects}
          />
          <ProjectSection 
            title="My Projects" 
            projects={myProjects}
          />
          <ProjectSection 
            title="Starred Projects" 
            projects={starredProjects}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LoginLanding;
