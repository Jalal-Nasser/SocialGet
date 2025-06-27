import { supabase } from '@/integrations/supabase/client';

export interface SmtpSetting {
  id: string;
  provider: string;
  api_key: string;
  from_email: string;
  created_at: string;
  updated_at: string;
}

export async function fetchSmtpSettings(): Promise<SmtpSetting[]> {
  const { data, error } = await supabase
    .from('smtp_settings')
    .select('*');

  if (error) {
    console.error('Error fetching SMTP settings:', error);
    throw error;
  }
  return data as SmtpSetting[];
}

export async function saveSmtpSetting(setting: Omit<SmtpSetting, 'id' | 'created_at' | 'updated_at'>): Promise<SmtpSetting> {
  // Check if a setting for this provider already exists
  const { data: existingSetting, error: fetchError } = await supabase
    .from('smtp_settings')
    .select('id')
    .eq('provider', setting.provider)
    .single();

  if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 means no rows found
    console.error('Error checking existing SMTP setting:', fetchError);
    throw fetchError;
  }

  if (existingSetting) {
    // Update existing setting
    const { data, error } = await supabase
      .from('smtp_settings')
      .update({ api_key: setting.api_key, from_email: setting.from_email })
      .eq('id', existingSetting.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating SMTP setting:', error);
      throw error;
    }
    return data as SmtpSetting;
  } else {
    // Insert new setting
    const { data, error } = await supabase
      .from('smtp_settings')
      .insert(setting)
      .select()
      .single();

    if (error) {
      console.error('Error inserting SMTP setting:', error);
      throw error;
    }
    return data as SmtpSetting;
  }
}