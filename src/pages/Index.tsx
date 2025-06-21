import React from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer'; // Import the new Footer component
import { Button } from '@/components/ui/button';
import { Star, Users, CheckCircle, Clock, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialGetIllustration from '@/assets/SocialGet.png';
import PlugIllustration from '@/components/PlugIllustration';
import HowToOrder from '@/components/HowToOrder';
import FAQSection from '@/components/FAQSection'; // Import the new FAQSection component

const Index: React.FC = () => {
  console.log("Index page loaded");
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />

      <main className="container mx-auto px-4 py-12 text-center flex-grow">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>Rated <span className="font-bold">4.8/5</span> from over 100K+ customers</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Buy <span className="text-brand-secondary-blue">Followers</span>, Likes, Subscribers, <span className="text-brand-secondary-blue">Views</span> & <span className="text-brand-primary-500">Grow Expotentially</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Helping brands and influencers build social proof through innovative social media services
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Users className="h-5 w-5 mr-2 text-brand-primary-500" />
              <span>1.5B+ People Reached</span>
            </div>
            <div className="flex items-center bg-brand-primary-100 dark:bg-brand-primary-900/30 text-brand-primary-700 dark:text-brand-primary-300 rounded-full px-4 py-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>12,751 followers delivered</span>
              <Clock className="h-4 w-4 ml-3 mr-1" />
              <span>8 mins ago</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <MousePointer2 className="h-5 w-5 mr-2 text-brand-primary-500" />
              <span>5M+ Monthly Clicks</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-20">
            <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white text-lg px-8 py-6 rounded-lg">
              View All Services
            </Button>
            <Link to="/dashboard">
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-lg px-8 py-6 rounded-lg">
                Client Portal
              </Button>
            </Link>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="relative w-full max-w-5xl mx-auto mb-20">
          <img src={SocialGetIllustration} alt="SocialGet Illustration" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Why Customers Choose Us Section */}
        <div className="relative py-16 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden mb-20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23b01c1c\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
              <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
                  Why Customers <span className="text-brand-primary-500">Choose Us</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Read what our customers think about this service. We take your feedback
                  seriously - help us improve by <a href="#" className="text-brand-primary-500 hover:underline">leaving a review</a>.
                </p>
              </div>
              <PlugIllustration />
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">100k+</span>
                <span className="text-gray-600 dark:text-gray-400">Happy Customers</span>
              </div>
              <div className="flex flex-col items-center border-l border-r border-gray-200 dark:border-gray-700 px-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">1.7 Billion+</span>
                <span className="text-gray-600 dark:text-gray-400">Population Reached</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">4.8</span>
                <span className="text-gray-600 dark:text-gray-400">Review rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to Order Section */}
        <HowToOrder />

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Index;