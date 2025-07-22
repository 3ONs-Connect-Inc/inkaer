import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageCircle, Mail, Phone, FileText, Clock, CheckCircle } from 'lucide-react';

const Support = () => {
  const supportChannels = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Start Chat",
      primary: true
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "24/7 - Response within 24 hours",
      action: "Send Email",
      primary: false
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Speak directly with our technical team",
      availability: "Mon-Fri, 10AM-5PM EST",
      action: "Call Now",
      primary: false
    }
  ];

  const commonIssues = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Project Upload Issues",
      description: "Having trouble uploading your engineering projects?",
      solutions: ["Check file size limits", "Verify supported formats", "Clear browser cache"]
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Review Process Questions",
      description: "Need help understanding the peer review system?",
      solutions: ["Read review guidelines", "Check review criteria", "Contact reviewer"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Account & Billing",
      description: "Questions about your account or subscription?",
      solutions: ["Update payment method", "View billing history", "Manage subscription"]
    }
  ];

  const systemStatus = [
    { service: "Platform API", status: "Operational", color: "text-green-600" },
    { service: "File Upload Service", status: "Operational", color: "text-green-600" },
    { service: "Peer Review System", status: "Operational", color: "text-green-600" },
    { service: "Notification Service", status: "Operational", color: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-gray-900 mb-4">
              Support Center
            </h1>
            <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
              Get the help you need to succeed on Inkaer's engineering platform
            </p>
          </div>

          {/* Support Channels */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-200 ${
                  channel.primary ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  channel.primary ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                }`}>
                  {channel.icon}
                </div>
                <h3 className="text-xl font-sora font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 font-sora mb-4">{channel.description}</p>
                <p className="text-sm text-gray-500 font-sora mb-6">{channel.availability}</p>
                <button className={`w-full py-3 px-6 rounded-lg font-sora font-semibold transition-colors duration-200 ${
                  channel.primary 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {channel.action}
                </button>
              </div>
            ))}
          </div>

          {/* Common Issues */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-8 text-center">Common Issues & Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {commonIssues.map((issue, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{issue.icon}</div>
                  </div>
                  <h3 className="font-sora font-semibold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-gray-600 font-sora text-sm mb-4">{issue.description}</p>
                  <ul className="space-y-1 text-sm">
                    {issue.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-gray-500 font-sora hover:text-blue-600 cursor-pointer">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6">System Status</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {systemStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-sora font-medium text-gray-900">{item.service}</span>
                  <span className={`font-sora font-semibold ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-sora font-bold text-gray-900 mb-6 text-center">Still Need Help?</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sora font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sora"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sora font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sora"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-sora font-medium text-gray-700 mb-2">Issue Category</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sora">
                    <option>Select an issue category</option>
                    <option>Account & Billing</option>
                    <option>Project Upload</option>
                    <option>Peer Review</option>
                    <option>Technical Issues</option>
                    <option>Feature Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-sora font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sora"
                    placeholder="Brief description of your issue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sora font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-sora"
                    placeholder="Please provide detailed information about your issue..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-sora font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Submit Support Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;