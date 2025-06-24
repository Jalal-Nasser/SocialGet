import React from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">Terms of Service</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Welcome to SocialGet's Terms of Service. These terms and conditions outline the rules and regulations for the use of SocialGet's Website, located at [Your Website URL].
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use SocialGet if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Services</h2>
          <p>
            SocialGet provides social media marketing services, including but not limited to followers, likes, views, and comments for various social media platforms. All services are provided "as is" and "as available" without any warranties of any kind.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. User Obligations</h2>
          <p>
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of SocialGet. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within SocialGet.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Payments and Refunds</h2>
          <p>
            All payments are processed securely. Refunds are issued at the sole discretion of SocialGet management. We reserve the right to refuse a refund if the service has already been delivered or if the request does not meet our refund policy criteria.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall SocialGet, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;