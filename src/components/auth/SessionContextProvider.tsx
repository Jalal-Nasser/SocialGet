"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { showError } from '@/utils/toast';

interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  role: string; // Add role to profile type
}

interface SessionContextType {
  session: Session | null;
  user: User | null;
  profile: Profile | null; // Add profile to context
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = async (userId: string) => {
    console.log('SessionContextProvider: Attempting to fetch profile for userId:', userId); // New log
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
      console.error('SessionContextProvider: Error fetching user profile:', error); // Modified log
      showError('Failed to load user profile.');
      return null;
    }
    console.log('SessionContextProvider: Fetched profile data:', data); // New log
    return data as Profile | null;
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      console.log('SessionContextProvider: Auth state change event:', event); // New log
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
      console.log('SessionContextProvider: Auth state change processed, isLoading:', false); // New log
    });

    // Fetch initial session and profile
    supabase.auth.getSession().then(async ({ data: { session: initialSession }, error }) => {
      console.log('SessionContextProvider: Initial getSession result:', initialSession, 'error:', error); // New log
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
      console.log('SessionContextProvider: Initial session processed, isLoading:', false); // New log
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SessionContext.Provider value={{ session, user, profile, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionContextProvider');
  }
  return context;
};