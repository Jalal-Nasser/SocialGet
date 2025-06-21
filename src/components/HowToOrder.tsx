import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowToOrder: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
        How to <span className="text-brand-primary-500">Order?</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Here’s a quick rundown of how you can place an order for our social media services.
      </p>

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="relative mb-6">
            <img
              src="https://via.placeholder.com/300x200?text=Step+1+Image"
              alt="Pick the service"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-white dark:border-gray-900">
              1
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Pick the service</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Choose the social media platform & service required.
          </p>
        </div>

        {/* Arrow 1 */}
        <div className="hidden lg:block">
          <ArrowRight className="h-12 w-12 text-gray-300 dark:text-gray-600" />
        </div>
        <div className="block lg:hidden rotate-90">
          <ArrowRight className="h-12 w-12 text-gray-300 dark:text-gray-600" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="relative mb-6">
            <img
              src="https://via.placeholder.com/300x200?text=Step+2+Image"
              alt="Set the target"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-white dark:border-gray-900">
              2
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Set the target</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Choose your desired amount of services, for example 100 followers.
          </p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden lg:block">
          <ArrowRight className="h-12 w-12 text-gray-300 dark:text-gray-600" />
        </div>
        <div className="block lg:hidden rotate-90">
          <ArrowRight className="h-12 w-12 text-gray-300 dark:text-gray-600" />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="relative mb-6">
            <img
              src="https://via.placeholder.com/300x200?text=Step+3+Image"
              alt="Get the results"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-white dark:border-gray-900">
              3
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Get the results</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Checkout & done! Our team will deliver your order within the same day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;