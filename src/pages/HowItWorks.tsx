
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Trophy, Award, Briefcase, Linkedin } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      title: "Submit Your Projects or Complete Challenges",
      description: "Upload your engineering projects or tackle our curated challenges to showcase your technical skills to our community of professionals.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Get Peer Reviews",
      description: "Receive constructive feedback from fellow engineers and industry experts to improve your work.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Trophy className="w-10 h-10 text-white" />,
      title: "Build Your Rank",
      description: "Earn points and improve your ranking based on project quality and peer feedback.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: "Get Certified",
      description: "Achieve certification badges that validate your expertise in specific engineering domains and showcase them on your LinkedIn profile.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-white" />,
      title: "Land Your Dream Job",
      description: "Get discovered by top employers looking for talented engineers with proven skills.",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-inkaer-blue/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-sora font-bold text-gray-900 mb-6 leading-tight">
              How It <span className="text-inkaer-blue">Works</span>
            </h1>
            <p className="text-2xl text-gray-600 font-sora max-w-4xl mx-auto leading-relaxed">
              Join thousands of engineers showcasing their skills and connecting with opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0 transform translate-x-4"></div>
                )}
                
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-inkaer-blue text-white rounded-full flex items-center justify-center text-sm font-bold font-sora shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-sora font-bold text-gray-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-sora leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* LinkedIn Badge for Certification Step */}
                  {index === 3 && (
                    <div className="mt-4 flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700 font-sora">LinkedIn Badge Compatible</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-inkaer-blue to-inkaer-dark-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-sora font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 font-sora mb-8 max-w-2xl mx-auto">
            Join our community of engineers and take the first step towards showcasing your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-inkaer-blue px-8 py-4 rounded-full font-sora font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-sora font-semibold text-lg hover:bg-white hover:text-inkaer-blue transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
