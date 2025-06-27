
import React from 'react';
import { Gallery4 } from '@/components/ui/gallery4';

const FeaturedProjectsSection = () => {
  const projectsData = [
    {
      id: "data-pipeline",
      title: "Real-Time Data Pipeline",
      description:
        "Build a scalable data processing pipeline that handles millions of events per minute using modern streaming technologies like Kafka, Redis, and PostgreSQL.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    },
    {
      id: "mobile-banking",
      title: "Mobile Banking Interface", 
      description:
        "Design and implement a secure, responsive banking interface with advanced UX patterns and accessibility features using React and TypeScript.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      id: "ml-recommendation",
      title: "ML Recommendation Engine",
      description:
        "Create an intelligent recommendation system that adapts to user behavior and preferences in real-time using Python and TensorFlow.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    },
    {
      id: "api-microservices",
      title: "Microservices Architecture",
      description:
        "Design and build a scalable microservices architecture with API gateways, service discovery, and distributed tracing capabilities.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure Automation",
      description:
        "Implement infrastructure as code using modern DevOps practices, containerization, and automated deployment pipelines.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
  ];

  return (
    <Gallery4 
      title="Featured Projects"
      description="Take on real engineering challenges that top companies use to evaluate talent. Each project is designed by industry experts and reflects real-world scenarios you'd encounter on the job."
      items={projectsData}
    />
  );
};

export default FeaturedProjectsSection;
