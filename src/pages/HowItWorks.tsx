
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Trophy, Award, Briefcase, Linkedin } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-10 h-10 text-inkaer-blue" />,
      title: "Submit Your Projects",
      subtitle: "Showcase Your Work",
      description: "Upload your engineering projects or tackle our curated challenges to showcase your technical skills to our community of professionals."
    },
    {
      icon: <Users className="w-10 h-10 text-inkaer-blue" />,
      title: "Get Peer Reviews",
      subtitle: "Community Feedback",
      description: "Receive constructive feedback from fellow engineers and industry experts to improve your work and learn from others."
    },
    {
      icon: <Trophy className="w-10 h-10 text-inkaer-blue" />,
      title: "Build Your Rank",
      subtitle: "Progress & Recognition",
      description: "Earn points and improve your ranking based on project quality and peer feedback. Rise from Novice to Elite status."
    },
    {
      icon: <Award className="w-10 h-10 text-inkaer-blue" />,
      title: "Get Certified",
      subtitle: "Verify Your Skills",
      description: "Achieve certification badges that validate your expertise in specific engineering domains and enhance your professional profile."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-inkaer-blue" />,
      title: "Land Your Dream Job",
      subtitle: "Career Opportunities",
      description: "Get discovered by top employers looking for talented engineers with proven skills and verified certifications."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        <Navbar />
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h1 className="text-5xl sm:text-6xl font-sora font-bold text-gray-900 mb-8">
                How It Works
              </h1>
              <p className="text-2xl text-gray-600 font-sora max-w-4xl mx-auto leading-relaxed">
                Join thousands of engineers showcasing their skills and connecting with opportunities
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 mb-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-inkaer-blue/30 to-transparent z-0"></div>
                  )}
                  
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-inkaer-blue text-white rounded-full flex items-center justify-center text-sm font-bold font-sora">
                      {index + 1}
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-inkaer-blue/10 rounded-2xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-sora font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-inkaer-blue font-sora font-semibold text-sm uppercase tracking-wide mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 font-sora leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn Badge Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-100/50 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <Linkedin className="w-12 h-12 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-sora font-bold text-gray-900">
                    Showcase Your Achievements
                  </h2>
                </div>
                <p className="text-xl text-gray-600 font-sora mb-8">
                  Add your Inkaer certifications and project achievements to your LinkedIn profile. 
                  Stand out to recruiters and showcase your verified engineering skills.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-blue-50 px-6 py-3 rounded-full">
                    <span className="text-blue-600 font-sora font-semibold">✓ Verified Skills</span>
                  </div>
                  <div className="bg-green-50 px-6 py-3 rounded-full">
                    <span className="text-green-600 font-sora font-semibold">✓ Project Portfolio</span>
                  </div>
                  <div className="bg-purple-50 px-6 py-3 rounded-full">
                    <span className="text-purple-600 font-sora font-semibold">✓ Industry Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default HowItWorks;
