
import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const yearlyPrice = 99;
  const monthlyPrice = 9.99;

  const faqs = [
    {
      question: "What's the difference between Certified and Uncertified?",
      answer: "Certified users have completed our verification process, demonstrating their engineering expertise through peer reviews and assessments. This gives them enhanced visibility to employers and priority access to opportunities."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the end of your current billing cycle."
    },
    {
      question: "What happens to my projects if I downgrade?",
      answer: "Your existing projects will remain accessible, but you'll be limited to the Freemium storage limit. You can upgrade again at any time to regain full access."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! We offer a 50% student discount on all Premium plans. Contact our support team with your student ID for verification."
    },
    {
      question: "Is there a free trial?",
      answer: "While we don't offer a traditional free trial, our Freemium plan gives you access to core features so you can explore the platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LoggedInNavbar />
      
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Select the plan that fits your career goals and unlock opportunities to showcase your engineering skills.
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-200 p-1 rounded-full inline-flex">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    !isYearly
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    isYearly
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Yearly <span className="text-green-600 text-sm ml-1">Save 17%</span>
                </button>
              </div>
            </div>
          </div>

          {/* Certified vs Uncertified Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Certified Engineers */}
            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Check className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-bold text-green-800">Certified Engineers</h3>
              </div>
              <p className="text-sm text-green-700 leading-relaxed">
                Engineers who have completed our verification process through peer reviews and assessments. This provides enhanced visibility to employers and priority access to opportunities.
              </p>
            </div>

            {/* Uncertified Engineers */}
            <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">Uncertified Engineers</h3>
              </div>
              <p className="text-sm text-blue-700 leading-relaxed">
                Engineers building their portfolio and working towards certification. Full access to platform features and community to help you become certified.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Freemium Plan */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Freemium</h3>
                <p className="text-sm text-gray-600 mb-4">(Certified & Uncertified)</p>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  Free
                </div>
                <p className="text-gray-600">Perfect for getting started with engineering project sharing</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Submit Projects <span className="text-blue-500">Unlimited</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Peer Reviews <span className="text-blue-500">Unlimited</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Project Storage <span className="text-gray-500">100MB</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">See Employer Challenges</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Apply for Jobs</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Project Boosting (More Peer Visibility)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Rank Visibility to Employers <span className="text-gray-500">(Certified Only)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Certification Badge <span className="text-gray-500">(Certified Only)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Priority Job Applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Profile Boosting (More Employer Visibility)</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-xl">
                Get Started
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-400 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-sm text-gray-600 mb-4">(Certified & Uncertified)</p>
                <div className="text-5xl font-bold text-blue-500 mb-2">
                  ${isYearly ? yearlyPrice : monthlyPrice.toFixed(2)}{isYearly ? '' : '/mo'}
                  {isYearly && <span className="text-lg text-gray-500 font-normal">/year</span>}
                </div>
                <p className="text-gray-600">Unlock full access to job opportunities and enhanced visibility</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Submit Projects <span className="text-blue-500">Unlimited</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Peer Reviews <span className="text-blue-500">Unlimited</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Project Storage <span className="text-blue-500">Unlimited</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">See Employer Challenges</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Apply for Jobs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Project Boosting (More Peer Visibility)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Rank Visibility to Employers <span className="text-gray-500">(Certified Only)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Certification Badge <span className="text-gray-500">(Certified Only)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Priority Job Applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Profile Boosting (More Employer Visibility)</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl">
                Get Started
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-${index}`} className="border-0">
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 px-6 py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 px-6 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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

export default Pricing;
