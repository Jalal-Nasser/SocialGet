import React from 'react';
import { 
  Search, ChevronDown, Twitter, Instagram, Youtube, Linkedin, Facebook, Github,
  MoreHorizontal, Wrench, MessageSquare, Music
} from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const LandingHeader: React.FC = () => {
  const categories = ['Twitter', 'Reddit', 'Instagram', 'TikTok', 'Youtube', 'LinkedIn', 'Facebook', 'Github'];

  // Mapping for icons
  const categoryIcons: { [key: string]: React.ElementType } = {
    Twitter: Twitter,
    Reddit: MessageSquare,
    Instagram: Instagram,
    TikTok: Music,
    Youtube: Youtube,
    LinkedIn: Linkedin,
    Facebook: Facebook,
    Github: Github,
    Other: MoreHorizontal,
    Tools: Wrench,
  };

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

  const instagramSubcategories = [
    "Followers",
    "Likes",
    "Views",
    "Auto Likes",
    "Comments",
    "Comment Likes",
    "Custom Comments",
    "Reel Views",
    "Reel Likes",
    "Live Views",
    "Saves",
    "Shares",
    "Story Poll Votes",
    "Comment Replies",
    "Impressions",
    "Profile Visits",
    "Story Views",
    "Channel Members"
  ];

  const tiktokSubcategories = [
    "Followers",
    "Likes",
    "Views",
    "Comments",
    "Comment Replies",
    "Custom Comments",
    "Shares",
    "Auto Views",
    "Live Views",
    "Saves",
    "Coins"
  ];

  const youtubeSubcategories = [
    "Views",
    "Likes",
    "Subscribers",
    "Comments",
    "Favourites",
    "Shares",
    "Comment Repliess",
    "Watch Hours",
    "Dislikes",
    "Poll Votes",
    "Live Stream Views"
  ];

  const linkedinSubcategories = [
    "Connections",
    "Followers",
    "Likes",
    "Comments",
    "Views",
    "Reactions",
    "Shares",
    "Endorsements",
    "Employees",
    "Group Members"
  ];

  const facebookSubcategories = [
    "Followers",
    "Likes",
    "Views",
    "Comments",
    "Comment Likes",
    "Post Shares",
    "Reactions",
    "Event Attendees",
    "Reviews",
    "Poll Votes",
    "Friend Requests",
    "Group Members",
    "Live Viewers"
  ];

  const githubSubcategories = [
    "Stars",
    "Followers",
    "Forks"
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold text-brand-primary-500">SocialGet</Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-brand-primary-500 focus:border-brand-primary-500"
          />
        </div>

        {/* Right Section: Login, All Services, Language */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              Log In
            </Button>
          </Link>
          <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white">
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
      <nav className="bg-brand-primary-500 py-2 border-t border-brand-primary-600">
        <div className="container mx-auto px-4 flex items-center justify-center space-x-6 text-sm text-white">
          {categories.map((category) => {
            const Icon = categoryIcons[category]; // Get the icon component
            return (
              <DropdownMenu key={category}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="flex items-center space-x-1 hover:bg-brand-primary-600 text-white transition-all duration-200 ease-in-out hover:scale-105 hover:text-brand-primary-100"
                  >
                    {Icon && <Icon className="h-4 w-4" />} {/* Render icon if available */}
                    <span>{category}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {category === 'Twitter' ? (
                    twitterSubcategories.map((sub, index) => (
                      <DropdownMenuItem key={index} className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">
                        {sub}
                      </DropdownMenuItem>
                    ))
                  ) : category === 'Reddit' ? (
                    redditSubcategories.map((sub, index) => (
                      <DropdownMenuItem key={index} className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">
                        {sub}
                      </DropdownMenuItem>
                    ))
                  ) : category === 'Instagram' ? (
                    instagramSubcategories.map((sub, index) => (
                      <DropdownMenuItem key={index} className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">
                        {sub}
                      </DropdownMenuItem>
                    ))
                  ) : category === 'TikTok' ? (
                    tiktokSubcategories.map((sub, index) => (
                      <DropdownMenuItem key={index} className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">
                        {sub}
                      </DropdownMenuItem>
                    ))
                  ) : category === 'Youtube' ? (
                    youtubeSubcategories.map((sub, index) => (
                      <DropdownMenuItem key={index} className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">
                        {sub}
                      </DropdownMenuItem>
                    ))
                  ) : category === 'LinkedIn' ? (
                    linkedinSubcategories.map((sub, index) => (
                      <DropdownMenuItem key={index} className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">
                        {sub}
                      </DropdownMenuItem>
                    ))
                  ) : category === 'Facebook' ? (
                    facebookSubcategories.map((sub, index) => (
                      <DropdownMenuItem key={index} className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">
                        {sub}
                      </DropdownMenuItem>
                    ))
                  ) : category === 'Github' ? (
                    githubSubcategories.map((sub, index) => (
                      <DropdownMenuItem key={index} className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">
                        {sub}
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <>
                      <DropdownMenuItem className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">Sub-category 1</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-dropdown-hover data-[highlighted]:bg-dropdown-hover">Sub-category 2</DropdownMenuItem>
                    </>
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