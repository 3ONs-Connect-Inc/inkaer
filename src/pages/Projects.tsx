import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Star, ArrowRight, Grid3X3, List } from 'lucide-react';

const Projects = () => {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedSubdomain, setSelectedSubdomain] = useState('all');
  const [selectedTags, setSelectedTags] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allProjects = [
    {
      title: "Modular Drone Frame",
      category: "MECHANICAL ENGINEERING",
      difficulty: "Beginner",
      duration: "2-3 hrs", 
      participants: 23,
      rating: 4.2,
      description: "Design and prototype a modular drone frame system with interchangeable components for enhanced flexibility and performance.",
      tags: ["CAD", "Drone", "Modular"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      author: "Daniel Brown",
      type: "challenge"
    },
    {
      title: "Smart Home IoT Dashboard", 
      category: "SOFTWARE (BACKEND)",
      difficulty: "Intermediate",
      duration: "4-6 hrs",
      participants: 67,
      rating: 4.5,
      description: "Full-stack web application for monitoring and controlling IoT devices in a smart home environment with real-time data visualization.",
      tags: ["React", "Node.js", "IoT"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Sarah Chen",
      type: "portfolio",
      rankLevel: "Silver"
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "MECHANICAL ENGINEERING",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements through advanced computational methods.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Cathy Lee",
      type: "challenge"
    },
    {
      title: "Cooling Plate Simulation",
      category: "MECHANICAL ENGINEERING", 
      difficulty: "Elite",
      duration: "8-10 hrs",
      participants: 78,
      rating: 4.9,
      description: "Advanced computational fluid dynamics simulation for cooling plate optimization in high-performance computing systems.",
      tags: ["CFD", "Simulation", "Thermal"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Ivy Timmons",
      type: "portfolio",
      rankLevel: "Diamond"
    },
    {
      title: "Bracket Fatigue Test",
      category: "CIVIL / STRUCTURAL",
      difficulty: "Intermediate", 
      duration: "5-7 hrs",
      participants: 45,
      rating: 4.4,
      description: "Comprehensive fatigue analysis and testing protocol for structural bracket components in aerospace applications.",
      tags: ["FEA", "Testing", "Structural"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Kevin Carpenter",
      type: "challenge"
    }
  ];

  const filteredProjects = allProjects.filter(project => {
    const tabMatch = activeTab === 'all' || 
      (activeTab === 'challenges' && project.type === 'challenge') ||
      (activeTab === 'portfolio' && project.type === 'portfolio');
    
    const domainMatch = selectedDomain === 'all' || project.category.toLowerCase().includes(selectedDomain);
    const difficultyMatch = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    
    return tabMatch && domainMatch && difficultyMatch;
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

  const getRankLevelColor = (rank: string) => {
    switch (rank) {
      case 'Bronze': return 'text-amber-700 bg-amber-100';
      case 'Silver': return 'text-gray-700 bg-gray-100';
      case 'Gold': return 'text-yellow-700 bg-yellow-100';
      case 'Platinum': return 'text-blue-700 bg-blue-100';
      case 'Diamond': return 'text-purple-700 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProjectTypeColor = (type: string) => {
    return type === 'portfolio' ? 'bg-blue-600' : 'bg-green-600';
  };

  const getButtonText = (type: string) => {
    return type === 'portfolio' ? 'View Project' : 'Start Challenge';
  };

  const renderGridView = () => (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {filteredProjects.map((project, index) => (
        <Card
          key={index}
          className="group bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} project`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Show difficulty for challenges or rank level for portfolio */}
            <div className="absolute top-4 right-4">
              {project.type === 'challenge' ? (
                <span className={`px-3 py-1 rounded-full text-xs font-semibold font-sora ${getDifficultyColor(project.difficulty)}`}>
                  {project.difficulty}
                </span>
              ) : project.rankLevel ? (
                <span className={`px-3 py-1 rounded-full text-xs font-semibold font-sora ${getRankLevelColor(project.rankLevel)}`}>
                  {project.rankLevel}
                </span>
              ) : null}
            </div>
            
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 ${getProjectTypeColor(project.type)} text-white rounded-full text-xs font-semibold font-sora capitalize`}>
                {project.type}
              </span>
            </div>
          </div>

          {/* Project Content */}
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="text-sm text-blue-600 font-sora font-semibold uppercase tracking-wide">
                {project.category}
              </div>
              <h3 className="text-xl font-sora font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 font-sora">
                by {project.author}
              </p>
              <p className="text-gray-600 font-sora leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            {/* Project Stats - Duration only for challenges, participants and rating for both */}
            <div className="flex items-center justify-between text-sm text-gray-500 font-sora">
              {project.type === 'challenge' && (
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
              )}
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
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-sora font-semibold py-2 rounded-lg group transition-all duration-200">
              {getButtonText(project.type)}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {filteredProjects.map((project, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex gap-6">
            {/* Project Image */}
            <div className="relative flex-shrink-0 w-48 h-32 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={`${project.title} project`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 ${getProjectTypeColor(project.type)} text-white rounded-full text-xs font-semibold font-sora capitalize`}>
                  {project.type}
                </span>
              </div>
              {/* Show difficulty for challenges or rank level for portfolio */}
              <div className="absolute top-3 right-3">
                {project.type === 'challenge' ? (
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold font-sora ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                ) : project.rankLevel ? (
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold font-sora ${getRankLevelColor(project.rankLevel)}`}>
                    {project.rankLevel}
                  </span>
                ) : null}
              </div>
            </div>

            {/* Project Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="text-sm text-blue-600 font-sora font-semibold uppercase tracking-wide mb-1">
                  {project.category}
                </div>
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 font-sora mb-2">
                  by {project.author}
                </p>
                <p className="text-gray-600 font-sora leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                {/* Project Stats - Duration only for challenges, participants and rating for both */}
                <div className="flex items-center gap-6 text-sm text-gray-500 font-sora">
                  {project.type === 'challenge' && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.participants}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>{project.rating}</span>
                  </div>
                </div>

                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-sora font-semibold px-6 py-2 rounded-lg group transition-all duration-200">
                  {getButtonText(project.type)}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <LoggedInNavbar />
      
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

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-lg p-1 shadow-md">
              <Button
                variant={activeTab === 'all' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('all')}
                className={`${activeTab === 'all' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'} font-sora px-6 py-2`}
              >
                All Projects
              </Button>
              <Button
                variant={activeTab === 'challenges' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('challenges')}
                className={`${activeTab === 'challenges' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'} font-sora px-6 py-2`}
              >
                Challenges
              </Button>
              <Button
                variant={activeTab === 'portfolio' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('portfolio')}
                className={`${activeTab === 'portfolio' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'} font-sora px-6 py-2`}
              >
                Portfolio
              </Button>
            </div>
          </div>

          {/* Filters Row */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                Engineering Domain
              </label>
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-full bg-white border-gray-200 font-sora">
                  <SelectValue placeholder="All Domains" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 z-50">
                  <SelectItem value="all" className="font-sora">All Domains</SelectItem>
                  <SelectItem value="mechanical" className="font-sora">Mechanical Engineering</SelectItem>
                  <SelectItem value="software" className="font-sora">Software (Backend)</SelectItem>
                  <SelectItem value="civil" className="font-sora">Civil / Structural</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full bg-white border-gray-200 font-sora">
                  <SelectValue placeholder="All Difficulties" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 z-50">
                  <SelectItem value="all" className="font-sora">All Difficulties</SelectItem>
                  <SelectItem value="Beginner" className="font-sora">Beginner</SelectItem>
                  <SelectItem value="Intermediate" className="font-sora">Intermediate</SelectItem>
                  <SelectItem value="Advanced" className="font-sora">Advanced</SelectItem>
                  <SelectItem value="Elite" className="font-sora">Elite</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                Subdomain
              </label>
              <Select value={selectedSubdomain} onValueChange={setSelectedSubdomain}>
                <SelectTrigger className="w-full bg-white border-gray-200 font-sora">
                  <SelectValue placeholder="All Subdomains" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 z-50">
                  <SelectItem value="all" className="font-sora">All Subdomains</SelectItem>
                  <SelectItem value="3d-design" className="font-sora">3D Design</SelectItem>
                  <SelectItem value="simulation" className="font-sora">Simulation</SelectItem>
                  <SelectItem value="analysis" className="font-sora">Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                Tags
              </label>
              <Select value={selectedTags} onValueChange={setSelectedTags}>
                <SelectTrigger className="w-full bg-white border-gray-200 font-sora">
                  <SelectValue placeholder="All Tags" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 z-50">
                  <SelectItem value="all" className="font-sora">All Tags</SelectItem>
                  <SelectItem value="cad" className="font-sora">CAD</SelectItem>
                  <SelectItem value="thermal" className="font-sora">Thermal</SelectItem>
                  <SelectItem value="simulation" className="font-sora">Simulation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end mb-6">
            <div className="flex bg-white rounded-lg p-1 border border-gray-200">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={`${viewMode === 'grid' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'} font-sora`}
              >
                <Grid3X3 className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={`${viewMode === 'list' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'} font-sora`}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          {/* Projects Display */}
          {viewMode === 'grid' ? renderGridView() : renderListView()}

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
  );
};

export default Projects;
