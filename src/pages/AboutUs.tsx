import React from 'react';
import LandingHeader from '@/components/layout/LandingHeader'; // Fixed import
import Footer from '@/components/layout/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* ... rest of your content ... */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;