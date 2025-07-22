
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Help = () => {
  const faqs = [
    {
      question: "How do I submit my engineering projects?",
      answer: "Navigate to the 'Upload Portfolio' section, select your engineering domain, and follow the submission guidelines to upload your projects with detailed documentation."
    },
    {
      question: "What makes a good engineering project submission?",
      answer: "Include comprehensive documentation, clear problem statements, your approach, results, and any code or design files. The more detailed and well-organized your submission, the better."
    },
    {
      question: "How does the peer review process work?",
      answer: "Other engineers in your domain review your projects based on technical merit, documentation quality, and innovation. You'll also participate in reviewing others' work."
    },
    {
      question: "What are the benefits of getting certified?",
      answer: "Certified engineers get enhanced visibility to employers, priority access to job opportunities, and a verified badge that demonstrates their expertise."
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
                Help Center
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
                Find answers to common questions about using Inkaer.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-sora font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 font-sora leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/70 rounded-2xl p-8">
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 font-sora mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold rounded-full transition-colors duration-200"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Help;
