
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Play } from 'lucide-react';
import YoutubeModal from './YoutubeModal';

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const videoId = extractVideoId('https://youtu.be/g9GKzkO2rgU?si=DmZh7wOvzzWWsmz3');

  return (
    <section className="relative bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-medium leading-tight text-gray-900">
                Get Hired Based on{' '}
                <span className="font-playfair font-extrabold italic text-inkaer-blue">
                  Real Skills
                </span>
                , Not Resumes
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 font-sora leading-relaxed max-w-2xl">
                Upload your portfolio or tackle real-world engineering challenges that highlight your edge, and get you hired fast.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <RainbowButton className="font-sora font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200 hover:shadow-xl">
                <a href="login-landing">
                Get Started
                </a>
              </RainbowButton>
              <Button 
                variant="outline" 
                onClick={() => setIsVideoModalOpen(true)}
                className="border-2 border-inkaer-blue text-inkaer-blue hover:bg-inkaer-blue hover:text-white font-sora font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=faces"
                alt="Professional woman working on engineering challenges"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inkaer-blue/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-scale-in">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-sora font-semibold text-gray-700">Skills Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Modal */}
      <YoutubeModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={videoId}
        title="Inkaer Platform Demo"
      />
    </section>
  );
};

export default HeroSection;
