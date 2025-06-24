"use client";

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/components/auth/SessionContextProvider';
import { showError } from '@/utils/toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session, isLoading } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !session) {
      showError("You need to be logged in to access this page.");
      navigate('/login');
    }
  }, [session, isLoading, navigate]);

  if (isLoading || !session) {
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