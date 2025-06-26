"use client";

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSession } from '@/hooks/use-session';
import { showError } from '@/utils/toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session, isLoading, profile } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('ProtectedRoute: useEffect triggered'); // Log 1
    console.log('ProtectedRoute: isLoading:', isLoading); // Log 2
    console.log('ProtectedRoute: session:', session ? 'present' : 'null'); // Log 3
    console.log('ProtectedRoute: profile:', profile ? profile.role : 'null/undefined'); // Log 4
    console.log('ProtectedRoute: current path:', location.pathname); // Log 5

    if (isLoading) {
      console.log('ProtectedRoute: Still loading session or profile, waiting...'); // Log 6
      return; // Still loading session or profile
    }

    const isAdminRoute = location.pathname.startsWith('/admin');
    console.log('ProtectedRoute: isAdminRoute:', isAdminRoute); // Log 7

    if (!session) {
      console.log('ProtectedRoute: No session found, redirecting to login.'); // Log 8
      showError("You need to be logged in to access this page.");
      navigate('/login');
    } else if (isAdminRoute && profile?.role !== 'admin') {
      console.log('ProtectedRoute: User is not admin, redirecting from admin route.'); // Log 9
      showError("You do not have permission to access the admin panel.");
      navigate('/dashboard'); // Redirect non-admins from admin routes
    } else {
      console.log('ProtectedRoute: Access granted.'); // Log 10
    }
  }, [session, isLoading, profile, navigate, location.pathname]);

  // Only show loading if isLoading is true AND session/profile are not yet available
  if (isLoading && (!session || !profile)) {
    console.log('ProtectedRoute: Rendering loading/denied placeholder.'); // Log 11
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  console.log('ProtectedRoute: Rendering children.'); // Log 12
  return <>{children}</>;
};

export default ProtectedRoute;