CREATE TABLE public.smtp_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  provider TEXT NOT NULL UNIQUE,
  api_key TEXT NOT NULL,
  from_email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add a trigger to update the updated_at column on changes
CREATE TRIGGER update_smtp_settings_updated_at
BEFORE UPDATE ON public.smtp_settings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE public.smtp_settings ENABLE ROW LEVEL SECURITY;

-- Policies for admin access
CREATE POLICY "Admins can view SMTP settings." ON public.smtp_settings FOR SELECT USING (
  auth.uid() IS NOT NULL AND (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

CREATE POLICY "Admins can insert SMTP settings." ON public.smtp_settings FOR INSERT WITH CHECK (
  auth.uid() IS NOT NULL AND (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

CREATE POLICY "Admins can update SMTP settings." ON public.smtp_settings FOR UPDATE USING (
  auth.uid() IS NOT NULL AND (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

CREATE POLICY "Admins can delete SMTP settings." ON public.smtp_settings FOR DELETE USING (
  auth.uid() IS NOT NULL AND (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);