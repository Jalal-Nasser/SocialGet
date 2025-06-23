import React from 'react';
import { useParams } from 'react-router-dom';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';
import { getServiceByPlatformAndName } from '@/data/servicesData'; // This import should now work

const ServicePage: React.FC = () => {
  // ... rest of the component remains the same
};
export default ServicePage;