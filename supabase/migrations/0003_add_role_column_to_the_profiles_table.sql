ALTER TABLE public.profiles
ADD COLUMN role TEXT DEFAULT 'user';

-- Update the handle_new_user function to include the new role column
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, role)
  VALUES (new.id, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name', 'user');
  RETURN new;
END;
$$;