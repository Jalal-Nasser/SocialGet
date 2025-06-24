interface Service {
  platform: string;
  serviceName: string;
  path: string;
  description: string;
  price: number;
  unit: string; // Added unit property
}

interface ServiceQuantityOption {
  quantity: number;
  discountPercentage: number;
  isBestSeller?: boolean;
}

interface ServiceQuantities {
  [servicePath: string]: ServiceQuantityOption[];
}

const services: Service[] = [
  // Twitter Services
  { platform: "Twitter", serviceName: "Followers", path: "followers", description: "High-quality Twitter followers", price: 0.036, unit: "/Follower" },
  { platform: "Twitter", serviceName: "USA Followers", path: "usa-followers", description: "High-quality Twitter followers from USA", price: 0.05, unit: "/Follower" },
  { platform: "Twitter", serviceName: "Likes", path: "likes", description: "Twitter post likes", price: 0.01, unit: "/Like" },
  { platform: "Twitter", serviceName: "Views", path: "views", description: "Twitter video views", price: 0.005, unit: "/View" },
  { platform: "Twitter", serviceName: "Retweets", path: "retweets", description: "Twitter retweets", price: 0.02, unit: "/Retweet" },
  { platform: "Twitter", serviceName: "Replies", path: "replies", description: "Twitter comment replies", price: 0.04, unit: "/Reply" },
  { platform: "Twitter", serviceName: "Impressions", path: "impressions", description: "Twitter post impressions", price: 0.003, unit: "/Impression" },
  { platform: "Twitter", serviceName: "Spaces Listeners", path: "spaces-listeners", description: "Listeners for Twitter Spaces", price: 0.07, unit: "/Listener" },
  { platform: "Twitter", serviceName: "Poll Votes", path: "poll-votes", description: "Votes for Twitter polls", price: 0.03, unit: "/Vote" },
  { platform: "Twitter", serviceName: "Bookmarks", path: "bookmarks", description: "Twitter post bookmarks", price: 0.015, unit: "/Bookmark" },
  { platform: "Twitter", serviceName: "Mentions", path: "mentions", description: "Twitter mentions for your account", price: 0.035, unit: "/Mention" },
  
  // Instagram Services
  { platform: "Instagram", serviceName: "Followers", path: "followers", description: "Real Instagram followers", price: 0.04, unit: "/Follower" },
  { platform: "Instagram", serviceName: "Likes", path: "likes", description: "Instagram post likes", price: 0.015, unit: "/Like" },
  { platform: "Instagram", serviceName: "Views", path: "views", description: "Instagram video views", price: 0.008, unit: "/View" },
  { platform: "Instagram", serviceName: "Auto Likes", path: "auto-likes", description: "Automatic Instagram likes", price: 0.06, unit: "/Like" },
  { platform: "Instagram", serviceName: "Comments", path: "comments", description: "Instagram post comments", price: 0.05, unit: "/Comment" },
  { platform: "Instagram", serviceName: "Comment Likes", path: "comment-likes", description: "Likes for Instagram comments", price: 0.03, unit: "/Like" },
  { platform: "Instagram", serviceName: "Custom Comments", path: "custom-comments", description: "Custom Instagram comments", price: 0.07, unit: "/Comment" },
  { platform: "Instagram", serviceName: "Reels Views", path: "reels-views", description: "Instagram Reels views", price: 0.01, unit: "/View" },
  { platform: "Instagram", serviceName: "Reels Likes", path: "reels-likes", description: "Likes for Instagram Reels", price: 0.035, unit: "/Like" },
  { platform: "Instagram", serviceName: "Live Views", path: "live-views", description: "Views for Instagram Live streams", price: 0.08, unit: "/View" },
  { platform: "Instagram", serviceName: "Saves", path: "saves", description: "Instagram post saves", price: 0.018, unit: "/Save" },
  { platform: "Instagram", serviceName: "Shares", path: "shares", description: "Instagram post shares", price: 0.025, unit: "/Share" },
  { platform: "Instagram", serviceName: "Story Poll Votes", path: "story-poll-votes", description: "Votes for Instagram Story polls", price: 0.04, unit: "/Vote" },
  { platform: "Instagram", serviceName: "Comment Replies", path: "comment-replies", description: "Replies to Instagram comments", price: 0.055, unit: "/Reply" },
  { platform: "Instagram", serviceName: "Impressions", path: "impressions", description: "Instagram post impressions", price: 0.007, unit: "/Impression" },
  { platform: "Instagram", serviceName: "Profile Visits", path: "profile-visits", description: "Instagram profile visits", price: 0.03, unit: "/Visit" },
  { platform: "Instagram", serviceName: "Story Views", path: "story-views", description: "Instagram Story views", price: 0.006, unit: "/View" },
  
  // YouTube Services
  { platform: "YouTube", serviceName: "Views", path: "views", description: "YouTube video views", price: 0.009, unit: "/View" },
  { platform: "YouTube", serviceName: "Likes", path: "likes", description: "YouTube video likes", price: 0.02, unit: "/Like" },
  { platform: "YouTube", serviceName: "Subscribers", path: "subscribers", description: "YouTube channel subscribers", price: 0.06, unit: "/Subscriber" },
  { platform: "YouTube", serviceName: "Comments", path: "comments", description: "YouTube video comments", price: 0.05, unit: "/Comment" },
  { platform: "YouTube", serviceName: "Favourites", path: "favourites", description: "YouTube video favourites", price: 0.04, unit: "/Favorite" },
  { platform: "YouTube", serviceName: "Shares", path: "shares", description: "YouTube video shares", price: 0.025, unit: "/Share" },
  { platform: "YouTube", serviceName: "Comment Replies", path: "comment-replies", description: "Replies to YouTube comments", price: 0.055, unit: "/Reply" },
  { platform: "YouTube", serviceName: "Watch Hours", path: "watch-hours", description: "YouTube watch hours", price: 0.09, unit: "/Hour" },
  { platform: "YouTube", serviceName: "Dislikes", path: "dislikes", description: "YouTube video dislikes", price: 0.01, unit: "/Dislike" },
  { platform: "YouTube", serviceName: "Poll Votes", path: "poll-votes", description: "Votes for YouTube polls", price: 0.03, unit: "/Vote" },
  { platform: "YouTube", serviceName: "Live Stream Views", path: "live-stream-views", description: "Views for YouTube Live streams", price: 0.08, unit: "/View" },
  
  // TikTok Services
  { platform: "TikTok", serviceName: "Followers", path: "followers", description: "TikTok followers", price: 0.06, unit: "/Follower" },
  { platform: "TikTok", serviceName: "Likes", path: "likes", description: "TikTok video likes", price: 0.05, unit: "/Like" },
  { platform: "TikTok", serviceName: "Views", path: "views", description: "TikTok video views", price: 0.007, unit: "/View" },
  { platform: "TikTok", serviceName: "Comments", path: "comments", description: "TikTok video comments", price: 0.05, unit: "/Comment" },
  { platform: "TikTok", serviceName: "Comment Replies", path: "comment-replies", description: "Replies to TikTok comments", price: 0.055, unit: "/Reply" },
  { platform: "TikTok", serviceName: "Custom Comments", path: "custom-comments", description: "Custom TikTok comments", price: 0.07, unit: "/Comment" },
  { platform: "TikTok", serviceName: "Shares", path: "shares", description: "TikTok video shares", price: 0.025, unit: "/Share" },
  { platform: "TikTok", serviceName: "Auto Views", path: "auto-views", description: "Automatic TikTok video views", price: 0.06, unit: "/View" },
  { platform: "TikTok", serviceName: "Live Views", path: "live-views", description: "Views for TikTok Live streams", price: 0.08, unit: "/View" },
  { platform: "TikTok", serviceName: "Saves", path: "saves", description: "TikTok video saves", price: 0.018, unit: "/Save" },
  { platform: "TikTok", serviceName: "Coins", path: "coins", description: "TikTok coins", price: 0.1, unit: "/Coin" },
  
  // Facebook Services
  { platform: "Facebook", serviceName: "Likes", path: "likes", description: "Facebook page likes", price: 0.04, unit: "/Like" },
  { platform: "Facebook", serviceName: "Followers", path: "followers", description: "Facebook profile followers", price: 0.05, unit: "/Follower" },
  { platform: "Facebook", serviceName: "Views", path: "views", description: "Facebook video views", price: 0.008, unit: "/View" },
  { platform: "Facebook", serviceName: "Comments", path: "comments", description: "Facebook post comments", price: 0.05, unit: "/Comment" },
  { platform: "Facebook", serviceName: "Comment Likes", path: "comment-likes", description: "Likes for Facebook comments", price: 0.03, unit: "/Like" },
  { platform: "Facebook", serviceName: "Post Shares", path: "post-shares", description: "Shares for Facebook posts", price: 0.035, unit: "/Share" },
  { platform: "Facebook", serviceName: "Reactions", path: "reactions", description: "Facebook post reactions", price: 0.025, unit: "/Reaction" },
  { platform: "Facebook", serviceName: "Event Attendees", path: "event-attendees", description: "Attendees for Facebook events", price: 0.06, unit: "/Attendee" },
  { platform: "Facebook", serviceName: "Reviews", path: "reviews", description: "Facebook page reviews", price: 0.05, unit: "/Review" },
  { platform: "Facebook", serviceName: "Poll Votes", path: "poll-votes", description: "Votes for Facebook polls", price: 0.03, unit: "/Vote" },
  { platform: "Facebook", serviceName: "Friend Requests", path: "friend-requests", description: "Facebook friend requests", price: 0.07, unit: "/Request" },
  { platform: "Facebook", serviceName: "Group Members", path: "group-members", description: "Members for Facebook groups", price: 0.08, unit: "/Member" },
  { platform: "Facebook", serviceName: "Live Viewers", path: "live-viewers", description: "Viewers for Facebook Live streams", price: 0.09, unit: "/Viewer" },
  
  // Reddit Services
  { platform: "Reddit", serviceName: "Upvotes", path: "upvotes", description: "Reddit post upvotes", price: 0.035, unit: "/Upvote" },
  { platform: "Reddit", serviceName: "Subscribers", path: "subscribers", description: "Reddit community subscribers", price: 0.05, unit: "/Subscriber" },
  { platform: "Reddit", serviceName: "Post & Comment Downvotes", path: "downvotes", description: "Reddit post and comment downvotes", price: 0.035, unit: "/Downvote" },
  { platform: "Reddit", serviceName: "Post & Comment Awards", path: "awards", description: "Reddit post and comment awards", price: 0.06, unit: "/Award" },
  { platform: "Reddit", serviceName: "Accounts", path: "accounts", description: "Reddit accounts", price: 0.11, unit: "/Account" },
  { platform: "Reddit", serviceName: "Reddit Comments", path: "comments", description: "Reddit comments", price: 0.05, unit: "/Comment" },
  
  // LinkedIn Services
  { platform: "LinkedIn", serviceName: "Connections", path: "connections", description: "LinkedIn profile connections", price: 0.06, unit: "/Connection" },
  { platform: "LinkedIn", serviceName: "Followers", path: "followers", description: "LinkedIn profile followers", price: 0.05, unit: "/Follower" },
  { platform: "LinkedIn", serviceName: "Likes", path: "likes", description: "LinkedIn post likes", price: 0.04, unit: "/Like" },
  { platform: "LinkedIn", serviceName: "Comments", path: "comments", description: "LinkedIn post comments", price: 0.05, unit: "/Comment" },
  { platform: "LinkedIn", serviceName: "Views", path: "views", description: "LinkedIn video views", price: 0.009, unit: "/View" },
  { platform: "LinkedIn", serviceName: "Reactions", path: "reactions", description: "LinkedIn post reactions", price: 0.025, unit: "/Reaction" },
  { platform: "LinkedIn", serviceName: "Shares", path: "shares", description: "LinkedIn post shares", price: 0.035, unit: "/Share" },
  { platform: "LinkedIn", serviceName: "Endorsements", path: "endorsements", description: "LinkedIn skill endorsements", price: 0.045, unit: "/Endorsement" },
  { platform: "LinkedIn", serviceName: "Employees", path: "employees", description: "LinkedIn company page employees", price: 0.08, unit: "/Employee" },
  { platform: "LinkedIn", serviceName: "Group Members", path: "group-members", description: "LinkedIn group members", price: 0.07, unit: "/Member" }
];

