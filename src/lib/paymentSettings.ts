import { supabase } from '@/integrations/supabase/client';

export interface PaymentSetting {
  id: string;
  provider: string;
  api_key: string | null;
  secret_key: string | null;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export async function fetchPaymentSettings(): Promise<PaymentSetting[]> {
  const { data, error } = await supabase
    .from('payment_settings')
    .select('*');

  if (error) {
    console.error('Error fetching payment settings:', error);
    throw error;
  }
  return data as PaymentSetting[];
}

export async function savePaymentSetting(setting: Omit<PaymentSetting, 'id' | 'created_at' | 'updated_at'>): Promise<PaymentSetting> {
  const { data, error } = await supabase
    .from('payment_settings')
    .upsert(setting, { onConflict: 'provider' }) // Upsert based on provider
    .select()
    .single();

  if (error) {
    console.error('Error saving payment setting:', error);
    throw error;
  }
  return data as PaymentSetting;
}

export async function getPaymentSettingByProvider(provider: string): Promise<PaymentSetting | null> {
  const { data, error } = await supabase
    .from('payment_settings')
    .select('*')
    .eq('provider', provider)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
    console.error(`Error fetching payment setting for provider "${provider}":`, error);
    throw error;
  }
  return data as PaymentSetting | null;
}