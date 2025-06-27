import React, { useState, useEffect } from 'react';
import { 
  Search, ChevronDown, Twitter, Instagram, Youtube, Linkedin, Facebook,
  MessageSquare, Play, Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import LogoImage from '@/assets/logo.png';
import OngoingProjectSlider from '@/components/OngoingProjectSlider';
import ThemeToggle from '@/components/ThemeToggle';
import { fetchServices, Service as SupabaseService } from '@/lib/services'; // Import Supabase service type and fetch function
import { showError } from '@/utils/toast';
import RedditIcon from '@/components/icons/RedditIcon'; // Import the new component

const LandingHeader: React.FC = () => {
  const [allServices, setAllServices] = useState<SupabaseService[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setAllServices(data);
      } catch (error) {
        showError('Failed to load services for navigation.');
        console.error('Error loading services:', error);
      } finally {
        setLoadingServices(false);
      }
    };
    loadServices();
  }, []);

  // Group services by platform for dynamic menu generation
  const servicesByPlatform = allServices.reduce((acc, service) => {
    const platformKey = service.platform;
    if (!acc[platformKey]) {
      acc[platformKey] = [];
    }
    acc[platformKey].push(service);
    return acc;
  }, {} as Record<string, SupabaseService[]>);

  const categoryIcons: { [key: string]: React.ElementType } = {
    Twitter: Twitter,
    Instagram: Instagram,
    YouTube: Youtube,
    TikTok: Play,
    Facebook: Facebook,
    Reddit: RedditIcon,
    LinkedIn: Linkedin
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <OngoingProjectSlider />
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={LogoImage} alt="SocialGet Logo" className="h-10" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8 max-w-md relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search services..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-brand-primary-500 focus:border-brand-primary-500"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/services">
            <Button className="bg-brand-secondary-blue hover:bg-brand-secondary-blue/90 text-white text-sm px-3 py-2 md:px-4 md:py-2">
              Services
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-brand-primary-500 hover:bg-brand-hover-red text-white text-sm px-3 py-2 md:px-4 md:py-2">
              Log In
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Platform Navigation Only (no sub-menus, no All Services) */}
      <nav className="bg-brand-primary-500 py-2 border-t border-brand-primary-600">
        <div className="container mx-auto px-4 flex items-center justify-start space-x-6 text-sm text-white overflow-x-auto pb-2">
          <Link to="/" className="flex items-center p-2 rounded-md text-white hover:bg-brand-secondary-blue hover:text-white transition-all duration-200 ease-in-out hover:scale-105 flex-shrink-0">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          {loadingServices ? (
            <span className="text-white/70">Loading platforms...</span>
          ) : (
            Object.keys(servicesByPlatform).map((platform) => {
              const Icon = categoryIcons[platform];
              return (
                <Link
                  key={platform}
                  to={`/services/${platform.toLowerCase()}`}
                  className="flex items-center p-2 rounded-md text-white hover:bg-brand-secondary-blue hover:text-white transition-all duration-200 ease-in-out hover:scale-105 flex-shrink-0"
                >
                  {Icon && <Icon className="h-4 w-4 mr-1" />}
                  <span>{platform}</span>
                </Link>
              );
            })
          )}
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;