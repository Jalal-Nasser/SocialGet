import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard: React.FC = () => {
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
              <p className="text-4xl font-bold text-brand-primary-500">--</p> {/* Placeholder */}
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">New Orders (Today)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-brand-primary-500">--</p> {/* Placeholder */}
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-brand-primary-500">--</p> {/* Placeholder */}
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