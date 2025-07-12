
import React from 'react';
import Navbar from '@/components/Navbar';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface PricingProps {
  isLoggedIn?: boolean;
  currentPlan?: 'freemium' | 'premium';
}

const Pricing = ({ isLoggedIn = false, currentPlan = 'freemium' }: PricingProps) => {
  const plans = [
    {
      name: 'Freemium',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started with engineering projects',
      features: [
        'Access to basic engineering challenges',
        'Community forum participation',
        'Basic project portfolio',
        'Peer review system',
        'Basic skill assessments',
        '100MB storage limit',
        'Standard support'
      ],
      limitations: [
        'Limited to 3 project uploads per month',
        'No advanced certifications',
        'Basic analytics only'
      ],
      buttonText: currentPlan === 'freemium' ? 'Current Plan' : 'Get Started',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Premium',
      price: '$29',
      period: 'per month',
      description: 'Unlock your full engineering potential',
      features: [
        'Everything in Freemium',
        'Unlimited project uploads',
        'Advanced engineering challenges',
        'Professional certifications',
        'Advanced analytics & insights',
        'Priority mentor matching',
        'Industry project collaborations',
        'Resume builder with verification',
        'Unlimited storage',
        'Priority support',
        'Exclusive webinars & workshops',
        'LinkedIn certification badge'
      ],
      limitations: [],
      buttonText: currentPlan === 'premium' ? 'Current Plan' : 'Upgrade Now',
      buttonVariant: 'default' as const,
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,170,254,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,120,200,0.08)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        {isLoggedIn ? <LoggedInNavbar /> : <Navbar />}
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-sora font-bold text-gray-900 mb-8">
                Choose Your Plan
              </h1>
              <p className="text-2xl text-gray-600 font-sora max-w-3xl mx-auto">
                Start free and upgrade when you're ready to unlock advanced features
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border transition-all duration-300 hover:shadow-xl relative ${
                    plan.popular 
                      ? 'border-inkaer-blue ring-2 ring-inkaer-blue/20 scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-inkaer-blue text-white px-6 py-2 rounded-full text-sm font-sora font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-sora font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-4xl font-sora font-bold text-gray-900">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-gray-600 font-sora ml-2">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-sora">
                        {plan.description}
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-sora">
                            {feature}
                          </span>
                        </div>
                      ))}
                      
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-start opacity-60">
                          <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 font-sora">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full font-sora font-semibold py-3 text-lg transition-all duration-200 ${
                        plan.popular
                          ? 'bg-inkaer-blue hover:bg-inkaer-dark-blue text-white'
                          : plan.buttonVariant === 'outline'
                          ? 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                          : ''
                      } ${
                        (currentPlan === 'freemium' && plan.name === 'Freemium') ||
                        (currentPlan === 'premium' && plan.name === 'Premium')
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : plan.buttonVariant}
                      disabled={
                        (currentPlan === 'freemium' && plan.name === 'Freemium') ||
                        (currentPlan === 'premium' && plan.name === 'Premium')
                      }
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-sora font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="font-sora font-semibold text-gray-900 mb-3">
                    Can I upgrade or downgrade anytime?
                  </h3>
                  <p className="text-gray-600 font-sora">
                    Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your billing cycle.
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="font-sora font-semibold text-gray-900 mb-3">
                    Is there a free trial for Premium?
                  </h3>
                  <p className="text-gray-600 font-sora">
                    We offer a generous freemium plan to get you started. You can upgrade to Premium anytime to unlock advanced features and unlimited access.
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
