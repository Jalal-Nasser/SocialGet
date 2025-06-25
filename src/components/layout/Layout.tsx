import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        {/* Header with mobile menu trigger */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} showAdminLink={false} />
        
        {/* Mobile Sidebar (Sheet) */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="p-0 w-64"> {/* Set width for the sheet content */}
            <Sidebar />
          </SheetContent>
        </Sheet>

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;