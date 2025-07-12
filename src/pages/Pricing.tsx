
import React, { useState } from 'react';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X, Crown, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const yearlyPrice = 99;
  const monthlyPrice = 9.99;

  const faqs = [
    {
      question: "What's included in the Premium plan?",
      answer: "Premium includes unlimited project uploads, advanced analytics, priority support, exclusive engineering challenges, certification programs, and unlimited storage for all your projects."
    },
    {
      question: "Can I switch between monthly and yearly billing?",
      answer: "Yes, you can switch between monthly and yearly billing at any time from your account settings. When switching to yearly, you'll receive a prorated credit for your current billing period."
    },
    {
      question: "What happens to my projects if I downgrade?",
      answer: "Your existing projects will remain accessible, but you'll be limited to the Freemium storage limit of 100MB. You can upgrade again at any time to regain full access."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! We offer a 50% student discount on all Premium plans. Contact our support team with your student ID for verification."
    },
    {
      question: "Is there a free trial?",
      answer: "While we don't offer a traditional free trial, our Freemium plan gives you access to core features with a 100MB storage limit so you can explore the platform."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely! You can cancel your subscription at any time. Your Premium features will remain active until the end of your current billing period."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <LoggedInNavbar />
      
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
              Unlock your engineering potential with our flexible pricing plans
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full">
              <div className="flex">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full font-sora font-medium transition-all ${
                    !isYearly
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full font-sora font-medium transition-all ${
                    isYearly
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Yearly <span className="text-green-600 text-sm ml-1">Save 17%</span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Freemium Plan */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-sora font-bold text-gray-900 mb-2">Freemium</h3>
                <div className="text-4xl font-sora font-bold text-gray-900 mb-2">
                  $0
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600 font-sora">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Basic project uploads</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Community access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Basic challenges</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">100MB storage limit</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="font-sora text-gray-400">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="font-sora text-gray-400">Certification programs</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-sora font-semibold py-3 rounded-xl">
                Current Plan
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-blue-200 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-sora font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-sora font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                  Premium <Crown className="w-6 h-6 text-yellow-500" />
                </h3>
                <div className="text-4xl font-sora font-bold text-gray-900 mb-2">
                  ${isYearly ? yearlyPrice : monthlyPrice}
                  <span className="text-lg text-gray-500 font-normal">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                <p className="text-gray-600 font-sora">For serious engineers</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Unlimited project uploads</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Unlimited storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Exclusive challenges</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-sora text-gray-700">Certification programs</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-sora font-semibold py-3 rounded-xl">
                Upgrade Now
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-sora font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 font-sora">
                Everything you need to know about our pricing plans
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                    <AccordionTrigger className="text-left font-sora font-semibold text-gray-900 hover:text-blue-600 py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-sora text-gray-600 pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
