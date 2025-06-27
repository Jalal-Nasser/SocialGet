import { supabase } from '@/integrations/supabase/client';

export interface FooterLink {
  id: string;
  category: string;
  label: string;
  path: string;
  order: number;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export async function fetchFooterLinks(): Promise<FooterLink[]> {
  const { data, error } = await supabase
    .from('footer_links')
    .select('*')
    .order('category', { ascending: true })
    .order('order', { ascending: true });

  if (error) {
    console.error('Error fetching footer links:', error);
    throw error;
  }
  return data as FooterLink[];
}

export async function addFooterLink(link: Omit<FooterLink, 'id' | 'created_at' | 'updated_at'>): Promise<FooterLink> {
  const { data, error } = await supabase
    .from('footer_links')
    .insert(link)
    .select()
    .single();

  if (error) {
    console.error('Error adding footer link:', error);
    throw error;
  }
  return data as FooterLink;
}

export async function updateFooterLink(id: string, updates: Partial<Omit<FooterLink, 'id' | 'created_at' | 'updated_at'>>): Promise<FooterLink> {
  const { data, error } = await supabase
    .from('footer_links')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating footer link:', error);
    throw error;
  }
  return data as FooterLink;
}

export async function deleteFooterLink(id: string): Promise<void> {
  const { error } = await supabase
    .from('footer_links')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting footer link:', error);
    throw error;
  }
}