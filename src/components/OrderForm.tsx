import React, { useState, useEffect } from 'react';
import { getServices } from '@/data/servicesData';

const OrderForm = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      const data = await getServices();
      setServices(data);
      setLoading(false);
    };
    loadServices();
  }, []);

  // ... rest of your component code
};