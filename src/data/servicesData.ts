import { CheckCircle, Star } from 'lucide-react';

export interface ServiceItem {
  platform: string; // e.g., "Twitter"
  serviceName: string; // e.g., "Followers"
  path: string; // e.g., "twitter-followers" (slugified)
  title: string; // e.g., "Buy Twitter (X) Followers"
  description: string;
  rating: number;
  reviewsCount: number;
  startingPrice: string;
  priceUnit: string;
  features: string[];
  stats: { value: string; label: string; }[];
  paymentIcons: string[]; // URLs for payment icons
}

const commonPaymentIcons = [
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2560px-American_Express_logo_%282018%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2021.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Litecoin_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tether_USDT_logo.svg/1200px-Tether_USDT_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png",
];

export const services: ServiceItem[] = [
  {
    platform: "Twitter",
    serviceName: "Twitter followers",
    path: "twitter-followers",
    title: "Buy Twitter (X) Followers",
    description: "Build up your Twitter (X) community with realistic followers from SocialPlug. Super low drop rates from high quality accounts.",
    rating: 4.8,
    reviewsCount: 1000,
    startingPrice: "$0.036",
    priceUnit: "/Follower",
    features: [
      "Realistic Twitter (X) Followers",
      "Up to 10,000 Followers per Twitter (X) Page",
      "Card & Crypto payments available",
      "No signup or login required",
    ],
    stats: [
      { value: "35k+", label: "Happy Customers" },
      { value: "11.8M+", label: "Followers Delivered" },
    ],
    paymentIcons: commonPaymentIcons,
  },
  {
    platform: "Instagram",
    serviceName: "Likes",
    path: "instagram-likes",
    title: "Buy Instagram Likes",
    description: "Boost your Instagram posts with real likes from active users. Increase your visibility and engagement instantly.",
    rating: 4.7,
    reviewsCount: 850,
    startingPrice: "$0.015",
    priceUnit: "/Like",
    features: [
      "Real Instagram Likes",
      "Instant Delivery",
      "Secure & Private",
      "24/7 Customer Support",
    ],
    stats: [
      { value: "28k+", label: "Happy Customers" },
      { value: "25M+", label: "Likes Delivered" },
    ],
    paymentIcons: commonPaymentIcons,
  },
  {
    platform: "Youtube",
    serviceName: "Views",
    path: "youtube-views",
    title: "Buy YouTube Views",
    description: "Increase your video's reach and credibility with high-quality YouTube views. Get noticed by a wider audience.",
    rating: 4.9,
    reviewsCount: 1200,
    startingPrice: "$0.005",
    priceUnit: "/View",
    features: [
      "High-Retention YouTube Views",
      "Fast Delivery",
      "Safe & Organic Growth",
      "No Password Required",
    ],
    stats: [
      { value: "40k+", label: "Happy Customers" },
      { value: "50M+", label: "Views Delivered" },
    ],
    paymentIcons: commonPaymentIcons,
  },
  // You can add more services here following the same structure
];

export const getServiceByPlatformAndName = (platform: string, serviceName: string): ServiceItem | undefined => {
  const slugifiedServiceName = serviceName.toLowerCase().replace(/\s+/g, '-');
  return services.find(
    (service) =>
      service.platform.toLowerCase() === platform.toLowerCase() &&
      service.path === slugifiedServiceName
  );
};