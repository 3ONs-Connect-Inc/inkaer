
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';

const FeaturedProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Data Pipeline",
      category: "Backend Engineering",
      difficulty: "Advanced",
      duration: "3-5 hours",
      participants: 1247,
      rating: 4.8,
      description: "Build a scalable data processing pipeline that handles millions of events per minute using modern streaming technologies.",
      tags: ["Kafka", "Redis", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Mobile Banking Interface",
      category: "Frontend Development", 
      difficulty: "Intermediate",
      duration: "4-6 hours",
      participants: 892,
      rating: 4.9,
      description: "Design and implement a secure, responsive banking interface with advanced UX patterns and accessibility features.",
      tags: ["React", "TypeScript", "Security", "UX"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      title: "ML Recommendation Engine",
      category: "Machine Learning",
      difficulty: "Expert",
      duration: "6-8 hours", 
      participants: 634,
      rating: 4.7,
      description: "Create an intelligent recommendation system that adapts to user behavior and preferences in real-time.",
      tags: ["Python", "TensorFlow", "APIs", "Analytics"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Expert': return 'text-red-600 bg-red-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
            Take on real engineering challenges that top companies use to evaluate talent. Each project is designed by industry experts.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold font-sora ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-inkaer-blue font-sora font-semibold uppercase tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-sora font-bold text-gray-900 group-hover:text-inkaer-blue transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-sora leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 font-sora">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>{project.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-sora font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-inkaer hover:opacity-90 text-white font-sora font-semibold py-3 rounded-full group transition-all duration-200">
                  Start Challenge
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-2 border-inkaer-blue text-inkaer-blue hover:bg-inkaer-blue hover:text-white font-sora font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
