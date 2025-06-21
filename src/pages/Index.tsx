import React from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import { Button } from '@/components/ui/button';
import { Star, Users, CheckCircle, Clock, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialGetIllustration from '@/assets/SocialGet.png'; // Import the new image

const Index: React.FC = () => {
  console.log("Index page loaded"); // Added for debugging
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <LandingHeader />

      <main className="container mx-auto px-4 py-12 text-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>Rated <span className="font-bold">4.8/5</span> from over 100K+ customers</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Buy Followers, Likes, Subscribers, Views & <span className="text-brand-primary-500">Grow Expotentially</span>
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
            <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white text-lg px-8 py-6 rounded-lg">
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
      </main>
    </div>
  );
};

export default Index;