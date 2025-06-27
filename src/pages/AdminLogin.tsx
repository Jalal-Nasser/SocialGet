"use client";

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/hooks/use-session';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import CustomAuth from '@/components/auth/CustomAuth';
import { showError } from '@/utils/toast';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const { session, isLoading, profile } = useSession();

  const handleSuccess = () => {
    // After a successful login/signup, re-check the profile role
    // The useSession hook will update, and the useEffect below will trigger the redirect.
  };

  useEffect(() => {
    if (!isLoading && session) {
      if (profile?.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        showError("You are logged in, but not as an administrator.");
        navigate('/dashboard');
      }
    }
  }, [session, isLoading, profile, navigate]);

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

export default AdminLogin;