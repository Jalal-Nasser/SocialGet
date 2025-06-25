-- Clear existing services first
TRUNCATE TABLE public.services RESTART IDENTITY CASCADE;

-- Insert Twitter services
INSERT INTO public.services (platform, service_name, path, description, price, unit) VALUES
('Twitter', 'Followers', 'followers', 'High-quality Twitter followers with low drop rate', 0.001, '/Follower'),
('Twitter', 'Likes', 'likes', 'Real Twitter likes from active accounts', 0.001, '/Like'),
('Twitter', 'Retweets', 'retweets', 'Genuine retweets to boost your reach', 0.001, '/Retweet'),
('Twitter', 'Views', 'views', 'Organic Twitter video views', 0.001, '/View'),
('Twitter', 'Comments', 'comments', 'Engaging comments on your tweets', 0.001, '/Comment');

-- Insert Instagram services
INSERT INTO public.services (platform, service_name, path, description, price, unit) VALUES
('Instagram', 'Followers', 'followers', 'Real Instagram followers with gradual delivery', 0.001, '/Follower'),
('Instagram', 'Likes', 'likes', 'Authentic Instagram likes from real users', 0.001, '/Like'),
('Instagram', 'Views', 'views', 'Genuine views for your Instagram videos', 0.001, '/View'),
('Instagram', 'Story Views', 'story-views', 'Real views for your Instagram stories', 0.001, '/View'),
('Instagram', 'Comments', 'comments', 'Engaging comments on your posts', 0.001, '/Comment');

-- Insert YouTube services
INSERT INTO public.services (platform, service_name, path, description, price, unit) VALUES
('YouTube', 'Subscribers', 'subscribers', 'Active YouTube subscribers', 0.001, '/Subscriber'),
('YouTube', 'Likes', 'likes', 'Genuine YouTube likes', 0.001, '/Like'),
('YouTube', 'Views', 'views', 'High-retention YouTube views', 0.001, '/View'),
('YouTube', 'Comments', 'comments', 'Relevant YouTube comments', 0.001, '/Comment');

-- Insert TikTok services
INSERT INTO public.services (platform, service_name, path, description, price, unit) VALUES
('TikTok', 'Followers', 'followers', 'Real TikTok followers', 0.001, '/Follower'),
('TikTok', 'Likes', 'likes', 'Authentic TikTok likes', 0.001, '/Like'),
('TikTok', 'Views', 'views', 'Genuine TikTok views', 0.001, '/View'),
('TikTok', 'Comments', 'comments', 'Engaging TikTok comments', 0.001, '/Comment');

-- Insert Facebook services
INSERT INTO public.services (platform, service_name, path, description, price, unit) VALUES
('Facebook', 'Page Likes', 'page-likes', 'Real Facebook page likes', 0.001, '/Like'),
('Facebook', 'Post Likes', 'post-likes', 'Genuine post engagement', 0.001, '/Like'),
('Facebook', 'Followers', 'followers', 'Active profile followers', 0.001, '/Follower'),
('Facebook', 'Comments', 'comments', 'Relevant post comments', 0.001, '/Comment');

-- Insert Reddit services
INSERT INTO public.services (platform, service_name, path, description, price, unit) VALUES
('Reddit', 'Upvotes', 'upvotes', 'Increase post visibility', 0.001, '/Upvote'),
('Reddit', 'Downvotes', 'downvotes', 'Decrease competitor visibility', 0.001, '/Downvote'),
('Reddit', 'Comments', 'comments', 'Engaging discussions', 0.001, '/Comment');

-- Insert LinkedIn services
INSERT INTO public.services (platform, service_name, path, description, price, unit) VALUES
('LinkedIn', 'Followers', 'followers', 'Professional profile followers', 0.001, '/Follower'),
('LinkedIn', 'Likes', 'likes', 'Post engagement from professionals', 0.001, '/Like'),
('LinkedIn', 'Comments', 'comments', 'Industry-relevant comments', 0.001, '/Comment');