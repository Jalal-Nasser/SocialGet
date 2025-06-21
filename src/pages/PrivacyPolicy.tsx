import React from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">Privacy Policy</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Your privacy is important to us. It is SocialGet's policy to respect your privacy regarding any information we may collect from you across our website, <a href="[Your Website URL]" className="text-brand-primary-500 hover:underline">[Your Website URL]</a>, and other sites we own and operate.
          </p>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Collected Information</h2>
          <p>
            SocialGet may collect and use Users personal information for the following purposes:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
              <li>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li>To process payments: We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
              <li>To send periodic emails: We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Protect Your Information</h2>
          <p>
            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing Your Personal Information</h2>
          <p>
            We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Acceptance of These Terms</h2>
          <p>
            By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;