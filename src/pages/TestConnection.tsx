import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export default function TestConnection() {
  const [status, setStatus] = useState('Testing connection...');

  useEffect(() => {
    supabase.from('services').select('*').limit(1)
      .then(({ data, error }) => {
        if (error) {
          setStatus(`Error: ${error.message}`);
        } else {
          setStatus(`Success! Found ${data?.length} services`);
        }
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Connection Test</h1>
      <p>{status}</p>
    </div>
  );
}