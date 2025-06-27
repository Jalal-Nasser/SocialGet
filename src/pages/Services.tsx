import React, { useState, useEffect } from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, Instagram, Youtube, Linkedin, Facebook, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { showError } from '@/utils/toast';
import { supabase } from '@/integrations/supabase/client';
import RedditIcon from '@/components/icons/RedditIcon'; // Import the new component

const Services: React.FC = () => {
  const [allServices, setAllServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryIcons: { [key: string]: React.ElementType } = {
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    tiktok: Play,
    facebook: Facebook,
    reddit: RedditIcon,
    linkedin: Linkedin
  };

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('platform', { ascending: true })
        .order('service_name', { ascending: true });
      if (error) {
        showError('Failed to load services: ' + error.message);
        setAllServices([]);
      } else {
        setAllServices(data || []);
      }
      setLoading(false);
    };
    fetchServices();
  }, []);

  // Get unique platforms
  const platforms = Array.from(new Set(allServices.map(s => s.platform)));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center">Choose a Platform</h1>
        {loading ? (
          <div className="text-center text-lg">Loading platforms...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => {
              const Icon = categoryIcons[platform.toLowerCase()];
              return (
                <Card key={platform} className="hover:shadow-lg transition-shadow">
                  <Link
                    to={`/services/${platform.toLowerCase()}`}
                    className="block p-8 h-full w-full hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors text-center flex flex-col items-center justify-center"
                  >
                    {Icon && <Icon className="h-12 w-12 mb-4 text-brand-primary-500" />}
                    <CardTitle className="text-3xl capitalize">{platform}</CardTitle>
                  </Link>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Services;