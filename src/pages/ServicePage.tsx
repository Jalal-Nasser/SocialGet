import React from 'react';
import { useParams } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';
import { getServiceByPlatformAndName } from '@/data/servicesData';

const ServicePage: React.FC = () => {
  const { platform, serviceName } = useParams<{ platform: string; serviceName: string }>();
  const service = getServiceByPlatformAndName(platform || '', serviceName || '');

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <LandingHeader />
        <main className="container mx-auto px-4 py-12 flex-grow text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The service you are looking for does not exist.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Section: Service Details */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              {service.title.split(' ').map((word, index) => (
                word.toLowerCase() === 'followers' || word.toLowerCase() === 'views' || word.toLowerCase() === 'likes'
                  ? <span key={index} className="text-brand-green">{word} </span>
                  : <span key={index}>{word} </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
              {service.description}
            </p>

            <div className="flex items-center mb-8">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-2" />
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Rated {service.rating}/5 from over {service.reviewsCount}+ reviews
              </span>
            </div>

            <div className="space-y-3 mb-12">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                <span>100% Growth Guarantee</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                <span>24/7 Customer Service</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              {service.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Pricing Card */}
          <Card className="bg-gray-900 text-white shadow-lg rounded-lg p-6 lg:sticky lg:top-24">
            <CardHeader className="pb-4">
              <p className="text-sm text-gray-300 mb-2">Starting from</p>
              <CardTitle className="text-5xl font-extrabold text-white mb-2">
                {service.startingPrice}
                <span className="text-lg font-normal text-gray-300">{service.priceUnit}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 mb-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-200">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </CardContent>
            <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white text-lg py-3 rounded-md">
              Order Now &gt;
            </Button>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {service.paymentIcons.map((iconUrl, index) => (
                <img key={index} src={iconUrl} alt="Payment Method" className="h-6" />
              ))}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;