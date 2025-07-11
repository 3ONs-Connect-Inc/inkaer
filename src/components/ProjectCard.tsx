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
  projectType?: 'portfolio' | 'challenge';
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
  projectType = 'challenge'
}: ProjectCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Expert': return 'text-red-600 bg-red-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  const getButtonText = () => {
    return projectType === 'portfolio' ? 'View Project' : 'Start Challenge';
  };

  const getProjectLink = () => {
    if (projectType === 'portfolio') {
      return `/portfolio/1`; // Using a mock ID for now
    }
    return '#'; // Challenge projects would link to their challenge page
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden min-w-[320px] flex-shrink-0">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} project`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold font-sora ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
        {projectType === 'portfolio' && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold font-sora">
              Portfolio
            </span>
          </div>
        )}
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
          <p className="text-gray-600 font-sora leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 font-sora">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{participants.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <span>{rating}</span>
          </div>
          {comments && (
            <div className="flex items-center space-x-1">
              <span>{comments} Comments</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-sora font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        {projectType === 'portfolio' ? (
          <Link to={getProjectLink()}>
            <Button className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-3 rounded-full group transition-all duration-200">
              {getButtonText()}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        ) : (
          <Button className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-3 rounded-full group transition-all duration-200">
            {getButtonText()}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
