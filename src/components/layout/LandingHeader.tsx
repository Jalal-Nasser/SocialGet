import React from 'react';
import { 
  Search, ChevronDown, Twitter, Instagram, Youtube, Linkedin, Facebook,
  MoreHorizontal, Wrench, MessageSquare, Play, Home, Music, Send
} from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import LogoImage from '@/assets/logo.png';
import OngoingProjectSlider from '@/components/OngoingProjectSlider';
import ThemeToggle from '@/components/ThemeToggle';
import { services } from '@/data/servicesData';

const LandingHeader: React.FC = () => {
  const categories = [
    'Twitter', 'Instagram', 'YouTube', 'TikTok', 'Facebook', 
    'Spotify', 'Telegram' // Removed 'Other' from this list
  ];

  const categoryIcons: { [key: string]: React.ElementType } = {
    Twitter: Twitter,
    Instagram: Instagram,
    YouTube: Youtube,
    TikTok: Play,
    Facebook: Facebook,
    Spotify: Music,
    Telegram: Send
    // Removed 'Other' icon mapping
  };

  const getSubcategories = (platform: string) => {
    return services
      .filter(service => service.platform === platform)
      .map(service => ({
        name: service.serviceName,
        path: `/services/${service.platform.toLowerCase()}/${service.path}`,
      }));
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
          
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const subcategories = getSubcategories(category);
            
            return (
              <DropdownMenu key={category}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="flex items-center space-x-1 hover:bg-brand-secondary-blue hover:text-white transition-all duration-200 ease-in-out hover:scale-105 flex-shrink-0"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{category}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[200px]">
                  {subcategories.length > 0 ? (
                    subcategories.map((sub, index) => (
                      <Link to={sub.path} key={index}>
                        <DropdownMenuItem className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover cursor-pointer">
                          {sub.name}
                        </DropdownMenuItem>
                      </Link>
                    ))
                  ) : (
                    <DropdownMenuItem className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover cursor-pointer">
                      Coming Soon
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;