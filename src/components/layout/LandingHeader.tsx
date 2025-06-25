import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle'; // Changed from named import to default import
import SocialGetLogo from '@/assets/SocialGet-Logo.png'; // Import the logo image

interface LandingHeaderProps {
  onMenuClick?: () => void;
}

const LandingHeader: React.FC<LandingHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={SocialGetLogo} alt="SocialGet Logo" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-brand-primary-500 dark:text-gray-300 dark:hover:text-brand-primary-400 transition-colors">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-brand-primary-500 dark:text-gray-300 dark:hover:text-brand-primary-400 transition-colors">Services</Link>
          <Link to="/blog" className="text-gray-700 hover:text-brand-primary-500 dark:text-gray-300 dark:hover:text-brand-primary-400 transition-colors">Blog</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-brand-primary-500 dark:text-gray-300 dark:hover:text-brand-primary-400 transition-colors">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-brand-primary-500 dark:text-gray-300 dark:hover:text-brand-primary-400 transition-colors">Contact</Link>
        </nav>

        {/* Actions (Login, Sign Up, Theme Toggle) */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="ghost" className="text-gray-700 hover:text-brand-primary-500 dark:text-gray-300 dark:hover:text-brand-primary-400 hidden md:inline-flex">Log in</Button>
          </Link>
          <Link to="/login">
            <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white hidden md:inline-flex">Sign Up</Button>
          </Link>
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;