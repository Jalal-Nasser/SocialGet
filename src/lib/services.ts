import { supabase } from '@/integrations/supabase/client';

export interface Service {
  id: string;
  platform: string;
  service_name: string;
  path: string;
  description: string;
  price: number;
  unit: string;
  created_at: string;
  updated_at: string;
}

export interface ServiceQuantityOption {
  quantity: number;
  discountPercentage: number;
  isBestSeller?: boolean;
}

export interface ServiceQuantities {
  [servicePath: string]: ServiceQuantityOption[];
}

// Placeholder for quantity options (will eventually be dynamic or managed separately)
export const serviceQuantityOptions: ServiceQuantities = {
  "likes": [ // For Twitter Likes, Instagram Likes, YouTube Likes, TikTok Likes, Facebook Post Likes, Facebook Page Likes, LinkedIn Likes
    { quantity: 25, discountPercentage: 5 },
    { quantity: 50, discountPercentage: 10 },
    { quantity: 100, discountPercentage: 15 },
    { quantity: 250, discountPercentage: 20 },
    { quantity: 500, discountPercentage: 25 },
    { quantity: 1000, discountPercentage: 30, isBestSeller: true },
    { quantity: 2500, discountPercentage: 35 },
    { quantity: 5000, discountPercentage: 40 },
  ],
  "followers": [ // For Twitter Followers, Instagram Followers, TikTok Followers, Facebook Followers, LinkedIn Followers
    { quantity: 50, discountPercentage: 5 },
    { quantity: 100, discountPercentage: 10 },
    { quantity: 250, discountPercentage: 15 },
    { quantity: 500, discountPercentage: 20 },
    { quantity: 1000, discountPercentage: 25, isBestSeller: true },
    { quantity: 2500, discountPercentage: 30 },
    { quantity: 5000, discountPercentage: 35 },
    { quantity: 10000, discountPercentage: 40 },
  ],
  "views": [ // For Twitter Views, Instagram Views, Instagram Story Views, YouTube Views, TikTok Views, Facebook Views
    { quantity: 100, discountPercentage: 5 },
    { quantity: 500, discountPercentage: 10 },
    { quantity: 1000, discountPercentage: 15 },
    { quantity: 5000, discountPercentage: 20 },
    { quantity: 10000, discountPercentage: 25, isBestSeller: true },
    { quantity: 50000, discountPercentage: 30 },
    { quantity: 100000, discountPercentage: 35 },
    { quantity: 500000, discountPercentage: 40 },
  ],
  "retweets": [ // For Twitter Retweets
    { quantity: 25, discountPercentage: 5 },
    { quantity: 50, discountPercentage: 10 },
    { quantity: 100, discountPercentage: 15 },
    { quantity: 250, discountPercentage: 20 },
    { quantity: 500, discountPercentage: 25 },
    { quantity: 1000, discountPercentage: 30, isBestSeller: true },
  ],
  "comments": [ // For Twitter Comments, Instagram Comments, YouTube Comments, TikTok Comments, Facebook Comments, Reddit Comments, LinkedIn Comments
    { quantity: 5, discountPercentage: 5 },
    { quantity: 10, discountPercentage: 10 },
    { quantity: 25, discountPercentage: 15 },
    { quantity: 50, discountPercentage: 20 },
    { quantity: 100, discountPercentage: 25, isBestSeller: true },
    { quantity: 250, discountPercentage: 30 },
  ],
  "saves": [ // For Instagram Saves
    { quantity: 25, discountPercentage: 5 },
    { quantity: 50, discountPercentage: 10 },
    { quantity: 100, discountPercentage: 15 },
    { quantity: 250, discountPercentage: 20 },
    { quantity: 500, discountPercentage: 25 },
  ],
  "mentions": [ // For Instagram Mentions
    { quantity: 10, discountPercentage: 5 },
    { quantity: 25, discountPercentage: 10 },
    { quantity: 50, discountPercentage: 15 },
    { quantity: 100, discountPercentage: 20 },
  ],
  "impressions": [ // For Instagram Impressions
    { quantity: 1000, discountPercentage: 5 },
    { quantity: 5000, discountPercentage: 10 },
    { quantity: 10000, discountPercentage: 15 },
    { quantity: 50000, discountPercentage: 20 },
  ],
  "story-views": [ // For Instagram Story Views
    { quantity: 100, discountPercentage: 5 },
    { quantity: 500, discountPercentage: 10 },
    { quantity: 1000, discountPercentage: 15 },
    { quantity: 5000, discountPercentage: 20 },
  ],
  "profile-visits": [ // For Instagram Profile Visits
    { quantity: 100, discountPercentage: 5 },
    { quantity: 500, discountPercentage: 10 },
    { quantity: 1000, discountPercentage: 15 },
    { quantity: 5000, discountPercentage: 20 },
  ],
  "subscribers": [ // For YouTube Subscribers
    { quantity: 10, discountPercentage: 5 },
    { quantity: 25, discountPercentage: 10 },
    { quantity: 50, discountPercentage: 15 },
    { quantity: 100, discountPercentage: 20 },
    { quantity: 250, discountPercentage: 25 },
    { quantity: 500, discountPercentage: 30, isBestSeller: true },
  ],
  "watch-time": [ // For YouTube Watch Time (in minutes)
    { quantity: 60, discountPercentage: 5 }, // 1 hour
    { quantity: 300, discountPercentage: 10 }, // 5 hours
    { quantity: 600, discountPercentage: 15 }, // 10 hours
    { quantity: 1200, discountPercentage: 20 }, // 20 hours
  ],
  "shares": [ // For TikTok Shares
    { quantity: 10, discountPercentage: 5 },
    { quantity: 25, discountPercentage: 10 },
    { quantity: 50, discountPercentage: 15 },
    { quantity: 100, discountPercentage: 20 },
  ],
  "page-likes": [ // For Facebook Page Likes
    { quantity: 25, discountPercentage: 5 },
    { quantity: 50, discountPercentage: 10 },
    { quantity: 100, discountPercentage: 15 },
    { quantity: 250, discountPercentage: 20 },
    { quantity: 500, discountPercentage: 25 },
  ],
  "post-likes": [ // For Facebook Post Likes
    { quantity: 25, discountPercentage: 5 },
    { quantity: 50, discountPercentage: 10 },
    { quantity: 100, discountPercentage: 15 },
    { quantity: 250, discountPercentage: 20 },
    { quantity: 500, discountPercentage: 25 },
  ],
  "upvotes": [ // For Reddit Upvotes
    { quantity: 10, discountPercentage: 5 },
    { quantity: 25, discountPercentage: 10 },
    { quantity: 50, discountPercentage: 15 },
    { quantity: 100, discountPercentage: 20 },
  ],
  "downvotes": [ // For Reddit Downvotes
    { quantity: 10, discountPercentage: 5 },
    { quantity: 25, discountPercentage: 10 },
    { quantity: 50, discountPercentage: 15 },
    { quantity: 100, discountPercentage: 20 },
  ],
};

export async function fetchServices(): Promise<Service[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('platform', { ascending: true })
    .order('service_name', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
  return data as Service[];
}

export async function addService(service: Omit<Service, 'id' | 'created_at' | 'updated_at'>): Promise<Service> {
  const { data, error } = await supabase
    .from('services')
    .insert(service)
    .select()
    .single();

  if (error) {
    console.error('Error adding service:', error);
    throw error;
  }
  return data as Service;
}

export async function updateService(id: string, updates: Partial<Omit<Service, 'id' | 'created_at' | 'updated_at'>>): Promise<Service> {
  const { data, error } = await supabase
    .from('services')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating service:', error);
    throw error;
  }
  return data as Service;
}

export async function deleteService(id: string): Promise<void> {
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
}

export async function getServiceById(id: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
    console.error('Error fetching service by ID:', error);
    throw error;
  }
  return data as Service | null;
}

export async function getServiceByPlatformAndPath(platform: string, path: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('platform', platform)
    .eq('path', path)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
    console.error('Error fetching service by platform and path:', error);
    throw error;
  }
  return data as Service | null;
}