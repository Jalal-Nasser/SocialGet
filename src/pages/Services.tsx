import React, { useState, useEffect } from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, Instagram, Youtube, Linkedin, Facebook, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { showError } from '@/utils/toast';
import { supabase } from '@/integrations/supabase/client';


const RedditIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.74c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 1.25-1.25zM9.71 6.05c.69 0 1.25.56 1.25 1.25 0 .69-.56 1.25-1.25 1.25a1.25 1.25 0 0 1 0-2.5zM7.77 8.4a3.21 3.21 0 0 1 3.21-3.21c.72 0 1.41.21 2 .58.03-.01.07-.02.11-.02s.08.01.12.01c1.03.07 1.94.53 2.59 1.19.1.1.26.1.36 0 .1-.1.1-.26 0-.36-.8-.8-1.89-1.31-3.11-1.4-.04-.01-.08-.02-.12-.02s-.08.01-.12-.02c-1.22.09-2.31.6-3.11 1.4-.1.1-.1.26 0 .36.1.1.26.1.36 0zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.56a9.77 9.77 0 0 0 4.5 0c1.06 2.57 3.14 4.58 5.74 5.56.01.05.01.1.01.15 0 4.41-3.59 8-8 8z"/>
  </svg>
);

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