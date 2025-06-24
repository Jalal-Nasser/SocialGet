CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform TEXT NOT NULL,
  service_name TEXT NOT NULL,
  path TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 3) NOT NULL,
  unit TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Policy for public read access (e.g., for displaying services on the main site)
CREATE POLICY "Services are viewable by everyone." ON public.services FOR SELECT USING (true);

-- Policy for authenticated users to insert, update, and delete services (admin role would be ideal here, but for simplicity, we'll allow any authenticated user for now)
-- In a real application, you'd add a 'role' column to profiles and check for 'admin' role.
CREATE POLICY "Authenticated users can manage services." ON public.services
FOR ALL
USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Create a function to update the 'updated_at' timestamp automatically
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the function before update
CREATE TRIGGER update_services_updated_at
BEFORE UPDATE ON public.services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();