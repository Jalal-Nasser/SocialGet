interface Service {
  platform: string;
  serviceName: string;
  path: string;
  description: string;
  price: number;
  unit: string; // Added unit property
}

interface ServiceQuantityOption {
  quantity: number;
  discountPercentage: number;
  isBestSeller?: boolean;
}

interface ServiceQuantities {
  [servicePath: string]: ServiceQuantityOption[];
}

const serviceQuantityOptions: ServiceQuantities = {
  "likes": [ // For Twitter Likes (path: "likes")
    { quantity: 25, discountPercentage: 5 },
    { quantity: 50, discountPercentage: 10 },
    { quantity: 100, discountPercentage: 15 },
    { quantity: 250, discountPercentage: 20 },
    { quantity: 500, discountPercentage: 25 },
    { quantity: 1000, discountPercentage: 30, isBestSeller: true },
    { quantity: 2500, discountPercentage: 35 },
    { quantity: 5000, discountPercentage: 40 },
  ],
  // Add other service quantity options here as needed for other services
  // Example for Twitter Followers:
  "followers": [
    { quantity: 50, discountPercentage: 5 },
    { quantity: 100, discountPercentage: 10 },
    { quantity: 250, discountPercentage: 15 },
    { quantity: 500, discountPercentage: 20 },
    { quantity: 1000, discountPercentage: 25, isBestSeller: true },
    { quantity: 2500, discountPercentage: 30 },
    { quantity: 5000, discountPercentage: 35 },
    { quantity: 10000, discountPercentage: 40 },
  ],
};

// This function will now be a placeholder as actual service fetching will happen via src/lib/services.ts
// It's kept for compatibility but will return undefined as it no longer has local data.
const getServiceByPlatformAndName = (platform: string, serviceName: string): Service | undefined => {
  console.warn("getServiceByPlatformAndName from src/data/servicesData.ts is deprecated. Use getServiceByPlatformAndPath from src/lib/services.ts instead.");
  return undefined;
};

export { getServiceByPlatformAndName, serviceQuantityOptions };