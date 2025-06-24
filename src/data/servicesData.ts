interface Service {
  platform: string;
  serviceName: string;
  path: string;
  description: string;
  price: number;
}

const services: Service[] = [
  // Twitter Services
  { platform: "Twitter", serviceName: "Followers", path: "followers", description: "High-quality Twitter followers", price: 2.99 },
  { platform: "Twitter", serviceName: "USA Followers", path: "usa-followers", description: "High-quality Twitter followers from USA", price: 4.99 },
  { platform: "Twitter", serviceName: "Likes", path: "likes", description: "Twitter post likes", price: 1.99 },
  { platform: "Twitter", serviceName: "Views", path: "views", description: "Twitter video views", price: 1.49 },
  { platform: "Twitter", serviceName: "Retweets", path: "retweets", description: "Twitter retweets", price: 2.49 },
  { platform: "Twitter", serviceName: "Replies", path: "replies", description: "Twitter comment replies", price: 3.99 },
  { platform: "Twitter", serviceName: "Impressions", path: "impressions", description: "Twitter post impressions", price: 1.29 },
  { platform: "Twitter", serviceName: "Spaces Listeners", path: "spaces-listeners", description: "Listeners for Twitter Spaces", price: 6.99 },
  { platform: "Twitter", serviceName: "Poll Votes", path: "poll-votes", description: "Votes for Twitter polls", price: 2.99 },
  { platform: "Twitter", serviceName: "Bookmarks", path: "bookmarks", description: "Twitter post bookmarks", price: 1.79 },
  { platform: "Twitter", serviceName: "Mentions", path: "mentions", description: "Twitter mentions for your account", price: 3.49 },
  
  // Instagram Services
  { platform: "Instagram", serviceName: "Followers", path: "followers", description: "Real Instagram followers", price: 3.99 },
  { platform: "Instagram", serviceName: "Likes", path: "likes", description: "Instagram post likes", price: 2.49 },
  { platform: "Instagram", serviceName: "Views", path: "views", description: "Instagram video views", price: 1.99 },
  { platform: "Instagram", serviceName: "Auto Likes", path: "auto-likes", description: "Automatic Instagram likes", price: 5.99 },
  { platform: "Instagram", serviceName: "Comments", path: "comments", description: "Instagram post comments", price: 4.99 },
  { platform: "Instagram", serviceName: "Comment Likes", path: "comment-likes", description: "Likes for Instagram comments", price: 2.99 },
  { platform: "Instagram", serviceName: "Custom Comments", path: "custom-comments", description: "Custom Instagram comments", price: 6.99 },
  { platform: "Instagram", serviceName: "Reels Views", path: "reels-views", description: "Instagram Reels views", price: 2.99 },
  { platform: "Instagram", serviceName: "Reels Likes", path: "reels-likes", description: "Likes for Instagram Reels", price: 3.49 },
  { platform: "Instagram", serviceName: "Live Views", path: "live-views", description: "Views for Instagram Live streams", price: 7.99 },
  { platform: "Instagram", serviceName: "Saves", path: "saves", description: "Instagram post saves", price: 1.99 },
  { platform: "Instagram", serviceName: "Shares", path: "shares", description: "Instagram post shares", price: 2.49 },
  { platform: "Instagram", serviceName: "Story Poll Votes", path: "story-poll-votes", description: "Votes for Instagram Story polls", price: 3.99 },
  { platform: "Instagram", serviceName: "Comment Replies", path: "comment-replies", description: "Replies to Instagram comments", price: 5.49 },
  { platform: "Instagram", serviceName: "Impressions", path: "impressions", description: "Instagram post impressions", price: 1.79 },
  { platform: "Instagram", serviceName: "Profile Visits", path: "profile-visits", description: "Instagram profile visits", price: 2.99 },
  { platform: "Instagram", serviceName: "Story Views", path: "story-views", description: "Instagram Story views", price: 1.49 },
  
  // YouTube Services
  { platform: "YouTube", serviceName: "Views", path: "views", description: "YouTube video views", price: 4.99 },
  { platform: "YouTube", serviceName: "Likes", path: "likes", description: "YouTube video likes", price: 3.99 },
  { platform: "YouTube", serviceName: "Subscribers", path: "subscribers", description: "YouTube channel subscribers", price: 5.99 },
  { platform: "YouTube", serviceName: "Comments", path: "comments", description: "YouTube video comments", price: 4.99 },
  { platform: "YouTube", serviceName: "Favourites", path: "favourites", description: "YouTube video favourites", price: 3.99 },
  { platform: "YouTube", serviceName: "Shares", path: "shares", description: "YouTube video shares", price: 2.49 },
  { platform: "YouTube", serviceName: "Comment Replies", path: "comment-replies", description: "Replies to YouTube comments", price: 5.49 },
  { platform: "YouTube", serviceName: "Watch Hours", path: "watch-hours", description: "YouTube watch hours", price: 8.99 },
  { platform: "YouTube", serviceName: "Dislikes", path: "dislikes", description: "YouTube video dislikes", price: 1.99 },
  { platform: "YouTube", serviceName: "Poll Votes", path: "poll-votes", description: "Votes for YouTube polls", price: 2.99 },
  { platform: "YouTube", serviceName: "Live Stream Views", path: "live-stream-views", description: "Views for YouTube Live streams", price: 7.99 },
  
  // TikTok Services
  { platform: "TikTok", serviceName: "Followers", path: "followers", description: "TikTok followers", price: 5.99 },
  { platform: "TikTok", serviceName: "Likes", path: "likes", description: "TikTok video likes", price: 4.99 },
  { platform: "TikTok", serviceName: "Views", path: "views", description: "TikTok video views", price: 3.99 },
  { platform: "TikTok", serviceName: "Comments", path: "comments", description: "TikTok video comments", price: 4.99 },
  { platform: "TikTok", serviceName: "Comment Replies", path: "comment-replies", description: "Replies to TikTok comments", price: 5.49 },
  { platform: "TikTok", serviceName: "Custom Comments", path: "custom-comments", description: "Custom TikTok comments", price: 6.99 },
  { platform: "TikTok", serviceName: "Shares", path: "shares", description: "TikTok video shares", price: 2.49 },
  { platform: "TikTok", serviceName: "Auto Views", path: "auto-views", description: "Automatic TikTok video views", price: 5.99 },
  { platform: "TikTok", serviceName: "Live Views", path: "live-views", description: "Views for TikTok Live streams", price: 7.99 },
  { platform: "TikTok", serviceName: "Saves", path: "saves", description: "TikTok video saves", price: 1.99 },
  { platform: "TikTok", serviceName: "Coins", path: "coins", description: "TikTok coins", price: 9.99 },
  
  // Facebook Services
  { platform: "Facebook", serviceName: "Likes", path: "likes", description: "Facebook page likes", price: 3.99 },
  { platform: "Facebook", serviceName: "Followers", path: "followers", description: "Facebook profile followers", price: 4.99 },
  { platform: "Facebook", serviceName: "Views", path: "views", description: "Facebook video views", price: 2.99 },
  { platform: "Facebook", serviceName: "Comments", path: "comments", description: "Facebook post comments", price: 4.99 },
  { platform: "Facebook", serviceName: "Comment Likes", path: "comment-likes", description: "Likes for Facebook comments", price: 2.99 },
  { platform: "Facebook", serviceName: "Post Shares", path: "post-shares", description: "Shares for Facebook posts", price: 3.49 },
  { platform: "Facebook", serviceName: "Reactions", path: "reactions", description: "Facebook post reactions", price: 2.49 },
  { platform: "Facebook", serviceName: "Event Attendees", path: "event-attendees", description: "Attendees for Facebook events", price: 5.99 },
  { platform: "Facebook", serviceName: "Reviews", path: "reviews", description: "Facebook page reviews", price: 4.99 },
  { platform: "Facebook", serviceName: "Poll Votes", path: "poll-votes", description: "Votes for Facebook polls", price: 2.99 },
  { platform: "Facebook", serviceName: "Friend Requests", path: "friend-requests", description: "Facebook friend requests", price: 6.99 },
  { platform: "Facebook", serviceName: "Group Members", path: "group-members", description: "Members for Facebook groups", price: 7.99 },
  { platform: "Facebook", serviceName: "Live Viewers", path: "live-viewers", description: "Viewers for Facebook Live streams", price: 8.99 },
  
  // Reddit Services
  { platform: "Reddit", serviceName: "Upvotes", path: "upvotes", description: "Reddit post upvotes", price: 3.49 },
  { platform: "Reddit", serviceName: "Subscribers", path: "subscribers", description: "Reddit community subscribers", price: 4.99 },
  
  // LinkedIn Services
  { platform: "LinkedIn", serviceName: "Connections", path: "connections", description: "LinkedIn profile connections", price: 5.99 },
  { platform: "LinkedIn", serviceName: "Endorsements", path: "endorsements", description: "LinkedIn skill endorsements", price: 4.49 }
];

const getServiceByPlatformAndName = (platform: string, serviceName: string): Service | undefined => {
  return services.find(
    service => 
      service.platform.toLowerCase() === platform.toLowerCase() && 
      service.path.toLowerCase() === serviceName.toLowerCase()
  );
};

export { services, getServiceByPlatformAndName };