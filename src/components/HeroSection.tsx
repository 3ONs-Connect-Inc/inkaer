
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const HeroSection = () => {
  const words = [
    {
      text: "Get",
    },
    {
      text: "Hired",
    },
    {
      text: "Based",
    },
    {
      text: "on",
    },
    {
      text: "Real",
      className: "text-inkaer-blue font-playfair font-black italic",
    },
    {
      text: "Skills,",
      className: "text-inkaer-blue font-playfair font-black italic",
    },
    {
      text: "Not",
    },
    {
      text: "Resumes",
    },
  ];

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Main Heading with Typewriter Effect */}
            <div className="space-y-4">
              <TypewriterEffectSmooth 
                words={words} 
                className="text-left justify-start my-4"
                cursorClassName="bg-inkaer-blue"
              />
            </div>

            {/* Subheading */}
            <p className="text-xl text-gray-600 font-sora leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Upload your portfolio or tackle real-world engineering challenges designed to highlight your competitiveness and creativity
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-gradient-inkaer hover:opacity-90 text-white font-sora font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-sora font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=face"
                alt="Professional woman working on laptop"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-inkaer-light rounded-2xl -z-10"></div>
            <div className="absolute top-6 right-6 w-24 h-24 bg-inkaer-light-blue/20 rounded-full animate-bounce-gentle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
