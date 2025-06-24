import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle, MessageSquare, Zap, Lock, Star, Globe } from 'lucide-react';
import { getServiceByPlatformAndName, serviceQuantityOptions } from '@/data/servicesData';
import { cn } from '@/lib/utils';

interface ServiceQuantityOption {
  quantity: number;
  discountPercentage: number;
  isBestSeller?: boolean;
}

const ServiceOrderPage: React.FC = () => {
  const { platform, serviceName } = useParams();
  const service = getServiceByPlatformAndName(platform || '', serviceName || '');

  const [selectedQuantityOption, setSelectedQuantityOption] = useState<ServiceQuantityOption | null>(null);
  const [soldTimes, setSoldTimes] = useState(0);
  const [customQuantity, setCustomQuantity] = useState('');

  useEffect(() => {
    if (service) {
      const options = serviceQuantityOptions[service.path];
      if (options && options.length > 0) {
        // Select the first option by default, or the best seller if available
        const defaultOption = options.find(opt => opt.isBestSeller) || options[0];
        setSelectedQuantityOption(defaultOption);
      }
      // Simulate random sales count
      setSoldTimes(Math.floor(Math.random() * (200 - 100 + 1)) + 100);
    }
  }, [service]);

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
              <Link to="/" className="text-white">
                Return to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const options = serviceQuantityOptions[service.path] || [];

  const basePricePerUnit = service.price;
  let currentPrice = 0;
  let originalPrice = 0;
  let saving = 0;

  if (selectedQuantityOption) {
    originalPrice = selectedQuantityOption.quantity * basePricePerUnit;
    currentPrice = originalPrice * (1 - selectedQuantityOption.discountPercentage / 100);
    saving = originalPrice - currentPrice;
  } else if (customQuantity) {
    const quantity = parseInt(customQuantity);
    if (!isNaN(quantity) && quantity > 0) {
      originalPrice = quantity * basePricePerUnit;
      currentPrice = originalPrice; // No discount for custom quantities
      saving = 0;
    }
  }

  const includedFeatures = [
    { icon: MessageSquare, title: "24/7 Customer Support", description: "The fastest response time in the industry - just 5 minutes. All from 100% real humans, no AI here." },
    { icon: Zap, title: "100% Account Safety", description: "SocialGet's the ONLY company using UHQ Accounts, so platforms can't detect any unusual activity. Guaranteeing the safety of your account." },
    { icon: Lock, title: "100,000+ Customers Trust Us", description: "10+ Years in business and over 100,000 happy customers, you can feel safe with us." },
  ];

  const handleCustomQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomQuantity(value);
      setSelectedQuantityOption(null);
    }
  };

  const handleQuantityOptionClick = (option: ServiceQuantityOption) => {
    setSelectedQuantityOption(option);
    setCustomQuantity('');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section: Quantity Selection */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                Choose {service.platform} {service.serviceName} amount
              </h1>
              <Button variant="outline" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Globe className="h-4 w-4" />
                <span>EN</span>
              </Button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">Select One</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {options.map((option, index) => (
                <Card
                  key={index}
                  className={cn(
                    "relative flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-200",
                    "border-2",
                    selectedQuantityOption?.quantity === option.quantity
                      ? "border-brand-primary-500 bg-brand-primary-500/10"
                      : "border-gray-200 dark:border-gray-700 hover:border-brand-primary-500/50"
                  )}
                  onClick={() => handleQuantityOptionClick(option)}
                >
                  {option.isBestSeller && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Best Seller <Star className="inline-block h-3 w-3 ml-1 fill-current" />
                    </div>
                  )}
                  <CardContent className="flex flex-col items-center p-0 pt-4">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {option.quantity.toLocaleString()}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">{service.serviceName}</span>
                  </CardContent>
                  {option.discountPercentage > 0 && (
                    <div className={cn(
                      "absolute bottom-0 left-0 w-full text-center py-1 text-xs font-semibold rounded-b-lg",
                      selectedQuantityOption?.quantity === option.quantity
                        ? "bg-brand-primary-500 text-white"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    )}>
                      {option.discountPercentage}% off
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Custom Quantity Input */}
            <div className="mb-8">
              <label htmlFor="custom-quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Or enter custom amount
              </label>
              <div className="flex">
                <Input
                  id="custom-quantity"
                  type="text"
                  placeholder="Enter custom quantity"
                  value={customQuantity}
                  onChange={handleCustomQuantityChange}
                  className="rounded-r-none"
                />
                <Button 
                  variant="outline" 
                  className="rounded-l-none border-l-0 bg-gray-100 dark:bg-gray-800"
                  disabled={!customQuantity}
                >
                  Apply
                </Button>
              </div>
            </div>

            {selectedQuantityOption && (
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-lg flex items-center justify-between mb-8">
                <span className="font-semibold">Great choice 🔥 This service has been sold {soldTimes} times in the last 24 hrs</span>
              </div>
            )}

            <div className="flex items-center justify-between mt-8">
              {(selectedQuantityOption || customQuantity) ? (
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    ${currentPrice.toFixed(2)}
                  </span>
                  {selectedQuantityOption?.discountPercentage && selectedQuantityOption.discountPercentage > 0 && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ${originalPrice.toFixed(2)}
                      </span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">
                        You're saving ${saving.toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">Please select a quantity to see pricing.</p>
              )}
              <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white text-lg px-6 py-3">
                Next Step &gt;
              </Button>
            </div>
          </div>

          {/* Right Section: Order Summary & What's Included */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-gray-50 dark:bg-gray-800 shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Order Summary</h2>
              {selectedQuantityOption || customQuantity ? (
                <>
                  <div className="flex justify-between items-center text-lg text-gray-700 dark:text-gray-300 mb-4">
                    <span>
                      {selectedQuantityOption?.quantity || customQuantity} {service.serviceName}
                    </span>
                    <span className="font-semibold">
                      <span className="text-brand-primary-500">${currentPrice.toFixed(2)}</span>
                      {selectedQuantityOption?.discountPercentage && selectedQuantityOption.discountPercentage > 0 && (
                        <span className="line-through text-gray-500 ml-1">${originalPrice.toFixed(2)}</span>
                      )}
                    </span>
                  </div>
                  <Input
                    type="text"
                    placeholder="Enter discount code"
                    className="w-full mb-4 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <div className="flex justify-between items-center text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    <span>Total</span>
                    <span>${currentPrice.toFixed(2)}</span>
                  </div>
                  {selectedQuantityOption?.discountPercentage && selectedQuantityOption.discountPercentage > 0 && (
                    <p className="text-green-600 dark:text-green-400 text-sm text-right">
                      You're saving ${saving.toFixed(2)}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">Select a quantity to see your order summary.</p>
              )}
            </Card>

            <Card className="bg-gray-50 dark:bg-gray-800 shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">What's Included</h2>
              <div className="space-y-6">
                {includedFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <Icon className="h-6 w-6 text-brand-primary-500 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceOrderPage;