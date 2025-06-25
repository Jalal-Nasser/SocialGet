import { supabase } from '@/integrations/supabase/client';

interface Service {
  id: string;
  platform: string;
  service_name: string;
  path: string;
  description?: string;
  price: number;
  unit: string;
  created_at: string;
  updated_at: string;
}

export const fetchServices = async (): Promise<Service[]> => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Service[];
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to load services. Please try again later.');
  }
};

export const getServiceByPlatformAndPath = async (platform: string, path: string): Promise<Service | null> => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('platform', platform)
      .eq('path', path)
      .single();

    if (error) throw error;
    return data as Service;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
};