import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Plus, Award, Ticket, Users, User, Twitter, Instagram, Youtube, Linkedin, Facebook, MessageSquare, Play } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { fetchServices, Service as SupabaseService } from '@/lib/services'; // Import Supabase service type and fetch function
import { showError } from '@/utils/toast';

// Custom Reddit SVG component (copied from LandingHeader for consistency)
const RedditIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.74c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 1.25-1.25zM9.71 6.05c.69 0 1.25.56 1.25 1.25 0 .69-.56 1.25-1.25 1.25a1.25 1.25 0 0 1 0-2.5zM7.77 8.4a3.21 3.21 0 0 1 3.21-3.21c.72 0 1.41.21 2 .58.03-.01.07-.02.11-.02s.08.01.12.01c1.03.07 1.94.53 2.59 1.19.1.1.26.1.36 0 .1-.1.1-.26 0-.36-.8-.8-1.89-1.31-3.11-1.4-.04-.01-.08-.02-.12-.02s-.08.01-.12-.02c-1.22.09-2.31.6-3.11 1.4-.1.1-.1.26 0 .36.1.1.26.1.36 0zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.56a9.77 9.77 0 0 0 4.5 0c1.06 2.57 3.14 4.58 5.74 5.56.01.05.01.1.01.15 0 4.41-3.59 8-8 8z"/>
  </svg>
);

const Dashboard = () => {
  const [uniquePlatforms, setUniquePlatforms] = useState<string[]>([]);
  const [loadingPlatforms, setLoadingPlatforms] = useState(true);

  useEffect(() => {
    const loadPlatforms = async () => {
      setLoadingPlatforms(true);
      try {
        const data = await fetchServices();
        const platforms = Array.from(new Set(data.map(service => service.platform)));
        setUniquePlatforms(platforms);
      } catch (error) {
        showError('Failed to load platforms for dashboard.');
        console.error('Error loading platforms:', error);
      } finally {
        setLoadingPlatforms(false);
      }
    };
    loadPlatforms();
  }, []);

  const categoryIcons: { [key: string]: React.ElementType } = {
    Twitter: Twitter,
    Instagram: Instagram,
    YouTube: Youtube,
    TikTok: Play,
    Facebook: Facebook,
    Reddit: RedditIcon,
    LinkedIn: Linkedin
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-brand-primary-500 to-brand-primary-600 text-white p-4 rounded-lg flex items-center justify-between shadow-md">
          <div className="flex items-center">
            <Award className="h-6 w-6 mr-3" />
            <span className="font-semibold">Win $200 in Credits — Enter Our Twitter Giveaway</span>
          </div>
          <Button variant="secondary" className="bg-white text-brand-primary-600 hover:bg-gray-100">
            Win $200
          </Button>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Add Funds To Balance Card */}
          <Card className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">Add Funds To Balance</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Make ordering seamless - no payment interruptions and ultra fast order processing.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-6">
              <div className="flex-1 space-y-2 mb-4 md:mb-0">
                <div className="flex items-center text-brand-primary-600 dark:text-brand-primary-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Skip Paying Gas Fees on Each Transaction</span>
                </div>
                <div className="flex items-center text-brand-primary-600 dark:text-brand-primary-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Exclusive Offers & Discounts</span>
                </div>
                <div className="flex items-center text-brand-primary-600 dark:text-brand-primary-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>VIP Customer Support</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
                  <Plus className="h-4 w-4 mr-2" /> Add Funds
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Make money with SocialGet Card */}
          <Card className="bg-gray-900 text-white shadow-md">
            <CardHeader>
              <CardTitle className="text-white">Make money with <span className="text-brand-primary-500">SocialGet</span></CardTitle>
              <CardDescription className="text-gray-300">
                Earn up to 40% lifetime commissions on your affiliates
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start">
              <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
                Become An Affiliate →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Order Now Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-gray-900 dark:text-gray-100 flex items-center">
                <Ticket className="h-6 w-6 mr-2" /> Order Now
              </CardTitle>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-brand-primary-500">View All</span>
                <span className="flex items-center">
                  <span className="mr-1">Sort By:</span>
                  <span className="font-semibold text-brand-primary-500">Popular</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="engagements" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="engagements">Engagements</TabsTrigger>
                  <TabsTrigger value="accounts">Accounts</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="engagements" className="mt-4">
                  {loadingPlatforms ? (
                    <p className="text-gray-600 dark:text-gray-400">Loading platforms...</p>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {uniquePlatforms.map((platform) => {
                        const Icon = categoryIcons[platform];
                        return (
                          <Link to="/services" key={platform}>
                            <Button variant="outline" className="flex items-center justify-between p-4 h-auto text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 w-full">
                              <span className="flex items-center">
                                {Icon && <Icon className="h-4 w-4 mr-2" />}
                                <span>{platform}</span>
                              </span>
                              <svg className="w-4 h-4 text-brand-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Button>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="accounts">
                  <p className="text-gray-600 dark:text-gray-400">Account services will be listed here.</p>
                </TabsContent>
                <TabsContent value="reviews">
                  <p className="text-gray-600 dark:text-gray-400">Review services will be listed here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Right Column Cards */}
          <div className="space-y-6">
            {/* Top Earners This Month Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100 flex items-center">
                  <Users className="h-6 w-6 mr-2" /> Top Earners This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'CodeWarrior', amount: '$56,210.56', rank: 1 },
                  { name: 'PServices', amount: '$47,112.44', rank: 2 },
                  { name: 'Infoagency', amount: '$22,706.09', rank: 3 },
                  { name: 'JSFK', amount: '$21,997.94', rank: 4 },
                ].map((earner, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      {earner.rank <= 3 ? (
                        <Award className={`h-5 w-5 mr-3 ${earner.rank === 1 ? 'text-yellow-500' : earner.rank === 2 ? 'text-gray-400' : 'text-amber-700'}`} />
                      ) : (
                        <span className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400 text-center">{earner.rank}</span>
                      )}
                      <User className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 p-1 mr-3 text-gray-600 dark:text-gray-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{earner.name}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{earner.amount}</span>
                  </div>
                ))}
                <Button className="w-full bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
                  Become An Affiliate →
                </Button>
              </CardContent>
            </Card>

            {/* Tickets Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-gray-900 dark:text-gray-100 flex items-center">
                  <Ticket className="h-6 w-6 mr-2" /> Tickets
                </CardTitle>
                <span className="text-brand-primary-500 text-sm">View All</span>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">No recent tickets.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;