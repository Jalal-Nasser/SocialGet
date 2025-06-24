import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import Header from './Header'; // Reusing the existing Header for simplicity, or create AdminHeader if needed
import { Sheet, SheetContent } from '@/components/ui/sheet';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <AdminSidebar />
      </div>

      <div className="flex flex-col flex-1">
        {/* Header with mobile menu trigger */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        {/* Mobile Sidebar (Sheet) */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="p-0 w-64">
            <AdminSidebar />
          </SheetContent>
        </Sheet>

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;