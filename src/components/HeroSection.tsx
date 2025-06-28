
import React from 'react';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Play } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="rgb(0, 170, 254)"
          maxOpacity={0.1}
          flickerChance={0.05}
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-inkaer-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-inkaer-dark-blue/5 rounded-full blur-3xl"></div>
      </div>

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
                <a href="login-landing">
                Get Started
                </a>
              <Button 
                variant="outline" 
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
    </section>
  );
};

export default HeroSection;
