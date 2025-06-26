import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { showError } from '@/utils/toast';

interface Service {
  id: string;
  platform: string;
  service_name: string;
  path: string;
  description: string;
  price: number;
  unit: string;
}

const PlatformServicesPage: React.FC = () => {
  const { platform } = useParams<{ platform: string }>();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .ilike('platform', platform)
        .order('service_name', { ascending: true });
      if (error) {
        showError('Failed to load services: ' + error.message);
        setServices([]);
      } else {
        setServices(data || []);
      }
      setLoading(false);
    };
    if (platform) fetchServices();
  }, [platform]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center capitalize">{platform} Services</h1>
        {loading ? (
          <div className="text-center text-lg">Loading services...</div>
        ) : services.length === 0 ? (
          <div className="text-center text-lg">No services found for this platform.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <Link
                  to={`/services/${service.platform.toLowerCase()}/${service.path}`}
                  className="block p-6 h-full w-full hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  <CardTitle className="text-2xl">{service.service_name}</CardTitle>
                  <CardContent className="mt-2">
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-2">{service.description}</div>
                    <div className="text-brand-primary-500 font-bold">${service.price.toFixed(2)} / {service.unit}</div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        )}
        <div className="mt-8 text-center">
          <Link to="/services" className="text-blue-500 hover:underline">Back to Platforms</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformServicesPage;
