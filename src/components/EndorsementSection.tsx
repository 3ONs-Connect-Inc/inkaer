
import React from 'react';
import { UpgradeBanner } from '@/components/ui/upgrade-banner';

const EndorsementSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 font-sora mb-6">
            Endorsed by early contributors from:
          </p>
          
          <div className="flex justify-center items-center space-x-12 mb-8 flex-wrap gap-y-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="Google" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="Microsoft" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PwC_Logo.svg/2560px-PwC_Logo.svg.png" alt="PwC" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bombardier_logo.svg/2560px-Bombardier_logo.svg.png" alt="Bombardier" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
          
          <UpgradeBanner
            buttonText="Inkaer is free to use"
            description="with verified skill assessments"
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default EndorsementSection;
