import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, FileText, Code, Users, Award, TrendingUp, Upload, Search } from 'lucide-react';

const Documentation = () => {
  const sections = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Getting Started",
      description: "Learn how to create your account and upload your first project",
      topics: ["Account Setup", "Profile Completion", "First Project Upload", "Verification Process"]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Project Submissions",
      description: "Best practices for submitting engineering projects",
      topics: ["Project Documentation", "File Formats", "Quality Guidelines", "Submission Process"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Peer Review System",
      description: "Understanding how reviews work and how to give quality feedback",
      topics: ["Review Process", "Rating Criteria", "Giving Feedback", "Review Ethics"]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certifications",
      description: "How to earn and maintain your engineering certifications",
      topics: ["Certification Levels", "Requirements", "ME Certification Path", "Renewal Process"]
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Rankings & Scoring",
      description: "Learn how our ranking system works and how to improve your score",
      topics: ["Scoring Algorithm", "Rank Calculation", "Improvement Tips", "Leaderboards"]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API & Integration",
      description: "Technical documentation for developers and integrations",
      topics: ["API Endpoints", "Authentication", "Webhooks", "SDK Documentation"]
    }
  ];

  const quickStart = [
    {
      step: "1",
      title: "Create Your Account",
      description: "Sign up with your professional email and complete your engineering profile"
    },
    {
      step: "2",
      title: "Upload Your First Project",
      description: "Submit a well-documented engineering project with clear problem statements"
    },
    {
      step: "3",
      title: "Participate in Reviews",
      description: "Review other engineers' work to unlock the peer review system"
    },
    {
      step: "4",
      title: "Earn Your Certification",
      description: "Complete requirements to earn your ME1 (Beginner Mechanical Engineer) certification"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-gray-900 mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
              Everything you need to know to get the most out of Inkaer's engineering platform
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sora"
              />
            </div>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6 flex items-center">
              <Book className="h-6 w-6 mr-2 text-blue-600" />
              Quick Start Guide
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStart.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-sora font-bold text-blue-600">{item.step}</span>
                  </div>
                  <h3 className="font-sora font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-sora">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <div className="text-blue-600">{section.icon}</div>
                  </div>
                  <h3 className="font-sora font-bold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-600 font-sora text-sm mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-gray-500 font-sora hover:text-blue-600 cursor-pointer">
                      • {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-sora font-semibold text-gray-900 mb-2">How do I improve my project rating?</h3>
                <p className="text-gray-600 font-sora text-sm">
                  Focus on comprehensive documentation, clear problem statements, detailed methodology, 
                  and include visual aids like diagrams or charts. Peer reviewers value clarity and completeness.
                </p>
              </div>
              <div>
                <h3 className="font-sora font-semibold text-gray-900 mb-2">What file formats are supported?</h3>
                <p className="text-gray-600 font-sora text-sm">
                  We support PDF, DOCX, CAD files (STEP, IGES, DWG), images (PNG, JPG), and code files. 
                  Maximum file size is 100MB for freemium users, unlimited for premium users.
                </p>
              </div>
              <div>
                <h3 className="font-sora font-semibold text-gray-900 mb-2">How long does the review process take?</h3>
                <p className="text-gray-600 font-sora text-sm">
                  Most projects receive initial reviews within 48-72 hours. Complex projects may take longer. 
                  You'll receive notifications as reviews are completed.
                </p>
              </div>
              <div>
                <h3 className="font-sora font-semibold text-gray-900 mb-2">Can I appeal a review decision?</h3>
                <p className="text-gray-600 font-sora text-sm">
                  Yes, if you believe a review was unfair or inaccurate, you can submit an appeal through your 
                  project dashboard. Our moderation team will review the case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;