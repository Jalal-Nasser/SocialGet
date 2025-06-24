import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Settings, ShoppingCart, Users, DollarSign, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, to }) => (
  <Link to={to} className="flex items-center p-3 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200">
    <Icon className="h-5 w-5 mr-3" />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

const AdminSidebar: React.FC = () => {
  return (
    <aside className="bg-sidebar text-sidebar-foreground flex flex-col h-full w-full border-r border-sidebar-border dark:border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border dark:border-sidebar-border">
        <h2 className="text-2xl font-bold text-sidebar-primary-foreground">Admin Panel</h2>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <NavItem icon={LayoutDashboard} label="Dashboard" to="/admin/dashboard" />
        <NavItem icon={List} label="Manage Services" to="/admin/services" />
        {/* Add more admin navigation items here as needed */}
        <div className="text-xs font-semibold text-sidebar-foreground/70 uppercase mt-4 pt-4 border-t border-sidebar-border dark:border-sidebar-border">Settings</div>
        <NavItem icon={Settings} label="General Settings" to="/admin/settings" />
        <NavItem icon={DollarSign} label="Payment Settings" to="/admin/payment-settings" />
        <NavItem icon={Users} label="User Management" to="/admin/users" />
      </nav>
      <div className="p-4 space-y-2 border-t border-sidebar-border dark:border-sidebar-border">
        <Link to="/dashboard" className="block">
          <Button variant="outline" className="w-full border-brand-primary-500 text-brand-primary-500 hover:bg-brand-secondary-blue hover:text-white">
            Back to Client Portal
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;