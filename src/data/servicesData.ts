import { CheckCircle, Star } from 'lucide-react';

export interface ServiceItem {
  platform: string;
  serviceName: string;
  path: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
  startingPrice: string;
  priceUnit: string;
  features: string[];
  stats: { value: string; label: string }[];
  paymentIcons: string[];
}

const commonPaymentIcons = [
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2560px-American_Express_logo_%282018%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2021.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Litecoin_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tether_USDT_logo.svg/1200px-Tether_USDT_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png",
];

export const services: ServiceItem[] = [
  // YouTube Services
  {
    platform: "YouTube",
    serviceName: "Subscribers",
    path: "youtube-subscribers",
    title: "Buy YouTube Subscribers",
    description: "Grow your YouTube channel with real, active subscribers to increase your reach and credibility.",
    rating: 4.8,
    reviewsCount: 1200,
    startingPrice: "$0.05",
    priceUnit: "/Subscriber",
    features: [
      "Real YouTube Subscribers",
      "Gradual Growth",
      "High Retention",
      "No Password Required"
    ],
    stats: [
      { value: "40k+", label: "Happy Customers" },
      { value: "5M+", label: "Subscribers Delivered" }
    ],
    paymentIcons: commonPaymentIcons
  },
  {
    platform: "YouTube",
    serviceName: "Views",
    path: "youtube-views",
    title: "Buy YouTube Views",
    description: "Increase your video's reach and credibility with high-quality YouTube views.",
    rating: 4.9,
    reviewsCount: 1500,
    startingPrice: "$0.005",
    priceUnit: "/View",
    features: [
      "High-Retention Views",
      "Fast Delivery",
      "Safe & Organic Growth",
      "No Password Required"
    ],
    stats: [
      { value: "50k+", label: "Happy Customers" },
      { value: "50M+", label: "Views Delivered" }
    ],
    paymentIcons: commonPaymentIcons
  }
];