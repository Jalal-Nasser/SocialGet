import React from 'react';

const RedditLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0C6.477 0 2 4.477 2 10c0 3.313 1.602 6.24 4.083 8.117L4 22l4.083-2.117C9.83 20.58 10.88 21 12 21c5.523 0 10-4.477 10-10S17.523 0 12 0zm-3.117 14.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm6.234 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM12 17.5c-2.33 0-4.313-1.456-5.193-3.5h10.386c-.88 2.044-2.863 3.5-5.193 3.5z" fill="currentColor"/>
  </svg>
);

export default RedditLogo;