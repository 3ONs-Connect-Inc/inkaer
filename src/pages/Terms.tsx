import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 font-sora text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                By accessing and using Inkaer's platform, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-600 font-sora leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of Inkaer's materials for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 font-sora space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on Inkaer's platform</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">4. Project Submissions</h2>
              <p className="text-gray-600 font-sora leading-relaxed mb-4">
                By submitting projects to Inkaer, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 font-sora space-y-2">
                <li>You own all rights to the submitted content</li>
                <li>Your submissions do not infringe on any third-party rights</li>
                <li>Your content is original and not plagiarized</li>
                <li>You grant Inkaer a license to display and evaluate your submissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">5. Peer Review System</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                Inkaer operates a peer review system where users evaluate each other's work. All reviews must be conducted professionally 
                and in good faith. Malicious or unfair reviews may result in account suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">6. Certification and Rankings</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                Certifications and rankings are based on peer evaluations and platform algorithms. While we strive for accuracy, 
                these are not professional certifications and should be viewed as skill indicators within our platform ecosystem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">7. Prohibited Uses</h2>
              <p className="text-gray-600 font-sora leading-relaxed mb-4">
                You may not use our service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 font-sora space-y-2">
                <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">9. Disclaimer</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                The information on this platform is provided on an 'as is' basis. To the fullest extent permitted by law, 
                this Company excludes all representations, warranties, conditions and terms related to our platform and the use of this platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit 
                to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at legal@inkaer.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;