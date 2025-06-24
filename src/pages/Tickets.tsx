import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Tickets: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Support Tickets</h1>
        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-gray-900 dark:text-gray-100">Your Tickets</CardTitle>
            <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
              Open New Ticket
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">No active tickets.</p>
            {/* Future: Table or list of tickets */}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Tickets;