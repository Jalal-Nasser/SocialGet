UPDATE public.services SET
price = CASE
  WHEN service_name = 'Followers' THEN 0.0012
  WHEN service_name = 'Likes' THEN 0.0008
  WHEN service_name = 'Retweets' THEN 0.0015
  WHEN service_name = 'Views' THEN 0.0002
  WHEN service_name = 'Comments' THEN 0.0050
  WHEN service_name = 'Subscribers' THEN 0.0020
  WHEN service_name = 'Story Views' THEN 0.0003
  WHEN service_name = 'Upvotes' THEN 0.0007
  WHEN service_name = 'Downvotes' THEN 0.0009
  ELSE price
END;