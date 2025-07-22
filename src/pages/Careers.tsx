
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
                Help us build the future of engineering talent evaluation and discovery.
              </p>
            </div>

            <div className="mb-12">
              <div className="bg-white/70 rounded-2xl p-8">
                <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">Why Work at Inkaer?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Innovation-Driven</h3>
                    <p className="text-gray-600 font-sora text-sm">
                      Work on cutting-edge technology that's reshaping how engineering talent is evaluated.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Remote-First</h3>
                    <p className="text-gray-600 font-sora text-sm">
                      Flexible remote work with optional office spaces in major cities.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                    <p className="text-gray-600 font-sora text-sm">
                      Continuous learning and professional development support.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Impact-Focused</h3>
                    <p className="text-gray-600 font-sora text-sm">
                      Make a real difference in how engineering careers are built and evaluated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-sora font-bold text-gray-900 text-center mb-8">
                Open Positions
              </h2>
              
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-sora font-semibold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-sora">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          {position.department}
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 font-sora mb-4">
                Don't see a role that fits? We're always looking for talented individuals.
              </p>
              <Button 
                variant="outline"
                className="font-sora"
              >
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Careers;
