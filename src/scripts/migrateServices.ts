import { createClient } from '@supabase/supabase-js';
import { services as hardcodedServices } from '@/data/servicesData.js';

// Create Supabase client without realtime
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://xxzznwjbjyyvbmietpzg.supabase.co',
  process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4enpud2pianl5dmJtaWV0cHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0OTU0MTEsImV4cCI6MjA2NjA3MTQxMX0.VBPNN5QT9vjjyynroi3V6gAUUOPK3vDpiTeABHdedmU',
  {
    realtime: {
      disable: true
    }
  }
);

async function migrateServicesToSupabase() {
  console.log('Starting migration of hardcoded services to Supabase...');

  for (const service of hardcodedServices) {
    try {
      const { data, error } = await supabase
        .from('services')
        .insert({
          platform: service.platform,
          service_name: service.serviceName,
          path: service.path,
          description: service.description,
          price: service.price,
          unit: service.unit
        })
        .select()
        .single();

      if (error) throw error;
      console.log(`Successfully added service: ${service.platform} - ${service.serviceName}`);
    } catch (error) {
      console.error(`Failed to add service: ${service.platform} - ${service.serviceName}`, error);
    }
  }
  console.log('Migration complete.');
}

await migrateServicesToSupabase();