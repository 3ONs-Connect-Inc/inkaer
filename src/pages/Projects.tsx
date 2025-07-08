
import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedSubdomain, setSelectedSubdomain] = useState('all');

  const engineeringDomains = [
    { value: 'all', label: 'All Domains' },
    { value: 'mechanical', label: 'Mechanical Engineering' },
    { value: 'electrical', label: 'Electrical and Mechatronics' },
    { value: 'civil', label: 'Civil / Structural' },
    { value: 'software', label: 'Software (Backend)' },
    { value: 'uiux', label: 'UI/UX (Product Usability Design)' },
    { value: 'rf', label: 'Radio Frequency (RF)' },
    { value: 'antenna', label: 'Antenna' },
    { value: 'embedded', label: 'Embedded' },
    { value: 'aerospace', label: 'Aerospace' },
  ];

  const subdomains = [
    { value: 'all', label: 'All Subdomains' },
    { value: '2d-design', label: '2D Design' },
    { value: '3d-design', label: '3D Design' },
    { value: 'assembly-drawing', label: 'Assembly Drawing' },
    { value: 'simulation', label: 'Simulation' },
    { value: 'analysis', label: 'Analysis' },
    { value: 'prototyping', label: 'Prototyping' },
  ];

  const allProjects = [
    {
      title: "Modular Drone Frame",
      category: "Mechanical Engineering",
      subdomain: "3d-design",
      difficulty: "Beginner",
      duration: "2-3 hrs", 
      participants: 23,
      rating: 4.2,
      description: "Design and prototype a modular drone frame system with interchangeable components.",
      tags: ["CAD", "Drone", "Modular"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      author: "Daniel Brown",
      comments: 18
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "Mechanical Engineering",
      subdomain: "simulation",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Cathy Lee",
      comments: 25
    },
    {
      title: "Cooling Plate Simulation",
      category: "Mechanical Engineering", 
      subdomain: "analysis",
      difficulty: "Elite",
      duration: "8-10 hrs",
      participants: 78,
      rating: 4.9,
      description: "Advanced computational fluid dynamics simulation for cooling plate optimization.",
      tags: ["CFD", "Simulation", "Thermal"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Ivy Timmons",
      comments: 31
    },
    {
      title: "Bracket Fatigue Test",
      category: "Civil / Structural",
      subdomain: "analysis",
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

  const filteredProjects = allProjects.filter(project => {
    const domainMatch = selectedDomain === 'all' || project.category.toLowerCase().includes(selectedDomain);
    const subdomainMatch = selectedSubdomain === 'all' || project.subdomain === selectedSubdomain;
    return domainMatch && subdomainMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Elite': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        <LoggedInNavbar />
        
        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-4">
                Engineering Projects
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
                Explore our collection of engineering challenges and portfolio projects.
              </p>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              <div>
                <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                  Engineering Domain
                </label>
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-gray-200 font-sora">
                    <SelectValue placeholder="Select Domain" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border-gray-200">
                    {engineeringDomains.map((domain) => (
                      <SelectItem key={domain.value} value={domain.value} className="font-sora">
                        {domain.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                  Subdomain
                </label>
                <Select value={selectedSubdomain} onValueChange={setSelectedSubdomain}>
                  <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-gray-200 font-sora">
                    <SelectValue placeholder="Select Subdomain" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border-gray-200">
                    {subdomains.map((subdomain) => (
                      <SelectItem key={subdomain.value} value={subdomain.value} className="font-sora">
                        {subdomain.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold font-sora ${getDifficultyColor(project.difficulty)}`}>
                        {project.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-inkaer-blue font-sora font-semibold uppercase tracking-wide">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-sora font-bold text-gray-900 group-hover:text-inkaer-blue transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 font-sora leading-relaxed text-sm">
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
                        <span>{project.participants}</span>
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
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-sora font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-2 rounded-lg group transition-all duration-200">
                      Start Challenge
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500 font-sora">
                  No projects found matching your filters.
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
