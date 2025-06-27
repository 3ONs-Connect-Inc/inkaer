
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Featured Projects", href: "#projects" },
        { name: "Rankings", href: "#rankings" },
        { name: "Certification", href: "#certification" }
      ]
    },
    {
      title: "For Engineers",
      links: [
        { name: "Get Started", href: "#get-started" },
        { name: "Dashboard", href: "#dashboard" },
        { name: "Skill Assessment", href: "#assessment" },
        { name: "Career Growth", href: "#career" }
      ]
    },
    {
      title: "For Employers",
      links: [
        { name: "Post Jobs", href: "#post-jobs" },
        { name: "Find Talent", href: "#find-talent" },
        { name: "Pricing", href: "#pricing" },
        { name: "Success Stories", href: "#success" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Community", href: "#community" },
        { name: "Support", href: "#support" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <img 
                  src="/lovable-uploads/43b0acd6-b3f5-4c6c-8343-272a5aefe7c2.png" 
                  alt="Inkaer" 
                  className="h-8 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-gray-400 font-sora leading-relaxed">
                  Get hired based on real skills, not resumes. Join thousands of engineers showcasing their true potential.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="font-sora">hello@inkaer.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="font-sora">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sora">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-sora font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-inkaer-blue transition-colors duration-200 font-sora"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-sora font-bold text-white">
              Stay Updated with Latest Challenges
            </h3>
            <p className="text-gray-400 font-sora max-w-2xl mx-auto">
              Get notified about new engineering challenges, platform updates, and career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-inkaer-blue font-sora"
              />
              <button className="bg-gradient-inkaer hover:opacity-90 text-white font-sora font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-sora text-sm">
              © 2024 Inkaer. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-inkaer-blue transition-colors duration-200 font-sora text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-inkaer-blue transition-colors duration-200 font-sora text-sm">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-inkaer-blue transition-colors duration-200 font-sora text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
