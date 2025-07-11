
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Trophy, Briefcase } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-inkaer-blue" />,
      title: "Submit Your Projects",
      description: "Upload your engineering projects and showcase your technical skills to our community of professionals."
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
      icon: <Briefcase className="w-8 h-8 text-inkaer-blue" />,
      title: "Land Your Dream Job",
      description: "Get discovered by top employers looking for talented engineers with proven skills."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
              Join thousands of engineers showcasing their skills and connecting with opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-sora">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
