
import React from 'react';
import { Feature108 } from '@/components/ui/shadcnblocks-com-feature108';
import { Button } from '@/components/ui/button';
import { Upload, Zap, Award } from 'lucide-react';

const ShowWhatYouGotSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-sora font-bold text-gray-900 mb-4">
            Show What You've Got
          </h2>
          <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto mb-8">
            Whether you're showcasing your portfolio or taking on challenges, demonstrate your engineering excellence.
          </p>
          <p className="text-lg text-gray-600 font-sora mb-8">
            <a 
              href="/pricing" 
              className="text-inkaer-blue hover:text-inkaer-dark-blue font-semibold underline decoration-2 underline-offset-4 transition-colors duration-200"
            >
              Inkaer is free to use. Upgrade to premium to enjoy more benefits
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Upload className="w-8 h-8 text-inkaer-blue" />
              </div>
              <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
                Upload Portfolio
              </h3>
              <p className="text-gray-600 font-sora mb-6 leading-relaxed">
                Share your best engineering projects and get peer reviews from industry professionals.
              </p>
              <Button 
                asChild 
                className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-3 rounded-full transition-all duration-200"
              >
                <a href="/upload-portfolio">Upload Portfolio</a>
              </Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
                Start Challenge
              </h3>
              <p className="text-gray-600 font-sora mb-6 leading-relaxed">
                Take on real-world engineering challenges and prove your technical skills under time constraints.
              </p>
              <Button 
                asChild 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-sora font-semibold py-3 rounded-full transition-all duration-200"
              >
                <a href="/projects">Start Challenge</a>
              </Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
                View Certification
              </h3>
              <p className="text-gray-600 font-sora mb-6 leading-relaxed">
                Get certified as a verified engineer and unlock premium career opportunities.
              </p>
              <Button 
                asChild 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-sora font-semibold py-3 rounded-full transition-all duration-200"
              >
                <a href="/certifications">View Certification</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowWhatYouGotSection;
