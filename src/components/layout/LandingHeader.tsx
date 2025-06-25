import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { fetchServices } from '@/lib/services';

const LandingHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">SocialGet</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Services
            </Link>
            <Link to="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Blog
            </Link>
            <Link to="/about-us" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About Us
            </Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader; // This is the crucial fix