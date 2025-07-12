
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Upload, Play, Award } from 'lucide-react';

const ShowWhatYouGotSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-sora font-bold text-gray-900 mb-4">
            Show What You've Got
          </h2>
          <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto mb-8">
            Inkaer is free to use. <Link to="/pricing" className="text-inkaer-blue hover:underline font-semibold">Upgrade to premium to enjoy more benefits</Link>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Upload Portfolio */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
              Upload Portfolio
            </h3>
            <p className="text-gray-600 font-sora mb-6">
              Showcase your engineering projects and get peer reviews from industry professionals.
            </p>
            <Link to="/upload-portfolio">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sora font-semibold py-3 rounded-lg">
                Upload Your Portfolio
              </Button>
            </Link>
          </div>

          {/* Start Challenge */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
              Start Challenge
            </h3>
            <p className="text-gray-600 font-sora mb-6">
              Take on engineering challenges to test and improve your technical skills.
            </p>
            <Link to="/projects">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-sora font-semibold py-3 rounded-lg">
                Browse Challenges
              </Button>
            </Link>
          </div>

          {/* View Certification */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
              View Certification
            </h3>
            <p className="text-gray-600 font-sora mb-6">
              Get certified as a verified engineer and unlock premium opportunities.
            </p>
            <Link to="/certifications">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-sora font-semibold py-3 rounded-lg">
                Learn About Certification
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowWhatYouGotSection;
