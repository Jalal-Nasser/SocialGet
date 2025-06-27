import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Settings, ShoppingCart, Users, DollarSign, List, CreditCard } from 'lucide-react'; // Import CreditCard icon
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, to }) => (
  <Link to={to} className="flex items-center p-3 rounded-md text-white hover:bg-white/10 hover:text-white transition-colors duration-200">
    <Icon className="h-5 w-5 mr-3 text-white" />
    <span className="text-sm font-medium text-white">{label}</span>
  </Link>
);

const AdminSidebar: React.FC = () => {
  return (
    <aside className="bg-[#993333] text-white flex flex-col h-full w-full border-r border-[#0066cc] shadow-xl">
      <div className="p-4 border-b border-[#0066cc] flex items-center justify-center bg-black/70 rounded-b-lg">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <NavItem icon={LayoutDashboard} label="Home" to="/admin/dashboard" />
        <NavItem icon={List} label="Services" to="/admin/services" />
        <NavItem icon={ShoppingCart} label="Orders" to="/admin/orders" />
        <NavItem icon={Users} label="Users" to="/admin/users" />
        <NavItem icon={Settings} label="Settings" to="/admin/settings" />
        <NavItem icon={CreditCard} label="Payments" to="/admin/payments" /> {/* New Payments link */}
      </nav>
      <div className="p-4 space-y-2 border-t border-white/20">
        <Link to="/dashboard" className="block">
          <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#0066cc]">
            Back to Client Portal
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;