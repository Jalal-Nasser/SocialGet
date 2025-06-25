import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle, Shield, Zap, Clock, Star, ChevronDown, CreditCard } from 'lucide-react';
import { serviceQuantityOptions, getServiceByPlatformAndPath } from '@/lib/services';
import { cn } from '@/lib/utils';
import { showError } from '@/utils/toast';

const ServiceOrderPage: React.FC = () => {
  // ... (keep existing state and effects)

  // Get quantity options for this service
  const getQuantityOptions = () => {
    const options = serviceQuantityOptions[service?.path] || 
                   serviceQuantityOptions[`${service?.platform.toLowerCase()}-${service?.path}`] ||
                   serviceQuantityOptions['likes']; // default
    return typeof options === 'string' ? serviceQuantityOptions[options] : options;
  };

  const quantityOptions = service ? getQuantityOptions() : [];

  // Calculate pricing (keep existing logic)

  const features = [
    { 
      icon: Clock, 
      title: "Fast Delivery", 
      description: "Starts within minutes, completes within 24 hours" 
    },
    { 
      icon: Shield, 
      title: "Guaranteed", 
      description: "Refund if we can't deliver as promised" 
    },
    { 
      icon: Zap, 
      title: "High Quality", 
      description: "Real engagement from authentic accounts" 
    }
  ];

  const paymentMethods = [
    { 
      name: "Credit Card", 
      icon: CreditCard 
    },
    { 
      name: "Crypto", 
      icon: () => <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Crypto" className="h-6" /> 
    },
    { 
      name: "Google Pay", 
      icon: () => <img src="https://cdn.simpleicons.org/googlepay/black" alt="Google Pay" className="h-6" /> 
    },
    { 
      name: "Apple Pay", 
      icon: () => <img src="https://cdn.simpleicons.org/applepay/white" alt="Apple Pay" className="h-6" /> 
    }
  ];

  // ... (keep rest of the component the same)
};

export default ServiceOrderPage;