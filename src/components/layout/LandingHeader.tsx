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

// Custom Reddit SVG component
const RedditIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.74c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 1.25-1.25zM9.71 6.05c.69 0 1.25.56 1.25 1.25 0 .69-.56 1.25-1.25 1.25a1.25 1.25 0 0 1 0-2.5zM7.77 8.4a3.21 3.21 0 0 1 3.21-3.21c.72 0 1.41.21 2 .58.03-.01.07-.02.11-.02s.08.01.12.01c1.03.07 1.94.53 2.59 1.19.1.1.26.1.36 0 .1-.1.1-.26 0-.36-.8-.8-1.89-1.31-3.11-1.4-.04-.01-.08-.02-.12-.02s-.08.01-.12-.02c-1.22.09-2.31.6-3.11 1.4-.1.1-.1.26 0 .36.1.1.26.1.36 0zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.56a9.77 9.77 0 0 0 4.5 0c1.06 2.57 3.14 4.58 5.74 5.56.01.05.01.1.01.15 0 4.41-3.59 8-8 8z"/>
  </svg>
);

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
          <Link to="/login">
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hidden md:inline-flex">
              Log In
            </Button>
          </Link>
          <Link to="/services">
            <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white text-sm px-3 py-2 md:px-4 md:py-2">
              All Services
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Services Navigation */}
      <nav className="bg-brand-primary-500 py-2 border-t border-brand-primary-600">
        <div className="container mx-auto px-4 flex items-center justify-start space-x-6 text-sm text-white overflow-x-auto pb-2">
          <Link to="/" className="flex items-center p-2 rounded-md text-white hover:bg-brand-secondary-blue hover:text-white transition-all duration-200 ease-in-out hover:scale-105 flex-shrink-0">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          
          {loadingServices ? (
            <span className="text-white/70">Loading services...</span>
          ) : (
            Object.entries(servicesByPlatform).map(([platform, items]) => {
              const Icon = categoryIcons[platform];
              
              return (
                <DropdownMenu key={platform}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="flex items-center space-x-1 hover:bg-brand-secondary-blue hover:text-white transition-all duration-200 ease-in-out hover:scale-105 flex-shrink-0"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      <span>{platform}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[200px]">
                    {items.map((item) => (
                      <Link to={`/services/${item.platform.toLowerCase()}/${item.path}`} key={item.id}>
                        <DropdownMenuItem className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover cursor-pointer">
                          {item.service_name}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })
          )}
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;