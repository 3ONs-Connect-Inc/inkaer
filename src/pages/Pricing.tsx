
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X, Crown, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Freemium",
      subtitle: "(Uncertified)",
      price: "Free",
      popular: false,
      features: {
        "Submit Projects": { included: true, value: "Unlimited" },
        "Peer Reviews": { included: true, value: "Unlimited" },
        "See Employer Challenges": { included: false },
        "Apply for Jobs": { included: false },
        "Project Boosting (More Peer Visibility)": { included: false },
        "Rank Visibility to Employers": { included: false },
        "Certification Badge": { included: false },
        "Priority Job Applications": { included: false },
        "Profile Boosting (More Employer Visibility)": { included: false }
      }
    },
    {
      name: "Certified",
      subtitle: "Freemium",
      price: "Free",
      popular: false,
      features: {
        "Submit Projects": { included: true, value: "Unlimited" },
        "Peer Reviews": { included: true, value: "Unlimited" },
        "See Employer Challenges": { included: false },
        "Apply for Jobs": { included: false },
        "Project Boosting (More Peer Visibility)": { included: false },
        "Rank Visibility to Employers": { included: true },
        "Certification Badge": { included: true },
        "Priority Job Applications": { included: false },
        "Profile Boosting (More Employer Visibility)": { included: false }
      }
    },
    {
      name: "Uncertified",
      subtitle: "Premium",
      price: "$9.99/mo",
      popular: true,
      features: {
        "Submit Projects": { included: true, value: "Unlimited" },
        "Peer Reviews": { included: true, value: "Unlimited" },
        "See Employer Challenges": { included: true },
        "Apply for Jobs": { included: true },
        "Project Boosting (More Peer Visibility)": { included: true },
        "Rank Visibility to Employers": { included: false },
        "Certification Badge": { included: false },
        "Priority Job Applications": { included: false },
        "Profile Boosting (More Employer Visibility)": { included: false }
      }
    },
    {
      name: "Certified",
      subtitle: "Premium",
      price: "$9.99/mo",
      popular: false,
      features: {
        "Submit Projects": { included: true, value: "Unlimited" },
        "Peer Reviews": { included: true, value: "Unlimited" },
        "See Employer Challenges": { included: true },
        "Apply for Jobs": { included: true },
        "Project Boosting (More Peer Visibility)": { included: true },
        "Rank Visibility to Employers": { included: true },
        "Certification Badge": { included: true },
        "Priority Job Applications": { included: true },
        "Profile Boosting (More Employer Visibility)": { included: true }
      }
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
        
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
              Rank Levels & Pricing Model
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto mb-12">
              Choose the plan that fits your career goals and unlock opportunities to showcase your engineering skills.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                    plan.popular 
                      ? 'ring-2 ring-inkaer-blue scale-105 border-inkaer-blue' 
                      : 'border border-gray-200'
                  } transition-all duration-300 hover:shadow-2xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-inkaer-blue to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-sora font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-sora font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 font-sora text-sm mb-4">
                      {plan.subtitle}
                    </p>
                    <div className="text-4xl font-sora font-bold text-inkaer-blue mb-6">
                      {plan.price}
                    </div>
                    
                    <Button 
                      className={`w-full py-3 rounded-full font-sora font-semibold transition-all duration-200 ${
                        plan.popular
                          ? 'bg-inkaer-blue hover:bg-inkaer-dark-blue text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {plan.price === "Free" ? "Get Started" : "Upgrade Now"}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(plan.features).map(([feature, details]) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {details.included ? (
                            <Check className="w-5 h-5 text-green-500" />
                          ) : (
                            <X className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-sora text-gray-700">
                            {feature}
                          </span>
                          {details.value && (
                            <span className="ml-2 text-sm font-sora font-semibold text-inkaer-blue">
                              {details.value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-sora font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-sora font-semibold text-gray-900 mb-2">
                  What's the difference between Certified and Uncertified?
                </h3>
                <p className="text-gray-600 font-sora">
                  Certified users have completed our verification process, demonstrating their engineering expertise through peer reviews and assessments. This gives them enhanced visibility to employers and priority access to opportunities.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-sora font-semibold text-gray-900 mb-2">
                  Can I upgrade or downgrade my plan anytime?
                </h3>
                <p className="text-gray-600 font-sora">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the end of your current billing cycle.
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

export default Pricing;
