import React, { useState, useEffect } from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { fetchServices, Service as SupabaseService } from '@/lib/services'; // Import Supabase service type and fetch function
import { showError } from '@/utils/toast';

const Services: React.FC = () => {
  const [allServices, setAllServices] = useState<SupabaseService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      try {
        const data = await fetchServices();
        setAllServices(data);
      } catch (error) {
        showError('Failed to load services.');
        console.error('Error loading services:', error);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  // Group services by platform
  const servicesByPlatform = allServices.reduce((acc, service) => {
    if (!acc[service.platform]) {
      acc[service.platform] = [];
    }
    acc[service.platform].push(service);
    return acc;
  }, {} as Record<string, SupabaseService[]>);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <LandingHeader />
        <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-600 dark:text-gray-400">Loading services...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center">All Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(servicesByPlatform).map(([platform, platformServices]) => (
            <Card key={platform} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{platform}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {platformServices.map((service) => (
                  <Link 
                    key={`${service.platform}-${service.service_name}`}
                    to={`/services/${service.platform.toLowerCase()}/${service.path}`}
                    className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{service.service_name}</span>
                      <span className="text-brand-primary-500">${service.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;