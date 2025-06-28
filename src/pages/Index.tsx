
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EndorsementSection from '@/components/EndorsementSection';
import ShowWhatYouGotSection from '@/components/ShowWhatYouGotSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import Footer from '@/components/Footer';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Static Background */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid className="absolute inset-0 size-full" />
      </div>

      {/* Content with proper z-index */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <EndorsementSection />
        <ShowWhatYouGotSection />
        <FeaturedProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
