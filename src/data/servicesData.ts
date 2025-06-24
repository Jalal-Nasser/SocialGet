// ... (keep all existing service definitions)

// Update paths to be URL-friendly and consistent
const services: Service[] = [
  // Twitter Services
  { platform: "Twitter", serviceName: "Followers", path: "followers", description: "High-quality Twitter followers", price: 0.036, unit: "/Follower" },
  { platform: "Twitter", serviceName: "USA Followers", path: "usa-followers", description: "High-quality Twitter followers from USA", price: 0.05, unit: "/Follower" },
  { platform: "Twitter", serviceName: "Likes", path: "likes", description: "Twitter post likes", price: 0.01, unit: "/Like" },
  // ... (all other Twitter services with proper paths)

  // Instagram Services
  { platform: "Instagram", serviceName: "Followers", path: "followers", description: "Real Instagram followers", price: 0.04, unit: "/Follower" },
  { platform: "Instagram", serviceName: "Likes", path: "likes", description: "Instagram post likes", price: 0.015, unit: "/Like" },
  // ... (all other Instagram services with proper paths)

  // YouTube Services
  { platform: "YouTube", serviceName: "Views", path: "views", description: "YouTube video views", price: 0.009, unit: "/View" },
  // ... (all other YouTube services with proper paths)

  // ... (continue for all other platforms)
];

// ... (keep existing quantity options and other exports)