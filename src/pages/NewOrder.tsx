import React from 'react';
import Layout from '@/components/layout/Layout';
import OrderForm from '@/components/OrderForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewOrder: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">New Order</h1>
        <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Create a New Service Order</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderForm />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NewOrder;