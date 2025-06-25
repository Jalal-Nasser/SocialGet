import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import OngoingProjectSlider from '@/components/OngoingProjectSlider';

const LandingHeader = () => {
  return (
    <>
      <OngoingProjectSlider />
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">SocialGet</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link to="/services" className="hover:text-brand-primary-500 transition-colors">
                Services
              </Link>
              <Link to="/blog" className="hover:text-brand-primary-500 transition-colors">
                Blog
              </Link>
              <Link to="/about-us" className="hover:text-brand-primary-500 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-brand-primary-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search services..."
                className="pl-10 w-full sm:w-[200px] md:w-[300px]"
              />
            </div>
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="hidden md:flex bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
                Client Portal
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;