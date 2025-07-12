import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Star, ArrowRight, Grid3X3, List, Filter, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Projects = () => {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedSubdomain, setSelectedSubdomain] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const allTags = ['CAD', 'Drone', 'Modular', 'React', 'Node.js', 'IoT', 'Thermal', 'Engineering', 'CFD', 'Simulation', 'FEA', 'Testing', 'Structural'];

  const allProjects = [
    {
      title: "Modular Drone Frame",
      category: "Mechanical Engineering",
      subdomain: "3d-design",
      difficulty: "Beginner",
      duration: "2-3 hrs", 
      participants: 23,
      rating: 4.2,
      description: "Design and prototype a modular drone frame system with interchangeable components for enhanced flexibility and performance.",
      tags: ["CAD", "Drone", "Modular"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      author: "Daniel Brown",
      comments: 18,
      type: "challenge"
    },
    {
      title: "Smart Home IoT Dashboard", 
      category: "Software (Backend)",
      subdomain: "prototyping",
      difficulty: "Intermediate",
      duration: "4-6 hrs",
      participants: 67,
      rating: 4.5,
      description: "Full-stack web application for monitoring and controlling IoT devices in a smart home environment with real-time data visualization.",
      tags: ["React", "Node.js", "IoT"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Sarah Chen",
      comments: 32,
      type: "portfolio"
    },
    {
      title: "Heat Exchanger Redesign", 
      category: "Mechanical Engineering",
      subdomain: "simulation",
      difficulty: "Advanced",
      duration: "6-8 hrs",
      participants: 56,
      rating: 4.6,
      description: "Thermal engineering project focusing on heat transfer optimization and efficiency improvements through advanced computational methods.",
      tags: ["CAD", "Thermal", "Engineering"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Cathy Lee",
      comments: 25,
      type: "challenge"
    },
    {
      title: "Cooling Plate Simulation",
      category: "Mechanical Engineering", 
      subdomain: "analysis",
      difficulty: "Elite",
      duration: "8-10 hrs",
      participants: 78,
      rating: 4.9,
      description: "Advanced computational fluid dynamics simulation for cooling plate optimization in high-performance computing systems.",
      tags: ["CFD", "Simulation", "Thermal"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Ivy Timmons",
      comments: 31,
      type: "portfolio"
    },
    {
      title: "Bracket Fatigue Test",
      category: "Civil / Structural",
      subdomain: "analysis",
      difficulty: "Intermediate", 
      duration: "5-7 hrs",
      participants: 45,
      rating: 4.4,
      description: "Comprehensive fatigue analysis and testing protocol for structural bracket components in aerospace applications.",
      tags: ["FEA", "Testing", "Structural"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "Kevin Carpenter",
      comments: 10,
      type: "challenge"
    }
  ];

  const filteredProjects = allProjects.filter(project => {
    const domainMatch = selectedDomain === 'all' || project.category.toLowerCase().includes(selectedDomain);
    const subdomainMatch = selectedSubdomain === 'all' || project.subdomain === selectedSubdomain;
    const typeMatch = selectedType === 'all' || project.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag));
    const searchMatch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return domainMatch && subdomainMatch && typeMatch && difficultyMatch && tagMatch && searchMatch;
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

  const getProjectTypeColor = (type: string) => {
    return type === 'portfolio' ? 'bg-blue-600' : 'bg-green-600';
  };

  const getButtonText = (type: string) => {
    return type === 'portfolio' ? 'View Project' : 'Start Challenge';
  };

  const clearAllFilters = () => {
    setSelectedDomain('all');
    setSelectedSubdomain('all');
    setSelectedType('all');
    setSelectedDifficulty('all');
    setSelectedTags([]);
    setSearchTerm('');
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
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

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search projects, tags, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200 font-sora"
                />
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant={selectedType === 'challenge' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(selectedType === 'challenge' ? 'all' : 'challenge')}
                  className="bg-white/80 backdrop-blur-sm font-sora"
                >
                  Challenges
                </Button>
                <Button
                  variant={selectedType === 'portfolio' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(selectedType === 'portfolio' ? 'all' : 'portfolio')}
                  className="bg-white/80 backdrop-blur-sm font-sora"
                >
                  Portfolio
                </Button>
                <Button
                  variant={selectedDifficulty === 'Beginner' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDifficulty(selectedDifficulty === 'Beginner' ? 'all' : 'Beginner')}
                  className="bg-white/80 backdrop-blur-sm font-sora"
                >
                  Beginner
                </Button>
                <Button
                  variant={selectedDifficulty === 'Intermediate' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDifficulty(selectedDifficulty === 'Intermediate' ? 'all' : 'Intermediate')}
                  className="bg-white/80 backdrop-blur-sm font-sora"
                >
                  Intermediate
                </Button>
                <Button
                  variant={selectedDifficulty === 'Advanced' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDifficulty(selectedDifficulty === 'Advanced' ? 'all' : 'Advanced')}
                  className="bg-white/80 backdrop-blur-sm font-sora"
                >
                  Advanced
                </Button>
              </div>
            </div>

            {/* Selected Tags Display */}
            {selectedTags.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedTags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-inkaer-blue text-white text-sm font-sora font-medium rounded-full"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 hover:bg-white/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Advanced Filters and View Toggle */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              {/* Advanced Filters */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                <div>
                  <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                    Engineering Domain
                  </label>
                  <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                    <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-gray-200 font-sora">
                      <SelectValue placeholder="Select Domain" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-md border-gray-200 z-50">
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
                    <SelectContent className="bg-white/95 backdrop-blur-md border-gray-200 z-50">
                      {subdomains.map((subdomain) => (
                        <SelectItem key={subdomain.value} value={subdomain.value} className="font-sora">
                          {subdomain.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-sora font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-1 p-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-md max-h-20 overflow-y-auto">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-2 py-1 text-xs rounded-full transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-inkaer-blue text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        } font-sora`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Toggle and Clear Filters */}
              <div className="flex items-end gap-2">
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="bg-white/80 backdrop-blur-sm border-gray-200 font-sora"
                >
                  Clear All
                </Button>
                <div className="flex bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-gray-200">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`${viewMode === 'grid' ? 'bg-inkaer-blue hover:bg-inkaer-dark-blue text-white' : 'text-gray-600 hover:text-gray-900'} font-sora`}
                  >
                    <Grid3X3 className="w-4 h-4 mr-2" />
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`${viewMode === 'list' ? 'bg-inkaer-blue hover:bg-inkaer-dark-blue text-white' : 'text-gray-600 hover:text-gray-900'} font-sora`}
                  >
                    <List className="w-4 h-4 mr-2" />
                    List
                  </Button>
                </div>
              </div>
            </div>

            {/* Projects Display */}
            {viewMode === 'grid' ? (
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
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 ${getProjectTypeColor(project.type)} text-white rounded-full text-xs font-semibold font-sora capitalize`}>
                          {project.type}
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
                        {project.author && (
                          <p className="text-sm text-gray-500 font-sora">
                            by {project.author}
                          </p>
                        )}
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
                        {getButtonText(project.type)}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProjects.map((project, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Project Image */}
                        <div className="lg:w-48 w-full">
                          <div className="relative overflow-hidden rounded-lg">
                            <img
                              src={project.image}
                              alt={`${project.title} project`}
                              className="w-full h-32 lg:h-24 object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <span className={`px-2 py-1 rounded text-xs font-semibold font-sora ${getDifficultyColor(project.difficulty)}`}>
                                {project.difficulty}
                              </span>
                            </div>
                            <div className="absolute top-2 left-2">
                              <span className={`px-2 py-1 ${getProjectTypeColor(project.type)} text-white rounded text-xs font-semibold font-sora capitalize`}>
                                {project.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div className="flex-1 space-y-3">
                          <div>
                            <div className="text-sm text-inkaer-blue font-sora font-semibold uppercase tracking-wide">
                              {project.category}
                            </div>
                            <h3 className="text-xl font-sora font-bold text-gray-900">
                              {project.title}
                            </h3>
                            {project.author && (
                              <p className="text-sm text-gray-500 font-sora">
                                by {project.author}
                              </p>
                            )}
                          </div>
                          
                          <p className="text-gray-600 font-sora leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-sora">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{project.participants} participants</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-current text-yellow-400" />
                              <span>{project.rating}</span>
                            </div>
                            {project.comments && (
                              <span>{project.comments} comments</span>
                            )}
                          </div>

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
                        </div>

                        {/* Action Button */}
                        <div className="lg:w-40 w-full flex lg:items-center">
                          <Button className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-2 rounded-lg transition-all duration-200">
                            {getButtonText(project.type)}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

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
