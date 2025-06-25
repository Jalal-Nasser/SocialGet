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
  price: number;
  isBestSeller?: boolean;
}

export interface ServiceQuantities {
  [servicePath: string]: ServiceQuantityOption[];
}

// Exact quantity options from the example site
export const serviceQuantityOptions: ServiceQuantities = {
  'followers': [
    { quantity: 100, price: 0.12, isBestSeller: true },
    { quantity: 500, price: 0.50 },
    { quantity: 1000, price: 0.90 },
    { quantity: 5000, price: 4.00 }
  ],
  'likes': [
    { quantity: 100, price: 0.08, isBestSeller: true },
    { quantity: 500, price: 0.35 },
    { quantity: 1000, price: 0.60 }
  ],
  'retweets': [
    { quantity: 100, price: 0.15 },
    { quantity: 500, price: 0.60 },
    { quantity: 1000, price: 1.00 }
  ],
  'views': [
    { quantity: 1000, price: 0.20 },
    { quantity: 5000, price: 0.80 },
    { quantity: 10000, price: 1.50 }
  ],
  'comments': [
    { quantity: 10, price: 0.50 },
    { quantity: 25, price: 1.00 },
    { quantity: 50, price: 1.80 }
  ]
};

// Fetch all services
export const fetchServices = async (): Promise<Service[]> => {
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
};

// Get service by platform and path
export const getServiceByPlatformAndPath = async (
  platform: string, 
  path: string
): Promise<Service | null> => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('platform', platform)
    .eq('path', path)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { // Ignore "no rows" error
      console.error('Error fetching service:', error);
      throw error;
    }
    return null;
  }
  return data as Service;
};

// Get quantity options for a service
export const getQuantityOptions = (servicePath: string): ServiceQuantityOption[] => {
  return serviceQuantityOptions[servicePath] || [];
};

// Calculate order total
export const calculateOrderTotal = (service: Service, quantity: number): number => {
  const options = getQuantityOptions(service.path);
  const option = options.find(opt => opt.quantity === quantity);
  return option ? option.price : quantity * service.price;
};