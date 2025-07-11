
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X, Crown, Star, Zap } from 'lucide-react';

interface FeatureDetails {
  included: boolean;
  value?: string;
  note?: string;
}

interface PricingProps {
  isLoggedIn?: boolean;
  currentPlan?: 'freemium' | 'premium';
}

const Pricing = ({ isLoggedIn = false, currentPlan = 'freemium' }: PricingProps) => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Freemium",
      subtitle: "(Certified & Uncertified)",
      price: "Free",
      popular: false,
      description: "Perfect for getting started with engineering project sharing",
      features: {
        "Submit Projects": { included: true, value: "Unlimited" } as FeatureDetails,
        "Peer Reviews": { included: true, value: "Unlimited" } as FeatureDetails,
        "See Employer Challenges": { included: false } as FeatureDetails,
        "Apply for Jobs": { included: false } as FeatureDetails,
        "Project Boosting (More Peer Visibility)": { included: false } as FeatureDetails,
        "Rank Visibility to Employers": { included: true, note: "Certified Only" } as FeatureDetails,
        "Certification Badge": { included: true, note: "Certified Only" } as FeatureDetails,
        "Priority Job Applications": { included: false } as FeatureDetails,
        "Profile Boosting (More Employer Visibility)": { included: false } as FeatureDetails
      }
    },
    {
      name: "Premium",
      subtitle: "(Certified & Uncertified)",
      price: isYearly ? "$99.99/yr" : "$9.99/mo",
      popular: true,
      description: "Unlock full access to job opportunities and enhanced visibility",
      features: {
        "Submit Projects": { included: true, value: "Unlimited" } as FeatureDetails,
        "Peer Reviews": { included: true, value: "Unlimited" } as FeatureDetails,
        "See Employer Challenges": { included: true } as FeatureDetails,
        "Apply for Jobs": { included: true } as FeatureDetails,
        "Project Boosting (More Peer Visibility)": { included: true } as FeatureDetails,
        "Rank Visibility to Employers": { included: true, note: "Certified Only" } as FeatureDetails,
        "Certification Badge": { included: true, note: "Certified Only" } as FeatureDetails,
        "Priority Job Applications": { included: true } as FeatureDetails,
        "Profile Boosting (More Employer Visibility)": { included: true } as FeatureDetails
      }
    }
  ];

  const getButtonText = (planName: string) => {
    if (!isLoggedIn) {
      return "Get Started";
    }
    
    const planKey = planName.toLowerCase() as 'freemium' | 'premium';
    if (currentPlan === planKey) {
      return "Current Plan";
    }
    
    if (planKey === 'premium') {
      return "Upgrade";
    } else {
      return "Downgrade";
    }
  };

  const getButtonProps = (planName: string) => {
    if (!isLoggedIn) {
      return { disabled: false, variant: "default" as const };
    }
    
    const planKey = planName.toLowerCase() as 'freemium' | 'premium';
    if (currentPlan === planKey) {
      return { disabled: true, variant: "secondary" as const };
    }
    
    return { disabled: false, variant: "default" as const };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        {isLoggedIn ? <LoggedInNavbar /> : <Navbar />}
        
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto mb-8">
              Select the plan that fits your career goals and unlock opportunities to showcase your engineering skills.
            </p>
            
            {/* Monthly/Yearly Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`font-sora font-medium ${!isYearly ? 'text-inkaer-blue' : 'text-gray-600'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-inkaer-blue' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`font-sora font-medium ${isYearly ? 'text-inkaer-blue' : 'text-gray-600'}`}>
                Yearly
                <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Save 17%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Certification Explanation */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4 text-center">
                Certified vs Uncertified
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <h3 className="font-sora font-semibold text-green-800">Certified Engineers</h3>
                  </div>
                  <p className="text-green-700 font-sora text-sm">
                    Engineers who have completed our verification process through peer reviews and assessments. 
                    They receive enhanced visibility to employers and priority access to opportunities.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-blue-600" />
                    <h3 className="font-sora font-semibold text-blue-800">Uncertified Engineers</h3>
                  </div>
                  <p className="text-blue-700 font-sora text-sm">
                    Engineers building their portfolio and working towards certification. 
                    Full access to platform features with the opportunity to become certified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                    plan.popular 
                      ? 'ring-2 ring-inkaer-blue scale-105 border-inkaer-blue' 
                      : 'border border-gray-200'
                  } ${isLoggedIn && currentPlan === plan.name.toLowerCase() ? 'ring-2 ring-green-500' : ''} transition-all duration-300 hover:shadow-2xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-inkaer-blue to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-sora font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {isLoggedIn && currentPlan === plan.name.toLowerCase() && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-sora font-semibold">
                        Current Plan
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
                    <div className="text-4xl font-sora font-bold text-inkaer-blue mb-4">
                      {plan.price}
                    </div>
                    <p className="text-gray-600 font-sora text-sm mb-6">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
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
                          {details.note && (
                            <span className="ml-2 text-xs font-sora text-gray-500 italic">
                              ({details.note})
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full font-sora font-semibold py-3 rounded-full transition-all duration-200 ${
                      plan.popular && !getButtonProps(plan.name).disabled
                        ? 'bg-inkaer-blue hover:bg-inkaer-dark-blue text-white hover:scale-105'
                        : ''
                    }`}
                    variant={getButtonProps(plan.name).variant}
                    disabled={getButtonProps(plan.name).disabled}
                  >
                    {getButtonText(plan.name)}
                  </Button>
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
