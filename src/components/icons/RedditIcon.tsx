import React from 'react';

const RedditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0C6.477 0 2 4.477 2 10c0 3.72 2.42 6.84 5.77 8.12-.03.2-.05.4-.05.6v2.28c0 .4.32.72.72.72h.01c.39 0 .71-.32.71-.72v-1.88c0-.2.02-.4.05-.6 3.35-1.28 5.77-4.4 5.77-8.12C22 4.477 17.523 0 12 0zm-3.5 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    <circle cx="8.5" cy="12" r="1.5" />
    <circle cx="15.5" cy="12" r="1.5" />
  </svg>
);

export default RedditIcon;