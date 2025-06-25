// ... (keep all existing imports and interfaces)

export const serviceQuantityOptions: ServiceQuantities = {
  // Twitter options
  'followers': [
    { quantity: 50, discountPercentage: 5 },
    { quantity: 100, discountPercentage: 10 },
    { quantity: 250, discountPercentage: 15 },
    { quantity: 500, discountPercentage: 20 },
    { quantity: 1000, discountPercentage: 25, isBestSeller: true },
    { quantity: 2500, discountPercentage: 30 },
    { quantity: 5000, discountPercentage: 35 }
  ],
  'likes': [
    { quantity: 50, discountPercentage: 5 },
    { quantity: 100, discountPercentage: 10 },
    { quantity: 250, discountPercentage: 15 },
    { quantity: 500, discountPercentage: 20 },
    { quantity: 1000, discountPercentage: 25, isBestSeller: true },
    { quantity: 2500, discountPercentage: 30 }
  ],
  'retweets': [
    { quantity: 50, discountPercentage: 5 },
    { quantity: 100, discountPercentage: 10 },
    { quantity: 250, discountPercentage: 15 },
    { quantity: 500, discountPercentage: 20 },
    { quantity: 1000, discountPercentage: 25, isBestSeller: true }
  ],
  'views': [
    { quantity: 500, discountPercentage: 5 },
    { quantity: 1000, discountPercentage: 10 },
    { quantity: 5000, discountPercentage: 15 },
    { quantity: 10000, discountPercentage: 20, isBestSeller: true },
    { quantity: 50000, discountPercentage: 25 }
  ],
  'comments': [
    { quantity: 10, discountPercentage: 5 },
    { quantity: 25, discountPercentage: 10 },
    { quantity: 50, discountPercentage: 15 },
    { quantity: 100, discountPercentage: 20, isBestSeller: true }
  ],

  // Apply same quantity options to similar services across platforms
  'instagram-followers': 'followers',
  'instagram-likes': 'likes',
  'instagram-views': 'views',
  'instagram-comments': 'comments',
  'youtube-subscribers': 'followers',
  'youtube-likes': 'likes',
  'youtube-views': 'views',
  'youtube-comments': 'comments',
  'tiktok-followers': 'followers',
  'tiktok-likes': 'likes',
  'tiktok-views': 'views',
  'tiktok-comments': 'comments',
  'facebook-page-likes': 'likes',
  'facebook-post-likes': 'likes',
  'facebook-followers': 'followers',
  'facebook-comments': 'comments',
  'reddit-upvotes': 'likes',
  'reddit-comments': 'comments',
  'linkedin-followers': 'followers',
  'linkedin-likes': 'likes',
  'linkedin-comments': 'comments'
};

// ... (keep all other existing functions)