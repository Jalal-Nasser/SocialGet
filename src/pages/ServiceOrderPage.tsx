import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle, Shield, Zap, Clock, Star, ChevronDown, CreditCard } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { showError } from '@/utils/toast';
import OrderServiceForm, { SupabaseService } from '@/components/OrderServiceForm';

// Service type based on Supabase table
type Service = {
  id: string;
  platform: string;
  service_name: string;
  path: string;
  description: string;
  price: number;
  unit: string;
  completed_orders?: number;
  rating?: number;
  // Add any other fields as needed
};


const ServiceOrderPage: React.FC = () => {
  const { platform, serviceName } = useParams<{ platform: string; serviceName: string }>();
  const [service, setService] = useState<SupabaseService | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .ilike('platform', platform)
        .ilike('path', serviceName)
        .maybeSingle();
      if (error) {
        showError('Failed to load service: ' + error.message);
        setService(null);
      } else {
        setService(data || null);
      }
      setLoading(false);
    };
    if (platform && serviceName) fetchService();
  }, [platform, serviceName]);

  // Pricing and quantity logic moved to OrderServiceForm

  const features = [
    { icon: Clock, title: "Fast Delivery", description: "Starts within minutes, completes within 24 hours" },
    { icon: Shield, title: "Guaranteed", description: "Refund if we can't deliver as promised" },
    { icon: Zap, title: "High Quality", description: "Real engagement from authentic accounts" }
  ];

  // Updated payment methods to match the example website
  const paymentMethods = [
    { name: "Credit Card", icon: CreditCard },
    { name: "Crypto", icon: () => <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Crypto" className="h-6" /> },
    { name: "Google Pay", icon: () => <img src="https://cdn.simpleicons.org/googlepay/black" alt="Google Pay" className="h-6" /> },
    { name: "Apple Pay", icon: () => <img src="https://cdn.simpleicons.org/applepay/white" alt="Apple Pay" className="h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        {loading ? (
          <div className="text-center text-lg">Loading service...</div>
        ) : service ? (
          <OrderServiceForm service={service} />
        ) : (
          <div className="text-center text-lg text-red-500">Service not found.</div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServiceOrderPage;