
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftNavItems = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Projects', href: '#projects' },
    { label: 'Ranks', href: '#ranks' },
    { label: 'Certification', href: '#certification' }
  ];

  const rightNavItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Job Postings', href: '#job-postings' },
    { label: 'Sign In', href: '#sign-in' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/43b0acd6-b3f5-4c6c-8343-272a5aefe7c2.png" 
              alt="Inkaer" 
              className="h-8 w-auto"
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {rightNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-inkaer hover:opacity-90 text-white font-sora font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            <div className="space-y-2">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button className="w-full bg-gradient-inkaer hover:opacity-90 text-white font-sora font-semibold py-3 rounded-full">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
