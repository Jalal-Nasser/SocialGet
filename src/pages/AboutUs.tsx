import React from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">About Us</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Welcome to SocialGet! We are dedicated to helping individuals and businesses enhance their social media presence. Our mission is to provide reliable, high-quality services that help you grow your audience and engagement across various platforms.
          </p>
          <p>
            Founded in 2024, SocialGet started with a simple goal: to make social media growth accessible and effective for everyone. We understand the challenges of building a strong online presence, and we're here to simplify that process for you.
          </p>
          <p>
            Our team is composed of social media experts and tech enthusiasts who are passionate about delivering exceptional results. We continuously update our services to align with the latest trends and algorithms, ensuring you always get the best value.
          </p>
          <p>
            Thank you for choosing SocialGet. We look forward to helping you achieve your social media goals!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;