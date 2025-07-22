
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle, Award, BookOpen } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
                Join Our Community
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
                Connect with fellow engineers, share knowledge, and grow together in a supportive community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/70 rounded-2xl p-6 text-center">
                <Users className="w-12 h-12 text-inkaer-blue mx-auto mb-4" />
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-2">10,000+</h3>
                <p className="text-gray-600 font-sora">Active Engineers</p>
              </div>
              
              <div className="bg-white/70 rounded-2xl p-6 text-center">
                <MessageCircle className="w-12 h-12 text-inkaer-blue mx-auto mb-4" />
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-2">50,000+</h3>
                <p className="text-gray-600 font-sora">Project Reviews</p>
              </div>
              
              <div className="bg-white/70 rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-inkaer-blue mx-auto mb-4" />
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-2">2,500+</h3>
                <p className="text-gray-600 font-sora">Certified Engineers</p>
              </div>
              
              <div className="bg-white/70 rounded-2xl p-6 text-center">
                <BookOpen className="w-12 h-12 text-inkaer-blue mx-auto mb-4" />
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-2">1,200+</h3>
                <p className="text-gray-600 font-sora">Knowledge Articles</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white/70 rounded-2xl p-8">
                <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6">Community Guidelines</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Be Respectful</h3>
                    <p className="text-gray-600 font-sora text-sm">
                      Treat all community members with respect and professionalism.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Share Knowledge</h3>
                    <p className="text-gray-600 font-sora text-sm">
                      Help others learn and grow by sharing your expertise and insights.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Provide Constructive Feedback</h3>
                    <p className="text-gray-600 font-sora text-sm">
                      When reviewing projects, offer helpful and constructive feedback.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Stay Professional</h3>
                    <p className="text-gray-600 font-sora text-sm">
                      Keep discussions focused on engineering topics and career development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 rounded-2xl p-8">
                <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6">Get Involved</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-inkaer-blue pl-4">
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Submit Projects</h3>
                    <p className="text-gray-600 font-sora text-sm mb-3">
                      Share your engineering work and get valuable peer feedback.
                    </p>
                    <Button size="sm" variant="outline">Learn More</Button>
                  </div>
                  
                  <div className="border-l-4 border-inkaer-blue pl-4">
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Review Others' Work</h3>
                    <p className="text-gray-600 font-sora text-sm mb-3">
                      Help fellow engineers improve by providing thoughtful reviews.
                    </p>
                    <Button size="sm" variant="outline">Start Reviewing</Button>
                  </div>
                  
                  <div className="border-l-4 border-inkaer-blue pl-4">
                    <h3 className="font-sora font-semibold text-gray-900 mb-2">Join Discussions</h3>
                    <p className="text-gray-600 font-sora text-sm mb-3">
                      Participate in engineering discussions and knowledge sharing.
                    </p>
                    <Button size="sm" variant="outline">Join Now</Button>
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

export default Community;
