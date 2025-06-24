interface Service {
  platform: string;
  serviceName: string;
  path: string;
  description: string;
  price: number;
  unit: string;
}

interface ServiceQuantityOptions {
  [key: string]: Array<{
    quantity: number;
    discountPercentage: number;
    isBestSeller?: boolean;
  }>;
}

// Define all services
const services: Service[] = [
  // Twitter Services
  {
    platform: "Twitter",
    serviceName: "Followers",
    path: "followers",
    description: "High-quality Twitter followers",
    price: 0.036,
    unit: "/Follower"
  },
  {
    platform: "Twitter",
    serviceName: "USA Followers",
    path: "usa-followers",
    description: "High-quality Twitter followers from USA",
    price: 0.05,
    unit: "/Follower"
  },
  {
    platform: "Twitter",
    serviceName: "Likes",
    path: "likes",
    description: "Twitter post likes",
    price: 0.01,
    unit: "/Like"
  },
  {
    platform: "Twitter",
    serviceName: "Retweets",
    path: "retweets",
    description: "Twitter post retweets",
    price: 0.02,
    unit: "/Retweet"
  },

  // Instagram Services
  {
    platform: "Instagram",
    serviceName: "Followers",
    path: "followers",
    description: "Real Instagram followers",
    price: 0.04,
    unit: "/Follower"
  },
  {
    platform: "Instagram",
    serviceName: "Likes",
    path: "likes",
    description: "Instagram post likes",
    price: 0.015,
    unit: "/Like"
  },
  {
    platform: "Instagram",
    serviceName: "Views",
    path: "views",
    description: "Instagram story views",
    price: 0.005,
    unit: "/View"
  },

  // YouTube Services
  {
    platform: "YouTube",
    serviceName: "Views",
    path: "views",
    description: "YouTube video views",
    price: 0.009,
    unit: "/View"
  },
  {
    platform: "YouTube",
    serviceName: "Likes",
    path: "likes",
    description: "YouTube video likes",
    price: 0.015,
    unit: "/Like"
  },
  {
    platform: "YouTube",
    serviceName: "Subscribers",
    path: "subscribers",
    description: "YouTube channel subscribers",
    price: 0.08,
    unit: "/Subscriber"
  }
];

// Define quantity options for each service
const serviceQuantityOptions: ServiceQuantityOptions = {
  "followers": [
    { quantity: 100, discountPercentage: 0 },
    { quantity: 500, discountPercentage: 5 },
    { quantity: 1000, discountPercentage: 10, isBestSeller: true },
    { quantity: 5000, discountPercentage: 15 }
  ],
  "likes": [
    { quantity: 100, discountPercentage: 0 },
    { quantity: 500, discountPercentage: 5, isBestSeller: true },
    { quantity: 1000, discountPercentage: 10 },
    { quantity: 5000, discountPercentage: 15 }
  ],
  // Add quantity options for other services similarly
};

// Helper function to get service by platform and path
const getServiceByPlatformAndName = (platform: string, path: string): Service | undefined => {
  return services.find(
    (service) =>
      service.platform.toLowerCase() === platform.toLowerCase() &&
      service.path.toLowerCase() === path.toLowerCase()
  );
};

// Export all necessary items
export { services, serviceQuantityOptions, getServiceByPlatformAndName };
export type { Service, ServiceQuantityOptions };