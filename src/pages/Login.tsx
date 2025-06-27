"use client";

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSession } from '@/hooks/use-session';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import CustomAuth from '@/components/auth/CustomAuth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { session, isLoading, profile } = useSession();

  const from = location.state?.from?.pathname || (profile?.role === 'admin' ? '/admin/dashboard' : '/dashboard');

  const handleSuccess = () => {
    navigate(from, { replace: true });
  };

  useEffect(() => {
    if (!isLoading && session) {
      navigate(from, { replace: true });
    }
  }, [session, isLoading, profile, navigate, from]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300">Loading authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <CustomAuth onSuccess={handleSuccess} />
      </main>
      <Footer />
    </div>
  );
};

export default Login;