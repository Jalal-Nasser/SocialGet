import { supabase } from '@/integrations/supabase/client';

export interface Service {
  id: string;
  platform: string;
  service_name: string;
  path: string;
  description: string;
  price: number;
  unit: string;
}

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('platform', { ascending: true })
    .order('service_name', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
    return [];
  }

  return data as Service[];
}

export async function getServiceByPlatformAndPath(platform: string, path: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('platform', platform)
    .eq('path', path)
    .single();

  if (error) {
    console.error('Error fetching service:', error);
    return null;
  }

  return data as Service;
}