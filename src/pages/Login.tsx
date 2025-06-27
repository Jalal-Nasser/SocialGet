"use client";

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSession } from '@/hooks/use-session';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { session, isLoading, profile } = useSession();

  const from = location.state?.from?.pathname || (profile?.role === 'admin' ? '/admin/dashboard' : '/dashboard');

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
        <div className="w-full max-w-md p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Welcome Back!</h1>
          <Auth
            supabaseClient={supabase}
            providers={[]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(0 72% 39.2%)',
                    brandAccent: 'hsl(0 60% 30%)',
                    inputBackground: 'hsl(var(--background))',
                    inputBorder: 'hsl(var(--border))',
                    inputFocusBorder: 'hsl(var(--ring))',
                    inputText: 'hsl(var(--foreground))',
                  },
                },
              },
            }}
            theme="light"
            view="sign_in" // Can be 'sign_in' or 'sign_up'
            showLinks={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;