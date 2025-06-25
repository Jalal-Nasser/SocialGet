import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

const LandingHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">SocialGet</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/about-us" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link to="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Blog
            </Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
          <Link to="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;