CREATE TABLE public.settings (
  key TEXT PRIMARY KEY,
  value TEXT
);

ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view settings." ON public.settings FOR SELECT USING ( (SELECT profiles.role FROM profiles WHERE profiles.id = auth.uid()) = 'admin' );
CREATE POLICY "Admins can update settings." ON public.settings FOR UPDATE USING ( (SELECT profiles.role FROM profiles WHERE profiles.id = auth.uid()) = 'admin' );
CREATE POLICY "Admins can insert settings." ON public.settings FOR INSERT WITH CHECK ( (SELECT profiles.role FROM profiles WHERE profiles.id = auth.uid()) = 'admin' );