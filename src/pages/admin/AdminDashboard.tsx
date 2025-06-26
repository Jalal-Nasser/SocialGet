import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { showError } from '@/utils/toast';
import { Users, Package, ClipboardList, Settings, Mail, BarChart, CreditCard, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [totalServices, setTotalServices] = useState<number | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { count: userCount, error: userError } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        if (userError) throw userError;
        setTotalUsers(userCount);

        const { count: serviceCount, error: serviceError } = await supabase
          .from('services')
          .select('*', { count: 'exact', head: true });

        if (serviceError) throw serviceError;
        setTotalServices(serviceCount);
      } catch (error) {
        showError('Failed to fetch stats');
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const managementLinks = [
    {
      title: 'User Dashboard',
      description: 'Go to user dashboard.',
      href: '/dashboard',
      icon: <LayoutDashboard className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: 'Services',
      description: 'Add, edit, remove services and change prices.',
      href: '/admin/services',
      icon: <Settings className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'SMTP',
      description: 'Configure SMTP for transactional emails.',
      href: '/admin/smtp',
      icon: <Mail className="w-8 h-8 text-red-500" />,
    },
    {
      title: 'Orders',
      description: 'View and manage all orders.',
      href: '/admin/orders',
      icon: <ClipboardList className="w-8 h-8 text-green-500" />,
    },
    {
      title: 'Analytics',
      description: 'View key stats and integrate Google Analytics.',
      href: '/admin/analytics',
      icon: <BarChart className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: 'Payments',
      description: 'Integrate and manage payment options.',
      href: '/admin/payments',
      icon: <CreditCard className="w-8 h-8 text-purple-500" />,
    },
  ];

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Admin Dashboard</h1>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalUsers ?? <div className="h-8 w-1/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />}</div>
                <p className="text-xs text-muted-foreground">Registered users on the platform</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalServices ?? <div className="h-8 w-1/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />}</div>
                <p className="text-xs text-muted-foreground">Available services for purchase</p>
              </CardContent>
            </Card>
          </div>

          {/* Management Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {managementLinks.map((link) => (
                <Link to={link.href} key={link.title} className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:hover:bg-gray-800">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {link.icon}
                      <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">{link.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;