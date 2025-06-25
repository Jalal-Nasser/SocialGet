import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle, Shield, Zap, Clock, Star, ChevronDown, CreditCard } from 'lucide-react';
import { serviceQuantityOptions } from '@/lib/services'; // Import Supabase service type and fetch function
import { cn } from '@/lib/utils';
import { showError } from '@/utils/toast';
import OrderServiceForm, { QuantityOption } from '@/components/OrderServiceForm';

const services = [
  {
    key: "twitter-followers",
    name: "Twitter Followers",
    description: "High-quality Twitter followers",
    quantities: [
      { amount: 50, price: 1.71, discount: 5 },
      { amount: 100, price: 3.24, discount: 10 },
      { amount: 250, price: 7.65, discount: 15 },
      { amount: 500, price: 14.4, discount: 20 },
      { amount: 1000, price: 27, discount: 25, bestSeller: true },
      { amount: 2500, price: 63, discount: 30 },
      { amount: 5000, price: 117, discount: 35 },
      { amount: 10000, price: 216, discount: 40 },
    ],
    unitPrice: 0.036,
    completedOrders: 12751,
    rating: 4.9,
    unitLabel: "Follower",
  },
  // Add more services here as needed
];

const ServiceOrderPage: React.FC = () => {
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null);
  const [customQuantity, setCustomQuantity] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Get quantity options for this service based on its path
  const quantityOptions = selectedService ? serviceQuantityOptions[selectedService.key] || [] : [];
  
  // Calculate pricing
  const unitPrice = selectedService?.unitPrice || 0;
  let totalPrice = 0;
  let discount = 0;
  
  if (selectedQuantity !== null) {
    const option = quantityOptions.find(opt => opt.quantity === selectedQuantity);
    if (option) {
      totalPrice = selectedQuantity * unitPrice * (1 - option.discountPercentage / 100);
      discount = selectedQuantity * unitPrice - totalPrice;
    } else {
      totalPrice = selectedQuantity * unitPrice;
    }
  } else if (customQuantity) {
    const qty = parseInt(customQuantity);
    if (!isNaN(qty) && qty > 0) {
      totalPrice = qty * unitPrice;
    }
  }

  const features = [
    { icon: Clock, title: "Fast Delivery", description: "Starts within minutes, completes within 24 hours" },
    { icon: Shield, title: "Guaranteed", description: "Refund if we can't deliver as promised" },
    { icon: Zap, title: "High Quality", description: "Real engagement from authentic accounts" }
  ];

  // Updated payment methods to match the example website
  const paymentMethods = [
    { name: "Credit Card", icon: CreditCard },
    { name: "Crypto", icon: () => <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Crypto" className="h-6" /> },
    { name: "Google Pay", icon: () => <img src="https://cdn.simpleicons.org/googlepay/black" alt="Google Pay" className="h-6" /> },
    { name: "Apple Pay", icon: () => <img src="https://cdn.simpleicons.org/applepay/white" alt="Apple Pay" className="h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Service Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-2">
                Order {selectedService?.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedService?.description}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-medium">4.9/5</span>
                </div>
                <span className="text-gray-500">|</span>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-1" />
                  <span>12,751 orders completed</span>
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Select Quantity</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {quantityOptions.map((option) => (
                    <Button
                      key={option.quantity}
                      variant={selectedQuantity === option.quantity ? 'default' : 'outline'}
                      className={`flex flex-col items-center h-auto py-4 ${
                        selectedQuantity === option.quantity 
                          ? 'bg-brand-primary-500 text-white' 
                          : 'hover:border-brand-primary-500'
                      }`}
                      onClick={() => {
                        setSelectedQuantity(option.quantity);
                        setCustomQuantity('');
                      }}
                    >
                      <span className="text-lg font-bold">{option.quantity}</span>
                      <span className="text-sm">
                        ${(option.quantity * unitPrice * (1 - option.discountPercentage / 100)).toFixed(2)}
                      </span>
                      {option.discountPercentage > 0 && (
                        <span className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Save {option.discountPercentage}%
                        </span>
                      )}
                      {option.isBestSeller && (
                        <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded-full mt-1">
                          Best Seller
                        </span>
                      )}
                    </Button>
                  ))}
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Or enter custom amount
                  </label>
                  <div className="flex">
                    <Input
                      type="number"
                      placeholder="Enter quantity"
                      value={customQuantity}
                      onChange={(e) => {
                        setCustomQuantity(e.target.value);
                        setSelectedQuantity(null);
                      }}
                      className="rounded-r-none"
                      min="1"
                    />
                    <Button 
                      variant="outline" 
                      className="rounded-l-none border-l-0"
                      onClick={() => {
                        if (customQuantity) {
                          setSelectedQuantity(parseInt(customQuantity));
                        }
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>

              {/* Target Input */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Target</h2>
                <Input
                  type="text"
                  placeholder={`Enter ${selectedService?.name} ${selectedService?.key === 'twitter-followers' ? 'username' : 'post URL'}`}
                  className="w-full"
                />
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-brand-primary-100 dark:bg-brand-primary-900 rounded-full">
                      <feature.icon className="h-5 w-5 text-brand-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {paymentMethods.map((method, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex flex-col items-center h-auto py-4"
                  >
                    {typeof method.icon === 'function' ? method.icon() : <method.icon className="h-6 w-6" />}
                    <span className="mt-2">{method.name}</span>
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Promo Code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full"
                />
                <Button className="w-full bg-brand-primary-500 hover:bg-brand-secondary-blue">
                  Apply Promo Code
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Service:</span>
                  <span className="font-medium">
                    {selectedService?.name}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Quantity:</span>
                  <span className="font-medium">
                    {selectedQuantity || customQuantity || 'Not selected'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Unit Price:</span>
                  <span className="font-medium">${unitPrice.toFixed(3)} {selectedService?.unitLabel}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Discount:</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full bg-brand-primary-500 hover:bg-brand-secondary-blue text-white py-6 text-lg">
                  Complete Order
                </Button>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Secure checkout guaranteed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Selection and Order Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Select a Service</h2>
          <div className="flex gap-4 mb-8 flex-wrap">
            {services.map((service) => (
              <button
                key={service.key}
                onClick={() => setSelectedService(service)}
                className={`p-4 rounded-lg border-2 min-w-[200px] text-left transition-all duration-150 ${
                  selectedService?.key === service.key
                    ? "border-blue-500 bg-blue-900/30"
                    : "border-gray-700 bg-[#232834] hover:border-blue-400"
                }`}
              >
                <div className="font-semibold text-lg mb-1">{service.name}</div>
                <div className="text-gray-400 text-sm">{service.description}</div>
              </button>
            ))}
          </div>
          {selectedService && (
            <OrderServiceForm
              serviceName={selectedService.name}
              description={selectedService.description}
              quantities={selectedService.quantities}
              unitPrice={selectedService.unitPrice}
              completedOrders={selectedService.completedOrders}
              rating={selectedService.rating}
              unitLabel={selectedService.unitLabel}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceOrderPage;