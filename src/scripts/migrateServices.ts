import { createClient } from '@supabase/supabase-js';

// Minimal Supabase client config without realtime
const supabase = createClient(
  'https://xxzznwjbjyyvbmietpzg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4enpud2pianl5dmJtaWV0cHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0OTU0MTEsImV4cCI6MjA2NjA3MTQxMX0.VBPNN5QT9vjjyynroi3V6gAUUOPK3vDpiTeABHdedmU',
  {
    auth: {
      persistSession: false
    },
    realtime: {
      disable: true
    }
  }
);

const services = [
  // Your service data here (copy from src/data/servicesData.ts)
  // Example:
  {
    platform: "Twitter",
    serviceName: "Followers",
    path: "followers",
    description: "High-quality Twitter followers",
    price: 0.036,
    unit: "/Follower"
  },
  // Add all other services...
];

async function migrate() {
  console.log('Starting migration...');
  
  for (const service of services) {
    try {
      const { error } = await supabase
        .from('services')
        .insert({
          platform: service.platform,
          service_name: service.serviceName,
          path: service.path,
          description: service.description,
          price: service.price,
          unit: service.unit
        });
      
      if (error) throw error;
      console.log(`Added: ${service.platform} ${service.serviceName}`);
    } catch (error) {
      console.error(`Error adding ${service.platform} ${service.serviceName}:`, error);
    }
  }
  
  console.log('Migration complete');
}

await migrate();