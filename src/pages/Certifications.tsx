
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle, Clock, Users, Linkedin } from 'lucide-react';

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
      description: "Complete proctored, domain-specific technical assessments",
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
                Engineer Certification
              </h1>
              <p className="text-2xl text-gray-600 font-sora max-w-4xl mx-auto leading-relaxed">
                Get verified as a certified engineer and unlock premium opportunities with top employers
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-sora font-bold text-gray-900 mb-8">
                  Why Get Certified?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-sora">Enhanced visibility to premium employers</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-sora">Priority access to exclusive job opportunities</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-sora">Verified badge on your profile and projects</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-sora">Higher ranking in search results</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-gray-100/50">
                <div className="text-center mb-8">
                  <Award className="w-20 h-20 text-inkaer-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-sora font-bold text-gray-900 mb-4">
                    Certified Engineer Badge
                  </h3>
                </div>
                <p className="text-gray-600 font-sora text-center mb-8 text-lg">
                  Join the elite group of verified engineers trusted by top companies
                </p>
                <Button className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-4 rounded-2xl text-lg transition-all duration-200">
                  Start Certification Process
                </Button>
              </div>
            </div>

            {/* LinkedIn Integration Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-100/50 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <Linkedin className="w-12 h-12 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-sora font-bold text-gray-900">
                    Add to LinkedIn Profile
                  </h2>
                </div>
                <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto mb-8">
                  Once certified, easily add your Inkaer engineer certification to your LinkedIn profile. 
                  Showcase your verified skills to recruiters and stand out in the competitive engineering job market.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Verified Badge</h3>
                    <p className="text-sm text-gray-600 font-sora">Official certification badge on LinkedIn</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Skill Verification</h3>
                    <p className="text-sm text-gray-600 font-sora">Validated engineering competencies</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Professional Network</h3>
                    <p className="text-sm text-gray-600 font-sora">Connect with certified engineers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-gray-100/50">
              <h2 className="text-3xl font-sora font-bold text-gray-900 mb-12 text-center">
                Certification Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {certificationProcess.map((item, index) => (
                  <div key={index} className="text-center relative">
                    {/* Connection Line */}
                    {index < certificationProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-inkaer-blue/30 to-transparent"></div>
                    )}
                    
                    <div className="bg-inkaer-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative">
                      <div className="text-inkaer-blue">
                        {item.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 bg-inkaer-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-3 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-sora">
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
    </div>
  );
};

export default Certifications;
