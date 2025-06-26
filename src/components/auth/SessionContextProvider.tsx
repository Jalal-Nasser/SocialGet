"use client";

import React, { useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { showError } from '@/utils/toast';
import { SessionContext, SessionContextType, Profile } from '@/context/SessionContext';

export const SessionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = async (userId: string) => {
    console.log('SessionContextProvider: Attempting to fetch profile for userId:', userId);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    // Always log the raw data and error from Supabase, regardless of whether an error occurred
    console.log('SessionContextProvider: Supabase response - data:', data, 'error:', error);

    if (error) {
      console.error('SessionContextProvider: Error fetching user profile:', error);
      if (error.code !== 'PGRST116') { // PGRST116 means no rows found, not a critical error for fetching
        showError('Failed to load user profile.');
      }
      return null;
    }
    console.log('SessionContextProvider: Fetched profile data (success):', data);
    return data as Profile | null;
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      console.log('SessionContextProvider: Auth state change event:', event);
      setIsLoading(true); // Set loading true on any auth state change
      if (currentSession) {
        setSession(currentSession);
        setUser(currentSession.user);
        const userProfile = await fetchUserProfile(currentSession.user.id);
        setProfile(userProfile);
      } else {
        setSession(null);
        setUser(null);
        setProfile(null);
      }
      setIsLoading(false);
      console.log('SessionContextProvider: Auth state change processed, isLoading:', false);
    });

    // Fetch initial session and profile
    supabase.auth.getSession().then(async ({ data: { session: initialSession }, error }) => {
      console.log('SessionContextProvider: Initial getSession result:', initialSession, 'error:', error);
      if (error) {
        showError(error.message);
      } else {
        setSession(initialSession);
        setUser(initialSession?.user || null);
        if (initialSession?.user) {
          const userProfile = await fetchUserProfile(initialSession.user.id);
          setProfile(userProfile);
        }
      }
      setIsLoading(false);
      console.log('SessionContextProvider: Initial session processed, isLoading:', false);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!isLoading && session === null) {
      const publicPaths = ['/login', '/admin-login', '/about-us', '/contact', '/terms-of-service', '/privacy-policy', '/blog', '/'];
      const currentPath = window.location.pathname.replace(/^\/SocialGet/, ''); // Remove basename if present
      if (!publicPaths.includes(currentPath)) {
        showError('Your session has expired. Please log in again.');
        window.location.href = '/login';
      }
    }
  }, [isLoading, session]);

  // Periodically refresh the session to keep the user logged in
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Periodically refreshing session...');
      supabase.auth.refreshSession();
    }, 25 * 60 * 1000); // Refresh every 25 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <SessionContext.Provider value={{ session, user, profile, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
};

