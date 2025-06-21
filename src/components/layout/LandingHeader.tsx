import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const LandingHeader: React.FC = () => {
  const categories = ['Twitter', 'Reddit', 'Instagram', 'TikTok', 'Youtube', 'LinkedIn', 'Facebook', 'Spotify', 'Other', 'Tools'];

  const twitterSubcategories = [
    "Twitter followers",
    "Twitter USA Followers",
    "Twitter Likes",
    "Twitter Comments",
    "Twitter Retweets",
    "Twitter Views",
    "Twitter Impressions",
    "Twitter Spaces Listeners",
    "Twitter Poll Votes",
    "Twitter Bookmarks",
    "Twitter Mentions"
  ];

  const redditSubcategories = [
    "Post & Comment Upvotes",
    "Post & Comment Downvotes",
    "Post & Comment Awards",
    "Accounts",
    "Reddit Comments"
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold text-green-500">Socialplug</Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Right Section: Login, All Services, Language */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              Log In
            </Button>
          </Link>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            All Services
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                <img src="https://flagcdn.com/us.svg" alt="US Flag" className="h-4 w-6 rounded-sm" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              {/* Add more languages as needed */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Secondary Navigation (Categories) */}
      <nav className="bg-gray-50 dark:bg-gray-800 py-2 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 flex items-center justify-center space-x-6 text-sm text-gray-700 dark:text-gray-300">
          {categories.map((category) => (
            <DropdownMenu key={category}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span>{category}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {category === 'Twitter' ? (
                  twitterSubcategories.map((sub, index) => (
                    <DropdownMenuItem key={index}>{sub}</DropdownMenuItem>
                  ))
                ) : category === 'Reddit' ? (
                  redditSubcategories.map((sub, index) => (
                    <DropdownMenuItem key={index}>{sub}</DropdownMenuItem>
                  ))
                ) : (
                  <>
                    <DropdownMenuItem>Sub-category 1</DropdownMenuItem>
                    <DropdownMenuItem>Sub-category 2</DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;