const serviceQuantityOptions: ServiceQuantities = {
  "likes": [ // For Twitter Likes (path: "likes")
    { quantity: 25, discountPercentage: 5 },
    { quantity: 50, discountPercentage: 10 },
    { quantity: 100, discountPercentage: 15 },
    { quantity: 250, discountPercentage: 20 },
    { quantity: 500, discountPercentage: 25 },
    { quantity: 1000, discountPercentage: 30, isBestSeller: true },
    { quantity: 2500, discountPercentage: 35 },
    { quantity: 5000, discountPercentage: 40 },
  ],
  // Add other service quantity options here as needed for other services
  // Example for Twitter Followers:
  "followers": [
    { quantity: 50, discountPercentage: 5 },
    { quantity: 100, discountPercentage: 10 },
    { quantity: 250, discountPercentage: 15 },
    { quantity: 500, discountPercentage: 20 },
    { quantity: 1000, discountPercentage: 25, isBestSeller: true },
    { quantity: 2500, discountPercentage: 30 },
    { quantity: 5000, discountPercentage: 35 },
    { quantity: 10000, discountPercentage: 40 },
  ],
};

const getServiceByPlatformAndName = (platform: string, serviceName: string): Service | undefined => {
  return services.find(
    service => 
      service.platform.toLowerCase() === platform.toLowerCase() && 
      service.path.toLowerCase() === serviceName.toLowerCase()
  );
};

export { services, getServiceByPlatformAndName, serviceQuantityOptions };