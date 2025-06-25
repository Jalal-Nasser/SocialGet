"use client";

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSession } from '@/components/auth/SessionContextProvider';
import { showError } from '@/utils/toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session, isLoading, profile } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoading) return; // Still loading session or profile

    const isAdminRoute = location.pathname.startsWith('/admin');

    if (!session) {
      showError("You need to be logged in to access this page.");
      navigate('/login');
    } else if (isAdminRoute && profile?.role !== 'admin') {
      showError("You do not have permission to access the admin panel.");
      navigate('/dashboard'); // Redirect non-admins from admin routes
    }
  }, [session, isLoading, profile, navigate, location.pathname]);

  if (isLoading || !session || (location.pathname.startsWith('/admin') && profile?.role !== 'admin')) {
    // Optionally render a loading spinner or a placeholder
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;