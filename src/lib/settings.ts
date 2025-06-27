import { supabase } from '@/integrations/supabase/client';

export interface Setting {
  key: string;
  value: string;
}

export async function getSetting(key: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('settings')
    .select('value')
    .eq('key', key)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
    console.error(`Error fetching setting for key "${key}":`, error);
    throw error;
  }
  return data ? data.value : null;
}

export async function setSetting(key: string, value: string): Promise<Setting> {
  const { data, error } = await supabase
    .from('settings')
    .upsert({ key, value }, { onConflict: 'key' })
    .select()
    .single();

  if (error) {
    console.error(`Error setting value for key "${key}":`, error);
    throw error;
  }
  return data as Setting;
}