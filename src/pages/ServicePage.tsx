import React from 'react';
import { useParams } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
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

  const paymentIcons = [
    { name: "PayPal", src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { name: "Visa", src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
    { name: "Mastercard", src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
    { name: "Bitcoin", src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" },
    { name: "Apple Pay", src: "https://cdn.simpleicons.org/applepay/white" },
  ];

  // Filter to include only the requested payment methods (PayPal, Visa, Mastercard, Bitcoin, Apple Pay)
  const filteredPaymentIcons = paymentIcons.filter(icon => 
    ['Visa', 'PayPal', 'Mastercard', 'Bitcoin', 'Apple Pay'].includes(icon.name)
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Section: Service Details */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
              Buy {service.platform} <span className="text-brand-primary-500">{service.serviceName}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              {service.description} with realistic {service.platform} {service.serviceName.toLowerCase()} from SocialPlug. Super low drop rates from high quality accounts.
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>Rated <span className="font-bold">4.8/5</span> from over 1000+ reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-brand-primary-500" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-brand-primary-500" />
                <span>100% Growth Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-brand-primary-500" />
                <span>24/7 Customer Service</span>
              </div>
            </div>
          </div>

          {/* Right Section: Pricing Card */}
          <div className="lg:col-span-1 bg-[#1f2a38] rounded-lg shadow-xl p-8 text-white">
            <p className="text-gray-400 text-sm mb-2">Starting from</p>
            <h2 className="text-5xl font-extrabold mb-6">
              ${service.price.toFixed(3)} <span className="text-brand-primary-500 text-2xl font-semibold">{service.unit}</span>
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-brand-primary-500" />
                <span>Realistic {service.platform} {service.serviceName}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-brand-primary-500" />
                <span>Super Low Drop Rate</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-brand-primary-500" />
                <span>High Quality Accounts</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-brand-primary-500" />
                <span>No Password Required</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-brand-primary-500" />
                <span>24/7 Customer Support</span>
              </li>
            </ul>

            <Button className="w-full bg-brand-primary-500 hover:bg-brand-secondary-blue text-white text-lg py-3 rounded-md mb-6">
              Order Now
            </Button>

            <div className="text-center text-gray-400 text-sm mb-4">
              Secured Checkout
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {filteredPaymentIcons.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.name} className="h-6 max-w-[40px] object-contain" />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="relative py-16 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden mt-12">
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
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;