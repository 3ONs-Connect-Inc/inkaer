
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
                About Inkaer
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
                Revolutionizing how engineering talent is discovered and evaluated through skill-based assessments.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-white/70 rounded-2xl p-8">
                <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 font-sora leading-relaxed">
                  At Inkaer, we believe that engineering talent should be evaluated based on real skills and practical 
                  problem-solving abilities, not just resumes and credentials. We've created a platform where engineers 
                  can showcase their expertise through hands-on projects and challenges, while employers can discover 
                  talent based on demonstrated capabilities.
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-8">
                <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">What We Do</h2>
                <p className="text-gray-600 font-sora leading-relaxed mb-4">
                  Inkaer connects skilled engineers with forward-thinking employers through:
                </p>
                <ul className="space-y-2 text-gray-600 font-sora">
                  <li className="flex items-start gap-2">
                    <span className="text-inkaer-blue">•</span>
                    Peer-reviewed engineering project submissions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-inkaer-blue">•</span>
                    Skills-based ranking and certification system
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-inkaer-blue">•</span>
                    Real-world engineering challenges from top companies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-inkaer-blue">•</span>
                    Direct talent pipeline to employers seeking proven skills
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 rounded-2xl p-8">
                <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 font-sora leading-relaxed">
                  We envision a world where engineering careers are built on demonstrated expertise and continuous 
                  learning, where the best opportunities go to those who can solve real problems, regardless of their 
                  background or where they studied.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;
