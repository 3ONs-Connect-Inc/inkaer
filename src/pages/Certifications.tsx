
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle, Clock, Users } from 'lucide-react';

const Certifications = () => {
  const certificationProcess = [
    {
      step: 1,
      title: "Portfolio Review",
      description: "Submit at least 3 high-quality engineering projects for peer review",
      icon: <Award className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Peer Assessment",
      description: "Receive positive feedback from verified engineers in your domain",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Skill Verification",
      description: "Complete domain-specific technical assessments",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Certification Badge",
      description: "Receive your verified engineer badge and enhanced profile visibility",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
              Engineer Certification
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
              Get verified as a certified engineer and unlock premium opportunities with top employers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-sora font-bold text-gray-900 mb-6">
                Why Get Certified?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-sora">Enhanced visibility to premium employers</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-sora">Priority access to exclusive job opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-sora">Verified badge on your profile and projects</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-sora">Higher ranking in search results</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <Award className="w-16 h-16 text-inkaer-blue mx-auto mb-4" />
                <h3 className="text-xl font-sora font-bold text-gray-900">
                  Certified Engineer Badge
                </h3>
              </div>
              <p className="text-gray-600 font-sora text-center mb-6">
                Join the elite group of verified engineers trusted by top companies
              </p>
              <Button className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-3 rounded-full">
                Start Certification Process
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-8 text-center">
              Certification Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificationProcess.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-inkaer-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-inkaer-blue">
                      {item.icon}
                    </div>
                  </div>
                  <div className="bg-inkaer-blue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-semibold">
                    {item.step}
                  </div>
                  <h3 className="font-sora font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-sora text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
