import React, { useState, useEffect } from 'react';

const DynamicStatsSection: React.FC = () => {
  const [happyCustomers, setHappyCustomers] = useState<string>('');
  const [followersDelivered, setFollowersDelivered] = useState<string>('');

  const generateRandomStats = () => {
    // Generate random number for Happy Customers (e.g., 30k-50k)
    const randomCustomers = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
    setHappyCustomers(`${randomCustomers}k+`);

    // Generate random number for Followers Delivered (e.g., 10.0M-20.0M)
    const randomFollowers = (Math.random() * (20 - 10) + 10).toFixed(1);
    setFollowersDelivered(`${randomFollowers}M+`);
  };

  useEffect(() => {
    // Generate initial stats on component mount
    generateRandomStats();

    // Update stats every 4 hours (4 * 60 * 60 * 1000 milliseconds)
    const intervalId = setInterval(generateRandomStats, 4 * 60 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start gap-8 sm:gap-16 py-8">
      <div className="text-center sm:text-left">
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
          {happyCustomers}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">Happy Customers</p>
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
          {followersDelivered}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">Followers Delivered</p>
      </div>
    </div>
  );
};

export default DynamicStatsSection;