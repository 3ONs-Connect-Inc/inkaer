import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 font-sora text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 font-sora leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, upload projects, 
                or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 font-sora space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Professional background and engineering expertise</li>
                <li>Project files, documentation, and portfolio content</li>
                <li>Peer review comments and ratings</li>
                <li>Communication with our support team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 font-sora leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 font-sora space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process peer reviews and calculate rankings</li>
                <li>Generate certifications and skill assessments</li>
                <li>Communicate with you about your account and our services</li>
                <li>Connect you with potential employers and opportunities</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 font-sora leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 font-sora space-y-2">
                <li>With other users as part of the peer review process</li>
                <li>With potential employers when you opt-in to job matching</li>
                <li>With service providers who assist in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                We retain your information for as long as your account is active or as needed to provide you services. 
                We may retain certain information after account closure for legitimate business purposes, 
                including compliance with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-600 font-sora leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 font-sora space-y-2">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Control the visibility of your projects and profile</li>
                <li>Request a copy of your data</li>
                <li>Object to certain processing of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                We use cookies and similar technologies to collect information about how you use our platform. 
                This helps us improve user experience, analyze usage patterns, and provide personalized content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                Our platform may contain links to third-party websites or integrate with third-party services. 
                We are not responsible for the privacy practices of these external services and encourage you to 
                review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we discover that we have collected such information, 
                we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any significant changes 
                by posting the new policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 font-sora leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@inkaer.com or 
                through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;