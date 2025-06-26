"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/hooks/use-session';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { showError } from '@/utils/toast';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { session, isLoading, profile } = useSession(); // Destructure profile here

  const [clickCount, setClickCount] = useState(0);
  const lastClickTimeRef = useRef(0);
  const [showAdminDialog, setShowAdminDialog] = useState(false);

  useEffect(() => {
    if (!isLoading && session) {
      // If a session exists and loading is complete
      if (profile?.role === 'admin') {
        // If the user is an admin, redirect to the admin dashboard
        navigate('/admin/dashboard');
      } else {
        // Otherwise (regular user or no specific role), redirect to the user dashboard
        navigate('/dashboard');
      }
    }
  }, [session, isLoading, profile, navigate]); // Add profile to dependency array

  // Handle clicks for the secret admin login
  const handleBodyClick = () => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTimeRef.current;

    if (timeDiff < 500) { // If clicks are rapid (within 500ms)
      setClickCount(prev => prev + 1);
    } else {
      setClickCount(1); // Reset count if clicks are too slow
    }
    lastClickTimeRef.current = currentTime;
  };

  useEffect(() => {
    if (clickCount >= 3) {
      setShowAdminDialog(true);
      setClickCount(0); // Reset count after showing dialog
    }
  }, [clickCount]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300">Loading authentication...</p>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col"
      onClick={handleBodyClick} // Attach click listener to the main div
    >
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

      {/* Admin Login Dialog */}
      <Dialog open={showAdminDialog} onOpenChange={setShowAdminDialog}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <DialogHeader>
            <DialogTitle>Admin Login</DialogTitle>
            <DialogDescription>
              Enter your administrator credentials to access the admin panel.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
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
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;