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