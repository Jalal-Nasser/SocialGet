import React from 'react';

const RedditLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 0C6.477 0 2 4.477 2 10C2 13.92 4.47 17.31 8 18.83V24L12 20L16 24V18.83C19.53 17.31 22 13.92 22 10C22 4.477 17.523 0 12 0ZM17.5 13.5C16.67 13.5 16 12.83 16 12C16 11.17 16.67 10.5 17.5 10.5C18.33 10.5 19 11.17 19 12C19 12.83 18.33 13.5 17.5 13.5ZM6.5 13.5C5.67 13.5 5 12.83 5 12C5 11.17 5.67 10.5 6.5 10.5C7.33 10.5 8 11.17 8 12C8 12.83 7.33 13.5 6.5 13.5Z" fill="currentColor"/>
  </svg>
);

export default RedditLogo;