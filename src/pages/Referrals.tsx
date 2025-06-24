import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Referrals: React.FC = () => {
  const referralLink = "https://socialget.com/ref/your-unique-code"; // Placeholder

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Your Referrals</h1>
        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Invite Friends & Earn!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Share your unique referral link and earn commissions on every successful referral.
            </p>
            <div>
              <label htmlFor="referral-link" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Referral Link</label>
              <div className="flex space-x-2">
                <Input id="referral-link" type="text" value={referralLink} readOnly className="flex-grow" />
                <Button 
                  onClick={() => navigator.clipboard.writeText(referralLink)}
                  className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white"
                >
                  Copy
                </Button>
              </div>
            </div>
            {/* Future: Referral statistics, list of referred users */}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Referrals;