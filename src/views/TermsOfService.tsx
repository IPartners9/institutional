import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-navy py-12">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300 max-w-2xl text-sm uppercase tracking-widest">
            Last Updated: October 24, 2023
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="prose prose-lg text-charcoal font-sans leading-relaxed">
          <p className="mb-8">
            Please read these Terms of Service ("Terms") carefully before using the Ipanema Partners website or engaging our services. By accessing or using our Service, you agree to be bound by these Terms.
          </p>

          <h3 className="font-serif text-2xl text-navy font-bold mt-12 mb-4">1. Nature of Services</h3>
          <p className="mb-4">
            Ipanema Partners provides corporate structuring, fiduciary management, and administrative support services. <strong>We are not a law firm and do not provide legal or tax advice.</strong> All structures should be reviewed by independent legal and tax counsel in your relevant jurisdictions of residence and operation.
          </p>

          <h3 className="font-serif text-2xl text-navy font-bold mt-12 mb-4">2. Client Obligations</h3>
          <p className="mb-4">
            You agree to provide accurate, current, and complete information during the onboarding and compliance process. Failure to provide necessary KYC/AML documentation may result in the suspension or termination of services. You are responsible for ensuring that your activities comply with all applicable laws.
          </p>

          <h3 className="font-serif text-2xl text-navy font-bold mt-12 mb-4">3. Intellectual Property</h3>
          <p className="mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Ipanema Partners and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.
          </p>

          <h3 className="font-serif text-2xl text-navy font-bold mt-12 mb-4">4. Limitation of Liability</h3>
          <p className="mb-4">
            In no event shall Ipanema Partners, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h3 className="font-serif text-2xl text-navy font-bold mt-12 mb-4">5. Governing Law</h3>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
          </p>

          <h3 className="font-serif text-2xl text-navy font-bold mt-12 mb-4">6. Changes</h3>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
