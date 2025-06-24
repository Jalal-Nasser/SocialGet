import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AddFunds: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Add Funds</h1>
        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Top Up Your Balance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Easily add funds to your account for seamless ordering.
            </p>
            <div className="flex flex-col space-y-2">
              <label htmlFor="amount" className="text-sm font-medium text-gray-700 dark:text-gray-300">Amount ($)</label>
              <Input id="amount" type="number" placeholder="e.g., 10.00" />
            </div>
            <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white w-full">
              Proceed to Payment
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AddFunds;