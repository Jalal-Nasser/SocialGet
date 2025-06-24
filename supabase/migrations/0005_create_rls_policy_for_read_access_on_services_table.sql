CREATE POLICY "Enable read access for all users" 
ON public.services FOR SELECT USING (true);