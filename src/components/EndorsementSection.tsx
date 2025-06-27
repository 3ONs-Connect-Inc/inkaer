
import React from 'react';

const EndorsementSection = () => {
  const companies = [
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
    },
    {
      name: 'PWC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/PwC_Logo.svg'
    },
    {
      name: 'Bombardier',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Bombardier_logo.svg'
    }
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h3 className="text-lg font-sora font-medium text-gray-600">
            Endorsed by early contributors from:
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company) => (
              <div key={company.name} className="flex items-center justify-center h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="inline-flex items-center bg-gradient-inkaer-light px-6 py-3 rounded-full">
            <span className="text-inkaer-blue font-sora font-semibold text-lg">
              🎉 Inkaer is free to use
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndorsementSection;
