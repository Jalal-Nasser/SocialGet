import { supabase } from '@/integrations/supabase/client';
import { services as hardcodedServices } from '@/data/servicesData';
import { addService } from '@/lib/services';

async function migrateServicesToSupabase() {
  console.log('Starting migration of hardcoded services to Supabase...');

  for (const service of hardcodedServices) {
    try {
      const serviceToInsert = {
        platform: service.platform,
        service_name: service.serviceName, // Map serviceName from old data to service_name for new table
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

migrateServicesToSupabase();