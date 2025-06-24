"use client";

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/components/auth/SessionContextProvider';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { session, isLoading } = useSession();

  useEffect(() => {
    if (!isLoading && session) {
      // User is logged in, redirect to dashboard
      navigate('/dashboard');
    }
  }, [session, isLoading, navigate]);

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
        <div className="w-full max-w-md p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Welcome Back!</h1>
          <Auth
            supabaseClient={supabase}
            providers={[]} // You can add 'google', 'github', etc. here if needed
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(0 72% 39.2%)', // brand-primary-500
                    brandAccent: 'hsl(0 60% 30%)', // brand-primary-600
                    inputBackground: 'hsl(var(--background))',
                    inputBorder: 'hsl(var(--border))',
                    inputFocusBorder: 'hsl(var(--ring))',
                    inputText: 'hsl(var(--foreground))',
                  },
                },
              },
            }}
            theme="light" // Supabase UI theme, can be 'dark' or 'light'
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;