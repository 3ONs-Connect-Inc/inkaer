
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  difficulty: string;
  duration: string;
  participants: number;
  rating: number;
  description: string;
  tags: string[];
  image: string;
  author?: string;
  comments?: number;
  type?: 'portfolio' | 'challenge';
}

const ProjectCard = ({
  title,
  category,
  difficulty,
  duration,
  participants,
  rating,
  description,
  tags,
  image,
  author,
  comments,
  type = 'challenge'
}: ProjectCardProps) => {
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

  const getProjectLink = (type: string, title: string) => {
    // Create a simple ID from title for demo purposes
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return type === 'portfolio' ? `/portfolio/${id}` : `/challenge/${id}`;
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden min-w-[320px] flex-shrink-0">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} project`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {/* Show difficulty badge for both challenges and portfolio projects */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold font-sora ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 ${getProjectTypeColor(type)} text-white rounded-full text-xs font-semibold font-sora capitalize`}>
            {type}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="text-sm text-inkaer-blue font-sora font-semibold uppercase tracking-wide">
            {category}
          </div>
          <h3 className="text-xl font-sora font-bold text-gray-900 group-hover:text-inkaer-blue transition-colors duration-200">
            {title}
          </h3>
          {author && (
            <p className="text-sm text-gray-500 font-sora">
              by {author}
            </p>
          )}
          <p className="text-gray-600 font-sora leading-relaxed text-sm">
            {description}
          </p>
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 font-sora">
          {/* Show duration only for challenges */}
          {type === 'challenge' && (
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{participants}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-sora font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <Link
          to={getProjectLink(type, title)}
          className="block"
        >
          <Button className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-2 rounded-lg group transition-all duration-200">
            {getButtonText(type)}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
