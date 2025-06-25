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
  [servicePath: string]: ServiceQuantityOption[] | string;
}

export const serviceQuantityOptions: ServiceQuantities = {
  // ... (keep all the existing quantity options)
};

// Make sure all these functions are properly exported
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

export const addService = async (service: Omit<Service, 'id' | 'created_at' | 'updated_at'>): Promise<Service> => {
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
};

export const updateService = async (id: string, updates: Partial<Omit<Service, 'id' | 'created_at' | 'updated_at'>>): Promise<Service> => {
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
};

export const deleteService = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
};

export const getServiceById = async (id: string): Promise<Service | null> => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching service by ID:', error);
    throw error;
  }
  return data as Service | null;
};

export const getServiceByPlatformAndPath = async (platform: string, path: string): Promise<Service | null> => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('platform', platform)
    .eq('path', path)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching service by platform and path:', error);
    throw error;
  }
  return data as Service | null;
};