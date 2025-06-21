import React from 'react';
import { Bell, Globe, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        {/* Placeholder for logo/app name */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
          <span className="font-semibold">$0.33</span>
          <Button variant="ghost" size="icon" className="text-brand-primary-500 hover:text-brand-primary-600 dark:text-brand-primary-400 dark:hover:text-brand-primary-500">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          <Globe className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
          <User className="h-6 w-6 text-gray-700 dark:text-gray-300" /> {/* Placeholder for user avatar */}
        </Button>
      </div>
    </header>
  );
};

export default Header;