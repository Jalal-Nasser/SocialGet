import React from 'react';
import { Bell, Globe, User, Plus, Menu, LogOut } from 'lucide-react'; // Import LogOut icon
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSession } from '@/hooks/use-session'; // Import useSession
import { supabase } from '@/integrations/supabase/client'; // Import supabase client
import { showSuccess, showError } from '@/utils/toast'; // Import toast utilities
import logo from '@/assets/logo.png'; // Import logo using ES module syntax

interface HeaderProps {
  onMenuClick?: () => void; // Optional prop for mobile menu click
  showAdminLink?: boolean; // New prop to control admin link visibility
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, showAdminLink = false }) => {
  const { profile, isLoading } = useSession(); // Get profile and isLoading from session context
  const navigate = useNavigate(); // Initialize useNavigate
  const isAdmin = profile?.role === 'admin';

  // Add this console log for debugging
  console.log('Header: profile:', profile, 'isAdmin:', isAdmin, 'isLoading:', isLoading);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      showSuccess('You have been signed out successfully!');
      navigate('/login'); // Redirect to login page after sign out
    } catch (error: any) {
      showError(`Failed to sign out: ${error.message}`);
      console.error('Sign out error:', error);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-[#993333] border-b border-[#0066cc] shadow-xl">
      <div className="flex items-center space-x-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:text-gray-100"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>
        {/* Removed logo from admin header to avoid duplication */}
      </div>
      <div className="flex items-center space-x-4">
        {/* Conditionally render Admin Panel link */}
        {!isLoading && isAdmin && showAdminLink && (
          <Link to="/admin/dashboard">
            <Button variant="ghost" className="text-white hover:text-gray-100">
              Admin Panel
            </Button>
          </Link>
        )}
        <div className="flex items-center space-x-2 text-white">
          <span className="font-semibold">$0.33</span>
          <Link to="/add-funds">
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-100">
              <Plus className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:text-gray-100">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-gray-100">
          <Globe className="h-5 w-5" />
        </Button>
        <Link to="/profile">
          <Button variant="ghost" size="icon" className="rounded-full overflow-hidden text-white hover:text-gray-100">
            <User className="h-6 w-6" />
          </Button>
        </Link>
        {/* Sign Out Button */}
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-gray-100"
          onClick={handleSignOut}
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;