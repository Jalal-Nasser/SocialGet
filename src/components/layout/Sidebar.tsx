import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, MessageSquare, Wallet, Users, List, Youtube, FileText, DollarSign, Settings, Plus } from 'lucide-react';
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

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen border-r border-sidebar-border dark:border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border dark:border-sidebar-border">
        <h2 className="text-2xl font-bold text-sidebar-primary-foreground">Socialplug</h2>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <NavItem icon={Home} label="Dashboard" to="/" />
        <NavItem icon={ShoppingCart} label="Orders" to="/orders" />
        <NavItem icon={MessageSquare} label="Tickets" to="/tickets" />
        <NavItem icon={Wallet} label="Add funds" to="/add-funds" />
        <NavItem icon={Users} label="Referrals" to="/referrals" />

        <div className="text-xs font-semibold text-sidebar-foreground/70 uppercase mt-4 pt-4 border-t border-sidebar-border dark:border-sidebar-border">Services</div>
        <NavItem icon={List} label="All Services" to="/all-services" />

        <div className="text-xs font-semibold text-sidebar-foreground/70 uppercase mt-4 pt-4 border-t border-sidebar-border dark:border-sidebar-border">Free Tools</div>
        <NavItem icon={Youtube} label="Youtube Video Downloader" to="/youtube-downloader" />

        <div className="text-xs font-semibold text-sidebar-foreground/70 uppercase mt-4 pt-4 border-t border-sidebar-border dark:border-sidebar-border">Documents</div>
        <NavItem icon={FileText} label="Invoices" to="/invoices" />

        <div className="text-xs font-semibold text-sidebar-foreground/70 uppercase mt-4 pt-4 border-t border-sidebar-border dark:border-sidebar-border">Affiliate</div>
        <NavItem icon={DollarSign} label="Commissions" to="/commissions" />

        <div className="text-xs font-semibold text-sidebar-foreground/70 uppercase mt-4 pt-4 border-t border-sidebar-border dark:border-sidebar-border">Partners</div>
        <NavItem icon={Settings} label="Multi Account Management" to="/multi-account-management" />
        <NavItem icon={Settings} label="Buy Proxies" to="/buy-proxies" />
      </nav>
      <div className="p-4 space-y-2 border-t border-sidebar-border dark:border-sidebar-border">
        <Button className="w-full bg-brand-primary-500 hover:bg-brand-primary-600 text-white">
          Start a new order
        </Button>
        <Button variant="outline" className="w-full border-brand-primary-500 text-brand-primary-500 hover:bg-brand-primary-500 hover:text-white">
          <Plus className="h-4 w-4 mr-2" /> Add funds
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;