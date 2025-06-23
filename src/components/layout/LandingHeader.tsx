// ... other imports ...
import { MessageSquare } from 'lucide-react';

// Add this custom Reddit icon component
const RedditIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.74c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 1.25-1.25zM9.71 6.05c.69 0 1.25.56 1.25 1.25 0 .69-.56 1.25-1.25 1.25a1.25 1.25 0 0 1 0-2.5zM7.77 8.4a3.21 3.21 0 0 1 3.21-3.21c.72 0 1.41.21 2 .58.03-.01.07-.02.11-.02s.08.01.12.01c1.03.07 1.94.53 2.59 1.19.1.1.26.1.36 0 .1-.1.1-.26 0-.36-.8-.8-1.89-1.31-3.11-1.4-.04-.01-.08-.02-.12-.02s-.08.01-.12.02c-1.22.09-2.31.6-3.11 1.4-.1.1-.1.26 0 .36.1.1.26.1.36 0zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.56a9.77 9.77 0 0 0 4.5 0c1.06 2.57 3.14 4.58 5.74 5.56.01.05.01.1.01.15 0 4.41-3.59 8-8 8z"/>
  </svg>
);

const LandingHeader: React.FC = () => {
  // ... other code ...

  const categoryIcons: { [key: string]: React.ElementType } = {
    // ... other icons ...
    Reddit: RedditIcon, // Using our custom SVG
    // ... 
  };
  
  // ... rest of component ...
};
export default LandingHeader;