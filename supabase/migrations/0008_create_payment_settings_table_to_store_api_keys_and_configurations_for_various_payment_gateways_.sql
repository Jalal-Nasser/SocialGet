CREATE TABLE public.payment_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  provider TEXT NOT NULL UNIQUE, -- e.g., 'paypal', 'stripe', 'crypto', 'skrill'
  api_key TEXT, -- For API keys or client IDs
  secret_key TEXT, -- For client secrets or webhook secrets
  enabled BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.payment_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view payment settings." ON public.payment_settings FOR SELECT USING ( (SELECT profiles.role FROM profiles WHERE profiles.id = auth.uid()) = 'admin' );
CREATE POLICY "Admins can manage payment settings." ON public.payment_settings FOR ALL USING ( (SELECT profiles.role FROM profiles WHERE profiles.id = auth.uid()) = 'admin' );

CREATE TRIGGER update_payment_settings_updated_at
BEFORE UPDATE ON public.payment_settings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();