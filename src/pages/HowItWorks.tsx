
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Trophy, Award, Briefcase, Linkedin } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-inkaer-blue" />,
      title: "Submit Your Projects or Complete Challenges",
      description: "Upload your engineering projects or tackle our curated challenges to showcase your technical skills to our community of professionals."
    },
    {
      icon: <Users className="w-8 h-8 text-inkaer-blue" />,
      title: "Get Peer Reviews",
      description: "Receive constructive feedback from fellow engineers and industry experts to improve your work."
    },
    {
      icon: <Trophy className="w-8 h-8 text-inkaer-blue" />,
      title: "Build Your Rank",
      description: "Earn points and improve your ranking based on project quality and peer feedback."
    },
    {
      icon: <Award className="w-8 h-8 text-inkaer-blue" />,
      title: "Get Certified",
      description: "Achieve certification badges that validate your expertise in specific engineering domains and display them on your LinkedIn profile."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-inkaer-blue" />,
      title: "Land Your Dream Job",
      description: "Get discovered by top employers looking for talented engineers with proven skills."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-sora max-w-3xl mx-auto leading-relaxed">
            Join thousands of engineers showcasing their skills and connecting with opportunities
          </p>
          
          {/* LinkedIn Badge Info */}
          <div className="mt-8 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
            <Linkedin className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-sora font-medium text-gray-700">
              Share your achievements on LinkedIn
            </span>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-inkaer-blue text-white rounded-full flex items-center justify-center text-sm font-bold font-sora z-10">
                  {index + 1}
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-inkaer-blue/10 rounded-full">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-sora font-bold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-sora leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-inkaer-blue to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-inkaer-blue to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl font-sora mb-8 opacity-90">
              Join our community of engineers and start building your professional reputation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/sign-up" className="bg-white text-inkaer-blue px-8 py-4 rounded-full font-sora font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105">
                Sign Up Free
              </a>
              <a href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-full font-sora font-semibold hover:bg-white hover:text-inkaer-blue transition-all duration-200 hover:scale-105">
                Explore Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
