
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X, Shield, Star } from 'lucide-react';

interface PricingProps {
  isLoggedIn?: boolean;
  currentPlan?: 'freemium' | 'premium';
}

const Pricing = ({ isLoggedIn = false, currentPlan = 'freemium' }: PricingProps) => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        {isLoggedIn ? <LoggedInNavbar /> : <Navbar />}
        
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-sora font-bold text-gray-900 mb-6">
                Choose Your Plan
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-2xl mx-auto mb-8">
                Select the plan that fits your career goals and unlock opportunities to showcase your engineering skills.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-full font-sora font-semibold transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-inkaer-blue text-white'
                      : 'text-gray-600 hover:text-inkaer-blue'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-full font-sora font-semibold transition-all flex items-center gap-2 ${
                    billingCycle === 'yearly'
                      ? 'bg-inkaer-blue text-white'
                      : 'text-gray-600 hover:text-inkaer-blue'
                  }`}
                >
                  Yearly
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Save 17%</span>
                </button>
              </div>
            </div>

            {/* Certified vs Uncertified Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-sora font-bold text-center text-gray-900 mb-8">
                Certified vs Uncertified
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-sora font-bold text-green-800">Certified Engineers</h3>
                  </div>
                  <p className="text-gray-700 font-sora">
                    Engineers who have completed our verification process through peer reviews and assessments. This gives them enhanced visibility to employers and priority access to opportunities.
                  </p>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-sora font-bold text-blue-800">Uncertified Engineers</h3>
                  </div>
                  <p className="text-gray-700 font-sora">
                    Engineers building their portfolio and working towards certification. Full access to learning resources and community features to become certified.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Freemium Plan */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-sora font-bold text-gray-900 mb-2">
                      Freemium
                    </h3>
                    <p className="text-gray-600 font-sora mb-4">(Certified & Uncertified)</p>
                    <div className="mb-4">
                      <span className="text-5xl font-sora font-bold text-gray-900">Free</span>
                    </div>
                    <p className="text-gray-600 font-sora">
                      Perfect for getting started with engineering project rankings
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Submit Projects</span>
                      <span className="text-blue-600 font-sora font-semibold">Unlimited</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Peer Reviews</span>
                      <span className="text-blue-600 font-sora font-semibold">Unlimited</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 font-sora">See Employer Challenges</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 font-sora">Apply for Jobs</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Project Boosting (More Peer Visibility)</span>
                      <span className="text-gray-500 font-sora text-sm">(Verified Only)</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Rank Visibility to Employers</span>
                      <span className="text-gray-500 font-sora text-sm">(Verified Only)</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-sora">Certification Badge <span className="text-gray-500 text-sm">(Verified Only)</span></span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 font-sora">Pre-Job Applications</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 font-sora">Profile Boosting (More Employer Visibility)</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Storage Limit</span>
                      <span className="text-orange-600 font-sora font-semibold">100MB</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full font-sora font-semibold py-3 text-lg transition-all duration-200 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 ${
                      currentPlan === 'freemium' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    variant="outline"
                    disabled={currentPlan === 'freemium'}
                  >
                    {currentPlan === 'freemium' ? 'Current Plan' : 'Get Started'}
                  </Button>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-inkaer-blue ring-2 ring-inkaer-blue/20 scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-inkaer-blue text-white px-6 py-2 rounded-full text-sm font-sora font-semibold">
                    Most Popular
                  </span>
                </div>

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-sora font-bold text-gray-900 mb-2">
                      Premium
                    </h3>
                    <p className="text-gray-600 font-sora mb-4">(Certified & Uncertified)</p>
                    <div className="mb-4">
                      <span className="text-5xl font-sora font-bold text-inkaer-blue">
                        ${billingCycle === 'yearly' ? '8.25' : '9.99'}
                      </span>
                      <span className="text-gray-600 font-sora ml-2">/mo</span>
                    </div>
                    <p className="text-gray-600 font-sora">
                      Unlock full access to job opportunities and enhanced visibility
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Submit Projects</span>
                      <span className="text-blue-600 font-sora font-semibold">Unlimited</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Peer Reviews</span>
                      <span className="text-blue-600 font-sora font-semibold">Unlimited</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-sora">See Employer Challenges</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-sora">Apply for Jobs</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Project Boosting (More Peer Visibility)</span>
                      <span className="text-gray-500 font-sora text-sm">(Verified Only)</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Rank Visibility to Employers</span>
                      <span className="text-gray-500 font-sora text-sm">(Verified Only)</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-sora">Certification Badge <span className="text-gray-500 text-sm">(Verified Only)</span></span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-sora">Priority Job Applications</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-sora">Profile Boosting (More Employer Visibility)</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-gray-700 font-sora">Storage</span>
                      <span className="text-green-600 font-sora font-semibold">Unlimited</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full font-sora font-semibold py-3 text-lg transition-all duration-200 bg-inkaer-blue hover:bg-inkaer-dark-blue text-white ${
                      currentPlan === 'premium' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={currentPlan === 'premium'}
                  >
                    {currentPlan === 'premium' ? 'Current Plan' : 'Get Started'}
                  </Button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-sora font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="font-sora font-semibold text-gray-900 mb-3">
                    What's the difference between Certified and Uncertified?
                  </h3>
                  <p className="text-gray-600 font-sora">
                    Certified users have completed our verification process, demonstrating their engineering expertise through peer reviews and assessments. This gives them enhanced visibility to employers and priority access to opportunities.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="font-sora font-semibold text-gray-900 mb-3">
                    Can I upgrade or downgrade my plan anytime?
                  </h3>
                  <p className="text-gray-600 font-sora">
                    Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the end of your current billing cycle.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="font-sora font-semibold text-gray-900 mb-3">
                    What's included in the storage limit?
                  </h3>
                  <p className="text-gray-600 font-sora">
                    Storage includes all your project files, images, documents, and portfolio content. Premium users get unlimited storage for all content types.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="font-sora font-semibold text-gray-900 mb-3">
                    Are certifications recognized by employers?
                  </h3>
                  <p className="text-gray-600 font-sora">
                    Our certifications are peer-reviewed and skill-verified. Premium users can add verified badges to their LinkedIn profiles and resumes.
                  </p>
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

export default Pricing;
