import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { showError } from '@/utils/toast';

const AdminDashboard: React.FC = () => {
  const [totalServices, setTotalServices] = useState<number | null>(null);
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch total services
        const { count: servicesCount, error: servicesError } = await supabase
          .from('services')
          .select('*', { count: 'exact', head: true });

        if (servicesError) {
          throw servicesError;
        }
        setTotalServices(servicesCount);

        // Fetch total users (from profiles table)
        const { count: usersCount, error: usersError } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        if (usersError) {
          throw usersError;
        }
        setTotalUsers(usersCount);

      } catch (error) {
        showError('Failed to load dashboard data.');
        console.error('Admin Dashboard data fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">Total Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-brand-primary-500">
                {loading ? '...' : totalServices !== null ? totalServices : '--'}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">New Orders (Today)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-brand-primary-500">
                -- {/* This would require an 'orders' table to track */}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-brand-primary-500">
                {loading ? '...' : totalUsers !== null ? totalUsers : '--'}
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">More actions will be added here.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;