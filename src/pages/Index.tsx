
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EndorsementSection from '@/components/EndorsementSection';
import ShowWhatYouGotSection from '@/components/ShowWhatYouGotSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <EndorsementSection />
      <ShowWhatYouGotSection />
      <FeaturedProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
