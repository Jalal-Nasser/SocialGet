import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xxzznwjbjyyvbmietpzg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4enpud2pianl5dmJtaWV0cHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0OTU0MTEsImV4cCI6MjA2NjA3MTQxMX0.VBPNN5QT9vjjyynroi3V6gAUUOPK3vDpiTeABHdedmU',
  {
    auth: { persistSession: false },
    realtime: { disable: true }
  }
);

const services = [
  // PASTE YOUR ACTUAL SERVICE DATA HERE
  {
    platform: "Twitter",
    service_name: "Followers", // Note: Changed from serviceName to service_name
    path: "followers",
    description: "High-quality Twitter followers",
    price: 0.036,
    unit: "/Follower"
  },
  // Add all other services...
];

async function migrate() {
  console.log('Starting migration...');
  
  // First verify table exists
  const { data: tableExists } = await supabase
    .rpc('table_exists', { table_name: 'services' });
    
  if (!tableExists) {
    console.error('Error: services table does not exist');
    return;
  }

  for (const service of services) {
    try {
      const { data, error } = await supabase
        .from('services')
        .insert(service)
        .select();
      
      if (error) {
        console.error(`Error adding ${service.platform} ${service.service_name}:`, error);
        continue;
      }
      console.log(`Added: ${service.platform} ${service.service_name}`, data);
    } catch (error) {
      console.error(`Fatal error:`, error);
      break;
    }
  }
  
  // Verify count
  const { count } = await supabase
    .from('services')
    .select('*', { count: 'exact', head: true });
    
  console.log(`Migration complete. Total services: ${count}`);
}

await migrate();