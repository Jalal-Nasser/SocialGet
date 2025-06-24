ALTER TABLE public.services
ADD CONSTRAINT unique_platform_path UNIQUE (platform, path);