interface Service {
  platform: string;
  serviceName: string;
  path: string;
  description: string;
  price: number;
}

const services: Service[] = [
  {
    platform: "Twitter",
    serviceName: "Followers",
    path: "followers",
    description: "High-quality Twitter followers",
    price: 2.99
  },
  {
    platform: "Twitter",
    serviceName: "Likes",
    path: "likes",
    description: "Twitter post likes",
    price: 1.99
  },
  {
    platform: "Instagram",
    serviceName: "Followers",
    path: "followers",
    description: "Real Instagram followers",
    price: 3.99
  },
  {
    platform: "Instagram",
    serviceName: "Likes",
    path: "likes",
    description: "Instagram post likes",
    price: 2.49
  },
  {
    platform: "Youtube",
    serviceName: "Views",
    path: "views",
    description: "Youtube video views",
    price: 4.99
  },
  {
    platform: "TikTok",
    serviceName: "Followers",
    path: "followers",
    description: "TikTok followers",
    price: 5.99
  }
];

// Add this function to find a service by platform and name
const getServiceByPlatformAndName = (platform: string, serviceName: string): Service | undefined => {
  return services.find(
    service => 
      service.platform.toLowerCase() === platform.toLowerCase() && 
      service.serviceName.toLowerCase() === serviceName.toLowerCase()
  );
};

// Export both the services array and the function
export { services, getServiceByPlatformAndName };