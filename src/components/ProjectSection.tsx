
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Project {
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
}

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  showSeeAll?: boolean;
}

const ProjectSection = ({ title, projects, showSeeAll = true }: ProjectSectionProps) => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-sora font-bold text-gray-900">
            {title}
          </h2>
          {showSeeAll && (
            <Button 
              variant="ghost" 
              className="w-fit gap-2 text-inkaer-blue hover:text-inkaer-dark-blue font-sora font-semibold"
            >
              See All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>

        {/* Horizontally Scrollable Projects */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
