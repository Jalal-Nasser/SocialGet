import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xxzznwjbjyyvbmietpzg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4enpud2pianl5dmJtaWV0cHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0OTU0MTEsImV4cCI6MjA2NjA3MTQxMX0.VBPNN5QT9vjjyynroi3V6gAUOPOK3vDpiTeABHdedmU',
  {
    auth: { persistSession: false },
    realtime: { disable: true }
  }
);

const services = [
  {
    platform: "Twitter",
    service_name: "Followers",
    path: "followers",
    description: "High-quality Twitter followers",
    price: 0.036,
    unit: "/Follower"
  },
  {
    platform: "Instagram",
    service_name: "Likes",
    path: "likes",
    description: "Authentic Instagram likes",
    price: 0.005,
    unit: "/Like"
  },
  {
    platform: "YouTube",
    service_name: "Views",
    path: "views",
    description: "Real YouTube video views",
    price: 0.010,
    unit: "/View"
  },
  {
    platform: "TikTok",
    service_name: "Followers",
    path: "tiktok-followers",
    description: "Genuine TikTok followers",
    price: 0.045,
    unit: "/Follower"
  },
  {
    platform: "Facebook",
    service_name: "Page Likes",
    path: "page-likes",
    description: "Boost your Facebook page likes",
    price: 0.020,
    unit: "/Like"
  },
  {
    platform: "Reddit",
    service_name: "Upvotes",
    path: "upvotes",
    description: "Increase Reddit post upvotes",
    price: 0.015,
    unit: "/Upvote"
  },
  {
    platform: "LinkedIn",
    service_name: "Connections",
    path: "connections",
    description: "Expand your professional network on LinkedIn",
    price: 0.050,
    unit: "/Connection"
  },
  {
    platform: "Twitter",
    service_name: "Likes",
    path: "likes", // This path is duplicated, onConflict will handle it
    description: "High-quality Twitter likes",
    price: 0.008,
    unit: "/Like"
  },
  {
    platform: "Instagram",
    service_name: "Followers",
    path: "instagram-followers",
    description: "Authentic Instagram followers",
    price: 0.030,
    unit: "/Follower"
  },
  {
    platform: "YouTube",
    service_name: "Subscribers",
    path: "subscribers",
    description: "Real YouTube channel subscribers",
    price: 0.060,
    unit: "/Subscriber"
  },
  {
    platform: "TikTok",
    service_name: "Likes",
    path: "tiktok-likes", // This path is duplicated, onConflict will handle it
    description: "Genuine TikTok likes",
    price: 0.007,
    unit: "/Like"
  },
  {
    platform: "Facebook",
    service_name: "Post Likes",
    path: "post-likes",
    description: "Boost your Facebook post likes",
    price: 0.012,
    unit: "/Like"
  },
  {
    platform: "Reddit",
    service_name: "Comments",
    path: "comments",
    description: "Increase Reddit post comments",
    price: 0.025,
    unit: "/Comment"
  },
  {
    platform: "LinkedIn",
    service_name: "Followers",
    path: "linkedin-followers",
    description: "Expand your professional network on LinkedIn",
    price: 0.040,
    unit: "/Follower"
  },
];

async function migrate() {
  console.log('Starting migration...');
  console.log(`Attempting to insert ${services.length} services.`);

  for (const service of services) {
    try {
      const { data, error } = await supabase
        .from('services')
        .insert(service)
        .onConflict('path') // Use 'path' as the conflict target
        .select(); // Select the inserted/updated data

      if (error) {
        console.error(`Error adding/updating ${service.platform} ${service.service_name} (path: ${service.path}):`, error);
      } else {
        console.log(`Successfully added/updated: ${service.platform} ${service.service_name} (path: ${service.path})`, data);
      }
    } catch (error) {
      console.error(`Fatal error during service insertion for ${service.platform} ${service.service_name}:`, error);
      // Don't break, try to continue with other services
    }
  }
  
  // Verify count
  const { count, error: countError } = await supabase
    .from('services')
    .select('*', { count: 'exact', head: true });
    
  if (countError) {
    console.error('Error fetching total services count:', countError);
  } else {
    console.log(`Migration complete. Total services: ${count}`);
  }
}

await migrate();