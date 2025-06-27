CREATE TABLE public.footer_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL, -- e.g., 'Products', 'Pages', 'Resources'
  label TEXT NOT NULL,
  path TEXT NOT NULL,
  "order" INT DEFAULT 0,
  enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.footer_links ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public footer links are viewable by everyone." ON public.footer_links FOR SELECT USING ( true );
CREATE POLICY "Admins can manage footer links." ON public.footer_links FOR ALL USING ( (SELECT profiles.role FROM profiles WHERE profiles.id = auth.uid()) = 'admin' );

CREATE TRIGGER update_footer_links_updated_at
BEFORE UPDATE ON public.footer_links
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();