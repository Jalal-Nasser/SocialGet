import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BuyProxies: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Buy Proxies</h1>
        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Secure Your Connections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Purchase high-quality proxies for enhanced security and anonymity.
            </p>
            <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
              View Proxy Plans
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BuyProxies;