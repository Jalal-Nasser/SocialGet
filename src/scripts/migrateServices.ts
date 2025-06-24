import { supabase } from '@/integrations/supabase/client.js';
import { services as hardcodedServices } from '@/data/servicesData.js';
import { addService } from '@/lib/services.js';

async function migrateServicesToSupabase() {
  console.log('Starting migration of hardcoded services to Supabase...');

  for (const service of hardcodedServices) {
    try {
      const serviceToInsert = {
        platform: service.platform,
        service_name: service.serviceName,
        path: service.path,
        description: service.description,
        price: service.price,
        unit: service.unit,
      };
      await addService(serviceToInsert);
      console.log(`Successfully added service: ${service.platform} - ${service.serviceName}`);
    } catch (error) {
      console.error(`Failed to add service: ${service.platform} - ${service.serviceName}`, error);
    }
  }
  console.log('Migration complete.');
}

await migrateServicesToSupabase();