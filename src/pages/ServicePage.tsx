import React from 'react';
import { useParams } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';
import { getServiceByPlatformAndName } from '@/data/servicesData';

const ServicePage: React.FC = () => {
  const { platform, serviceName } = useParams();
  const service = getServiceByPlatformAndName(platform || '', serviceName || '');

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <LandingHeader />
        <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              The requested service could not be found.
            </p>
            <Button asChild>
              <a href="/" className="text-white">
                Return to Home
              </a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">
              {service.platform} {service.serviceName}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">${service.price.toFixed(2)}</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              <span>High quality service</span>
            </div>
            <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
              Order Now
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;