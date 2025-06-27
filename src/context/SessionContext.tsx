import { createContext } from 'react';
import { Session, User } from '@supabase/supabase-js';

export interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  role: string; // Add role to profile type
}

export interface SessionContextType {
  session: Session | null;
  user: User | null;
  profile: Profile | null; // Add profile to context
  isLoading: boolean;
}

export const SessionContext = createContext<SessionContextType | undefined>(undefined);