import { Service, ServiceQuantityOption, ServiceQuantities, getServiceByPlatformAndPath } from '@/lib/services';

// serviceQuantityOptions remains hardcoded as it's not part of the main 'services' table
export const serviceQuantityOptions: ServiceQuantities = {
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

// This function will now use the Supabase utility to fetch the service
const getServiceByPlatformAndName = async (platform: string, serviceName: string): Promise<Service | null> => {
  return await getServiceByPlatformAndPath(platform, serviceName);
};

// Export types and the updated function
export type { Service, ServiceQuantityOption, ServiceQuantities };
export { getServiceByPlatformAndName };