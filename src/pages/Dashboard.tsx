import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Plus, Award, Ticket, Users, User, Twitter, Instagram, Youtube, Linkedin, Facebook, MessageSquare, Play } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { fetchServices, Service as SupabaseService } from '@/lib/services'; // Import Supabase service type and fetch function
import { showError } from '@/utils/toast';
import RedditIcon from '@/components/icons/RedditIcon'; // Import the new component

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
          <Card className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">Add Funds To Balance</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                Make ordering seamless - no payment interruptions and ultra fast order processing.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 pt-0">
              <div className="flex-1 space-y-3 mb-6 md:mb-0">
                <div className="flex items-center text-brand-primary-600 dark:text-brand-primary-400 font-medium">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Skip Paying Gas Fees on Each Transaction</span>
                </div>
                <div className="flex items-center text-brand-primary-600 dark:text-brand-primary-400 font-medium">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Exclusive Offers & Discounts</span>
                </div>
                <div className="flex items-center text-brand-primary-600 dark:text-brand-primary-400 font-medium">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>VIP Customer Support</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button className="w-full md:w-auto bg-brand-primary-500 hover:bg-brand-secondary-blue text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300">
                  <Plus className="h-5 w-5 mr-2" /> Add Funds
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Make money with SocialGet Card */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">Make money with <span className="text-brand-primary-400">SocialGet</span></CardTitle>
              <CardDescription className="text-gray-300 mt-1">
                Earn up to 40% lifetime commissions on your affiliates
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start p-6 pt-0">
              <Button className="w-full md:w-auto bg-brand-primary-500 hover:bg-brand-secondary-blue text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300">
                Become An Affiliate →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Order Now Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                <Ticket className="h-7 w-7 mr-3 text-brand-primary-500" /> Order Now
              </CardTitle>
              <div className="flex items-center space-x-4 text-sm">
                <Link to="/services" className="text-brand-primary-500 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 font-semibold transition-colors duration-200 flex items-center">
                  View All
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
                <span className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="mr-1">Sort By:</span>
                  <span className="font-semibold text-brand-primary-500">Popular</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <Tabs defaultValue="engagements" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <TabsTrigger value="engagements" className="text-base font-medium data-[state=active]:bg-white data-[state=active]:text-brand-primary-500 data-[state=active]:shadow-sm data-[state=active]:dark:bg-gray-900 data-[state=active]:dark:text-brand-primary-400 transition-all duration-200">Engagements</TabsTrigger>
                  <TabsTrigger value="accounts" className="text-base font-medium data-[state=active]:bg-white data-[state=active]:text-brand-primary-500 data-[state=active]:shadow-sm data-[state=active]:dark:bg-gray-900 data-[state=active]:dark:text-brand-primary-400 transition-all duration-200">Accounts</TabsTrigger>
                  <TabsTrigger value="reviews" className="text-base font-medium data-[state=active]:bg-white data-[state=active]:text-brand-primary-500 data-[state=active]:shadow-sm data-[state=active]:dark:bg-gray-900 data-[state=active]:dark:text-brand-primary-400 transition-all duration-200">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="engagements" className="mt-6">
                  {loadingPlatforms ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {uniquePlatforms.map((platform) => {
                        const Icon = categoryIcons[platform];
                        return (
                          <Link to="/services" key={platform} className="group">
                            <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 w-full rounded-lg transition-all duration-200 group-hover:border-brand-primary-500 group-hover:text-brand-primary-500 dark:group-hover:text-brand-primary-400">
                              {Icon && <Icon className="h-8 w-8 mb-2 text-brand-primary-500 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400" />}
                              <span className="text-sm font-semibold">{platform}</span>
                            </Button>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="accounts" className="mt-6">
                  <p className="text-gray-600 dark:text-gray-400 text-center py-8">Account services will be listed here.</p>
                </TabsContent>
                <TabsContent value="reviews" className="mt-6">
                  <p className="text-gray-600 dark:text-gray-400 text-center py-8">Review services will be listed here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Right Column Cards */}
          <div className="space-y-6">
            {/* Top Earners This Month Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                  <Users className="h-7 w-7 mr-3 text-purple-500" /> Top Earners This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-6 pt-0">
                {[
                  { name: 'CodeWarrior', amount: '$56,210.56', rank: 1 },
                  { name: 'PServices', amount: '$47,112.44', rank: 2 },
                  { name: 'Infoagency', amount: '$22,706.09', rank: 3 },
                  { name: 'JSFK', amount: '$21,997.94', rank: 4 },
                ].map((earner, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center">
                      {earner.rank <= 3 ? (
                        <Award className={`h-6 w-6 mr-3 ${earner.rank === 1 ? 'text-yellow-500' : earner.rank === 2 ? 'text-gray-400' : 'text-amber-700'} transition-transform duration-200 group-hover:scale-110`} />
                      ) : (
                        <span className="w-6 h-6 mr-3 text-gray-500 dark:text-gray-400 text-center font-semibold">{earner.rank}</span>
                      )}
                      <div className="relative">
                        <User className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 p-2 mr-3 text-gray-600 dark:text-gray-300 transition-transform duration-200 group-hover:scale-105" />
                        {earner.rank === 1 && <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-full">👑</span>}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-brand-primary-500 transition-colors duration-200">{earner.name}</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-brand-primary-500 transition-colors duration-200">{earner.amount}</span>
                  </div>
                ))}
                <Button className="w-full bg-brand-primary-500 hover:bg-brand-secondary-blue text-white py-2.5 rounded-lg text-base font-semibold transition-colors duration-300">
                  Become An Affiliate →
                </Button>
              </CardContent>
            </Card>

            {/* Tickets Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                  <MessageSquare className="h-7 w-7 mr-3 text-blue-500" /> Tickets
                </CardTitle>
                <Link to="/tickets" className="text-brand-primary-500 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 text-sm font-semibold transition-colors duration-200">View All</Link>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400 text-center py-4">No recent tickets.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;